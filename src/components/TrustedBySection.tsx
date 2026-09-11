const DEFAULT_LOGOS = [
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

export default function TrustedBySection({ logos }: { logos?: { name: string; src: string }[] }) {
  const clientLogos = logos && logos.length > 0 ? logos : DEFAULT_LOGOS;

  const LogoTile = ({ client }: { client: { name: string; src: string } }) => (
    <div
      className="flex items-center justify-center w-32 sm:w-40 md:w-44 h-16 sm:h-20 md:h-24 shrink-0"
      title={client.name}
    >
      <img
        src={client.src}
        alt={client.name}
        className="h-12 sm:h-14 md:h-16 w-auto max-w-full object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.25)] brightness-110 contrast-105 opacity-90 hover:opacity-100 hover:brightness-125 hover:drop-shadow-[0_0_14px_rgba(255,215,0,0.45)] hover:scale-105 transition-all duration-300 cursor-pointer"
        loading="lazy"
        decoding="async"
      />
    </div>
  );

  return (
    <div className="w-full py-5 sm:py-6 border-y border-outline-variant/20 bg-surface-container-lowest/40 backdrop-blur-md overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop mb-3 text-center">
        <span className="text-sm sm:text-base md:text-lg font-mono tracking-widest uppercase text-on-surface-variant/80 font-semibold">
          Brands That Trust Solvexa
        </span>
      </div>

      {/* Seamless marquee — pauses on hover anywhere in the section */}
      <div className="group flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee-seamless group-hover:[animation-play-state:paused]">
          {/* Original set */}
          {clientLogos.map((client, index) => (
            <LogoTile key={`tr-a-${index}`} client={client} />
          ))}
          {/* Duplicate set for seamless loop */}
          {clientLogos.map((client, index) => (
            <LogoTile key={`tr-b-${index}`} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
}
