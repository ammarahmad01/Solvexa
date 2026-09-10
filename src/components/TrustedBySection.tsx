export default function TrustedBySection() {
  const clientLogos = [
    { name: "Alkhidmat Foundation", src: "/assets/Client Logo/ALKHIDMAT-Logo.png" },
    { name: "Crowd Cam", src: "/assets/Client Logo/Crowd Cam.png" },
    { name: "Draftly", src: "/assets/Client Logo/draftly LOGO.png" },
    { name: "KisaanRahbar", src: "/assets/Client Logo/KisaanRahbar.png" },
    { name: "Meal Mates", src: "/assets/Client Logo/MealMates Logo.png" },
    { name: "Nimbus", src: "/assets/Client Logo/Nimbus.png" },
    { name: "Noor Educational System", src: "/assets/Client Logo/Noor.png" },  
    { name: "Perfume Palace", src: "/assets/Client Logo/PerfumePalace.jpeg" },
    { name: "PlantGuard", src: "/assets/Client Logo/PlantGurad.png" },
    { name: "Punjab Silk House", src: "/assets/Client Logo/PSH2.png" },
    { name: "Tayyab Autos", src: "/assets/Client Logo/TayyabAutos.png" },
  ];

  return (
    <div className="w-full py-4 sm:py-5 border-y border-outline-variant/20 bg-surface-container-lowest/40 backdrop-blur-md overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop mb-3 text-center">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-on-surface-variant/60 font-semibold">
          Brands That Trust Solvexa
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
        </div>
      </div>
    </div>
  );
}
