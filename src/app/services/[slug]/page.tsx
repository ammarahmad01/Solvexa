import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "../../../data/services";
import ServiceBrandIcon from "../../../components/ServiceBrandIcon";

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
    title: `${service.title} Services | Solvexa`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug || s.aliases?.includes(slug));

  if (!service) {
    notFound();
  }

  const isWebDevelopment = service.slug === "web-development";

  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden px-margin-mobile pb-20 pt-8 md:px-margin-tablet md:pb-24 lg:px-margin-desktop lg:pb-28 lg:pt-12">
        <div className="pointer-events-none absolute left-[12%] top-[-12rem] h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[-16rem] right-[8%] h-[28rem] w-[28rem] rounded-full bg-secondary-container/10 blur-[130px]" />
        <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Text Column */}
          <div className="flex w-full flex-col items-start text-left">
            <div className="mb-5 flex items-center gap-3 text-primary">
              <ServiceBrandIcon slug={service.slug} size="sm" containerClassName="border-primary/40 bg-primary/10" />
              <span className="font-label-caps text-[11px] uppercase tracking-[0.2em]">Digital product engineering</span>
            </div>

            <h1 className="max-w-2xl font-headline-lg text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {isWebDevelopment ? (
                <>
                  Build a web platform that is ready for its next stage. {" "}
                  <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
                    web development.
                  </span>
                </>
              ) : (
                <>
                  {service.title}{" "}
                  <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
                    Services
                  </span>
                </>
              )}
            </h1>

            <p className="mt-6 max-w-2xl font-title-lg text-lg font-semibold leading-relaxed text-primary sm:text-xl">
              {service.heroHeadline}
            </p>

            <p className="mt-4 max-w-2xl font-body-lg text-base leading-relaxed text-on-surface-variant sm:text-lg">
              {service.shortDesc}
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-on-surface-variant/80">
              {service.overview[0]}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-label-md text-sm font-bold text-on-primary shadow-[0_15px_35px_-18px_rgba(242,202,80,0.8)] transition-all hover:-translate-y-0.5 hover:bg-primary-fixed hover:shadow-[0_18px_38px_-16px_rgba(242,202,80,0.7)]"
              >
                <span>Start your project</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>

              <a
                href="#sub-services"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 font-label-md text-sm font-semibold text-on-surface-variant transition-colors hover:text-primary"
              >
                <span>Explore capabilities</span>
                <span className="material-symbols-outlined text-sm">south</span>
              </a>
            </div>

            {/* Micro Trust Stats */}
            <div className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-outline-variant/20 pt-6">
              {service.stats.slice(0, 3).map((st, i) => (
                <div key={i}>
                  <p className="font-headline-sm text-2xl font-bold text-primary sm:text-3xl">{st.value}</p>
                  <p className="mt-1 max-w-[9rem] text-[10px] uppercase tracking-wide text-on-surface-variant">{st.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="relative w-full lg:translate-y-3">
            <div className="group relative overflow-hidden rounded-[2.5rem] shadow-[0_35px_80px_-28px_rgba(0,0,0,0.95)]">
              <img
                src={service.heroImage}
                alt={service.title}
                className="h-[360px] w-full object-cover transition-transform duration-1000 group-hover:scale-105 sm:h-[440px] lg:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/5" />
              <div className="absolute bottom-6 left-6 max-w-xs sm:bottom-8 sm:left-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Solvexa / {service.title}</p>
                <p className="mt-2 text-sm leading-5 text-white/80">A focused delivery team for architecture, design, and reliable production outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUB-SERVICES GRID */}
      <section className="relative w-full bg-surface-container-lowest/40 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop" id="sub-services">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="mb-3 font-label-caps text-xs uppercase tracking-[0.2em] text-primary">
              Bespoke Capabilities
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold leading-tight text-on-surface sm:text-4xl lg:text-5xl">
              {service.subServicesTitle}
            </h2>
            <p className="mt-4 max-w-2xl font-body-lg text-base leading-relaxed text-on-surface-variant">
              We provide tailored solutions engineered to solve specific technical and business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.subServices.map((sub, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-[1.75rem] bg-surface-container-low/80 p-7 shadow-[0_18px_50px_-35px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-high/70 hover:shadow-[0_22px_55px_-30px_rgba(242,202,80,0.25)] sm:p-8"
              >
                <div>
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary">
                      <span className="material-symbols-outlined text-2xl">{sub.icon}</span>
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-primary/60">0{idx + 1}</span>
                  </div>

                  <h3 className="font-headline-sm text-xl font-bold text-on-surface transition-colors group-hover:text-primary sm:text-2xl">
                    {sub.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                    {sub.desc}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-outline-variant/20 pt-5">
                    {sub.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs leading-5 text-on-surface-variant">
                        <span className="material-symbols-outlined mt-0.5 text-sm text-primary">check</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-outline-variant/20 pt-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-transform group-hover:translate-x-1"
                  >
                    <span>Request Spec &amp; Quote</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS */}
      <section className="relative w-full bg-surface-container-lowest/40 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop" id="process">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="mb-3 font-label-caps text-xs uppercase tracking-[0.2em] text-primary">
              Execution Roadmap
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface sm:text-4xl lg:text-5xl">
              Our {service.title} Process
            </h2>
            <p className="mt-4 font-body-lg text-base leading-relaxed text-on-surface-variant">
              From initial technical discovery to post-launch optimization, every phase is transparent and verified.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-[1.75rem] bg-surface-container-low/75 p-7 shadow-[0_18px_45px_-35px_rgba(0,0,0,0.95)] transition-all hover:-translate-y-1 hover:bg-surface-container-high/70 sm:p-8"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-headline-sm text-4xl font-extrabold text-primary/35 transition-colors group-hover:text-primary">
                      {step.step}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-on-surface-variant sm:text-sm">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-outline-variant/20">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-primary font-semibold">
                    Key Deliverable:
                  </p>
                  <p className="text-xs font-medium text-on-surface mt-1">
                    {step.deliverables}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
