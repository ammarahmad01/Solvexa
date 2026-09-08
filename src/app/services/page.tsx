import Link from "next/link";
import { servicesData } from "../../data/services";
import ContactCtaSection from "../../components/ContactCtaSection";
import OutsourcingSection from "../../components/OutsourcingSection";
import TechLogo from "../../components/TechLogos";
import ClientLoveSection from "../../components/ClientLoveSection";
import ServiceBrandIcon from "../../components/ServiceBrandIcon";

export const metadata = {
  title: "Our Services | Solvexa - Digital Engineering, AI & Creative Solutions",
  description: "Explore Solvexa's full suite of 16 services: Web Development, Mobile Apps, UI/UX Design, Digital Marketing, SEO, Google & Meta Ads, Branding, Video Editing, MVP Development, Shopify, WordPress, AI & ML, LLMs & RAG, Agentic AI, Model Training, and FYP Ideas.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative w-full pt-12 pb-16 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-caps text-xs tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            End-to-End Digital Capabilities
          </div>
          <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Our Services —{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              Solutions Built Specifically
            </span>{" "}
            for Your Business
          </h1>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-5 max-w-2xl leading-relaxed">
            From bespoke high-performance web systems and native-feel mobile apps to cutting-edge AI architectures, autonomous agents, and strategic marketing funnels.
          </p>
        </div>
      </section>

      {/* Full 16 Services In-Depth Grid */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-3xl bg-surface-container-low/80 backdrop-blur-2xl border border-outline-variant/30 hover:border-primary/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)]"
            >
              {/* Card Image Banner */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <ServiceBrandIcon slug={service.slug} size="md" />
                  <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/30 text-[10px] font-mono uppercase text-secondary font-semibold">
                    0{index + 1} • {service.badge}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="font-headline-sm text-2xl sm:text-3xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="font-body-md text-sm sm:text-base text-primary font-medium mt-1">
                    {service.tagline}
                  </p>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-3 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Sub-Services Checklist */}
                  <div className="mt-6 pt-5 border-t border-outline-variant/20">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-on-surface-variant mb-3 font-semibold">
                      Core Specializations:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.subServices.slice(0, 4).map((sub, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-on-surface-variant">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                          <span className="truncate">{sub.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips with Real Logos */}
                  <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center gap-2 flex-wrap">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest/60 border border-outline-variant/30 text-xs text-on-surface font-medium"
                      >
                        <TechLogo name={tech.name} className="w-3.5 h-3.5" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                    <span className="text-[11px] font-mono text-primary">
                      +{service.technologies.length - 4} more
                    </span>
                  </div>
                </div>

                {/* Detail Page Link CTA */}
                <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant font-mono">Detailed Specs &amp; Process</span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-label-md text-xs font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container shadow-md group-hover:shadow-[0_0_20px_rgba(242,202,80,0.6)] hover:scale-105 transition-all"
                  >
                    <span>Explore Service Page</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dedicated Team / Outsourcing block */}
      <OutsourcingSection />

      {/* Client Love Testimonials */}
      <ClientLoveSection />

      {/* Contact CTA */}
      <ContactCtaSection />
    </div>
  );
}
