import Link from "next/link";
import { servicesData } from "../../data/services";
import ContactCtaSection from "../../components/ContactCtaSection";
import TechLogo from "../../components/TechLogos";
import ClientLoveSection from "../../components/ClientLoveSection";
import ServiceBrandIcon from "../../components/ServiceBrandIcon";
import ScrollToServiceButton from "../../components/ScrollToServiceButton";

function getPrimaryTechnologies(service: (typeof servicesData)[number]) {
  // Return the top 6 primary technologies for this service so full stack (frontend, backend, database, tools) is visible
  return service.technologies.slice(0, 6);
}

export const metadata = {
  title: "Our Services | Solvexa - Digital Engineering, AI & Creative Solutions",
  description: "Explore Solvexa's full suite of 16 services: Web Development, Mobile Apps, UI/UX Design, Digital Marketing, SEO, Google & Meta Ads, Branding, Video Editing, MVP Development, Shopify, WordPress, AI & ML, LLMs & RAG, Agentic AI, Model Training, and FYP Ideas.",
};

export default function ServicesPage() {
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden text-on-surface select-none">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden px-margin-mobile pb-5 pt-10 md:px-margin-tablet md:pb-6 lg:px-margin-desktop lg:pb-8 lg:pt-14">
        <div className="pointer-events-none absolute left-1/2 top-[-8rem] h-[28rem] w-[min(80vw,70rem)] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <h1 className="font-headline-lg text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            One capable team for your next{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              big move.
            </span>
          </h1>
          
          <p className="mt-5 max-w-2xl font-body-lg text-base leading-relaxed text-on-surface-variant sm:text-lg">
            From ambitious first launches to systems already serving millions, we bring product strategy, expressive design, and serious engineering into one focused delivery team.
          </p>

          <ScrollToServiceButton
            targetId={servicesData[0].slug}
            ariaLabel={`View all ${servicesData.length} services`}
            className="group mt-6 inline-flex items-center gap-4 rounded-full border border-primary/40 bg-surface-container-lowest/70 py-1.5 pl-5 pr-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-on-surface-variant shadow-[0_10px_30px_-18px_rgba(242,202,80,0.7)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-white hover:shadow-[0_14px_35px_-16px_rgba(242,202,80,0.55)]"
          >
            <span>{servicesData.length} disciplines</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-on-primary transition-transform duration-300 group-hover:translate-y-1 group-hover:bg-primary-fixed">
              <span className="material-symbols-outlined text-lg">arrow_downward</span>
            </span>
          </ScrollToServiceButton>
        </div>

      </section>

      {/* Services Alternating Cards List */}
      <section id="service-disciplines" className="relative w-full scroll-mt-24 px-margin-mobile pb-space-3xl pt-8 md:px-margin-tablet md:pt-10 lg:px-margin-desktop lg:pt-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 lg:gap-10">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;
            const visibleTech = getPrimaryTechnologies(service);

            return (
              <article
                key={service.id}
                id={service.slug}
                className="services-reveal group relative scroll-mt-28 overflow-hidden rounded-[2rem] border border-outline-variant/30 bg-surface-container-low/80 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:shadow-[0_24px_80px_-35px_rgba(242,202,80,0.2)]"
                style={{ animationDelay: `${Math.min(index * 70, 700)}ms` }}
              >
                <div className={`grid min-h-[400px] lg:grid-cols-2 ${isReversed ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  {/* Visual Media Column */}
                  <div className="services-card-media relative min-h-[220px] overflow-hidden lg:min-h-full">
                    <img
                      src={service.heroImage}
                      alt={`${service.title} service illustration`}
                      className="services-card-image absolute inset-0 h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-surface-container-lowest/10 via-transparent to-surface-container-lowest/95 lg:to-surface-container-lowest/70" />
                    <div className="absolute inset-x-6 top-6 flex items-center justify-between lg:inset-x-8 lg:top-8">
                      <span className="font-mono text-xs font-semibold tracking-[0.2em] text-white/75">
                        {String(index + 1).padStart(2, "0")} / {String(servicesData.length).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
                      <ServiceBrandIcon slug={service.slug} size="md" />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-7 xl:p-8">
                    <div>
                      <p className="mb-1 font-label-caps text-[10px] uppercase tracking-[0.16em] text-primary">
                        {service.tagline}
                      </p>
                      <h2 className="max-w-xl font-headline-sm text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-primary sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 line-clamp-3 max-w-xl text-sm leading-6 text-on-surface-variant sm:text-[15px]">
                        {service.shortDesc} {service.overview[0]}
                      </p>

                      <div className="mt-4 grid gap-4 border-t border-outline-variant/25 pt-4 lg:grid-cols-[1.15fr_.85fr]">
                        <div>
                          <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                            What we deliver
                          </p>
                          <div className="grid gap-x-5 gap-y-2 sm:grid-cols-3 lg:grid-cols-1">
                            {service.subServices.slice(0, 3).map((subService) => (
                              <div key={subService.title} className="flex items-start gap-2 text-xs leading-5 text-on-surface-variant">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span>{subService.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="border-outline-variant/25 lg:border-l lg:pl-5">
                          <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                            Preferred stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {visibleTech.map((tech) => (
                              <span
                                key={tech.name}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-outline-variant/35 bg-surface-container-highest/60 px-2.5 py-1.5 text-[11px] font-medium text-on-surface"
                              >
                                <TechLogo name={tech.name} className="h-3.5 w-3.5" />
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 flex gap-5 border-t border-outline-variant/25 pt-3">
                        {service.stats.slice(0, 2).map((stat) => (
                          <div key={stat.label}>
                            <p className="font-headline-sm text-lg font-bold text-primary">{stat.value}</p>
                            <p className="mt-0.5 text-[10px] uppercase tracking-wide text-on-surface-variant">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-5 border-t border-outline-variant/25 pt-4">
                      <span className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant sm:block">
                        Explore the full capability
                      </span>
                      <Link
                        href={`/services/${service.slug}`}
                        aria-label={`Explore ${service.title} service`}
                        className="group/cta ml-auto inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary px-4 py-2.5 text-xs font-bold text-on-primary transition-all duration-300 hover:gap-4 hover:bg-primary-fixed hover:shadow-[0_0_28px_rgba(242,202,80,0.35)]"
                      >
                        View service
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/15 transition-transform duration-300 group-hover/cta:rotate-[-45deg]">
                          <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <ClientLoveSection />
      <ContactCtaSection />
    </div>
  );
}
