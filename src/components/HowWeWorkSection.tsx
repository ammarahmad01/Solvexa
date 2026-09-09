import React from "react";

interface PillarItem {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

const PILLARS: PillarItem[] = [
  {
    step: "01",
    title: "Plan Together",
    desc: "We start by understanding the vision, requirements, goals, and challenges. We define clear responsibilities, priorities, timelines, and milestones so everyone knows what we're working toward.",
    icon: "explore",
  },
  {
    step: "02",
    title: "Communicate Clearly",
    desc: "Open and transparent communication keeps our team aligned. We share updates, discuss challenges, ask questions, and make sure everyone has the information they need to move forward.",
    icon: "forum",
  },
  {
    step: "03",
    title: "Collaborate & Share Ideas",
    desc: "Great solutions come from great collaboration. Team members share knowledge, challenge ideas constructively, and bring their expertise together to find smarter and more effective solutions.",
    icon: "diversity_3",
  },
  {
    step: "04",
    title: "Meet & Stay Aligned",
    desc: "Regular team meetings and project check-ins help us review progress, solve blockers, adjust priorities, and keep every project moving in the right direction.",
    icon: "groups",
  },
  {
    step: "05",
    title: "Solve Problems Together",
    desc: "When challenges arise, we don't point fingers—we find solutions. Whether it's a technical issue, tight deadline, or unexpected requirement, the team comes together to analyze the problem and take action.",
    icon: "psychology",
  },
  {
    step: "06",
    title: "Emergency Sessions When It Matters",
    desc: "Some situations require immediate attention. When critical issues or urgent deadlines arise, we organize focused emergency sessions to quickly identify the problem, coordinate responsibilities, and get things back on track.",
    icon: "bolt",
  },
  {
    step: "07",
    title: "Review, Improve & Learn",
    desc: "We continuously review our work, learn from feedback, and improve our processes. Every project is an opportunity to become better, faster, and more efficient as a team.",
    icon: "auto_graph",
  },
  {
    step: "08",
    title: "Celebrate Success Together",
    desc: "Every milestone matters. We recognize individual contributions, celebrate team achievements, and appreciate the people behind every successful project.",
    icon: "celebration",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest/50 px-margin-mobile py-20 sm:py-24 md:px-margin-tablet md:py-28 lg:px-margin-desktop">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[26rem] w-[min(90vw,65rem)] rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[min(80vw,55rem)] rounded-full bg-secondary/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-[1320px] flex-col gap-14 sm:gap-16">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            How We Work Together
          </p>

          <h2 className="mt-3 font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Great Ideas Become Great Results{" "}
            <span className="block mt-1 bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              When We Work as One.
            </span>
          </h2>

          <p className="mt-5 font-body-lg text-base sm:text-lg leading-relaxed text-on-surface-variant">
            At Solvexa, we believe strong teams are built on trust, communication, collaboration, and a shared commitment to excellence. Every project brings together different skills and perspectives, and we work closely as one team to turn ideas into meaningful digital solutions.
          </p>
        </div>

        {/* Perfectly Aligned 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.step}
              className="group relative flex flex-col justify-between rounded-2xl bg-surface-container-low/85 p-7 border border-outline-variant/30 hover:border-primary/50 hover:shadow-[0_12px_36px_-10px_rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Top Row: Step Number & Icon */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-2xl font-black tracking-tight text-primary/70">
                    {pillar.step}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                    <span className="material-symbols-outlined text-2xl">
                      {pillar.icon}
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-headline-sm text-xl font-bold text-white leading-snug group-hover:text-primary transition-colors duration-200">
                  {pillar.title}
                </h3>

                {/* Card Description */}
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant group-hover:text-on-surface transition-colors duration-200">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Creed Section Banner */}
        <div className="relative rounded-2xl border border-primary/30 bg-surface-container-low/85 p-8 sm:p-12 text-center shadow-xl">
          <h3 className="font-headline-sm text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            One Team.{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              One Vision.
            </span>{" "}
            One Goal.
          </h3>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-2xl mx-auto">
            We don&apos;t just work together—
            <span className="font-semibold text-white">
              we grow together, solve together, and succeed together.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
