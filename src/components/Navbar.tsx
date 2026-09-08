"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesData } from "../data/services";
import { workCategories } from "../data/work";
import ServiceBrandIcon from "./ServiceBrandIcon";

export default function Navbar() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    setWorkOpen(false);
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
        className={`max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-[72px] px-5 sm:px-8 rounded-full backdrop-blur-2xl transition-all duration-300 pointer-events-auto border ${
          scrolled
            ? "bg-surface-container-lowest/50 border-primary/30 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.15)]"
            : "bg-surface-container-lowest/20 border-white/10 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.4)] hover:border-white/20"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-space-sm">
          <Link className="flex items-center group" href="/">
            <img
              src="/assets/logo.png"
              alt="Solvexa Logo"
              className="h-8 sm:h-9 w-auto object-contain drop-shadow-md group-hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10"
          data-active-classes="bg-surface-container-highest text-primary font-semibold shadow-[inset_0_1px_1px_rgba(242,202,80,0.2)]"
        >
          {/* Home */}
          <Link
            href="/"
            className={`px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all ${
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
              className={`px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all inline-flex items-center gap-1 ${
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

          {/* Work Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <Link
              href="/work"
              className={`px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all inline-flex items-center gap-1 ${
                isActive("/work")
                  ? "bg-surface-container-highest text-primary font-semibold shadow-[inset_0_1px_1px_rgba(242,202,80,0.2)]"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
              }`}
            >
              <span>Work</span>
              <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${workOpen ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </Link>

            {/* Work Mega Dropdown: Matching 4-Column Grid */}
            {workOpen && (
              <div className="absolute top-full -left-64 lg:-left-72 pt-4 w-[860px] lg:w-[920px] pointer-events-auto">
                <div className="p-3.5 rounded-2xl bg-surface-container-low/95 backdrop-blur-2xl border border-primary/30 shadow-[0_25px_60px_-15px_rgba(12,3,30,0.9),0_0_30px_rgba(212,175,55,0.15)] animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { name: "Website Development", icon: "laptop_mac", desc: "Next.js & SaaS Platforms" },
                      { name: "Mobile App Development", icon: "phone_iphone", desc: "iOS & Android Apps" },
                      { name: "Desktop Applications", icon: "desktop_windows", desc: "Enterprise C# & .NET" },
                      { name: "Game Development", icon: "sports_esports", desc: "Unity 3D & Procedural" },
                      { name: "Database Management", icon: "storage", desc: "High-Concurrency Cloud DBs" },
                      { name: "Branding & Logo Design", icon: "auto_awesome", desc: "Visual Identity Systems" },
                      { name: "Video & Motion", icon: "movie_creation", desc: "Cinematic & 3D Stingers" },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        href={`/work?category=${encodeURIComponent(item.name)}`}
                        className="p-2.5 rounded-xl hover:bg-surface-container-high/80 transition-all flex items-start gap-2.5 group border border-transparent hover:border-outline-variant/40 hover:-translate-y-0.5"
                      >
                        <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shrink-0">
                          <span className="material-symbols-outlined text-base">{item.icon}</span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-on-surface group-hover:text-primary transition-colors truncate">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-on-surface-variant line-clamp-1">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}

                    {/* 8th Tile: Explore All Work in the Grid */}
                    <Link
                      href="/work"
                      className="p-2.5 rounded-xl transition-all flex items-start gap-2.5 group bg-gradient-to-br from-primary via-primary to-amber-500 text-on-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-primary-fixed"
                    >
                      <div className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center text-on-primary group-hover:scale-110 transition-transform shrink-0">
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-on-primary truncate">
                          Explore All Projects
                        </p>
                        <p className="text-[11px] text-on-primary/90 line-clamp-1 font-medium">
                          Portfolio Archive &rarr;
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* About */}
          <Link
            href="/about"
            className={`px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all ${
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
            className={`px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all ${
              isActive("/team")
                ? "bg-surface-container-highest text-primary font-semibold shadow-[inset_0_1px_1px_rgba(242,202,80,0.2)]"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
            }`}
          >
            Team
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all ${
              isActive("/contact")
                ? "bg-surface-container-highest text-primary font-semibold shadow-[inset_0_1px_1px_rgba(242,202,80,0.2)]"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-space-sm">
          <a
            href="tel:+923288521417"
            className="hidden md:inline-flex items-center gap-1.5 px-space-md py-space-xs rounded-full font-label-md text-xs text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/30 hover:border-primary/40 bg-surface-container-lowest/40"
          >
            <span className="material-symbols-outlined text-sm text-primary">call</span>
            <span>+92 328 8521417</span>
          </a>

          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center px-space-lg py-space-xs rounded-full font-label-md text-label-md font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_28px_rgba(242,202,80,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 border border-primary-fixed/40"
          >
            <span className="relative z-10">Get a Quote →</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high/60 border border-outline-variant/30 text-on-surface hover:text-primary transition-colors"
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
        <div className="xl:hidden mt-3 max-w-7xl mx-auto rounded-3xl bg-surface-container-low/95 backdrop-blur-2xl border border-outline-variant/40 shadow-2xl p-6 pointer-events-auto animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                isActive("/") ? "bg-surface-container-highest text-primary" : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                isActive("/services") ? "bg-surface-container-highest text-primary" : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              Services (All 16 Services)
            </Link>
            <Link
              href="/work"
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                isActive("/work") ? "bg-surface-container-highest text-primary" : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              Work &amp; Portfolio Case Studies
            </Link>
            <Link
              href="/about"
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                isActive("/about") ? "bg-surface-container-highest text-primary" : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/team"
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                isActive("/team") ? "bg-surface-container-highest text-primary" : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                isActive("/contact") ? "bg-surface-container-highest text-primary" : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              Contact Us
            </Link>
            <div className="pt-4 mt-2 border-t border-outline-variant/20 flex flex-col gap-3">
              <a
                href="tel:+923288521417"
                className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary"
              >
                <span className="material-symbols-outlined text-base text-primary">call</span>
                +92 328 8521417
              </a>
              <Link
                href="/contact"
                className="w-full text-center py-3 rounded-full font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container shadow-lg"
              >
                Get in Touch Today
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
