import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Solvexa",
  description: "Learn how Solvexa safeguards, processes, and respects enterprise client data, code repositories, and user confidentiality."
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-28 sm:pt-36 pb-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-on-surface select-none relative overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-6 font-mono">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Privacy Policy</span>
        </div>

        {/* Header */}
        <div className="pb-8 mb-10 border-b border-outline-variant/30">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant mt-3">
            Last Updated: September 2026 &bull; Strict Enterprise Standards
          </p>
          <p className="text-base text-gray-300 mt-4 leading-relaxed">
            At Solvexa, your trust and intellectual property are our highest priorities. This Privacy Policy outlines our uncompromising protocols for collecting, storing, and safeguarding client records, code repositories, and technical communications.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10 text-left">
          
          {/* Section 1 */}
          <section className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary/15 text-primary text-sm font-mono font-bold flex items-center justify-center shrink-0">
                01
              </span>
              <span>Information We Collect</span>
            </h2>
            <div className="mt-4 text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-3">
              <p>
                We only collect information directly relevant to consulting, scoping, building, and delivering your software solutions:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-on-surface">
                <li><strong className="text-primary">Contact &amp; Corporate Identity:</strong> Full name, professional email, phone number, and company name provided through inquiry forms.</li>
                <li><strong className="text-primary">Technical Discovery Data:</strong> Architectural blueprints, database requirements, API credentials (exclusively stored in encrypted vaults), and project specifications.</li>
                <li><strong className="text-primary">Telemetry &amp; Usage:</strong> Anonymous website analytics (browser type, load times) used strictly for performance optimization.</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary/15 text-primary text-sm font-mono font-bold flex items-center justify-center shrink-0">
                02
              </span>
              <span>Client Code &amp; Data Security Architecture</span>
            </h2>
            <div className="mt-4 text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-3">
              <p>
                All development repositories, staging environments, and communications follow military-grade cryptographic protocols:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-on-surface">
                <li><strong className="text-primary">256-Bit AES Encryption:</strong> All sensitive data at rest and TLS 1.3 encryption for data in transit.</li>
                <li><strong className="text-primary">Private Repositories:</strong> Code is hosted in restricted, multi-factor authenticated private repositories. No unauthorized personnel have access.</li>
                <li><strong className="text-primary">Zero AI Training on Client Code:</strong> Solvexa never uses client proprietary source code, internal databases, or private documentation to train public LLM models.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary/15 text-primary text-sm font-mono font-bold flex items-center justify-center shrink-0">
                03
              </span>
              <span>Zero Data Selling Policy</span>
            </h2>
            <div className="mt-4 text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-3">
              <p>
                Solvexa does not sell, rent, monetize, or trade any client personal data or technical specifications to third-party advertisers or data brokers under any conditions.
              </p>
              <p>
                Information is only shared with verified third-party infrastructure providers (e.g. AWS, Vercel, Supabase) strictly necessary for hosting and provisioning client software.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary/15 text-primary text-sm font-mono font-bold flex items-center justify-center shrink-0">
                04
              </span>
              <span>Your Data &amp; Deletion Rights</span>
            </h2>
            <div className="mt-4 text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-3">
              <p>
                In compliance with global data privacy frameworks (including GDPR &amp; CCPA), enterprise clients have full rights to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-on-surface">
                <li>Request complete export of all personal communications and project documentation.</li>
                <li>Request immediate permanent deletion of staging databases, test data, and communication logs upon project completion.</li>
                <li>Revoke access credentials and audit team members associated with private deliverables.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary/15 text-primary text-sm font-mono font-bold flex items-center justify-center shrink-0">
                05
              </span>
              <span>Contact Our Privacy &amp; Compliance Officer</span>
            </h2>
            <div className="mt-4 text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-3">
              <p>
                For data access requests, formal bilateral NDA submissions, or compliance audits, reach out directly to our security desk:
              </p>
              <div className="p-4 rounded-2xl bg-surface-container-highest/40 border border-outline-variant/30 font-mono text-xs sm:text-sm text-on-surface space-y-1">
                <p>Email: <a href="mailto:info.solvexa@gmail.com" className="text-primary hover:underline font-bold">info.solvexa@gmail.com</a></p>
                <p>Subject Line: <span className="text-primary">ATTN: Privacy &amp; Data Governance</span></p>
                <p>Response SLA: Within 24 business hours</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
