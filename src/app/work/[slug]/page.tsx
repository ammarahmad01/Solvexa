import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { workData, ProjectItem } from "../../../data/work";
import { getMergedWorkProjects } from "../../../lib/firebaseAdmin";
import TechLogo from "../../../components/TechLogos";
import ContactCtaSection from "../../../components/ContactCtaSection";

export const dynamicParams = true;

interface WorkPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return workData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: WorkPageProps) {
  const { slug } = await params;
  const allProjects = (await getMergedWorkProjects()) as ProjectItem[];
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found | Solvexa" };

  return {
    title: `${project.title} - Case Study | Solvexa`,
    description: project.shortDesc,
  };
}

/* ============================================================
   Shared building blocks — clean, themed, badge-free
============================================================ */
function SectionCard({
  eyebrow,
  title,
  icon,
  children,
  highlight = false,
}: {
  eyebrow: string;
  title: string;
  icon?: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl border p-6 sm:p-9 flex flex-col gap-4 shadow-xl ${
        highlight
          ? "bg-gradient-to-br from-primary/10 via-surface-container-low/70 to-surface-container-low/70 border-primary/30"
          : "bg-surface-container-low/60 border-outline-variant/25"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-lg">{icon}</span>
          </div>
        )}
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary font-semibold block">
            {eyebrow}
          </span>
          <h2 className="font-headline-sm text-xl sm:text-2xl font-bold text-white tracking-tight">
            {title}
          </h2>
        </div>
      </div>
      <div className="text-sm sm:text-base text-on-surface-variant leading-relaxed">{children}</div>
    </div>
  );
}

/* Flow renderer for architecture / pipeline / process chains */
function FlowSteps({ text, accentColor }: { text: string; accentColor: string }) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  return (
    <div className="flex flex-col gap-3">
      {lines.map((line, i) => {
        const steps = line.split("→").map((s) => s.trim()).filter(Boolean);
        return (
          <div key={i} className="flex flex-wrap items-center gap-x-2 gap-y-2.5">
            {steps.map((step, j) => (
              <React.Fragment key={j}>
                {j > 0 && (
                  <span className="material-symbols-outlined text-base shrink-0" style={{ color: accentColor }}>
                    east
                  </span>
                )}
                <span
                  className={`px-3 py-1.5 rounded-xl border text-xs sm:text-[13px] font-medium ${
                    j === 0
                      ? "bg-surface-container-high/80 border-outline-variant/40 text-white"
                      : "bg-surface-container/60 border-outline-variant/30 text-slate-200"
                  }`}
                >
                  {step}
                </span>
              </React.Fragment>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default async function ProjectDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const allProjects = (await getMergedWorkProjects()) as ProjectItem[];
  const projectIndex = allProjects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = allProjects[projectIndex];
  const nextProject = allProjects[(projectIndex + 1) % allProjects.length];

  // Runtime-safe field access (CMS-managed projects may not carry every field)
  const objectives = Array.isArray(project.objectives) ? project.objectives : [];
  const keyFeatures = Array.isArray(project.keyFeatures) ? project.keyFeatures : [];
  const servicesDelivered = Array.isArray(project.servicesDelivered) ? project.servicesDelivered : [];
  const deliverables = Array.isArray(project.deliverables) ? project.deliverables : [];
  const technologies = Array.isArray(project.technologies) ? project.technologies : [];
  const galleryImages = Array.isArray(project.galleryImages) ? project.galleryImages : [];
  const architecture = project.architecture || "";
  const howSolved = project.howSolvexaSolvedIt || project.solution || "";
  const outcome = project.outcome || "";
  const isOngoing = (project.timeline || "").toLowerCase() === "ongoing";

  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">
      {/* ========================================================
          HERO HEADER (no badges — clean editorial hierarchy)
      ======================================================== */}
      <section className="relative w-full pt-12 pb-10 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[130px] pointer-events-none opacity-15 -z-10"
          style={{ backgroundColor: project.accentColor }}
        />
        <div className="max-w-5xl mx-auto flex flex-col items-start gap-5">
          <Link
            href="/work"
            className="text-xs text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Back to Work Portfolio</span>
          </Link>

          {/* Category as plain editorial eyebrow — badge removed */}
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary font-semibold">
            {project.category}
          </p>

          <h1 className="font-headline-lg text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            {project.title}
          </h1>

          <p className="font-body-lg text-base sm:text-lg lg:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
            {project.shortDesc}
          </p>

          {/* Project Facts Bar — clean grid, no pill styling */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl bg-surface-container-low/70 border border-outline-variant/25 mt-2 shadow-lg">
            <div>
              <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">Client</p>
              <p className="font-bold text-sm text-on-surface mt-1.5">{project.client}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">Timeline</p>
              <p className="font-bold text-sm text-on-surface mt-1.5">{project.timeline}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">
                {project.metricsLabel}
              </p>
              <p className="font-bold text-sm mt-1.5" style={{ color: project.accentColor }}>
                {project.metrics}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">Status</p>
              <div className="flex items-center gap-1.5 text-sm font-bold text-secondary mt-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span>{isOngoing ? "Ongoing Services" : "Live in Production"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Cover Image — borderless, proper image presentation */}
      <section className="w-full max-w-6xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop mb-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[380px] sm:h-[520px] group ring-1 ring-white/5">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* ========================================================
          OVERVIEW + OBJECTIVES
      ======================================================== */}
      <section className="w-full max-w-5xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <SectionCard eyebrow="Project Overview" title="The Objective" icon="flag">
              <p>{project.overview || project.description}</p>
            </SectionCard>
          </div>
          {objectives.length > 0 && (
            <div className="lg:col-span-2">
              <SectionCard eyebrow="Goals" title="Project Objectives" icon="track_changes">
                <ul className="flex flex-col gap-2.5">
                  {objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                      <span
                        className="material-symbols-outlined text-base mt-0.5 shrink-0"
                        style={{ color: project.accentColor }}
                      >
                        check_circle
                      </span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          CHALLENGE + SOLUTION
      ======================================================== */}
      <section className="w-full max-w-5xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard eyebrow="Engineering Challenge" title="The Technical Hurdle" icon="report_problem">
            <p>{project.challenge}</p>
          </SectionCard>
          <SectionCard eyebrow="Our Approach" title="How Solvexa Solved It" icon="architecture">
            <p>{howSolved}</p>
          </SectionCard>
        </div>
      </section>

      {/* ========================================================
          ARCHITECTURE + PIPELINES / PROCESSES
      ======================================================== */}
      {(architecture || project.mlPipeline || project.designProcess || project.workflow) && (
        <section className="w-full max-w-5xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-6">
          <SectionCard eyebrow="System Design" title="Architecture & Pipelines" icon="hub">
            <div className="flex flex-col gap-6">
              {architecture && (
                <div className="flex flex-col gap-2.5">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono">
                    System Architecture
                  </p>
                  <FlowSteps text={architecture} accentColor={project.accentColor} />
                </div>
              )}
              {project.mlPipeline && (
                <div className="flex flex-col gap-2.5 pt-2 border-t border-outline-variant/20">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono">
                    Machine Learning Pipeline
                  </p>
                  <FlowSteps text={project.mlPipeline} accentColor={project.accentColor} />
                </div>
              )}
              {project.designProcess && (
                <div className="flex flex-col gap-2.5 pt-2 border-t border-outline-variant/20">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono">
                    Design Process
                  </p>
                  <FlowSteps text={project.designProcess} accentColor={project.accentColor} />
                </div>
              )}
              {project.workflow && (
                <div className="flex flex-col gap-2.5 pt-2 border-t border-outline-variant/20">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono">
                    Production Workflow
                  </p>
                  <FlowSteps text={project.workflow} accentColor={project.accentColor} />
                </div>
              )}
            </div>
          </SectionCard>
        </section>
      )}

      {/* ========================================================
          KEY FEATURES
      ======================================================== */}
      {keyFeatures.length > 0 && (
        <section className="w-full max-w-5xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-6">
          <SectionCard eyebrow="Capabilities" title="Key Features" icon="grid_view">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm text-on-surface p-3.5 rounded-2xl bg-surface-container/60 border border-outline-variant/20"
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5"
                    style={{ backgroundColor: `${project.accentColor}22`, color: project.accentColor }}
                  >
                    ✓
                  </span>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>
      )}

      {/* ========================================================
          SERVICES DELIVERED (service-based case studies)
      ======================================================== */}
      {servicesDelivered.length > 0 && (
        <section className="w-full max-w-5xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-6">
          <SectionCard eyebrow="What We Provided" title="Services Delivered" icon="verified">
            <div className="flex flex-wrap gap-2.5">
              {servicesDelivered.map((s, i) => (
                <span
                  key={i}
                  className="px-3.5 py-2 rounded-xl bg-surface-container/70 border border-outline-variant/30 text-xs sm:text-sm text-slate-200 font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </SectionCard>
        </section>
      )}

      {/* ========================================================
          DELIVERABLES
      ======================================================== */}
      {deliverables.length > 0 && (
        <section className="w-full max-w-5xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-6">
          <SectionCard eyebrow="Shipped" title="Key Deliverables" icon="deployed_code">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {deliverables.map((del, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm text-on-surface p-3.5 rounded-2xl bg-surface-container/60 border border-outline-variant/20"
                >
                  <span className="material-symbols-outlined text-base mt-0.5 shrink-0 text-primary">
                    check_circle
                  </span>
                  <span className="font-medium">{del}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>
      )}

      {/* ========================================================
          TECH STACK DEPLOYED
      ======================================================== */}
      {technologies.length > 0 && (
        <section className="w-full max-w-5xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-6">
          <SectionCard eyebrow="Built With" title="Technologies Deployed" icon="memory">
            <div className="flex flex-wrap gap-3">
              {technologies.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-surface-container/70 border border-outline-variant/30 text-sm font-semibold text-on-surface hover:border-primary/40 transition-colors"
                >
                  <TechLogo name={t} className="w-5 h-5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>
      )}

      {/* ========================================================
          OUTCOME
      ======================================================== */}
      {outcome && (
        <section className="w-full max-w-5xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-6">
          <SectionCard eyebrow="The Result" title="Project Outcome" icon="trending_up" highlight>
            <p className="text-base sm:text-lg text-on-surface leading-relaxed">{outcome}</p>
          </SectionCard>
        </section>
      )}

      {/* ========================================================
          GALLERY SCREENSHOTS
      ======================================================== */}
      {galleryImages.length > 0 && (
        <section className="w-full max-w-6xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-8">
          <div className="text-center mb-8">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary font-semibold">
              Visual Showcase
            </span>
            <h2 className="font-headline-sm text-2xl sm:text-3xl font-bold text-white mt-2">
              Interface &amp; Product Screens
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((imgUrl, gIdx) => (
              <div
                key={gIdx}
                className="rounded-3xl overflow-hidden shadow-xl h-64 group ring-1 ring-white/5"
              >
                <img
                  src={imgUrl}
                  alt={`${project.title} screenshot ${gIdx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================
          CLIENT TESTIMONIAL
      ======================================================== */}
      {project.testimonial && (
        <section className="w-full max-w-4xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-surface-container-low/80 border border-outline-variant/25 text-center flex flex-col items-center gap-4 shadow-2xl">
            <div className="flex items-center text-primary text-base gap-1">
              {[...Array(project.testimonial.rating || 5)].map((_, r) => (
                <span key={r} className="material-symbols-outlined fill-1">star</span>
              ))}
            </div>
            <p className="font-headline-sm text-lg sm:text-2xl font-medium text-on-surface italic max-w-2xl leading-relaxed">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <div className="pt-3 border-t border-outline-variant/20 w-full max-w-xs">
              <p className="font-bold text-base text-on-surface">{project.testimonial.author}</p>
              <p className="text-xs text-primary font-mono">
                {project.testimonial.role}, {project.testimonial.company}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Next Project Nav Banner */}
      <section className="w-full max-w-5xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-8">
        <Link
          href={`/work/${nextProject.slug}`}
          className="group p-8 sm:p-10 rounded-3xl bg-surface-container-low/60 border border-outline-variant/25 hover:border-primary/50 transition-all flex items-center justify-between shadow-xl"
        >
          <div>
            <span className="text-[11px] font-mono text-primary font-bold tracking-[0.2em] uppercase">
              Next Case Study
            </span>
            <h3 className="font-headline-sm text-2xl sm:text-3xl font-bold text-on-surface group-hover:text-primary transition-colors mt-1">
              {nextProject.title}
            </h3>
            <p className="text-xs text-on-surface-variant mt-1">
              {nextProject.category} • {nextProject.metrics}
            </p>
          </div>
          <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shrink-0">
            <span className="material-symbols-outlined text-3xl">arrow_forward</span>
          </div>
        </Link>
      </section>

      {/* Contact CTA */}
      <ContactCtaSection />
    </div>
  );
}
