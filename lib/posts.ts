export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  author?: string;
  excerpt: string;
  content: string;
  related?: Array<{ label: string; href: string }>;
  cta?: { label: string; href: string };
}

export const posts: Post[] = [
  {
    slug: "stf-suspends-blocking-of-bolsa-familia-bpc-betting-accounts",
    title: "STF Suspends Compulsory Blocking of Bolsa Família and BPC Beneficiaries' Betting Accounts",
    date: "2025-12-19",
    category: "Brazil Regulatory",
    author: "Larissa Carvalho",
    excerpt: "Justice Luiz Fux temporarily suspended the compulsory closure of existing betting accounts held by Bolsa Família and BPC beneficiaries, pending a conciliation hearing scheduled for February 2026.",
    content: `Justice Luiz Fux of the Supreme Court (STF) temporarily suspended the compulsory blocking and closure of existing betting accounts held by beneficiaries of the Bolsa Família programme and the Continuous Care Benefit (BPC). The decision was issued on 19 December 2025, in the context of Direct Unconstitutionality Action (ADI) No. 7,721, following a petition by the National Association of Games and Lotteries (ANJL).

The measure does not fully revoke the restrictions imposed by the Secretariat of Prizes and Betting (SPA/MF), but establishes a temporary halt to their most severe effects. **Suspended until the completion of a conciliation hearing are the operational obligations requiring the blocking and compulsory closure of already-existing accounts. However, the prohibition on creating new registrations or opening new accounts for beneficiaries of these social programmes remains in force, as established by Normative Instruction SPA/MF No. 22/2025.**

**Regulatory context**

ADI 7,721 is situated within the broader regulatory framework for fixed-odds betting in Brazil, inaugurated by Law No. 14,790/2023 and developed through a series of ordinances by the Ministry of Finance through the SPA. The executive branch's stated objective has been to structure a regulated market with consumer protection mechanisms, problem gambling prevention, anti-money laundering controls, and protection of sensitive public policies such as income transfer programmes.

The ANJL argued that the normative acts went beyond the limits of the STF's prior injunction. By ordering the compulsory closure of existing accounts, the Ministry of Finance allegedly exceeded what the Court had authorised, creating immediate operational obligations with potentially irreversible consequences and violating constitutional principles including economic freedom, equality before the law, and proportionality.

**Practical implications**

With the STF's decision, the practical landscape is temporarily reorganised:

- Bolsa Família and BPC beneficiaries who already held active accounts before the Ministry of Finance's regulations may continue to use them, including those affected by restrictions imposed between 1 and 19 December;
- No new registrations or account openings are permitted for this group during the partial suspension period;
- The rules remain in effect until the conciliation hearing, brought forward to 10 February 2026;
- The substantive controversy remains to be analysed by the STF, particularly regarding the constitutionality of restrictions imposed by sub-legal acts and the limits of administrative regulatory power.

The ABLE (Brazilian Association of State Lotteries) had also submitted representations to the STF on 1 December, flagging what it described as regulatory excess and implementation failures. According to ABLE, the restrictions were affecting individuals not actually receiving social benefits but listed as dependants in official databases, raising questions about the reliability of the data used as automatic criteria for rights restrictions.

The decision does not resolve the debate, but temporarily redefines its contours.`,
  },
  {
    slug: "senate-approves-plp-128-2025-tightens-fiscal-policy-bets-fintechs",
    title: "Senate Approves PLP 128/2025: Fiscal Tightening, Higher Taxation on Bets, Fintechs and JCP",
    date: "2025-12-19",
    category: "Brazil Regulatory",
    author: "Larissa Carvalho",
    excerpt: "The Brazilian Senate approved Complementary Bill 128/2025 by 62 to 6 votes, introducing a gradual increase in the betting sector tax rate from 12% to 15% by 2028, alongside higher CSLL rates for fintechs and joint liability for payment processors facilitating illegal operators.",
    content: `The Senate plenary approved, on the evening of 17 December, the bill reducing federal tax incentives by 10% across various economic sectors while simultaneously increasing taxation on betting operators (bets), fintechs and interest on net equity (JCP). The approved text now proceeds to presidential assent. Complementary Bill No. 128/2025 was approved by a wide margin — 62 votes in favour and 6 against — with Senator Randolfe Rodrigues (PT-AP) as rapporteur.

**Structural changes to fiscal policy**

PLP 128/2025 introduces significant changes to the Fiscal Responsibility Law (LC No. 101/2000), establishing stricter criteria for granting, expanding and extending tax, financial and credit incentives. Under the new Article 14-A of the LRF, any legislative proposal implying tax revenue waiver in favour of legal entities must include an estimate of the number of beneficiaries, a validity period (as a rule limited to five years), objective and measurable performance targets, and monitoring and evaluation mechanisms.

The main overall impact is a **linear 10% reduction of federal tax incentives and benefits**, affecting PIS/Pasep, Cofins, IPI, IRPJ, CSLL, Import Tax and employer social security contributions.

**Impact on the betting sector**

For the **fixed-odds betting sector**, PLP 128/2025 represents one of the most significant fiscal and regulatory tightenings approved to date. The current rate of **12%** will be gradually increased to **13% in 2026**, **14% in 2027** and **15% from 2028 onwards**. The additional revenue is split: 50% directed to social security and 50% to public health actions.

Beyond the rate increase, the bill significantly tightens enforcement mechanisms by establishing **joint and several tax liability**. Financial institutions, payment institutions, fintechs, payment service providers and other intermediaries may be held jointly liable for taxes on bets and prizes if they continue facilitating transactions with **unauthorised operators** after formal notification by the competent authority. The same liability applies to individuals or entities engaged in advertising or promotion of illegal betting operations, extending legal risk to digital platforms, influencers, marketing agencies and media outlets.

**Impact on fintechs and financial institutions**

For **fintechs, payment institutions and other financial sector entities**, the principal negative impact is the **increase in the Social Contribution on Net Income (CSLL)**. Credit, financing and investment companies (fintechs) and capitalisation companies, currently paying **15%**, will move to **17.5% until 31 December 2027** and **20% from 1 January 2028**. Entities currently paying **9%** CSLL will move to **12% until 2027** and **15% from 2028**.

**JCP taxation**

The bill also raises the **withholding income tax rate on Interest on Net Equity (JCP)** from **15% to 17.5%**, reducing the tax advantage of this instrument widely used by companies to remunerate shareholders.

**Summary**

PLP 128/2025 consolidates a structural shift in Brazilian fiscal policy, combining **reduced tax incentives, direct rate increases and expanded legal liabilities**. For bets, fintechs and financial institutions, the new landscape implies greater tax burden, increased regulatory risk exposure and elevated compliance requirements. Companies in these segments should review business models, corporate structures, advertising policies and control systems to mitigate impacts and avoid material liabilities in a significantly more rigorous legal and fiscal environment from 2026 onwards.`,
  },
  {
    slug: "betting-taxation-risks-senate-legal-certainty-regulated-market",
    title: "Betting Sector Taxation: The Risks of Increased Tax Burden for Legal Certainty and the Regulated Market",
    date: "2025-12-17",
    category: "Regulatory Analysis",
    author: "Daniel Cruz Fonseca",
    excerpt: "A technical analysis of the risks posed by a sharp increase in the betting sector's tax burden — why higher taxation does not automatically translate to higher revenue, and what the international experience teaches about building a sustainable regulated market.",
    content: `The Federal Senate was set to analyse, on 17 December 2025, Bill No. 128/2025, proposing a gradual increase in the taxation applied to Brazil's regulated betting sector. Currently set at 12% — close to the global standard — the rate could reach significantly higher levels by 2028, with discussions pointing toward 15%.

The debate on taxation is legitimate and necessary. However, when dealing with a recently regulated sector that is investment-intensive and still in its consolidation phase, the choice of path demands caution, technical analysis and long-term vision.

**Higher taxation does not automatically mean higher revenue**

One of the principal challenges facing the Brazilian betting market is the significant presence of illegal platforms. It is estimated that approximately 60% of players still use unauthorised operators that operate outside the regulatory framework, pay no taxes, adopt no responsible gambling policies and offer no consumer protection — according to data from Instituto Locomotiva and Instituto Brasileiro de Jogo Responsável (IBJR).

In this context, raising the tax burden on operators who have already regularised their position may produce the opposite of the intended effect. Rather than expanding the contributor base, an abrupt tax increase tends to reduce the competitiveness of the legal market, discourage new investments and strengthen the illegal ecosystem — which operates with no regulatory costs, no oversight and no institutional accountability.

International experience demonstrates that efficient taxation is not the same as maximum taxation. Countries that successfully consolidated regulated betting markets opted for balanced models capable of raising revenue, protecting consumers and, above all, structurally reducing the space occupied by illegal operators.

**Direct impact on investments and legal certainty**

Regulatory predictability is one of the pillars of legal certainty. Operators who entered the Brazilian market did so on the basis of a recently established regulatory framework that demanded significant investments in technology, compliance, anti-money laundering, governance, data protection and local operational structures.

When this environment undergoes abrupt changes — particularly in the tax field, without a proportional and previously signalled transition — the logic of confidence that underpins long-term investment decisions is ruptured. The immediate effect is not only economic but institutional: investors begin pricing regulatory risk as a central factor, making operations more expensive, restraining new capital and reducing the willingness of companies to expand or even maintain local structures.

**Employment and economic impact**

The gaming and betting industry in Brazil is no longer a marginal phenomenon. Today it sustains a broad and cross-sectoral economic chain involving technology, payment systems, marketing, advertising, sport, consumer services and specialised legal and regulatory services.

According to the study *Panorama do Mercado de Apostas de Quota Fixa* by LCA Consultores Econômica and Cruz Consulting — commissioned by IBJR and ANJL — direct employment in legalised betting generates approximately BRL 460 million per year in wages, plus BRL 87 million in social security contributions.

**The path to strengthening the legal market**

Strengthening the regulated market does not mean penalising those who chose legality. On the contrary: it requires a balanced tax environment capable of stimulating regularisation, expanding the contributor base and structurally reducing the attractiveness of the illegal market.

An intelligent regulation combines revenue collection, legal certainty, consumer protection and incentives for responsible investment. International models demonstrate that moderate rates, combined with rigorous oversight, effective sanctions and technological monitoring, are far more efficient at guaranteeing sustained revenue collection, combating illegality and protecting consumers.

**Octus position**

At Octus, we closely follow the normative evolution of the gaming and betting sector and work daily alongside operators who have chosen the path of legality, transparency and institutional responsibility. We advocate for technical, rational and data-driven regulation that considers the economic, social and competitive impacts of legislative decisions.`,
  },
  {
    slug: "new-spa-mf-normative-instruction-fixed-odds-betting",
    title: "New SPA/MF Normative Instruction on Fixed-Odds Betting: Post-Licensing Obligations",
    date: "2025-12-17",
    category: "Brazil Regulatory",
    author: "Caroline Giovanetti",
    excerpt: "The Secretariat of Prizes and Betting published a new Normative Instruction establishing the procedures for authorised fixed-odds betting operators to communicate changes to their licence conditions and notify the commencement of operational activities.",
    content: `The Secretariat of Prizes and Betting of the Ministry of Finance (SPA/MF) published a new Normative Instruction governing the procedures to be followed by authorised fixed-odds betting operators for the communication of: (i) changes to the conditions that formed the basis of their authorisation; and (ii) the commencement of their operational activities.

The instruction is grounded in Laws No. 13,756/2018 and No. 14,790/2023, as well as Ordinances SPA/MF No. 300/2024, No. 722/2024, No. 827/2024, No. 2,104/2024 and Normative Instructions SPA/MF No. 11/2024 and No. 3/2025.

**Classification of communications**

The Normative Instruction classifies communications into two broad groups:

(i) **Changes that only take effect after SPA/MF approval**, such as modifications to commercial brands, operating scope and modalities, .bet.br domains and the platform provider;

(ii) **Changes or actions that take immediate effect** without prior approval, such as changes to financial and payment institutions, directors, corporate name, registered address, corporate reorganisations, and commencement of operations or exploitation of new brands.

**Timelines and documentation**

Objective deadlines for notification to SPA/MF are established — as a rule, between ten and thirty days, depending on the nature of the change. The instruction specifies in detail the documents required for each type of communication, including standardised forms, system technical certifications, compliance reports, migration and business continuity plans, data preservation confirmations, and corporate and governance documentation.

Communications must be submitted through the Electronic Information System (SEI), with planned future migration to the Betting Management System (SIGAP). SPA/MF analysis may extend up to 150 days, with the deadline suspended if additional documentation is requested.

The instruction also establishes relevant formal provisions, including the prohibition on changing the operator's tax identification number (CNPJ) during the authorisation period, rules for presenting foreign documents, certificate validity periods and power of attorney requirements.

**Significance**

This is a central regulatory instrument for the consolidation of the post-licensing regime for fixed-odds betting in Brazil, with direct impact on governance, regulatory compliance and the legal certainty of authorised operations. Operators should review all structural changes made or planned since receiving their licence to ensure compliance with the new communication obligations.`,
  },
  {
    slug: "centralised-self-exclusion-platform-key-changes-operators-bettors",
    title: "Centralised Self-Exclusion Platform: Key Changes for Operators and Bettors",
    date: "2025-12-15",
    category: "Brazil Regulatory",
    author: "Larissa Carvalho",
    excerpt: "From 10 December 2025, the Centralised Self-Exclusion Platform entered into operation, enabling any person to block access to all authorised betting sites in Brazil through a single procedure at gov.br/autoexclusaoapostas.",
    content: `From **10 December 2025**, the **Centralised Self-Exclusion Platform** officially entered operation — a system created by the Secretariat of Prizes and Betting (SPA-MF) enabling any person to block, in a single step, access to **all authorised betting sites in Brazil**.

**Regulatory background**

Responsible gambling had been addressed since **Ordinance SPA/MF No. 1,231 of 31 July 2024**, which established guidelines requiring operators to offer self-limitation tools and session duration and value alerts. That ordinance already required licensed platforms to provide their own self-exclusion mechanisms.

On **7 November 2025**, SPA published **Ordinance SPA/MF No. 2,579/2025**, amending Ordinance No. 1,231/2024 to regulate in greater detail the self-exclusion mechanism, providing for two modalities: **specific self-exclusion** (applied individually at each operator) and **centralised self-exclusion** (blocking the bettor's CPF across all authorised platforms).

Simultaneously, **Normative Instruction SPA/MF No. 31 of 7 November 2025** was published, defining the technical and operational procedures operators must follow to prevent the registration or use of their systems by persons registered in the centralised self-exclusion system.

**How the system works**

Operators must consult the **Betting Management System (SIGAP)** to verify — whenever a new registration is opened or on a user's first login of the day — whether the user's CPF appears in the centralised self-exclusion database. This consultation is **mandatory** and must block access automatically for those flagged. Periodic cross-checks (at least every fifteen days) of all registered users against the self-exclusion database are also required.

**For bettors**, the platform is accessible via **gov.br/autoexclusaoapostas** using a Gov.br Silver or Gold level account. Available options include self-exclusion periods from **1 to 12 months** (irrevocable until expiry) or **indefinite self-exclusion** (reversible within 30 days of registration). Upon completion, the bettor receives a confirmation document and all authorised operators are automatically notified. Operators have **up to 72 hours** to implement the technical block.

**Mandatory self-limits at registration**

Ordinance No. 2,579/2025 also requires operators to implement, **at the point of registration**, mandatory self-limits — bettors must define **usage time limits** and **wagering value limits** as a preventive measure before any betting activity begins.

**Compliance timeline**

Operators received a **30-day period** to adjust mandatory verification and blocking mechanisms via SIGAP consultation, and a further **90-day period** for more complex technical adjustments. Non-compliance exposes operators to regulatory sanctions.

**Significance**

The centralised platform represents a meaningful advancement in responsible gambling policy, offering a simple and reliable tool to reduce addiction risks and control spending — while eliminating the need to apply individually at each platform. For the market, it means heightened technical responsibility and more rigorous user protection standards.`,
  },
  {
    slug: "stf-suspends-municipal-lottery-operations-nationwide",
    title: "STF Suspends Municipal Lottery Operations Nationwide, Orders Immediate Cessation",
    date: "2025-12-04",
    category: "Brazil Regulatory",
    author: "Larissa Carvalho",
    excerpt: "Justice Kassio Nunes Marques suspended all municipal regulations authorising lottery and sports betting operations across Brazil, ordering immediate cessation and imposing daily fines of BRL 500,000 for non-compliant municipalities and companies.",
    content: `On 3 December 2025, Supreme Court Justice Kassio Nunes Marques suspended all municipal regulations across Brazil that create lotteries or authorise the exploitation of lottery services and municipal sports betting, in a preliminary injunction under Fundamental Rights Breach Claim (ADPF) No. 1212, brought by the Solidariedade party.

The decision orders the **immediate cessation of any operations** derived from municipal acts — extending beyond the suspension of tender procedures to encompass operations already underway. It also prohibits any new acts aimed at implementing, continuing or resuming this type of service, under penalty of substantial daily fines.

**Legal basis**

Law No. 14,790/2023, amending Law No. 13,756/2018, designated the Ministry of Finance — through the Secretariat of Prizes and Betting (SPA) — as the competent authority to regulate and credential companies authorised to operate betting at the national level. The legislation expressly recognises that lottery exploitation also falls to States and the Federal District, but is silent on municipalities.

The injunction highlights that the proliferation of municipal regulations created a fragmented regulatory landscape, weakening federal oversight, distorting revenue collection parameters and relaxing consumer protection standards — creating a systemic risk to federal balance.

**Three central rationales**

The rapporteur's opinion identifies three core grounds for suspension: (i) lottery activity cannot be treated as a matter of local interest, given its national ramifications; (ii) the technical, fiscal and regulatory complexity of modern modalities — particularly fixed-odds betting and online operations — requires centralised oversight; and (iii) the socioeconomic and public order risks arising from dispersed control, including fiscal competition, reduced consumer protection standards and the entry of unauthorised operators.

**Scope and enforcement**

The injunction reaches both municipal legislation and operations already underway, including concessions and models where municipal companies sublicensed operators. The rapporteur affirms that contractual arrangements do not preclude the need for immediate cessation when the municipal regulatory basis is suspended. Claims of acquired rights or protection of legitimate expectations are also dismissed at this stage.

Daily fines of **BRL 500,000** are established for non-compliant municipalities and companies, with individual penalties of **BRL 50,000 per day** for mayors and executives who persist in continuing operations.

**Significance for operators**

The decision creates a material risk point for any operation relying on a municipal lottery or sports betting authorisation, directly or indirectly. The injunction applies nationally and requires immediate action. The SPA/MF federal licensing regime is the only valid path for regulated sports betting in Brazil. Any structure that attempted to operate under municipal frameworks — whether as a transitional or parallel route — is now directly exposed.

Although the decision is still subject to full plenary review, the groundwork and its alignment with the federal regulatory framework indicate a strong tendency toward confirmation.`,
  },
  {
    slug: "coaf-crisis-aml-obligations-online-gaming-operators",
    title: "The COAF Institutional Challenges and AML Obligations for Online Gaming Operators",
    date: "2025-10-03",
    category: "Compliance",
    excerpt: "An analysis of Brazil's financial intelligence unit (COAF) institutional limitations and the practical steps gaming operators must take to maintain robust anti-money laundering compliance regardless of external pressures on the regulatory system.",
    content: `Brazil's financial intelligence unit (COAF — Conselho de Controle e Administração Financeira) has functioned as a Financial Intelligence Unit since Law 9,613 of 1998, which regulates anti-money laundering practices. Its primary objective is to receive, analyse and forward reports of suspicious transactions to competent authorities. As the regulated gaming market has expanded significantly, COAF has faced structural challenges that have direct implications for operators.

**COAF's structural limitations**

Several operational constraints have been identified:

**1. Staffing levels**: The operation relies on a notably reduced team of civil servants relative to the high volume of suspicious transaction reports being received. In the gaming and betting sector, the number of communications to COAF is substantial, while the group of analysts responsible for reviewing them remains limited. A reduced team compromises the effectiveness of referrals and makes it difficult to take appropriate action in all suspicious transaction cases.

**2. Technology**: The systems used for initial triage of suspicious transaction reports lack effective artificial intelligence and automation tools for faster processing. The unit requires modernisation of its screening and analysis systems to improve the effectiveness of referrals to competent authorities.

**3. Volume growth**: An expressive increase in suspicious transaction communications has created overload, set against a reduced team of analysts.

**4. Regulatory non-compliance consequences**: Operators that fail to implement preventive measures face sanctions under applicable law, which may reach fines of up to BRL 20 million and licence cancellation.

**Operator responsibilities**

Portaria SPA/MF 11.43/2024 reinforces that gaming operators must adopt policies, procedures and internal controls covering user identification requirements, monitoring of gaming operations and user transactions, and staff training to identify risks and report suspicious transactions to COAF.

Three key areas of operator obligation stand out:

**1. Rigorous user identification**: At registration, operators must assess whether the individual's declared income is consistent with the volume of bets, and whether the person holds political connections. This requires documentation including tax returns and bank statements, plus consultation of public databases — in particular the Federal Comptroller General (CGU) database — for politically exposed persons (PEPs).

**2. Robust record-keeping**: Maintaining comprehensive internal records of users, including documentation, financial transaction history and internal audit procedures to verify the regularity of financial flows.

**3. Timely COAF notification**: Swift communication to COAF when indicators of suspicious activity are identified, plus annual reporting to the Secretariat of Prizes and Betting on the preventive practices adopted.

**Conclusion**

For an effective system, COAF requires strengthening — including increased analyst headcount, better AI infrastructure for triage automation, public-private collaboration and clearer regulatory standards. But operators cannot wait for institutional improvement. The strength of their own compliance structures is what determines their regulatory posture in an environment where the external oversight system operates under pressure. Our team is available to support operators with compliance training, technical reviews and implementation of best practices.`,
  },
  {
    slug: "annual-recertification-betting-platforms-spa-mf-new-guidelines",
    title: "Annual Recertification of Betting Platforms: What Changes Under SPA/MF New Guidelines",
    date: "2025-09-26",
    category: "Brazil Regulatory",
    excerpt: "SPA/MF has issued complementary guidance on the mandatory annual technical recertification of fixed-odds betting platforms, establishing binding rules for operators, suppliers and certifying entities.",
    content: `The Secretariat of Prizes and Betting of the Ministry of Finance (SPA/MF) has issued complementary guidance on the mandatory annual technical recertification of fixed-odds betting platforms, establishing binding rules for operators, suppliers and certifying entities.

**Why this matters**

The objective is to strengthen technological conformity, operational security and betting integrity — fundamental pillars for the sustainable development of the regulated market.

**Key provisions**

- All Account Management Platforms (PAM), Sportsbook systems, Remote Gaming Servers (RGS) and Aggregators are subject to mandatory annual recertification, covering all brands operated.
- Critical changes — such as authentication, APIs, settlement, cryptographic security and audit trails — require immediate recertification, not deferred to the annual cycle.
- Certificates for B2B solutions (Sportsbook and RGS/Aggregators) must be accompanied by integration certifications and addressed to the Operator directly.
- Validity is always one year from the certificate's date of issuance. Testing may be initiated up to 90 days before expiry.
- Non-compliance may result in suspension of operating authorisation and the imposition of administrative penalties.

**Practical impact**

Operators and certifying entities will need to adopt proactive management of deadlines and reporting, as well as plan intermediate recertifications in cases of critical changes. The regulation also requires greater integration between operators, suppliers and certifying bodies — making coordination across the technical and compliance functions essential.

Octus monitors the regulatory evolution of the betting sector in Brazil closely and is positioned to support companies and partners in meeting the requirements of Ordinance SPA/MF No. 722/2024 and related instruments.`,
  },
  {
    slug: "risk-management-software-igaming-regulatory-compliance",
    title: "Risk Management Software in iGaming: Technology as a Regulatory Pillar",
    date: "2025-08-29",
    category: "Operations",
    excerpt: "Risk management software has evolved from a best practice into an inescapable regulatory requirement for iGaming operators in Brazil. Understanding what the technology must do — and how it must be integrated with human expertise — is now central to compliance.",
    content: `The debate around Law 14,790/2023 is well established among iGaming professionals in Brazil: compliance, KYC and anti-money laundering ceased to be best practices and became non-negotiable regulatory requirements. What receives less attention, however, is how technology can maximise adherence to these requirements.

Risk management software has evolved substantially in recent years, enabling the automation of critical processes, reducing human error and bringing speed to analyses that, if performed manually, would be slow and inefficient. But technology alone does not resolve the challenge: it requires a trained team capable of extracting maximum value from these tools, translating data into strategic decisions aligned with the law.

**Why risk management software is indispensable**

These tools are capable of:

- Automating processes and reducing human error;
- Providing data in an agile and traceable manner;
- Supporting strategic decisions in compliance, corporate governance and data protection;
- Rapidly identifying critical points and irregularities, preventing small issues from escalating into major crises.

Well-applied technology means efficiency, transparency and operational security.

**What Law 14,790/2023 requires**

The legislation makes regulatory risk management requirements explicit:

- **Art. 7, §1, VII** — operators must meet technical and cybersecurity requirements with nationally or internationally recognised certification. Systems must be certified and audited — their mere existence is insufficient.
- **Art. 23** — operators must implement KYC (Know Your Client) procedures with facial recognition technology to confirm bettor identity.
- **Art. 25** — operators are required to implement betting monitoring mechanisms and report to COAF any suspicious transactions related to money laundering or terrorism financing.

These provisions make clear that the law treats risk management not as a best practice but as a regulatory pillar.

**The human dimension**

Technology alone does not suffice. For risk management software to deliver its full potential, a capable team behind its operation is essential. Without human preparation, the tool risks being under-utilised, failing to generate real value. This is where an organisational culture oriented toward compliance becomes critical — where legal knowledge, strategic vision and technology work together.

**Conclusion**

Brazil's fixed-odds betting sector faces a new level of requirements. To navigate this regulatory environment safely, companies must combine reliable technology with prepared teams. Beyond legal compliance, this alignment strengthens the company's reputation, attracts investors and builds trust with the public.

Our team is available to support companies with compliance training, technical reviews and implementation of best practices aligned with current legislation.`,
  },
  {
    slug: "customised-studies-international-expansion-brazil",
    title: "Customised Structural Studies for International Expansion into Brazil",
    date: "2025-08-27",
    category: "Corporate Structuring",
    excerpt: "International expansion into Brazil requires more than incorporating a local entity. Octus structures customised studies that analyse cross-border corporate architecture and present tailored strategic scenarios for Brazil entry.",
    content: `International expansion into Brazil goes well beyond the incorporation of a legal entity. It is a movement requiring strategic decisions, risk analysis, regulatory understanding and a well-planned corporate and financial structure across the different jurisdictions involved.

To address this need, Octus structures customised studies that analyse each client's international structure and present strategic scenarios tailored to their specific situation. These scenarios address the definition of the optimal corporate and organisational configuration for Brazil, as well as the design of the financial flows between the Brazilian operation and the group's foreign entities.

Each study is developed with a focus on:

- Optimising the corporate structure;
- Reducing regulatory and legal risk;
- Maximising tax efficiency;
- Ensuring full compliance with Brazilian legislation.

The result is a strategic roadmap that transforms complexity into clarity, orienting companies to make sound decisions aligned with their growth and sustainability objectives.

**Why this matters for regulated industries**

For companies operating in regulated markets — betting, fintech, payments, compliance-intensive industries — the stakes of an incorrectly structured Brazil entry are significant. The wrong holding structure, an inadequate financial flow design or an incomplete understanding of Brazilian regulatory requirements can create operational, tax and reputational exposure that is costly to unwind.

An entry study conducted before commitments are made is consistently less expensive than a restructuring exercise after problems have emerged.

Octus structures these engagements with strategy, practical viability and legal certainty at the centre — supporting global companies in their Brazil expansion challenges from the earliest planning stages.`,
  },
  {
    slug: "rio-de-janeiro-regulates-vlts-lottery-equipment-decree",
    title: "Rio de Janeiro Regulates VLTs and Lottery Terminals with New State Decree",
    date: "2025-08-19",
    category: "Brazil Regulatory",
    excerpt: "Governor Cláudio Castro's Decree No. 49,804/2025 establishes requirements for Video Lottery Terminals and other lottery equipment in Rio de Janeiro, all under LOTERJ supervision, with potential for 65,000 direct and indirect jobs.",
    content: `The Governor of Rio de Janeiro, Cláudio Castro, issued Decree No. 49,804/2025 establishing requirements for the operation of Video Lottery Terminals (VLTs) and other lottery equipment in the state. The regulation defines technical and security parameters for betting terminals, all under supervision of the State Lottery of Rio de Janeiro (LOTERJ).

**What are VLTs?**

A Video Lottery Terminal is an individual electronic betting terminal connected to a centralised system that ensures transparency and operational integrity. Unlike traditional slot machines, VLTs operate under strict state regulation. All terminals must remain connected to a platform enabling continuous auditing, real-time monitoring, fiscal reporting and full operational traceability.

**Scope of the decree**

The decree covers not only VLTs but also totems, betting terminals and Smart POS — all subject to LOTERJ supervision. Authorisation for operation will be granted onerously, conditional on stringent security, financial traceability and consumer protection requirements, including multifactor authentication (including facial recognition) and mandatory integration with the Player Registry (KYC) to prevent participation by minors, combat money laundering and terrorism financing, and support problem gambling controls.

**Establishment categories**

Licensed establishments are divided into two categories:

- **VLT/Sports Bar stores**: Themed spaces dedicated to entertainment and betting;
- **Non-exclusive establishments**: Locations where gaming has a secondary character.

**Technical requirements**

Operation can only commence after a Proof of Concept (PoC), submission of completed decree annexes and international certifications including GLI, TIER III/IV and ISO compliance. Each terminal must display a durable metal plate with: (i) a Regulatory QR Code issued by LOTERJ; (ii) an Informational QR Code with terminal-specific details; and (iii) an age restriction sign (+18) with a responsible gambling message.

**Regulatory basis and economic projections**

The regulation is grounded in Laws No. 13,756/2018 and 14,790/2023, plus STF decisions recognising state autonomy in lottery services (ADPFs 492 and 493 and ADI 4986). With this framework, Rio de Janeiro inaugurates a modern regulatory framework for the lottery sector — with expectations of generating up to 65,000 direct and indirect jobs.

Octus supports operators through the entire VLT authorisation process, from technical certification to LOTERJ licence applications.`,
  },
  {
    slug: "games-not-classified-as-fixed-odds-betting-brazil",
    title: "Games Not Classified as Fixed-Odds Betting in Brazil: Understanding the Legal Distinctions",
    date: "2025-08-20",
    category: "Regulatory Analysis",
    excerpt: "Ordinance SPA/MF No. 1,207/2024 establishes that certain online game modalities — skill games, fantasy sports, multiplayer games and P2P betting — fall outside the fixed-odds betting regime and therefore do not require a federal betting licence.",
    content: `When discussing the regulation of online games in Brazil, it is common for all modalities to be grouped under the "fixed-odds betting" umbrella. However, Ordinance SPA/MF No. 1,207/2024 makes clear that certain modalities do not fall within that regime and therefore receive different legal treatment.

**What is fixed-odds betting?**

In the fixed-odds lottery modality, the bettor knows, at the moment of placing the bet, exactly how much they could win if their prediction is correct. The prize amount is defined by the odds or multiplication factor applied to each unit wagered. The result is determined by a future random event — such as the score of a football match — or by a random number generator.

**Modalities not classified as fixed-odds betting**

According to Art. 3, sole paragraph, of Ordinance SPA/MF No. 1,207/2024, the following do not qualify as "virtual fixed-odds betting online game events":

**1. Skill Games**
Results determined predominantly by the participant's mental or motor skill — dexterity, strategy, intelligence, knowledge. Chance may be present but is not the predominant factor. Examples: online chess tournaments, quiz games.

**2. Fantasy Sports**
Virtual contests based on the real performance of athletes or persons, with pre-defined rules, where the prize is independent of the number of participants or total amounts wagered. Requires statistical analysis, strategy and knowledge. Examples: virtual team formation based on actual football league rounds.

**3. Multiplayer Games**
Modalities where one player's performance is influenced by the actions and results of other participants. Examples: online card or board games with player interaction.

**4. P2P Betting**
The operator does not directly offer the game but provides the environment for bettors to play against each other. The operator's revenue comes from a commission on winning bets. Examples: online P2P poker platforms.

**The key distinction**

While fixed-odds betting depends predominantly on chance with pre-defined prize odds, games outside that regime are based on skill, strategy, interaction or direct player confrontation.

**Licensing implications**

Games listed in Art. 3, sole paragraph — skill games, fantasy sports, multiplayer and P2P games — are not classified as fixed-odds betting and therefore do not require a federal fixed-odds betting licence for operation. They are often treated as tolerated games under Brazilian law. However, a thorough legal analysis of the specific product is always recommended, given the complexity and evolution of the regulatory framework.

Octus can assist as a strategic partner in assessing the legal viability, structuring and expansion of gaming projects in both Brazil and internationally.`,
  },
  {
    slug: "bet-br-domain-extension-to-states-brazil",
    title: "Extension of the .bet.br Domain to Brazilian States: Regulatory Trust Seal Expands",
    date: "2025-08-15",
    category: "Brazil Regulatory",
    excerpt: "The SPA's proposed extension of the .bet.br domain to Brazilian states participating in the National Betting System (SINAPO) creates a digital trust seal differentiating authorised from illegal operators across the federal structure.",
    content: `The Brazilian fixed-odds betting market is undergoing an important regulatory development that promises to bring greater security to bettors and greater transparency to authorised operators: the extension of the **.bet.br** domain to states.

The initiative, developed by the Secretariat of Prizes and Betting (SPA), aims to create a digital trust seal for states. The goal is clear: differentiate companies duly authorised from those operating irregularly.

**How the .bet.br domain will work**

Access to the domain is currently exclusive to federal operators meeting a series of requirements. The proposed extension to states will require: membership of the National Betting System (SINAPO), inclusion of operators on the SPA website, integration with the prohibited persons platform, registration on consumidor.gov, and technical certification of the betting system by a laboratory recognised by the SPA or the state.

The benefit will be granted to states that are members of SINAPO — a cooperation model between the federal government and federated entities seeking to harmonise oversight and strengthen consumer protection.

The proposed domain model for state use is **operador.uf.bet.br**, where "uf" is replaced by the abbreviation of each federative unit.

**Why this matters**

The **.bet.br** domain goes beyond aesthetics or marketing. It represents:

- **Security for bettors**, enabling rapid and clear identification of officially authorised companies;
- **Protection of the general public**, reducing the risk of consumers being harmed by irregular sites;
- **Strengthened regulation**, through more effective control and oversight mechanisms;
- **Support for legal revenue collection**, contributing to the combat of the clandestine market.

With the implementation of uf.bet.br, Brazil takes another step toward a regulated, safe and sustainable betting market, aligned with international best practices.

Next steps require validation by the Attorney General of the National Treasury (PGFN), after which states can begin gradual accession processes.`,
  },
  {
    slug: "intellectual-property-igaming-trademark-registration-brazil",
    title: "Intellectual Property in iGaming: Avoiding Critical Errors in Trademark Registration",
    date: "2025-08-11",
    category: "Legal Architecture",
    author: "Daniel Cruz Fonseca",
    excerpt: "Trademark registration in the betting sector is a specialised field. The INPI systematically rejects registrations linked to 'bet', 'casino' or 'aposta', and a poorly constructed defence in an appeal can mean the permanent loss of a valuable brand.",
    content: `Intellectual property in the betting sector is not a generic subject — it is a minefield. Traditional law firms, however reputable, often lack familiarity with the regulatory specificities, ethical codes and legal risks of the iGaming universe.

The INPI (Brazil's National Industrial Property Institute) systematically rejects registrations linked to "bet", "casino" or "aposta" — even when the operation is entirely legitimate. An error in the description of the activity, the classification of goods or services, or a poorly constructed appeal defence can mean the permanent loss of a valuable brand. There are no second chances.

**Why sector expertise matters**

Registering trademarks in the betting space requires knowing exactly which arguments the INPI accepts, which terms it rejects, and how to navigate legally between legality and institutional scepticism. This is not knowledge acquired from academic papers — it comes from building contracts with operators, defending marks under challenge, and registering software that processes millions of reals per month.

Beyond trademark registration, iGaming companies face IP challenges across multiple fronts:

- **Software protection**: Platform architecture, proprietary algorithms and game mechanics require careful documentation and registration strategies;
- **Contractual frameworks**: IP clauses in agreements with B2B providers, game studios and affiliate networks require sector-specific drafting;
- **Domain protection**: The .bet.br domain creates new considerations for brand protection at the state and federal level;
- **Content and branding**: Sponsorship agreements, influencer contracts and marketing materials in a regulated sector require IP and regulatory alignment.

**The strategic dimension**

In intellectual property, as in betting, having the right cards is not enough — you need to know how to play them. Making registrations with counsel who understands the market means avoiding expensive errors, saving time, protecting assets with precise language and staying one step ahead in a competitive, regulated environment.

At Octus, we have built this expertise through direct engagement with the sector — not through theoretical knowledge of it.`,
  },
  {
    slug: "national-betting-system-sinapo-brazil",
    title: "The National Betting System (SINAPO): What It Is and Why It Could Change Brazilian Betting Regulation",
    date: "2025-08-07",
    category: "Brazil Regulatory",
    excerpt: "The SPA/MF has initiated the creation of SINAPO — the National Betting System — a cooperative federal initiative to harmonise betting regulation across Brazil's 26 states and the Federal District through minimum national standards.",
    content: `The Brazilian sports betting market is advancing toward a new phase of integration between federated entities. The Secretariat of Prizes and Betting of the Ministry of Finance (SPA/MF) has initiated the creation of the **National Betting System (SINAPO)** — an initiative aimed at building a cooperative regulatory environment among federative entities.

**SINAPO's objectives**

SINAPO aims to contribute to cooperative federalism and the construction of a systemic national character for prizes and betting regulation. The proposal involves coordination between sub-national entities and the dissemination of good regulatory practices, focusing on the definition of national minimum standards related to responsible gambling, technical system and game requirements, anti-money laundering controls and consumer protection.

**Initial implementation**

SINAPO's structuring began in July 2025, with the first two meetings of the Working Group responsible for its implementation. Representatives from 16 states and the Federal District participated in hybrid-format meetings held in Brasília.

Initial discussions addressed: authorisation and oversight criteria for operators; the application of administrative sanctions; anti-money laundering mechanisms; and practical guidelines for responsible gambling policy.

Upcoming sessions are planned to address states' accession to the National Self-Exclusion Platform — enabling bettors to voluntarily request temporary or permanent exclusion from all authorised platforms as a mental health and financial protection tool.

**Regulatory agenda context**

SINAPO is one of the SPA/MF's priorities for the 2025-2026 regulatory agenda. The initiative sits within Project No. 8 of the agenda — encompassing 13 strategic initiatives for the development of fixed-odds betting regulation. The roadmap includes public consultations and successive stakeholder engagement stages.

**Significance for operators**

By promoting integration among federative entities, SINAPO seeks to: strengthen public governance of the sector; reduce regulatory asymmetries between states; expand information sharing between oversight bodies; and ensure greater consumer protection across the national territory.

For operators with multi-state operations or planning state-level entry, understanding SINAPO's development is essential for anticipating how the regulatory landscape will evolve across Brazil's federative structure.`,
  },
  {
    slug: "why-your-international-licence-may-not-protect-you-in-brazil",
    title: "Why Your International Licence May Not Protect You in Brazil",
    date: "2025-07-24",
    category: "Regulatory Structuring",
    excerpt: "Holding a licence from Malta, Curaçao or the Isle of Man is no longer sufficient for operators seeking to operate in Brazil. With Law 14,790/2023 fully in force, only operators with a federal SPA/MF authorisation may legally accept Brazilian players.",
    content: `In recent years, many iGaming operators placed their trust in international licences — such as those issued by Malta, Curaçao or the Isle of Man — as a passport to operate across multiple markets. However, with the entry into force of Brazil's new fixed-odds betting regulation, this strategy requires urgent review: relying solely on an international licence is no longer sufficient to operate legally and safely in Brazil.

**Brazil's new regulatory landscape**

With the enactment of Law No. 14,790/2023, Brazil officially inaugurated a new era for the betting sector. What was previously a grey area is now regulated with clarity and specific requirements. The legislation defines the criteria for operating sports betting and online games, and designates the Secretariat of Prizes and Betting (SPA) as the authority responsible for authorising, overseeing and sanctioning companies in the sector.

The requirements for obtaining a federal licence are stringent and encompass: legal qualification; fiscal and labour regularity; probity; financial and economic qualification; and technical qualification.

**Why an international licence is not valid in Brazil**

**1. Brazilian regulatory autonomy**
Each country has sovereignty to define its own market rules. A licence valid in another territory has no automatic legal effect in Brazil. The new regulatory framework makes clear that only operators authorised by the SPA may legally operate.

**2. Risk of sanctions**
Companies operating in Brazil without authorisation are subject to administrative sanctions including website blocking, substantial fines and advertising restrictions. Third-party operators — such as payment processors and affiliate platforms — may also be held liable.

**3. Limited legal protection**
In disputes with consumers, partners or Brazilian authorities, a company without legal presence in Brazil will be at a disadvantage — without competent jurisdiction, without structure to defend itself or comply with judicial decisions.

**4. Reputation and credibility**
Compliance with local legislation communicates security to consumers, strengthens brand reputation and opens doors with institutional and commercial partners.

**How to prepare**

For international operators seeking to operate in Brazil, the path involves:

- Strategic analysis of the new regulatory framework;
- Incorporation of a local entity and compliance structure;
- Alignment of internal policies (responsible gambling, LGPD, AML, advertising);
- Specialised legal advisory to navigate the authorisation process.

Brazil's new iGaming phase brings real opportunities but also demands responsibility, adaptation and transparency. Relying solely on an international licence, without local adaptation, is a material risk.`,
  },
  {
    slug: "regulation-and-technology-legal-follows-igaming-evolution",
    title: "Regulation and Technology: How Legal Keeps Pace with iGaming Innovation",
    date: "2025-07-22",
    category: "Regulatory Analysis",
    excerpt: "The iGaming sector is undergoing accelerated transformation driven by technological innovation, new business models and AI integration. The role of legal counsel has evolved from compliance guardian to strategic partner in this rapidly shifting landscape.",
    content: `The iGaming sector is undergoing accelerated transformation, driven by technological innovation, new business models and a significant increase in interest from both investors and consumers. In this dynamic landscape, the role of legal counsel goes well beyond compliance — it becomes strategic, adaptable and closely integrated with the evolution of the sector itself.

**A sector in constant motion**

The digitisation of games, integration with fintechs, the use of artificial intelligence for personalised user experiences, and new crypto-asset payment modalities are among the vectors shaping the future of iGaming globally. These developments bring new legal challenges: from data protection to anti-money laundering, through the need to regulate previously entirely informal environments.

The global market demonstrates different approaches: countries like the United Kingdom and Malta maintain more stable and mature regulations, having been in force longer; while regions like Latin America — with Brazil as a standout example — are in full normative structuring and regulatory consolidation.

**Brazil's new iGaming phase**

Brazil is today one of the most closely watched markets in the global iGaming context. After years of anticipation, 2023 and 2024 marked the effective regulation of fixed-odds betting, with the enactment of Law No. 14,790/23 and subsequent ordinances from the Secretariat of Prizes and Betting (SPA). The new framework regulates not only the operation of betting platforms but also requires a robust compliance structure, responsible gambling policies, clear advertising rules and technical and financial criteria for authorisation.

Brazil has also signalled it will advance regulation of other iGaming verticals, including technology providers — which will bring additional complexity and opportunity to the legal-regulatory ecosystem.

**Legal as a strategic function**

In this challenging environment, legal counsel must be more than a regulatory guardian. It must:

- **Interpret and anticipate emerging regulations**: tracking bills, ordinances and regulatory body movements;
- **Translate innovation into legal certainty**: adapting digital products to applicable legislation without constraining creativity;
- **Protect data and ensure integrity**: aligning operations with data protection laws (LGPD, GDPR) and AML standards;
- **Educate and align teams**: working alongside tech, marketing and product functions to ensure compliance is embedded from inception.

**Regulation as competitive advantage**

Companies that integrate legal counsel strategically into their innovation processes tend to gain a differentiating advantage. Regulation, far from being viewed as a constraint, can become a competitive edge — conveying confidence to the market, investors and users. In iGaming, where trust is essential, operating within clear, ethical and transparent rules is a fundamental part of the user experience.`,
  },
  {
    slug: "iof-update-financial-market-brazil-2025",
    title: "IOF Update: Key Implications for the Financial Market and Regulated Industries",
    date: "2025-07-18",
    category: "Regulatory Analysis",
    excerpt: "The Brazilian Federal Revenue Service issued clarifications on the IOF following the suspension of temporary regulations, indicating that financial institutions are not required to collect retroactively — but a future direct charge on taxpayers remains possible.",
    content: `The Brazilian Federal Revenue Service issued important updates on the Financial Transactions Tax (IOF) with direct implications for the corporate credit landscape and fiscal dynamics.

**The clarification**

A note published on 17 July 2025 indicates that financial institutions and other tax-responsible parties that did not collect IOF during the period of suspended regulations are **not required to do so retroactively**. However, the Federal Revenue Service will evaluate the situation and may issue further guidance — indicating a potential direct charge on taxpayers at a future date.

**Implications for regulated industries**

For businesses — including in regulated sectors such as iGaming following its recent regulation in Brazil — changes to the IOF, whether ratified or rectified, directly influence:

- **Cash flow management**: IOF rates affect the cost of borrowing and financial planning across payment cycles;
- **Tax compensation strategies**: Any potential retroactive obligation requires provisions and restructured fiscal positions;
- **Credit access cost**: Adjustments to the IOF rate alter the economics of financing structures, particularly for capital-intensive businesses during growth phases.

**The need for proactive planning**

Companies must revise their financial projections and tax strategies to prepare for possible future charges — even if retroactive obligations for institutions have been waived. This is a moment of vigilance and proactive planning to mitigate risks and capture opportunities in a potentially more accessible credit environment.

The instability of the regulatory environment around IOF also reinforces a broader point: in Brazil's currently active regulatory development phase, operating without real-time regulatory monitoring creates material exposure — whether in tax, compliance or operational planning.

Octus maintains a team of specialists positioned to support companies with regulatory analysis across Brazil's complex fiscal and legal landscape.`,
  },
  {
    slug: "trump-tax-reform-betting-operators-lessons-for-brazil",
    title: "Trump Signs Tax Reform Imposing New Betting Taxation in the US: Lessons for Brazil",
    date: "2025-07-08",
    category: "International Regulatory",
    excerpt: "The One Big Beautiful Bill Act limits the deduction of gambling losses to 90%, meaning US bettors may owe federal taxes even on net-loss years. The measure raises BRL 1.14 billion in revenue projections but risks driving players to offshore platforms — a lesson Brazil is simultaneously learning.",
    content: `President Donald Trump recently signed the controversial "One Big Beautiful Bill Act", bringing significant changes to US tax policy — with particular attention to a new fiscal approach to the betting sector.

**The change**

Previously, American bettors could fully deduct losses against winnings, protecting themselves against taxation when there was no net profit. Under the new rule, from 2026, only deductions of **up to 90% of losses** will be permitted. This means that even bettors who end the year at a loss may owe tax.

Example: A bettor who wins and loses USD 100,000 in a year with zero net profit will still be taxed on USD 10,000 — resulting in approximately USD 2,400 in federal taxes.

**A fiscal boost with collateral risk**

The US government estimates the change will generate an additional USD 1.14 billion in revenue between 2026 and 2034. However, the measure has been sharply criticised by industry representatives who warn of a key collateral effect: the migration of bettors to offshore or illegal platforms, undermining the advances achieved through the legalisation and regulation of online betting.

The legal US betting market moved approximately USD 115 billion in 2024, according to industry data.

**Reflections and lessons for Brazil**

In Brazil, the Ministry of Finance was pursuing an increase in betting sector taxation — with the IOF alternative raising the rate from 12% to 18% from October. However, the Chamber of Deputies signalled limited appetite to approve this measure following the government's prior defeat in attempting to increase IOF by decree.

Brazil's scenario reinforces the need to balance revenue collection with sector viability. The risk of aggressive taxation producing the opposite of its intended effect — driving players to illegal platforms and reducing overall revenue — is the central lesson the US experience offers.

International experience consistently demonstrates: when the cost of operating within the law is disproportionate and unpredictable, the incentive to regularise weakens and the illegal market gains structural space. Taxation, oversight and predictability must work in concert.

For operators planning their regulatory and fiscal positioning in Brazil, this is a moment to observe international precedents, anticipate risks and structure operations that can withstand regulatory volatility.`,
  },
  {
    slug: "regulatory-agenda-2025-2026-secretariat-prizes-betting",
    title: "Regulatory Agenda 2025/2026: SPA/MF Sets the Course for Brazil's Betting Market",
    date: "2025-04-16",
    category: "Brazil Regulatory",
    excerpt: "Ordinance SPA/MF No. 817/2025 establishes the regulatory agenda for Brazil's sports betting and online gaming market for the 2025-2026 biennium, including B2B regulation, a national trust seal, the SINAPO cooperative system and a revised authorisation procedure.",
    content: `The Secretariat of Prizes and Betting has published Ordinance SPA/MF No. 817/2025, establishing the Regulatory Agenda for the sports betting and online gaming market for the 2025/2026 biennium. This marks an important milestone in consolidating a solid, transparent and balanced regulatory environment for the betting sector in Brazil.

**Key initiatives**

**Regulation of B2B providers**

Among the initiatives outlined, one highlight is the regulation of the economic chain associated with betting operators, scheduled for the third quarter of 2025. This initiative aims to encourage the national positioning of foreign companies operating within Brazil's iGaming ecosystem — a significant development for technology suppliers, platform providers, certification laboratories and other service providers currently operating in an undefined regulatory space.

**Distinctive trust seal**

The creation of a distinctive seal for authorised betting operators will provide greater security and convenience for bettors, making it easier to identify websites officially authorised by the Brazilian Government. This builds on the .bet.br domain initiative already underway.

**National Betting System (SINAPO)**

The establishment of a National Betting System will support cooperative federalism and promote a systemic national framework for the regulation of prizes and betting. This will be achieved through coordination with states and the Federal District, the dissemination of best practices, and the definition of minimum national standards.

**Revised authorisation procedure**

The agenda includes a revision of the authorisation procedure for betting operators — incorporating lessons from the first authorisation cycle and improving the process defined in Ordinance SPA/MF No. 827/2024.

**Strategic significance**

These initiatives are expected to position Brazil as one of the world's leading regulated jurisdictions, fostering a more transparent, competitive and stakeholder-aligned industry. With the consolidation of this regulatory agenda, Brazil is set to take a sustainable leap forward in building a modern, responsible betting industry aligned with international best practices.`,
  },
  {
    slug: "spa-ordinance-banks-refuse-illegal-betting-operators",
    title: "SPA Ordinance Requires Banks and Payment Institutions to Refuse Accounts for Illegal Betting Operators",
    date: "2025-02-21",
    category: "Brazil Regulatory",
    excerpt: "The SPA/MF published an ordinance requiring financial institutions, payment institutions and payment scheme managers to refuse or terminate relationships with companies operating fixed-odds betting illegally — with a 24-hour notification obligation.",
    content: `The Secretariat of Prizes and Betting of the Ministry of Finance (SPA-MF) published an ordinance establishing guidelines requiring financial institutions (FIs), payment institutions (PIs) and payment scheme managers to refuse or terminate relationships with companies operating fixed-odds betting illegally.

**Key provisions**

**Prohibition on maintaining accounts**: FIs and PIs are prohibited from maintaining transaction accounts for illegal betting operators, as well as from processing deposits or prize payments related to these entities.

**Notification obligation**: Upon identifying suspicious operations or companies operating fixed-odds betting illegally, institutions must notify SPA-MF within **24 hours**, providing details including CNPJ, corporate name and grounds for suspicion.

**Significance**

This measure reinforces the Brazilian government's commitment to combating illegal betting operations, protecting bettors and ensuring the integrity of the regulated market. The Secretary of SPA-MF, Regis Dudena, highlighted that beyond blocking illegal websites and advertising, this action is fundamental to preventing unauthorised operators from moving financial resources — closing the net against illegal activity and protecting citizens' finances and economic interests.

Institutions failing to comply with the established guidelines will be subject to oversight proceedings and possible sanctions. This ordinance complements other regulatory initiatives aimed at organising and supervising Brazil's fixed-odds betting market.

**Practical implications for financial institutions**

This ordinance creates direct operational obligations for banks, payment processors and fintechs. Institutions must now implement procedures to: identify clients engaged in betting activities; verify SPA/MF authorisation status; monitor transactions for illegal betting patterns; notify the regulator within tight deadlines; and manage the risk of secondary liability. The interaction between this financial regulation and the broader betting regulatory framework means that compliance functions in financial institutions now require specific iGaming regulatory knowledge.`,
  },
  {
    slug: "youtube-tightens-rules-illegal-betting-sites-impact-influencers",
    title: "YouTube Tightens Rules Against Illegal Betting Sites: Impact on Influencers and Content Creators",
    date: "2025-03-19",
    category: "Advertising & Compliance",
    excerpt: "YouTube implemented new mechanisms to block content related to illegal online gambling sites from 19 March 2025, following denunciations of influencers promoting betting platforms with misleading profit guarantees.",
    content: `YouTube implemented, from 19 March 2025, new mechanisms to block content related to illegal online gambling sites — following denunciations by Brazil's Ministry of Sport regarding digital influencers promoting betting with misleading promises of easy profit.

**New guidelines and restrictions**

Under this update, content creators on the platform are prohibited from referencing or directing viewers to illegal betting sites and applications. This includes URLs, links embedded in images or text, and even verbal mentions. The platform's updated usage policy states that "content promising guaranteed returns may be removed, regardless of whether the online gambling site or application has been approved by Google."

**Context**

The National Secretariat of Sports Betting (Snaede) at the Ministry of Sport identified a network of over 53 accounts and 25 YouTube channels promoting betting with false profit promises, attracting audiences of over 100,000 viewers per broadcast. The use of digital influencers to lend credibility to these schemes had become a recurring strategy.

The identified channels were reported by the Ministry of Sport to the Ministries of Justice, the Federal Police and during a public hearing at the Supreme Court.

**Implications for operators and marketing partners**

This development has significant implications for how licensed operators structure their marketing and affiliate relationships:

- Operators must review all influencer partnerships and content creator agreements to ensure they are only working with authorised platforms and that content does not make misleading performance claims;
- Affiliate agreements require explicit compliance clauses aligned with both YouTube's new standards and SPA/MF advertising rules;
- The convergence of platform-level enforcement and regulatory-level enforcement creates compound liability risk for operators whose marketing network includes non-compliant content.

The extension of responsibility to advertising agents and influencers — already signalled in PLP 128/2025's joint liability provisions — makes this a strategic compliance area, not merely an advertising management question.`,
  },
  {
    slug: "brazil-b2b-registration-requirement-betting-igaming",
    title: "Brazil to Implement Registration Requirement for B2B Providers in the Betting and iGaming Market",
    date: "2025-01-29",
    category: "Brazil Regulatory",
    excerpt: "Brazil's SPA Secretary announced at ICE Barcelona that a mandatory registration mechanism for B2B providers in the regulated market is being implemented — covering game providers, platforms, KYC tools and other essential services.",
    content: `During the ICE Barcelona roundtable — a leading iGaming industry event — Regis Dudena, Secretary of Prizes and Betting at the Ministry of Finance, announced the implementation of a **mandatory registration mechanism for B2B providers** in Brazil's regulated market.

**What will be covered**

The registration is expected to encompass game providers, betting platforms, KYC (Know Your Customer) tools and other essential services for the functioning of the betting and iGaming market.

While full licensing for providers is not planned in the near term, Dudena emphasised the importance of introducing specific certification for online gaming systems. "Increasingly, this type of registration is necessary," the Secretary stated, highlighting that the process will be essential for increasing transparency and ensuring regulatory compliance.

**Market context**

Brazil's regulated iGaming market is still in its initial phase but already faces significant challenges. Licensed operators have been pressing the government to adopt measures to combat offshore operators who continue to operate outside the country's regulatory framework.

The introduction of a B2B provider registry represents an important step in this context, providing an additional layer of control and reliability to the market as it prepares to consolidate its position as one of the most promising in the global betting and online gaming landscape.

**Strategic implications for B2B providers**

For international B2B providers already serving or planning to serve the Brazilian market, this development is significant:

- Companies providing technology, games, platforms, KYC systems or compliance tools to Brazilian licensed operators will likely be required to register with SPA/MF;
- The registration requirement creates a market differentiation opportunity — registered providers signal legitimacy and regulatory acceptance;
- Operators should begin mapping their B2B supply chain to identify which partners will be affected and ensure they are able to meet future requirements;
- The regulatory timeline for implementation has not yet been confirmed, making early engagement with the process strategically advantageous.`,
  },
  {
    slug: "quinel-credentialed-certifying-entity-brazil-ministry-finance",
    title: "Quinel Credentialed as Certifying Entity by Brazil's Ministry of Finance, with Octus Legal Support",
    date: "2024-07-23",
    category: "Market & Industry",
    excerpt: "With Octus's legal advisory, Quinel Limited has been credentialed by Brazil's Ministry of Finance as a certifying entity for betting systems — becoming one of five recognised laboratories authorised to certify platforms in Brazil under Ordinance SPA/MF No. 300/2024.",
    content: `With the legal advisory of Octus, Quinel Limited has been credentialed by Brazil's Ministry of Finance as a certifying entity for betting systems — including live gaming studios and online games — under the strategic support of Octus. With this step, Quinel becomes one of five laboratories recognised to certify in Brazil, as established by Ordinance SPA/MF No. 300/2024.

**The significance**

The credentialing of Quinel marks a significant advance in the regulation of sports betting and online games in Brazil. By combining Octus's legal expertise with Quinel's international certification experience, the collaboration facilitates legal and operational compliance for gaming platforms and strengthens the sector's integrity and security.

"We are excited to contribute to a more transparent and robust market, which will benefit both operators and players," noted Rubio Teixeira, Founder of Octus.

"Our accreditation in Brazil represents a significant milestone, reflecting our commitment to establishing new standards of excellence in gaming certification," stated Pietro Fiorito, Quinel's GMO.

**Context**

Quinel is positioned to offer certifications meeting the standards established by Brazilian legislation, ensuring that sports betting and online gaming operators have systems in full compliance with current regulation. The accreditation process demanded a joint effort to meet all requirements of the Ministry of Finance — navigating a rigorous technical, legal and institutional review.

**About Quinel**

Quinel Limited is a globally recognised and accredited gaming certification laboratory. With over a decade of experience, Quinel provides comprehensive testing, certification and inspection services, ensuring gaming systems meet rigorous international standards.

**About Octus**

Octus was founded in 2019 in Portugal by Rubio Teixeira and operates across regulated markets internationally, with offices in the United States, Portugal, the United Kingdom and Brazil. The firm supports clients in navigating complex regulatory environments with a specialised and proactive approach.`,
  },
  {
    slug: "senate-commission-approves-casino-bingo-gaming-bill-brazil",
    title: "Senate Commission Approves Bill to Legalise Casinos, Bingos, Jogo do Bicho and Online Games in Brazil",
    date: "2024-06-19",
    category: "Brazil Regulatory",
    excerpt: "The Senate's Constitution and Justice Committee approved the rapporteur's report on PL 2234/22 by 14 votes to 12, advancing legislation to legalise casinos, bingos, jogo do bicho and online gaming in Brazil — the bill now proceeds to the full Senate.",
    content: `The Senate's Constitution, Justice and Citizenship Committee (CCJ) approved the report by Senator Irajá Silvestre on PL 2234/22. The proposal now proceeds to the full Senate floor, with its scheduling dependent on Senate President Rodrigo Pacheco. While awaiting scheduling, the bill may receive amendments modifying the text.

If approved without amendments in the full Senate, the bill requires Presidential assent. If the text is amended, it returns to the Chamber of Deputies. After the Deputies' vote — agreeing or disagreeing with amendments — PL 2234/22 proceeds to Presidential assent.

Following Presidential signature, the text becomes law, creating the definitive Regulatory Framework for Gambling in Brazil. For actual operation, regulation must be published within 12 months.

**What PL 2234/22 provides**

The bill provides for the installation of casinos in tourist areas or integrated leisure complexes — such as luxury hotels with at least 100 rooms, plus restaurants, bars and spaces for meetings and cultural events. A limit of one casino per state and in the Federal District is established, with exceptions: São Paulo (up to three), Minas Gerais, Rio de Janeiro, Amazonas and Pará (up to two each), due to population or territory size.

Bingo operation is limited to one venue per 150,000 inhabitants per municipality, with draws permitted at stadiums with capacity above 15,000. Jogo do bicho is permitted at a rate of one operation per 700,000 inhabitants per State or Federal District.

**Regulatory framework**

The proposal defines guidelines for gambling operation, including taxation of betting establishments and prizes. Operations must meet strict criteria including minimum capital requirements and proof of the lawful origin of funds. Only companies headquartered in Brazil may operate these activities, and only in duly authorised locations.`,
  },
  {
    slug: "spa-mf-position-brazilian-partner-20-percent-share-capital",
    title: "SPA/MF Clarification: Brazilian Partner Requirement — 20% Share Capital Threshold",
    date: "2024-06-06",
    category: "Brazil Regulatory",
    excerpt: "The SPA/MF confirmed via its FAQ that the requirement for a Brazilian partner holding at least 20% of the applicant company's share capital may be met by either Brazilian natural persons or Brazilian legal entities incorporated under Brazilian law.",
    content: `The Secretariat of Prizes and Betting of the Ministry of Finance clarified, through its official FAQ, that the requirement for a Brazilian partner holding at least 20% of the applicant company's share capital may be fulfilled by both Brazilian natural persons (individuals) and Brazilian legal entities.

**The clarification**

The SPA/MF confirmed: *"The requirement to have a Brazilian partner holding at least 20% of the share capital of the applying legal entity may be fulfilled both through the participation of Brazilian natural persons and through Brazilian legal entities."*

For this purpose, a Brazilian legal entity is defined as one incorporated under Brazilian law with its registered office and administration in Brazil.

The requirement derives from Art. 7, §1, IX of Law No. 14,790 and can therefore be met through a Brazilian holding company, subsidiary or other locally incorporated vehicle — not exclusively through individual Brazilian shareholders.

**Practical implications**

This clarification has significant structuring implications for international operators seeking to meet the Brazilian partner requirement:

- International groups may use a Brazilian subsidiary or incorporated holding structure to satisfy the 20% requirement, rather than needing to bring in individual Brazilian shareholders;
- This provides flexibility in ownership architecture, particularly for groups where dispersing equity to natural persons creates governance or commercial complexity;
- The Brazilian entity used to satisfy the requirement must genuinely have its registered office and administration in Brazil — not a shell entity registered locally but managed abroad.

Operators in the licensing process or planning to apply should assess how their current or intended corporate structure meets this requirement and seek specific legal advice on their structuring options.`,
  },
  {
    slug: "new-rules-sports-betting-online-games-brazil-portaria-827-2024",
    title: "New Rules for Sports Betting and Online Games in Brazil: Portaria SPA/MF 827/2024",
    date: "2024-05-22",
    category: "Brazil Regulatory",
    excerpt: "The SPA/MF published Ordinance No. 827/2024 defining the rules and conditions for obtaining authorisation to operate sports betting and online games in Brazil — covering a five-year licence, BRL 30 million capital requirement and comprehensive qualification criteria.",
    content: `The Secretariat of Prizes and Betting of the Ministry of Finance published Ordinance SPA/MF No. 827, defining the rules and conditions for obtaining authorisation to exploit sports betting and online games in Brazil.

**Licence timeline**

The licence may be requested at any time. Applicants submitting a request within 90 days of the ordinance's publication are assured of approval by 31 December 2024, provided all requirements are met. Operators already active have until 31 December 2024 to adapt to the new rules. From 1 January 2025, legal entities operating without a licence are subject to statutory penalties.

**Brazilian partner requirement**

The ordinance requires a Brazilian partner holding at least 20% of the share capital — fulfillable by Brazilian natural persons or Brazilian legal entities incorporated and administered in Brazil.

**Corporate structure**

Only limited liability companies (Ltda.) or corporations (S.A.) are permitted as licence applicants.

**Licence value and term**

The licence is valid for five years, subject to payment of BRL 30 million, covering up to three commercial brands to be exploited by the operator through its electronic channels. The licence is personal, non-negotiable and non-transferable.

**Qualification criteria**

Applicants must demonstrate: legal qualification; fiscal and labour regularity; probity; financial and economic qualification (minimum paid-in share capital of BRL 30 million, minimum net equity of BRL 30 million, and financial reserve of BRL 5 million); and technical qualification.

**Additional brands**

Operators wishing to exploit more than three commercial brands must additionally pay a further BRL 30 million per authorisation, constitute BRL 5 million per authorisation in financial reserve, and maintain BRL 15 million in paid-in capital per authorisation.

**Management experience**

Applicants must demonstrate at least three years' professional experience in gaming, betting or lotteries, or equivalent holding experience.

**Customer service**

A customer service structure must be maintained in Brazil, operating in Portuguese, via free electronic and telephone channels on a 24/7 basis.

**Sports integrity**

Applicants must demonstrate membership or association with an independent national or international sports integrity monitoring organisation dedicated to combating the manipulation of sporting event results.

**SPA/MF response timeline**

The Secretariat must notify applicants within 150 days regarding authorisation payment or rejection of the request.`,
  },
  {
    slug: "new-regulation-betting-online-game-systems-portaria-722-2024",
    title: "New Regulation Establishes Technical Requirements for Betting and Online Game Systems",
    date: "2024-05-03",
    category: "Brazil Regulatory",
    excerpt: "Ordinance SPA/MF No. 722/2024 defines new technical and security requirements for betting and gaming systems used by fixed-odds betting operators in Brazil, including annual certification, data localisation rules and supervision procedures.",
    content: `On 3 May 2024, the Ministry of Finance, through the Secretariat of Prizes and Betting (SPA), published Ordinance SPA/MF No. 722, defining new technical and security requirements for betting systems and platforms used by fixed-odds betting operators in Brazil.

**Conformity and certification**

Betting operators must ensure their systems and platforms comply with standards established by the SPA, through certification by recognised entities. This certification must be renewed annually and also whenever critical system components are modified.

**Data localisation and security**

Betting systems and their data must be hosted in data centres in Brazil or in countries with an International Legal Cooperation Agreement with Brazil. These centres must hold ISO 27001 security certification to protect platform-controlled information. If operators store personal data abroad, express consent from data subjects is required, in accordance with the General Data Protection Law (LGPD).

**Supervision and oversight**

The SPA is responsible for supervising and overseeing betting systems, and platforms must ensure access to the information required for this purpose. Operators must provide operational data as required by specific regulation, ensuring transparency and regulatory compliance.

**Online game rules**

For online games, the ordinance requires the definition of multiplication factors on wagered amounts and the use of random generators to determine results — ensuring game integrity and predictability.

**Physical terminal rules**

Rules for betting at physical terminals are also established, covering bettor identification procedures and payment transaction rules — aimed at ensuring operational security and integrity while protecting bettor interests.

**Significance**

This regulation represents a significant advance in the structuring and security of betting and online games in Brazil, establishing rigorous standards for the operation and oversight of the sector. Operators must treat technical certification as a continuous compliance function — not a one-time administrative step.`,
  },
  {
    slug: "why-licensing-fails-post-approval",
    title: "Why Licensing Fails Post-Approval — Octus Consulting",
    date: "2026-03-31",
    category: "Regulatory",
    excerpt:
      "Most licensing failures are not rejections. They are approvals that cannot sustain operations. Banking, compliance and structural gaps surface after the licence is granted.",
    content: `### Why Licensing Fails Post-Approval

Most licensing failures do not happen at approval. They happen in the first six months of operation.

The assumption is that once a licence is approved, the operation is ready. It is not.

Licensing authorities evaluate whether the applicant meets the requirements for authorisation. They do not evaluate whether the operation will function in practice. That distinction is where most failures occur.

**The licence is granted. Then reality arrives.**

Banking partners conduct their own assessment. They evaluate the compliance documentation, the corporate structure, the jurisdiction and the UBO chain independently. A licence from Curaçao, Malta or Isle of Man does not guarantee banking access. If the AML framework was built to satisfy the regulator but not the bank, the account does not open.

Payment processors apply the same logic. PSPs and acquirers evaluate compliance quality, transaction patterns and risk exposure. An operation that passes regulatory review can still fail payment onboarding because the compliance layer was designed for the application, not for operations.

Compliance frameworks that satisfied the licensing checklist fail under real transaction volumes. Transaction monitoring that worked in theory generates false positives or misses actual risk indicators when live traffic begins. Responsible gambling tools exist in policy but are not implemented in the platform. Internal controls are documented but nobody follows the escalation path.

**The pattern is consistent.**

The operation invested months and significant capital into the licensing process. The licence was granted. But the structure behind it was built for approval, not for operation. The compliance framework was designed for submission, not for supervision. The corporate design was optimised for the application, not for what banks and payment partners require.

**What this means in practice:**

Operations that fail post-approval face a specific set of consequences. Banking is blocked or terminated. Payment processing is restricted or unavailable. The first supervisory review by the regulator reveals gaps that did not exist in the application. The operation is licensed but not operational.

**What most people get wrong:** They treat the licence as the finish line. In practice, the licence is where operational exposure begins. Banking, compliance supervision and payment onboarding all happen after approval — and all depend on structural decisions made before submission.

**The structural lesson is straightforward.**

Licensing is an outcome, not a destination. The structure behind the licence — corporate design, compliance architecture, banking strategy, operational readiness — determines whether the operation survives its first year. Building that structure for the application instead of for the operation is the most expensive mistake in regulated markets.

The licence gets you through the door. The structure determines whether you stay.`,
    related: [
      { label: "iGaming Licensing", href: "/solutions/regulatory/igaming-licensing" },
      { label: "Fintech Licensing", href: "/solutions/regulatory/fintech-licensing" },
    ],
    cta: {
      label:
        "If your licensed operation is facing banking, compliance or operational challenges — request a structural assessment.",
      href: "/diagnostic",
    },
  },
  {
    slug: "banking-for-high-risk-operations",
    title:
      "Banking for High-Risk Operations: Why Structure Matters More Than Relationships — Octus Consulting",
    date: "2026-03-31",
    category: "Banking",
    excerpt:
      "High-risk banking failures are structural, not relational. The corporate design, compliance quality and jurisdiction determine banking access — not the introduction.",
    content: `### Banking for High-Risk Operations: Why Structure Matters More Than Relationships

The bank is not the problem. Your structure is. Every declined account, every terminated PSP, every failed onboarding traces back to the same cause.

The most common response to a banking refusal in high-risk sectors is to look for another bank. The second bank declines for the same reasons. Then the third.

The problem is never the bank. It is the structure the bank is evaluating.

**Banks assess structure, not business quality.**

A profitable, well-managed iGaming operator with an active licence can be declined by every banking partner it approaches. Not because the business is bad. Because the corporate structure, AML documentation and compliance framework do not meet the bank's internal risk threshold.

Banking compliance teams evaluate independently from regulators. A licence satisfies regulatory requirements. Banking requires a separate standard: clean UBO chains, AML policies that match operational reality, transaction monitoring that actually functions, and a corporate structure that does not trigger enhanced due diligence at every touchpoint.

**The high-risk classification compounds everything.**

When a business operates in a sector classified as high-risk — iGaming, crypto, payments, forex, adult content — every structural weakness is amplified. Offshore incorporation triggers questions. Nominee directors create flags. Complex UBO chains demand explanation. AML policies that read like templates are immediately identified.

Standard banks decline outright. Specialist banks require a level of compliance documentation that most operations cannot produce. The gap between what the operation has and what the bank requires is the gap that keeps the account closed.

**Single-provider dependency is the hidden risk.**

Operations that do secure banking often depend on a single institution. One bank, one PSP, one acquirer. When that provider exits — and in high-risk sectors, exits happen — the operation stops. There is no contingency, no redundancy, no continuity plan.

Building banking resilience means structuring for multiple providers across multiple jurisdictions from the start. Not as a backup plan. As the primary architecture.

**The structural approach to banking.**

Banking access for high-risk operations is a design problem. The corporate structure, jurisdiction, compliance framework and licensing status must be designed with banking scrutiny in mind from day one. Not optimised for the regulator and then adapted for the bank. Designed for both simultaneously.

**What most people get wrong:** They treat banking as a relationship problem. They look for introductions, referrals, "friendly banks." But every new bank runs the same assessment on the same structure. Without changing the structure, the result does not change.

When the structure is right, banking follows. When it is not, no introduction or relationship fixes the problem.`,
    related: [
      { label: "Banking & Payments", href: "/solutions/regulatory/banking-payments" },
      { label: "High-Risk Operations", href: "/markets/high-risk" },
    ],
    cta: {
      label: "If banking is blocking your operation, request a structural assessment.",
      href: "/diagnostic",
    },
  },
  {
    slug: "mica-what-operators-need-to-do",
    title: "MiCA: What Crypto Operators Actually Need to Do — Octus Consulting",
    date: "2026-03-31",
    category: "Crypto",
    excerpt:
      "MiCA is fully applicable. The grandfathering period ends July 2026. This is what CASP authorisation requires in practice — not in theory.",
    content: `### MiCA: What Crypto Operators Actually Need to Do

The grandfathering period ends 1 July 2026. After that, operating without CASP authorisation in the EU is not a compliance gap. It is illegal.

MiCA is no longer upcoming regulation. It is fully applicable across the EU since December 2024. The grandfathering period — which allows existing operators to continue under national regimes — ends on 1 July 2026 in most member states. After that date, operating without CASP authorisation is not a compliance gap. It is illegal.

Over 40 CASP licences have been issued across the Netherlands, Germany, Malta and Luxembourg. The operators who moved early are already authorised. The operators who waited are now under pressure.

**What CASP authorisation actually requires.**

The application is not a registration form. It is a comprehensive regulatory submission that evaluates corporate governance, capital adequacy, compliance infrastructure, IT security and consumer protection. Minimum capital requirements range from EUR50,000 for advisory services to EUR150,000 for trading platforms.

The corporate entity must be established in an EU member state with effective management and decision-making on-site. Governance structures must be defined, with clear reporting lines and accountability. The compliance function must be operational, not documented — regulators are explicitly evaluating whether AML/KYC, transaction monitoring and suspicious activity reporting function in practice.

**The fragmentation problem.**

Despite MiCA's harmonisation goals, implementation varies across member states. Transitional periods differ. Regulatory interpretation differs. Application processing speed differs. An operator that qualifies in Lithuania may face different expectations in Germany. The choice of home member state is not administrative. It is strategic.

Passporting — the ability to operate across all 27 EU member states from a single authorisation — is the key advantage. But passporting only works if the home state authorisation is robust. Weak applications in permissive jurisdictions create problems when operating across stricter markets.

**What most operators get wrong.**

They treat CASP authorisation as an extension of VASP registration. It is not. VASP registration was an AML-only process. MiCA authorisation is a full financial services licensing regime with prudential requirements, consumer protection obligations, and ongoing supervisory expectations.

Operators who approach MiCA with a compliance-light mindset — retrofit AML, minimal governance, template policies — will either fail the application or face enforcement within the first supervisory cycle.

**The deadline is not theoretical.**

July 2026 is not a target. It is a hard stop. ESMA has warned that last-minute applications will face heightened scrutiny. The window for orderly preparation is closing.`,
    related: [
      { label: "Crypto & Digital Assets", href: "/markets/crypto" },
      { label: "Compliance-as-a-Service", href: "/solutions/compliance/compliance-as-a-service" },
    ],
    cta: {
      label:
        "If your crypto operation serves EU users and is not yet MiCA-authorised — request a structural assessment.",
      href: "/diagnostic",
    },
  },
  {
    slug: "curacao-reform-what-changes",
    title: "Curaçao Reform: What Actually Changes for Operators — Octus Consulting",
    date: "2026-03-31",
    category: "Jurisdictions",
    excerpt:
      "Curaçao's gambling regulation is reforming. The transition from master-sublicence to individual licensing changes everything about how operators structure, comply and bank.",
    content: `### Curaçao Reform: What Actually Changes for Operators

The master-sublicence model is ending. If your Curaçao operation was built under it, everything about how you structure, comply and bank is about to change.

Curaçao has operated under a master-sublicence system for over two decades. That system is ending. The transition to individual operator licensing under the new Gambling Control Board (GCB) framework changes the structural requirements for every operator on the island.

This is not a cosmetic update. It is a fundamental shift in how Curaçao-licensed operations must be structured, governed and supervised.

**What the reform introduces.**

The new framework requires each operator to hold an individual licence directly from the GCB. The master-sublicence model — where operators operated under another entity's licence — is being phased out. Individual licensing means individual accountability: each operator is directly responsible for its compliance, governance and operational standards.

The regulatory expectations are increasing across AML/KYC, responsible gambling, player protection, technical standards and financial reporting. Operators that functioned under a sublicence with minimal compliance are now required to build the same infrastructure that individually licensed operators in other jurisdictions maintain.

**What this means for existing operators.**

Operators currently holding sublicences face a transition period. They must apply for individual licences, meet the new compliance requirements, and demonstrate operational substance. Those who cannot meet the standard will lose authorisation.

For operators who built their Curaçao presence as a low-cost, low-compliance entry point, the reform creates a structural problem. The compliance framework, corporate governance and operational substance that were sufficient under a sublicence are not sufficient under individual licensing.

**The banking implication is significant.**

Banking partners have historically been cautious with Curaçao-licensed operators. The reform changes this dynamic in two directions. Operators who meet the new GCB standards may find banking access improves as the jurisdiction's credibility rises. Operators who fail to transition will find banking access disappears entirely.

The reform also affects payment processing. PSPs and acquirers will reassess their risk appetite for Curaçao as the regulatory standard changes. Operators without clean compliance documentation and individual licensing will face onboarding refusal.

**The strategic question for operators.**

The reform forces a decision. Invest in bringing the Curaçao operation up to the new standard. Or use the transition as the trigger to move to a different jurisdiction entirely.

Both are valid strategic paths. Neither works without structural preparation. Upgrading within Curaçao requires compliance investment, governance changes and possibly corporate restructuring. Moving to another jurisdiction requires the same structural build in a new regulatory environment.

**What most operators get wrong:** They assume the transition period will extend. It will not. And they underestimate the gap between what a sublicence required and what individual licensing demands.

The worst option is doing nothing and hoping the transition period extends.`,
    related: [
      { label: "Curaçao", href: "/jurisdictions/curacao" },
      { label: "iGaming Licensing", href: "/solutions/regulatory/igaming-licensing" },
    ],
    cta: {
      label:
        "If your Curaçao operation needs to transition to the new framework — request an assessment.",
      href: "/diagnostic",
    },
  },
  {
    slug: "compliance-as-a-service-vs-internal-teams",
    title:
      "Compliance-as-a-Service vs Internal Teams: When Outsourcing Makes Sense — Octus Consulting",
    date: "2026-03-31",
    category: "Compliance",
    excerpt:
      "Building an internal compliance team is not always the right answer. For regulated operations scaling across jurisdictions, an operational compliance layer may deliver more consistency at lower risk.",
    content: `### Compliance-as-a-Service vs Internal Teams: When Outsourcing Makes Sense

Most companies have compliance on paper. Few have compliance that actually functions under pressure.

The default assumption in regulated businesses is that compliance belongs in-house. Hire a compliance officer, build a team, develop policies, manage reporting internally. For large, stable operations in a single jurisdiction, this works. For most others, it does not.

**Where internal compliance breaks.**

Internal compliance teams typically face three structural constraints. First, depth: a compliance officer hired for one jurisdiction rarely has expertise across multiple regulatory frameworks. When the operation expands, the internal team's knowledge does not expand with it. Second, consistency: compliance is not a project. It is a continuous function. Internal teams face competing priorities, resource constraints and turnover. When the compliance officer leaves, institutional knowledge leaves with them. Third, objectivity: internal compliance is subject to internal pressure. The team responsible for compliance reports to the same leadership that drives commercial targets.

**The scaling problem.**

A single-jurisdiction operation with stable transaction volumes can maintain compliance internally. The moment the operation expands — new markets, new jurisdictions, increased volumes, additional regulatory requirements — the internal model strains. Each new jurisdiction adds compliance obligations. Each increase in volume adds monitoring requirements. Each regulatory change requires policy updates, system adjustments and reporting changes.

Building an internal team that can handle this means hiring multiple specialists across multiple domains: AML, data protection, responsible gambling, regulatory reporting, internal audit. The cost and management overhead grow faster than the compliance benefit.

**What Compliance-as-a-Service actually replaces.**

CAS does not replace the compliance officer role. It replaces the fragmented, under-resourced, inconsistent compliance function that most regulated operations actually have.

An operational CAS model provides: AML/KYC that functions under real transaction volumes, not just in policy documents. Transaction monitoring calibrated to the operation's actual risk profile. Regulatory interaction managed by specialists who understand what supervisors expect. Internal controls that are monitored, not just documented. Reporting cycles that happen on schedule, not when someone remembers.

**When CAS makes sense.**

The decision is not ideological. It is practical. CAS typically makes sense when the operation spans multiple jurisdictions, when compliance complexity is increasing faster than the team can absorb, when banking or payment partners require compliance quality the internal team cannot consistently deliver, or when the cost of building an internal function exceeds the cost of an operational compliance layer.

**When it does not.**

Large operations with established, well-funded compliance departments in a stable regulatory environment may not need external operational support. The decision depends on whether the internal function actually operates consistently — not whether it exists on paper.

**What most companies get wrong:** They equate having a compliance officer with having a compliance function. These are not the same thing. A person can be designated. A function must be built, resourced, monitored and held accountable. When the regulator asks how compliance operates — not who is responsible for it — most internal teams cannot answer.

The question is not whether compliance should be internal or external. It is whether the compliance function actually works. If it does not, the label does not matter.`,
    related: [
      { label: "Compliance-as-a-Service", href: "/solutions/compliance/compliance-as-a-service" },
      { label: "DPO-as-a-Service", href: "/solutions/compliance/dpo-as-a-service" },
    ],
    cta: {
      label:
        "If your compliance function is not operating consistently — request a compliance assessment.",
      href: "/diagnostic",
    },
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(posts.map((p) => p.category))).sort();
}
