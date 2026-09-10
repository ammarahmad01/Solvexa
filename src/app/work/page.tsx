import Link from "next/link";
import { ProjectItem } from "../../data/work";
import { getMergedWorkProjects } from "../../lib/firebaseAdmin";
import ProjectBrandLogo from "../../components/ProjectBrandLogo";
import ProjectDeviceDisplay from "../../components/ProjectDeviceDisplay";
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
  const hasTech = Array.isArray(project.technologies) && project.technologies.length > 0;

  return (
    <div className="flex flex-col items-start gap-4 sm:gap-5">
      {/* Brand Logo */}
      <ProjectBrandLogo type={project.brandLogoType} brandName={project.brandName} />

      {/* Heading — brand name accented, title below, no separator dash */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug text-left">
        <span className="block" style={{ color: project.accentColor }}>
          {project.brandName}
        </span>
        <span className="block text-white mt-1">{project.title}</span>
      </h2>

      {/* Detailed Narrative Paragraph (more visible) */}
      <p className="text-slate-200 text-sm sm:text-[15px] lg:text-base leading-relaxed text-left max-w-2xl">
        {project.description}
      </p>

      {/* Technology Stack (more visible, authentic vector marks) */}
      {hasTech && (
        <div className="w-full flex flex-col gap-2">
          <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono">
            Technology Stack
          </p>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {project.technologies.map((tech) => (
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

      {/* Action Buttons */}
      <div className="w-full sm:w-auto flex items-center gap-2.5 sm:gap-4 pt-1 flex-wrap">
        <Link
          href={`/work/${project.slug}`}
          className="w-full sm:w-auto text-center justify-center px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-white font-bold text-xs sm:text-sm md:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          style={{
            backgroundColor: project.accentColor,
            boxShadow: `0 8px 20px -4px ${project.themeGlow}`,
          }}
        >
          Explore Case Study
        </Link>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-white border border-outline-variant/40 hover:border-outline-variant/70 font-bold text-xs sm:text-sm md:text-base transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow hover:-translate-y-0.5"
        >
          <span className="material-symbols-outlined text-sm sm:text-base">language</span>
          <span>Visit Live Site</span>
        </a>
      </div>
    </div>
  );
}

/* ============================================================
   Content for the capability / approach / tech / principles
   sections (single source: solvexa-work-page-content.md)
============================================================ */
const CAPABILITIES = [
  {
    icon: "language",
    title: "Web Development",
    projects: ["Alkhidmat Foundation Punjab North", "Noor Educational System", "Tayyab Autos", "Draftly", "RentEase", "SolveFlow", "MealMates AI", "PlantGuard", "Automotive Web Application"],
  },
  {
    icon: "smartphone",
    title: "Mobile Applications",
    projects: ["CrowdCam", "AutoAid", "MealMates AI", "PlantGuard", "Nimbus"],
  },
  {
    icon: "psychology",
    title: "AI & Machine Learning",
    projects: ["MealMates AI", "PlantGuard", "Punjab Skill House", "BidFlow-AI", "Nimbus", "Noor Educational System AI Chatbot"],
  },
  {
    icon: "terminal",
    title: "Custom Software",
    projects: ["SolveFlow", "RentEase", "Draftly", "Alkhidmat CRM/ERP", "Noor School Management System"],
  },
  {
    icon: "palette",
    title: "Creative & Digital",
    projects: ["Punjab Skill House", "Graphic Design", "Video Editing"],
  },
];

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

const TECH_DOMAINS = [
  { icon: "web", domain: "Frontend", tech: "React, Next.js, TypeScript, Tailwind CSS" },
  { icon: "dns", domain: "Backend", tech: "ASP.NET Core, C#, Node.js, REST APIs" },
  { icon: "smartphone", domain: "Mobile", tech: "Flutter, React Native, Android" },
  { icon: "database", domain: "Databases", tech: "PostgreSQL, MySQL, SQL Server, MongoDB, SQLite, Supabase" },
  { icon: "psychology", domain: "AI & Machine Learning", tech: "Python, TensorFlow, Keras, CNN, Computer Vision, Machine Learning, LLM Integrations, RAG, AI Chatbots, Intelligent Automation" },
  { icon: "cloud_sync", domain: "DevOps & Infrastructure", tech: "Docker, GitHub Actions, Kubernetes, ArgoCD, Cloud Platforms, CI/CD" },
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

        {/* Professional Highlights Row (below the intro) */}
        <div className="max-w-5xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-12 pt-8 border-t border-outline-variant/20 text-left">
          <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low/50 border border-outline-variant/25 backdrop-blur-xl">
            <p className="text-xl sm:text-2xl lg:text-3xl font-black text-primary font-mono">16+</p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-1">Case Studies</p>
            <p className="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">Web, mobile, AI &amp; creative</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low/50 border border-outline-variant/25 backdrop-blur-xl">
            <p className="text-xl sm:text-2xl lg:text-3xl font-black text-primary font-mono">6</p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-1">Engineering Domains</p>
            <p className="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">Frontend to DevOps &amp; AI</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low/50 border border-outline-variant/25 backdrop-blur-xl">
            <p className="text-xl sm:text-2xl lg:text-3xl font-black text-primary font-mono">8-Step</p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-1">Delivery Process</p>
            <p className="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">Understand → Improve</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low/50 border border-outline-variant/25 backdrop-blur-xl">
            <p className="text-xl sm:text-2xl lg:text-3xl font-black text-primary font-mono">100%</p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-1">Custom-Built</p>
            <p className="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">Tailored to every client</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          CASE STUDY INDEX
      ======================================================== */}
      <section className="w-full py-8 sm:py-10 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop border-t border-outline-variant/15">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Case Study Index"
            title="Projects Delivered by Solvexa"
            subtitle="A quick overview of every project — jump straight to the case study you want to explore."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {workData.map((project, i) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className="group flex items-center gap-3 p-3.5 rounded-2xl bg-surface-container-low/50 border border-outline-variant/25 hover:border-outline-variant/60 transition-all"
              >
                <span
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black font-mono shrink-0"
                  style={{ backgroundColor: `${project.accentColor}22`, color: project.accentColor }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white truncate group-hover:text-primary transition-colors">
                    {project.brandName}
                  </p>
                  <p className="text-[11px] text-on-surface-variant truncate">{project.category}</p>
                </div>
              </a>
            ))}
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
                    {/* Device Display (Left) */}
                    <div className="lg:col-span-6 order-1">
                      <ProjectDeviceDisplay project={project} isReversed={false} />
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

                    {/* Device Display (Right) */}
                    <div className="lg:col-span-6 order-1 lg:order-2">
                      <ProjectDeviceDisplay project={project} isReversed={true} />
                    </div>
                  </>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* ========================================================
          OUR WORK BY CAPABILITY
      ======================================================== */}
      <section className="w-full py-14 sm:py-16 lg:py-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop border-t border-outline-variant/15">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our Work by Capability"
            title="One Team. Every Capability."
            subtitle="Our projects span the full digital spectrum — here is how our work maps to what we do."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="p-5 sm:p-6 rounded-3xl bg-surface-container-low/50 border border-outline-variant/25 backdrop-blur-xl flex flex-col gap-4 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl">{cap.icon}</span>
                  </div>
                  <h3 className="font-title-lg text-lg font-bold text-white">{cap.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cap.projects.map((p) => (
                    <span
                      key={p}
                      className="px-2.5 py-1 rounded-lg bg-surface-container-high/60 border border-outline-variant/30 text-[11px] sm:text-xs text-slate-200"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Final CTA teaser card to balance the grid */}
            <a
              href="/contact"
              className="group p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-primary/15 to-surface-container-low/50 border border-primary/30 backdrop-blur-xl flex flex-col justify-between gap-4 hover:border-primary/60 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">add_circle</span>
                </div>
                <h3 className="font-title-lg text-lg font-bold text-white">Your Project Here</h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Have a challenge that fits one of these capabilities? Let&apos;s build the solution together.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                Start a Project
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
              </span>
            </a>
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
          TECHNOLOGY CAPABILITIES
      ======================================================== */}
      <section className="w-full py-14 sm:py-16 lg:py-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop border-t border-outline-variant/15">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Technology Capabilities"
            title="Modern Technology. Practical Solutions."
            subtitle="Our projects can combine different technologies depending on the requirements."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH_DOMAINS.map((d) => (
              <div
                key={d.domain}
                className="p-5 sm:p-6 rounded-3xl bg-surface-container-low/50 border border-outline-variant/25 backdrop-blur-xl flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl">{d.icon}</span>
                  </div>
                  <h3 className="font-title-lg text-lg font-bold text-white">{d.domain}</h3>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{d.tech}</p>
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
