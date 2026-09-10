"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ScrollProgress from "./ScrollProgress";
import BackToTopButton from "./BackToTopButton";
import WhatsAppButton from "./WhatsAppButton";
import BackgroundEffects from "./BackgroundEffects";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface SiteLayoutWrapperProps {
  children: React.ReactNode;
}

export default function SiteLayoutWrapper({ children }: SiteLayoutWrapperProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/solvexa_admin_portal_001");

  if (isAdminRoute) {
    return (
      <>
        {/* Full website background shader & animated ambient effects */}
        <BackgroundEffects />
        <main className="w-full min-h-screen relative z-10">
          {children}
        </main>
      </>
    );
  }

  return (
    <>
      <ScrollProgress />
      <BackToTopButton />
      <WhatsAppButton />
      <BackgroundEffects />
      <Navbar />
      <main className="w-full pt-24 min-h-[calc(100vh-100px)] relative z-10">
        {children}
      </main>
      <Footer />
    </>
  );
}
