import { NextResponse } from "next/server";

function scoreLead(data: { email: string; company: string; operation: string; jurisdictions: string; stage: string; situation: string }) {
  let score = 0;
  const signals: string[] = [];
  const text = `${data.company} ${data.operation} ${data.jurisdictions} ${data.stage} ${data.situation}`.toLowerCase();

  // Core sectors
  if (text.includes("igaming") || text.includes("bet") || text.includes("casino") || text.includes("gaming")) { score += 2; signals.push("iGaming"); }
  if (text.includes("fintech") || text.includes("payment")) { score += 2; signals.push("Fintech"); }
  if (text.includes("crypto") || text.includes("token") || text.includes("vasp")) { score += 2; signals.push("Crypto"); }

  // Structural signals
  if (text.includes("licen")) { score += 2; signals.push("licensing"); }
  if (text.includes("jurisdiction")) { score += 2; signals.push("jurisdiction"); }
  if (text.includes("compliance")) { score += 2; signals.push("compliance"); }
  if (text.includes("structur")) { score += 2; signals.push("structuring"); }
  if (text.includes("banking") || text.includes("bank account")) { score += 2; signals.push("banking"); }

  // Maturity
  if (text.includes("expansion") || text.includes("scale")) { score += 1; signals.push("expansion"); }
  if (text.includes("international") || text.includes("cross-border") || text.includes("multi")) { score += 1; signals.push("international"); }

  // Email quality (corporate > generic)
  const genericDomains = ["gmail", "hotmail", "yahoo", "outlook", "icloud", "protonmail", "aol"];
  const isGeneric = genericDomains.some((d) => data.email.toLowerCase().includes(`@${d}`));
  if (!isGeneric && data.email.includes("@")) { score += 1; }
  if (isGeneric) { score -= 1; }

  // Company quality
  if (data.company.length < 3) score -= 1;

  // Form completeness
  if (data.operation) score += 1;
  if (data.jurisdictions && data.jurisdictions.length > 3) score += 1;

  const priority = score >= 6 ? "HIGH" : score >= 3 ? "MEDIUM" : "LOW";
  return { priority, signals: signals.slice(0, 3) };
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, company, operation, jurisdictions, stage, situation, _honey } = data;

    if (_honey) return NextResponse.json({ success: true });

    if (!name || !email || !company || !situation) {
      return NextResponse.json({ error: "Name, email, company and situation are required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Octus Website <diagnostics@octusconsulting.com>";
    const toEmail = process.env.DIAGNOSTIC_TO_EMAIL || "info@octusconsulting.com";

    if (!apiKey && process.env.NODE_ENV === "production") {
      console.error("RESEND_API_KEY not configured in production");
      return NextResponse.json({ error: "Form service not configured." }, { status: 500 });
    }

    const { priority, signals } = scoreLead({ email, company, operation, jurisdictions, stage, situation });
    const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";
    const subject = `[${priority}] ${company} — Diagnostic Request`;

    if (!apiKey) {
      console.log(`── DEV: ${subject} ──`);
      console.log(JSON.stringify(data, null, 2));
      return NextResponse.json({ success: true, dev: true });
    }

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;max-width:600px;">

  <p style="margin:0 0 16px;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:#888;">Lead Intelligence</p>
  <p style="margin:0 0 4px;font-size:14px;"><strong>Priority:</strong> ${priority}</p>
  <p style="margin:0 0 16px;font-size:13px;color:#888;">${signals.length > 0 ? "Signals: " + signals.join(", ") : ""}</p>

  <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />

  <p style="margin:0 0 4px;font-size:13px;color:#888;">Name</p>
  <p style="margin:0 0 12px;font-size:14px;">${name}</p>

  <p style="margin:0 0 4px;font-size:13px;color:#888;">Email</p>
  <p style="margin:0 0 12px;font-size:14px;"><a href="mailto:${email}" style="color:#0062de;">${email}</a></p>

  <p style="margin:0 0 4px;font-size:13px;color:#888;">Company</p>
  <p style="margin:0 0 12px;font-size:14px;">${company}</p>

  <p style="margin:0 0 4px;font-size:13px;color:#888;">Operation</p>
  <p style="margin:0 0 12px;font-size:14px;">${operation || "—"}</p>

  <p style="margin:0 0 4px;font-size:13px;color:#888;">Jurisdictions</p>
  <p style="margin:0 0 12px;font-size:14px;">${jurisdictions || "—"}</p>

  <p style="margin:0 0 4px;font-size:13px;color:#888;">Blocked at</p>
  <p style="margin:0 0 20px;font-size:14px;">${stage || "—"}</p>

  <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />

  <p style="margin:0 0 4px;font-size:13px;color:#888;">Situation</p>
  <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap;">${situation}</p>

  <p style="margin:32px 0 0;color:#bbb;font-size:11px;">${timestamp} · octusconsulting.com</p>

</div>
        `,
      }),
    });

    if (!emailRes.ok) {
      const err = await emailRes.json();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Email delivery failed." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Diagnostic form error:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
