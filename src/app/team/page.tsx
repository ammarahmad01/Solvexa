import Link from "next/link";
import { teamData } from "../../data/team";
import StatsCounter from "../../components/StatsCounter";
import ContactCtaSection from "../../components/ContactCtaSection";
import ClientLoveSection from "../../components/ClientLoveSection";
import HowWeWorkSection from "../../components/HowWeWorkSection";

import SocialIcon from "../../components/SocialIcon";

export const metadata = {
  title: "Our Team | Solvexa - Digital Engineering & Creative Collective",
  description: "Meet the executive leadership — CEO, CTO, and CMO — driving world-class digital experiences at Solvexa.",
};

export default function TeamPage() {
  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative w-full overflow-hidden px-margin-mobile pb-14 pt-12 text-center md:px-margin-tablet md:pb-20 lg:px-margin-desktop">
        <div className="pointer-events-none absolute left-1/2 top-[-12rem] h-[28rem] w-[min(80vw,60rem)] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center">
          <p className="mb-4 font-label-caps text-xs uppercase tracking-[0.22em] text-primary">Solvexa / the collective</p>
          <h1 className="font-headline-lg text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Meet Our Team —{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              Executive Leadership
            </span>
          </h1>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-5 max-w-2xl leading-relaxed">
            The leadership driving Solvexa&apos;s vision, technology, and growth — committed to architectural rigor, aesthetic beauty, and moving your business metrics forward.
          </p>
        </div>
      </section>

      {/* Team Member Profiles */}
      <section className="relative w-full px-margin-mobile pb-space-2xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 sm:gap-7">
          {teamData.slice(0, 3).map((member, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={member.id}
                className="team-profile group relative grid overflow-hidden rounded-[1.8rem] bg-surface-container-low/95 border border-outline-variant/30 hover:border-primary/50 shadow-xl hover:shadow-[0_18px_40px_-14px_rgba(242,202,80,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 lg:h-[400px] lg:grid-cols-12"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {/* Content section: 7 cols on desktop with uniform padding */}
                <div
                  className={`flex flex-col justify-between p-7 sm:p-8 lg:p-8 lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    {/* Department Meta */}
                    <div className="mb-2 flex items-center justify-between">
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        {member.department}
                      </p>
                      {member.experience ? (
                        <p className="font-mono text-xs font-medium text-on-surface-variant/75">
                          {member.experience}
                        </p>
                      ) : null}
                    </div>

                    {/* Member Name & Role */}
                    <h2 className="font-headline-sm text-2xl sm:text-[28px] font-extrabold text-white transition-colors group-hover:text-primary leading-tight">
                      {member.name}
                    </h2>
                    <p className="text-sm sm:text-[15px] font-semibold text-primary/95 mt-0.5">
                      {member.role}
                    </p>

                    {/* Bio: Exactly 2 lines */}
                    <p className="mt-3 text-sm leading-relaxed text-on-surface-variant line-clamp-2">
                      {member.bio}
                    </p>

                    {/* Key Highlights: Exactly 2 points */}
                    {member.highlights && member.highlights.length > 0 ? (
                      <div className="mt-3 space-y-1.5 border-l-2 border-primary/30 pl-3">
                        {member.highlights.slice(0, 2).map((item, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-on-surface/90">
                            <span className="material-symbols-outlined text-primary text-sm shrink-0">
                              check_circle
                            </span>
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {/* Focus & Skills: Clean Single-Line Tag List */}
                    <div className="mt-3.5 pt-3 border-t border-outline-variant/15 flex items-center gap-x-2 text-xs">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary shrink-0">
                        Focus:
                      </span>
                      <div className="flex items-center gap-1.5 overflow-hidden">
                        {member.skills.slice(0, 4).map((skill, sIdx, arr) => (
                          <span key={skill} className="text-on-surface-variant font-medium whitespace-nowrap">
                            {skill}{sIdx < arr.length - 1 ? <span className="mx-1.5 text-primary/40 font-normal">/</span> : null}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Connect Action with LinkedIn */}
                  <div className="mt-5 pt-3.5 border-t border-outline-variant/20 flex items-center justify-end">
                    <a
                      href={member.social.linkedin || "/contact"}
                      target={member.social.linkedin ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-primary transition-colors hover:text-primary-fixed"
                    >
                      <span>Connect with {member.name.split(" ")[0]}</span>
                      <SocialIcon network="linkedin" />
                    </a>
                  </div>
                </div>

                {/* Member Image: Full card coverage without separate borders or inner container */}
                <div
                  className={`relative h-72 sm:h-80 lg:h-full lg:col-span-5 overflow-hidden bg-surface-container-lowest ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-[center_16%] filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle directional edge fade into the card body */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container-low/90 via-transparent to-transparent lg:hidden" />
                  <div
                    className={`pointer-events-none absolute inset-0 hidden lg:block ${
                      isEven
                        ? "bg-gradient-to-r from-surface-container-low/90 via-transparent to-transparent"
                        : "bg-gradient-to-l from-surface-container-low/90 via-transparent to-transparent"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How We Work Together Section */}
      <HowWeWorkSection />

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
            <span>Send your Resume</span>
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
