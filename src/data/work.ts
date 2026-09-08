export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Website Development" | "Mobile App Development" | "Desktop Applications" | "Game Development" | "Database Management" | "Branding & Logo Design" | "Video & Motion";
  categorySlug: string;
  shortDesc: string;
  heroImage: string;
  galleryImages: string[];
  client: string;
  timeline: string;
  metrics: string;
  metricsLabel: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
  };
}

export const workCategories = [
  "All",
  "Website Development",
  "Mobile App Development",
  "Desktop Applications",
  "Game Development",
  "Database Management",
  "Branding & Logo Design",
  "Video & Motion"
] as const;

export const workData: ProjectItem[] = [
  {
    id: "aetheria-os",
    slug: "aetheria-ai-platform",
    title: "Aetheria OS",
    category: "Website Development",
    categorySlug: "web-development",
    shortDesc: "Sovereign Enterprise AI & Neural Orchestration Platform powering 4,000+ autonomous agent pipelines in zero-trust enclaves.",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    ],
    client: "Aetheria AI Corp (San Francisco, CA)",
    timeline: "8 Weeks",
    metrics: "120K QPS",
    metricsLabel: "Throughput Capacity",
    overview: "Aetheria required an ultra-responsive web control plane capable of visualizing multi-tenant AI pipelines, neural agent clusters, and real-time inference telemetry without browser lag.",
    challenge: "Managing massive real-time WebSocket payloads while maintaining 60 FPS animations and adhering to institutional zero-trust security standards.",
    solution: "Solvexa engineered a bespoke Next.js and WebGL architecture with off-main-thread Web Workers, tokenized design systems, and instant telemetry dashboards.",
    deliverables: [
      "Custom Next.js & React Web Application",
      "Real-Time WebSocket & Telemetry Stream Processing",
      "Interactive 3D Network Topology Visualizer",
      "Comprehensive Enterprise RBAC & Auth Security"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Three.js", "Node.js", "TailwindCSS", "PostgreSQL"],
    testimonial: {
      quote: "Solvexa compressed a multi-quarter rollout into 6 weeks without losing a single ounce of architectural elegance. Our enterprise clients marvel at the responsiveness.",
      author: "Marcus Sterling",
      role: "Managing Director",
      company: "Apex Capital",
      rating: 5
    }
  },
  {
    id: "apex-crm",
    slug: "apex-mobile-crm",
    title: "Apex Horizon CRM",
    category: "Mobile App Development",
    categorySlug: "mobile-app-development",
    shortDesc: "High-performance cross-platform sales CRM app with offline sync and smart automated lead pipelines for 500+ field sales reps.",
    heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=800&q=80"
    ],
    client: "Horizon Global Logistics",
    timeline: "10 Weeks",
    metrics: "+42%",
    metricsLabel: "Rep Productivity Increase",
    overview: "A mobile-first workforce of field sales representatives needed a frictionless app to track deals, log client interactions on the road, and sign contracts without cellular connectivity.",
    challenge: "Handling multi-directional conflict resolution when syncing hundreds of offline contract revisions back to corporate cloud databases.",
    solution: "Developed a native-feel React Native app with local SQLite storage, optimistic UI updates, biometric signing, and automated push notifications.",
    deliverables: [
      "React Native iOS & Android Production App",
      "Offline-First SQLite Caching Architecture",
      "Biometric e-Signature & Camera Document Scanner",
      "Automated WhatsApp & Push Notification Triggers"
    ],
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "SQLite", "Firebase", "Node.js"],
    testimonial: {
      quote: "Our field team adopted the app instantly with zero training required. Deal closing speed jumped by over 40% in our first quarter.",
      author: "Shan Ali",
      role: "Technical Project Manager",
      company: "Horizon Logistics",
      rating: 5
    }
  },
  {
    id: "kroma-defi",
    slug: "kroma-financial-terminal",
    title: "Kroma Global Terminal",
    category: "Website Development",
    categorySlug: "web-development",
    shortDesc: "Institutional high-frequency financial terminal featuring multi-depth order books and algorithmic trade execution.",
    heroImage: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
    ],
    client: "Kroma Capital Partners",
    timeline: "12 Weeks",
    metrics: "$2.4B",
    metricsLabel: "Daily Volume Handled",
    overview: "Kroma needed a Bloomberg-grade browser workstation to execute high-stakes liquidity routing across fragmented decentralized and centralized liquidity pools.",
    challenge: "Sub-millisecond trade updates and canvas-based chart rendering without garbage collection stutters under extreme market volatility.",
    solution: "Engineered a custom Canvas2D charting engine with Rust-compiled WebAssembly data feeds, dark luxury aesthetic, and micro-latency execution.",
    deliverables: [
      "Custom Financial Charting Engine (Canvas & WASM)",
      "Multi-Currency Order Book & Liquidity Heatmap",
      "Sub-Millisecond Order Routing Gateway",
      "Hardware Wallet Security Integration"
    ],
    technologies: ["Next.js", "TypeScript", "WebAssembly", "Rust", "TailwindCSS", "PostgreSQL", "Redis"],
    testimonial: {
      quote: "Solvexa sets the standard for how mission-critical financial applications should look and execute. Absolute perfection.",
      author: "Shahzaib",
      role: "Senior Software Engineer",
      company: "Silicon Valley AI Lab",
      rating: 5
    }
  },
  {
    id: "veloce-3d",
    slug: "veloce-hyperdrive-configurator",
    title: "Veloce 3D Studio",
    category: "Website Development",
    categorySlug: "web-development",
    shortDesc: "Photorealistic real-time 3D WebGL automotive configurator with sub-millimeter custom tailoring for luxury hypercars.",
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"
    ],
    client: "Veloce Automobili",
    timeline: "6 Weeks",
    metrics: "60 FPS",
    metricsLabel: "Smooth Mobile WebGL",
    overview: "An exotic hypercar manufacturer needed an online configurator enabling clients to personalize carbon finishes, cockpit leather stitching, and aero packages in real-time 3D.",
    challenge: "Delivering console-grade photorealism directly inside mobile and desktop web browsers without massive multi-gigabyte downloads.",
    solution: "Solvexa optimized custom GLTF models with Draco compression, PBR material shaders, dynamic environment reflections, and instant PDF spec sheet export.",
    deliverables: [
      "Three.js & WebGL 3D Real-Time Configurator",
      "Interactive Material & Paint Shader Customizer",
      "Draco-Compressed 3D Assets (<12MB total bundle)",
      "High-Resolution Spec Sheet PDF Generator"
    ],
    technologies: ["Three.js", "WebGL", "Next.js", "TypeScript", "GLSL Shaders", "TailwindCSS"],
    testimonial: {
      quote: "Our patrons spend an average of 14 minutes interacting with the 3D configurator. It has transformed our pre-order process completely.",
      author: "Aria Vane",
      role: "Chief Innovation Officer",
      company: "Lumina Studios",
      rating: 5
    }
  },
  {
    id: "pro-manager-desktop",
    slug: "pro-manager-desktop-app",
    title: "ProManager Suite",
    category: "Desktop Applications",
    categorySlug: "desktop-applications",
    shortDesc: "Robust enterprise desktop software for logistics tracking, dispatch telemetry, and fleet simulation built with C# and .NET.",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    ],
    client: "TransLogix Systems",
    timeline: "8 Weeks",
    metrics: "0ms",
    metricsLabel: "Native UI Latency",
    overview: "A national transport and logistics provider needed a dedicated, zero-latency desktop software solution for dispatchers monitoring thousands of active cross-border freight routes.",
    challenge: "Handling continuous GPS streams, offline operation during depot network drops, and multi-display desktop setups with zero crashes.",
    solution: "Crafted a high-performance Windows desktop application using C# and .NET WPF with direct SQL Server replication and background worker threading.",
    deliverables: [
      "C# / .NET High-Performance Desktop Software",
      "Multi-Monitor Dispatch Command Center",
      "Offline Fault-Tolerant Fleet Database Sync",
      "Automated Waybill & Manifest Printing Engine"
    ],
    technologies: ["C#", ".NET Core", "WPF", "SQL Server", "MVVM", "SignalR"],
    testimonial: {
      quote: "Rock-solid reliability. Even during severe storm blackouts, our operators kept dispatching without missing a single beat.",
      author: "Michael",
      role: "Logistics Specialist",
      company: "TransLogix",
      rating: 5
    }
  },
  {
    id: "nova-pulse-game",
    slug: "nova-pulse-interactive-game",
    title: "Nova Pulse Explorer",
    category: "Game Development",
    categorySlug: "game-development",
    shortDesc: "Immersive 3D sci-fi planetary exploration game developed in Unity with spatial audio and procedural terrain generation.",
    heroImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
    ],
    client: "Pulse Interactive Studios",
    timeline: "14 Weeks",
    metrics: "4.8/5",
    metricsLabel: "User Store Rating",
    overview: "An indie interactive studio commissioned Solvexa to develop the core mechanics and procedural rendering pipeline for a retro-futuristic deep space exploration title.",
    challenge: "Generating massive planetary landscapes on mid-tier hardware while maintaining rock-solid 60 FPS physics loops.",
    solution: "Architected custom Unity compute shaders, dynamic mesh LOD (Level of Detail) algorithms, and an atmospheric spatial audio engine.",
    deliverables: [
      "Unity 3D Production Codebase & Player Controller",
      "Procedural Terrain & Celestial Body Generation",
      "Custom Post-Processing & Particle FX Shaders",
      "Interactive Game UI & Spatial Audio Integration"
    ],
    technologies: ["Unity", "C#", "HLSL Shaders", "Blender", "FMOD Audio"],
    testimonial: {
      quote: "The visual fidelity and optimization Solvexa achieved exceeded what we thought was possible within our production timeline.",
      author: "Fatima Shah",
      role: "Game Director & Tech Founder",
      company: "Pulse Interactive",
      rating: 5
    }
  },
  {
    id: "solvcore-db",
    slug: "solvcore-database-system",
    title: "SolvCore Data Engine",
    category: "Database Management",
    categorySlug: "database-management",
    shortDesc: "High-concurrency data management warehouse with automated sharding and distributed query optimization for 100M+ transactions.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80"
    ],
    client: "Centric Retail Enterprise",
    timeline: "7 Weeks",
    metrics: "99.99%",
    metricsLabel: "Database Cluster Uptime",
    overview: "An omni-channel retailer with millions of monthly transactions was experiencing catastrophic bottlenecks during peak holiday sales flash events.",
    challenge: "Refactoring legacy monolithic databases without downtime and migrating 100M+ transaction records safely.",
    solution: "Designed an optimized PostgreSQL & Redis cluster architecture with automated read-replicas, schema partitioning, and continuous zero-downtime backup snapshots.",
    deliverables: [
      "Distributed Database Cluster Architecture",
      "Zero-Downtime Data Migration & ETL Pipeline",
      "Sub-10ms Redis Caching Layer for Hot Queries",
      "Automated Failover & Real-Time Replication Monitoring"
    ],
    technologies: ["PostgreSQL", "MySQL", "Redis", "Docker", "Kubernetes", "Python"],
    testimonial: {
      quote: "Our Black Friday query response times dropped from 4.2 seconds to 18 milliseconds. A transformative upgrade.",
      author: "Abdullah",
      role: "Lead Systems Architect",
      company: "Centric Retail",
      rating: 5
    }
  },
  {
    id: "lumina-branding",
    slug: "lumina-brand-identity",
    title: "Lumina Brand Identity",
    category: "Branding & Logo Design",
    categorySlug: "branding-logo-design",
    shortDesc: "Complete corporate identity system, dynamic 3D logo reveal, and cohesive visual language for a luxury technology brand.",
    heroImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80"
    ],
    client: "Lumina Lifestyle Group",
    timeline: "4 Weeks",
    metrics: "+65%",
    metricsLabel: "Inbound Conversion Lift",
    overview: "A high-end consumer technology venture required an iconic, minimalist brand identity capable of scaling from micro-app icons to architectural building signage.",
    challenge: "Creating a geometric mark that communicated both avant-garde luxury and scientific precision without appearing cold or generic.",
    solution: "Crafted a bespoke golden-ratio vector mark, proprietary color hierarchy, luxury typography styling, and a cinematic 4K motion logo sting.",
    deliverables: [
      "Master Vector Logo System (Primary, Monogram, Wordmark)",
      "120-Page Comprehensive Brand Guidelines Book",
      "3D Cinema 4D Animated Logo Sting & Sound Design",
      "Complete Social Media, Business Card & Packaging Kits"
    ],
    technologies: ["Adobe Illustrator", "After Effects", "Photoshop", "Cinema 4D", "Figma"],
    testimonial: {
      quote: "Solvexa gave our brand an aura of instant prestige and world-class polish. We have received endless praise on our new look.",
      author: "Michael",
      role: "Marketing Director",
      company: "Lumina Lifestyle",
      rating: 5
    }
  }
];
