import Link from "next/link";

export default function OutsourcingSection() {
  const highlights = [
    {
      title: "Senior-Level Talent on Demand",
      desc: "Get vetted full-stack developers, mobile engineers, and product designers without the overhead of full-time hiring."
    },
    {
      title: "Seamless Team Extension",
      desc: "Our engineers integrate straight into your Slack, Jira, GitHub, and daily standups as if they were in your room."
    },
    {
      title: "Agile Scale Up or Down",
      desc: "Ramp up development speed for an urgent release, or adjust team size as your roadmap evolves."
    },
    {
      title: "Timezone-Aligned Delivery",
      desc: "Reliable overlapping communication windows with guaranteed SLA responses and weekly sprint demos."
    }
  ];

  return (
    <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-10 sm:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Column: Value Prop Content */}
        <div className="w-full lg:w-[50%] flex flex-col items-start text-left z-10">
          <div className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-caps text-xs tracking-widest uppercase mb-space-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            Dedicated Outsourcing &amp; Staff Augmentation
          </div>

          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-on-surface mb-space-md">
            Unlock Your Business Potential With Our{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              Expert Outsourcing Solutions
            </span>
          </h2>

          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mb-space-xl leading-relaxed">
            We act as an extension of your in-house team — carefully matching designers, developers, and marketers to your project so you get senior-level talent without the overhead of full-time hiring. Scale up or down as your business needs change.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-space-xl">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-surface-container-low/60 border border-outline-variant/20 hover:border-primary/30 transition-colors flex flex-col gap-1"
              >
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <span className="material-symbols-outlined text-base">verified</span>
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-space-md">
            <Link
              href="/contact"
              className="inline-flex items-center gap-space-sm px-space-xl py-4 rounded-full font-label-md text-label-md font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container hover:shadow-[0_0_24px_rgba(242,202,80,0.5)] active:scale-95 transition-all duration-300 shadow-lg"
            >
              <span>Let&apos;s Build Your Team</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-space-sm px-space-lg py-4 rounded-full font-label-md text-label-md font-semibold text-on-surface bg-surface-container-lowest/50 hover:bg-surface-container-high/80 border border-outline-variant/30 transition-all"
            >
              <span>Explore Engagement Models</span>
            </Link>
          </div>
        </div>

        {/* Right Column: High-Impact Device / Modern Mockup Card */}
        <div className="w-full lg:w-[48%] relative z-10">
          <div className="relative rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-primary/30 p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(12,3,30,0.9),0_0_30px_rgba(212,175,55,0.15)] overflow-hidden">
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/15 blur-[80px] rounded-full pointer-events-none"></div>

            {/* Window header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-outline-variant/20">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-error/80"></span>
                <span className="w-3 h-3 rounded-full bg-primary/80"></span>
                <span className="w-3 h-3 rounded-full bg-secondary/80"></span>
                <span className="font-mono text-xs text-on-surface-variant ml-2">SOLVEXA::DEDICATED_POD_01</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-primary/20 text-primary font-mono text-xs font-bold">
                ACTIVE SPRINT
              </span>
            </div>

            {/* Team Pod Allocation Card */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-surface-container-highest/50 border border-outline-variant/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold">
                    FE
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Lead Frontend Architect</p>
                    <p className="text-xs text-on-surface-variant">Next.js 15, TypeScript, WebGL 3D</p>
                  </div>
                </div>
                <span className="text-xs text-primary font-semibold">100% Dedicated</span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-highest/50 border border-outline-variant/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary font-bold">
                    BE
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Senior Cloud / API Engineer</p>
                    <p className="text-xs text-on-surface-variant">PostgreSQL, Node.js, Redis, Docker</p>
                  </div>
                </div>
                <span className="text-xs text-secondary font-semibold">100% Dedicated</span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-highest/50 border border-outline-variant/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/20 border border-primary-fixed/40 flex items-center justify-center text-primary-fixed font-bold">
                    UX
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Product &amp; Systems Designer</p>
                    <p className="text-xs text-on-surface-variant">Figma Design System, Interaction Specs</p>
                  </div>
                </div>
                <span className="text-xs text-primary-fixed font-semibold">Sprint Aligned</span>
              </div>
            </div>

            {/* Performance telemetry stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-outline-variant/20 text-center">
              <div>
                <p className="font-headline-sm text-2xl font-bold text-primary">0 hrs</p>
                <p className="text-xs text-on-surface-variant">Recruiting Delay</p>
              </div>
              <div>
                <p className="font-headline-sm text-2xl font-bold text-secondary">40%</p>
                <p className="text-xs text-on-surface-variant">Cost Reduction</p>
              </div>
              <div>
                <p className="font-headline-sm text-2xl font-bold text-primary-fixed">99.8%</p>
                <p className="text-xs text-on-surface-variant">Sprint Adherence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
