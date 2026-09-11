import HeroSection from "../components/HeroSection";
import StatsCounter from "../components/StatsCounter";
import TrustedBySection from "../components/TrustedBySection";
import ClientAttractionSection from "../components/ClientAttractionSection";
import ServicesGridSection from "../components/ServicesGridSection";
import ClientLoveSection from "../components/ClientLoveSection";
import TechStackSection from "../components/TechStackSection";
import ContactCtaSection from "../components/ContactCtaSection";
import FaqSection from "../components/FaqSection";
import { getMergedWorkProjects } from "@/lib/firebaseAdmin";

export default async function Home() {
  // Extract unique client logos from all projects (local + CMS)
  let clientLogos: { name: string; src: string }[] = [];
  try {
    const projects = await getMergedWorkProjects();
    const seen = new Set<string>();
    for (const p of projects as any[]) {
      if (p.clientLogo && !seen.has(p.clientLogo)) {
        seen.add(p.clientLogo);
        clientLogos.push({ name: p.brandName || p.client || "Client", src: p.clientLogo });
      }
    }
  } catch {
    // TrustedBySection will fall back to its default logos
  }

  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">
      {/* 3.1 Hero Section with Anime.js & Kinetic 3D Elements */}
      <HeroSection />

      {/* Rotating Stats Row */}
      <StatsCounter />

      {/* 3.3 Core Capabilities Showcase (Built for Velocity. Engineered for Scale.) */}
      <ClientAttractionSection />

      {/* 3.4 Our Services Grid */}
      <ServicesGridSection />

      {/* 3.5 Brands That Trust Solvexa */}
      <TrustedBySection logos={clientLogos} />

      {/* 3.6 "Why Our Clients Love Us?" Testimonials */}
      <ClientLoveSection />

      {/* 3.7 Our Technology Stack */}
      <TechStackSection />

      {/* 3.8 Contact CTA / Lead Capture Form */}
      <ContactCtaSection />

      {/* 3.9 FAQ's */}
      <FaqSection />
    </div>
  );
}
