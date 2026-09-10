import Link from "next/link";
import { servicesData } from "../../data/services";
import ContactCtaSection from "../../components/ContactCtaSection";
import TechLogo from "../../components/TechLogos";
import ClientLoveSection from "../../components/ClientLoveSection";
import ServiceBrandIcon from "../../components/ServiceBrandIcon";
import ScrollToServiceButton from "../../components/ScrollToServiceButton";

export const metadata = {
  title: "Our Services | Solvexa - Digital Engineering, AI & Creative Solutions",
  description:
    "Explore Solvexa's full suite of 16 services: Web Development, Mobile Apps, UI/UX Design, Digital Marketing, SEO, Google & Meta Ads, Branding, Video Editing, MVP Development, Shopify, WordPress, AI & ML, LLMs & RAG, Agentic AI, Model Training, and FYP Mentorship.",
};

function getPrimaryTechnologies(service: (typeof servicesData)[number]) {
  return service.technologies.slice(0, 6);
}

// Section 4: 6-Step Delivery Framework (from services-page-content.md)
const deliveryProcess = [
  {
    step: "01",
    title: "Discovery & Scoping",
    desc: "We audit your business goals, technical constraints, and target users, then define a clear scope using MoSCoW prioritization to eliminate wasted effort.",
    deliverable: "System Architecture Blueprint & Tech Spec",
    icon: "travel_explore",
  },
  {
    step: "02",
    title: "Architecture & Design",
    desc: "Our team designs the system architecture, database schema, and UI/UX — validated through wireframes, prototypes, and stakeholder review before code is written.",
    deliverable: "Interactive Figma Prototype & Token System",
    icon: "draw",
  },
  {
    step: "03",
    title: "Engineering & Development",
    desc: "Sprint-based development on production-grade, sovereign codebases — zero fragile shortcuts. Continuous integration, peer code reviews, and Git version control from day one.",
    deliverable: "Production-Grade Clean Source Code",
    icon: "terminal",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    desc: "Automated and manual QA across performance, security (OWASP), accessibility (WCAG), and cross-device compatibility, benchmarked against Core Web Vitals.",
    deliverable: "Complete QA Audit & Test Coverage",
    icon: "verified_user",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    desc: "CI/CD pipelines push to production environments (AWS, Vercel, or private cloud/VPC) with zero-downtime deployment strategies and rollback safety nets.",
    deliverable: "Live Production Deployment & CDN Setup",
    icon: "rocket_launch",
  },
  {
    step: "06",
    title: "Growth, Monitoring & Iteration",
    desc: "Post-launch analytics, drift monitoring for AI models, technical SEO/GEO tracking, and paid media optimization to continuously improve performance and ROI.",
    deliverable: "24/7 SLA Monitoring & Sprint Iterations",
    icon: "insights",
  },
];

// Section 5: Consolidated Master Stack (Only Verified Icons in Assets)
const masterTechDomains = [
  {
    domain: "Frontend & Web",
    desc: "Sub-second load times, dynamic micro-interactions, and responsive layouts.",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Shopify Liquid"],
  },
  {
    domain: "Mobile Apps",
    desc: "Native 60–120 FPS performance and resilient offline-first architectures.",
    techs: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Expo"],
  },
  {
    domain: "Backend & APIs",
    desc: "Resilient microservices, high-throughput pipelines, and robust data integrity.",
    techs: ["Node.js", "Python", "FastAPI", "PHP", "Laravel", "GraphQL", "Express.js", "ASP.NET Core"],
  },
  {
    domain: "Databases & Cloud",
    desc: "Scalable relational and vector databases with modern DevOps infrastructure.",
    techs: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Supabase", "AWS", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    domain: "Design & 3D",
    desc: "Human-centered design systems, token architectures, and 3D assets.",
    techs: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Adobe InDesign", "Blender", "Canva"],
  },
  {
    domain: "Video & Motion",
    desc: "Cinematic post-production, kinetic typography, and multi-format exports.",
    techs: ["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut", "Final Cut Pro"],
  },
  {
    domain: "AI, ML & Autonomous Agents",
    desc: "Predictive intelligence, autonomous multi-agent swarms, and private RAG systems.",
    techs: ["PyTorch", "TensorFlow", "Scikit-Learn", "Hugging Face", "Pandas", "NumPy", "LangChain", "Pinecone", "OpenAI", "Claude AI", "Google Gemini", "CrewAI"],
  },
  {
    domain: "Marketing & Growth",
    desc: "Data-driven customer acquisition, conversion optimization, and technical SEO.",
    techs: ["Google Ads", "Meta Ads", "Google Analytics 4", "SEMrush", "Ahrefs", "Mailchimp"],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden text-on-surface select-none">
      {/* 1. HERO SECTION (Original Text Restored, Badges Removed) */}
      <section className="relative w-full overflow-hidden px-margin-mobile pb-6 pt-10 md:px-margin-tablet md:pb-8 lg:px-margin-desktop lg:pb-10 lg:pt-14">
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
            className="group mt-6 inline-flex items-center gap-4 rounded-full border border-primary/40 bg-surface-container-lowest/70 py-1.5 pl-5 pr-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-on-surface-variant shadow-[0_10px_30px_-18px_rgba(242,202,80,0.7)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-white hover:shadow-[0_14px_35px_-16px_rgba(242,202,80,0.55)] cursor-pointer"
          >
            <span>{servicesData.length} disciplines</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-on-primary transition-transform duration-300 group-hover:translate-y-1 group-hover:bg-primary-fixed">
              <span className="material-symbols-outlined text-lg">arrow_downward</span>
            </span>
          </ScrollToServiceButton>
        </div>
      </section>

      {/* 2. SERVICES ALTERNATING CARDS LIST (Direct flow, No Portfolio Heading, No Badges) */}
      <section
        id="service-disciplines"
        className="relative w-full scroll-mt-24 px-margin-mobile pb-space-3xl pt-6 md:px-margin-tablet md:pt-8 lg:px-margin-desktop lg:pt-10"
      >
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
                <div className={`grid min-h-[420px] lg:grid-cols-2 ${isReversed ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  {/* Visual Media Column */}
                  <div className="services-card-media relative min-h-[240px] overflow-hidden lg:min-h-full">
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
                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-8 xl:p-9">
                    <div>
                      <p className="mb-1 font-label-caps text-[11px] uppercase tracking-[0.16em] text-primary">
                        {service.tagline}
                      </p>
                      <h2 className="max-w-xl font-headline-sm text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-primary sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 line-clamp-3 max-w-xl text-sm leading-6 text-on-surface-variant sm:text-[15px]">
                        {service.shortDesc} {service.overview[0]}
                      </p>

                      <div className="mt-5 grid gap-4 border-t border-outline-variant/25 pt-4 lg:grid-cols-[1.15fr_.85fr]">
                        {/* What We Deliver */}
                        <div>
                          <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                            What we deliver
                          </p>
                          <div className="grid gap-x-5 gap-y-2 sm:grid-cols-2 lg:grid-cols-1">
                            {service.subServices.slice(0, 3).map((subService) => (
                              <div key={subService.title} className="flex items-start gap-2 text-xs leading-5 text-on-surface-variant">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span className="line-clamp-1">{subService.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Preferred Stack */}
                        <div className="border-outline-variant/25 lg:border-l lg:pl-5">
                          <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                            Preferred stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {visibleTech.map((tech) => (
                              <span
                                key={tech.name}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-outline-variant/35 bg-surface-container-highest/60 px-2.5 py-1 text-[11px] font-medium text-on-surface"
                              >
                                <TechLogo name={tech.name} className="h-3.5 w-3.5" />
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="mt-4 flex gap-6 border-t border-outline-variant/25 pt-3">
                        {service.stats.slice(0, 2).map((stat) => (
                          <div key={stat.label}>
                            <p className="font-headline-sm text-lg font-bold text-primary">{stat.value}</p>
                            <p className="mt-0.5 text-[10px] uppercase tracking-wide text-on-surface-variant">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-6 flex items-center justify-between gap-5 border-t border-outline-variant/25 pt-4">
                      <span className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant sm:block">
                        Explore the full capability
                      </span>
                      <Link
                        href={`/services/${service.slug}`}
                        aria-label={`Explore ${service.title} service`}
                        className="group/cta ml-auto inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary px-5 py-2.5 text-xs font-bold text-on-primary transition-all duration-300 hover:gap-4 hover:bg-primary-fixed hover:shadow-[0_0_28px_rgba(242,202,80,0.35)] cursor-pointer"
                      >
                        <span>View service</span>
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

      {/* 3. OUR PROCESS: THE 6-STEP DELIVERY FRAMEWORK (from services-page-content.md) */}
      <section className="relative w-full border-t border-outline-variant/20 bg-surface-container-lowest/60 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex flex-col items-center text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Delivery Framework</span>
            <h2 className="mt-2 font-headline-lg text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              How We Work
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
              A structured, transparent process from first conversation to production launch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {deliveryProcess.map((step) => (
              <div
                key={step.step}
                className="group relative flex flex-col justify-between rounded-2xl border border-outline-variant/30 bg-surface-container-low/75 p-7 shadow-[0_15px_40px_-25px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-surface-container-high/70 sm:p-8"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-headline-sm text-4xl font-black text-primary/30 transition-colors group-hover:text-primary">
                      {step.step}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                      <span className="material-symbols-outlined text-xl">{step.icon}</span>
                    </div>
                  </div>

                  <h3 className="font-headline-sm text-xl font-bold text-white transition-colors group-hover:text-primary">
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
                    {step.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MASTER TECHNOLOGY STACK (CONSOLIDATED SUMMARY - ONLY VERIFIED ICONS) */}
      <section className="relative w-full border-t border-outline-variant/20 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex flex-col items-center text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Master Technology Stack</span>
            <h2 className="mt-2 font-headline-lg text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Technologies We Deal In
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
              A single, integrated toolchain spanning web, mobile, design, growth, and AI — each powered by verified production libraries.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {masterTechDomains.map((group) => (
              <div
                key={group.domain}
                className="group flex flex-col justify-between rounded-2xl border border-outline-variant/25 bg-surface-container-low/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-surface-container-high/60"
              >
                <div>
                  <h3 className="font-headline-sm text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {group.domain}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-on-surface-variant/80">
                    {group.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.techs.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-outline-variant/35 bg-surface-container-highest/60 px-2.5 py-1.5 text-xs font-medium text-on-surface transition-all hover:border-primary/50 hover:bg-primary/10"
                      >
                        <TechLogo name={tech} className="h-4 w-4 shrink-0" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA (from services-page-content.md) */}
      <section className="relative w-full border-t border-outline-variant/20 bg-gradient-to-b from-surface-container-lowest to-surface-container px-margin-mobile py-20 text-center md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[min(70vw,60rem)] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-headline-lg text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Have a Project in Mind?{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              Let’s Build Something Exceptional.
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-on-surface-variant sm:text-lg">
            From enterprise platforms to autonomous AI agents, we build systems engineered to scale — with production-grade code, no shortcuts, and no bloat. Book your free 30-minute technical consultation today.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 font-label-md text-sm font-bold text-on-primary shadow-[0_15px_35px_-16px_rgba(242,202,80,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-fixed hover:shadow-[0_18px_40px_-14px_rgba(242,202,80,0.7)] cursor-pointer"
            >
              <span>Get a Free Consultation</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-outline-variant/50 bg-surface-container-lowest/80 px-7 py-3.5 font-label-md text-sm font-semibold text-white transition-all duration-300 hover:border-primary hover:text-primary cursor-pointer"
            >
              <span>View Our Work</span>
              <span className="material-symbols-outlined text-base">visibility</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form & Client Testimonials */}
      <ClientLoveSection />
      <ContactCtaSection />
    </div>
  );
}
