import Link from "next/link";

export default function ClientAttractionSection() {
  const capabilities = [
    {
      title: "Full-Stack Enterprise Engineering",
      category: "Web & Distributed Cloud",
      desc: "From distributed cloud microservices to ultra-responsive Next.js applications and 3D WebGL interfaces, we engineer systems that process heavy workloads with sub-second latency.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "High-Engagement Mobile Ecosystems",
      category: "iOS & Android Cross-Platform",
      desc: "Offline-first architectures, buttery smooth touch gestures, and real-time synchronization that turn casual smartphone users into loyal, recurring enterprise customers.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "Autonomous AI & Intelligent Systems",
      category: "Machine Intelligence & Automation",
      desc: "Custom LLM orchestration, intelligent multi-agent pipelines, and predictive analytics that automate operational bottlenecks and generate measurable business ROI.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85"
    }
  ];

  return (
    <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-10 sm:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Section Header - Centered, Symmetrical & High-Impact */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built for Velocity.{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              Engineered for Scale.
            </span>
          </h2>
          <p className="font-body-lg text-sm sm:text-base text-on-surface-variant mt-3 max-w-2xl leading-relaxed">
            Solvexa pairs senior product engineering with human-centered aesthetics. We turn complex technical challenges into market-leading digital platforms.
          </p>
        </div>

        {/* 3 High-Impact Visual Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-surface-container-low/75 backdrop-blur-2xl border border-outline-variant/30 hover:border-primary/50 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_20px_45px_-10px_rgba(212,175,55,0.22)]"
            >
              {/* Image Container with Ambient Gradient */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-surface-container-lowest">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95 contrast-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/20 to-transparent"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-[11px] font-mono text-primary font-bold uppercase tracking-wider mb-1.5">
                    {item.category}
                  </p>
                  <h3 className="font-headline-sm text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Direct Value Proposition Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-surface-container-lowest/90 via-surface-container-low/80 to-surface-container-lowest/90 border border-primary/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="font-headline-sm text-lg sm:text-xl font-bold text-white">
              Ready to Accelerate Your Digital Product Roadmap?
            </h4>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
              Talk directly with our lead architects and get an actionable technical scope within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-full font-label-md text-xs sm:text-sm font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container hover:shadow-[0_0_24px_rgba(242,202,80,0.5)] active:scale-95 transition-all duration-300 shadow-md shrink-0 cursor-pointer"
          >
            <span>Book an Architecture Call</span>
            <span className="ml-1.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
