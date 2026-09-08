import { notFound } from "next/navigation";
import Link from "next/link";
import { workData } from "../../../data/work";
import TechLogo from "../../../components/TechLogos";
import ContactCtaSection from "../../../components/ContactCtaSection";

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
  const project = workData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found | Solvexa" };

  return {
    title: `${project.title} - Case Study | Solvexa`,
    description: project.shortDesc,
  };
}

export default async function ProjectDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const projectIndex = workData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = workData[projectIndex];
  const nextProject = workData[(projectIndex + 1) % workData.length];

  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative w-full pt-12 pb-12 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="max-w-5xl mx-auto flex flex-col items-start gap-6">
          <Link
            href="/work"
            className="text-xs text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Back to Work Portfolio</span>
          </Link>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 font-bold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-secondary-fixed">
              {project.metrics} {project.metricsLabel}
            </span>
            <span className="text-xs font-mono text-on-surface-variant">
              • Delivered in {project.timeline}
            </span>
          </div>

          <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="font-body-lg text-lg sm:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
            {project.shortDesc}
          </p>

          {/* Project Details Bar */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-surface-container-low/90 border border-primary/30 mt-4 shadow-xl">
            <div>
              <p className="text-[10px] font-mono text-on-surface-variant uppercase">Client</p>
              <p className="font-bold text-sm text-on-surface mt-1">{project.client}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-on-surface-variant uppercase">Timeline</p>
              <p className="font-bold text-sm text-on-surface mt-1">{project.timeline}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-on-surface-variant uppercase">{project.metricsLabel}</p>
              <p className="font-bold text-sm text-primary mt-1">{project.metrics}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-on-surface-variant uppercase">Production Status</p>
              <div className="flex items-center gap-1.5 text-sm font-bold text-secondary mt-1">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span>Live in Production</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Cover Image */}
      <section className="w-full max-w-6xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop mb-12">
        <div className="relative rounded-3xl overflow-hidden border border-primary/40 shadow-2xl h-[400px] sm:h-[550px] group">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Problem & Challenge Two-Column */}
      <section className="w-full max-w-5xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-surface-container-low/80 border border-outline-variant/30 flex flex-col gap-3 shadow-lg">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Project Brief</span>
            <h2 className="font-headline-sm text-2xl font-bold text-on-surface">The Objective</h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {project.overview}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface-container-low/80 border border-outline-variant/30 flex flex-col gap-3 shadow-lg">
            <span className="text-xs font-mono text-secondary uppercase tracking-widest">Engineering Challenge</span>
            <h2 className="font-headline-sm text-2xl font-bold text-on-surface">The Technical Hurdle</h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* Solution & Deliverables */}
      <section className="w-full max-w-5xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-surface-container-lowest/90 border border-primary/30 flex flex-col gap-8 shadow-2xl">
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Architectural Solution</span>
            <h2 className="font-headline-sm text-3xl font-bold text-on-surface mt-1">
              How Solvexa Solved It
            </h2>
            <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="pt-6 border-t border-outline-variant/20">
            <h3 className="font-title-lg text-lg font-bold text-on-surface mb-4">
              Key Deliverables Shipped:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.deliverables.map((del, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-on-surface p-3 rounded-2xl bg-surface-container-low/60 border border-outline-variant/20">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="font-medium">{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Screenshots */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="w-full max-w-6xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Visual Showcase</span>
            <h2 className="font-headline-sm text-3xl font-bold text-on-surface mt-1">
              Interface &amp; Code Architecture
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.galleryImages.map((imgUrl, gIdx) => (
              <div key={gIdx} className="rounded-3xl overflow-hidden border border-outline-variant/30 shadow-xl h-64 group">
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

      {/* Tech Stack Deployed with Real Logos */}
      <section className="w-full max-w-5xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-xl text-center">
        <span className="text-xs font-mono text-primary uppercase tracking-widest">Technologies Deployed</span>
        <h2 className="font-headline-sm text-3xl font-bold text-on-surface mt-1 mb-8">
          Production Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {project.technologies.map((t) => (
            <div
              key={t}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-sm font-semibold text-on-surface shadow-sm hover:border-primary/40 transition-colors"
            >
              <TechLogo name={t} className="w-5 h-5" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonial Card */}
      {project.testimonial && (
        <section className="w-full max-w-4xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-surface-container-low/95 border border-primary/40 text-center flex flex-col items-center gap-4 shadow-2xl">
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
              <p className="text-xs text-primary font-mono">{project.testimonial.role}, {project.testimonial.company}</p>
            </div>
          </div>
        </section>
      )}

      {/* Next Project Nav Banner */}
      <section className="w-full max-w-5xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <Link
          href={`/work/${nextProject.slug}`}
          className="group p-8 sm:p-10 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all flex items-center justify-between shadow-2xl"
        >
          <div>
            <span className="text-xs font-mono text-primary font-bold tracking-widest">NEXT CASE STUDY</span>
            <h3 className="font-headline-sm text-2xl sm:text-3xl font-bold text-on-surface group-hover:text-primary transition-colors mt-1">
              {nextProject.title}
            </h3>
            <p className="text-xs text-on-surface-variant mt-1">{nextProject.category} • {nextProject.metrics}</p>
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
