import Link from "next/link";
import { teamData } from "../../data/team";
import StatsCounter from "../../components/StatsCounter";
import ContactCtaSection from "../../components/ContactCtaSection";
import ClientLoveSection from "../../components/ClientLoveSection";

export const metadata = {
  title: "Our Team | Solvexa - Digital Engineering & Creative Collective",
  description: "Meet the engineers, architects, designers, and marketers building world-class digital experiences at Solvexa.",
};

export default function TeamPage() {
  const culturePillars = [
    {
      title: "No Ivory Towers",
      desc: "Our directors and senior architects write production code daily. Every client communicates directly with hands-on builders.",
      icon: "engineering"
    },
    {
      title: "Obsession with Mastery",
      desc: "Weekly internal tech-sharing sessions covering 3D WebGL, LLM orchestration, and distributed database sharding.",
      icon: "psychology"
    },
    {
      title: "Transparent Ownership",
      desc: "We practice radical candor: clear sprint deadlines, daily git commits, and guaranteed intellectual property handoff.",
      icon: "handshake"
    }
  ];

  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative w-full pt-12 pb-16 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-caps text-xs tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            The Minds Behind Solvexa
          </div>
          <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Meet Our Team —{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              Engineers, Designers &amp; Strategists
            </span>
          </h1>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-5 max-w-2xl leading-relaxed">
            A versatile collective committed to architectural rigor, aesthetic beauty, and moving your business metrics forward.
          </p>
        </div>
      </section>

      {/* Team Member Cards Grid with FULL CLEAR PORTRAITS */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 hover:border-primary/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-[0_25px_50px_-15px_rgba(212,175,55,0.25)]"
            >
              {/* Full Proper Image Header - 100% Unobstructed and Crystal Clear */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-lowest">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Department Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary border border-primary/30 font-semibold shadow-md">
                    {member.department}
                  </span>
                </div>

                {/* Quick Social Overlay Icons */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md hover:bg-primary hover:text-on-primary text-on-surface-variant flex items-center justify-center transition-colors text-xs font-bold border border-outline-variant/30 shadow-md"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      in
                    </a>
                  )}
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md hover:bg-primary hover:text-on-primary text-on-surface-variant flex items-center justify-center transition-colors text-xs font-bold border border-outline-variant/30 shadow-md"
                      aria-label={`${member.name} Facebook`}
                    >
                      fb
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md hover:bg-primary hover:text-on-primary text-on-surface-variant flex items-center justify-center transition-colors text-xs font-bold border border-outline-variant/30 shadow-md"
                      aria-label={`${member.name} Instagram`}
                    >
                      ig
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md hover:bg-primary hover:text-on-primary text-on-surface-variant flex items-center justify-center transition-colors text-xs font-bold border border-outline-variant/30 shadow-md"
                      aria-label={`${member.name} GitHub`}
                    >
                      gh
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body with Name, Role, Bio & Skills */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow border-t border-outline-variant/20 bg-surface-container-low/95">
                <div>
                  <div className="mb-3">
                    <h3 className="font-headline-sm text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                      {member.name}
                      <span className="material-symbols-outlined text-primary text-base" title="Core Team">verified</span>
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-primary font-semibold mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-lg text-[11px] bg-surface-container-highest/60 text-on-surface-variant font-mono border border-outline-variant/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-on-surface-variant">Solvexa Core Collective</span>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1 group/btn"
                  >
                    <span>Connect</span>
                    <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Culture Pillars */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl bg-surface-container-lowest/40 border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Engineering Culture</span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface mt-1">
              How We Work Together
            </h2>
            <p className="text-sm text-on-surface-variant mt-2">
              High autonomy, high mastery, and complete dedication to client outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {culturePillars.map((p, i) => (
              <div key={i} className="p-8 rounded-3xl bg-surface-container-low/80 border border-outline-variant/30 flex flex-col gap-4 shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                </div>
                <h3 className="font-title-lg text-xl font-bold text-on-surface">{p.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter with Animated Numbers */}
      <StatsCounter />

      {/* Join Our Team Banner */}
      <section className="relative w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-lowest border border-primary/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold">Careers at Solvexa</span>
            <h3 className="font-headline-sm text-2xl sm:text-3xl font-bold text-on-surface mt-1">
              Want to Build the Future With Us?
            </h3>
            <p className="text-sm text-on-surface-variant mt-2 max-w-xl">
              We are constantly seeking ambitious full-stack developers, mobile engineers, 3D artists, and growth strategists to join our team in Rawalpindi or remotely.
            </p>
          </div>
          <a
            href="mailto:info.solvexa@gmail.com?subject=Career%20Inquiry%20at%20Solvexa"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-label-md text-sm font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container hover:shadow-[0_0_24px_rgba(242,202,80,0.5)] active:scale-95 transition-all shadow-xl shrink-0"
          >
            <span>Send Your Resume</span>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Client Reviews */}
      <ClientLoveSection />

      {/* Contact CTA */}
      <ContactCtaSection />
    </div>
  );
}
