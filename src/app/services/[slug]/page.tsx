import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "../../../data/services";
import { workData } from "../../../data/work";
import { testimonialsData } from "../../../data/testimonials";
import TechLogo from "../../../components/TechLogos";
import ContactCtaSection from "../../../components/ContactCtaSection";
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

  // Related work filtered by service or top projects
  const relatedProjects = workData.filter(
    (p) => p.categorySlug.includes(service.slug.slice(0, 4)) || p.categorySlug === service.slug
  );
  const displayProjects = relatedProjects.length >= 2 ? relatedProjects : workData.slice(0, 3);

  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden px-margin-mobile pb-20 pt-8 md:px-margin-tablet md:pb-24 lg:px-margin-desktop lg:pb-28 lg:pt-12">
        <div className="pointer-events-none absolute left-[12%] top-[-12rem] h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[-16rem] right-[8%] h-[28rem] w-[28rem] rounded-full bg-secondary-container/10 blur-[130px]" />
        <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
          {/* Left Text Column */}
          <div className="flex w-full flex-col items-start text-left">
            <div className="mb-5 flex items-center gap-3 text-primary">
              <ServiceBrandIcon slug={service.slug} size="sm" containerClassName="border-primary/40 bg-primary/10" />
              <span className="font-label-caps text-[11px] uppercase tracking-[0.2em]">Digital product engineering</span>
            </div>

            <h1 className="max-w-3xl font-headline-lg text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
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
                className="h-[380px] w-full object-cover transition-transform duration-1000 group-hover:scale-105 sm:h-[520px] lg:h-[600px]"
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

      {/* 3. DELIVERY SCOPE */}
      <section className="relative w-full px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-20">
          <div className="max-w-xl">
            <span className="font-label-caps text-xs uppercase tracking-[0.2em] text-primary">A complete delivery system</span>
            <h2 className="mt-3 font-headline-lg text-3xl font-extrabold leading-tight text-on-surface sm:text-4xl">
              Everything your next release needs to move with confidence.
            </h2>
            <p className="mt-4 text-base leading-7 text-on-surface-variant">
              From the first technical decision to the first production release, Solvexa keeps the product, platform, and delivery workflow aligned.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {service.whatsIncluded.map((item, idx) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-surface-container-low/70 p-4 transition-colors hover:bg-surface-container-high/70">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                  <span className="font-mono text-[10px] font-bold">{String(idx + 1).padStart(2, "0")}</span>
                </span>
                <span className="pt-1 text-sm font-medium leading-5 text-on-surface">{item}</span>
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

      {/* 5. WHY CHOOSE SOLVEXA */}
      <section className="relative w-full bg-surface-container-lowest/50 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Text */}
          <div className="flex flex-col items-start text-left lg:col-span-6">
            <span className="mb-3 font-label-caps text-xs uppercase tracking-[0.2em] text-primary">
              The Solvexa Advantage
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold leading-tight text-on-surface sm:text-4xl">
              Why Choose Solvexa as Your{" "}
              <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
                {service.title} Partner
              </span>
            </h2>
            <p className="mt-4 font-body-lg text-base leading-relaxed text-on-surface-variant">
              We do not treat your project as a generic ticket. We embed deeply into your domain, aligning architectural choices, API latency, and visual aesthetics with real business revenue.
            </p>

            <div className="mt-7 w-full max-w-xl space-y-3">
              <div className="flex items-start gap-3 rounded-2xl bg-surface-container-low/80 p-4">
                <span className="material-symbols-outlined mt-0.5 text-xl text-primary">verified</span>
                <div>
                  <p className="text-sm font-bold text-on-surface">Senior Architectural Leadership</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Every sprint is guided by veteran software architects with verified production scale.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-surface-container-low/80 p-4">
                <span className="material-symbols-outlined mt-0.5 text-xl text-secondary">rocket_launch</span>
                <div>
                  <p className="text-sm font-bold text-on-surface">Sub-Second Execution &amp; Core Web Vitals</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Optimized for maximum speed, clean database indices, and high Google Lighthouse benchmarks.</p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-label-md text-sm font-bold text-on-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-fixed"
            >
              <span>Let&apos;s Build Your Solution Together</span>
              <span>→</span>
            </Link>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-3 lg:col-span-6">
            {service.stats.map((stat, i) => (
              <div
                key={i}
                className="group flex flex-col items-center rounded-[1.75rem] bg-surface-container-low/90 p-6 text-center shadow-[0_20px_55px_-38px_rgba(242,202,80,0.8)] backdrop-blur-2xl transition-colors hover:bg-surface-container-high/80 sm:p-8"
              >
                <span className="font-headline-lg text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </span>
                <span className="font-title-lg text-sm sm:text-base font-bold text-on-surface mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICE PORTFOLIO */}
      <section className="relative w-full px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop" id="portfolio">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-label-caps text-xs uppercase tracking-[0.2em] text-primary">
                Production Case Studies
              </span>
              <h2 className="mt-2 font-headline-lg text-3xl font-extrabold text-on-surface sm:text-4xl">
                {service.title} Portfolio
              </h2>
              <p className="mt-2 text-sm text-on-surface-variant">
                Real-world projects delivered on-time and operating at scale.
              </p>
            </div>
            <Link href="/work" className="inline-flex items-center gap-2 text-xs font-bold text-primary transition-colors hover:text-primary-fixed">
              View all case studies <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {displayProjects.map((proj) => (
              <div
                key={proj.id}
                className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-surface-container-low/80 shadow-[0_20px_55px_-35px_rgba(0,0,0,0.95)] transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-high/70"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={proj.heroImage}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <span className="absolute left-4 top-4 bg-surface-container-lowest/90 px-3 py-1 text-[11px] font-mono text-primary">
                    {proj.category}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-surface-container-highest px-2.5 py-0.5 text-[11px] font-mono text-secondary-fixed">
                    {proj.metrics}
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-headline-sm text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant mt-2 line-clamp-3 leading-relaxed">
                      {proj.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant font-mono">Client: {proj.client.split(" ")[0]}</span>
                    <Link
                      href={`/work/${proj.slug}`}
                      className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read Case Study</span>
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SOLUTIONS FOR INDUSTRIES */}
      <section className="relative w-full bg-surface-container-lowest/40 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="mb-3 font-label-caps text-xs uppercase tracking-[0.2em] text-primary">
              Domain Expertise
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface sm:text-4xl">
              {service.title} Solutions for Industries
            </h2>
            <p className="mt-4 text-sm leading-6 text-on-surface-variant sm:text-base">
              We customize architecture and compliance protocols to match the strict demands of your sector.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.industries.map((ind, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl bg-surface-container-low/80 p-6 shadow-sm transition-colors hover:bg-surface-container-high/70"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-2xl">{ind.icon}</span>
                </div>
                <div>
                  <h3 className="font-title-lg text-base font-bold text-on-surface">{ind.name}</h3>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HIRE DEDICATED DEVELOPERS */}
      <section className="relative w-full px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-label-caps text-xs uppercase tracking-[0.2em] text-primary">
                Flexible Outsourcing &amp; Staff Augmentation
              </span>
              <h2 className="mt-2 font-headline-lg text-3xl font-extrabold text-on-surface sm:text-4xl">
                Hire Dedicated {service.title} Developers
              </h2>
              <p className="mt-3 text-sm leading-6 text-on-surface-variant sm:text-base">
                Scale your engineering velocity with vetted senior engineers fully integrated into your daily workflow.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-label-md text-xs font-bold text-on-primary shadow-md transition-colors hover:bg-primary-fixed"
            >
              <span>Build Your Engineering Pod</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.hireBenefits.map((ben, bIdx) => (
              <div
                key={bIdx}
                className="flex items-start gap-4 rounded-2xl bg-surface-container-low/70 p-6 shadow-sm transition-colors hover:bg-surface-container-high/70"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-xl">{ben.icon}</span>
                </div>
                <div>
                  <h3 className="font-title-lg text-base font-bold text-on-surface">{ben.title}</h3>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{ben.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TECHNOLOGY STACK */}
      <section className="relative w-full bg-surface-container-lowest/50 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-9 text-center">
          <div>
            <span className="font-label-caps text-xs uppercase tracking-[0.2em] text-primary">
              Production Frameworks &amp; Languages
            </span>
            <h2 className="mt-2 font-headline-lg text-3xl font-extrabold text-on-surface sm:text-4xl">
              Our Technology Stack for {service.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-on-surface-variant">
              Battle-tested tools, frameworks, and cloud providers we use to deliver peak performance.
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
            {service.technologies.map((tech, tIdx) => (
              <div
                key={tIdx}
                className="group flex flex-col items-center rounded-2xl bg-surface-container-low/80 p-5 text-center shadow-sm transition-all hover:bg-surface-container-high/70"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-highest transition-transform group-hover:scale-110">
                  <TechLogo name={tech.name} className="w-7 h-7" />
                </div>
                <p className="font-title-lg text-sm font-bold text-on-surface">{tech.name}</p>
                <p className="text-[11px] text-on-surface-variant mt-0.5">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WHY OUR CLIENTS LOVE US */}
      <section className="relative w-full px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-3 font-label-caps text-xs uppercase tracking-[0.2em] text-primary">
              Verified Client Feedback
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface sm:text-4xl">
              Why Our Clients Love Us?
            </h2>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">
              What founders and engineering directors say about our delivery standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="flex flex-col justify-between rounded-[1.75rem] bg-surface-container-low/80 p-6 shadow-[0_18px_45px_-35px_rgba(0,0,0,0.95)] transition-all hover:-translate-y-1 hover:bg-surface-container-high/70"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center text-primary text-sm gap-0.5">
                    {[...Array(test.rating)].map((_, r) => (
                      <span key={r} className="material-symbols-outlined text-sm fill-1">star</span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface italic leading-relaxed">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 mt-6 border-t border-outline-variant/20">
                  <img
                    src={test.image}
                    alt={test.author}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-xs text-on-surface">{test.author}</p>
                    <p className="text-[11px] text-on-surface-variant">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SERVICE LEAD CAPTURE FORM */}
      <ContactCtaSection />

      {/* 12. SERVICE FAQ */}
      <section className="relative w-full bg-surface-container-lowest/40 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="mx-auto flex max-w-4xl flex-col gap-9">
          <div className="text-center">
            <span className="mb-3 font-label-caps text-xs uppercase tracking-[0.2em] text-primary">
              Got Questions?
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface sm:text-4xl">
              FAQ&apos;s for {service.title}
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {service.faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="flex flex-col gap-2 rounded-2xl bg-surface-container-low/80 p-6 transition-colors hover:bg-surface-container-high/70"
              >
                <h3 className="font-title-lg text-base font-bold text-on-surface">
                  {faq.q}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
