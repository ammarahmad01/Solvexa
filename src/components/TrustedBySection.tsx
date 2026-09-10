import TechLogo from "./TechLogos";

export default function TrustedBySection() {
  const enterpriseLogos = [
    "Google",
    "Microsoft",
    "Meta",
    "Instagram",
    "OpenAI",
    "Antigravity",
    "AWS",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Node.js",
    "Docker",
    "PostgreSQL",
    "Figma",
    "Three.js"
  ];

  const clientLogos = [
    { name: "Alkhidmat Foundation", src: "/assets/Client Logo/ALKHIDMAT-Logo.png" },
  ];

  return (
    <div className="w-full py-4 sm:py-5 border-y border-outline-variant/20 bg-surface-container-lowest/40 backdrop-blur-md overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop mb-3 text-center">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-on-surface-variant/60 font-semibold">
          Trusted By &amp; Powered With Leading Enterprise Technologies
        </span>
      </div>

      {/* Infinite Seamless Continuous Marquee Loop without Empty Gaps */}
      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Track 1 */}
        <div className="flex shrink-0 gap-10 sm:gap-14 items-center animate-marquee-seamless pr-10 sm:pr-14 py-1.5">
          {/* Client Logos */}
          {clientLogos.map((client, index) => (
            <div
              key={`cl1-${index}`}
              className="flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
              title={client.name}
            >
              <img
                src={client.src}
                alt={client.name}
                className="h-8 sm:h-9 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
          {/* Tech Logos */}
          {enterpriseLogos.map((tech, index) => (
            <div
              key={`t1-${index}`}
              className="flex items-center justify-center opacity-75 hover:opacity-100 hover:scale-115 transition-all duration-300 cursor-pointer"
              title={tech}
            >
              <TechLogo name={tech} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
            </div>
          ))}
        </div>

        {/* Track 2 (Seamless clone to eliminate any empty trailing gap) */}
        <div className="flex shrink-0 gap-10 sm:gap-14 items-center animate-marquee-seamless pr-10 sm:pr-14 py-1.5" aria-hidden="true">
          {/* Client Logos */}
          {clientLogos.map((client, index) => (
            <div
              key={`cl2-${index}`}
              className="flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
              title={client.name}
            >
              <img
                src={client.src}
                alt={client.name}
                className="h-8 sm:h-9 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
          {/* Tech Logos */}
          {enterpriseLogos.map((tech, index) => (
            <div
              key={`t2-${index}`}
              className="flex items-center justify-center opacity-75 hover:opacity-100 hover:scale-115 transition-all duration-300 cursor-pointer"
              title={tech}
            >
              <TechLogo name={tech} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
