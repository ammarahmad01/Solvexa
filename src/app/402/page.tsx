import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "402 Payment Required | Solvexa Enterprise Gateway",
  description: "HTTP 402: Payment Required. Milestone billing clearance, escrow authorization, or project retainer is required to access this resource."
};

export default function PaymentRequiredPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen pt-28 pb-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-on-surface select-none relative overflow-hidden text-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-secondary-container/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Glowing 402 Badge with Lock Icon */}
        <div className="relative mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-surface-container-low/90 border-2 border-primary/40 flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.3)] backdrop-blur-2xl">
            <span className="material-symbols-outlined text-5xl sm:text-6xl text-primary animate-pulse">
              lock
            </span>
          </div>
          <span className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-primary text-on-primary font-mono text-xs font-bold uppercase shadow-lg">
            HTTP 402
          </span>
        </div>

        {/* Big Error Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-on-surface tracking-tight leading-tight">
          Payment{" "}
          <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
            Required
          </span>
        </h1>

        <p className="font-mono text-xs sm:text-sm text-primary tracking-widest uppercase mt-3">
          Milestone Clearance / Escrow Authorization Needed
        </p>

        {/* Explanatory Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 text-left shadow-2xl space-y-4 text-sm text-on-surface-variant">
          <p className="leading-relaxed">
            Access to this enterprise deployment, private client staging environment, or code artifact repository requires verified milestone settlement or active retainer clearance.
          </p>
          <div className="p-4 rounded-2xl bg-surface-container-highest/40 border border-outline-variant/30 font-mono text-xs space-y-1 text-on-surface">
            <p><strong className="text-primary">Status Code:</strong> 402 Payment Required</p>
            <p><strong className="text-primary">Gateway Protocol:</strong> Solvexa Enterprise Billing Engine</p>
            <p><strong className="text-primary">Action:</strong> Complete milestone invoice or contact your designated account executive.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container shadow-xl hover:shadow-[0_0_24px_rgba(242,202,80,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Contact Accounts Desk
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm text-primary border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            Return to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}
