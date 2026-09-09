import Link from "next/link";
import { teamData } from "../../data/team";
import StatsCounter from "../../components/StatsCounter";
import ContactCtaSection from "../../components/ContactCtaSection";
import ClientLoveSection from "../../components/ClientLoveSection";

function SocialIcon({ network }: { network: string }) {
  if (network === "linkedin") {
    return <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>;
  }

  if (network === "facebook") {
    return <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>;
  }

  if (network === "instagram") {
    return <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>;
  }

  return <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.578 0-.286-.011-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.49 11.49 0 0 1 3.003-.404c1.018.005 2.043.138 3.003.404 2.292-1.552 3.299-1.23 3.299-1.23.655 1.653.243 2.873.12 3.176.769.84 1.235 1.911 1.235 3.221 0 4.61-2.806 5.624-5.478 5.921.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>;
}

export const metadata = {
  title: "Our Team | Solvexa - Digital Engineering & Creative Collective",
  description: "Meet the engineers, architects, designers, and marketers building world-class digital experiences at Solvexa.",
};

export default function TeamPage() {
  const culturePillars = [
    {
      step: "01",
      title: "Plan Together",
      desc: "We start by understanding the vision, requirements, goals, and challenges. We define clear responsibilities, priorities, timelines, and milestones so everyone knows what we are working toward.",
      icon: "map"
    },
    {
      step: "02",
      title: "Communicate Clearly",
      desc: "Open and transparent communication keeps our team aligned. We share updates, discuss challenges, ask questions, and make sure everyone has the information they need to move forward.",
      icon: "forum"
    },
    {
      step: "03",
      title: "Collaborate & Share Ideas",
      desc: "Great solutions come from great collaboration. Team members share knowledge, challenge ideas constructively, and bring their expertise together to find smarter and more effective solutions.",
      icon: "diversity_3"
    },
    {
      step: "04",
      title: "Meet & Stay Aligned",
      desc: "Regular team meetings and project check-ins help us review progress, solve blockers, adjust priorities, and keep every project moving in the right direction.",
      icon: "groups"
    },
    {
      step: "05",
      title: "Solve Problems Together",
      desc: "When challenges arise, we do not point fingers, we find solutions. Whether it is a technical issue, tight deadline, or unexpected requirement, the team comes together to take action.",
      icon: "build_circle"
    },
    {
      step: "06",
      title: "Emergency Sessions When It Matters",
      desc: "Some situations require immediate attention. When critical issues or urgent deadlines arise, we organize focused sessions to coordinate responsibilities and get things back on track.",
      icon: "bolt"
    },
    {
      step: "07",
      title: "Review, Improve & Learn",
      desc: "We continuously review our work, learn from feedback, and improve our processes. Every project is an opportunity to become better, faster, and more efficient as a team.",
      icon: "insights"
    },
    {
      step: "08",
      title: "Celebrate Success Together",
      desc: "Every milestone matters. We recognize individual contributions, celebrate team achievements, and appreciate the people behind every successful project.",
      icon: "celebration"
    }
  ];

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
              Engineers, Designers &amp; Strategists
            </span>
          </h1>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-5 max-w-2xl leading-relaxed">
            A versatile collective committed to architectural rigor, aesthetic beauty, and moving your business metrics forward.
          </p>
        </div>
      </section>

      {/* Team Member Profiles */}
      <section className="relative w-full px-margin-mobile pb-space-3xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-4">
          {teamData.map((member, index) => (
            <div
              key={member.id}
              className="team-profile group relative grid overflow-hidden rounded-[1.5rem] bg-surface-container-low/85 shadow-[0_22px_60px_-42px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-surface-container-high/75 lg:min-h-[390px] lg:grid-cols-[1.2fr_.8fr]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {/* Profile content */}
              <div className={`flex min-h-0 flex-col justify-between p-6 sm:p-7 lg:p-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{member.department}</p>
                      <h2 className="font-headline-sm text-2xl font-bold leading-tight text-white transition-colors group-hover:text-primary sm:text-3xl">
                        {member.name}
                      </h2>
                      <p className="mt-1 text-sm font-semibold text-primary">{member.role}</p>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">Current work</p>
                    <p className="max-w-2xl text-sm leading-6 text-on-surface-variant sm:text-[15px]">{member.bio}</p>
                  </div>

                  <div className="mt-6 grid gap-5 border-t border-outline-variant/20 pt-5 sm:grid-cols-[1fr_auto]">
                    <div>
                      <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">Focus &amp; skills</p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span key={skill} className="text-xs leading-5 text-on-surface-variant">
                            {skill}{skillIndex < member.skills.length - 1 ? <span className="mx-2 text-primary/60">/</span> : null}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="sm:min-w-[120px]">
                      <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">Connect</p>
                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        {Object.entries(member.social).map(([network, url]) => (
                          url ? (
                          <a
                            key={network}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} ${network}`}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-highest text-on-surface-variant transition-colors hover:bg-primary hover:text-on-primary"
                          >
                            <SocialIcon network={network} />
                          </a>
                          ) : null
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-outline-variant/20 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">Solvexa core collective</span>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-transform group-hover:translate-x-1">
                    Connect <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Profile image */}
              <div className={`relative min-h-[260px] overflow-hidden bg-surface-container-lowest sm:min-h-[300px] lg:h-full lg:min-h-0 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-[center_20%] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work Together */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest/40 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[min(80vw,60rem)] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-label-caps text-xs uppercase tracking-[0.2em] text-primary">Our working rhythm</p>
            <h2 className="font-headline-lg text-3xl font-extrabold leading-tight text-on-surface sm:text-4xl lg:text-5xl">
              Great Ideas Become Great Results When We Work as One.
            </h2>
            <p className="mt-5 text-base leading-7 text-on-surface-variant sm:text-lg">
              At Solvexa, strong teams are built on trust, communication, collaboration, and a shared commitment to excellence. Every project brings together different skills and perspectives, and we work closely as one team to turn ideas into meaningful digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {culturePillars.map((pillar) => (
              <article
                key={pillar.step}
                className="group relative overflow-hidden rounded-[1.5rem] bg-surface-container-low/80 p-6 shadow-[0_18px_50px_-38px_rgba(0,0,0,0.95)] transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-high/75 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                    <span className="material-symbols-outlined text-xl">{pillar.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-primary/70">{pillar.step}</span>
                      <span className="h-px w-8 bg-primary/30" />
                    </div>
                    <h3 className="font-headline-sm text-xl font-bold text-on-surface transition-colors group-hover:text-primary">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-on-surface-variant">{pillar.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <p className="mt-8 font-headline-sm text-2xl font-bold text-white sm:text-3xl">One Team. One Vision. One Goal.</p>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant sm:text-base">
              <strong className="font-semibold text-primary">We do not just work together, we grow together, solve together, and succeed together.</strong>
            </p>
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
