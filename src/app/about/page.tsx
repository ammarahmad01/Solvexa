import React from "react";
import Link from "next/link";
import TechLogo from "../../components/TechLogos";
import ClientLoveSection from "../../components/ClientLoveSection";
import ContactCtaSection from "../../components/ContactCtaSection";
import About3DImageCard from "../../components/About3DImageCard";

export const metadata = {
  title: "About Us | Solvexa — Where Creativity Meets Innovation",
  description: "Learn about Solvexa: our story, our capabilities, our core values, our 7-step process, our beloved clients, and our technology ecosystem.",
};

const WHAT_WE_DO = [
  {
    title: "Web Development",
    desc: "Modern, responsive, high-performance websites and web applications designed to represent your brand and deliver exceptional user experiences.",
    icon: "language",
    accent: "from-cyan-500/20 to-blue-600/20 text-cyan-400 border-cyan-500/30",
  },
  {
    title: "Mobile App Development",
    desc: "Powerful and intuitive mobile applications that help businesses connect with their customers and deliver services anywhere, anytime.",
    icon: "smartphone",
    accent: "from-emerald-500/20 to-teal-600/20 text-emerald-400 border-emerald-500/30",
  },
  {
    title: "Custom Software",
    desc: "Business-specific software solutions designed to automate processes, improve productivity, and solve unique operational challenges.",
    icon: "terminal",
    accent: "from-amber-500/20 to-yellow-600/20 text-amber-400 border-amber-500/30",
  },
  {
    title: "AI & Machine Learning",
    desc: "Intelligent solutions using AI and machine learning to automate tasks, analyze data, improve decision-making, and create smarter digital experiences.",
    icon: "neurology",
    accent: "from-purple-500/20 to-violet-600/20 text-purple-400 border-purple-500/30",
  },
  {
    title: "UI/UX & Digital Experiences",
    desc: "Clean, intuitive, and user-focused interfaces that make technology easier, more enjoyable, and more effective to use.",
    icon: "palette",
    accent: "from-rose-500/20 to-pink-600/20 text-rose-400 border-rose-500/30",
  },
  {
    title: "Digital Transformation",
    desc: "Helping businesses move from traditional processes to modern digital systems that are scalable, connected, and ready for the future.",
    icon: "transform",
    accent: "from-blue-500/20 to-indigo-600/20 text-blue-400 border-blue-500/30",
  },
];

const CORE_VALUES = [
  {
    title: "Innovation",
    desc: "We continuously explore new technologies and smarter ways to solve problems.",
    icon: "auto_awesome",
    color: "text-amber-400 bg-amber-500/15 border-amber-500/30",
  },
  {
    title: "Quality",
    desc: "We care about the details and strive to deliver reliable, scalable, and high-quality solutions.",
    icon: "verified",
    color: "text-primary bg-primary/15 border-primary/30",
  },
  {
    title: "Collaboration",
    desc: "The best results come from working together. We collaborate closely with our clients and within our team.",
    icon: "groups",
    color: "text-cyan-400 bg-cyan-500/15 border-cyan-500/30",
  },
  {
    title: "Integrity",
    desc: "We believe in honest communication, transparency, and building relationships based on trust.",
    icon: "shield",
    color: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
  },
  {
    title: "Customer First",
    desc: "Your goals matter to us. We build solutions around your business needs, users, and objectives.",
    icon: "favorite",
    color: "text-rose-400 bg-rose-500/15 border-rose-500/30",
  },
  {
    title: "Continuous Growth",
    desc: "Technology never stops evolving—and neither do we. We learn, improve, and adapt continuously.",
    icon: "trending_up",
    color: "text-purple-400 bg-purple-500/15 border-purple-500/30",
  },
];

const WORK_STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "We understand your business, goals, audience, requirements, and challenges.",
    icon: "search",
  },
  {
    step: "02",
    title: "Plan",
    desc: "We define the project scope, technology, roadmap, priorities, and execution strategy.",
    icon: "map",
  },
  {
    step: "03",
    title: "Design",
    desc: "We create intuitive experiences and practical interfaces designed around your users.",
    icon: "draw",
  },
  {
    step: "04",
    title: "Build",
    desc: "Our team develops the solution using modern technologies and industry best practices.",
    icon: "code",
  },
  {
    step: "05",
    title: "Test",
    desc: "We thoroughly test functionality, performance, usability, security, and compatibility.",
    icon: "rule",
  },
  {
    step: "06",
    title: "Launch",
    desc: "Once everything is ready, we deploy your product and help bring your idea to life.",
    icon: "rocket_launch",
  },
  {
    step: "07",
    title: "Improve",
    desc: "Our relationship doesn't have to end at launch. We continue improving, maintaining, and scaling your solution as your business grows.",
    icon: "published_with_changes",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "One Team, Multiple Solutions",
    desc: "Get web, mobile, software, AI, and digital solutions from one dedicated technology partner.",
    icon: "hub",
  },
  {
    title: "Solutions Built for You",
    desc: "We develop around your specific requirements instead of forcing your business into a standard template.",
    icon: "tune",
  },
  {
    title: "Modern Technology",
    desc: "We use modern frameworks, tools, and development practices to build scalable digital products.",
    icon: "devices",
  },
  {
    title: "Transparent Collaboration",
    desc: "You stay informed throughout the development journey with clear communication and regular updates.",
    icon: "visibility",
  },
  {
    title: "Focus on Results",
    desc: "Our goal isn't simply to deliver a project. We want to create something that genuinely helps your business grow.",
    icon: "ads_click",
  },
];

const CLIENT_PARTNER_LOGOS = [
  "Google", "Microsoft", "Meta", "Instagram", "OpenAI", "AWS",
  "Next.js", "React", "TypeScript", "Node.js", "Python", "Flutter",
  "Tailwind", "Docker", "PostgreSQL", "MongoDB", "Figma", "FastAPI"
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden min-h-screen">
      {/* Ambient Lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[34rem] w-[min(95vw,75rem)] rounded-full bg-gradient-to-b from-primary/15 via-secondary/10 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute top-[25%] -left-48 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-[55%] -right-48 h-96 w-96 rounded-full bg-secondary/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-[80%] -left-48 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />

      {/* HERO SECTION — Preserving Original Text */}
      <section className="relative w-full pt-16 sm:pt-20 pb-14 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            About Solvexa —{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              Where Creativity Meets Innovation
            </span>
          </h1>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-5 max-w-2xl leading-relaxed text-center">
            We are an ambitious digital engineering and brand agency built to help ambitious founders and enterprises outpace their competition online.
          </p>
        </div>
      </section>

      {/* SECTION: ABOUT SOLVEXA */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl border-t border-outline-variant/15">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-2">
              <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                About Solvexa
              </h2>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent leading-snug">
                Building Digital Solutions That Move Businesses Forward
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm sm:text-base text-on-surface-variant leading-relaxed">
              <p>
                Solvexa is a technology and digital solutions company focused on helping businesses turn ideas into powerful, scalable, and meaningful digital products.
              </p>
              <p>
                From websites and mobile applications to custom software and AI-powered solutions, we combine technology, creativity, and strategic thinking to solve real business challenges and create better digital experiences.
              </p>
            </div>
            
            {/* Standout Creed Box */}
            <div className="p-6 rounded-2xl bg-surface-container-high/80 border border-primary/40 backdrop-blur-xl shadow-lg shadow-primary/10 mt-1">
              <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                &ldquo;We don&apos;t just build software — we build solutions designed around your goals, your users, and your future.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Image with 3D Animation */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <About3DImageCard
              src="/assets/About/About Us.png"
              alt="About Solvexa Studio"
            />
          </div>
        </div>
      </section>

      {/* SECTION: WHO WE ARE */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl border-t border-outline-variant/15 bg-surface-container-lowest/40">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Image with 3D Animation */}
          <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
            <About3DImageCard
              src="/assets/About/Who we are.png"
              alt="Who We Are - Team Collaboration"
            />
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left order-1 lg:order-2">
            <div className="flex flex-col gap-2">
              <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Who We Are
              </h2>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent leading-snug">
                Technology Built Around Your Vision
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm sm:text-base text-on-surface-variant leading-relaxed">
              <p>
                We are a team of developers, designers, problem-solvers, and technology enthusiasts who believe that great products are created through collaboration and continuous innovation.
              </p>
              <p>
                Every business is different, which is why we don&apos;t believe in one-size-fits-all solutions. We take the time to understand your requirements, identify opportunities, and create technology that fits the way your business actually works.
              </p>
              <p className="text-white font-medium">
                Whether you&apos;re starting a new idea, improving an existing product, or looking to digitally transform your business, Solvexa is here to help you move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT WE DO */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl border-t border-outline-variant/15">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              What We Do
            </h2>
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent mt-2.5 leading-snug">
              From Ideas to Complete Digital Solutions
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant mt-3 max-w-xl leading-relaxed">
              We design and engineer digital systems across six foundational competencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_DO.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg group flex flex-col justify-start text-left"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.accent} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0`}>
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-title-lg text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: OUR MISSION */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl border-t border-outline-variant/15 bg-surface-container-lowest/40">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-2">
              <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Our Mission
              </h2>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent leading-snug">
                Turning Technology Into Real-World Impact
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm sm:text-base text-on-surface-variant leading-relaxed">
              <p>
                Our mission is to make technology more useful, accessible, and impactful for businesses.
              </p>
              <p>
                We aim to create digital solutions that don&apos;t simply look good—they solve problems, improve efficiency, create opportunities, and deliver measurable value.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-surface-container-high/60 border border-primary/25">
                <p className="text-xs font-mono text-primary font-bold uppercase tracking-wider">Measurable Value</p>
                <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">Driving tangible growth, conversion, and operational speed.</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface-container-high/60 border border-primary/25">
                <p className="text-xs font-mono text-primary font-bold uppercase tracking-wider">Purpose-Driven</p>
                <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">Software built with business utility at its absolute core.</p>
              </div>
            </div>
          </div>

          {/* Right Image with 3D Animation */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <About3DImageCard
              src="/assets/About/Our mission.jpeg"
              alt="Our Mission - Practical Engineering"
            />
          </div>
        </div>
      </section>

      {/* SECTION: OUR VISION */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl border-t border-outline-variant/15">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Image with 3D Animation */}
          <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
            <About3DImageCard
              src="/assets/About/Our vision.jpeg"
              alt="Our Vision - Digital Future"
            />
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left order-1 lg:order-2">
            <div className="flex flex-col gap-2">
              <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Our Vision
              </h2>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-secondary via-amber-300 to-primary bg-clip-text text-transparent leading-snug">
                Shaping a Smarter Digital Future
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm sm:text-base text-on-surface-variant leading-relaxed">
              <p>
                We envision a future where businesses of every size can use modern technology to compete, innovate, and grow.
              </p>
              <p>
                Solvexa aims to become a trusted technology partner for businesses looking to embrace software, AI, automation, and digital innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-surface-container-high/60 border border-secondary/25">
                <p className="text-xs font-mono text-secondary font-bold uppercase tracking-wider">Modern Tech for All</p>
                <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">Empowering startups to global enterprises to compete seamlessly.</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface-container-high/60 border border-secondary/25">
                <p className="text-xs font-mono text-secondary font-bold uppercase tracking-wider">Trusted Partnership</p>
                <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">Long-term strategic guidance across AI, cloud, and modern apps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR CORE VALUES */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl border-t border-outline-variant/15 bg-surface-container-lowest/40">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our Core Values
            </h2>
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent mt-2.5 leading-snug">
              What Drives Us
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant mt-3 max-w-xl leading-relaxed">
              The foundational principles guiding our culture, code, and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg group text-left flex flex-col justify-start"
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 ${val.color} group-hover:scale-110 transition-transform shrink-0`}>
                  <span className="material-symbols-outlined text-2xl">{val.icon}</span>
                </div>
                <h3 className="font-title-lg text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-3 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: HOW WE WORK */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl border-t border-outline-variant/15">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              How We Work
            </h2>
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent mt-2.5 leading-snug">
              From First Conversation to Final Product
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant mt-3 max-w-xl leading-relaxed">
              Our 7-step systematic workflow ensures technical precision and predictable delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_STEPS.map((step, idx) => (
              <div
                key={idx}
                className={`p-7 rounded-3xl bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-lg group text-left min-h-[220px] ${
                  idx === 6 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/15 border border-primary/30">
                      {step.step}
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant/70 group-hover:text-primary transition-colors">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="font-title-lg text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-2.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: WHY CHOOSE SOLVEXA? */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl border-t border-outline-variant/15 bg-surface-container-lowest/40">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Why Choose Solvexa?
            </h2>
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent mt-2.5 leading-snug">
              More Than a Technology Provider
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant mt-3 max-w-xl leading-relaxed">
              We partner as an invested technology department committed to your long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 shadow-lg group flex flex-col justify-start text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-title-lg text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* In-House Standard Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/20 via-surface-container-high/80 to-surface-container-low/90 border border-primary/40 shadow-xl flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                  The Solvexa Guarantee
                </span>
                <h3 className="font-title-lg text-lg sm:text-xl font-bold text-white mt-2">
                  Engineered for Growth &amp; Freedom
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-3 leading-relaxed">
                  Clean architectures, sovereign codebases, and zero vendor lock-in. You own 100% of the code, designs, and repositories we build.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold font-mono text-primary hover:text-white transition-colors"
              >
                <span>Work with Us</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR APPROACH */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl border-t border-outline-variant/15">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our Approach
            </h2>
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent mt-2.5 leading-snug">
              Think. Build. Improve.
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant mt-3 max-w-xl leading-relaxed">
              At Solvexa, every project starts with a problem worth solving.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Think */}
            <div className="p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all shadow-xl group text-left">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
                <span className="material-symbols-outlined text-2xl">psychology</span>
              </div>
              <h3 className="font-headline-sm text-2xl font-bold text-white">
                01. Think
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-3 leading-relaxed">
                We think deeply about the challenge, analyzing business goals, user bottlenecks, and architectural opportunities before writing a single line of code.
              </p>
            </div>

            {/* Build */}
            <div className="p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-xl border border-primary/40 hover:border-primary/70 transition-all shadow-xl group text-left">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
                <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
              </div>
              <h3 className="font-headline-sm text-2xl font-bold text-white">
                02. Build
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-3 leading-relaxed">
                We build the right technology around the problem using modern frameworks, rigorous testing, and scalable cloud architectures.
              </p>
            </div>

            {/* Improve */}
            <div className="p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-xl border border-emerald-500/30 hover:border-emerald-500/60 transition-all shadow-xl group text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
                <span className="material-symbols-outlined text-2xl">upgrade</span>
              </div>
              <h3 className="font-headline-sm text-2xl font-bold text-white">
                03. Improve
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-3 leading-relaxed">
                We continuously improve the solution based on real feedback, analytics, and changing business needs to keep you ahead.
              </p>
            </div>
          </div>

          <p className="text-center text-sm sm:text-base text-on-surface-variant/90 max-w-2xl mx-auto mt-10 leading-relaxed font-medium">
            This approach allows us to create products that are not only ready for today but prepared for tomorrow.
          </p>
        </div>
      </section>

      {/* SECTION: OUR BELOVED CLIENTS */}
      <section className="relative w-full border-t border-outline-variant/15 bg-surface-container-lowest/40">
        <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pt-16 text-center flex flex-col items-center">
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Beloved Clients
          </h2>
          <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent mt-2.5 leading-snug">
            What Our Clients Say About Working with Solvexa
          </p>
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 max-w-2xl mx-auto leading-relaxed">
            Real feedback from founders, product directors, and technical teams who have partnered with us.
          </p>
        </div>
        <ClientLoveSection />
      </section>

      {/* SECTION: CLIENTS & TECHNOLOGY STACK */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl border-t border-outline-variant/15">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Technology Stack &amp; Partners
            </h2>
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent mt-2.5 leading-snug">
              The Technologies &amp; Standards Powering Our Work
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant mt-3 max-w-xl leading-relaxed">
              We engineer enterprise-grade solutions using modern industry-standard technologies and cloud infrastructure.
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {CLIENT_PARTNER_LOGOS.map((tech, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-surface-container-low/85 border border-outline-variant/20 hover:border-primary/40 flex flex-col items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105 group shadow-sm"
              >
                <TechLogo name={tech} className="w-8 h-8 object-contain transition-transform group-hover:scale-115" />
                <span className="text-xs font-mono text-on-surface-variant group-hover:text-white transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          {/* Trust Stat Highlights */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 border border-outline-variant/30 flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
            <div>
              <p className="font-headline-sm text-3xl font-extrabold text-primary">100+</p>
              <p className="text-xs font-mono uppercase tracking-wider text-on-surface-variant mt-1">Delivered Products</p>
            </div>
            <div className="h-10 w-px bg-outline-variant/30 hidden sm:block" />
            <div>
              <p className="font-headline-sm text-3xl font-extrabold text-emerald-400">99.4%</p>
              <p className="text-xs font-mono uppercase tracking-wider text-on-surface-variant mt-1">Client Satisfaction</p>
            </div>
            <div className="h-10 w-px bg-outline-variant/30 hidden sm:block" />
            <div>
              <p className="font-headline-sm text-3xl font-extrabold text-cyan-400">24/7</p>
              <p className="text-xs font-mono uppercase tracking-wider text-on-surface-variant mt-1">Global Remote Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: READY TO DISCUSS YOUR PROJECT */}
      <section className="relative w-full border-t border-outline-variant/15">
        <ContactCtaSection />
      </section>
    </div>
  );
}
