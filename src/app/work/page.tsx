"use client";

import { useState } from "react";
import Link from "next/link";
import { workCategories, workData } from "../../data/work";
import TechLogo from "../../components/TechLogos";
import ContactCtaSection from "../../components/ContactCtaSection";
import ClientLoveSection from "../../components/ClientLoveSection";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = selectedCategory === "All"
    ? workData
    : workData.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative w-full pt-12 pb-12 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-caps text-xs tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Verified Production Deployments
          </div>
          <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Our Work —{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              See What We&apos;ve Built
            </span>
          </h1>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-4 max-w-2xl leading-relaxed">
            From high-concurrency fintech terminals and enterprise AI dashboards to cross-platform mobile apps, 3D configurators, and brand systems.
          </p>
        </div>
      </section>

      {/* Category Tabs Filter */}
      <section className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pb-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap p-2 rounded-full bg-surface-container-lowest/80 border border-outline-variant/30 backdrop-blur-xl">
          {workCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-primary text-on-primary shadow-[0_2px_14px_rgba(212,175,55,0.4)] scale-105"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-surface-container-low/80 backdrop-blur-2xl border border-outline-variant/30 hover:border-primary/50 overflow-hidden transition-all duration-300 shadow-xl flex flex-col hover:-translate-y-1.5"
            >
              {/* Thumbnail with overlay */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={project.heroImage}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md border border-primary/40 text-[11px] font-mono text-primary font-bold">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-surface-container-highest/90 backdrop-blur-md border border-outline-variant/30 text-right">
                  <p className="text-[9px] font-mono uppercase text-on-surface-variant">{project.metricsLabel}</p>
                  <p className="text-sm font-bold text-primary font-mono">{project.metrics}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-headline-sm text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-2 line-clamp-3 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tech stack vector icons */}
                  <div className="flex items-center gap-2 flex-wrap mt-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container-highest/60 border border-outline-variant/30 text-[11px] text-on-surface"
                      >
                        <TechLogo name={tech} className="w-3.5 h-3.5" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Quote Snippet */}
                {project.testimonial && (
                  <div className="mt-4 pt-4 border-t border-outline-variant/20 text-xs italic text-on-surface-variant/90 line-clamp-2">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </div>
                )}

                {/* Footer Link */}
                <div className="pt-4 mt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant font-mono">Client: {project.client.split(" ")[0]}</span>
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary-fixed hover:underline"
                  >
                    <span>Read Full Case Study</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Reviews */}
      <ClientLoveSection />

      {/* Contact CTA */}
      <ContactCtaSection />
    </div>
  );
}
