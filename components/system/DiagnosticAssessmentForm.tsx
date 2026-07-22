"use client";

import { useState, type FormEvent } from "react";
import {
  CTA_WHATSAPP_ASSESS_LABEL,
  MAILTO_ASSESS,
  OCTUS_EMAIL,
  WHATSAPP_ASSESS_URL,
} from "../../lib/cta";

/**
 * Institutional assessment intake for static export.
 * Submits a structured mailto trail — no CRM dependency, no outcome guarantees.
 */
export default function DiagnosticAssessmentForm() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const role = String(fd.get("role") || "").trim();
    const jurisdiction = String(fd.get("jurisdiction") || "").trim();
    const situation = String(fd.get("situation") || "").trim();

    const body = [
      "Octus assessment request",
      "",
      `Name: ${name}`,
      `Company: ${company}`,
      `Role: ${role}`,
      `Jurisdiction / market: ${jurisdiction}`,
      "",
      "Situation:",
      situation,
      "",
      "— Sent from octusconsulting.com/diagnostic",
    ].join("\n");

    const href = `${MAILTO_ASSESS}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus("opened");
  }

  return (
    <div className="diagnostic-form rounded-sm border border-border bg-background p-6 md:p-8">
      <p className="section-label mb-3 block">Assessment request</p>
      <h3 className="heading-sm mb-3">Tell us about the operation</h3>
      <p className="body-text mb-6 text-muted-foreground">
        Share the challenge or market objective. Our team will assess the appropriate path forward.
        This is not an automated decision and does not guarantee licensing, banking or regulatory
        outcomes.
      </p>

      <form className="flex flex-col gap-4" onSubmit={onSubmit} noValidate={false}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-1.5 font-sans text-sm">
            <span className="font-medium text-foreground">Name</span>
            <input
              name="name"
              required
              autoComplete="name"
              className="diagnostic-form__input h-11 rounded-sm border border-border bg-background px-3 text-foreground outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            />
          </label>
          <label className="flex flex-col gap-1.5 font-sans text-sm">
            <span className="font-medium text-foreground">Company</span>
            <input
              name="company"
              required
              autoComplete="organization"
              className="diagnostic-form__input h-11 rounded-sm border border-border bg-background px-3 text-foreground outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            />
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-1.5 font-sans text-sm">
            <span className="font-medium text-foreground">Role</span>
            <input
              name="role"
              className="diagnostic-form__input h-11 rounded-sm border border-border bg-background px-3 text-foreground outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            />
          </label>
          <label className="flex flex-col gap-1.5 font-sans text-sm">
            <span className="font-medium text-foreground">Jurisdiction / market</span>
            <input
              name="jurisdiction"
              className="diagnostic-form__input h-11 rounded-sm border border-border bg-background px-3 text-foreground outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            />
          </label>
        </div>
        <label className="flex flex-col gap-1.5 font-sans text-sm">
          <span className="font-medium text-foreground">Situation</span>
          <textarea
            name="situation"
            required
            rows={5}
            placeholder="What is blocked, delayed or exposed?"
            className="diagnostic-form__input rounded-sm border border-border bg-background px-3 py-2.5 text-foreground outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          />
        </label>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Submit assessment request →
          </button>
          <a
            href={WHATSAPP_ASSESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-sm border border-border px-8 text-base font-medium text-primary transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {CTA_WHATSAPP_ASSESS_LABEL}
          </a>
        </div>
        <p className="font-sans text-xs text-muted-foreground">
          Submits a structured email to {OCTUS_EMAIL}. WhatsApp remains available for a direct
          conversation.
        </p>
        {status === "opened" && (
          <p className="font-sans text-sm text-foreground" role="status">
            Your email client should open with the assessment details. If it does not, write to{" "}
            {OCTUS_EMAIL}.
          </p>
        )}
      </form>
    </div>
  );
}
