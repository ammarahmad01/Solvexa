import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Solvexa",
  description: "Terms and conditions governing software development, digital consulting, and engineering services provided by Solvexa."
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-28 sm:pt-36 pb-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-on-surface select-none relative overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto w-full">
        {/* Breadcrumb navigation */}
        <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-6 font-mono">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Terms &amp; Conditions</span>
        </div>

        {/* Header */}
        <div className="pb-8 mb-10 border-b border-outline-variant/30">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant mt-3">
            Last Updated: September 2026 &bull; Effective Immediately
          </p>
          <p className="text-base text-gray-300 mt-4 leading-relaxed">
            Welcome to Solvexa. These Terms and Conditions govern your engagement with Solvexa’s digital engineering, software development, AI solutions, and outsourced design services. By contracting with us or using our platforms, you agree to comply with these terms.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-left">
          
          {/* Section 1 */}
          <section className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary/15 text-primary text-sm font-mono font-bold flex items-center justify-center shrink-0">
                01
              </span>
              <span>Scope of Engineering Services</span>
            </h2>
            <div className="mt-4 text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-3">
              <p>
                Solvexa provides custom software development, web applications, mobile apps, enterprise AI/ML solutions, cloud infrastructure, and UI/UX design as detailed in signed project proposals, Statements of Work (SOW), or service agreements.
              </p>
              <p>
                Any additional features, out-of-scope revisions, or accelerated deadlines requested beyond the original specification will be assessed under a formal Change Request and billed at our standard hourly or milestone rates.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary/15 text-primary text-sm font-mono font-bold flex items-center justify-center shrink-0">
                02
              </span>
              <span>Intellectual Property &amp; Code Ownership</span>
            </h2>
            <div className="mt-4 text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-3">
              <p>
                <strong className="text-on-surface">Client Ownership:</strong> Upon complete settlement of all agreed milestone payments, all custom source code, documentation, UI assets, and proprietary logic developed exclusively for the client shall become the sole property of the client.
              </p>
              <p>
                <strong className="text-on-surface">Open-Source &amp; Pre-Existing Frameworks:</strong> Pre-existing libraries, third-party APIs, open-source modules, and Solvexa’s internal boilerplate frameworks remain subject to their respective licenses (e.g. MIT, Apache 2.0).
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary/15 text-primary text-sm font-mono font-bold flex items-center justify-center shrink-0">
                03
              </span>
              <span>Payment Terms &amp; Milestone Billing</span>
            </h2>
            <div className="mt-4 text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-3">
              <p>
                All projects are billed based on predetermined deliverables, time-and-materials, or milestone structures outlined in the SOW. Invoices are payable within 14 calendar days of issuance.
              </p>
              <p>
                Solvexa reserves the right to pause active development, staging deployments, or API credentials if an agreed milestone payment is overdue by more than 10 business days.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary/15 text-primary text-sm font-mono font-bold flex items-center justify-center shrink-0">
                04
              </span>
              <span>Confidentiality &amp; Non-Disclosure (NDA)</span>
            </h2>
            <div className="mt-4 text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-3">
              <p>
                Both parties agree to hold all proprietary technical documents, database schemas, business logic, customer records, and trade secrets in strict confidence. Solvexa signs formal bilateral NDAs before beginning discovery sprints on proprietary systems.
              </p>
              <p>
                Solvexa shall not disclose, sell, or license any client data or software architecture to third parties under any circumstances.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary/15 text-primary text-sm font-mono font-bold flex items-center justify-center shrink-0">
                05
              </span>
              <span>Warranties, Bug Fixes &amp; Maintenance</span>
            </h2>
            <div className="mt-4 text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-3">
              <p>
                All delivered code includes a <strong className="text-on-surface">30-day post-launch warranty period</strong> during which any functional defects or code errors deviating from the approved specification will be patched at no extra charge.
              </p>
              <p>
                Long-term infrastructure hosting, third-party API version breaks, or security patch maintenance can be engaged under our dedicated monthly SLA plans.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary/15 text-primary text-sm font-mono font-bold flex items-center justify-center shrink-0">
                06
              </span>
              <span>Governing Law &amp; Dispute Resolution</span>
            </h2>
            <div className="mt-4 text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-3">
              <p>
                These terms shall be governed by and construed in accordance with applicable corporate and commercial laws. Any disputes arising from this contract shall first be subject to good-faith mutual mediation before entering formal arbitration.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low border border-primary/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-on-surface">Have Questions Regarding Our Terms?</h3>
              <p className="text-sm text-on-surface-variant mt-1">Our legal and technical desk is available to assist.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-on-primary font-bold text-sm transition-all duration-300 shrink-0"
            >
              Contact Legal Desk
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
