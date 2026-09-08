import Link from "next/link";
import StatsCounter from "../../components/StatsCounter";
import ContactCtaSection from "../../components/ContactCtaSection";
import ClientLoveSection from "../../components/ClientLoveSection";
import { teamData } from "../../data/team";

export const metadata = {
  title: "About Us | Solvexa - Where Creativity Meets Innovation",
  description: "Learn about Solvexa: our story, our client-first philosophy, our core values, and our engineering leadership.",
};

export default function AboutPage() {
  const leadershipTeaser = teamData.slice(0, 3);

  const values = [
    {
      icon: "lightbulb",
      title: "Radical Innovation",
      desc: "We don't settle for conventional templates. We push technical boundaries with 3D WebGL, modern Next.js architecture, and AI-driven workflows."
    },
    {
      icon: "verified_user",
      title: "Uncompromising Integrity",
      desc: "Honest scoping, transparent sprint updates, zero hidden fees, and complete intellectual property ownership handed to you on day one."
    },
    {
      icon: "rocket_launch",
      title: "Client-First Delivery",
      desc: "Your business metrics are our benchmark. We align software architecture with revenue growth, retention, and speed-to-market."
    }
  ];

  const whyChooseUs = [
    {
      title: "Full-Spectrum In-House Capability",
      desc: "From custom full-stack web platforms and native mobile apps to brand identity and PPC marketing, we operate under one synchronized roof."
    },
    {
      title: "Zero-Overhead Staffing Flexibility",
      desc: "Scale up a dedicated engineering pod in days instead of spending months recruiting and onboarding full-time personnel."
    },
    {
      title: "Obsession With Performance",
      desc: "Sub-second load times, 60 FPS mobile transitions, and Core Web Vitals optimization built directly into every line of code."
    },
    {
      title: "Transparent, Agile Sprints",
      desc: "Direct access to your architects and developers via Slack, Jira, and weekly interactive demo calls."
    }
  ];

  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative w-full pt-12 pb-16 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-caps text-xs tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Our Philosophy &amp; Vision
          </div>
          <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            About Solvexa —{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              Where Creativity Meets Innovation
            </span>
          </h1>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-5 max-w-2xl leading-relaxed">
            We are an ambitious digital engineering and brand agency built to help ambitious founders and enterprises outpace their competition online.
          </p>
        </div>
      </section>

      {/* Section 1 — Our Story with Rich Studio Visuals */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Our Origin</span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface leading-tight">
              Born From a Passion for Digital Mastery &amp; Engineering Precision
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-on-surface-variant leading-relaxed">
              <p>
                Solvexa began with a distinct conviction: modern businesses shouldn&apos;t have to compromise between high-level engineering logic and world-class artistic aesthetics. Too often, software companies build clunky interfaces that users struggle with, while design agencies create beautiful concepts that crumble under production scale.
              </p>
              <p>
                Based in Rawalpindi, Pakistan, Solvexa bridges this divide. Our multidisciplinary collective of software engineers, mobile developers, UI/UX designers, and growth marketers work in lockstep to build sovereign digital systems that scale effortlessly and leave lasting impressions.
              </p>
              <p>
                Whether partnering with pre-seed startups to engineer their pilot MVP or augmenting enterprise engineering squads to accelerate product roadmaps, our commitment remains constant: relentless execution, complete transparency, and measurable business growth.
              </p>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-primary/40 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Solvexa Engineering Team"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-surface-container-low/90 backdrop-blur-xl border border-primary/30">
                <p className="font-bold text-sm text-on-surface">Global Delivery Standards</p>
                <p className="text-xs text-on-surface-variant mt-0.5">Operating from Rawalpindi, Pakistan to clients worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Guiding Principles & Core Values */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl bg-surface-container-lowest/40 border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Guiding Principles</span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface mt-1">
              What Drives Solvexa
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant mt-2">
              Our culture is rooted in craftsmanship, speed, and genuine client care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-surface-container-low/70 border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col gap-4 shadow-lg group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-md">
                  <span className="material-symbols-outlined text-3xl">{v.icon}</span>
                </div>
                <h3 className="font-headline-sm text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  {v.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Why Choose Us */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">Our Differentiator</span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface mt-1">
                Why Work With Solvexa?
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-label-md text-sm font-bold text-primary hover:underline"
            >
              <span>Schedule a Discovery Call →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseUs.map((w, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-surface-container-low/80 border border-outline-variant/30 hover:border-primary/40 transition-colors flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1 font-bold text-sm">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-title-lg text-lg font-bold text-on-surface">{w.title}</h3>
                  <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Stats Counter */}
      <StatsCounter />

      {/* Section 5 — Meet the Team Teaser */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl bg-surface-container-lowest/50 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">Leadership</span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface mt-1">
                Meet the Leadership
              </h2>
              <p className="text-sm text-on-surface-variant mt-1">
                The minds driving Solvexa&apos;s technological and creative standards.
              </p>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 font-label-md text-sm font-bold text-primary hover:underline"
            >
              <span>Meet the Full Team →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipTeaser.map((member) => (
              <div
                key={member.id}
                className="p-8 rounded-3xl bg-surface-container-low/80 border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col items-center text-center shadow-lg group hover:-translate-y-1"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-2xl object-cover border-2 border-primary/40 group-hover:border-primary transition-colors shadow-md mb-4"
                />
                <h3 className="font-headline-sm text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-primary mt-1 font-semibold">{member.role}</p>
                <p className="text-xs text-on-surface-variant mt-3 line-clamp-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <ClientLoveSection />

      {/* Section 6 — CTA Band */}
      <ContactCtaSection />
    </div>
  );
}
