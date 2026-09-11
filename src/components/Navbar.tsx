"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesData } from "../data/services";
import ServiceBrandIcon from "./ServiceBrandIcon";

export default function Navbar() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Do not render marketing navbar inside admin portal
  if (pathname?.startsWith("/solvexa_admin_portal_001")) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pt-space-md pointer-events-none">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between h-[72px] sm:h-[84px] px-6 sm:px-8 rounded-full backdrop-blur-2xl transition-all duration-300 pointer-events-auto border ${
          scrolled
            ? "bg-surface-container-lowest/60 border-primary/30 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.15)]"
            : "bg-surface-container-lowest/30 border-white/10 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.4)] hover:border-white/20"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link className="flex items-center group py-1" href="/">
            <img
              src="/assets/logo.png"
              alt="Solvexa Logo"
              className="h-10 sm:h-12 md:h-[50px] w-auto object-contain drop-shadow-md group-hover:opacity-95 transition-opacity"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-2 sm:gap-2.5 p-1.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-inner"
          data-active-classes="bg-surface-container-highest text-primary font-semibold shadow-[inset_0_1px_1px_rgba(242,202,80,0.2)]"
        >
          {/* Home */}
          <Link
            href="/"
            className={`px-4.5 py-2 rounded-full font-label-md text-sm font-medium transition-all ${
              isActive("/")
                ? "bg-surface-container-highest text-primary font-semibold shadow-[inset_0_1px_1px_rgba(242,202,80,0.2)]"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`px-4.5 py-2 rounded-full font-label-md text-sm font-medium transition-all inline-flex items-center gap-1.5 ${
                isActive("/services")
                  ? "bg-surface-container-highest text-primary font-semibold shadow-[inset_0_1px_1px_rgba(242,202,80,0.2)]"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
              }`}
            >
              <span>Services</span>
              <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </Link>

            {/* Mega Dropdown Menu: 4x4 Grid */}
            {servicesOpen && (
              <div className="absolute top-full -left-48 lg:-left-60 pt-4 w-[860px] lg:w-[920px] pointer-events-auto">
                <div className="p-3.5 rounded-2xl bg-surface-container-low/95 backdrop-blur-2xl border border-primary/30 shadow-[0_25px_60px_-15px_rgba(12,3,30,0.9),0_0_30px_rgba(212,175,55,0.15)] animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-4 gap-2">
                    {servicesData.slice(0, 15).map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}`}
                        className="p-2.5 rounded-xl hover:bg-surface-container-high/80 transition-all flex items-start gap-2.5 group border border-transparent hover:border-outline-variant/40 hover:-translate-y-0.5"
                      >
                        <ServiceBrandIcon slug={s.slug} size="sm" />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-on-surface group-hover:text-primary transition-colors truncate">
                            {s.title}
                          </p>
                          <p className="text-[11px] text-on-surface-variant line-clamp-1">
                            {s.tagline}
                          </p>
                        </div>
                      </Link>
                    ))}

                    {/* 16th Tile: Explore All Services in the Grid */}
                    <Link
                      href="/services"
                      className="p-2.5 rounded-xl transition-all flex items-start gap-2.5 group bg-gradient-to-br from-primary via-primary to-amber-500 text-on-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-primary-fixed"
                    >
                      <div className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center text-on-primary group-hover:scale-110 transition-transform shrink-0">
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-on-primary truncate">
                          Explore All Services
                        </p>
                        <p className="text-[11px] text-on-primary/90 line-clamp-1 font-medium">
                          All 16 capabilities &rarr;
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Work */}
          <Link
            href="/work"
            className={`px-4.5 py-2 rounded-full font-label-md text-sm font-medium transition-all ${
              isActive("/work")
                ? "bg-surface-container-highest text-primary font-semibold shadow-[inset_0_1px_1px_rgba(242,202,80,0.2)]"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
            }`}
          >
            Work
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={`px-4.5 py-2 rounded-full font-label-md text-sm font-medium transition-all ${
              isActive("/about")
                ? "bg-surface-container-highest text-primary font-semibold shadow-[inset_0_1px_1px_rgba(242,202,80,0.2)]"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
            }`}
          >
            About Us
          </Link>

          {/* Team */}
          <Link
            href="/team"
            className={`px-4.5 py-2 rounded-full font-label-md text-sm font-medium transition-all ${
              isActive("/team")
                ? "bg-surface-container-highest text-primary font-semibold shadow-[inset_0_1px_1px_rgba(242,202,80,0.2)]"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
            }`}
          >
            Team
          </Link>

        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="relative hidden lg:inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-2.5 rounded-full font-label-md text-sm sm:text-base font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_28px_rgba(242,202,80,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 border border-primary-fixed/40"
          >
            <span className="relative z-10">Contact Us</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high/60 border border-outline-variant/30 text-on-surface hover:text-primary transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto rounded-3xl bg-surface-container-low/95 backdrop-blur-2xl border border-outline-variant/40 shadow-2xl pointer-events-auto animate-in fade-in slide-in-from-top-3 duration-200 max-h-[calc(100vh-7rem)] overflow-y-auto">
          <div className="flex flex-col gap-1.5 p-5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                isActive("/") ? "bg-surface-container-highest text-primary" : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              Home
            </Link>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-colors flex items-center justify-between w-full ${
                isActive("/services") ? "bg-surface-container-highest text-primary" : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              <span>Services</span>
              <span className={`material-symbols-outlined text-base transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}>expand_more</span>
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col gap-0.5 pl-3 border-l-2 border-primary/30 ml-5 my-1">
                {servicesData.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/80 transition-colors truncate"
                  >
                    {s.title}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-bold text-primary hover:bg-primary/10 transition-colors mt-1"
                >
                  View All Services →
                </Link>
              </div>
            )}
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                isActive("/work") ? "bg-surface-container-highest text-primary" : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              Work
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                isActive("/about") ? "bg-surface-container-highest text-primary" : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/team"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                isActive("/team") ? "bg-surface-container-highest text-primary" : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              Our Team
            </Link>
            <div className="pt-4 mt-2 border-t border-outline-variant/20 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container shadow-lg hover:shadow-xl transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
