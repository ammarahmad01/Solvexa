export interface SubService {
  title: string;
  desc: string;
  icon: string;
  points: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  aliases?: string[];
  title: string;
  heroHeadline: string;
  tagline: string;
  shortDesc: string;
  heroImage: string;
  secondaryImage: string;
  overview: string[];
  icon: string;
  badge: string;
  subServicesTitle: string;
  subServices: SubService[];
  whatsIncluded: string[];
  process: { step: string; title: string; desc: string; deliverables: string }[];
  industries: { name: string; desc: string; icon: string }[];
  hireBenefits: { title: string; desc: string; icon: string }[];
  technologies: { name: string; role: string; category: string }[];
  faqs: { q: string; a: string }[];
  stats: { value: string; label: string }[];
}

export const servicesData: ServiceItem[] = [
  // 1. Web Development
  {
    id: "web-dev",
    slug: "web-development",
    aliases: ["web-applications"],
    title: "Web Development",
    heroHeadline: "Scalable Full-Stack Engineering & Ultra-Fast Web Experiences",
    tagline: "Custom-built, high-performance websites & cloud web applications.",
    shortDesc: "We build dynamic, high-performance web applications and enterprise platforms engineered for velocity, responsiveness, and scale.",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    badge: "Full-Stack",
    icon: "laptop_mac",
    subServicesTitle: "Our Custom Web Development Services",
    subServices: [
      {
        title: "Enterprise SaaS Web Apps",
        desc: "High-concurrency cloud software with tenant isolation, strict authentication, and sub-100ms API response rates.",
        icon: "cloud_done",
        points: ["Multi-tenant databases", "Role-based access control", "Automated billing & Stripe sync"]
      },
      {
        title: "Next.js & React High-Velocity Frontends",
        desc: "Blazing-fast rendering, server components, edge caching, and 100/100 Core Web Vitals optimization.",
        icon: "speed",
        points: ["Turbopack & App Router", "Sub-second cold starts", "Dynamic metadata & SEO schemas"]
      },
      {
        title: "E-Commerce & Checkout Engines",
        desc: "Custom high-conversion shopping platforms designed for high catalog volumes and instant checkout flows.",
        icon: "shopping_cart",
        points: ["Headless Shopify / MedusaJS", "Multi-currency gateways", "Real-time inventory sync"]
      },
      {
        title: "Headless CMS & Custom WordPress",
        desc: "Modular content architectures enabling marketing teams to publish without breaking developer workflows.",
        icon: "edit_note",
        points: ["Sanity, Strapi & Payload", "Custom Gutenberg blocks", "Zero-plugin security overhead"]
      },
      {
        title: "REST & GraphQL API Microservices",
        desc: "Robust backend endpoints with OpenAPI specifications, rate limiting, and distributed worker queues.",
        icon: "hub",
        points: ["Swagger documentation", "Redis caching layers", "Kafka / RabbitMQ pipelines"]
      },
      {
        title: "3D WebGL & Interactive Experiences",
        desc: "Spatial 3D product visualizers and interactive canvas experiences running smoothly at 60 FPS in browser.",
        icon: "view_in_ar",
        points: ["Three.js & GLSL shaders", "Mobile GPU optimization", "Interactive product configurators"]
      }
    ],
    overview: [
      "At Solvexa, web development goes far beyond writing clean code. We engineer mission-critical web applications that handle heavy real-time traffic, safeguard user data, and deliver frictionless conversions.",
      "We replace bloated legacy monoliths with modern, decoupled architectures that scale smoothly as your user base expands across continents. Our CI/CD deployment pipelines guarantee zero-downtime releases and instant rollbacks."
    ],
    whatsIncluded: [
      "Custom Full-Stack Next.js 15 & React Architecture",
      "TypeScript Strict Type Safety Across Client & Server",
      "TailwindCSS Custom Design System & Responsive Tokens",
      "PostgreSQL, MongoDB or MySQL Cloud Database Cluster",
      "Automated End-to-End Testing (Playwright & Jest)",
      "Global CDN Caching, SSL & Core Web Vitals Audit"
    ],
    process: [
      { step: "01", title: "Concept & Architecture", desc: "Mapping user flows, API payloads, schema entities, and cloud infrastructure requirements.", deliverables: "System Architecture Blueprint & Tech Spec" },
      { step: "02", title: "Interactive UI/UX Design", desc: "Wireframing, prototyping, and establishing component tokens in Figma for stakeholder alignment.", deliverables: "Complete Responsive Figma Prototype" },
      { step: "03", title: "Agile Development", desc: "Sprint-based full-stack coding with continuous preview links deployed on every git commit.", deliverables: "Bi-Weekly Staging Environment Deployments" },
      { step: "04", title: "Testing & Security Audit", desc: "Rigorous automated testing, cross-browser audits, load tests, and vulnerability scanning.", deliverables: "QA Pass Sign-Off & Performance Report" },
      { step: "05", title: "Production Deployment", desc: "Zero-downtime cutover with automated domain DNS routing, CDN caching, and telemetry.", deliverables: "Live Production Release & Domain Handoff" },
      { step: "06", title: "Ongoing Maintenance & SLA", desc: "24/7 uptime monitoring, server security patches, regular backups, and feature iterations.", deliverables: "SLA Support Agreement & Monthly Review" }
    ],
    industries: [
      { name: "FinTech & Banking", desc: "High-frequency trade dashboards, encrypted wallets, and banking APIs.", icon: "account_balance" },
      { name: "HealthTech & Med", desc: "HIPAA-compliant telemetry, appointment portals, and diagnostic viewers.", icon: "medical_services" },
      { name: "E-Commerce & Retail", desc: "Global omni-channel storefronts with automated fulfillment webhooks.", icon: "storefront" },
      { name: "SaaS & Enterprise", desc: "B2B client portals with granular role permissions and subscription billing.", icon: "business_center" },
      { name: "Logistics & Fleet", desc: "Real-time dispatch tracking, route optimization, and manifest generation.", icon: "local_shipping" },
      { name: "EdTech & Learning", desc: "Interactive course platforms, video streaming, and quiz analytics.", icon: "school" }
    ],
    hireBenefits: [
      { title: "Fast 48-Hour Onboarding", desc: "Pre-vetted senior developers ready to join your repo within 2 business days.", icon: "bolt" },
      { title: "Daily Progress Reports", desc: "Detailed git commit summaries, daily standups, and transparent Jira cards.", icon: "fact_check" },
      { title: "Top 3% Senior Talent", desc: "Experienced software engineers proficient in modern React, Next.js, and Node.", icon: "verified" },
      { title: "Timezone Aligned Sprints", desc: "Minimum 4-hour daily overlap with North America, Europe, and Asia-Pacific.", icon: "schedule" },
      { title: "Flexible Scaling Pods", desc: "Add or reduce engineering headcount with straightforward 14-day notice terms.", icon: "group_add" },
      { title: "Full IP & Code Ownership", desc: "All intellectual property, repositories, and credentials belong 100% to you.", icon: "security" }
    ],
    technologies: [
      { name: "Next.js", role: "Framework", category: "Frontend" },
      { name: "React", role: "UI Library", category: "Frontend" },
      { name: "Node.js", role: "Backend Runtime", category: "Backend" },
      { name: "Express.js", role: "REST API", category: "Backend" },
      { name: "TypeScript", role: "Language", category: "Full-Stack" },
      { name: "PostgreSQL", role: "Database", category: "Database" },
      { name: "MongoDB", role: "Database", category: "Database" },
      { name: "TailwindCSS", role: "Styling", category: "Frontend" }
    ],
    faqs: [
      { q: "How long does a custom web development sprint take?", a: "Standard MVP and marketing web platforms take 3 to 6 weeks. Complex enterprise SaaS platforms with multi-tenant databases typically take 6 to 12 weeks." },
      { q: "Will our website be SEO-optimized and score 95+ on Google Lighthouse?", a: "Yes. Every website we construct is server-rendered, complies strictly with Core Web Vitals, uses semantic HTML5 tags, and includes OpenGraph and Schema markup." },
      { q: "Can we hire dedicated full-stack developers on a monthly retainer?", a: "Yes, our outsourcing pod model lets you hire 1 to 5 dedicated engineers fully dedicated to your backlog with weekly sprint demos." }
    ],
    stats: [
      { value: "99.9%", label: "Platform Uptime SLA" },
      { value: "0.4s", label: "Average First Contentful Paint" },
      { value: "65+", label: "Web Applications Shipped" },
      { value: "100%", label: "Client Code Ownership" }
    ]
  },

  // 2. Mobile App Development
  {
    id: "mobile-dev",
    slug: "mobile-app-development",
    aliases: ["mobile-applications"],
    title: "Mobile App Development",
    heroHeadline: "Fluid Native-Feel iOS & Android Apps Built for Scale",
    tagline: "Seamless cross-platform apps powered by React Native and Flutter.",
    shortDesc: "Create engaging, intuitive mobile applications that deliver seamless experiences on iOS and Android platforms.",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    badge: "iOS & Android",
    icon: "phone_iphone",
    subServicesTitle: "Our Custom Mobile Development Services",
    subServices: [
      {
        title: "React Native Universal Apps",
        desc: "Single codebase delivering native iOS and Android experiences with up to 90% code reusability.",
        icon: "devices",
        points: ["Native bridge modules", "Hermes engine performance", "Redux / Zustand state architecture"]
      },
      {
        title: "Flutter Cross-Platform Apps",
        desc: "Skia/Impeller-rendered pixel-perfect mobile applications with high animation fidelity.",
        icon: "flutter",
        points: ["Hardware acceleration", "Custom material styling", "Multi-platform expansion"]
      },
      {
        title: "Offline-First Data Architecture",
        desc: "Local SQLite / Realm / MMKV storage ensuring uninterrupted user workflow during network drops.",
        icon: "cloud_off",
        points: ["Optimistic UI updates", "Background sync queues", "Conflict resolution algorithms"]
      },
      {
        title: "Hardware & Sensor Integration",
        desc: "Direct integration with device camera, biometric FaceID, GPS geofencing, accelerometer, and Bluetooth.",
        icon: "sensors",
        points: ["Biometric auth", "Turn-by-turn map routing", "BLE beacon scanning"]
      },
      {
        title: "Real-Time Push & Chat Engines",
        desc: "WebSocket and Firebase Cloud Messaging pipelines for real-time order alerts and peer-to-peer messaging.",
        icon: "notifications_active",
        points: ["APNs & FCM notifications", "Socket.io streaming", "Deep-linking routing"]
      },
      {
        title: "App Store Publishing & Compliance",
        desc: "End-to-end management of Apple Developer and Google Play Console approvals, test tracks, and guidelines.",
        icon: "store",
        points: ["TestFlight beta distribution", "Privacy manifest audits", "App Store Optimization (ASO)"]
      }
    ],
    overview: [
      "Solvexa engineers high-retention mobile experiences that users love to open every single day. We bridge native device performance with rapid cross-platform delivery so you launch faster without sacrificing UX quality.",
      "From fintech payment apps with biometric encryption to logistics dispatch hubs with GPS background tracking, our engineering standards guarantee battery efficiency, low memory footprint, and crash-free sessions."
    ],
    whatsIncluded: [
      "iOS & Android Production Build via React Native / Flutter",
      "Native Component Bridging & Native Module Architecture",
      "Offline-First SQLite / MMKV Data Synchronization",
      "Firebase Push Notifications & Analytics Integration",
      "TestFlight & Google Play Internal Testing Tracks",
      "Post-Launch Crashlytics Monitoring & Store Approval Guarantee"
    ],
    process: [
      { step: "01", title: "App Blueprint & Specs", desc: "Defining user personas, offline caching logic, screen transitions, and SDK requirements.", deliverables: "Interactive Mobile Wireframes & Technical Specs" },
      { step: "02", title: "Native UI/UX Design", desc: "Designing following Apple HIG and Google Material guidelines with dark mode support.", deliverables: "Complete Mobile Figma Prototype with Micro-Interactions" },
      { step: "03", title: "Agile Development", desc: "Bi-weekly sprint builds compiled and delivered directly to your device via TestFlight.", deliverables: "TestFlight & APK Preview Builds" },
      { step: "04", title: "Device Matrix Testing", desc: "Testing across dozens of physical screen sizes, CPU throttles, and network speeds.", deliverables: "Crash-Free Diagnostic Report" },
      { step: "05", title: "Store Submission & Launch", desc: "Managing store metadata, compliance questionnaires, privacy manifests, and review approval.", deliverables: "Published App on Apple App Store & Google Play" },
      { step: "06", title: "Continuous Iteration", desc: "Real-time crash monitoring, OS version compatibility updates, and feature updates.", deliverables: "Monthly Maintenance & Bug Fix Releases" }
    ],
    industries: [
      { name: "FinTech & Payments", desc: "Biometric mobile banking, crypto wallets, and micro-investment apps.", icon: "payments" },
      { name: "Health & Fitness", desc: "Workout trackers, telehealth consultations, and wearable device sync.", icon: "fitness_center" },
      { name: "On-Demand Delivery", desc: "Live driver tracking, customer dispatch, and automated billing.", icon: "moped" },
      { name: "Social & Community", desc: "Real-time feed algorithms, video reels, and instant group chat.", icon: "forum" },
      { name: "Enterprise Field CRM", desc: "Sales rep order capture, offline inventory checks, and digital signatures.", icon: "assignment" },
      { name: "Travel & Hospitality", desc: "Room bookings, interactive flight maps, and digital room key access.", icon: "flight" }
    ],
    hireBenefits: [
      { title: "React Native & Flutter Leads", desc: "Hire senior mobile engineers with verified App Store deployments.", icon: "mobile_friendly" },
      { title: "Shared Code Efficiency", desc: "Save up to 40% on ongoing engineering by maintaining one unified mobile codebase.", icon: "savings" },
      { title: "Sprint-Based TestFlight", desc: "Test real builds on your personal smartphone at the end of every week.", icon: "install_mobile" },
      { title: "Hardware Integration Mastery", desc: "Deep expertise in camera scanner, Bluetooth, GPS, and push tokens.", icon: "developer_board" },
      { title: "Guaranteed Store Approval", desc: "We resolve all Apple and Google compliance reviews at no additional cost.", icon: "verified" },
      { title: "Direct Slack Communication", desc: "Daily direct collaboration with your mobile squad without intermediary layers.", icon: "chat" }
    ],
    technologies: [
      { name: "React Native", role: "Mobile Framework", category: "Mobile" },
      { name: "Flutter", role: "Google Framework", category: "Mobile" },
      { name: "Firebase", role: "Cloud Backend", category: "Backend" },
      { name: "Swift", role: "iOS Native", category: "Mobile" },
      { name: "Kotlin", role: "Android Native", category: "Mobile" },
      { name: "Expo", role: "Tooling", category: "Mobile" }
    ],
    faqs: [
      { q: "Do you develop for both iOS and Android simultaneously?", a: "Yes. By utilizing React Native or Flutter, we deliver synchronized builds for both iPhone and Android devices from a single high-quality codebase." },
      { q: "Who manages the developer accounts on the App Store?", a: "You retain full ownership of your Apple and Google developer accounts. We request developer team permissions to upload and manage the submissions on your behalf." },
      { q: "Can the app function when users lose internet access?", a: "Yes, we implement offline-first architecture with local encrypted databases that instantly sync whenever network connectivity restores." }
    ],
    stats: [
      { value: "45+", label: "Mobile Apps Published" },
      { value: "99.8%", label: "Crash-Free User Sessions" },
      { value: "60 FPS", label: "Smooth Animation Standard" },
      { value: "4.8/5", label: "Average App Store Rating" }
    ]
  },

  // 3. UI/UX Design
  {
    id: "ui-ux",
    slug: "ui-ux-design",
    aliases: ["ui-ux"],
    title: "UI/UX Design",
    heroHeadline: "Human-Centered Design Systems & Intuitive Digital Interfaces",
    tagline: "Interfaces that are as functional as they are beautiful.",
    shortDesc: "Craft visually stunning, user-friendly interfaces and comprehensive Figma design systems that elevate conversions and engagement.",
    heroImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    badge: "Human-Centered",
    icon: "palette",
    subServicesTitle: "Our Custom UI/UX Design Services",
    subServices: [
      {
        title: "User Research & Heuristic Audits",
        desc: "Quantitative behavioral analysis, user interviews, and competitor gap mapping to uncover friction points.",
        icon: "psychology",
        points: ["Persona development", "Customer journey mapping", "Conversion funnel analysis"]
      },
      {
        title: "Wireframing & Information Architecture",
        desc: "Low-fidelity structural blueprints defining navigation hierarchies and content priority before visual styling.",
        icon: "schema",
        points: ["Sitemaps & user flows", "Low-fidelity wireframes", "Task completion optimization"]
      },
      {
        title: "Comprehensive Figma Design Systems",
        desc: "Atomic UI components, responsive auto-layout variants, and CSS-aligned design tokens.",
        icon: "view_quilt",
        points: ["Dark & Light mode tokens", "Typography & color scales", "Accessible WCAG contrast ratios"]
      },
      {
        title: "High-Fidelity Interactive Prototypes",
        desc: "Realistic clickable prototypes with smart animations simulating real application physics.",
        icon: "touch_app",
        points: ["Figma smart-animate", "Micro-interaction specs", "Usability test recordings"]
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        desc: "Data-backed landing page and checkout redesigns specifically engineered to maximize signup and purchase conversions.",
        icon: "trending_up",
        points: ["A/B variant design", "Heatmap analysis", "Value-proposition clarity"]
      },
      {
        title: "Developer Handoff & Token Specs",
        desc: "Pixel-perfect handoff files with explicit spacing units, flexbox specifications, and export-ready SVG assets.",
        icon: "developer_mode",
        points: ["Token JSON export", "Responsive breakpoints", "Zero-ambiguity developer specs"]
      }
    ],
    overview: [
      "Great digital design solves real business problems. At Solvexa, our design team combines cognitive psychology with sleek modern aesthetics to craft digital products that reduce user churn and accelerate adoption.",
      "We design directly with engineering constraints in mind. Our components translate 1-to-1 into modern Tailwind CSS and React code, eliminating the frustrating gap between Figma mockups and production builds."
    ],
    whatsIncluded: [
      "Complete Master Figma Library (.fig) with Auto-Layout 5.0",
      "Interactive Multi-Platform Prototypes (Desktop, Tablet, Mobile)",
      "Design Tokens Architecture (Colors, Typography, Spacing, Shadows)",
      "Comprehensive Icon & Illustration Vector Archive",
      "Usability Testing Documentation & User Journey Maps",
      "Complete Developer Handoff Guide with CSS/Tailwind Properties"
    ],
    process: [
      { step: "01", title: "Discovery & Empathy", desc: "Researching target user pain points, business goals, and competitive benchmarks.", deliverables: "User Persona Deck & Competitive Benchmark" },
      { step: "02", title: "Information Architecture", desc: "Mapping core navigation structures and user flow diagrams.", deliverables: "Sitemaps & Low-Fidelity Wireframes" },
      { step: "03", title: "Visual Exploration", desc: "Establishing moodboards, typography pairings, color systems, and visual identity.", deliverables: "2 Visual Style Directions for Sign-Off" },
      { step: "04", title: "High-Fidelity Screen Design", desc: "Fleshing out all product states, edge cases, error states, and responsive views.", deliverables: "Complete Screen Design Archive in Figma" },
      { step: "05", title: "Interactive Prototyping", desc: "Linking screens with tactile micro-interactions and transitions for usability tests.", deliverables: "Clickable Usability Test Prototype" },
      { step: "06", title: "Developer Handoff", desc: "Exporting tokenized design system files and conducting handoff review with engineers.", deliverables: "Design System Tokens & Developer Walkthrough" }
    ],
    industries: [
      { name: "B2B SaaS Platforms", desc: "Complex multi-table analytics, dashboard filters, and data visualizers.", icon: "analytics" },
      { name: "FinTech & Crypto", desc: "High-trust checkout screens, investment portfolios, and transaction logs.", icon: "currency_exchange" },
      { name: "Modern Consumer Apps", desc: "Addictive social feeds, onboarding wizards, and gamified reward loops.", icon: "thumb_up" },
      { name: "Health & Telemedicine", desc: "Accessible patient records, doctor scheduling, and clean diagnostic readouts.", icon: "health_and_safety" },
      { name: "Luxury E-Commerce", desc: "Immersive product displays, editorial lookbooks, and one-tap checkout.", icon: "diamond" },
      { name: "Enterprise Dashboards", desc: "Dense operational controls with custom charting and real-time alerts.", icon: "grid_view" }
    ],
    hireBenefits: [
      { title: "Figma Master Certified", desc: "Designers fluent in variables, component properties, and auto-layout.", icon: "stars" },
      { title: "Technical Designers", desc: "Our designers know CSS flexbox and grid, guaranteeing clean dev implementation.", icon: "code" },
      { title: "Rapid 5-Day Wireframing", desc: "Review working low-fidelity flows within the first week of engagement.", icon: "calendar_today" },
      { title: "Uncompromising Polish", desc: "Curated typography, micro-interactions, and visual harmony that wow users.", icon: "auto_awesome" },
      { title: "Design System Continuity", desc: "Easily maintain and scale your brand identity across multiple apps and teams.", icon: "account_tree" },
      { title: "Direct Figma Collaboration", desc: "Leave comments directly on the canvas and participate in live co-design calls.", icon: "mode_comment" }
    ],
    technologies: [
      { name: "Figma", role: "Core Design Suite", category: "Design" },
      { name: "Adobe XD", role: "Prototyping", category: "Design" },
      { name: "Photoshop", role: "Raster Art", category: "Design" },
      { name: "Illustrator", role: "Vector Art", category: "Design" },
      { name: "After Effects", role: "Motion Design", category: "Motion" },
      { name: "FigJam", role: "Brainstorming", category: "Research" }
    ],
    faqs: [
      { q: "What format will the final design files be delivered in?", a: "You receive organized Figma (.fig) project files with interactive components, responsive constraints, style tokens, and export-ready assets." },
      { q: "How many design revisions are included in a project?", a: "We iterate collaboratively during the conceptual phase until you are completely satisfied with the look and feel before expanding to all screens." },
      { q: "Can our engineers easily build your Figma designs?", a: "Yes! Our designers build components with flexbox, CSS padding, and tokenized variables so developers have zero guesswork during build." }
    ],
    stats: [
      { value: "120+", label: "Design Systems Built" },
      { value: "+65%", label: "Average Conversion Lift" },
      { value: "100%", label: "WCAG Accessibility Compliant" },
      { value: "48 hrs", label: "Rapid Prototype Turnaround" }
    ]
  },

  // 4. Digital Marketing
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    heroHeadline: "Data-Driven Performance Growth & Multi-Channel Customer Acquisition",
    tagline: "Performance marketing, conversion funnels, and paid advertising that scale revenue.",
    shortDesc: "Accelerate your market acquisition with high-impact PPC funnels, conversion optimization, and multi-channel performance strategies.",
    heroImage: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
    badge: "ROI-Focused",
    icon: "campaign",
    subServicesTitle: "Our Custom Digital Marketing Services",
    subServices: [
      {
        title: "Omnichannel Acquisition Strategy",
        desc: "Coordinated campaigns bridging search intent, social awareness, and email retargeting loops.",
        icon: "hub",
        points: ["Multi-touch attribution", "Audience cohort modeling", "Budget optimization algorithms"]
      },
      {
        title: "Paid Media Management",
        desc: "Surgical ad management across Google Ads, Meta, TikTok, and LinkedIn targeting qualified buyers.",
        icon: "ads_click",
        points: ["Negative keyword pruning", "Creative fatigue mitigation", "Bid strategy testing"]
      },
      {
        title: "High-Converting Funnel Architecture",
        desc: "Split-testing dedicated landing pages to drop customer acquisition costs and boost form completions.",
        icon: "filter_alt",
        points: ["A/B headline testing", "Form abandonment reduction", "Clear CTA visual hierarchy"]
      },
      {
        title: "Automated Lifecycle Nurturing",
        desc: "Automated onboarding, cart recovery, and VIP nurture email sequences tailored to user behavior.",
        icon: "mark_email_read",
        points: ["Drip campaign logic", "Klaviyo & Mailchimp setups", "Deliverability optimization"]
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        desc: "Analyzing click heatmaps and session recordings to remove purchase friction points.",
        icon: "trending_up",
        points: ["Hotjar & Clarity heatmaps", "Checkout optimization", "Value-proposition clarity"]
      },
      {
        title: "Real-Time Telemetry & Attribution",
        desc: "Transparent Looker Studio dashboards reporting true customer acquisition cost and ROAS.",
        icon: "query_stats",
        points: ["GA4 custom event tracking", "Multi-touch attribution", "Live executive reporting"]
      }
    ],
    overview: [
      "Marketing that cannot be tied to pipeline revenue is a waste of capital. Solvexa approaches growth marketing through a rigorous engineering lens: tracking every dollar, optimizing conversion friction, and scaling what works.",
      "We build multi-channel acquisition funnels that capture prospective clients whether they are actively searching on Google or browsing industry content on LinkedIn and Meta."
    ],
    whatsIncluded: [
      "Complete Technical & Competitive Market Audit",
      "Full PPC Account Architecture & Daily Bid Management",
      "High-Converting Ad Copy & Creative Variations",
      "Server-Side Conversion API (CAPI) & GA4 Tracking Setup",
      "Weekly Optimization Sprints & Budget Reallocation",
      "24/7 Access to Live Looker Studio Performance Dashboard"
    ],
    process: [
      { step: "01", title: "Audit & Opportunity Scan", desc: "Auditing current ad accounts, funnel drop-offs, and competitor ad spend.", deliverables: "Growth Audit & Opportunity Matrix" },
      { step: "02", title: "Strategy & Funnel Design", desc: "Formulating customer acquisition pathways and budget allocations.", deliverables: "3-Month Channel Growth Roadmap" },
      { step: "03", title: "Tracking & Pixel Setup", desc: "Deploying server-side tracking, conversion webhooks, and GA4 events.", deliverables: "Verified Conversion Tracking Infrastructure" },
      { step: "04", title: "Campaign Launch & Creative", desc: "Publishing creative ad variants, high-intent copy, and landing pages.", deliverables: "Live Multi-Channel Campaigns" },
      { step: "05", title: "Daily Tuning & A/B Testing", desc: "Pruning low-yield keywords, testing copy angles, and optimizing bids.", deliverables: "Weekly Performance & ROAS Reports" },
      { step: "06", title: "Scale High-Performing Cohorts", desc: "Scaling high-performing audiences while maintaining target CPA thresholds.", deliverables: "Monthly Scaling Strategy Deck" }
    ],
    industries: [
      { name: "B2B SaaS", desc: "Demo booking funnels, LinkedIn thought leadership, and high-intent search.", icon: "cloud" },
      { name: "E-Commerce", desc: "Shopping ads, dynamic catalog retargeting, and abandoned cart flows.", icon: "shopping_bag" },
      { name: "Professional Services", desc: "High-value consultation bookings for legal, consulting, and finance.", icon: "work" },
      { name: "Real Estate & Housing", desc: "Geo-targeted lead generation for luxury properties and developments.", icon: "apartment" },
      { name: "Healthcare & Clinics", desc: "Local map ranking, patient review campaigns, and appointment ads.", icon: "local_hospital" },
      { name: "Mobile Apps", desc: "Cost-per-install (CPI) campaigns with in-app event tracking.", icon: "app_shortcut" }
    ],
    hireBenefits: [
      { title: "Direct ROI Alignment", desc: "We focus on revenue and qualified pipeline, not vanity impressions.", icon: "monetization_on" },
      { title: "No Long-Term Lock-In", desc: "Month-to-month contracts based on performance and verified results.", icon: "handshake" },
      { title: "Certified Media Buyers", desc: "Google Premier & Meta Certified advertising specialists.", icon: "military_tech" },
      { title: "In-House Creative Squad", desc: "Video editors and designers producing fresh ad creative every week.", icon: "palette" },
      { title: "Full Account Transparency", desc: "You maintain 100% ownership of your ad accounts and payment methods.", icon: "lock_open" },
      { title: "Weekly Executive Briefings", desc: "Regular 30-minute syncs to review CAC, ROAS, and upcoming initiatives.", icon: "event" }
    ],
    technologies: [
      { name: "Google Ads", role: "Search & Display", category: "PPC" },
      { name: "Meta Ads Manager", role: "Social Paid", category: "PPC" },
      { name: "SEMrush", role: "SEO Intel", category: "SEO" },
      { name: "Ahrefs", role: "Backlink Analysis", category: "SEO" },
      { name: "Google Analytics 4", role: "Telemetry", category: "Analytics" },
      { name: "Looker Studio", role: "Dashboards", category: "Reporting" }
    ],
    faqs: [
      { q: "How soon do we see measurable results from marketing campaigns?", a: "PPC campaigns on Google and Meta deliver leads within 48 to 72 hours of launch. Technical SEO gains build compounding organic momentum over 6 to 12 weeks." },
      { q: "Do you create the ad graphics and copy in-house?", a: "Yes, our team handles all copywriting, graphic design, and video reels required for ad creatives." },
      { q: "Who pays the advertising platform costs (Google/Meta)?", a: "You pay ad networks directly through your credit card for 100% financial transparency. Solvexa only charges an agreed management fee." }
    ],
    stats: [
      { value: "4.2x", label: "Average Client ROAS" },
      { value: "$2.5M+", label: "Ad Spend Managed" },
      { value: "+180%", label: "Organic Search Traffic Lift" },
      { value: "24/7", label: "Live Dashboard Access" }
    ]
  },

  // 5. SEO (Search Engine Optimization)
  {
    id: "seo",
    slug: "seo",
    aliases: ["search-engine-optimization"],
    title: "SEO (Search Engine Optimization)",
    heroHeadline: "Organic Search Dominance & Technical SEO That Generates Inbound Pipeline",
    tagline: "Rank higher on Google, capture high-intent buyers, and build compounding organic traffic.",
    shortDesc: "Dominate Google search results with technical SEO audits, Core Web Vitals optimization, high-intent keyword clustering, and backlink authority.",
    heroImage: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    badge: "Organic Growth",
    icon: "travel_explore",
    subServicesTitle: "Our Comprehensive SEO Services",
    subServices: [
      {
        title: "Technical SEO & Architecture Audit",
        desc: "Eliminate crawl errors, duplicate paths, index bloat, and canonical loops to maximize crawl efficiency.",
        icon: "build_circle",
        points: ["Robots.txt & XML sitemaps", "Canonical tag verification", "Core Web Vitals 95+ score"]
      },
      {
        title: "High-Intent Keyword Intelligence",
        desc: "Uncover commercial search queries with high conversion intent rather than hollow volume keywords.",
        icon: "manage_search",
        points: ["Competitor keyword gap analysis", "Search intent categorization", "Topical cluster blueprints"]
      },
      {
        title: "On-Page Semantic Optimization",
        desc: "Structuring H1-H3 hierarchies, schema markup, metadata, and internal links for algorithmic clarity.",
        icon: "article",
        points: ["JSON-LD schema integration", "Semantic keyword density", "Click-through rate (CTR) titles"]
      },
      {
        title: "Authoritative Link Building (PR)",
        desc: "Earning white-hat editorial backlinks from high-DR industry publications to build domain authority.",
        icon: "link",
        points: ["Editorial outreach pitches", "Digital PR guest contributions", "Unlinked brand mention reclamation"]
      },
      {
        title: "Programmatic & Local SEO",
        desc: "Scaling geo-targeted pages and Google Business Profile optimizations to capture regional customers.",
        icon: "location_on",
        points: ["Google Business Profile audit", "Local citation distribution", "Localized landing page templates"]
      },
      {
        title: "SEO Telemetry & Position Tracking",
        desc: "Transparent position tracking, Google Search Console telemetry, and monthly impact reporting.",
        icon: "query_stats",
        points: ["Daily rank tracking", "GSC indexation health check", "Executive organic revenue report"]
      }
    ],
    overview: [
      "Paid ads stop delivering the minute your budget runs out. Organic search engine optimization creates a durable, compounding asset that delivers high-intent inbound prospects month after month.",
      "Solvexa blends deep technical engineering (SSR, edge caching, schema markup) with high-authority topical clusters. We ensure search engine crawlers understand your site's expertise and reward you with tier-1 rankings."
    ],
    whatsIncluded: [
      "Comprehensive 120-Point Technical SEO Audit",
      "Target Keyword Mapping & Priority Action Roadmap",
      "Full JSON-LD Rich Schema Implementation",
      "Monthly Editorial Backlink Acquisition",
      "Internal Linking Structure & Content Gap Audit",
      "24/7 Access to Keyword Ranking Dashboard"
    ],
    process: [
      { step: "01", title: "Full Technical Audit", desc: "Auditing site speed, indexing, 404s, mobile usability, and schema health.", deliverables: "Technical SEO Audit & Action Matrix" },
      { step: "02", title: "Keyword & Competitor Recon", desc: "Discovering high-intent keyword gaps your direct competitors rank for.", deliverables: "Topical Cluster Keyword Map" },
      { step: "03", title: "On-Page Code Remediation", desc: "Fixing heading hierarchies, metadata, speed bottlenecks, and structured data.", deliverables: "Clean On-Page SEO Implementation" },
      { step: "04", title: "Content Architecture", desc: "Creating or updating high-authority pillar pages targeting target keyword clusters.", deliverables: "Published Optimized Pillar Pages" },
      { step: "05", title: "Authority Link Building", desc: "Executing targeted white-hat outreach to gain high-DR editorial backlinks.", deliverables: "Monthly Verified Backlink Report" },
      { step: "06", title: "Review & Scaling", desc: "Analyzing search console telemetry and scaling ranking keyword positions.", deliverables: "Monthly Organic Traffic & Revenue Report" }
    ],
    industries: [
      { name: "B2B Software & SaaS", desc: "Capturing bottom-of-funnel software evaluation searches.", icon: "cloud" },
      { name: "E-Commerce Stores", desc: "Product category and high-intent buying keyword rankings.", icon: "shopping_bag" },
      { name: "Medical & Health Clinics", desc: "Local patient search, condition guides, and map pack dominance.", icon: "medical_services" },
      { name: "Legal & Law Practices", desc: "High-value litigation, corporate counsel, and practice area keywords.", icon: "gavel" },
      { name: "Real Estate & Brokerages", desc: "Localized property search, neighborhood guides, and listings.", icon: "apartment" },
      { name: "FinTech & Financial Advisory", desc: "Compliance-safe financial education and calculator keyword rankings.", icon: "account_balance" }
    ],
    hireBenefits: [
      { title: "Strict White-Hat Practices", desc: "100% compliant with Google Search essentials and spam policies.", icon: "verified" },
      { title: "Engineer-Led Optimization", desc: "Our SEO specialists write code and implement technical fixes directly.", icon: "code" },
      { title: "Topical Authority Focus", desc: "We build complete content clusters that position you as the definitive leader.", icon: "psychology" },
      { title: "Transparent Position Reports", desc: "Real-time dashboards tracking every keyword change and organic click.", icon: "analytics" },
      { title: "Sustainable Long-Term ROI", desc: "Compounding organic traffic that keeps lowering your customer acquisition cost.", icon: "trending_up" },
      { title: "No Black-Box Promises", desc: "Clear weekly documentation of every change, link, and article published.", icon: "fact_check" }
    ],
    technologies: [
      { name: "Ahrefs", role: "Backlink & Gap Intel", category: "SEO" },
      { name: "SEMrush", role: "Keyword Tracking", category: "SEO" },
      { name: "Google Search Console", role: "Crawl Telemetry", category: "Analytics" },
      { name: "Screaming Frog", role: "Crawler Spider", category: "Audit" },
      { name: "SurferSEO", role: "Content NLP", category: "Content" },
      { name: "Schema.org", role: "Structured Data", category: "Code" }
    ],
    faqs: [
      { q: "How long does it take to see rankings improve with SEO?", a: "Technical and on-page fixes often show ranking improvements within 3 to 6 weeks. Significant competitive keyword moves and domain authority growth generally compound over 3 to 6 months." },
      { q: "Do you guarantee #1 ranking on Google?", a: "No ethical agency can guarantee specific #1 positions because search algorithms constantly evolve. We guarantee proven white-hat methodologies, technical perfection, and verifiable traffic growth." },
      { q: "How is technical SEO different from content SEO?", a: "Technical SEO ensures search engines can crawl, render, and index your website instantly without errors. Content SEO ensures the text itself satisfies the user's search query better than any competitor." }
    ],
    stats: [
      { value: "+210%", label: "Average Organic Traffic Growth" },
      { value: "98/100", label: "Average Core Web Vitals Score" },
      { value: "450+", label: "Top 3 Keywords Achieved" },
      { value: "100%", label: "White-Hat Compliant" }
    ]
  },

  // 6. Google Ads & Meta Ads
  {
    id: "google-meta-ads",
    slug: "google-meta-ads",
    aliases: ["ppc-advertising"],
    title: "Google Ads & Meta Ads",
    heroHeadline: "Hyper-Targeted Paid Acquisition with Proven Positive ROAS",
    tagline: "Turn ad spend into predictable revenue across Google Search, Performance Max, Instagram, and Facebook.",
    shortDesc: "Precision-targeted paid advertising campaigns across Google Search, Performance Max, Instagram, and Facebook yielding high ROAS.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    badge: "High ROAS",
    icon: "ads_click",
    subServicesTitle: "Our Paid Media Advertising Services",
    subServices: [
      {
        title: "Google Search & Shopping (PMax)",
        desc: "Capturing high-intent users actively searching for your solutions with surgical bidding.",
        icon: "search",
        points: ["Negative keyword filtering", "Quality Score improvement", "Dynamic ad copy variations"]
      },
      {
        title: "Meta Ads (Facebook & Instagram)",
        desc: "High-retention visual creative testing targeting interest, demographic, and lookalike cohorts.",
        icon: "share",
        points: ["Creative fatigue cycling", "Video hook testing", "Broad targeting algorithms"]
      },
      {
        title: "Conversion API & Server-Side Tracking",
        desc: "First-party data tracking bypassing iOS 14+ cookie blocking for 99% data accuracy.",
        icon: "verified_user",
        points: ["Meta CAPI webhooks", "Google Enhanced Conversions", "Server GTM setup"]
      },
      {
        title: "Audience Retargeting & Lookalikes",
        desc: "Multi-step retargeting sequences reminding warm visitors to complete signup or purchase.",
        icon: "sync",
        points: ["Cart abandoner incentives", "High-LTV lookalike audiences", "Sequential storytelling ads"]
      },
      {
        title: "Landing Page Split-Testing (CRO)",
        desc: "Dedicated conversion landing pages built to maximize paid traffic signup rates.",
        icon: "web",
        points: ["Zero-friction form design", "Visual hierarchy testing", "Mobile-first load times"]
      },
      {
        title: "Attribution Modeling & Weekly Tuning",
        desc: "Transparent attribution modeling showing real CAC, cost per demo, and revenue return.",
        icon: "insights",
        points: ["Real ROAS calculations", "Daily budget pacing", "Live Looker Studio reports"]
      }
    ],
    overview: [
      "Burning cash on ads without granular tracking or creative iteration is the fastest way to drain capital. At Solvexa, our media buyers operate with scientific rigor: daily bid management, aggressive A/B testing of angles, and server-side tracking.",
      "We build integrated funnels where Google captures users with active intent, while Meta nurtures and scales brand awareness, producing compounded returns on every ad dollar deployed."
    ],
    whatsIncluded: [
      "Account Restructure & Conversion Tracking Setup",
      "Full Copywriting & Video Creative Assets",
      "Server-Side Meta CAPI & Google Enhanced Tracking",
      "Daily Bid Tuning & Negative Keyword Maintenance",
      "A/B Split-Tested Conversion Landing Pages",
      "Weekly Strategic Sync & Real-Time Looker Dashboard"
    ],
    process: [
      { step: "01", title: "Tracking & Pixel Audit", desc: "Verifying conversion triggers, offline events, and pixel firing health.", deliverables: "Tracking Audit & Implementation Plan" },
      { step: "02", title: "Creative & Copy Sprint", desc: "Producing 10+ ad creative hooks, angles, and headline variations.", deliverables: "Ad Creative Vault for Approval" },
      { step: "03", title: "Account Architecture", desc: "Structuring campaign hierarchy (Search, PMax, Top-of-Funnel, Retargeting).", deliverables: "Configured Campaign Accounts" },
      { step: "04", title: "Testing Phase (Days 1-14)", desc: "Gathering statistical data on lowest cost-per-click and highest converting cohorts.", deliverables: "Initial Cohort Performance Matrix" },
      { step: "05", title: "Scaling Winners", desc: "Pumping budget into proven creative and audience winners while cutting underperformers.", deliverables: "Scaling Budget Allocation" },
      { step: "06", title: "Continuous Creative Refresh", desc: "Introducing fresh creatives weekly to prevent fatigue and maintain ROAS.", deliverables: "Weekly Performance Reports" }
    ],
    industries: [
      { name: "Direct-to-Consumer (DTC)", desc: "High-velocity catalog ads, dynamic retargeting, and unboxing reels.", icon: "shopping_cart" },
      { name: "B2B SaaS & Tech", desc: "Book-a-demo funnels, whitepaper leads, and enterprise decision makers.", icon: "cloud" },
      { name: "High-Ticket Services", desc: "Legal, real estate, and financial consulting lead generation.", icon: "business_center" },
      { name: "Healthcare & Clinics", desc: "Patient appointment bookings and localized treatment ads.", icon: "medical_services" },
      { name: "Home Services & Trades", desc: "High-intent emergency calls and localized quote requests.", icon: "home_repair_service" },
      { name: "Education & Coaching", desc: "Webinar funnels, masterclasses, and cohort enrollments.", icon: "school" }
    ],
    hireBenefits: [
      { title: "Direct ROAS Focus", desc: "We track pipeline revenue and profit, not superficial vanity impressions.", icon: "monetization_on" },
      { title: "In-House Creative Studio", desc: "Motion designers and copywriters creating fresh ad assets constantly.", icon: "palette" },
      { title: "Server-Side Tracking", desc: "99% attribution accuracy resistant to iOS 14 and third-party cookie bans.", icon: "security" },
      { title: "100% Account Ownership", desc: "Your ad accounts, your billing, your data. Complete transparency.", icon: "lock_open" },
      { title: "Daily Bid Optimization", desc: "Active monitoring to avoid budget burn during low-conversion windows.", icon: "tune" },
      { title: "Bi-Weekly Strategy Calls", desc: "Clear reviews of customer acquisition cost and upcoming promotional launches.", icon: "event" }
    ],
    technologies: [
      { name: "Google Ads", role: "Search & PMax", category: "Ads" },
      { name: "Meta Ads Manager", role: "Social Campaigns", category: "Ads" },
      { name: "Google Tag Manager", role: "Server Tracking", category: "Analytics" },
      { name: "Meta CAPI", role: "Server Tracking", category: "Analytics" },
      { name: "Looker Studio", role: "Reporting", category: "BI" },
      { name: "Hotjar", role: "Landing Page CRO", category: "CRO" }
    ],
    faqs: [
      { q: "What is the recommended minimum ad budget to get started?", a: "We typically recommend a minimum ad spend of $1,500 to $3,000 per month on ad platforms to gather sufficient conversion data and scale winning creatives effectively." },
      { q: "Who owns the ad accounts and creative assets?", a: "You own 100% of all ad accounts, tracking pixels, and creative deliverables. Solvexa operates as an authorized agency manager." },
      { q: "How quickly do paid ads generate leads?", a: "Google Search ads can start driving qualified leads within 24 to 48 hours of launch. Meta campaigns typically exit the learning phase within 5 to 7 days." }
    ],
    stats: [
      { value: "4.4x", label: "Average Client ROAS" },
      { value: "$3M+", label: "Ad Spend Managed" },
      { value: "-35%", label: "Average CAC Reduction" },
      { value: "99%", label: "Attribution Accuracy" }
    ]
  },

  // 7. Branding & Logo Design
  {
    id: "branding",
    slug: "branding-logo",
    aliases: ["branding-logo-design"],
    title: "Branding & Logo Design",
    heroHeadline: "Iconic Visual Identities That Command Market Authority",
    tagline: "Complete identity systems that make your business unforgettable.",
    shortDesc: "Command market authority with bespoke vector identity marks, comprehensive brand guidelines, color systems, and 3D kinetic reveals.",
    heroImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    badge: "Identity Systems",
    icon: "auto_awesome",
    subServicesTitle: "Our Custom Branding & Identity Services",
    subServices: [
      {
        title: "Bespoke Logo Mark Design",
        desc: "Custom vector geometry, wordmarks, and responsive lockups designed to work from favicon to billboard.",
        icon: "draw",
        points: ["Golden-ratio geometry", "Monogram & icon marks", "Horizontal & stacked lockups"]
      },
      {
        title: "Color Harmony & Token Architecture",
        desc: "Scientifically balanced primary, secondary, and accent palettes calibrated for digital UI and CMYK print.",
        icon: "colorize",
        points: ["Accessible contrast standards", "Dark/light mode variations", "Exact Pantone matching"]
      },
      {
        title: "Typography System & Hierarchy",
        desc: "Curated font pairings with strict scales for headlines, subheadings, body copy, and UI captions.",
        icon: "format_size",
        points: ["Commercial font licenses", "Webfont font-face rules", "Kerning & letter-spacing specs"]
      },
      {
        title: "Comprehensive Brand Guidelines Book",
        desc: "A definitive 40+ page brand manual detailing logo clearspace, forbidden treatments, and tone of voice.",
        icon: "menu_book",
        points: ["Usage rules & spacing", "Tone & messaging guide", "Co-branding standards"]
      },
      {
        title: "Corporate Collateral & Stationery",
        desc: "Print-ready business cards, letterheads, presentation slide decks, and digital social media kits.",
        icon: "badge",
        points: ["Pitch deck templates", "Vector business cards", "Social profile header banners"]
      },
      {
        title: "3D Motion Logo Reveal Animations",
        desc: "Cinematic 3D kinetic animations that introduce your brand across video showcases, podcasts, and pitch decks.",
        icon: "animation",
        points: ["4K Ultra-HD motion stingers", "Spatial sound design", "Transparent alpha video export"]
      }
    ],
    overview: [
      "Your brand is the immediate visual and emotional perception people have of your business. In a crowded marketplace, generic branding signals amateur execution. Solvexa crafts distinctive, luxury-grade brand systems that establish instant trust and command premium pricing.",
      "We combine strategic market positioning with meticulous vector craftsmanship. Every curve, font weight, and color choice is engineered with intention."
    ],
    whatsIncluded: [
      "Master Vector Logo Suite (AI, EPS, SVG, PDF, transparent PNG)",
      "Comprehensive 50+ Page Digital Brand Guidelines PDF",
      "Typography Suite with Licensed Web & Desktop Fonts",
      "Executive Stationery Kit (Business cards, Letterheads, Envelopes)",
      "Social Media Identity Pack (Avatars, Banner templates, Post mockups)",
      "Full Intellectual Property Transfer & Commercial Copyright"
    ],
    process: [
      { step: "01", title: "Brand Archetype Discovery", desc: "Interviewing stakeholders to define tone, mission, and competitor differentiation.", deliverables: "Brand Positioning & Moodboard Deck" },
      { step: "02", title: "Conceptual Sketching", desc: "Exploring 3 distinct creative logo directions with varying visual metaphors.", deliverables: "3 Comprehensive Brand Concept Decks" },
      { step: "03", title: "Vector Precision & Refinement", desc: "Refining chosen concept with mathematical geometry and optical kerning.", deliverables: "Refined Vector Lockup Drafts" },
      { step: "04", title: "Typography & Color Architecture", desc: "Finalizing color palettes, digital tokens, and headline pairings.", deliverables: "Master Color & Typography Spec" },
      { step: "05", title: "Collateral & Guidelines Assembly", desc: "Applying the brand to stationery, pitch decks, and assembling the manual.", deliverables: "50-Page Brand Manual PDF" },
      { step: "06", title: "Final Asset Archive Delivery", desc: "Packaging all vector files, high-res PNGs, and font files for team usage.", deliverables: "Complete Brand Asset Master ZIP" }
    ],
    industries: [
      { name: "Luxury & Lifestyle", desc: "High-end jewelry, luxury automotive, and bespoke fashion houses.", icon: "spa" },
      { name: "Technology & AI", desc: "Cybersecurity, neural networks, and deep tech ventures.", icon: "memory" },
      { name: "Venture Capital & Finance", desc: "Institutional private equity, hedge funds, and boutique advisories.", icon: "account_balance_wallet" },
      { name: "Hospitality & Architecture", desc: "Boutique hotels, architectural practices, and fine dining.", icon: "villa" },
      { name: "Health & Biotechnology", desc: "Pharmaceutical laboratories, wellness brands, and clinics.", icon: "biotech" },
      { name: "Gaming & Entertainment", desc: "Interactive media studios, esports teams, and content creators.", icon: "sports_esports" }
    ],
    hireBenefits: [
      { title: "100% Bespoke Geometry", desc: "No generic templates or AI generation — every mark is hand-crafted.", icon: "brush" },
      { title: "Unlimited Concept Iteration", desc: "We collaborate closely until you are completely confident in the mark.", icon: "published_with_changes" },
      { title: "Complete IP Ownership", desc: "Full commercial copyright transferred unconditionally upon sign-off.", icon: "verified_user" },
      { title: "Production-Ready Vectors", desc: "Optimized SVG files ready for web developers and print shops.", icon: "picture_as_pdf" },
      { title: "3D Animation Included", desc: "A cinematic 4K motion logo stinger ready for your video intro.", icon: "movie_creation" },
      { title: "Pitch Deck Templates", desc: "Professionally designed slide master layouts matching your brand.", icon: "slideshow" }
    ],
    technologies: [
      { name: "Adobe Illustrator", role: "Vector Art", category: "Design" },
      { name: "Photoshop", role: "Mockups", category: "Design" },
      { name: "After Effects", role: "3D Motion", category: "Motion" },
      { name: "InDesign", role: "Brand Books", category: "Print" },
      { name: "Cinema 4D", role: "Spatial 3D", category: "3D" },
      { name: "Figma", role: "Digital Tokens", category: "UI" }
    ],
    faqs: [
      { q: "How many logo concepts do you present initially?", a: "We deliver 3 to 4 distinct creative concepts, each accompanied by realistic mockups (signage, stationery, mobile screens) so you see how the identity works in the real world." },
      { q: "Who owns the rights to the logo and brand assets?", a: "You own 100% of all intellectual property, vector files, and trademarks upon final payment." },
      { q: "What if our team needs custom packaging or physical swag designed?", a: "We provide complete print-ready packaging, corporate swag, apparel, and signage layouts as part of our full brand identity engagements." }
    ],
    stats: [
      { value: "80+", label: "Brand Identities Created" },
      { value: "100%", label: "Client Satisfaction" },
      { value: "40+", label: "Pages per Brand Book" },
      { value: "5/5", label: "Client Review Score" }
    ]
  },

  // 8. Video Editing & Motion Graphics
  {
    id: "video-motion",
    slug: "video-motion-graphics",
    aliases: ["video-editing-motion"],
    title: "Video Editing & Motion Graphics",
    heroHeadline: "Cinematic Visual Storytelling & High-Retention Motion Graphics",
    tagline: "Commercial video editing, dynamic reels, and 3D kinetic animations that captivate.",
    shortDesc: "Cinematic commercial video post-production, dynamic viral social reels, 3D motion stingers, and Hollywood-grade DaVinci color grading.",
    heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    badge: "Cinematic",
    icon: "movie_creation",
    subServicesTitle: "Our Custom Video & Motion Services",
    subServices: [
      {
        title: "Commercial & Corporate Showcases",
        desc: "High-production brand documentaries, product launch films, and investor highlight reels.",
        icon: "videocam",
        points: ["4K HDR mastering", "Narrative scripting", "Professional voiceover sync"]
      },
      {
        title: "High-Retention Social Video Reels",
        desc: "Fast-paced TikTok, Instagram Reels, and YouTube Shorts edited with kinetic text and sound effects.",
        icon: "smart_display",
        points: ["Hook retention pacing", "Dynamic captions", "Trending audio sync"]
      },
      {
        title: "2D & 3D Logo Reveal Animations",
        desc: "Cinematic animated ident reveals with custom particle physics, volumetric light, and sound design.",
        icon: "animation",
        points: ["Cinema 4D / Blender", "Specular reflections", "Custom audio logo sting"]
      },
      {
        title: "Animated Product Explainer Demos",
        desc: "Engaging 2D vector and 3D explainer animations simplifying complex software functionality.",
        icon: "play_circle",
        points: ["Vector character animation", "UI screencast simulation", "Step-by-step walkthroughs"]
      },
      {
        title: "Hollywood-Grade Color Grading",
        desc: "DaVinci Resolve color development turning standard raw camera profiles into cinematic film looks.",
        icon: "color_lens",
        points: ["LUT creation", "Skin-tone precision", "Atmospheric contrast control"]
      },
      {
        title: "Sound Design & Audio Mastering",
        desc: "Foley sound effects, ambient atmospheric audio, and loudness mastering conforming to broadcast standards.",
        icon: "volume_up",
        points: ["Audio cleanup & noise removal", "Dynamic sound effects", "-14 LUFS standard mastering"]
      }
    ],
    overview: [
      "In the modern attention economy, static content is easily ignored. Video is the single most effective medium for communicating value, driving emotional engagement, and accelerating conversions.",
      "Solvexa's post-production team combines cinematic pacing with high-impact motion graphics to ensure your videos captivate audiences from the opening second."
    ],
    whatsIncluded: [
      "4K Ultra-HD & Full HD Multi-Format Master Exports",
      "Aspect Ratios: 16:9 (YouTube), 9:16 (Reels/TikTok), 1:1 (Social)",
      "Custom Kinetic Typography & Subtitle Burn-In",
      "Licensed Commercial Background Music & Sound Effects",
      "Professional DaVinci Resolve Color Grade",
      "Revisions Until Absolute Satisfaction"
    ],
    process: [
      { step: "01", title: "Creative Brief & Storyboard", desc: "Defining pacing, visual style, music tone, and narrative milestones.", deliverables: "Storyboard Deck & Music Direction" },
      { step: "02", title: "Assembly Cut", desc: "Rough editing of raw clips synchronized to music tempo and voiceover.", deliverables: "Draft 1 Preview Link" },
      { step: "03", title: "Motion Graphics & Kinetic Text", desc: "Injecting animated overlays, lower thirds, callouts, and transitions.", deliverables: "Draft 2 with Motion Graphics" },
      { step: "04", title: "Color Grading & Audio Master", desc: "Color timing in DaVinci Resolve, dialogue cleanup, and Foley sound design.", deliverables: "Color & Audio Mastered Preview" },
      { step: "05", title: "Multi-Format Export", desc: "Exporting high-bitrate MP4 and ProRes files in 16:9, 9:16, and 1:1.", deliverables: "Final 4K Master Deliverable Archive" }
    ],
    industries: [
      { name: "Consumer Brands", desc: "High-energy product showcases and lifestyle reels.", icon: "shopping_cart" },
      { name: "Tech & SaaS", desc: "Feature explainer animations and product launch videos.", icon: "computer" },
      { name: "Creators & Influencers", desc: "YouTube video editing and vertical short-form retention optimization.", icon: "person" },
      { name: "Real Estate", desc: "Cinematic drone fly-throughs and luxury estate tours.", icon: "home" },
      { name: "Music & Entertainment", desc: "Music video post-production and teaser trailers.", icon: "music_note" },
      { name: "Corporate & B2B", desc: "Company culture showcases, client video testimonials, and conference intros.", icon: "corporate_fare" }
    ],
    hireBenefits: [
      { title: "Turn Raw Clips into Gold", desc: "Send us raw footage from phones or cameras and receive polished videos.", icon: "auto_fix_high" },
      { title: "Retention-First Editing", desc: "Hooks and transitions engineered specifically to avoid scroll-away.", icon: "hourglass_top" },
      { title: "Fast 48-Hour Turnarounds", desc: "Rapid delivery on social reels and shorts to maintain content velocity.", icon: "speed" },
      { title: "Commercial Music Library", desc: "Access to thousands of licensed tracks with zero copyright strikes.", icon: "library_music" },
      { title: "Dedicated Video Editor", desc: "Work directly with an editor who understands your brand's visual identity.", icon: "support_agent" },
      { title: "4K Master Delivery", desc: "High-bitrate ProRes and H.265 files ready for web, TV, or social feeds.", icon: "hd" }
    ],
    technologies: [
      { name: "Premiere Pro", role: "NLE Editing", category: "Video" },
      { name: "After Effects", role: "Motion & VFX", category: "Motion" },
      { name: "DaVinci Resolve", role: "Color Grading", category: "Color" },
      { name: "Blender", role: "3D Animation", category: "3D" },
      { name: "Adobe Audition", role: "Audio Cleanup", category: "Audio" }
    ],
    faqs: [
      { q: "What footage do we need to provide?", a: "You can provide raw video recorded on camera or smartphone via Google Drive or Dropbox. We can also source licensed stock footage and construct motion graphics from scratch." },
      { q: "Can you create videos in both horizontal and vertical formats?", a: "Yes, every video project can be exported in 16:9 for YouTube and website embeds, as well as 9:16 vertical for Instagram Reels and TikTok." },
      { q: "Do you provide voiceovers and music?", a: "Yes, we handle professional human voiceovers in multiple accents and license commercial background audio tracks included in the project price." }
    ],
    stats: [
      { value: "350+", label: "Videos Edited & Produced" },
      { value: "15M+", label: "Combined Video Views" },
      { value: "48 hrs", label: "Average Short Turnaround" },
      { value: "4K UHD", label: "Standard Export Resolution" }
    ]
  },

  // 9. MVP Development
  {
    id: "mvp-dev",
    slug: "mvp-development",
    title: "MVP Development",
    heroHeadline: "From Vision to Working Production Prototype in 4 Weeks",
    tagline: "Validate your startup idea fast with production-grade engineering.",
    shortDesc: "Transform startup concepts into production-ready clickable and functional software in 4 weeks, primed for investor demos and early users.",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    badge: "Speed to Market",
    icon: "rocket_launch",
    subServicesTitle: "Our MVP Development Services",
    subServices: [
      {
        title: "Product Scope & MoSCoW Prioritization",
        desc: "Cutting non-essential features to zero in on the single core value loop that users will pay for.",
        icon: "tune",
        points: ["Core feature scoping", "User journey simplification", "Sprint milestone mapping"]
      },
      {
        title: "Clickable Investor Pitch Prototype",
        desc: "High-fidelity interactive prototype ready to demonstrate to angel investors, incubators, and prospective clients.",
        icon: "preview",
        points: ["Realistic demo data", "Figma clickable flows", "Pitch deck slide embeds"]
      },
      {
        title: "Rapid Full-Stack Production Build",
        desc: "Deploying battle-tested Next.js, Supabase, and Tailwind building blocks to ship production code in weeks.",
        icon: "speed",
        points: ["Auth & session management", "Stripe payment integration", "PostgreSQL database"]
      },
      {
        title: "Third-Party API & AI Integrations",
        desc: "Connecting OpenAI / Anthropic LLM models, SendGrid, Twilio, and Stripe webhooks seamlessly.",
        icon: "integration_instructions",
        points: ["OpenAI API streaming", "Automated email triggers", "Webhook error retries"]
      },
      {
        title: "Telemetry & Cohort Analytics Setup",
        desc: "PostHog and Mixpanel integration to track retention loops, activation rates, and drop-off points.",
        icon: "analytics",
        points: ["Event tracking setup", "Funnel analytics", "Session replay recording"]
      },
      {
        title: "V1.0 Launch & Post-Launch Support",
        desc: "Deploying to live production with domain setup, SSL, error logging, and bug warranty.",
        icon: "verified",
        points: ["Vercel production deploy", "Sentry error monitoring", "30-day bug warranty"]
      }
    ],
    overview: [
      "For startups, speed to market is life or death. Spending six months building a sprawling software suite without real user validation is the most common reason early ventures fail.",
      "Solvexa helps founders scope, design, and ship functional Minimum Viable Products in 4 to 6 weeks. We build on clean, scalable foundations (Next.js, TypeScript, PostgreSQL) so your MVP becomes the foundation for version 2.0 without requiring a total rewrite."
    ],
    whatsIncluded: [
      "Product Specification & Core Feature MoSCoW Document",
      "Interactive High-Fidelity Clickable Prototype in Figma",
      "Production-Ready Full-Stack Web or Mobile Application",
      "Authentication, User Roles & Secure Database Schema",
      "Stripe or Paddle Automated Payment & Subscription Checkout",
      "Comprehensive Codebase Repository with 100% IP Ownership"
    ],
    process: [
      { step: "01", title: "Value Scoping Sprint", desc: "Defining the core user loop and stripping out feature bloat.", deliverables: "1-Page Feature Scope & Architecture Plan" },
      { step: "02", title: "Rapid UX Prototyping", desc: "Designing all key user screens in Figma within 5 business days.", deliverables: "Clickable Figma Investor Prototype" },
      { step: "03", title: "High-Velocity Build", desc: "Building frontend and backend simultaneously using modular components.", deliverables: "Live Staging App with Auth & Database" },
      { step: "04", title: "Payment & API Integration", desc: "Connecting Stripe checkout, email webhooks, and third-party APIs.", deliverables: "Working Checkout & User Onboarding" },
      { step: "05", title: "Production Launch", desc: "Deploying to live production and configuring real-time telemetry.", deliverables: "Live V1.0 Launch to First 100 Users" }
    ],
    industries: [
      { name: "AI Startups", desc: "LLM agent interfaces, prompt workflows, and automated reasoning tools.", icon: "smart_toy" },
      { name: "FinTech & Neobanks", desc: "Micro-lending prototypes, expense splitters, and crypto dashboards.", icon: "savings" },
      { name: "Marketplaces", desc: "Two-sided buyer/seller platforms with escrow and messaging.", icon: "store" },
      { name: "Health & Wellness", desc: "Patient intake wizards, habit tracking apps, and provider portals.", icon: "favorite" },
      { name: "SaaS Productivity", desc: "Task management tools, workflow automations, and team hubs.", icon: "check_circle" }
    ],
    hireBenefits: [
      { title: "4-Week Delivery Sprint", desc: "Go from concept napkin to live production in 30 days.", icon: "timer" },
      { title: "No Throwaway Code", desc: "Built with production TypeScript and Next.js so you scale seamlessly.", icon: "code" },
      { title: "Investor Demo Ready", desc: "Impress angel investors and accelerators with a sleek, working product.", icon: "trending_up" },
      { title: "Fixed Price & Scope", desc: "Predictable upfront pricing with zero scope creep surprises.", icon: "price_check" },
      { title: "Full Code Ownership", desc: "100% repository rights transferred immediately upon project completion.", icon: "verified_user" }
    ],
    technologies: [
      { name: "Next.js", role: "Framework", category: "Full-Stack" },
      { name: "Supabase", role: "Auth & DB", category: "Backend" },
      { name: "TypeScript", role: "Type Safety", category: "Core" },
      { name: "TailwindCSS", role: "Design Engine", category: "Frontend" },
      { name: "Stripe", role: "Payments", category: "Finance" },
      { name: "Vercel", role: "Edge Hosting", category: "Cloud" }
    ],
    faqs: [
      { q: "How long does an MVP build take from start to finish?", a: "Our streamlined MVP sprint typically takes 3 to 6 weeks depending on third-party API dependencies and database complexity." },
      { q: "Can the MVP code be kept when we raise investment and scale?", a: "Yes! We build with production-grade TypeScript, Next.js, and relational databases. Your MVP code serves as the durable foundation for your future engineering team." },
      { q: "What is included in the MVP package?", a: "You receive user authentication, relational database, responsive UI/UX, payment processing, transactional emails, and deployment to production." }
    ],
    stats: [
      { value: "4 Weeks", label: "Average Delivery Sprint" },
      { value: "$12M+", label: "Raised by Clients Post-MVP" },
      { value: "28+", label: "MVPs Shipped to Date" },
      { value: "100%", label: "On-Time Launch Record" }
    ]
  },

  // 10. Shopify Development
  {
    id: "shopify-dev",
    slug: "shopify-development",
    title: "Shopify Development",
    heroHeadline: "High-Converting Shopify & Shopify Plus E-Commerce Storefronts",
    tagline: "Custom Liquid themes, headless Hydrogen stores, and checkout optimizations that drive sales.",
    shortDesc: "Create high-converting, customized Shopify stores that enhance your e-commerce experience and drive sales.",
    heroImage: "https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    badge: "E-Commerce",
    icon: "shopping_bag",
    subServicesTitle: "Our Custom Shopify Development Services",
    subServices: [
      {
        title: "Bespoke Shopify Theme Engineering",
        desc: "Clean, zero-bloat Liquid theme development engineered for sub-second page loads and mobile conversions.",
        icon: "brush",
        points: ["Liquid 2.0 architecture", "Modular section blocks", "Mobile-first checkout flows"]
      },
      {
        title: "Headless Shopify & Hydrogen",
        desc: "Cutting-edge React / Next.js frontends powered by Shopify Storefront API for complete creative freedom.",
        icon: "developer_board",
        points: ["Shopify Storefront API", "Hydrogen / Remix framework", "Infinite product filtering"]
      },
      {
        title: "Custom Shopify App Development",
        desc: "Private and public Shopify apps extending admin functionality, custom ERP syncs, and warehouse webhooks.",
        icon: "extension",
        points: ["Shopify Admin GraphQL API", "Automated fulfillment sync", "Custom loyalty reward logic"]
      },
      {
        title: "Checkout & Cart Optimization",
        desc: "Shopify Plus checkout extensions, 1-click upsells, slide-out carts, and payment gateway configuration.",
        icon: "shopping_cart_checkout",
        points: ["Shopify Functions discounts", "Slide cart cross-sells", "Multi-currency localized checkout"]
      },
      {
        title: "Platform Migration to Shopify",
        desc: "Zero-data-loss migration from WooCommerce, Magento, or BigCommerce including order and customer histories.",
        icon: "swap_horiz",
        points: ["301 redirect mapping", "Customer password handling", "SKU & inventory data mapping"]
      },
      {
        title: "Performance & Conversion Audit",
        desc: "Audit app overhead, eliminate redundant scripts, and achieve 90+ Google Lighthouse performance scores.",
        icon: "speed",
        points: ["App bloat elimination", "WebP image optimization", "Core Web Vitals tuning"]
      }
    ],
    overview: [
      "A cookie-cutter Shopify template loaded with 30 competing apps creates a sluggish store that hemorrhages conversions. At Solvexa, we engineer tailored Shopify architectures that combine clean custom Liquid code with high-intent UX design.",
      "Whether you are launching an ambitious DTC brand or migrating an enterprise store with 50,000 SKUs to Shopify Plus, our certified Shopify developers guarantee seamless inventory synchronization, reliable checkout, and blisteringly fast load times."
    ],
    whatsIncluded: [
      "Custom Shopify 2.0 Theme Engineered from Figma Designs",
      "Full Mobile UX & Slide-Out Cart Cross-Sell System",
      "Shopify Storefront GraphQL Integration",
      "Automated Shipping, Tax & Payment Gateway Configuration",
      "Catalog Data Migration with 301 SEO Redirects",
      "30-Day Post-Launch SLA & Bug Warranty"
    ],
    process: [
      { step: "01", title: "Store Architecture & UX", desc: "Auditing catalog taxonomy, customer paths, and conversion friction.", deliverables: "E-Commerce Wireframe & Store Spec" },
      { step: "02", title: "Custom Figma Design", desc: "Crafting bespoke desktop and mobile e-commerce screens.", deliverables: "Full Shopify UI Design in Figma" },
      { step: "03", title: "Liquid & Section Coding", desc: "Developing custom modular sections inside Shopify Theme 2.0.", deliverables: "Private Shopify Preview Store" },
      { step: "04", title: "App & Payment Integration", desc: "Integrating Klaviyo, reviews, ERP webhooks, and payment gateways.", deliverables: "Functional E-Commerce Testing Store" },
      { step: "05", title: "Data Migration & QA", desc: "Migrating products, customer records, order history, and setting 301 redirects.", deliverables: "Data Verification Sign-Off" },
      { step: "06", title: "Launch & Go-Live", desc: "Zero-downtime DNS cutover, live test purchases, and speed verification.", deliverables: "Live Shopify Store & Staff Training" }
    ],
    industries: [
      { name: "Apparel & Luxury Fashion", desc: "Lookbook layouts, size recommendation calculators, and color swatch variants.", icon: "checkroom" },
      { name: "Health & Beauty (Cosmetics)", desc: "Subscription refills, bundle builders, and customer review showcases.", icon: "spa" },
      { name: "Electronics & Tech Gear", desc: "Interactive tech spec comparisons, warranty add-ons, and manuals.", icon: "devices" },
      { name: "Food & Beverage", desc: "Perishable delivery scheduling, multi-pack bundles, and regional tax rules.", icon: "restaurant" },
      { name: "Home & Interior Decor", desc: "High-resolution zoom visualizers, room mockups, and dimensional guides.", icon: "chair" },
      { name: "Sports & Outdoor Equipment", desc: "Heavy item freight calculation, gear selector wizards, and warranty registration.", icon: "sports_tennis" }
    ],
    hireBenefits: [
      { title: "Zero App Bloat", desc: "We code custom features directly into Liquid, saving thousands in monthly app fees.", icon: "savings" },
      { title: "Sub-Second Load Times", desc: "Optimized asset delivery ensuring users never bounce due to laggy pages.", icon: "bolt" },
      { title: "Shopify Plus Experts", desc: "Experience with checkout extensions, scripts, and multi-store international expansion.", icon: "verified" },
      { title: "Complete SEO Preservation", desc: "Rigorous 301 redirects ensuring your existing organic Google rankings remain intact.", icon: "shield" },
      { title: "Conversion-Centric UX", desc: "Slide carts, sticky checkout buttons, and dynamic upsells that lift AOV.", icon: "trending_up" },
      { title: "Full Admin Handover", desc: "Intuitive theme customization controls allowing your non-technical team to edit content.", icon: "admin_panel_settings" }
    ],
    technologies: [
      { name: "Shopify Liquid", role: "Template Engine", category: "Core" },
      { name: "Shopify Plus", role: "Enterprise Tier", category: "Platform" },
      { name: "Hydrogen / React", role: "Headless Frontend", category: "Headless" },
      { name: "GraphQL API", role: "Storefront Data", category: "API" },
      { name: "TailwindCSS", role: "Styling", category: "Frontend" },
      { name: "Klaviyo", role: "Email & Retention", category: "Marketing" }
    ],
    faqs: [
      { q: "Can you migrate our store from WooCommerce or Magento without losing orders?", a: "Yes. We execute automated and verified database migrations that migrate all historical customers, order records, SKUs, and establish 301 URL redirects so your Google rankings don't drop." },
      { q: "Do you build headless Shopify stores using Next.js or Hydrogen?", a: "Yes. For brands requiring bespoke web applications or custom interactive experiences, we build headless storefronts powered by Shopify's GraphQL Storefront API." },
      { q: "Will our marketing team be able to customize page sections easily?", a: "Absolutely. We build modular Shopify Theme 2.0 sections, meaning your marketing team can drag, drop, and edit banner content, text, and images without writing code." }
    ],
    stats: [
      { value: "+38%", label: "Average AOV Increase" },
      { value: "1.2s", label: "Average Mobile Load Time" },
      { value: "50+", label: "Shopify Stores Shipped" },
      { value: "100%", label: "Clean Code Guarantee" }
    ]
  },

  // 11. WordPress Development
  {
    id: "wordpress-dev",
    slug: "wordpress-development",
    title: "WordPress Development",
    heroHeadline: "High-Performance Custom WordPress & WooCommerce Architecture",
    tagline: "Build high-performance websites with WordPress tailored to your brand and business needs.",
    shortDesc: "Build high-performance websites with WordPress tailored to your brand and needs with zero plugin bloat.",
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    badge: "Custom CMS",
    icon: "space_dashboard",
    subServicesTitle: "Our Custom WordPress Development Services",
    subServices: [
      {
        title: "Bespoke Gutenberg Block Themes",
        desc: "Custom WordPress Full Site Editing (FSE) themes using native Gutenberg blocks for intuitive content publishing.",
        icon: "view_quilt",
        points: ["Custom ACF / Gutenberg blocks", "Zero reliance on heavy page builders", "Clean semantic HTML5"]
      },
      {
        title: "WooCommerce Scalable Storefronts",
        desc: "High-volume WooCommerce stores with optimized database indexes, custom checkout flows, and Stripe webhooks.",
        icon: "store",
        points: ["Custom cart & checkout", "High-SKU performance tuning", "Payment & tax integrations"]
      },
      {
        title: "Headless WordPress & REST API",
        desc: "Decoupled WordPress serving as a headless backend feeding Next.js or mobile applications via WPGraphQL.",
        icon: "hub",
        points: ["WPGraphQL endpoints", "Next.js ISR caching", "Ultra-secure decoupled admin"]
      },
      {
        title: "WordPress Security & Hardening",
        desc: "Enterprise hardening protocols, XML-RPC disablers, two-factor auth, and automated malware scanning.",
        icon: "security",
        points: ["Cloudflare WAF integration", "Database prefix masking", "DDoS mitigation"]
      },
      {
        title: "Speed Optimization (90+ Core Web Vitals)",
        desc: "Eliminating plugin bloat, implementing Redis object caching, database query pruning, and CDN setups.",
        icon: "speed",
        points: ["Redis object cache", "CSS/JS tree shaking", "Sub-second server response time"]
      },
      {
        title: "Custom Plugin Development",
        desc: "Tailored PHP plugins built to extend WordPress functionality without relying on vulnerable public plugins.",
        icon: "extension",
        points: ["OOP PHP architecture", "Custom post types & taxonomies", "Strict WordPress coding standards"]
      }
    ],
    overview: [
      "Over 40% of the web is powered by WordPress, but poorly configured sites with 40+ plugins suffer from slow load times, frequent crashes, and security vulnerabilities. Solvexa builds bespoke, high-performance WordPress platforms.",
      "We replace bloated visual builder templates with clean custom Gutenberg blocks, optimized database indexing, and Redis caching. You get an intuitive content editor for your marketing team combined with enterprise-grade speed."
    ],
    whatsIncluded: [
      "Custom WordPress Theme Engineered from Scratch",
      "Full Gutenberg Custom Blocks Library Tailored to Your Brand",
      "WooCommerce or Custom Lead Generation Funnel Integration",
      "Redis Object Caching & Cloudflare Enterprise Speed Setup",
      "Comprehensive Security Hardening & Automated Daily Backups",
      "Full Editor Documentation & Video Walkthrough Training"
    ],
    process: [
      { step: "01", title: "Information Architecture", desc: "Mapping content types, taxonomies, and editor user flows.", deliverables: "Content Model Blueprint" },
      { step: "02", title: "UI/UX Design in Figma", desc: "Designing responsive page templates and dynamic state layouts.", deliverables: "Complete Figma Layout Archive" },
      { step: "03", title: "Custom Theme Engineering", desc: "Writing clean PHP, SCSS, and modular Gutenberg blocks.", deliverables: "Staging WordPress Environment" },
      { step: "04", title: "Performance & Caching", desc: "Configuring Redis object caching, asset minification, and database indexing.", deliverables: "95+ Lighthouse Score Report" },
      { step: "05", title: "Content Migration & QA", desc: "Importing existing posts, media assets, and verifying 301 redirects.", deliverables: "QA Pass Sign-Off" },
      { step: "06", title: "Launch & Security Seal", desc: "DNS cutover, SSL provisioning, and hardening against brute-force attacks.", deliverables: "Live Production Site & Admin Access" }
    ],
    industries: [
      { name: "Publishing & Media Outlets", desc: "High-traffic newsrooms, editorial workflows, and paywall access systems.", icon: "newspaper" },
      { name: "Corporate & Enterprise", desc: "Multi-language portals, investor relations, and compliance disclosures.", icon: "business" },
      { name: "Non-Profit & Philanthropy", desc: "Donation forms, annual report showcases, and volunteer portals.", icon: "volunteer_activism" },
      { name: "Educational Institutions", desc: "Course catalogs, faculty directories, and student application flows.", icon: "school" },
      { name: "Professional Advisory", desc: "Thought leadership articles, case study libraries, and consultation booking.", icon: "work" },
      { name: "Hospitality & Tourism", desc: "Experience reservations, interactive location maps, and multilingual guides.", icon: "travel_explore" }
    ],
    hireBenefits: [
      { title: "No Page Builder Lag", desc: "Zero Elementor or Divi bloat — lightweight custom Gutenberg code that flies.", icon: "speed" },
      { title: "Rock-Solid Security", desc: "Hardened WordPress configurations that withstand brute force and SQL injection attacks.", icon: "security" },
      { title: "Intuitive Publishing", desc: "Non-technical marketing staff can edit text and publish posts with effortless ease.", icon: "edit_note" },
      { title: "Clean Database Schemas", desc: "Optimized wp_posts and postmeta queries that scale to millions of monthly views.", icon: "database" },
      { title: "Full Code Ownership", desc: "No recurring subscription themes — your theme code is 100% yours.", icon: "code" },
      { title: "Strict Coding Standards", desc: "Adherence to official WordPress Coding Standards (WPCS) and PHP 8.2+.", icon: "verified" }
    ],
    technologies: [
      { name: "WordPress 6.7+", role: "Core CMS", category: "CMS" },
      { name: "PHP 8.3", role: "Backend Engine", category: "Backend" },
      { name: "WooCommerce", role: "E-Commerce", category: "E-Commerce" },
      { name: "WPGraphQL", role: "API Protocol", category: "API" },
      { name: "MySQL / MariaDB", role: "Database", category: "Database" },
      { name: "Redis", role: "Object Caching", category: "Performance" }
    ],
    faqs: [
      { q: "Do you use Elementor or pre-made WordPress themes?", a: "No. We build custom, lightweight Gutenberg themes from scratch. This guarantees 95+ performance scores, eliminates plugin conflicts, and keeps your code secure." },
      { q: "Can you optimize our existing slow WordPress website?", a: "Yes. We conduct speed audits, purge redundant database queries, configure Redis caching, optimize images, and optimize server configs to slash load times." },
      { q: "Can WordPress be used headlessly with Next.js?", a: "Yes. We frequently use WordPress as a headless CMS, allowing your content editors to use the familiar WordPress admin while Next.js powers a blazing-fast edge frontend." }
    ],
    stats: [
      { value: "0.5s", label: "Average Server Response Time" },
      { value: "95+", label: "Google PageSpeed Score" },
      { value: "70+", label: "WordPress Sites Delivered" },
      { value: "Zero", label: "Plugin Bloat" }
    ]
  },

  // 12. AI & ML Solutions
  {
    id: "ai-ml",
    slug: "ai-ml-solutions",
    aliases: ["ai-solutions"],
    title: "AI & ML Solutions",
    heroHeadline: "Enterprise Machine Learning Systems & Applied Predictive Intelligence",
    tagline: "Empower your operations with predictive algorithms, computer vision, and intelligent automation.",
    shortDesc: "Empower your operations with predictive machine learning algorithms, computer vision pipelines, NLP models, and enterprise automation.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    badge: "Intelligent Systems",
    icon: "psychology",
    subServicesTitle: "Our Custom AI & Machine Learning Services",
    subServices: [
      {
        title: "Predictive Analytics & Forecasting",
        desc: "Statistical machine learning models that forecast demand, customer churn, revenue projections, and inventory needs.",
        icon: "insights",
        points: ["Time-series forecasting", "Customer churn modeling", "Anomaly detection pipelines"]
      },
      {
        title: "Computer Vision & Visual AI",
        desc: "Object detection, visual quality inspection, OCR document scanning, and facial biometric verification.",
        icon: "visibility",
        points: ["YOLOv8 / OpenCV pipelines", "Defect inspection in manufacturing", "Document text extraction (OCR)"]
      },
      {
        title: "Natural Language Processing (NLP)",
        desc: "Sentiment analysis, multi-lingual translation, entity extraction, and conversational intent routing.",
        icon: "translate",
        points: ["Named Entity Recognition (NER)", "Customer sentiment analytics", "Automated ticket categorization"]
      },
      {
        title: "Intelligent Process Automation",
        desc: "Automating repetitive data extraction, invoice reconciliation, and operational decision branches.",
        icon: "precision_manufacturing",
        points: ["Automated invoice processing", "ERP data synchronization", "Zero-human error loops"]
      },
      {
        title: "Recommendation Engines",
        desc: "Collaborative filtering and deep neural network recommendation systems that lift average order value and user retention.",
        icon: "recommend",
        points: ["Personalized feed generation", "E-commerce product upsells", "Dynamic content ranking"]
      },
      {
        title: "MLOps & Cloud Pipeline Deployment",
        desc: "Production model serving with Docker, FastAPI, Triton Inference Server, and automated retraining pipelines.",
        icon: "cloud_sync",
        points: ["FastAPI microservices", "Model drift monitoring", "GPU autoscaling on AWS / GCP"]
      }
    ],
    overview: [
      "Artificial intelligence is only valuable when it solves concrete business problems: cutting labor hours, predicting churn before it happens, and unlocking insights trapped inside unstructured enterprise data.",
      "Solvexa engineers end-to-end AI/ML pipelines from data ingestion and cleaning to custom model training and production MLOps deployment. We ensure your machine learning models deliver measurable business ROI."
    ],
    whatsIncluded: [
      "Data Feasibility Audit & Problem Framing Document",
      "Cleaned, Validated, and Versioned Dataset Pipeline",
      "Trained & Validated Machine Learning Model Weights",
      "Containerized FastAPI / Triton Inference REST API",
      "Automated Model Drift Monitoring & Retraining Triggers",
      "Full Source Code, Weights, and Architecture Documentation"
    ],
    process: [
      { step: "01", title: "Problem Framing & Data Audit", desc: "Evaluating business objectives, data quality, bias risks, and ROI benchmarks.", deliverables: "AI Feasibility Study & Metric Goals" },
      { step: "02", title: "Data Ingestion & Feature Prep", desc: "Cleaning, normalizing, and feature-engineering historical datasets.", deliverables: "Processed Training & Validation Datasets" },
      { step: "03", title: "Model Architecture & Baseline", desc: "Testing baseline algorithms (XGBoost, Scikit-learn, PyTorch) against targets.", deliverables: "Model Performance Comparison Benchmark" },
      { step: "04", title: "Hyperparameter Tuning", desc: "Fine-tuning weights, cross-validation, and optimizing precision-recall curves.", deliverables: "High-Accuracy Production Model" },
      { step: "05", title: "Inference API Deployment", desc: "Packaging model inside Docker containers with GPU acceleration and REST endpoints.", deliverables: "Live Inference API & Swagger Docs" },
      { step: "06", title: "Drift Monitoring & MLOps", desc: "Setting automated alerts for concept drift and scheduling recurring retraining.", deliverables: "MLOps Dashboard & Maintenance SLA" }
    ],
    industries: [
      { name: "FinTech & Risk Underwriting", desc: "Fraud detection, credit risk scoring, and automated algorithmic signals.", icon: "account_balance" },
      { name: "Manufacturing & Logistics", desc: "Defect inspection on assembly lines, predictive maintenance, and route planning.", icon: "precision_manufacturing" },
      { name: "Healthcare & Diagnostics", desc: "Medical imaging scan analysis, patient risk stratification, and trial data.", icon: "medical_services" },
      { name: "Retail & E-Commerce", desc: "Demand forecasting, dynamic pricing algorithms, and personalized recommendations.", icon: "shopping_bag" },
      { name: "Insurance & Claims", desc: "Damage photo analysis, automated claims processing, and risk assessments.", icon: "verified_user" },
      { name: "Agriculture & Agritech", desc: "Satellite crop yield analysis, soil sensor telemetry, and disease detection.", icon: "eco" }
    ],
    hireBenefits: [
      { title: "Senior AI Scientists", desc: "Engineers with deep foundations in mathematics, statistics, and neural networks.", icon: "school" },
      { title: "Data Security & Privacy", desc: "Your data stays private. We sign strict NDAs and deploy on your private cloud.", icon: "lock" },
      { title: "Production MLOps Focus", desc: "We don't build toys in Jupyter notebooks; we ship hardened production inference APIs.", icon: "rocket_launch" },
      { title: "Predictable Cost Models", desc: "Optimized model quantization that reduces cloud GPU inferencing costs by up to 60%.", icon: "savings" },
      { title: "Explainable AI (XAI)", desc: "Transparent SHAP / LIME visualizations so stakeholders understand model decisions.", icon: "visibility" },
      { title: "Full Model Ownership", desc: "You own 100% of the training code, curated datasets, and final model weights.", icon: "verified" }
    ],
    technologies: [
      { name: "Python", role: "Core Language", category: "Language" },
      { name: "PyTorch", role: "Deep Learning", category: "AI/ML" },
      { name: "TensorFlow", role: "Neural Networks", category: "AI/ML" },
      { name: "Scikit-Learn", role: "Machine Learning", category: "AI/ML" },
      { name: "FastAPI", role: "Inference API", category: "Backend" },
      { name: "Docker", role: "Containerization", category: "DevOps" },
      { name: "PostgreSQL", role: "Vector & Tabular", category: "Database" },
      { name: "AWS SageMaker", role: "Cloud MLOps", category: "Cloud" }
    ],
    faqs: [
      { q: "How much data do we need before we can train an AI model?", a: "It depends on the task. Classical machine learning (churn prediction, tabular classification) can succeed with thousands of rows. Deep learning and computer vision require more data, but transfer learning can dramatically lower requirements." },
      { q: "Can we deploy the AI model on our own private servers?", a: "Yes. All models and inference containers are fully self-hostable on your own AWS, GCP, Azure, or on-premises GPU infrastructure." },
      { q: "How do you prevent hallucinations or inaccurate model predictions?", a: "We apply rigorous cross-validation, out-of-distribution testing, confidence score thresholds, and human-in-the-loop validation fallbacks." }
    ],
    stats: [
      { value: "99.2%", label: "Model Classification Accuracy" },
      { value: "-60%", label: "Inference GPU Cloud Costs" },
      { value: "35+", label: "ML Pipelines Deployed" },
      { value: "100%", label: "Client Model Ownership" }
    ]
  },

  // 13. LLMs & RAG Systems
  {
    id: "llms-rag",
    slug: "llms-rag",
    aliases: ["rag-systems"],
    title: "LLMs & RAG Systems",
    heroHeadline: "Private Retrieval-Augmented Generation & Custom Enterprise LLM Architectures",
    tagline: "Ground frontier AI models in your proprietary enterprise data with zero hallucinations.",
    shortDesc: "Enterprise Retrieval-Augmented Generation systems, vector database indexing, private document embeddings, and context-aware LLM reasoning.",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    badge: "GenAI",
    icon: "neurology",
    subServicesTitle: "Our Custom LLM & RAG Services",
    subServices: [
      {
        title: "Advanced Hybrid RAG Pipelines",
        desc: "Combining dense vector semantic search with sparse BM25 keyword matching and cross-encoder re-ranking.",
        icon: "hub",
        points: ["Dense + Sparse hybrid retrieval", "Cross-encoder re-ranking", "Sub-200ms document retrieval"]
      },
      {
        title: "Proprietary Knowledge Base Indexing",
        desc: "Ingesting complex PDFs, spreadsheets, Notion docs, codebases, and SQL schemas into secure vector databases.",
        icon: "dataset",
        points: ["Context-aware chunking", "OCR table parsing", "Automated re-indexing webhooks"]
      },
      {
        title: "Enterprise Copilots & Chat Interfaces",
        desc: "Sleek Next.js chat interfaces with streaming responses, markdown rendering, and strict citation links to source pages.",
        icon: "chat",
        points: ["Direct page citation links", "Streaming token rendering", "Session memory & thread history"]
      },
      {
        title: "Prompt Engineering & Evaluation Suites",
        desc: "Rigorous automated evaluation testing accuracy, hallucination rates, and prompt injection defense using Ragas.",
        icon: "fact_check",
        points: ["Ragas evaluation benchmarks", "Adversarial prompt testing", "Golden test dataset curation"]
      },
      {
        title: "Self-Hosted Open-Source LLMs",
        desc: "Deploying open-weights models (Llama 3, Mistral, DeepSeek) on private cloud VPCs with vLLM acceleration.",
        icon: "dns",
        points: ["vLLM high-throughput serving", "Zero data leakage to external APIs", "AWQ / GGUF model quantization"]
      },
      {
        title: "Structured Output & JSON Function Calling",
        desc: "Enforcing strict Pydantic JSON schema outputs for seamless downstream API workflows and databases.",
        icon: "code",
        points: ["Guaranteed JSON schema output", "Pydantic data validation", "Deterministic API triggers"]
      }
    ],
    overview: [
      "Off-the-shelf generative AI models hallucinate facts, lack knowledge of your private internal documents, and leak confidential intellectual property when accessed through public endpoints.",
      "Solvexa designs production-grade Retrieval-Augmented Generation (RAG) architectures. We index your proprietary enterprise documents into high-performance vector databases, apply cross-encoder re-ranking, and feed exact relevant context into LLMs with verifiable citations."
    ],
    whatsIncluded: [
      "Custom Document Extraction & Chunking Architecture",
      "Vector Database Setup (Pinecone, Qdrant, or pgvector)",
      "Hybrid Retrieval Pipeline with Cohere / BGE Re-Ranker",
      "Streaming Chat Frontend in Next.js with Source Citations",
      "Automated Ragas Evaluation Benchmark & Quality Suite",
      "Full VPC Deployment with Zero Data Training Guarantees"
    ],
    process: [
      { step: "01", title: "Document & Schema Audit", desc: "Auditing knowledge corpus (PDFs, docs, databases) and defining query personas.", deliverables: "RAG Architecture Specification" },
      { step: "02", title: "Chunking & Vector Indexing", desc: "Implementing hierarchical chunking and generating embeddings with OpenAI / BGE.", deliverables: "Vector Database Cluster Ingested" },
      { step: "03", title: "Hybrid Retrieval & Re-ranking", desc: "Configuring dense vector search + BM25 keyword matching + cross-encoder re-ranking.", deliverables: "Benchmarked Retrieval Pipeline" },
      { step: "04", title: "Prompt & Context Guardrails", desc: "Writing system prompts, citation rules, and guardrails to eradicate hallucinations.", deliverables: "Guarded Prompt Pipeline" },
      { step: "05", title: "Streaming Frontend Build", desc: "Building responsive chat UI with markdown code syntax highlighting and sources.", deliverables: "Live Interactive Copilot Application" },
      { step: "06", title: "Automated Evaluation & SLA", desc: "Running test suites against 200+ golden Q&A queries to guarantee 99%+ accuracy.", deliverables: "Ragas Accuracy Audit & Production Release" }
    ],
    industries: [
      { name: "Legal & Compliance", desc: "Instant searching through thousands of contracts, case precedents, and statutory filings.", icon: "gavel" },
      { name: "Healthcare & Biotech", desc: "Summarizing clinical trial journals, medical research, and protocol guidelines.", icon: "biotech" },
      { name: "Financial Advisory", desc: "SEC 10-K report analysis, earnings call transcription parsing, and investment memos.", icon: "account_balance" },
      { name: "Customer Support Teams", desc: "Automated ticket resolution with 100% accurate product documentation answers.", icon: "support_agent" },
      { name: "Engineering & Dev Teams", desc: "Internal codebase search, API documentation copilots, and architecture guides.", icon: "terminal" },
      { name: "Enterprise HR & Ops", desc: "Employee policy handbooks, onboarding guides, and benefits query assistants.", icon: "badge" }
    ],
    hireBenefits: [
      { title: "Zero Hallucinations", desc: "Strict citation-grounded RAG pipelines that refuse to guess when information is missing.", icon: "verified" },
      { title: "Strict Data Privacy", desc: "Deploy in your own private cloud or VPC; your data is never used to train public models.", icon: "security" },
      { title: "State-of-the-Art Re-ranking", desc: "We use cross-encoder re-rankers that retrieve the exact paragraph needed every time.", icon: "filter_list" },
      { title: "Fast Streaming UI", desc: "Real-time token streaming with sub-500ms time-to-first-token response rates.", icon: "bolt" },
      { title: "Multi-Modal Support", desc: "Extract insights from embedded charts, complex tables, diagrams, and scanned images.", icon: "image" },
      { title: "Automated Test Benchmarks", desc: "Continuous regression testing using Ragas to ensure retrieval precision never degrades.", icon: "checklist" }
    ],
    technologies: [
      { name: "LangChain / LlamaIndex", role: "Orchestration", category: "AI" },
      { name: "Pinecone / Qdrant", role: "Vector DB", category: "Database" },
      { name: "pgvector", role: "Postgres Vectors", category: "Database" },
      { name: "OpenAI / Claude", role: "Frontier LLMs", category: "AI" },
      { name: "vLLM", role: "Self-Hosted Engine", category: "Infrastructure" },
      { name: "Next.js", role: "Copilot UI", category: "Frontend" },
      { name: "FastAPI", role: "Streaming Backend", category: "Backend" },
      { name: "Ragas", role: "Eval Framework", category: "Testing" }
    ],
    faqs: [
      { q: "How do RAG systems prevent AI from making things up (hallucinating)?", a: "Instead of asking the LLM to recall information from memory, RAG searches your private documents for the exact paragraphs, passes them as verified evidence in the prompt, and instructs the LLM to cite its sources explicitly." },
      { q: "Can we use our own local open-source models instead of OpenAI?", a: "Yes. We regularly deploy Llama 3, Mistral, and DeepSeek on private AWS/Azure GPU instances using vLLM so your company data never leaves your infrastructure." },
      { q: "How are updates to documents handled?", a: "We implement automated synchronization webhooks: when a document is created, updated, or deleted in Google Drive, Notion, or S3, the vector embeddings are updated in real-time." }
    ],
    stats: [
      { value: "< 0.5%", label: "Hallucination Rate" },
      { value: "0.3s", label: "Vector Search Latency" },
      { value: "100%", label: "Source Citation Accuracy" },
      { value: "20+", label: "Enterprise RAG Systems Live" }
    ]
  },

  // 14. Agentic AI & Autonomous Systems
  {
    id: "agentic-ai",
    slug: "agentic-ai",
    aliases: ["autonomous-agents"],
    title: "Agentic AI & Autonomous Systems",
    heroHeadline: "Multi-Agent Workflows, Tool-Calling Systems & Autonomous Task Execution",
    tagline: "Deploy autonomous AI agents that reason, plan, call tools, and execute multi-step business workflows.",
    shortDesc: "Autonomous multi-agent workflows with tool-calling capabilities, LangGraph / CrewAI orchestration, and self-healing business processes.",
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    badge: "Autonomous",
    icon: "smart_toy",
    subServicesTitle: "Our Custom Agentic AI Services",
    subServices: [
      {
        title: "Multi-Agent Orchestration (LangGraph & CrewAI)",
        desc: "Designing collaborative teams of specialized agents with supervisor nodes, state memory, and cyclic execution graphs.",
        icon: "hub",
        points: ["Cyclic state graph workflows", "Supervisor / worker topologies", "Persistent thread memory"]
      },
      {
        title: "Autonomous Tool Calling & API Execution",
        desc: "Equipping agents with custom tools to query SQL databases, send emails, trigger webhooks, and invoke third-party APIs.",
        icon: "build",
        points: ["Safe tool execution sandboxes", "Strict JSON parameter validation", "Automated error recovery"]
      },
      {
        title: "Human-in-the-Loop (HITL) Guardrails",
        desc: "Configuring interrupt checkpoints where human approval is required before high-stakes financial or database actions.",
        icon: "how_to_reg",
        points: ["One-click Slack / Email approvals", "Rollback execution states", "Audit trail logging"]
      },
      {
        title: "Self-Reflecting & Correcting Loops",
        desc: "Agents that inspect their own output, test code in sandboxes, catch errors, and iteratively refine until success.",
        icon: "autorenew",
        points: ["Self-critique validation", "Sandboxed Python execution", "Iterative bug fixing"]
      },
      {
        title: "Autonomous Research & Data Crawling",
        desc: "Agents that scour web sources, aggregate pricing intelligence, synthesize competitor moves, and draft reports.",
        icon: "travel_explore",
        points: ["Headless browser web extraction", "Structured markdown synthesis", "Real-time market tracking"]
      },
      {
        title: "Agent Telemetry & Observability",
        desc: "LangSmith and Arize Phoenix tracing tracking step-by-step agent reasoning, tool payloads, and latency bottlenecks.",
        icon: "monitoring",
        points: ["Step-by-step reasoning traces", "Token consumption monitoring", "Cost attribution per task"]
      }
    ],
    overview: [
      "The next frontier of AI is not chatbots that merely talk; it is autonomous agents that take action. Agentic AI systems can plan complex multi-step tasks, choose the right tools, query databases, execute code, and self-correct when something breaks.",
      "Solvexa engineers state-of-the-art multi-agent workflows using LangGraph and CrewAI. We build robust systems that automate complex, multi-hour human operational workflows with deterministic safety guardrails."
    ],
    whatsIncluded: [
      "Agent Architecture Graph & State Machine Specification",
      "Custom Toolset Integration (CRM, SQL, APIs, Email)",
      "Human-in-the-Loop Approval Modal & Slack Notifications",
      "Sandboxed Code Execution & Self-Correction Logic",
      "Complete LangSmith Tracing & Observability Setup",
      "Deployment on Docker / Kubernetes with Auto-Recovery"
    ],
    process: [
      { step: "01", title: "Workflow Mapping", desc: "Deconstructing target business processes into granular reasoning steps and tools.", deliverables: "Agent Workflow Graph Diagram" },
      { step: "02", title: "Tool & API Construction", desc: "Writing safe Python tool functions with rigorous Pydantic schemas.", deliverables: "Verified Tool Registry" },
      { step: "03", title: "State Graph Engineering", desc: "Implementing cyclical logic, error fallbacks, and supervisor nodes in LangGraph.", deliverables: "Compiled Multi-Agent Engine" },
      { step: "04", title: "Human Approval Gateways", desc: "Setting up pause/resume interrupt points for human review on critical actions.", deliverables: "HITL Notification & Review UI" },
      { step: "05", title: "Stress & Adversarial Testing", desc: "Subjecting agents to thousands of edge cases, bad inputs, and infinite loop traps.", deliverables: "Resilience & Test Benchmark Report" },
      { step: "06", title: "Production Deployment", desc: "Deploying agent worker nodes with queue management and LangSmith observability.", deliverables: "Live Autonomous Agent System" }
    ],
    industries: [
      { name: "Customer Operations & Support", desc: "Autonomous tier-2 support agents that diagnose issues, check databases, and issue refunds.", icon: "support_agent" },
      { name: "Financial Reconciliation", desc: "Agents that compare invoices against bank feeds, spot anomalies, and prepare ledger entries.", icon: "account_balance" },
      { name: "Software Development (DevOps)", desc: "Autonomous code review agents, bug reproducers, and pull request generators.", icon: "terminal" },
      { name: "Healthcare Admin", desc: "Pre-authorizations, insurance claims verification, and patient intake coordination.", icon: "health_and_safety" },
      { name: "Procurement & Supply Chain", desc: "Automated supplier vendor outreach, quote comparisons, and purchase order drafts.", icon: "local_shipping" },
      { name: "Sales Outreach & Enrichment", desc: "Autonomous prospect qualification, LinkedIn enrichment, and personalized email drafting.", icon: "send" }
    ],
    hireBenefits: [
      { title: "LangGraph Certified Experts", desc: "Pioneering team building complex cyclic state graphs and multi-agent topologies.", icon: "hub" },
      { title: "Safe Tool Sandboxing", desc: "Agents execute actions in secure sandboxes with strict execution permissions.", icon: "shield" },
      { title: "Human Oversight Guaranteed", desc: "High-consequence actions always require human sign-off via Slack or dashboard.", icon: "how_to_reg" },
      { title: "Self-Healing Workflows", desc: "Agents automatically catch errors, diagnose root causes, and retry alternative tools.", icon: "autorenew" },
      { title: "Full Execution Tracing", desc: "Inspect every thought, token, tool call, and latency spike in real-time.", icon: "insights" },
      { title: "Direct Enterprise Integrations", desc: "Connect seamlessly to Salesforce, HubSpot, Jira, Postgres, Slack, and Zapier.", icon: "cable" }
    ],
    technologies: [
      { name: "LangGraph", role: "State Machine Graph", category: "Framework" },
      { name: "CrewAI", role: "Role-Based Agents", category: "Framework" },
      { name: "Python", role: "Core Language", category: "Language" },
      { name: "LangSmith", role: "Tracing & Observability", category: "DevOps" },
      { name: "Claude 3.5 Sonnet", role: "Reasoning Engine", category: "LLM" },
      { name: "GPT-4o", role: "Multimodal Agent", category: "LLM" },
      { name: "FastAPI", role: "Worker Queue", category: "Backend" },
      { name: "Docker", role: "Sandbox Isolation", category: "Security" }
    ],
    faqs: [
      { q: "What prevents an autonomous agent from getting stuck in an infinite loop?", a: "We engineer strict recursion limits, deterministic state graph cycles, and timeout monitors in LangGraph. If an agent fails to reach resolution after N iterations, it triggers a human fallback." },
      { q: "Can an agent take destructive actions (like deleting records or charging cards)?", a: "No action of that nature is permitted autonomously. We implement Human-in-the-Loop (HITL) checkpoints: the agent stages the proposed action and pauses until a designated team member approves it." },
      { q: "How is Agentic AI different from simple chatbot automation?", a: "Chatbots only output text based on prompts. Agents have goals, maintain working memory, formulate plans, execute API actions, evaluate results, and iteratively solve complex multi-step problems." }
    ],
    stats: [
      { value: "85%", label: "Manual Workflow Time Saved" },
      { value: "Zero", label: "Unauthorized Tool Executions" },
      { value: "15+", label: "Multi-Agent Deployments" },
      { value: "100%", label: "LangSmith Tracing Coverage" }
    ]
  },

  // 15. Model Training & Fine-Tuning
  {
    id: "model-training",
    slug: "model-training",
    aliases: ["fine-tuning"],
    title: "Model Training & Fine-Tuning",
    heroHeadline: "Custom Deep Learning Architectures, Domain Fine-Tuning & Quantized Deployment",
    tagline: "Tailor open-weights LLMs and specialized neural networks specifically to your domain data.",
    shortDesc: "Custom neural network architecture, LoRA/QLoRA domain fine-tuning, synthetic dataset curation, and scalable GPU deployment pipelines.",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    badge: "Deep Learning",
    icon: "tune",
    subServicesTitle: "Our Model Training & Fine-Tuning Services",
    subServices: [
      {
        title: "LoRA & QLoRA Parameter-Efficient Fine-Tuning",
        desc: "Adapting large models (Llama 3.3, Mistral, Gemma) using low-rank adapters with minimal GPU VRAM overhead.",
        icon: "tune",
        points: ["4-bit & 8-bit quantization", "Low-rank adapter merges", "Drastic reduction in compute costs"]
      },
      {
        title: "Synthetic Dataset Generation & Cleaning",
        desc: "Generating, de-duplicating, and validating thousands of high-quality synthetic instruction pairs using LLM-as-a-judge.",
        icon: "dataset",
        points: ["Deduplication & outlier removal", "Alpaca / ShareGPT formatting", "Automated quality scoring"]
      },
      {
        title: "Supervised Fine-Tuning (SFT)",
        desc: "Teaching foundation models your organization's exact formatting, tone of voice, terminology, and reasoning styles.",
        icon: "school",
        points: ["Instruction tuning", "Loss curve monitoring", "Evaluation checkpoints & early stopping"]
      },
      {
        title: "DPO & RLHF Alignment",
        desc: "Direct Preference Optimization (DPO) aligning model responses to human preference pairs without complex reward models.",
        icon: "thumb_up",
        points: ["Preference pair annotation", "DPO loss alignment", "Eliminating unwanted behaviors"]
      },
      {
        title: "Model Quantization & Edge Optimization",
        desc: "Compressing trained models to AWQ, GGUF, and TensorRT-LLM formats for high-throughput serving on mobile or cloud.",
        icon: "compress",
        points: ["TensorRT-LLM acceleration", "AWQ 4-bit inference", "4x faster token throughput"]
      },
      {
        title: "Evaluation & Benchmarking Suites",
        desc: "Rigorous automated benchmark testing against MMLU, GSM8K, and custom domain-specific validation sets.",
        icon: "fact_check",
        points: ["Domain benchmark harness", "Catastrophic forgetting checks", "Side-by-side win rate reports"]
      }
    ],
    overview: [
      "General foundation models are jacks of all trades and masters of none. When you require an AI that writes in your exact corporate voice, uses proprietary domain taxonomy, or adheres to strict output schemas 100% of the time, fine-tuning is the definitive answer.",
      "Solvexa specializes in Parameter-Efficient Fine-Tuning (PEFT) using LoRA and QLoRA, synthetic dataset engineering, and Direct Preference Optimization (DPO). We transform versatile open-weights foundation models into specialized, cost-effective domain experts."
    ],
    whatsIncluded: [
      "Domain Dataset Curation, Cleaning & Formatting",
      "LoRA / QLoRA Hyperparameter Configuration & Training Runs",
      "Direct Preference Optimization (DPO) Alignment",
      "Catastrophic Forgetting & Quality Benchmark Audit",
      "Merged Model Weights Archive (Hugging Face / GGUF Format)",
      "High-Throughput vLLM / TensorRT Inference Setup Guide"
    ],
    process: [
      { step: "01", title: "Dataset Audit & Objective", desc: "Auditing domain data and establishing clear accuracy and latency objectives.", deliverables: "Training Roadmap & Dataset Spec" },
      { step: "02", title: "Data Preparation & Synthesis", desc: "Extracting, formatting, cleaning, and validating high-quality instruction pairs.", deliverables: "Clean JSONL Training Dataset" },
      { step: "03", title: "Base Model Selection", desc: "Benchmarking candidates (Llama 3, Mistral, Qwen) on raw domain capability.", deliverables: "Selected Foundation Architecture" },
      { step: "04", title: "LoRA / QLoRA Training Run", desc: "Executing training on distributed GPUs with loss curve monitoring and early stopping.", deliverables: "Trained Adapter Weights & Loss Logs" },
      { step: "05", title: "Alignment & Benchmarking", desc: "Applying DPO alignment and running automated domain benchmark evaluations.", deliverables: "Model Performance & Benchmark Deck" },
      { step: "06", title: "Quantization & Serving", desc: "Quantizing to AWQ/TensorRT-LLM and containerizing for production inference.", deliverables: "Production-Ready Inference Docker Image" }
    ],
    industries: [
      { name: "Medical & Clinical Notes", desc: "Fine-tuning models on medical terminology, ICD-10 coding, and clinical trial summaries.", icon: "medical_services" },
      { name: "Legal Document Analysis", desc: "Teaching models exact legal brief conventions, contractual clauses, and statutory citations.", icon: "gavel" },
      { name: "Financial & Tax Advisory", desc: "Training on regional accounting standards, tax codes, and audit disclosure formats.", icon: "account_balance" },
      { name: "Custom Code Generation", desc: "Fine-tuning on proprietary internal SDKs, frameworks, and coding standards.", icon: "terminal" },
      { name: "Specialized Customer Support", desc: "Replicating exact customer care tone, return policies, and brand vocabulary.", icon: "support_agent" },
      { name: "Academic Research & STEM", desc: "Specialized models for chemical informatics, mathematical proofs, and physics simulations.", icon: "science" }
    ],
    hireBenefits: [
      { title: "Cost-Effective QLoRA", desc: "We fine-tune state-of-the-art models on single or dual GPUs, slashing training costs.", icon: "savings" },
      { title: "No Catastrophic Forgetting", desc: "Carefully balanced training mixes ensuring models retain general reasoning abilities.", icon: "psychology" },
      { title: "Complete IP & Weight Ownership", desc: "You own all resulting model weights, adapter files, and synthetic datasets unconditionally.", icon: "verified" },
      { title: "Synthetic Data Mastery", desc: "We turn sparse raw text into tens of thousands of high-yield training examples.", icon: "auto_awesome" },
      { title: "Blistering Inference Speed", desc: "Quantized TensorRT-LLM builds delivering hundreds of tokens per second.", icon: "speed" },
      { title: "Private Cloud Execution", desc: "Training executed securely on RunPod, Lambda Labs, AWS, or your private on-prem GPUs.", icon: "security" }
    ],
    technologies: [
      { name: "PyTorch", role: "Deep Learning Engine", category: "Core" },
      { name: "Hugging Face", role: "Transformers & TRL", category: "Library" },
      { name: "Unsloth", role: "Fast Fine-Tuning", category: "Optimization" },
      { name: "vLLM", role: "Inference Engine", category: "Serving" },
      { name: "TensorRT-LLM", role: "GPU Acceleration", category: "Inference" },
      { name: "Weights & Biases", role: "Experiment Tracking", category: "MLOps" }
    ],
    faqs: [
      { q: "When should we fine-tune an LLM versus using RAG?", a: "Use RAG when you need an AI to pull in dynamic external knowledge and cite source documents. Use fine-tuning when you need the model to learn a specific tone of voice, follow a rigid formatting schema, or specialize in domain terminology." },
      { q: "How many training examples are required for fine-tuning?", a: "With modern LoRA and instruction tuning, significant behavioral improvements can be achieved with as few as 500 to 2,000 high-quality, diverse instruction-response pairs." },
      { q: "Do we have to share our training data with third parties?", a: "Never. All training runs occur inside isolated GPU containers on your cloud or dedicated private compute pods under strict NDAs." }
    ],
    stats: [
      { value: "4x", label: "Inference Throughput Lift" },
      { value: "< 2%", label: "Format Error Rate Post-Tuning" },
      { value: "30+", label: "Fine-Tuned Models Shipped" },
      { value: "100%", label: "Client Model Ownership" }
    ]
  },

  // 16. FYP Ideas & Academic Prototypes
  {
    id: "fyp-ideas",
    slug: "fyp-ideas",
    aliases: ["academic-prototypes"],
    title: "FYP Ideas & Academic Prototypes",
    heroHeadline: "Innovative Final Year Project Concepts, Architectural Blueprints & Production Prototypes",
    tagline: "Turn academic concepts into award-winning software, hardware, and AI graduation projects.",
    shortDesc: "Comprehensive Final Year Project concepts, technical implementation blueprints, working hardware/software prototypes, and thesis support.",
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    badge: "Innovation Hub",
    icon: "school",
    subServicesTitle: "Our Comprehensive FYP & Academic Prototype Services",
    subServices: [
      {
        title: "Cutting-Edge FYP Concept Formulation",
        desc: "Brainstorming high-novelty, commercially viable project ideas across AI, IoT, Blockchain, and Full-Stack Engineering.",
        icon: "lightbulb",
        points: ["Novelty & feasibility assessments", "University committee proposal decks", "Scope & sprint milestone mapping"]
      },
      {
        title: "Full-Stack Working Software Prototypes",
        desc: "Clean, production-quality codebases (Next.js, FastAPI, Flutter, PostgreSQL) built to demonstrate in viva evaluations.",
        icon: "code",
        points: ["Clean modular architecture", "Responsive modern UI/UX", "Comprehensive documentation & comments"]
      },
      {
        title: "AI, Computer Vision & Deep Learning Models",
        desc: "End-to-end machine learning pipelines with dataset preparation, model training, evaluation metrics, and live camera feeds.",
        icon: "psychology",
        points: ["YOLO / PyTorch implementations", "Accuracy & F1-score visualization charts", "Interactive web dashboards"]
      },
      {
        title: "IoT & Embedded Hardware Integration",
        desc: "Connecting microcontrollers (ESP32, Arduino, Raspberry Pi) to cloud MQTT brokers and mobile telemetry apps.",
        icon: "memory",
        points: ["Sensor telemetry acquisition", "Cloud MQTT / Firebase sync", "Real-time hardware control apps"]
      },
      {
        title: "System Architecture & UML Documentation",
        desc: "Exhaustive documentation packages with ER diagrams, sequence flows, architectural schematics, and test cases.",
        icon: "schema",
        points: ["Complete IEEE formatted reports", "UML & Data Flow Diagrams (DFD)", "Unit & integration testing tables"]
      },
      {
        title: "Viva Voce & Presentation Coaching",
        desc: "Preparation for academic defense: pitch slide decks, simulated viva questioning, and live demo rehearsal guides.",
        icon: "co_present",
        points: ["Definitive pitch slide deck", "Mock defense question prep", "Demonstration script & fail-safes"]
      }
    ],
    overview: [
      "A standout Final Year Project (FYP) is often the catalyst for graduate employment, startup incubator admissions, or master's scholarship offers. Many students struggle with overly ambitious scopes, outdated tech stacks, or lackluster presentation materials.",
      "Solvexa mentors computer science, software engineering, and data science students by providing vetted project concepts, modern architectural blueprints, production-grade working codebases, and rigorous viva defense preparation."
    ],
    whatsIncluded: [
      "Vetted Project Proposal Document with Novelty Justification",
      "Fully Functional, Commented Source Code Repository",
      "Interactive Web or Mobile Application Frontend",
      "Comprehensive 60+ Page Final Documentation / Thesis Draft",
      "High-Impact PowerPoint Viva Presentation Slide Deck",
      "1-on-1 Viva Preparation & Technical Walkthrough Coaching"
    ],
    process: [
      { step: "01", title: "Idea Selection & Approval", desc: "Aligning on project topic, supervisor preferences, and committee criteria.", deliverables: "Approved Project Proposal & Spec" },
      { step: "02", title: "System Architecture & Design", desc: "Drafting UML diagrams, entity relationships, and wireframes.", deliverables: "Complete System Design Document" },
      { step: "03", title: "Prototype Development", desc: "Building the working core engine, algorithms, and responsive UI.", deliverables: "Working Prototype Alpha Build" },
      { step: "04", title: "Testing & Metric Benchmarking", desc: "Running test suites, measuring latency/accuracy, and generating charts.", deliverables: "Empirical Results & Graphs" },
      { step: "05", title: "Thesis & Documentation", desc: "Drafting introduction, literature review, methodology, and conclusion.", deliverables: "Complete Bound Project Report Draft" },
      { step: "06", title: "Viva Presentation Rehearsal", desc: "Slide design, live demo setup, and mock question-and-answer preparation.", deliverables: "Presentation Deck & Viva Coaching" }
    ],
    industries: [
      { name: "Computer Science & Software Eng", desc: "Distributed systems, cloud platforms, and innovative developer tools.", icon: "computer" },
      { name: "Artificial Intelligence & Data Science", desc: "LLM agents, medical image classification, and automated recommendation engines.", icon: "psychology" },
      { name: "Cybersecurity & Cryptography", desc: "Network intrusion detection, biometric encryption, and blockchain verification.", icon: "security" },
      { name: "Internet of Things (IoT) & Robotics", desc: "Smart agriculture, autonomous rovers, and home automation telemetry.", icon: "precision_manufacturing" },
      { name: "Healthcare & Biomedical Tech", desc: "Telemedicine portals, wearable health trackers, and ECG classification.", icon: "favorite" },
      { name: "FinTech & Decentralized Systems", desc: "DeFi protocols, algorithmic trading simulators, and smart contract escrow.", icon: "account_balance" }
    ],
    hireBenefits: [
      { title: "Novelty & Innovation Focus", desc: "Projects that impress university faculty and evaluators with modern relevance.", icon: "star" },
      { title: "Production-Grade Tech Stacks", desc: "Build using modern Next.js, FastAPI, Flutter, and PyTorch, not outdated templates.", icon: "code" },
      { title: "Clean, Fully Commented Code", desc: "Every line of code is structured and commented so you can explain it easily during viva.", icon: "description" },
      { title: "Complete Documentation", desc: "UML diagrams, flowcharts, literature reviews, and testing tables included.", icon: "menu_book" },
      { title: "Viva Defence Coaching", desc: "Rehearse with experienced software engineers who anticipate challenging questions.", icon: "co_present" },
      { title: "Portfolio Asset for Hiring", desc: "Transform your university project into a standout GitHub portfolio centerpiece.", icon: "work" }
    ],
    technologies: [
      { name: "Python", role: "Core Language", category: "Language" },
      { name: "Next.js", role: "Web Application", category: "Frontend" },
      { name: "FastAPI", role: "REST Backend", category: "Backend" },
      { name: "Flutter", role: "Mobile Application", category: "Mobile" },
      { name: "PyTorch", role: "Machine Learning", category: "AI/ML" },
      { name: "PostgreSQL", role: "Database", category: "Database" },
      { name: "ESP32 / Arduino", role: "Microcontrollers", category: "Hardware" },
      { name: "Docker", role: "Deployment", category: "DevOps" }
    ],
    faqs: [
      { q: "Can Solvexa help us formulate an original, approved project idea?", a: "Yes! We maintain an active incubator of high-novelty concepts combining AI, IoT, and full-stack engineering tailored to get immediate supervisor approval." },
      { q: "Will I understand the code well enough to defend it in my viva exam?", a: "Yes. We provide thorough 1-on-1 code walkthrough sessions, detailed inline comments, and mock viva questions so you understand every function and algorithm intimately." },
      { q: "Do you provide complete documentation following university guidelines?", a: "Yes. We format comprehensive project reports including Chapter 1-5 (Introduction, Literature Review, Methodology, Implementation, and Results) following standard IEEE / university formats." }
    ],
    stats: [
      { value: "100%", label: "Viva Defense Pass Rate" },
      { value: "40+", label: "Academic Projects Mentored" },
      { value: "A / 4.0", label: "Average Project Grade" },
      { value: "100%", label: "Original Code Guarantee" }
    ]
  }
];
