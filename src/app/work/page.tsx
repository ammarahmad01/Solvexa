import Link from "next/link";
import { ProjectItem } from "../../data/work";
import { getMergedWorkProjects } from "../../lib/firebaseAdmin";
import ProjectBrandLogo from "../../components/ProjectBrandLogo";
import TechLogo from "../../components/TechLogos";
import ContactCtaSection from "../../components/ContactCtaSection";
import ClientLoveSection from "../../components/ClientLoveSection";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Our Work — Case Studies & Digital Solutions | Solvexa",
  description:
    "At Solvexa we don't simply build software — we solve problems. Explore case studies across web platforms, donation systems, AI applications, mobile apps, and custom business software.",
};

/* ============================================================
   Shared section header (eyebrow + title) — theme-consistent
============================================================ */
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-primary/60" />
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary font-semibold">{eyebrow}</span>
        <span className="h-px w-8 bg-primary/60" />
      </div>
      <h2 className="font-headline-sm text-2xl sm:text-4xl font-bold text-white tracking-tight mt-4">{title}</h2>
      {subtitle && <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/* ============================================================
   Project card content column (shared by left/right layouts)
============================================================ */
function ProjectContent({ project }: { project: ProjectItem }) {
  // Technologies to exclude from display (no proper icons)
  const excludedTechs = [
    "REST API",
    "Dart",
    "Machine Learning",
    "Social Media",
    "Content Strategies",
    "Graphic Design",
    "Google Maps",
    "SQLite",
    "Stripe API",
  ];

  const visibleTechs = project.technologies.filter(
    (tech) => !excludedTechs.some((excluded) => tech.toLowerCase() === excluded.toLowerCase())
  );

  return (
    <div className="flex flex-col items-start gap-4 sm:gap-5">
      {/* Heading — brand name accented, title below */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug text-left">
        <span className="block text-primary">
          {project.brandName}
        </span>
        <span className="block text-white mt-1">{project.title}</span>
      </h2>

      {/* Detailed Narrative Paragraph (more visible) */}
      <p className="text-slate-200 text-sm sm:text-[15px] lg:text-base leading-relaxed text-left max-w-2xl">
        {project.description}
      </p>

      {/* Technology Stack (more visible, authentic vector marks) */}
      {visibleTechs.length > 0 && (
        <div className="w-full flex flex-col gap-2">
          <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono">
            Technology Stack
          </p>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {visibleTechs.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-high/70 border border-outline-variant/40 hover:border-primary/50 transition-all text-xs sm:text-[13px] font-medium text-slate-100"
              >
                <TechLogo name={tech} className="w-4 h-4 shrink-0" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   Content for the capability / approach / tech / principles
   sections (single source: solvexa-work-page-content.md)
============================================================ */
const APPROACH_STEPS = [
  { title: "Understand", desc: "We start by understanding the business problem, target users, requirements, and desired outcome." },
  { title: "Strategize", desc: "We determine the right product structure, technology, architecture, and development approach." },
  { title: "Design", desc: "We create user experiences and interfaces focused on usability, clarity, and brand identity." },
  { title: "Develop", desc: "Our engineering team builds the product using appropriate modern technologies." },
  { title: "Integrate", desc: "We connect APIs, databases, third-party services, AI models, payment systems, authentication, and other required components." },
  { title: "Test", desc: "We test functionality, responsiveness, performance, integrations, and user workflows." },
  { title: "Deploy", desc: "We prepare the product for production and deploy it using appropriate infrastructure." },
  { title: "Improve", desc: "We analyze feedback, solve issues, optimize performance, and continue improving the product." },
];

const PRINCIPLES = [
  { icon: "stacked_line_chart", title: "Scalability", desc: "We structure applications so they can evolve as users, data, and business requirements grow." },
  { icon: "build", title: "Maintainability", desc: "We focus on organized code, reusable components, clear architecture, and manageable systems." },
  { icon: "shield", title: "Security", desc: "Authentication, authorization, data handling, and API security are considered throughout development." },
  { icon: "speed", title: "Performance", desc: "We optimize interfaces, APIs, database interactions, and application workflows where required." },
  { icon: "touch_app", title: "User Experience", desc: "Technology should be powerful without becoming difficult to use." },
  { icon: "verified", title: "Reliability", desc: "We build and test systems with real-world usage and failure scenarios in mind." },
];

export default async function WorkPage() {
  const workData = (await getMergedWorkProjects()) as ProjectItem[];

  // Extract unique client logos from all projects (local + CMS)
  const clientLogos: { name: string; src: string }[] = [];
  const seenLogos = new Set<string>();
  for (const p of workData as any[]) {
    if (p.clientLogo && !seenLogos.has(p.clientLogo)) {
      seenLogos.add(p.clientLogo);
      clientLogos.push({ name: p.brandName || p.client || "Client", src: p.clientLogo });
    }
  }
  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">
      {/* ========================================================
          HERO — "Our Work" first, then headline, then intro copy
      ======================================================== */}
      <section className="relative w-full pt-14 sm:pt-20 lg:pt-24 pb-10 sm:pb-14 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center overflow-hidden">
        {/* Subtle Ambient Backglow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Primary Heading — Our Work */}
          <h1 className="font-headline-lg text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-center">
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              Our Work
            </span>
          </h1>

          {/* Supporting Headline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug mt-4 sm:mt-5 text-center">
            Turning Challenges Into Digital Solutions
          </h2>

          {/* Intro Copy — compact, justified, aligned */}
          <div className="mt-6 sm:mt-7 max-w-3xl flex flex-col gap-3 text-justify text-sm sm:text-[15px] text-on-surface-variant/90 leading-relaxed">
            <p>
              At Solvexa, we don&apos;t simply build software — we solve problems. Every project begins with a business challenge, a user need, or an opportunity to improve an existing process. Our team combines product thinking, modern engineering, design, automation, and AI to transform those challenges into reliable digital solutions.
            </p>
            <p>
              From enterprise websites and donation platforms to AI-powered applications, mobile apps, management systems, and custom business software, our work is built around one goal:{" "}
              <span className="text-primary font-semibold">Create technology that delivers real-world value.</span>
            </p>
          </div>
        </div>

      </section>

      {/* ========================================================
          PROJECT SECTIONS (alternating layout preserved)
      ======================================================== */}
      <div className="w-full flex flex-col">
        {workData.map((project, index) => {
          const isMockupLeft = index % 2 === 0;

          return (
            <section
              key={project.id}
              id={project.id}
              className={`relative w-full py-10 sm:py-12 lg:py-16 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop border-t border-outline-variant/15 scroll-mt-20 ${
                index % 2 === 1 ? "bg-surface-container-lowest/25" : "bg-transparent"
              }`}
            >
              {/* Subtle Themed Section Backglow */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-[400px] h-[280px] rounded-full blur-[130px] pointer-events-none opacity-15 -z-10 ${
                  isMockupLeft ? "left-6" : "right-6"
                }`}
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
                {isMockupLeft ? (
                  <>
                    {/* Project Image (Left) */}
                    <div className="lg:col-span-6 order-1">
                      {project.deviceType === "mobile" || project.deviceType === "both" ? (
                        /* Mobile/Both: Show phone mockup with image */
                        <div className="relative w-full flex items-center justify-center">
                          <div className="relative w-36 sm:w-44 md:w-52 aspect-[9/16]">
                            {/* Phone Frame */}
                            <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] bg-slate-950 border-[3px] sm:border-4 border-slate-700/70 shadow-2xl" />
                            {/* Screen with Image */}
                            <div className="absolute inset-2 sm:inset-2.5 rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden bg-slate-900">
                              <img
                                src={project.mobileImage || project.heroImage}
                                alt={`${project.brandName} - ${project.title}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            {/* Notch */}
                            <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-slate-950 rounded-b-lg sm:rounded-b-xl flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2" />
                              <div className="w-6 sm:w-8 h-1 bg-slate-800 rounded-full" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Web: Show image directly without container */
                        <img
                          src={project.heroImage}
                          alt={`${project.brandName} - ${project.title}`}
                          className="w-full max-h-[400px] sm:max-h-[460px] md:max-h-[540px] object-contain object-center"
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                    </div>

                    {/* Content Column (Right) */}
                    <div className="lg:col-span-6 order-2">
                      <ProjectContent project={project} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Content Column (Left) */}
                    <div className="lg:col-span-6 order-2 lg:order-1">
                      <ProjectContent project={project} />
                    </div>

                    {/* Project Image (Right) */}
                    <div className="lg:col-span-6 order-1 lg:order-2">
                      {project.deviceType === "mobile" || project.deviceType === "both" ? (
                        /* Mobile/Both: Show phone mockup with image */
                        <div className="relative w-full flex items-center justify-center">
                          <div className="relative w-36 sm:w-44 md:w-52 aspect-[9/16]">
                            {/* Phone Frame */}
                            <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] bg-slate-950 border-[3px] sm:border-4 border-slate-700/70 shadow-2xl" />
                            {/* Screen with Image */}
                            <div className="absolute inset-2 sm:inset-2.5 rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden bg-slate-900">
                              <img
                                src={project.mobileImage || project.heroImage}
                                alt={`${project.brandName} - ${project.title}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            {/* Notch */}
                            <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-slate-950 rounded-b-lg sm:rounded-b-xl flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2" />
                              <div className="w-6 sm:w-8 h-1 bg-slate-800 rounded-full" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Web: Show image directly without container */
                        <img
                          src={project.heroImage}
                          alt={`${project.brandName} - ${project.title}`}
                          className="w-full max-h-[400px] sm:max-h-[460px] md:max-h-[540px] object-contain object-center"
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                    </div>
                  </>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* ========================================================
          BRANDS WE WORK FOR
      ======================================================== */}
      <section className="relative w-full py-14 sm:py-16 lg:py-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop border-t border-outline-variant/15 bg-surface-container-lowest/25 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8 items-center">
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-primary/60" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary font-semibold">Our Clients</span>
              <span className="h-px w-8 bg-primary/60" />
            </div>
            <h2 className="font-headline-sm text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Brands We Work For
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant mt-3 max-w-xl">
              Trusted by organizations across education, e-commerce, AI, events, and social impact — delivering digital solutions that drive real results.
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto w-full pt-2 content-start items-start justify-items-center">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="flex flex-col items-center justify-center group cursor-pointer w-24 sm:w-28 transition-transform duration-300 hover:-translate-y-1.5"
              >
                {/* Squircle Card Container */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 group-hover:border-primary/60 flex items-center justify-center shadow-lg group-hover:shadow-[0_12px_30px_-8px_rgba(212,175,55,0.25)] transition-all duration-300 p-3">
                  <img
                    src={client.src}
                    alt={client.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-[0_0_6px_rgba(255,215,0,0.2)] brightness-110 group-hover:scale-110 group-hover:brightness-125 group-hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.35)] transition-all duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Brand Label */}
                <span className="mt-2.5 text-xs sm:text-sm font-semibold text-on-surface group-hover:text-primary transition-colors text-center truncate max-w-full">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          OUR DEVELOPMENT APPROACH
      ======================================================== */}
      <section className="w-full py-14 sm:py-16 lg:py-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop border-t border-outline-variant/15 bg-surface-container-lowest/25">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our Development Approach"
            title="How We Turn Ideas Into Products"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {APPROACH_STEPS.map((step, i) => (
              <div
                key={step.title}
                className="relative p-5 sm:p-6 rounded-3xl bg-surface-container-low/50 border border-outline-variant/25 backdrop-blur-xl flex flex-col gap-3"
              >
                <span className="absolute top-4 right-5 text-3xl font-black font-mono text-outline-variant/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="material-symbols-outlined text-primary text-2xl">
                  {["search", "route", "design_services", "code", "extension", "bug_report", "rocket_launch", "trending_up"][i]}
                </span>
                <h3 className="font-title-lg text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          OUR ENGINEERING PRINCIPLES
      ======================================================== */}
      <section className="w-full py-14 sm:py-16 lg:py-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop border-t border-outline-variant/15 bg-surface-container-lowest/25">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our Engineering Principles"
            title="Built for Today. Prepared for Tomorrow."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="p-5 sm:p-6 rounded-3xl bg-surface-container-low/50 border border-outline-variant/25 backdrop-blur-xl flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">{p.icon}</span>
                </div>
                <div>
                  <h3 className="font-title-lg text-base sm:text-lg font-bold text-white">{p.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mt-1.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Love Testimonials */}
      <ClientLoveSection />

      {/* Bottom Contact CTA */}
      <ContactCtaSection />
    </div>
  );
}
