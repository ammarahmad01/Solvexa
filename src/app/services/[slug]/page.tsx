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

  // Related work filtered by service or top projects
  const relatedProjects = workData.filter(
    (p) => p.categorySlug.includes(service.slug.slice(0, 4)) || p.categorySlug === service.slug
  );
  const displayProjects = relatedProjects.length >= 2 ? relatedProjects : workData.slice(0, 3);

  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">
      {/* 1. HERO SECTION (Ropstam Style) */}
      <section className="relative w-full pt-10 pb-16 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          {/* Left Text Column */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
            {/* Breadcrumb & Badge */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Link href="/" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
                Home
              </Link>
              <span className="text-on-surface-variant/40">/</span>
              <Link href="/services" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
                Services
              </Link>
              <span className="text-on-surface-variant/40">/</span>
              <span className="text-xs text-primary font-semibold">{service.title}</span>
              <span className="ml-2 text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/40">
                {service.badge}
              </span>
            </div>

            <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-3">
              {service.title}{" "}
              <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="font-title-lg text-lg sm:text-xl text-primary font-semibold mt-1">
              {service.heroHeadline}
            </p>

            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-4 max-w-xl leading-relaxed">
              {service.shortDesc}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-label-md text-sm font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container hover:shadow-[0_0_28px_rgba(242,202,80,0.65)] hover:scale-105 active:scale-95 transition-all shadow-xl border border-primary-fixed/40"
              >
                <span>Get a Free Quote for {service.title}</span>
                <span>→</span>
              </Link>

              <a
                href="#sub-services"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-label-md text-sm font-semibold text-on-surface bg-surface-container-lowest/60 hover:bg-surface-container-high border border-outline-variant/40 transition-all backdrop-blur-xl"
              >
                <span>Explore Capabilities</span>
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
              </a>
            </div>

            {/* Micro Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-outline-variant/20 w-full max-w-md">
              {service.stats.slice(0, 3).map((st, i) => (
                <div key={i}>
                  <p className="font-headline-sm text-2xl font-bold text-primary">{st.value}</p>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">{st.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Image with Floating Glass Badge */}
          <div className="w-full lg:w-[45%] relative">
            <div className="relative rounded-3xl overflow-hidden border border-primary/40 shadow-[0_25px_60px_-15px_rgba(12,3,30,0.9),0_0_35px_rgba(212,175,55,0.2)] group">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>

              {/* Floating Floating Stat Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-surface-container-low/90 backdrop-blur-2xl border border-primary/30 shadow-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ServiceBrandIcon slug={service.slug} size="md" />
                  <div>
                    <p className="font-bold text-sm text-on-surface">{service.title} Delivery</p>
                    <p className="text-xs text-primary font-mono">100% Production Ready</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-xs font-mono text-secondary">
                  Active Sprint
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUB-SERVICES GRID (Ropstam Pattern) */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl bg-surface-container-lowest/40 border-y border-outline-variant/20" id="sub-services">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="font-label-caps text-xs text-primary uppercase tracking-widest mb-2">
              Bespoke Capabilities
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface">
              {service.subServicesTitle}
            </h2>
            <p className="font-body-lg text-base text-on-surface-variant mt-3">
              We provide tailored solutions engineered to solve specific technical and business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-surface-container-low/80 backdrop-blur-2xl border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-[0_15px_35px_-10px_rgba(212,175,55,0.2)] flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 mb-6 shadow-md">
                    <span className="material-symbols-outlined text-3xl">{sub.icon}</span>
                  </div>

                  <h3 className="font-headline-sm text-xl sm:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {sub.title}
                  </h3>

                  <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
                    {sub.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-outline-variant/20 space-y-2">
                    {sub.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-on-surface-variant">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-outline-variant/20">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform"
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

      {/* 3. OUR PROCESS (Ropstam 6-Stage Process) */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl" id="process">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="font-label-caps text-xs text-primary uppercase tracking-widest mb-2">
              Execution Roadmap
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface">
              Our {service.title} Process
            </h2>
            <p className="font-body-lg text-base text-on-surface-variant mt-3">
              From initial technical discovery to post-launch optimization, every phase is transparent and verified.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-surface-container-low/70 border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between group shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-headline-sm text-4xl font-extrabold text-primary/30 group-hover:text-primary transition-colors">
                      {step.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary text-xs font-bold">
                      ✓
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-on-surface-variant mt-2.5 leading-relaxed">
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

      {/* 4. WHY CHOOSE SOLVEXA & STATS (Ropstam Pattern) */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl bg-surface-container-lowest/50 border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="font-label-caps text-xs text-primary uppercase tracking-widest mb-2">
              The Solvexa Advantage
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface leading-tight">
              Why Choose Solvexa as Your{" "}
              <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
                {service.title} Partner
              </span>
            </h2>
            <p className="font-body-lg text-base text-on-surface-variant mt-4 leading-relaxed">
              We do not treat your project as a generic ticket. We embed deeply into your domain, aligning architectural choices, API latency, and visual aesthetics with real business revenue.
            </p>

            <div className="mt-6 space-y-3 w-full">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-surface-container-low/80 border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">verified</span>
                <div>
                  <p className="text-sm font-bold text-on-surface">Senior Architectural Leadership</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Every sprint is guided by veteran software architects with verified production scale.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-surface-container-low/80 border border-outline-variant/20">
                <span className="material-symbols-outlined text-secondary text-xl mt-0.5">rocket_launch</span>
                <div>
                  <p className="text-sm font-bold text-on-surface">Sub-Second Execution &amp; Core Web Vitals</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Optimized for maximum speed, clean database indices, and high Google Lighthouse benchmarks.</p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full font-label-md text-sm font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container shadow-xl hover:scale-105 transition-all"
            >
              <span>Let&apos;s Build Your Solution Together</span>
              <span>→</span>
            </Link>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {service.stats.map((stat, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-primary/30 flex flex-col items-center text-center shadow-xl hover:border-primary transition-colors group"
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

      {/* 5. SERVICE PORTFOLIO / CASE STUDIES (Ropstam Pattern) */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl" id="portfolio">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-label-caps text-xs text-primary uppercase tracking-widest">
                Production Case Studies
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface mt-1">
                {service.title} Portfolio
              </h2>
              <p className="text-sm text-on-surface-variant mt-1">
                Real-world projects delivered on-time and operating at scale.
              </p>
            </div>
            <Link href="/work" className="text-xs font-bold text-primary hover:underline">
              View All Work Case Studies →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((proj) => (
              <div
                key={proj.id}
                className="group rounded-3xl bg-surface-container-low/80 border border-outline-variant/30 hover:border-primary/50 overflow-hidden transition-all duration-300 shadow-xl flex flex-col hover:-translate-y-1"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={proj.heroImage}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-container-lowest/90 text-[11px] font-mono text-primary border border-primary/30">
                    {proj.category}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-md bg-surface-container-highest text-[11px] font-mono text-secondary-fixed">
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

      {/* 6. SOLUTIONS FOR INDUSTRIES (Ropstam Pattern) */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl bg-surface-container-lowest/40 border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-label-caps text-xs text-primary uppercase tracking-widest mb-2">
              Domain Expertise
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface">
              {service.title} Solutions for Industries
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant mt-3">
              We customize architecture and compliance protocols to match the strict demands of your sector.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.industries.map((ind, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-surface-container-low/80 border border-outline-variant/30 hover:border-primary/40 transition-colors flex items-start gap-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
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

      {/* 7. HIRE DEDICATED DEVELOPERS / STAFF AUGMENTATION (Ropstam Pattern) */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-label-caps text-xs text-primary uppercase tracking-widest">
                Flexible Outsourcing &amp; Staff Augmentation
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface mt-1">
                Hire Dedicated {service.title} Developers
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant mt-2">
                Scale your engineering velocity with vetted senior engineers fully integrated into your daily workflow.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-label-md text-xs font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container shadow-md shrink-0"
            >
              <span>Build Your Engineering Pod</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.hireBenefits.map((ben, bIdx) => (
              <div
                key={bIdx}
                className="p-6 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 hover:border-primary/40 transition-colors flex items-start gap-4 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
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

      {/* 8. TECHNOLOGY STACK WITH REAL LOGOS (Ropstam Pattern) */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl bg-surface-container-lowest/50 border-t border-outline-variant/20">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
          <div>
            <span className="font-label-caps text-xs text-primary uppercase tracking-widest">
              Production Frameworks &amp; Languages
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface mt-1">
              Our Technology Stack for {service.title}
            </h2>
            <p className="text-sm text-on-surface-variant mt-2 max-w-xl">
              Battle-tested tools, frameworks, and cloud providers we use to deliver peak performance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {service.technologies.map((tech, tIdx) => (
              <div
                key={tIdx}
                className="p-5 rounded-2xl bg-surface-container-low/80 border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col items-center text-center group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <TechLogo name={tech.name} className="w-7 h-7" />
                </div>
                <p className="font-title-lg text-sm font-bold text-on-surface">{tech.name}</p>
                <p className="text-[11px] text-on-surface-variant mt-0.5">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY OUR CLIENTS LOVE US? (Testimonials) */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-label-caps text-xs text-primary uppercase tracking-widest mb-2">
              Verified Client Feedback
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface">
              Why Our Clients Love Us?
            </h2>
            <p className="text-sm text-on-surface-variant mt-2">
              What founders and engineering directors say about our delivery standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-3xl bg-surface-container-low/80 border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between shadow-lg"
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
                    className="w-10 h-10 rounded-full object-cover border border-primary/40"
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

      {/* 10. SERVICE LEAD CAPTURE FORM */}
      <ContactCtaSection />

      {/* 11. SERVICE FAQs ACCORDION */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl bg-surface-container-lowest/40 border-t border-outline-variant/20">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="text-center">
            <span className="font-label-caps text-xs text-primary uppercase tracking-widest mb-2">
              Got Questions?
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface">
              FAQ&apos;s for {service.title}
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {service.faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="p-6 rounded-2xl bg-surface-container-low/80 border border-outline-variant/30 flex flex-col gap-2"
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
