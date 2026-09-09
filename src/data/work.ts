export interface ProjectItem {
  id: string;
  slug: string;
  brandName: string;
  brandSeparator: string;
  title: string;
  brandLogoType: "custom-name-domain" | "luca" | "aetheria" | "apex" | "vaultpay" | "healthpulse" | "quantedge" | "omnicart" | "novapulse" | "cloudforge" | "edusphere" | "urbanride" | "solvcore" | "lumina" | "soundwave";
  deviceType: "web" | "mobile" | "both";
  accentColor: string;
  themeGlow: string;
  buttonGradient: string;
  shortDesc: string;
  description: string;
  heroImage: string;
  mobileImage?: string;
  technologies: string[];
  liveUrl: string;
  client: string;
  timeline: string;
  metrics: string;
  metricsLabel: string;
  category: string;
  categorySlug: string;
  galleryImages: string[];
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
  };
}

export const workData: ProjectItem[] = [
  {
    id: "custom-name-domain",
    slug: "custom-name-domain",
    brandName: "Custom Name Domain",
    brandSeparator: "–",
    title: "A Smarter Way to Build a Professional Digital Identity",
    brandLogoType: "custom-name-domain",
    deviceType: "web",
    accentColor: "#0284c7",
    themeGlow: "rgba(2, 132, 199, 0.25)",
    buttonGradient: "from-sky-500 to-blue-600",
    shortDesc: "All-in-one domain search, DNS verification, and branded webmail infrastructure platform.",
    description: "Custom Name Domain is a SaaS platform developed by Solvexa that simplifies domain registration and professional email management. Users can search for domains, create branded email accounts, manage subscriptions, and access webmail from a single dashboard. The platform integrates Stripe for secure billing, Roundcube for webmail, and real-time DNS verification for a seamless experience. Built with the MERN stack, it provides a scalable, user-friendly solution for building a professional digital identity.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "Roundcube", "DNS Automation"],
    liveUrl: "https://customnamedomain.com",
    client: "Custom Name Domain LLC",
    timeline: "6 Weeks",
    metrics: "45K+",
    metricsLabel: "Domains Registered",
    category: "Website Development",
    categorySlug: "web-development",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Custom Name Domain needed an integrated SaaS product allowing non-technical professionals to register domains, configure MX and SPF records, and access webmail from a unified dashboard.",
    challenge: "Automating real-time DNS zone record generation across global nameservers while coordinating subscription billing states with active mailbox access.",
    solution: "Solvexa engineered an event-driven Node.js backend with automated DNS propagation checks, seamless Stripe webhook handling, and a custom responsive React client portal.",
    deliverables: [
      "Domain Search & WHOIS Availability Engine",
      "Automated DNS Zone & MX Record Provisioning",
      "Custom Webmail Integration via Roundcube API",
      "Stripe Customer Billing & Subscription Dashboard"
    ],
    testimonial: {
      quote: "Solvexa transformed an intimidating DNS process into a smooth 2-minute user experience. Our customer churn dropped dramatically.",
      author: "David Vance",
      role: "Founder & CEO",
      company: "Custom Name Domain",
      rating: 5
    }
  },
  {
    id: "luca-ai",
    slug: "luca-ai-literacy",
    brandName: "LUCA.ai:",
    brandSeparator: "",
    title: "An AI-Powered Literacy & Learning Platform",
    brandLogoType: "luca",
    deviceType: "both",
    accentColor: "#a855f7",
    themeGlow: "rgba(168, 85, 247, 0.25)",
    buttonGradient: "from-purple-500 to-indigo-600",
    shortDesc: "AI phoneme recognition and adaptive literacy platform empowering students and educators.",
    description: "LUCA.ai is an AI-powered literacy and learning platform designed to simplify educational technology through engaging storytelling and intuitive user experiences. Built with Webflow, responsive design, and a scalable CMS architecture, LUCA.ai empowers educators, schools, parents, and institutions with an accessible, high-performing digital platform that makes AI-driven literacy solutions easy to understand and explore.",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    mobileImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    technologies: ["Webflow", "Next.js", "React", "TypeScript", "AI Speech API", "OpenAI", "TailwindCSS"],
    liveUrl: "https://luca.ai",
    client: "LUCALabs Education",
    timeline: "7 Weeks",
    metrics: "120K+",
    metricsLabel: "Active Young Readers",
    category: "Website Development",
    categorySlug: "web-development",
    galleryImages: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "LUCA.ai required a high-converting, vibrant digital platform that communicated the scientific breakthroughs of their phoneme-level AI reading engine to school districts and parents.",
    challenge: "Presenting complex neural speech analysis and reading research in an approachable, engaging, and accessible interface suitable for schools and families.",
    solution: "Solvexa designed and developed an interactive visual storytelling platform with interactive audio demonstrations, educator trial workflows, and streamlined CMS publishing.",
    deliverables: [
      "Interactive Product Showcase & Audio Demo",
      "Educator Pilot Program Onboarding Funnel",
      "Scalable CMS for Research Papers & Case Studies",
      "Responsive Cross-Device Web Architecture"
    ],
    testimonial: {
      quote: "Solvexa nailed our voice and mission instantly. The digital experience communicates the science behind LUCA with warmth and crystal-clear clarity.",
      author: "Elena Rostova",
      role: "VP of Product",
      company: "LUCALabs",
      rating: 5
    }
  },
  {
    id: "aetheria-os",
    slug: "aetheria-ai-platform",
    brandName: "Aetheria OS",
    brandSeparator: "–",
    title: "Autonomous Enterprise AI & Neural Agent Orchestration",
    brandLogoType: "aetheria",
    deviceType: "web",
    accentColor: "#06b6d4",
    themeGlow: "rgba(6, 182, 212, 0.25)",
    buttonGradient: "from-cyan-500 to-blue-600",
    shortDesc: "Sovereign enterprise AI control plane managing multi-tenant autonomous agent clusters.",
    description: "Aetheria OS is an enterprise AI orchestration platform engineered by Solvexa to visualize, monitor, and deploy autonomous agent swarms in zero-trust environments. Teams can construct multi-modal workflows, inspect real-time token telemetry, and manage automated reasoning guardrails from a high-frequency interface. The platform integrates Pinecone vector storage, Anthropic and OpenAI model pipelines, and sub-millisecond WebSocket streaming for enterprise operations.",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "Pinecone", "WebSockets", "Docker"],
    liveUrl: "https://aetheria-os.io",
    client: "Aetheria AI Corp",
    timeline: "8 Weeks",
    metrics: "120K QPS",
    metricsLabel: "Throughput Capacity",
    category: "Website Development",
    categorySlug: "web-development",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Aetheria required an ultra-responsive web control plane capable of visualizing multi-tenant AI pipelines and neural agent telemetry without browser lag.",
    challenge: "Managing massive real-time WebSocket payloads while maintaining 60 FPS animations and adhering to institutional zero-trust security standards.",
    solution: "Solvexa engineered a bespoke Next.js and WebGL architecture with off-main-thread Web Workers and instant telemetry dashboards.",
    deliverables: [
      "Custom Next.js Web Control Plane",
      "Real-Time WebSocket & Telemetry Stream Processing",
      "Interactive 3D Network Topology Visualizer",
      "Enterprise RBAC & Auth Security"
    ],
    testimonial: {
      quote: "Solvexa compressed a multi-quarter rollout into 6 weeks without losing architectural elegance. Our enterprise clients marvel at the responsiveness.",
      author: "Marcus Sterling",
      role: "Managing Director",
      company: "Apex Capital",
      rating: 5
    }
  },
  {
    id: "apex-crm",
    slug: "apex-mobile-crm",
    brandName: "Apex Horizon",
    brandSeparator: "–",
    title: "High-Performance Offline-First Field Sales Ecosystem",
    brandLogoType: "apex",
    deviceType: "mobile",
    accentColor: "#f59e0b",
    themeGlow: "rgba(245, 158, 11, 0.25)",
    buttonGradient: "from-amber-500 to-orange-600",
    shortDesc: "Offline-first sales enablement mobile app and dispatcher console for field sales reps.",
    description: "Apex Horizon CRM is a cross-platform mobile and desktop sales enablement suite created for mobile workforces and enterprise logistics teams. Field representatives can generate contracts, log client meetings, and track real-time pipeline status without cellular connectivity. The system integrates SQLite offline storage, biometric document verification, automated WhatsApp dispatch triggers, and bi-directional cloud conflict resolution.",
    heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    mobileImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
    technologies: ["React Native", "TypeScript", "SQLite", "Node.js", "Firebase", "AWS"],
    liveUrl: "https://apexhorizon.cloud",
    client: "Horizon Global Logistics",
    timeline: "10 Weeks",
    metrics: "+42%",
    metricsLabel: "Rep Productivity Increase",
    category: "Mobile App Development",
    categorySlug: "mobile-app-development",
    galleryImages: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "A mobile workforce of field sales representatives needed a frictionless app to track deals, log client interactions on the road, and sign contracts without cellular connectivity.",
    challenge: "Handling multi-directional conflict resolution when syncing hundreds of offline contract revisions back to corporate cloud databases.",
    solution: "Developed a native-feel React Native app with local SQLite storage, optimistic UI updates, biometric signing, and automated push notifications.",
    deliverables: [
      "React Native iOS & Android Production App",
      "Offline-First SQLite Caching Architecture",
      "Biometric e-Signature & Camera Scanner",
      "Automated WhatsApp & Push Notification Triggers"
    ],
    testimonial: {
      quote: "Our field agents close deals in remote warehouses where other apps freeze. Solvexa gave us a competitive weapon.",
      author: "Jessica Lin",
      role: "VP of Sales Operations",
      company: "Horizon Global",
      rating: 5
    }
  },
  {
    id: "vaultpay-global",
    slug: "vaultpay-fintech-gateway",
    brandName: "VaultPay",
    brandSeparator: "–",
    title: "Next-Gen Multi-Currency Cross-Border Settlement Gateway",
    brandLogoType: "vaultpay",
    deviceType: "both",
    accentColor: "#10b981",
    themeGlow: "rgba(16, 185, 129, 0.25)",
    buttonGradient: "from-emerald-500 to-teal-600",
    shortDesc: "Institutional treasury and cross-border payments portal processing high-volume remittances.",
    description: "VaultPay Global is an institutional financial technology portal engineered to process high-volume international remittances and instant multi-currency treasury settlements. It features real-time FX rate locks, ISO 20022 compliance protocols, biometric fraud detection, and automated AML screening. Built on an event-driven Go microservices architecture with Next.js dashboards, it safeguards billions in monthly enterprise transactions.",
    heroImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    mobileImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Redis", "Stripe API", "Docker"],
    liveUrl: "https://vaultpay.global",
    client: "VaultPay International",
    timeline: "12 Weeks",
    metrics: "$2.4B+",
    metricsLabel: "Monthly Volume Settled",
    category: "Website Development",
    categorySlug: "web-development",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "VaultPay required a rock-solid treasury workstation where international corporations can convert currencies, manage sub-accounts, and trigger wire transfers in seconds.",
    challenge: "Achieving microsecond latency while executing strict cryptographic signature audits and bank-grade anti-money laundering checks on every payment.",
    solution: "Engineered high-throughput Go backend services synchronized with an interactive React & Next.js dashboard featuring live WebSockets and hardware key authentication.",
    deliverables: [
      "Multi-Currency Treasury Dashboard",
      "Real-Time FX Spot Execution Engine",
      "Automated Compliance & AML Verification Module",
      "Hardware Key (WebAuthn/FIDO2) Security Layer"
    ],
    testimonial: {
      quote: "Security, speed, and absolute reliability. Solvexa delivered banking-grade software that passed all third-party SOC2 audits with flying colors.",
      author: "Darius Sterling",
      role: "Chief Compliance Officer",
      company: "VaultPay",
      rating: 5
    }
  },
  {
    id: "healthpulse-telehealth",
    slug: "healthpulse-telehealth-ehr",
    brandName: "HealthPulse",
    brandSeparator: ":",
    title: "HIPAA-Compliant Patient Portal & Clinical Video EHR",
    brandLogoType: "healthpulse",
    deviceType: "both",
    accentColor: "#f43f5e",
    themeGlow: "rgba(244, 63, 94, 0.25)",
    buttonGradient: "from-rose-500 to-pink-600",
    shortDesc: "End-to-end clinical telemedicine portal with encrypted WebRTC video and electronic health records.",
    description: "HealthPulse is a certified telehealth and clinical workflow platform connecting patients with specialized healthcare providers across synchronous WebRTC video sessions. The portal includes smart scheduling, digital prescription dispatch, real-time vital telemetry recording, and end-to-end encrypted medical record transfers. Solvexa architected the solution with strict HIPAA compliance, React, WebRTC, and automated FHIR API interoperability.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    mobileImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "TailwindCSS"],
    liveUrl: "https://healthpulse.med",
    client: "PulseCare Health Network",
    timeline: "9 Weeks",
    metrics: "99.98%",
    metricsLabel: "Clinical Consultation Uptime",
    category: "Website Development",
    categorySlug: "web-development",
    galleryImages: [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "A national healthcare network needed an integrated telehealth portal that allowed doctors to conduct consultations and prescribe medications without leaving their clinical dashboard.",
    challenge: "Maintaining low-latency HD video across spotty cellular connections while guaranteeing encrypted HIPAA data compliance.",
    solution: "Built an adaptive bitrate WebRTC mesh architecture with automated bandwidth recovery, synchronized clinical charting, and digital signature prescription workflows.",
    deliverables: [
      "Encrypted WebRTC HD Video Consultation Room",
      "FHIR-Compliant Electronic Health Record Integration",
      "Automated e-Prescription & Pharmacy Dispatch",
      "Patient Self-Scheduling & SMS Reminders"
    ],
    testimonial: {
      quote: "Our physicians love how intuitive the charting and video interface is. Patient satisfaction ratings have reached an all-time high of 98%.",
      author: "Dr. Rachel Adams",
      role: "Chief Medical Officer",
      company: "PulseCare",
      rating: 5
    }
  },
  {
    id: "quantedge-terminal",
    slug: "quantedge-trading-terminal",
    brandName: "QuantEdge",
    brandSeparator: "–",
    title: "Algorithmic Trading & Ultra-Low Latency Market Telemetry",
    brandLogoType: "quantedge",
    deviceType: "web",
    accentColor: "#38bdf8",
    themeGlow: "rgba(56, 189, 248, 0.25)",
    buttonGradient: "from-sky-400 to-indigo-600",
    shortDesc: "High-frequency quantitative trading workbench with GPU Canvas charting and sub-millisecond execution.",
    description: "QuantEdge Terminal is an institutional desktop and web trading workbench providing quantitative traders with sub-millisecond order routing, algorithmic backtesting, and volumetric heatmaps. The platform processes over 200,000 Level-2 market ticks per second using WebAssembly and Rust compute pipelines, coupled with GPU-accelerated Canvas charting and FIX protocol gateway integrations.",
    heroImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    technologies: ["C#", "TypeScript", "React", "PostgreSQL", "Redis", "Docker"],
    liveUrl: "https://quantedge.finance",
    client: "QuantEdge Capital Management",
    timeline: "14 Weeks",
    metrics: "200K QPS",
    metricsLabel: "Level-2 Tick Throughput",
    category: "Desktop Applications",
    categorySlug: "desktop-applications",
    galleryImages: [
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Proprietary trading desks needed a modernized terminal capable of rendering complex depth-of-book ladders and multi-exchange order books with zero UI stutter.",
    challenge: "Rendering hundreds of thousands of order book modifications per second in a browser canvas without consuming excessive CPU cores.",
    solution: "Architected a custom WebAssembly tick processor compiled from Rust, paired with double-buffered Canvas rendering and lightweight binary WebSockets.",
    deliverables: [
      "GPU-Accelerated Level-2 Order Book Visualizer",
      "Algorithmic Strategy Backtesting Sandbox",
      "Direct Market Access (DMA) FIX Gateway",
      "Customizable Multi-Monitor Tile Window Manager"
    ],
    testimonial: {
      quote: "The tick processing speed is peerless. Solvexa gave our quants the edge they needed in fragmented market environments.",
      author: "Vikram Malhotra",
      role: "Head of Quantitative Strategies",
      company: "QuantEdge",
      rating: 5
    }
  },
  {
    id: "omnicart-global",
    slug: "omnicart-commerce",
    brandName: "OmniCart",
    brandSeparator: "–",
    title: "Headless Composable Commerce & Omni-Channel Retail Suite",
    brandLogoType: "omnicart",
    deviceType: "both",
    accentColor: "#8b5cf6",
    themeGlow: "rgba(139, 92, 246, 0.25)",
    buttonGradient: "from-violet-500 to-purple-600",
    shortDesc: "Sub-second headless e-commerce architecture powering dynamic international retail storefronts.",
    description: "OmniCart is a headless enterprise e-commerce platform designed for global consumer brands seeking sub-second page loads and dynamic regional merchandising. The platform connects custom storefronts with distributed inventory hubs, automated tax calculation via Avalara, and frictionless Apple Pay and Google Pay checkout funnels. Powered by Next.js Server Components, Shopify Storefront API, and global edge CDNs.",
    heroImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    mobileImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    technologies: ["Next.js", "React", "Shopify", "GraphQL", "TailwindCSS", "Stripe API"],
    liveUrl: "https://omnicart.store",
    client: "Aura Apparel Global",
    timeline: "8 Weeks",
    metrics: "+38%",
    metricsLabel: "Mobile Checkout Conversion",
    category: "Website Development",
    categorySlug: "web-development",
    galleryImages: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "A luxury lifestyle brand was losing mobile shoppers due to bloated legacy storefront load times exceeding 4.5 seconds.",
    challenge: "Achieving perfect Lighthouse scores while loading rich 3D product previews and localized currency pricing across 40 countries.",
    solution: "Developed a headless Next.js App Router storefront deployed on edge networks with incremental static regeneration and 1-click Express checkout.",
    deliverables: [
      "Ultra-Fast Next.js Storefront with Instant Search",
      "Multi-Currency & Geolocation Routing",
      "Sanity CMS Headless Content Modeling",
      "Integrated 1-Click Apple Pay & Google Pay Funnel"
    ],
    testimonial: {
      quote: "Our mobile bounce rates were cut in half on launch day. Solvexa delivered the sleekest commerce experience in our industry.",
      author: "Chloe Dubois",
      role: "E-Commerce Director",
      company: "Aura Apparel",
      rating: 5
    }
  },
  {
    id: "nova-pulse-game",
    slug: "nova-pulse-interactive-game",
    brandName: "Nova Pulse",
    brandSeparator: ":",
    title: "Interactive 3D Procedural Exploration & Spatial Simulation",
    brandLogoType: "novapulse",
    deviceType: "web",
    accentColor: "#ec4899",
    themeGlow: "rgba(236, 72, 153, 0.25)",
    buttonGradient: "from-pink-500 to-purple-600",
    shortDesc: "Procedural 3D planetary physics engine and interactive space simulator built in Unity & WebGL.",
    description: "Nova Pulse is an immersive interactive 3D simulation and gaming experience engineered in Unity and WebGL. It features real-time procedural terrain generation, custom compute shaders, dynamic physics simulations, and atmospheric spatial audio. Solvexa developed the rendering pipeline and cross-platform controller integration, enabling smooth 60 FPS performance across desktop browsers and native gaming environments.",
    heroImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
    technologies: ["C#", "Blender", "JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://novapulse.games",
    client: "Pulse Interactive Studios",
    timeline: "14 Weeks",
    metrics: "4.9/5",
    metricsLabel: "Player Store Rating",
    category: "Game Development",
    categorySlug: "game-development",
    galleryImages: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "An indie interactive studio commissioned Solvexa to develop the procedural rendering pipeline and flight physics for a retro-futuristic deep space exploration title.",
    challenge: "Generating massive planetary landscapes on mid-tier hardware while maintaining rock-solid 60 FPS physics loops.",
    solution: "Architected custom Unity compute shaders, dynamic mesh LOD algorithms, and an atmospheric spatial audio engine compiled to WebGL.",
    deliverables: [
      "Unity 3D Production Codebase & Flight Controller",
      "Procedural Terrain & Planetary Generation Pipeline",
      "Custom Post-Processing & Particle FX Shaders",
      "Cross-Platform WebGL & Desktop Builds"
    ],
    testimonial: {
      quote: "The visual fidelity and optimization Solvexa achieved exceeded what we thought was possible within our production timeline.",
      author: "Fatima Shah",
      role: "Game Director & Founder",
      company: "Pulse Interactive",
      rating: 5
    }
  },
  {
    id: "cloudforge-devops",
    slug: "cloudforge-kubernetes-platform",
    brandName: "CloudForge",
    brandSeparator: "–",
    title: "Autonomous Kubernetes Orchestrator & Multi-Cloud Control Plane",
    brandLogoType: "cloudforge",
    deviceType: "web",
    accentColor: "#0ea5e9",
    themeGlow: "rgba(14, 165, 233, 0.25)",
    buttonGradient: "from-sky-500 to-indigo-600",
    shortDesc: "Multi-cluster Kubernetes management plane with automated Helm pipelines and real-time observability.",
    description: "CloudForge is an infrastructure automation and CI/CD observability platform that simplifies multi-cluster Kubernetes deployments across AWS, Google Cloud, and bare-metal servers. Engineers can visually build Helm deployment pipelines, manage secret rotation, and monitor pod health metrics in real time. The platform integrates Prometheus metrics, Grafana alerting hooks, and zero-trust IAM policies.",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "TypeScript", "Docker", "GraphQL", "Node.js", "TailwindCSS"],
    liveUrl: "https://cloudforge.dev",
    client: "CloudForge Systems",
    timeline: "11 Weeks",
    metrics: "99.999%",
    metricsLabel: "Control Plane Reliability",
    category: "Website Development",
    categorySlug: "web-development",
    galleryImages: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "DevOps teams managing hundreds of distributed microservices needed a unified cockpit to automate deployments and debug container crashes instantly.",
    challenge: "Aggregating millions of telemetry logs from diverse cloud providers without inducing dashboard lag or memory spikes.",
    solution: "Developed an ultra-lean Go agent network feeding an interactive React UI with streaming virtualized log viewers and topology maps.",
    deliverables: [
      "Multi-Cloud Kubernetes Fleet Visualizer",
      "Automated Helm Rollout & Instant Rollback Pipeline",
      "Prometheus & OpenTelemetry Metrics Dashboard",
      "Zero-Trust Role-Based Access Control System"
    ],
    testimonial: {
      quote: "CloudForge saved our DevOps team hundreds of on-call hours each month. Solvexa builds software that engineers genuinely love using.",
      author: "Soren Nielsen",
      role: "VP of Engineering",
      company: "CloudForge",
      rating: 5
    }
  },
  {
    id: "edusphere-lms",
    slug: "edusphere-learning-management",
    brandName: "EduSphere",
    brandSeparator: ":",
    title: "Adaptive AI Courseware & Real-Time Classroom Ecosystem",
    brandLogoType: "edusphere",
    deviceType: "both",
    accentColor: "#3b82f6",
    themeGlow: "rgba(59, 130, 246, 0.25)",
    buttonGradient: "from-blue-500 to-indigo-600",
    shortDesc: "Next-gen university learning platform with adaptive quiz engines and collaborative whiteboards.",
    description: "EduSphere is a next-generation learning management ecosystem built for higher education and corporate upskilling academies. It combines adaptive AI quizzes, automated grading assistants, live interactive whiteboards, and student engagement analytics into a cohesive digital campus. Solvexa engineered the scalable LMS with Next.js, Node.js, Socket.io, and SCORM/LTI standard compliance.",
    heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    mobileImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Firebase", "TailwindCSS"],
    liveUrl: "https://edusphere.learn",
    client: "Global Academic Consortium",
    timeline: "9 Weeks",
    metrics: "250K+",
    metricsLabel: "Enrolled Students",
    category: "Website Development",
    categorySlug: "web-development",
    galleryImages: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "A consortium of international colleges required an intuitive LMS capable of handling synchronous lectures, automated grading, and peer-to-peer breakout study rooms.",
    challenge: "Supporting simultaneous exam submissions from thousands of concurrent students without socket disconnection or database deadlocks.",
    solution: "Engineered an event-driven microservices architecture using Redis pub/sub, Next.js interactive canvases, and automated grading pipelines.",
    deliverables: [
      "Real-Time Collaborative Whiteboard & Breakout Rooms",
      "Adaptive AI Knowledge Assessment Engine",
      "SCORM & LTI Compliant Curriculum Importer",
      "Instructor Analytics & Student Engagement Heatmaps"
    ],
    testimonial: {
      quote: "The platform seamlessly handled our campus-wide midterms with zero latency. Solvexa delivered far ahead of schedule.",
      author: "Professor Arthur Davies",
      role: "Dean of Digital Learning",
      company: "Academic Consortium",
      rating: 5
    }
  },
  {
    id: "urbanride-mobility",
    slug: "urbanride-fleet-telematics",
    brandName: "UrbanRide",
    brandSeparator: "–",
    title: "Electric Fleet Dispatch & Micromobility Telematics Platform",
    brandLogoType: "urbanride",
    deviceType: "mobile",
    accentColor: "#10b981",
    themeGlow: "rgba(16, 185, 129, 0.25)",
    buttonGradient: "from-emerald-500 to-teal-600",
    shortDesc: "Real-time electric scooter and vehicle fleet dispatch system with IoT geofencing.",
    description: "UrbanRide is an end-to-end electric vehicle dispatch and fleet telematics platform managing thousands of scooters, bikes, and EV shuttles in metropolitan hubs. The system incorporates geofenced parking enforcement, real-time battery drain prediction, dynamic surge pricing algorithms, and instant Bluetooth lock/unlock protocols with 99.99% operational uptime.",
    heroImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    mobileImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "TypeScript"],
    liveUrl: "https://urbanride.io",
    client: "UrbanRide Mobility Europe",
    timeline: "12 Weeks",
    metrics: "1.8M+",
    metricsLabel: "Completed Rides",
    category: "Mobile App Development",
    categorySlug: "mobile-app-development",
    galleryImages: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "A rapid-growth micromobility operator needed a bulletproof passenger app and fleet maintenance dispatch dashboard capable of tracking 15,000 live GPS beacons.",
    challenge: "Handling intermittent GPS drift in dense urban canyons and preventing unauthorized vehicle use through sub-second Bluetooth handshakes.",
    solution: "Developed native React Native mobile apps with smart offline geofence caching and high-frequency MQTT telematics clusters.",
    deliverables: [
      "Rider iOS & Android Mobile Apps with 1-Tap Unlock",
      "Operations Dispatch Map with Real-Time Battery Health",
      "Dynamic Geofenced Speed Limiting & Parking Zones",
      "Automated Stripe Card & Apple Pay Billing Integration"
    ],
    testimonial: {
      quote: "Our dispatchers can locate, rebalance, and diagnose fleet units with unbelievable speed. Solvexa built the backbone of our operations.",
      author: "Marcella Rossi",
      role: "Operations Director",
      company: "UrbanRide",
      rating: 5
    }
  },
  {
    id: "solvcore-db",
    slug: "solvcore-database-system",
    brandName: "SolvCore",
    brandSeparator: "–",
    title: "High-Concurrency Distributed Database & Query Accelerator",
    brandLogoType: "solvcore",
    deviceType: "web",
    accentColor: "#06b6d4",
    themeGlow: "rgba(6, 182, 212, 0.25)",
    buttonGradient: "from-cyan-500 to-blue-600",
    shortDesc: "High-throughput transactional database system with automated sharding and caching.",
    description: "SolvCore is a distributed cloud database management suite built for high-throughput transactional applications requiring sub-10ms query execution across 100M+ records. Features include automated sharding, zero-downtime schema migrations, real-time read replica failover, and an intuitive visual query builder that optimizes slow joins automatically.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    technologies: ["PostgreSQL", "Redis", "Python", "FastAPI", "Docker"],
    liveUrl: "https://solvcore.data",
    client: "Centric Retail Enterprise",
    timeline: "7 Weeks",
    metrics: "99.99%",
    metricsLabel: "Database Cluster Uptime",
    category: "Database Management",
    categorySlug: "database-management",
    galleryImages: [
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "An omni-channel retailer with millions of monthly transactions was experiencing catastrophic bottlenecks during peak holiday sales flash events.",
    challenge: "Refactoring legacy monolithic databases without downtime and migrating 100M+ transaction records safely.",
    solution: "Designed an optimized PostgreSQL & Redis cluster architecture with automated read-replicas, schema partitioning, and continuous zero-downtime backup snapshots.",
    deliverables: [
      "Distributed Database Cluster Architecture",
      "Zero-Downtime Data Migration & ETL Pipeline",
      "Sub-10ms Redis Caching Layer for Hot Queries",
      "Automated Failover & Real-Time Replication Monitoring"
    ],
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
    brandName: "Lumina Studio",
    brandSeparator: ":",
    title: "Full-Spectrum Luxury Brand Identity & Procedural Design System",
    brandLogoType: "lumina",
    deviceType: "both",
    accentColor: "#d4af37",
    themeGlow: "rgba(212, 175, 55, 0.25)",
    buttonGradient: "from-amber-400 via-yellow-500 to-amber-600",
    shortDesc: "Complete corporate identity system, luxury typography, and interactive design guidelines.",
    description: "Lumina is a comprehensive corporate brand identity and digital design system crafted for a premier modern technology atelier. Solvexa developed the complete brand architecture, including the golden-ratio vector mark, interactive digital brand guidelines portal, 3D motion stingers, and precision component typography built to maintain consistency across global touchpoints.",
    heroImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    mobileImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
    technologies: ["Figma", "Photoshop", "Illustrator", "After Effects", "Next.js"],
    liveUrl: "https://lumina.design",
    client: "Lumina Lifestyle Group",
    timeline: "4 Weeks",
    metrics: "+65%",
    metricsLabel: "Inbound Conversion Lift",
    category: "Branding & Logo Design",
    categorySlug: "branding-logo-design",
    galleryImages: [
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "A high-end consumer technology venture required an iconic, minimalist brand identity capable of scaling from micro-app icons to architectural building signage.",
    challenge: "Creating a geometric mark that communicated both avant-garde luxury and scientific precision without appearing cold or generic.",
    solution: "Crafted a bespoke golden-ratio vector mark, proprietary color hierarchy, luxury typography styling, and a cinematic 4K motion logo sting.",
    deliverables: [
      "Master Vector Logo System (Primary, Monogram, Wordmark)",
      "120-Page Comprehensive Brand Guidelines Book",
      "3D Cinema 4D Animated Logo Sting & Sound Design",
      "Interactive Web Guidelines Portal"
    ],
    testimonial: {
      quote: "Solvexa gave our brand an aura of instant prestige and world-class polish. We have received endless praise on our new look.",
      author: "Michael",
      role: "Marketing Director",
      company: "Lumina Lifestyle",
      rating: 5
    }
  },
  {
    id: "soundwave-audio",
    slug: "soundwave-audio-streaming",
    brandName: "SoundWave",
    brandSeparator: "–",
    title: "Lossless Spatial Audio Streaming & Creator Monetization Hub",
    brandLogoType: "soundwave",
    deviceType: "both",
    accentColor: "#a855f7",
    themeGlow: "rgba(168, 85, 247, 0.25)",
    buttonGradient: "from-purple-500 to-indigo-600",
    shortDesc: "High-fidelity spatial audio streaming player with sub-second buffer and instant creator payouts.",
    description: "SoundWave is a high-fidelity spatial audio streaming application and direct-to-fan monetization platform for independent artists and recording studios. It delivers 24-bit/192kHz lossless audio streaming, instant micropayments via Web3 and Stripe, dynamic lyric sync, and collaborative listening rooms. Solvexa engineered the responsive player architecture using modern Web Audio APIs and distributed edge CDNs.",
    heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    mobileImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "TailwindCSS"],
    liveUrl: "https://soundwave.fm",
    client: "SoundWave Media Group",
    timeline: "10 Weeks",
    metrics: "2.5M+",
    metricsLabel: "Monthly Stream Hours",
    category: "Website Development",
    categorySlug: "web-development",
    galleryImages: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Independent recording artists needed a streaming platform that prioritized audio fidelity and paid out royalties transparently within seconds of play.",
    challenge: "Encoding and streaming uncompressed FLAC audio packets with zero jitter across mobile devices on varying network quality.",
    solution: "Designed an edge-cached streaming pipeline utilizing modern Web Audio API decoders, Web Workers, and instant Stripe Connect split payouts.",
    deliverables: [
      "Lossless Spatial Audio Web & Mobile Player",
      "Dynamic Synchronized Lyrics & Waveform Visualizer",
      "Instant Creator Royalty Split Engine",
      "Collaborative Virtual Listening Lounge"
    ],
    testimonial: {
      quote: "The audio clarity is astonishing. Solvexa engineered a streaming platform that artists trust and listeners adore.",
      author: "Julian Vance",
      role: "Head of Audio Engineering",
      company: "SoundWave",
      rating: 5
    }
  }
];
