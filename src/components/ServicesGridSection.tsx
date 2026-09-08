import Link from "next/link";
import { servicesData } from "../data/services";
import ServiceBrandIcon from "./ServiceBrandIcon";

export default function ServicesGridSection() {
  return (
    <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-10 sm:py-14" id="services">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
        
        {/* Section Header: Matching Ropstam Reference Image */}
        <div className="flex flex-col items-start text-left max-w-4xl">
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
            Our <span className="text-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-2 sm:mt-3 leading-relaxed">
            Driving your Business Towards Success with Innovation, Digitization, and Passion.
          </p>
        </div>

        {/* Services Grid: 3-Column Layout Matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
            >
              <div
                className="relative h-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 transform-gpu cursor-pointer bg-surface-container-low/80 backdrop-blur-xl border border-outline-variant/30 text-on-surface hover:border-primary/60 hover:bg-surface-container-high/90 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(242,202,80,0.2)] hover:scale-[1.015] active:scale-[0.98]"
                style={{
                  perspective: "1000px",
                }}
              >
                {/* Subtle 3D reflective light sheen */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/[0.04] to-white/0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Row: Title on Left, Outline Icon on Right */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-headline-sm text-lg sm:text-xl font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <div className="shrink-0">
                      <ServiceBrandIcon slug={service.slug} size="md" />
                    </div>
                  </div>

                  {/* Short Description (2-3 lines, clean & readable) */}
                  <p className="text-xs sm:text-sm leading-relaxed text-on-surface-variant group-hover:text-on-surface/90 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom Action Indicator: Subtle arrow that slides on hover */}
                <div className="mt-5 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs font-semibold">
                  <span className="text-primary/90">
                    Learn More
                  </span>
                  <span className="material-symbols-outlined text-sm text-primary transition-transform duration-300 group-hover:translate-x-1.5">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* Explore All Services Card with Accent Theme (Matches Reference Image Bottom-Right Card) */}
          <Link
            href="/services"
            className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
          >
            <div
              className="relative h-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 transform-gpu cursor-pointer bg-gradient-to-br from-primary via-primary to-amber-500 text-on-primary shadow-[0_12px_30px_rgba(242,202,80,0.3)] border border-primary-fixed hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(242,202,80,0.45)] hover:scale-[1.015] active:scale-[0.98] overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              {/* Decorative watermark / network graphic matching reference image */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-20 pointer-events-none text-on-primary">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="50" cy="50" r="40" />
                  <circle cx="50" cy="50" r="22" />
                  <circle cx="20" cy="30" r="6" fill="currentColor" />
                  <circle cx="80" cy="30" r="6" fill="currentColor" />
                  <circle cx="50" cy="85" r="6" fill="currentColor" />
                  <line x1="20" y1="30" x2="50" y2="50" />
                  <line x1="80" y1="30" x2="50" y2="50" />
                  <line x1="50" y1="85" x2="50" y2="50" />
                </svg>
              </div>

              {/* Top Row: Title on Left, Outline Icon on Right */}
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-headline-sm text-lg sm:text-xl font-bold tracking-tight text-on-primary">
                    Explore All Services
                  </h3>
                  <div className="shrink-0 pt-0.5 text-on-primary">
                    <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-on-primary/95 font-medium">
                  Discover our full ecosystem of custom engineering, mobile apps, enterprise AI, cloud architecture, and growth solutions.
                </p>
              </div>

              {/* Bottom Action Indicator */}
              <div className="relative z-10 mt-5 pt-3 border-t border-on-primary/20 flex items-center justify-between text-xs font-bold text-on-primary">
                <span>View All 16 Capabilities</span>
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1.5">
                  arrow_forward
                </span>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
