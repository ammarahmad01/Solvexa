import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "../../../data/services";
import TechLogo from "../../../components/TechLogos";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  servicesData.forEach((service) => {
    params.push({ slug: service.slug });
    if (service.aliases) {
      service.aliases.forEach((alias) => params.push({ slug: alias }));
    }
  });
  return params;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug || s.aliases?.includes(slug));
  if (!service) return { title: "Service Not Found | Solvexa" };

  return {
    title: `${service.title} | Solvexa Digital Engineering`,
    description: `${service.shortDesc} ${service.tagline}`,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug || s.aliases?.includes(slug));

  if (!service) {
    notFound();
  }

  return (
    <div className="relative flex w-full flex-col overflow-x-hidden text-on-surface select-none">
      {/* 1. HERO SECTION (Badges, services button, process button, and stats removed) */}
      <section className="relative w-full overflow-hidden px-margin-mobile pb-16 pt-12 md:px-margin-tablet md:pb-20 lg:px-margin-desktop lg:pb-24 lg:pt-16">
        {/* Ambient background lighting */}
        <div className="pointer-events-none absolute left-[10%] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-primary/12 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-[-14rem] right-[5%] h-[28rem] w-[28rem] rounded-full bg-secondary-container/10 blur-[140px]" />

        <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Text Column */}
          <div className="flex w-full flex-col items-start text-left">
            {/* Headline H1 */}
            <h1 className="max-w-2xl font-headline-lg text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>

            {/* Tagline / Subheadline */}
            <p className="mt-4 max-w-2xl font-title-lg text-base font-semibold leading-relaxed text-primary sm:text-lg">
              {service.heroHeadline}
            </p>

            {/* Detailed Body Copy */}
            <div className="mt-4 max-w-2xl space-y-3 font-body-lg text-sm leading-relaxed text-on-surface-variant sm:text-base">
              {service.overview.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Action Buttons (Process button removed) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-label-md text-sm font-bold text-on-primary shadow-[0_15px_35px_-16px_rgba(242,202,80,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-fixed hover:shadow-[0_18px_40px_-14px_rgba(242,202,80,0.7)] cursor-pointer"
              >
                <span>Start Your Project</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>

              <a
                href="#sub-services"
                className="inline-flex items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container-lowest/70 px-6 py-3.5 font-label-md text-sm font-semibold text-on-surface-variant backdrop-blur-md transition-all duration-300 hover:border-primary hover:text-white cursor-pointer"
              >
                <span>Explore Capabilities</span>
                <span className="material-symbols-outlined text-sm">south</span>
              </a>
            </div>
          </div>

          {/* Right Visual Column (Badge removed, perfectly sized with smooth micro-animation & glow) */}
          <div className="relative w-full flex items-center justify-center">
            {/* Ambient gold aura */}
            <div className="pointer-events-none absolute -inset-3 rounded-[3rem] bg-gradient-to-tr from-primary/20 via-transparent to-secondary-container/15 blur-2xl opacity-70 transition-opacity duration-700" />

            <div className="group relative w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-outline-variant/30 bg-surface-container-lowest shadow-[0_30px_80px_-25px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.14)] transition-all duration-700 hover:border-primary/55 hover:shadow-[0_35px_90px_-20px_rgba(242,202,80,0.25)] hover:-translate-y-1.5">
              <img
                src={service.heroImage}
                alt={service.title}
                className="h-[380px] sm:h-[460px] lg:h-[520px] w-full object-cover object-center transition-all duration-1000 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/10" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUB-SERVICES / CORE SOLUTIONS GRID */}
      <section
        className="relative w-full border-t border-outline-variant/20 bg-surface-container-lowest/40 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop"
        id="sub-services"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="font-headline-lg text-3xl font-extrabold leading-tight text-on-surface sm:text-4xl lg:text-5xl">
              {service.subServicesTitle}
            </h2>
            <p className="mt-4 max-w-2xl font-body-lg text-base leading-relaxed text-on-surface-variant">
              Every deliverable is engineered to resolve specific architectural constraints and accelerate business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.subServices.map((sub, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-[1.75rem] border border-outline-variant/25 bg-surface-container-low/80 p-7 shadow-[0_18px_50px_-35px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-surface-container-high/70 sm:p-8"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary">
                      <span className="material-symbols-outlined text-2xl">{sub.icon}</span>
                    </div>
                    <span className="font-mono text-xs font-semibold tracking-[0.2em] text-primary/70">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-xl font-bold text-on-surface transition-colors group-hover:text-primary sm:text-2xl">
                    {sub.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                    {sub.desc}
                  </p>

                  <div className="mt-6 border-t border-outline-variant/20 pt-5">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-primary font-semibold">
                      Key Architecture &amp; Capabilities
                    </p>
                    <div className="space-y-2.5">
                      {sub.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs leading-5 text-on-surface-variant">
                          <span className="material-symbols-outlined mt-0.5 text-sm text-primary shrink-0">check_circle</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-outline-variant/20 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant/70">
                    Sovereign Engineering
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                    Production Grade
                  </span>
                </div>
              </div>
            ))}

            {/* Dedicated Last Card: Contact Us & Custom Architecture */}
            <div className="group relative flex flex-col justify-between rounded-[1.75rem] border-2 border-primary/45 bg-gradient-to-br from-primary/15 via-surface-container-high/90 to-surface-container-low p-7 shadow-[0_20px_60px_-25px_rgba(242,202,80,0.3)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_25px_70px_-20px_rgba(242,202,80,0.45)] sm:p-8">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-on-primary shadow-[0_0_20px_rgba(242,202,80,0.5)]">
                    <span className="material-symbols-outlined text-2xl">support_agent</span>
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Bespoke / Custom
                  </span>
                </div>

                <h3 className="font-headline-sm text-xl font-bold text-white transition-colors group-hover:text-primary sm:text-2xl">
                  Need a Custom Solution?
                </h3>

                <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                  Have bespoke requirements, complex third-party integrations, or need an enterprise audit? Speak directly with our systems architects.
                </p>

                <div className="mt-6 border-t border-primary/25 pt-5">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-primary font-semibold">
                    Solvexa Guarantee &amp; Info
                  </p>
                  <div className="space-y-2.5 text-xs leading-5 text-on-surface-variant">
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined mt-0.5 text-sm text-primary shrink-0">bolt</span>
                      <span>24-hour technical scoping &amp; roadmap proposal</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined mt-0.5 text-sm text-primary shrink-0">lock</span>
                      <span>Strict NDA &amp; 100% sovereign IP ownership</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined mt-0.5 text-sm text-primary shrink-0">groups</span>
                      <span>Direct access to senior engineers and architects</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-primary/25 pt-5">
                <Link
                  href="/contact"
                  className="group/btn flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 font-label-md text-sm font-bold text-on-primary shadow-[0_15px_35px_-14px_rgba(242,202,80,0.8)] transition-all duration-300 hover:bg-primary-fixed hover:shadow-[0_18px_40px_-12px_rgba(242,202,80,0.9)] cursor-pointer"
                >
                  <span>Contact Us &amp; Discuss Project</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/15 transition-transform duration-300 group-hover/btn:rotate-[-45deg]">
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PROCESS / EXECUTION ROADMAP */}
      <section
        className="relative w-full border-t border-outline-variant/20 bg-surface-container-lowest/50 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop"
        id="process"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface sm:text-4xl lg:text-5xl">
              Our {service.title} Process
            </h2>
            <p className="mt-4 font-body-lg text-base leading-relaxed text-on-surface-variant">
              From initial technical discovery to post-launch optimization, every phase is transparent and verified.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-[1.75rem] border border-outline-variant/25 bg-surface-container-low/80 p-7 shadow-[0_18px_45px_-35px_rgba(0,0,0,0.95)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-surface-container-high/70 sm:p-8"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-headline-sm text-4xl font-extrabold text-primary/30 transition-colors group-hover:text-primary">
                      {step.step}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-xl font-bold text-on-surface transition-colors group-hover:text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-on-surface-variant sm:text-sm">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-outline-variant/20 pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-primary font-semibold">
                    Key Deliverable
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white">
                    {step.deliverables}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VERIFIED TECHNOLOGY STACK */}
      <section className="relative w-full border-t border-outline-variant/20 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="font-headline-lg text-3xl font-extrabold text-white sm:text-4xl">
              Technologies We Leverage
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
              Production-ready frameworks and libraries verified for sub-second performance and security.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {service.technologies.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center rounded-2xl border border-outline-variant/25 bg-surface-container-low/70 p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-surface-container-high/70"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-highest/60 p-2 transition-transform duration-300 group-hover:scale-110">
                  <TechLogo name={tech.name} className="h-7 w-7" />
                </div>
                <h4 className="mt-3 text-xs font-bold text-white group-hover:text-primary transition-colors">
                  {tech.name}
                </h4>
                <p className="mt-1 text-[10px] font-mono uppercase tracking-wider text-primary/80">
                  {tech.category}
                </p>
                <p className="mt-1 line-clamp-2 text-[10px] text-on-surface-variant">
                  {tech.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TARGET INDUSTRIES */}
      <section className="relative w-full border-t border-outline-variant/20 bg-surface-container-lowest/50 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="font-headline-lg text-3xl font-extrabold text-white sm:text-4xl">
              Target Industries &amp; Tailored Applications
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
              Domain-specific architectures designed to address complex regulatory, performance, and user needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.industries.map((ind, i) => (
              <div
                key={i}
                className="group flex flex-col justify-between rounded-2xl border border-outline-variant/25 bg-surface-container-low/70 p-6 backdrop-blur-xl transition-all hover:border-primary/40 hover:bg-surface-container-high/60"
              >
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">{ind.icon}</span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-xs leading-5 text-on-surface-variant">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY PARTNER WITH SOLVEXA */}
      <section className="relative w-full border-t border-outline-variant/20 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="font-headline-lg text-3xl font-extrabold text-white sm:text-4xl">
              Why Partner with Solvexa for {service.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
              Senior engineering discipline, sovereign code ownership, and measurable operational velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.hireBenefits.map((benefit, bIdx) => (
              <div
                key={bIdx}
                className="flex flex-col justify-between rounded-2xl border border-outline-variant/25 bg-surface-container-low/70 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-container-high/60"
              >
                <div>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-xl">{benefit.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-lg font-bold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-on-surface-variant">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLOSING CONSULTATION BANNER */}
      <section className="relative w-full border-t border-outline-variant/20 bg-gradient-to-b from-surface-container-lowest to-surface-container px-margin-mobile py-20 text-center md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[min(70vw,60rem)] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-headline-lg text-3xl font-extrabold text-white sm:text-5xl">
            Ready to Architect Your{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              {service.title}?
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-on-surface-variant sm:text-lg">
            Schedule a technical scoping session with our senior architects. We&apos;ll review your requirements, assess technical feasibility, and prepare a concrete execution blueprint.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 font-label-md text-sm font-bold text-on-primary shadow-[0_15px_35px_-16px_rgba(242,202,80,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-fixed hover:shadow-[0_18px_40px_-14px_rgba(242,202,80,0.7)] cursor-pointer"
            >
              <span>Schedule Discovery Call</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-outline-variant/50 bg-surface-container-lowest/80 px-7 py-3.5 font-label-md text-sm font-semibold text-white transition-all duration-300 hover:border-primary hover:text-primary cursor-pointer"
            >
              <span>Explore All 16 Services</span>
              <span className="material-symbols-outlined text-base">grid_view</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
