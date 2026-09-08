import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page Not Found | Solvexa",
  description: "The page you are looking for does not exist or has been moved."
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen pt-28 pb-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-on-surface select-none relative overflow-hidden text-center">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Glowing 404 Text */}
        <div className="font-mono text-8xl sm:text-9xl font-extrabold text-primary tracking-tighter drop-shadow-[0_0_40px_rgba(242,202,80,0.4)]">
          404
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-on-surface tracking-tight mt-2">
          Page Not{" "}
          <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
            Found
          </span>
        </h1>

        <p className="text-base sm:text-lg text-on-surface-variant mt-4 max-w-md leading-relaxed">
          The link you followed may be broken, relocated, or does not exist on Solvexa. Let’s get you back on track.
        </p>

        {/* Quick links */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container shadow-xl hover:shadow-[0_0_24px_rgba(242,202,80,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Back to Home
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm text-primary border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            Explore Services
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm text-on-surface-variant hover:text-on-surface border border-outline-variant/30 hover:border-outline-variant transition-all duration-300"
          >
            Contact Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
