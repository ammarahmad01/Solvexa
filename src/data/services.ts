export interface SubService {
  title: string;
  desc: string;
  icon: string;
  points: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  deliverables: string;
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
  badge: string;
  icon: string;
  subServicesTitle: string;
  subServices: SubService[];
  overview: string[];
  whatsIncluded: string[];
  process: ProcessStep[];
  industries: { name: string; desc: string; icon: string }[];
  hireBenefits: { title: string; desc: string; icon: string }[];
  technologies: { name: string; role: string; category: string }[];
  faqs: { q: string; a: string }[];
  stats: { value: string; label: string }[];
}

export const servicesData: ServiceItem[] = [
  // 01. Web Development & Enterprise Platforms
  {
    id: "web-dev",
    slug: "web-development",
    aliases: ["web-dev","web-applications","web-platforms"],
    title: "Web Development & Enterprise Platforms",
    heroHeadline: "Scalable Full-Stack Engineering & Ultra-Fast Enterprise Platforms",
    tagline: "High-performance ERP, CRM, CMS, and eCommerce systems built for scale.",
    shortDesc: "High-performance, scalable web systems engineered for maximum throughput, low latency, and intuitive operations built on sovereign, clean-code foundations.",
    heroImage: "/assets/Services Images/Web Development image.jpeg",
    secondaryImage: "/assets/Services Images/Web Development image.jpeg",
    badge: "Enterprise Web",
    icon: "laptop_mac",
    subServicesTitle: "Core Web & Enterprise Solutions",
    subServices: [
      {
        title: "Enterprise Resource Planning (ERP)",
        desc: "Centralized operations engines unifying supply chain tracking, automated payroll, multi-branch inventory, and role-based auditing.",
        icon: "hub",
        points: ["Supply chain & inventory tracking", "Automated payroll & financial audits", "Granular role-based access security"]
      },
      {
        title: "Customer Relationship Management (CRM)",
        desc: "Tailored sales funnels, pipeline automation, omnichannel communication logs, automated invoicing, and third-party webhook integrations.",
        icon: "support_agent",
        points: ["Sales pipeline & lead tracking", "Omnichannel customer histories", "Automated invoicing & webhooks"]
      },
      {
        title: "Headless & Bespoke CMS",
        desc: "Decoupled content architectures separating presentation from data storage, supporting custom schemas and zero-bloat editorial workflows.",
        icon: "space_dashboard",
        points: ["Decoupled frontend & backend", "Custom relational schemas", "Sub-second editorial publishing"]
      },
      {
        title: "eCommerce & Marketplaces",
        desc: "High-concurrency digital commerce ecosystems with dynamic multi-currency wallets, automated tax engines, and low-friction checkout flows.",
        icon: "shopping_bag",
        points: ["High-concurrency checkout engines", "Multi-currency wallet integrations", "Automated tax & shipping rules"]
      },
      {
        title: "Corporate & Portfolio Platforms",
        desc: "High-converting brand platforms with kinetic micro-interactions, responsive 3D elements, dynamic metadata, and edge caching.",
        icon: "laptop_mac",
        points: ["Kinetic micro-interactions & WebGL", "Responsive design across all devices", "Global CDN edge caching"]
      }
    ],
    overview: [
      "High-performance, scalable web systems engineered for maximum throughput, low latency, and intuitive operations.",
      "From high-concurrency enterprise resource planning to client-facing web portfolios, every solution is built on sovereign, clean-code foundations — zero fragile shortcuts."
    ],
    whatsIncluded: [
      "Custom Full-Stack Next.js & Node.js Application",
      "Enterprise Database Schema & Automated Backups",
      "Tailwind CSS Responsive Design System",
      "REST & GraphQL Microservices Architecture",
      "Role-Based Access Control (RBAC) & OAuth 2.0",
      "Full Source Code & Sovereign IP Ownership"
    ],
    process: [
      { step: "01", title: "Discovery & Scoping", desc: "Auditing business goals, technical constraints, and defining scope using MoSCoW prioritization.", deliverables: "System Architecture Blueprint & Tech Spec" },
      { step: "02", title: "Architecture & Design", desc: "Designing database schemas, system architecture, and interactive Figma prototypes.", deliverables: "Complete Responsive Figma Prototype" },
      { step: "03", title: "Engineering & Development", desc: "Sprint-based full-stack coding with continuous preview links deployed on every git commit.", deliverables: "Bi-Weekly Staging Deployments" },
      { step: "04", title: "Testing & Quality Assurance", desc: "Rigorous automated testing, security vulnerability scans, and Core Web Vitals audits.", deliverables: "QA Pass Sign-Off & Performance Report" },
      { step: "05", title: "Deployment & Launch", desc: "Zero-downtime cutover with automated domain DNS routing, CDN caching, and telemetry.", deliverables: "Live Production Release & Domain Handoff" },
      { step: "06", title: "Growth & SLA Monitoring", desc: "24/7 uptime monitoring, server security patches, regular backups, and feature iterations.", deliverables: "SLA Support Agreement & Monthly Review" }
    ],
    industries: [
      { name: "FinTech & Banking", desc: "Real-time ledger processing and multi-currency transactions.", icon: "account_balance" },
      { name: "HealthTech & Med", desc: "HIPAA-ready patient portals and diagnostic records.", icon: "medical_services" },
      { name: "E-Commerce & Retail", desc: "High-concurrency flash sales and inventory sync.", icon: "shopping_cart" },
      { name: "SaaS & Enterprise", desc: "Multi-tenant cloud apps with subscription billing.", icon: "cloud" },
      { name: "Logistics & Fleet", desc: "Live GPS asset tracking and automated dispatching.", icon: "local_shipping" },
      { name: "EdTech & Learning", desc: "Interactive student portals and course progression engines.", icon: "school" }
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
      { name: "React", role: "UI Library", category: "Frontend" },
      { name: "Next.js", role: "App Framework", category: "Full-Stack" },
      { name: "TypeScript", role: "Type Safety", category: "Core" },
      { name: "Tailwind CSS", role: "Styling Engine", category: "Design" },
      { name: "Node.js", role: "Server Runtime", category: "Backend" },
      { name: "Python", role: "Services & APIs", category: "Backend" },
      { name: "FastAPI", role: "High-Speed Microservices", category: "Backend" },
      { name: "PostgreSQL", role: "Relational DB", category: "Database" },
      { name: "MySQL", role: "Relational DB", category: "Database" },
      { name: "Redis", role: "In-Memory Cache", category: "Caching" },
      { name: "Supabase", role: "Cloud Postgres & Auth", category: "Database" },
      { name: "MongoDB", role: "Document Store", category: "Database" },
      { name: "AWS", role: "Cloud Infrastructure", category: "Cloud" },
      { name: "Docker", role: "Containerization", category: "DevOps" }
    ],
    faqs: [
      { q: "What tech stack do you recommend for high-concurrency web apps?", a: "We typically engineer with Next.js (App Router) on the frontend, Node.js or FastAPI microservices on the backend, and PostgreSQL with Redis caching for scalable, sub-second responses." },
      { q: "Do we retain full ownership of the source code and IP?", a: "Yes, unconditionally. All repositories, Figma design files, cloud accounts, and IP belong 100% to you from day one." },
      { q: "Can you modernize an existing legacy web application?", a: "Yes. We execute phased refactoring to migrate legacy PHP/Monolith applications to modern Next.js microservice architectures without disrupting live user traffic." }
    ],
    stats: [
      { value: "99.99%", label: "Uptime SLA Guarantee" },
      { value: "< 100ms", label: "Average API Response Time" },
      { value: "100%", label: "Clean Code & IP Ownership" },
      { value: "48 hrs", label: "Rapid Onboarding Speed" }
    ]
  },

  // 02. Mobile App Development
  {
    id: "mobile-dev",
    slug: "mobile-app-development",
    aliases: ["mobile-apps","mobile-development","app-development","ios-android-development"],
    title: "Mobile App Development",
    heroHeadline: "Fluid Native-Feel iOS & Android Apps Built for Scale",
    tagline: "Native and cross-platform apps with offline-first, hardware-integrated performance.",
    shortDesc: "Native and cross-platform mobile architectures engineered for smooth 60–120 FPS rendering, native hardware integration, and resilient offline-first operation across iOS and Android ecosystems.",
    heroImage: "/assets/Services Images/Mobile App Development Image.jpeg",
    secondaryImage: "/assets/Services Images/Mobile App Development Image.jpeg",
    badge: "iOS & Android",
    icon: "phone_iphone",
    subServicesTitle: "Core Mobile Solutions",
    subServices: [
      {
        title: "Cross-Platform Engineering",
        desc: "Single-codebase applications powered by Flutter and React Native delivering native execution speeds across operating systems.",
        icon: "mobile_friendly",
        points: ["Flutter & React Native frameworks", "Single shared codebase efficiency", "Fluid 60-120 FPS rendering"]
      },
      {
        title: "Native Platform Development",
        desc: "High-performance native builds using Swift (SwiftUI) for iOS and Kotlin (Jetpack Compose) for Android.",
        icon: "phone_iphone",
        points: ["Swift & SwiftUI for iOS", "Kotlin & Jetpack Compose for Android", "Low-level OS memory optimization"]
      },
      {
        title: "Offline-First Synchronization",
        desc: "Local persistence via encrypted databases with automatic background sync and conflict resolution on reconnect.",
        icon: "sync",
        points: ["Encrypted local database storage", "Background delta synchronization", "Automated conflict resolution"]
      },
      {
        title: "Hardware Integration",
        desc: "Low-latency sensor communication covering Bluetooth Low Energy (BLE), LiDAR, Camera2 API, biometric authentication, and background geofencing.",
        icon: "developer_board",
        points: ["Bluetooth Low Energy (BLE) & LiDAR", "Biometric FaceID & fingerprint auth", "Background GPS & geofencing"]
      }
    ],
    overview: [
      "Native and cross-platform mobile architectures engineered for smooth 60–120 FPS rendering, native hardware integration, and resilient offline-first operation across iOS and Android ecosystems.",
      "We design intuitive mobile experiences that captivate users and leverage the full power of modern smartphone hardware."
    ],
    whatsIncluded: [
      "Native iOS & Android Universal Builds",
      "Apple HIG & Google Material Design System",
      "Offline-First Encrypted Database Architecture",
      "Push Notification & Background Sync Services",
      "TestFlight & Google Play Console Submission",
      "Post-Launch Device Compatibility Maintenance"
    ],
    process: [
      { step: "01", title: "Discovery & Scoping", desc: "Defining user personas, offline caching logic, screen transitions, and SDK requirements.", deliverables: "Mobile Wireframes & Technical Specs" },
      { step: "02", title: "Architecture & Design", desc: "Designing following Apple HIG and Google Material guidelines with dark mode support.", deliverables: "Mobile Figma Prototype with Micro-Interactions" },
      { step: "03", title: "Engineering & Development", desc: "Bi-weekly sprint builds compiled and delivered directly to your device via TestFlight.", deliverables: "TestFlight & APK Preview Builds" },
      { step: "04", title: "Device Matrix Testing", desc: "Testing across physical screen sizes, CPU throttles, and varying network speeds.", deliverables: "Crash-Free Diagnostic Report" },
      { step: "05", title: "Store Submission & Launch", desc: "Managing store metadata, compliance questionnaires, privacy manifests, and review approval.", deliverables: "Published App on App Store & Google Play" },
      { step: "06", title: "Growth & SLA Monitoring", desc: "Real-time crash monitoring, OS version compatibility updates, and feature updates.", deliverables: "Monthly Maintenance & Bug Fix Releases" }
    ],
    industries: [
      { name: "FinTech & Payments", desc: "Biometric login, QR code payments, and instant alerts.", icon: "wallet" },
      { name: "Health & Fitness", desc: "HealthKit integration, workout logs, and wearable sync.", icon: "fitness_center" },
      { name: "On-Demand Delivery", desc: "Live GPS driver tracking, push alerts, and routing.", icon: "delivery_dining" },
      { name: "Social & Community", desc: "Real-time chat, story feeds, and interactive media.", icon: "forum" },
      { name: "Enterprise Field CRM", desc: "Offline data capture for technicians and field agents.", icon: "badge" },
      { name: "Travel & Hospitality", desc: "Digital keycards, ticket scanning, and itinerary planning.", icon: "flight" }
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
      { name: "Flutter", role: "Cross-Platform Framework", category: "Mobile" },
      { name: "React Native", role: "Cross-Platform Framework", category: "Mobile" },
      { name: "Swift", role: "Native iOS", category: "Mobile" },
      { name: "Kotlin", role: "Native Android", category: "Mobile" },
      { name: "Firebase", role: "Auth, Push & Database", category: "Backend" },
      { name: "Expo", role: "React Native Tooling", category: "Mobile" }
    ],
    faqs: [
      { q: "Should we build cross-platform (Flutter/React Native) or native?", a: "Cross-platform using Flutter or React Native delivers 95% shared code with near-identical performance to native, saving significant development cost. Native (Swift/Kotlin) is reserved for specialized low-level hardware or Bluetooth drivers." },
      { q: "How do you handle App Store & Play Store approval?", a: "We manage the entire submission pipeline, from privacy manifests and app metadata to review communication, guaranteeing successful store publication." },
      { q: "Does the app work without an internet connection?", a: "Yes. We build offline-first data architectures that persist records locally and sync changes automatically once connectivity resumes." }
    ],
    stats: [
      { value: "60-120", label: "FPS Smooth Rendering" },
      { value: "99.8%", label: "Crash-Free Session Rate" },
      { value: "100%", label: "Store Approval Guarantee" },
      { value: "40%", label: "Cost Savings with Shared Code" }
    ]
  },

  // 03. UI/UX Design & Design Systems
  {
    id: "ui-ux",
    slug: "ui-ux-design",
    aliases: ["ui-ux","ux-design","ui-design","product-design"],
    title: "UI/UX Design & Design Systems",
    heroHeadline: "Human-Centered Design Systems & Intuitive Digital Interfaces",
    tagline: "Human-centered, accessible interfaces backed by scalable design systems.",
    shortDesc: "Human-centered product design that translates complex enterprise logic into intuitive, conversion-focused interfaces backed by scalable design systems.",
    heroImage: "/assets/Services Images/Ux and Ui Development Images.jpeg",
    secondaryImage: "/assets/Services Images/Ux and Ui Development Images.jpeg",
    badge: "Human-Centered",
    icon: "palette",
    subServicesTitle: "Core UI/UX Solutions",
    subServices: [
      {
        title: "Enterprise Design Systems",
        desc: "Atomic design tokens (color, typography, spatial units, component variants) built in Figma for direct translation to Tailwind CSS.",
        icon: "token",
        points: ["Figma atomic token architecture", "Direct translation to Tailwind CSS", "Comprehensive variant libraries"]
      },
      {
        title: "UX Discovery & Journey Mapping",
        desc: "User research, heuristic reviews, information architecture (IA), and low-fidelity wireframing to remove conversion bottlenecks.",
        icon: "travel_explore",
        points: ["User persona research & interviews", "Information architecture (IA) mapping", "Conversion bottleneck audits"]
      },
      {
        title: "High-Fidelity Interface Design",
        desc: "Bespoke dark and light UI layouts with micro-interactions, depth, and strict WCAG 2.1 AA/AAA accessibility compliance.",
        icon: "palette",
        points: ["Bespoke dark and light mode UI", "Tactile micro-interaction design", "WCAG 2.1 AA/AAA compliance"]
      },
      {
        title: "Interactive Prototyping",
        desc: "Realistic clickable prototypes for usability validation, investor demos, and complete engineering handoffs.",
        icon: "touch_app",
        points: ["High-fidelity clickable prototypes", "Usability test validation", "Pixel-perfect developer handoffs"]
      }
    ],
    overview: [
      "Human-centered product design that translates complex enterprise logic into intuitive, conversion-focused interfaces.",
      "Every project is anchored by a scalable design system that maps directly to production code, ensuring design consistency across platforms."
    ],
    whatsIncluded: [
      "Complete Figma Design System & UI Kit",
      "Atomic Token Specs (Typography, Colors, Spacers)",
      "High-Fidelity Desktop, Tablet & Mobile Views",
      "Interactive Clickable Prototyping",
      "Micro-Interaction & Motion Specs",
      "Developer Handoff Documentation"
    ],
    process: [
      { step: "01", title: "Discovery & User Research", desc: "Researching target user pain points, business goals, and competitive benchmarks.", deliverables: "User Persona Deck & Benchmarks" },
      { step: "02", title: "Information Architecture", desc: "Mapping core navigation structures, information hierarchies, and user flows.", deliverables: "Sitemaps & Low-Fidelity Wireframes" },
      { step: "03", title: "Visual Exploration & Tokens", desc: "Establishing moodboards, typography pairings, color systems, and token foundations.", deliverables: "Visual Style Direction & Tokens" },
      { step: "04", title: "High-Fidelity UI Design", desc: "Fleshing out product states, edge cases, error states, and responsive views in Figma.", deliverables: "Complete Screen Design Archive" },
      { step: "05", title: "Interactive Prototyping", desc: "Linking screens with tactile micro-interactions and transitions for usability tests.", deliverables: "Clickable Usability Test Prototype" },
      { step: "06", title: "Developer Handoff & Specs", desc: "Specifying design tokens, redlines, and animation curves for pixel-perfect coding.", deliverables: "Figma Dev Mode Token Package" }
    ],
    industries: [
      { name: "B2B SaaS Platforms", desc: "Complex analytics dashboards, data tables, and onboarding.", icon: "dashboard" },
      { name: "FinTech & Crypto", desc: "Trust-centric portfolios, transaction views, and biometric flows.", icon: "credit_card" },
      { name: "Modern Consumer Apps", desc: "Engaging social feeds, micro-animations, and swipe gestures.", icon: "smartphone" },
      { name: "Health & Telemedicine", desc: "Accessible patient records, appointment booking, and charting.", icon: "health_and_safety" },
      { name: "Luxury E-Commerce", desc: "Editorial product storytelling, mega menus, and checkout.", icon: "shopping_bag" },
      { name: "Enterprise Dashboards", desc: "Multi-tier permissions, audit tables, and dense data displays.", icon: "monitoring" }
    ],
    hireBenefits: [
      { title: "Design Tokens First", desc: "Every component is mapped to reusable tokens that translate directly into clean Tailwind code.", icon: "token" },
      { title: "Accessibility Compliance", desc: "We adhere strictly to WCAG 2.1 AA/AAA contrast and sizing standards.", icon: "accessibility_new" },
      { title: "Conversion-Centric UX", desc: "We design user flows optimized to minimize drop-off and maximize activation.", icon: "trending_up" },
      { title: "Figma Dev-Ready Handoff", desc: "Zero ambiguity. Developers get clear padding, variant properties, and token variables.", icon: "code" },
      { title: "Rapid Clickable Prototypes", desc: "Experience real app flows on your phone before engineers write a line of code.", icon: "touch_app" },
      { title: "Seamless Iteration Cycles", desc: "Collaborate directly in Figma with real-time commenting and bi-weekly design reviews.", icon: "rate_review" }
    ],
    technologies: [
      { name: "Figma", role: "UI/UX & Design Systems", category: "Design" },
      { name: "Adobe XD", role: "Interface Prototyping", category: "Design" },
      { name: "Photoshop", role: "Raster Asset Editing", category: "Design" },
      { name: "Illustrator", role: "Vector & Icon Design", category: "Design" },
      { name: "After Effects", role: "Micro-Interaction Motion", category: "Motion" },
      { name: "Blender", role: "3D Asset Modeling", category: "3D" }
    ],
    faqs: [
      { q: "What deliverables do we receive at the end of a design sprint?", a: "You receive an organized Figma master file containing atomic design tokens, responsive desktop and mobile screens, component libraries, and interactive prototypes." },
      { q: "How do your designers collaborate with developers?", a: "Our designers use tokenized systems and Figma Dev Mode, aligning spacing and naming directly with Tailwind CSS so engineering handoff is seamless." },
      { q: "Do you design both light and dark modes?", a: "Yes. All design systems include synchronized semantic token palettes for both high-contrast dark mode and clean light mode." }
    ],
    stats: [
      { value: "100%", label: "Figma Tokenized Systems" },
      { value: "WCAG AA", label: "Accessibility Standard" },
      { value: "2.4x", label: "Conversion Lift via Redesign" },
      { value: "Zero", label: "Developer Handoff Friction" }
    ]
  },

  // 04. Digital Marketing & Performance Growth
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    aliases: ["marketing","performance-marketing","digital-growth"],
    title: "Digital Marketing & Performance Growth",
    heroHeadline: "Data-Driven Performance Growth & Multi-Channel Customer Acquisition",
    tagline: "Data-driven acquisition systems focused on ROAS, CAC, and LTV.",
    shortDesc: "Data-driven customer acquisition systems that replace vanity metrics with predictable return on ad spend (ROAS), reduced customer acquisition costs (CAC), and increased customer lifetime value (LTV).",
    heroImage: "/assets/Services Images/Digital_marketing_work.jpeg",
    secondaryImage: "/assets/Services Images/Digital_marketing_work.jpeg",
    badge: "ROI-Focused",
    icon: "campaign",
    subServicesTitle: "Core Growth Solutions",
    subServices: [
      {
        title: "Omnichannel Performance Campaigns",
        desc: "Scaled media buying across Google, Meta, and major search and social discovery platforms.",
        icon: "campaign",
        points: ["Full-funnel media buying strategies", "Cross-platform budget allocation", "Audience cohort segmentation"]
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        desc: "Systematic A/B and multivariate split-testing across messaging, layout hierarchy, and checkout friction points.",
        icon: "tune",
        points: ["Systematic A/B multivariate testing", "Checkout friction elimination", "Data-backed landing page redesigns"]
      },
      {
        title: "Lifecycle & Retention Automation",
        desc: "Granular RFM (Recency, Frequency, Monetary) segmentation across automated email and customer communication funnels.",
        icon: "mail",
        points: ["Automated email lifecycle flows", "RFM customer segmentation", "LTV maximization workflows"]
      },
      {
        title: "First-Party Tracking Architecture",
        desc: "Cookieless server-side tracking pipelines ensuring full attribution despite browser ad-blockers and privacy sandboxes.",
        icon: "verified_user",
        points: ["Server-side Meta CAPI setup", "First-party data attribution", "Real-time revenue telemetry"]
      }
    ],
    overview: [
      "Data-driven customer acquisition systems that replace vanity metrics with predictable return on ad spend (ROAS), reduced customer acquisition costs (CAC), and increased customer lifetime value (LTV).",
      "We build integrated funnels combining paid search, paid social, conversion optimization, and automated retention loops."
    ],
    whatsIncluded: [
      "Omnichannel Media Buying Strategy",
      "Server-Side Meta CAPI & Conversion Tracking",
      "A/B Split-Tested Conversion Funnels",
      "Automated Lifecycle Email & SMS Workflows",
      "Weekly Attribution & ROAS Reporting",
      "Creative Ad Asset Production"
    ],
    process: [
      { step: "01", title: "Discovery & Tracking Audit", desc: "Auditing current attribution, tracking pixels, conversion rates, and acquisition costs.", deliverables: "Tracking Audit & Implementation Plan" },
      { step: "02", title: "Creative & Copy Sprint", desc: "Developing high-impact visual hooks, angles, and headline variations.", deliverables: "Ad Creative Vault for Approval" },
      { step: "03", title: "Account & Funnel Setup", desc: "Structuring campaigns, custom audiences, and server-side tracking pipelines.", deliverables: "Configured Campaign Accounts" },
      { step: "04", title: "Testing & Validation", desc: "Gathering statistical data on lowest cost-per-click and highest converting cohorts.", deliverables: "Cohort Performance Matrix" },
      { step: "05", title: "Scaling & Optimization", desc: "Allocating budget into proven creative winners while trimming underperformers.", deliverables: "Scaling Budget Allocation" },
      { step: "06", title: "Retention & LTV Expansion", desc: "Implementing automated email/SMS flows to compound customer lifetime value.", deliverables: "Weekly Performance & ROAS Reports" }
    ],
    industries: [
      { name: "Direct-to-Consumer (DTC)", desc: "High-velocity catalog ads and dynamic retargeting.", icon: "shopping_cart" },
      { name: "B2B SaaS & Tech", desc: "Book-a-demo funnels and lead generation.", icon: "cloud" },
      { name: "High-Ticket Services", desc: "Qualified inbound lead capture and consults.", icon: "business_center" },
      { name: "Healthcare & Clinics", desc: "Patient appointment bookings and localized treatment ads.", icon: "medical_services" },
      { name: "Education & Coaching", desc: "Webinar funnels, masterclasses, and cohort enrollments.", icon: "school" },
      { name: "E-Commerce Stores", desc: "Product category ads and checkout optimization.", icon: "shopping_bag" }
    ],
    hireBenefits: [
      { title: "Direct ROAS Focus", desc: "We track pipeline revenue and profit, not superficial vanity impressions.", icon: "monetization_on" },
      { title: "Server-Side Tracking", desc: "99% attribution accuracy resistant to iOS 14 and cookie blocking.", icon: "security" },
      { title: "Daily Bid Optimization", desc: "Active monitoring to avoid budget burn during low-conversion windows.", icon: "tune" },
      { title: "100% Account Ownership", desc: "Your ad accounts, your billing, your data. Complete transparency.", icon: "lock_open" },
      { title: "In-House Creative Studio", desc: "Copywriters and designers producing fresh ad assets constantly.", icon: "palette" },
      { title: "Bi-Weekly Strategy Calls", desc: "Clear reviews of customer acquisition cost and upcoming promotional launches.", icon: "event" }
    ],
    technologies: [
      { name: "Google Ads", role: "Search & PMax Campaigns", category: "Paid Search" },
      { name: "Meta Ads", role: "Social Campaigns", category: "Paid Social" },
      { name: "Meta CAPI", role: "Server-Side Tracking", category: "Attribution" },
      { name: "Google Analytics 4", role: "Web Analytics", category: "Analytics" },
      { name: "SEMrush", role: "Competitor Intelligence", category: "SEO/SEM" },
      { name: "Ahrefs", role: "Backlink & Keyword Intel", category: "SEO/SEM" },
      { name: "Mailchimp", role: "Lifecycle Email Flows", category: "Retention" }
    ],
    faqs: [
      { q: "What is the recommended minimum ad spend to get started?", a: "We typically recommend a minimum ad spend of $1,500 to $3,000 per month to gather statistical conversion data and scale winning funnels effectively." },
      { q: "How do you solve iOS 14 tracking and attribution loss?", a: "We deploy server-side tracking (Meta CAPI) bypassing browser ad-blockers to achieve 99% attribution accuracy." },
      { q: "Who owns the ad accounts and creative assets?", a: "You own 100% of all ad accounts, tracking pixels, and creative deliverables. We operate as authorized agency managers." }
    ],
    stats: [
      { value: "4.4x", label: "Average Client ROAS" },
      { value: "$3M+", label: "Ad Spend Managed" },
      { value: "-35%", label: "Average CAC Reduction" },
      { value: "99%", label: "Attribution Accuracy" }
    ]
  },

  // 05. Search Engine Optimization (SEO & GEO)
  {
    id: "seo",
    slug: "seo",
    aliases: ["search-engine-optimization","technical-seo","geo-optimization"],
    title: "Search Engine Optimization (SEO & GEO)",
    heroHeadline: "Organic Search Dominance & Technical SEO That Generates Inbound Pipeline",
    tagline: "Technical SEO plus Generative Engine Optimization for AI search visibility.",
    shortDesc: "Modern organic visibility strategies combining technical, code-level crawl optimization, semantic knowledge graphs, and Generative Engine Optimization (GEO) to win positions in Google Search and AI answer engines.",
    heroImage: "/assets/Services Images/SEO.jpeg",
    secondaryImage: "/assets/Services Images/SEO.jpeg",
    badge: "Organic Growth",
    icon: "travel_explore",
    subServicesTitle: "Core SEO & GEO Solutions",
    subServices: [
      {
        title: "Technical SEO & Architecture",
        desc: "Dynamic sitemap management, canonical enforcement, crawl budget optimization, and structured redirect mapping.",
        icon: "build_circle",
        points: ["Dynamic XML sitemap automation", "Canonical enforcement & redirect maps", "Crawl budget maximization"]
      },
      {
        title: "Core Web Vitals Engineering",
        desc: "Optimization for sub-second Largest Contentful Paint (LCP), low Interaction to Next Paint (INP), and zero Cumulative Layout Shift (CLS).",
        icon: "speed",
        points: ["Sub-second Largest Contentful Paint", "Zero Cumulative Layout Shift", "Edge caching & script deferral"]
      },
      {
        title: "Semantic Schema & Entity Modeling",
        desc: "Custom nested JSON-LD schema graphs (Organization, SoftwareApplication, Product, FAQPage) to establish domain authority.",
        icon: "schema",
        points: ["Nested JSON-LD entity graphs", "Rich snippet search enhancement", "Search engine knowledge mapping"]
      },
      {
        title: "Generative Engine Optimization (GEO)",
        desc: "Content structures and high-density answer blocks optimized for direct citation in Google AI Overviews, Perplexity, and ChatGPT Search.",
        icon: "psychology",
        points: ["Direct citation in AI overviews", "High-density answer blocks", "Entity authority clustering"]
      }
    ],
    overview: [
      "Modern organic visibility strategies combining technical, code-level crawl optimization, semantic knowledge graphs, and Generative Engine Optimization (GEO) to win positions in Google Search and AI answer engines.",
      "Paid ads stop delivering the minute budget runs out. Organic SEO and GEO create compounding, durable inbound pipeline month after month."
    ],
    whatsIncluded: [
      "Comprehensive 120-Point Technical SEO Audit",
      "Core Web Vitals 95+ Score Remediation",
      "Full JSON-LD Rich Schema Implementation",
      "GEO Answer Block Optimization for AI Engines",
      "Target Keyword Mapping & Pillar Architecture",
      "Monthly Organic Telemetry & Ranking Dashboard"
    ],
    process: [
      { step: "01", title: "Discovery & Technical Audit", desc: "Auditing site speed, indexing, 404s, mobile usability, and schema health.", deliverables: "Technical SEO Audit & Action Matrix" },
      { step: "02", title: "Keyword & Entity Recon", desc: "Discovering high-intent keyword gaps and generative search query patterns.", deliverables: "Topical Cluster Keyword Map" },
      { step: "03", title: "Code & Core Web Vitals Remediation", desc: "Fixing heading hierarchies, speed bottlenecks, and structured data.", deliverables: "Clean On-Page SEO Implementation" },
      { step: "04", title: "GEO Answer Block Structuring", desc: "Creating authoritative pillar pages formatted for AI search citations.", deliverables: "Published Optimized Pillar Pages" },
      { step: "05", title: "Authority Link Building", desc: "Executing targeted white-hat outreach to gain high-DR editorial backlinks.", deliverables: "Monthly Verified Backlink Report" },
      { step: "06", title: "Growth & Telemetry Tracking", desc: "Analyzing search console telemetry and scaling ranking keyword positions.", deliverables: "Monthly Organic Traffic & Revenue Report" }
    ],
    industries: [
      { name: "B2B Software & SaaS", desc: "Capturing software evaluation and comparison searches.", icon: "cloud" },
      { name: "E-Commerce Stores", desc: "Product category and high-intent buying keyword rankings.", icon: "shopping_bag" },
      { name: "Medical & Health Clinics", desc: "Local patient search, condition guides, and map pack dominance.", icon: "medical_services" },
      { name: "Legal & Law Practices", desc: "High-value litigation, corporate counsel, and practice area keywords.", icon: "gavel" },
      { name: "Real Estate & Brokerages", desc: "Localized property search, neighborhood guides, and listings.", icon: "apartment" },
      { name: "FinTech & Financial Advisory", desc: "Compliance-safe financial education and calculator rankings.", icon: "account_balance" }
    ],
    hireBenefits: [
      { title: "Engineer-Led Optimization", desc: "Our SEO specialists write code and implement technical fixes directly.", icon: "code" },
      { title: "Strict White-Hat Practices", desc: "100% compliant with Google Search essentials and spam policies.", icon: "verified" },
      { title: "GEO & AI Search Ready", desc: "Optimized for Google AI Overviews, Perplexity, and ChatGPT search citations.", icon: "psychology" },
      { title: "Transparent Position Reports", desc: "Real-time dashboards tracking every keyword change and organic click.", icon: "analytics" },
      { title: "Sustainable Long-Term ROI", desc: "Compounding organic traffic that keeps lowering customer acquisition costs.", icon: "trending_up" },
      { title: "No Black-Box Promises", desc: "Clear weekly documentation of every change, link, and article published.", icon: "fact_check" }
    ],
    technologies: [
      { name: "Ahrefs", role: "Backlink & Keyword Intel", category: "SEO" },
      { name: "SEMrush", role: "Search Position Tracking", category: "SEO" },
      { name: "Google Analytics 4", role: "Organic Traffic Telemetry", category: "Analytics" },
      { name: "Next.js", role: "High-Speed SSR Frontend", category: "Code" },
      { name: "HTML5", role: "Semantic Markup", category: "Code" },
      { name: "WordPress", role: "CMS Architecture", category: "CMS" }
    ],
    faqs: [
      { q: "What is Generative Engine Optimization (GEO)?", a: "GEO optimizes your content structure, entity relationships, and answer blocks so AI search engines (like Perplexity, ChatGPT Search, and Google AI Overviews) quote and cite your brand as the definitive source." },
      { q: "How long does it take to see rankings improve with SEO?", a: "Technical and on-page fixes often show ranking improvements within 3 to 6 weeks. Significant competitive keyword moves and domain authority growth compound over 3 to 6 months." },
      { q: "How does site speed affect SEO rankings?", a: "Google uses Core Web Vitals as a direct ranking factor. Sub-second load times and zero layout shifts give your pages a measurable advantage over slower competitors." }
    ],
    stats: [
      { value: "+210%", label: "Average Organic Traffic Growth" },
      { value: "98/100", label: "Average Core Web Vitals Score" },
      { value: "450+", label: "Top 3 Keywords Achieved" },
      { value: "100%", label: "White-Hat Compliant" }
    ]
  },

  // 06. Google & Meta Paid Advertising
  {
    id: "google-meta-ads",
    slug: "google-meta-ads",
    aliases: ["google-ads","meta-ads","paid-media","ppc-advertising"],
    title: "Google & Meta Paid Advertising",
    heroHeadline: "Hyper-Targeted Paid Acquisition with Proven Positive ROAS",
    tagline: "High-ROI paid search and paid social campaigns with server-side tracking.",
    shortDesc: "High-ROI paid advertising engines that balance intent-driven search traffic with dynamic visual retargeting to accelerate customer acquisition and maintain scalable margins.",
    heroImage: "/assets/Services Images/Google Ads.jpeg",
    secondaryImage: "/assets/Services Images/Google Ads.jpeg",
    badge: "High ROAS",
    icon: "ads_click",
    subServicesTitle: "Core Paid Media Solutions",
    subServices: [
      {
        title: "High-Intent Search & Shopping",
        desc: "Tiered Google Search campaigns targeting transactional intent, combined with Performance Max (PMax) asset groups.",
        icon: "search",
        points: ["Transactional keyword targeting", "Performance Max asset groups", "Negative keyword scrub protocols"]
      },
      {
        title: "Scalable Paid Social",
        desc: "Meta Advantage+ Shopping Campaigns (ASC), automated audience exclusions, and broad-targeting acquisition funnels.",
        icon: "share",
        points: ["Advantage+ Shopping Campaigns", "Automated audience exclusions", "Broad-targeting scaling funnels"]
      },
      {
        title: "Dynamic Creative Testing (DCT)",
        desc: "Iterative creative testing matrix isolating visual hooks, angles, copy variants, and calls to action.",
        icon: "auto_awesome",
        points: ["Visual hook & angle testing", "Creative fatigue mitigation", "Iterative copy & CTA variations"]
      },
      {
        title: "Conversion API Integration",
        desc: "Full server-side Meta Conversions API (CAPI) and Google Enhanced Conversions setups to maintain precise attribution.",
        icon: "sync_alt",
        points: ["Server-side Meta CAPI pipeline", "Google Enhanced Conversions", "99% attribution accuracy"]
      }
    ],
    overview: [
      "High-ROI paid advertising engines that balance intent-driven search traffic with dynamic visual retargeting to accelerate customer acquisition and maintain scalable margins.",
      "We operate with scientific rigor: daily bid management, aggressive A/B testing of angles, and server-side tracking to turn ad spend into predictable revenue."
    ],
    whatsIncluded: [
      "Account Restructure & Conversion Tracking Setup",
      "Server-Side Meta CAPI & Google Enhanced Tracking",
      "Full Copywriting & Visual Creative Assets",
      "Daily Bid Tuning & Negative Keyword Maintenance",
      "A/B Split-Tested Conversion Landing Pages",
      "Weekly Strategic Sync & Transparent Reporting"
    ],
    process: [
      { step: "01", title: "Discovery & Tracking Audit", desc: "Verifying conversion triggers, offline events, and pixel firing health.", deliverables: "Tracking Audit & Implementation Plan" },
      { step: "02", title: "Creative & Copy Sprint", desc: "Producing 10+ ad creative hooks, angles, and headline variations.", deliverables: "Ad Creative Vault for Approval" },
      { step: "03", title: "Account Architecture", desc: "Structuring campaign hierarchy (Search, PMax, Top-of-Funnel, Retargeting).", deliverables: "Configured Campaign Accounts" },
      { step: "04", title: "Testing Phase (Days 1-14)", desc: "Gathering statistical data on lowest cost-per-click and highest converting cohorts.", deliverables: "Initial Cohort Performance Matrix" },
      { step: "05", title: "Scaling Winners", desc: "Allocating budget into proven creative and audience winners while cutting underperformers.", deliverables: "Scaling Budget Allocation" },
      { step: "06", title: "Growth & Creative Refresh", desc: "Introducing fresh creatives weekly to prevent fatigue and maintain ROAS.", deliverables: "Weekly Performance Reports" }
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
      { title: "Server-Side Tracking", desc: "99% attribution accuracy resistant to iOS 14 and third-party cookie bans.", icon: "security" },
      { title: "100% Account Ownership", desc: "Your ad accounts, your billing, your data. Complete transparency.", icon: "lock_open" },
      { title: "Daily Bid Optimization", desc: "Active monitoring to avoid budget burn during low-conversion windows.", icon: "tune" },
      { title: "In-House Creative Studio", desc: "Motion designers and copywriters creating fresh ad assets constantly.", icon: "palette" },
      { title: "Bi-Weekly Strategy Calls", desc: "Clear reviews of customer acquisition cost and upcoming promotional launches.", icon: "event" }
    ],
    technologies: [
      { name: "Google Ads", role: "Search & PMax Campaigns", category: "Ads" },
      { name: "Meta Ads", role: "Social Campaigns", category: "Ads" },
      { name: "Meta CAPI", role: "Server-Side Tracking", category: "Analytics" },
      { name: "Google Analytics 4", role: "Attribution Telemetry", category: "Analytics" }
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

  // 07. Brand Identity & Design Systems
  {
    id: "branding",
    slug: "branding-logo",
    aliases: ["branding","brand-identity","logo-design","visual-identity"],
    title: "Brand Identity & Design Systems",
    heroHeadline: "Iconic Visual Identities That Command Market Authority",
    tagline: "Cohesive visual branding built on strategy, typography, and design tokens.",
    shortDesc: "Cohesive visual branding strategies that turn businesses into recognizable market leaders through mathematical precision, typography systems, and enduring brand assets.",
    heroImage: "/assets/Services Images/branding and logo.jpeg",
    secondaryImage: "/assets/Services Images/branding and logo.jpeg",
    badge: "Identity Systems",
    icon: "auto_awesome",
    subServicesTitle: "Core Brand Solutions",
    subServices: [
      {
        title: "Brand Strategy & Positioning",
        desc: "Competitive whitespace mapping, brand archetypes, value propositions, and tone-of-voice documentation.",
        icon: "psychology",
        points: ["Competitive whitespace mapping", "Archetype & value proposition design", "Comprehensive tone-of-voice guidelines"]
      },
      {
        title: "Responsive Logo Systems",
        desc: "Geometric, vector-grid logo suites engineered from micro-favicons up to large-scale print production.",
        icon: "auto_awesome",
        points: ["Mathematical vector grid geometry", "Scalable responsive lockups", "Favicon to billboard versatility"]
      },
      {
        title: "Semantic Color & Type Hierarchy",
        desc: "Standardized color tokens (Pantone, CMYK, RGB, Hex) and web-font stacks optimized for cross-platform legibility.",
        icon: "palette",
        points: ["Pantone, CMYK, RGB, Hex tokens", "Web-font paired typography stacks", "High-contrast accessibility standards"]
      },
      {
        title: "Collateral & Brand Manuals",
        desc: "Executive stationery kits, investor deck styling, social media templates, and comprehensive brand guideline manuals.",
        icon: "menu_book",
        points: ["Complete brand guideline manuals", "Executive stationery & slide decks", "Social media vector templates"]
      }
    ],
    overview: [
      "Cohesive visual branding strategies that turn businesses into recognizable market leaders through mathematical precision, typography systems, and enduring brand assets.",
      "We build identity systems that scale effortlessly from digital screen tokens to massive print collateral."
    ],
    whatsIncluded: [
      "Full Vector Logo Suite (Primary, Secondary, Monogram)",
      "Comprehensive 40+ Page Brand Guideline Manual",
      "Color System (Pantone, CMYK, RGB, Hex Tokens)",
      "Web & Print Typography Pairing Licenses",
      "Executive Stationery & Investor Slide Decks",
      "Social Media Avatar & Header Kit"
    ],
    process: [
      { step: "01", title: "Discovery & Archetype Mapping", desc: "Analyzing market positioning, competitive whitespace, and customer personas.", deliverables: "Brand Strategy Document & Moodboard" },
      { step: "02", title: "Concept Generation", desc: "Developing 3 distinct conceptual directions with custom vector sketches.", deliverables: "3 Conceptual Logo Directions" },
      { step: "03", title: "Refinement & Typography", desc: "Fine-tuning geometric proportions, kerning, and color harmonies on chosen route.", deliverables: "Vector Geometry & Typography Lockup" },
      { step: "04", title: "Token System & Colors", desc: "Defining semantic color palettes (Pantone, CMYK, Hex) and CSS variables.", deliverables: "Color Token & Accessibility Matrix" },
      { step: "05", title: "Collateral & Deck Design", desc: "Styling stationery, investor pitch decks, and digital asset templates.", deliverables: "Executive Brand Collateral Kit" },
      { step: "06", title: "Brand Manual Delivery", desc: "Assembling the definitive brand manual with usage dos/don'ts and asset packages.", deliverables: "Final Brand Guideline Manual & Vectors" }
    ],
    industries: [
      { name: "Luxury & Lifestyle", desc: "Refined minimalist typography and packaging design.", icon: "diamond" },
      { name: "Technology & AI", desc: "Geometric icons, dark mode interfaces, and tech identities.", icon: "terminal" },
      { name: "Venture Capital & Finance", desc: "Trust-centric corporate palettes and investor decks.", icon: "account_balance" },
      { name: "Hospitality & Architecture", desc: "Bespoke spatial signage and tactile stationery.", icon: "apartment" },
      { name: "Health & Biotechnology", desc: "Clean medical aesthetics, clarity, and certified standards.", icon: "biotech" },
      { name: "Gaming & Entertainment", desc: "High-energy typography, dynamic motion marks, and 3D.", icon: "sports_esports" }
    ],
    hireBenefits: [
      { title: "Vector Mathematical Precision", desc: "Logos constructed with geometric grid systems that scale infinitely without distortion.", icon: "architecture" },
      { title: "Production-Ready Formats", desc: "Receive all industry formats: SVG, EPS, PDF, AI, and optimized WebP.", icon: "folder_zip" },
      { title: "Web Token Integration", desc: "Brand colors and typography translate directly to CSS and Tailwind tokens.", icon: "palette" },
      { title: "Full Copyright Transfer", desc: "You receive 100% intellectual property ownership of the finalized brand identity.", icon: "verified" },
      { title: "Investor-Grade Aesthetics", desc: "Position your company to command premium pricing and attract top-tier capital.", icon: "monetization_on" },
      { title: "Rapid 14-Day Delivery", desc: "Structured design sprints delivering complete identity packages without delays.", icon: "speed" }
    ],
    technologies: [
      { name: "Illustrator", role: "Vector Logo Construction", category: "Design" },
      { name: "Photoshop", role: "Brand Mockups & Textures", category: "Design" },
      { name: "Adobe InDesign", role: "Brand Guidelines & Editorial", category: "Design" },
      { name: "Figma", role: "Digital Brand Systems", category: "Design" },
      { name: "Canva", role: "Template Systems", category: "Templates" },
      { name: "After Effects", role: "Animated Logo Reveals", category: "Motion" }
    ],
    faqs: [
      { q: "What file formats will we receive for our logo?", a: "You receive industry-standard vector files (AI, EPS, SVG, PDF) alongside web-optimized transparent PNGs and WebP files in all color variations." },
      { q: "Do you provide full trademark and copyright ownership?", a: "Yes. Upon final delivery, all intellectual property rights and copyrights transfer 100% to your company." },
      { q: "What is included in the brand guideline manual?", a: "The manual specifies exact logo spacing, minimum sizing, secondary lockups, color codes (Pantone, CMYK, RGB, Hex), typography rules, and real-world collateral examples." }
    ],
    stats: [
      { value: "100%", label: "Vector Precision Geometry" },
      { value: "40+ Pg", label: "Definitive Brand Manual" },
      { value: "14 Days", label: "Average Brand Sprint Time" },
      { value: "100%", label: "Client IP Ownership" }
    ]
  },

  // 08. Video Production & Motion Graphics
  {
    id: "video-motion",
    slug: "video-motion-graphics",
    aliases: ["video-production","video-editing","motion-graphics","video-editing-motion"],
    title: "Video Production & Motion Graphics",
    heroHeadline: "Cinematic Visual Storytelling & High-Retention Motion Graphics",
    tagline: "Cinematic motion design and post-production for conversion-driven video.",
    shortDesc: "Cinematic motion design and post-production assets tailored to grab attention, explain complex digital systems, and drive conversions across modern feeds.",
    heroImage: "/assets/Services Images/Video Editing.jpeg",
    secondaryImage: "/assets/Services Images/Video Editing.jpeg",
    badge: "Cinematic",
    icon: "movie_creation",
    subServicesTitle: "Core Motion & Video Solutions",
    subServices: [
      {
        title: "SaaS Walkthroughs & UI Demos",
        desc: "Transforming raw interface interactions into polished 60 FPS demonstrations within 3D hardware viewports.",
        icon: "play_circle",
        points: ["60 FPS interface screencasts", "3D device viewport framing", "Kinetic cursor & gesture animations"]
      },
      {
        title: "Paid Social Motion Ads",
        desc: "Direct-response video assets built around high-impact 3-second visual hooks, kinetic captions, and sound design.",
        icon: "smart_display",
        points: ["High-retention 3-second visual hooks", "Burned-in kinetic captions", "Platform-native aspect ratios (9:16, 16:9)"]
      },
      {
        title: "3D Kinetic Typography",
        desc: "Custom animated type engines and lower-thirds reflecting brand identity guidelines.",
        icon: "text_fields",
        points: ["Custom animated type engines", "Branded lower-thirds & titles", "Dynamic easing & physics motion"]
      },
      {
        title: "Color Grading & Sound Design",
        desc: "Broadcast-standard color-managed grading alongside multi-track foley, cleanup, and platform-compliant loudness normalization.",
        icon: "tune",
        points: ["DaVinci Resolve color timing", "Foley sound effects & audio cleanup", "Broadcast loudness normalization"]
      }
    ],
    overview: [
      "Cinematic motion design and post-production assets tailored to grab attention, explain complex digital systems, and drive conversions across modern feeds.",
      "Video is the single most effective medium for communicating value, driving emotional engagement, and accelerating conversions in the modern attention economy."
    ],
    whatsIncluded: [
      "4K Ultra-HD & Full HD Multi-Format Master Exports",
      "Aspect Ratios: 16:9 (YouTube/Web), 9:16 (Reels/TikTok), 1:1 (Social)",
      "Custom Kinetic Typography & Subtitle Burn-In",
      "Licensed Commercial Background Music & Sound Design",
      "Professional DaVinci Resolve Color Grade",
      "Unlimited Review Revisions on Sprints"
    ],
    process: [
      { step: "01", title: "Discovery & Storyboard", desc: "Defining pacing, visual style, music tone, and narrative milestones.", deliverables: "Storyboard Deck & Music Direction" },
      { step: "02", title: "Assembly Cut", desc: "Rough editing of raw clips synchronized to music tempo and voiceover.", deliverables: "Draft 1 Preview Link" },
      { step: "03", title: "Motion Graphics & Kinetic Text", desc: "Injecting animated overlays, lower thirds, callouts, and transitions.", deliverables: "Draft 2 with Motion Graphics" },
      { step: "04", title: "Color Grading & Audio Master", desc: "Color timing in DaVinci Resolve, dialogue cleanup, and Foley sound design.", deliverables: "Color & Audio Mastered Preview" },
      { step: "05", title: "Multi-Format Export", desc: "Exporting high-bitrate MP4 and ProRes files in 16:9, 9:16, and 1:1.", deliverables: "Final 4K Master Deliverable Archive" },
      { step: "06", title: "Growth & SLA Monitoring", desc: "Tracking video retention curves and iterating hooks on future edits.", deliverables: "Retention Analysis & Iteration Plan" }
    ],
    industries: [
      { name: "Consumer Brands", desc: "High-energy product showcases and lifestyle reels.", icon: "shopping_cart" },
      { name: "Tech & SaaS", desc: "Feature explainer animations and product launch videos.", icon: "computer" },
      { name: "Creators & Influencers", desc: "YouTube video editing and vertical short-form retention optimization.", icon: "person" },
      { name: "Real Estate", desc: "Cinematic drone fly-throughs and luxury estate tours.", icon: "home" },
      { name: "Music & Entertainment", desc: "Music video post-production and teaser trailers.", icon: "music_note" },
      { name: "Corporate & B2B", desc: "Company culture showcases and client video testimonials.", icon: "corporate_fare" }
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
      { name: "DaVinci Resolve", role: "Color Grading & Audio", category: "Post-Production" },
      { name: "Premiere Pro", role: "NLE Video Assembly", category: "Editing" },
      { name: "After Effects", role: "Motion & Visual Effects", category: "Motion" },
      { name: "Blender", role: "3D Animation & Modeling", category: "3D" },
      { name: "CapCut", role: "Vertical Short-Form", category: "Social" },
      { name: "Final Cut Pro", role: "Rapid macOS Editing", category: "Editing" }
    ],
    faqs: [
      { q: "What footage do we need to provide?", a: "You can provide raw footage recorded on camera or smartphone via Google Drive or Dropbox. We also source licensed stock footage and construct 100% motion graphics from scratch." },
      { q: "Can you export videos in both landscape and vertical formats?", a: "Yes. Every project includes exports in 16:9 for YouTube and website embeds, as well as 9:16 vertical for Instagram Reels, TikTok, and YouTube Shorts." },
      { q: "Do you provide voiceovers and music licensing?", a: "Yes. We source professional voiceovers in multiple accents and license commercial background audio tracks included in project pricing." }
    ],
    stats: [
      { value: "350+", label: "Videos Edited & Produced" },
      { value: "15M+", label: "Combined Video Views" },
      { value: "48 hrs", label: "Average Short Turnaround" },
      { value: "4K UHD", label: "Standard Export Resolution" }
    ]
  },

  // 09. Rapid MVP Development
  {
    id: "mvp-dev",
    slug: "mvp-development",
    aliases: ["rapid-mvp-development","mvp-launch","startup-mvp","mvp"],
    title: "Rapid MVP Development",
    heroHeadline: "From Vision to Working Production Prototype in 4–6 Weeks",
    tagline: "Production-grade MVPs delivered in 4–6 weeks for founders and innovators.",
    shortDesc: "Zero-to-one product development delivering production-grade minimum viable software products within 4 to 6 weeks for early-stage founders and corporate innovators.",
    heroImage: "/assets/Services Images/MVP Development.jpeg",
    secondaryImage: "/assets/Services Images/MVP Development.jpeg",
    badge: "Speed to Market",
    icon: "rocket_launch",
    subServicesTitle: "Core MVP Solutions",
    subServices: [
      {
        title: "Scope Definition (MoSCoW)",
        desc: "Removing bloated roadmaps to prioritize essential features that directly validate user intent and monetization.",
        icon: "checklist",
        points: ["MoSCoW priority roadmap", "Core value loop isolation", "Sprint milestone scheduling"]
      },
      {
        title: "Scalable Code Foundations",
        desc: "Built on production-ready Next.js and PostgreSQL backends rather than fragile, unmaintainable no-code tools.",
        icon: "code",
        points: ["Next.js & TypeScript architecture", "PostgreSQL database modeling", "Clean sovereign code ownership"]
      },
      {
        title: "Turnkey Auth & Monetization",
        desc: "Complete authentication (OAuth, magic links) and billing infrastructure (subscriptions, webhooks, usage limits).",
        icon: "credit_card",
        points: ["OAuth & magic link authentication", "Automated subscription webhooks", "Usage tiering & rate limiting"]
      },
      {
        title: "Behavioral Analytics Setup",
        desc: "Built-in event tracking to evaluate customer onboarding friction and retention from day one.",
        icon: "insights",
        points: ["User onboarding funnel tracking", "Event instrumentation & metrics", "Retention cohort analysis"]
      }
    ],
    overview: [
      "Zero-to-one product development delivering production-grade minimum viable software products within 4 to 6 weeks for early-stage founders and corporate innovators.",
      "We cut bloated roadmaps to build clean, functional software ready to acquire paying customers and pitch investors."
    ],
    whatsIncluded: [
      "Production Next.js 16 Full-Stack Codebase",
      "Supabase / PostgreSQL Database Architecture",
      "Authentication & User Management (OAuth / Email)",
      "Stripe Subscription & Checkout Integration",
      "Clean UI/UX Design System in Figma & Tailwind",
      "Full Source Code & Sovereign IP Ownership"
    ],
    process: [
      { step: "01", title: "Discovery & MoSCoW Scoping", desc: "Isolating the single core value loop that users will pay for and discarding bloat.", deliverables: "MVP Feature Specification Deck" },
      { step: "02", title: "Figma UX/UI Sprint (Week 1)", desc: "Designing clickable interactive prototypes with dark mode and mobile views.", deliverables: "Clickable Figma Investor Prototype" },
      { step: "03", title: "Core Engineering (Weeks 2-4)", desc: "Full-stack Next.js and PostgreSQL coding with auth and payment webhooks.", deliverables: "Working Alpha Staging Environment" },
      { step: "04", title: "Testing & User Feedback (Week 5)", desc: "User journey testing, security audits, and behavioral analytics setup.", deliverables: "Beta QA Pass & Fixes" },
      { step: "05", title: "Production Deployment (Week 6)", desc: "DNS cutover on AWS or Vercel with real payment gateways and live telemetry.", deliverables: "Live Production Software & Repo Handoff" },
      { step: "06", title: "Post-Launch Iteration", desc: "Analyzing early user feedback and planning the post-seed feature roadmap.", deliverables: "30-Day Warranty & Roadmap Review" }
    ],
    industries: [
      { name: "AI Startups", desc: "LLM wrappers, specialized copilots, and model interfaces.", icon: "neurology" },
      { name: "FinTech & Neobanks", desc: "Micro-investing, payroll advances, and wallet prototypes.", icon: "wallet" },
      { name: "Marketplaces", desc: "Two-sided service platforms and escrow payments.", icon: "storefront" },
      { name: "Health & Wellness", desc: "Telehealth consults, booking engines, and wellness apps.", icon: "spa" },
      { name: "B2B SaaS", desc: "Workflow automation, CRM add-ons, and team portals.", icon: "cloud" },
      { name: "SaaS Productivity", desc: "Task managers, collaboration hubs, and document engines.", icon: "check_circle" }
    ],
    hireBenefits: [
      { title: "Fixed-Price Guarantee", desc: "Predictable, transparent budget with zero hidden hourly creep.", icon: "payments" },
      { title: "Production-Grade Code", desc: "No throwaway no-code apps. You receive scalable Next.js and Postgres code.", icon: "code" },
      { title: "Investor-Ready Demos", desc: "Clean UI/UX and responsive design built to impress angel investors and VCs.", icon: "trending_up" },
      { title: "100% Sovereign IP", desc: "All GitHub repositories, accounts, and designs belong unconditionally to you.", icon: "verified" },
      { title: "Turnkey Payments & Auth", desc: "Start charging customers on day one with built-in subscription billing.", icon: "credit_card" },
      { title: "Direct Architect Access", desc: "Work directly with lead full-stack engineers on daily Slack channels.", icon: "chat" }
    ],
    technologies: [
      { name: "Next.js", role: "Full-Stack Application Layer", category: "Core" },
      { name: "React", role: "Frontend UI Components", category: "Frontend" },
      { name: "TypeScript", role: "Type-Safe Architecture", category: "Core" },
      { name: "Tailwind CSS", role: "Rapid Utility Styling", category: "Design" },
      { name: "Supabase", role: "PostgreSQL & Auth Engine", category: "Database" },
      { name: "PostgreSQL", role: "Relational Database", category: "Database" },
      { name: "Node.js", role: "Backend Microservices", category: "Backend" },
      { name: "Docker", role: "Container Packaging", category: "DevOps" },
      { name: "AWS", role: "Cloud Hosting", category: "Cloud" },
      { name: "GitHub Actions", role: "CI/CD Automation", category: "DevOps" }
    ],
    faqs: [
      { q: "Can we really launch a production MVP in 4 to 6 weeks?", a: "Yes. By rigorously prioritizing features using MoSCoW rules and leveraging our pre-architected Next.js/PostgreSQL patterns, we eliminate months of unnecessary delay." },
      { q: "Is the code scalable or will we need to rewrite it later?", a: "It is 100% production-ready, clean TypeScript code built on standard industry foundations (Next.js, Tailwind, PostgreSQL) that can scale to hundreds of thousands of users." },
      { q: "What happens after the MVP is launched?", a: "We provide 30 days of complimentary bug warranty and can continue as your dedicated engineering pod to build v2 features as you scale." }
    ],
    stats: [
      { value: "4-6 Wks", label: "Idea to Production Launch" },
      { value: "100%", label: "Sovereign Code Ownership" },
      { value: "Zero", label: "Fragile No-Code Shortcuts" },
      { value: "$12M+", label: "Capital Raised by Our MVPs" }
    ]
  },

  // 10. Shopify Store Development & Headless Commerce
  {
    id: "shopify-dev",
    slug: "shopify-development",
    aliases: ["shopify-store-development","shopify","shopify-plus","ecommerce-development"],
    title: "Shopify Store Development & Headless Commerce",
    heroHeadline: "High-Converting Shopify & Shopify Plus E-Commerce Storefronts",
    tagline: "Custom Liquid and Hydrogen storefronts built for volume and speed.",
    shortDesc: "Custom eCommerce platforms engineered for high order volumes, sub-second response times, and optimized average order values (AOV).",
    heroImage: "/assets/Services Images/Shopify.jpeg",
    secondaryImage: "/assets/Services Images/Shopify.jpeg",
    badge: "E-Commerce",
    icon: "shopping_bag",
    subServicesTitle: "Core Shopify Solutions",
    subServices: [
      {
        title: "Custom Liquid Themes",
        desc: "Clean themes built from the ground up using Online Store 2.0 architecture, avoiding slow third-party page builders.",
        icon: "brush",
        points: ["Online Store 2.0 Liquid code", "Zero third-party builder bloat", "Sub-second mobile loading"]
      },
      {
        title: "Headless Commerce (Hydrogen)",
        desc: "Decoupled, edge-rendered storefronts powered by Shopify Hydrogen and Next.js via Storefront GraphQL APIs.",
        icon: "developer_board",
        points: ["Shopify Storefront GraphQL API", "Hydrogen / Next.js edge rendering", "Infinite dynamic product filtering"]
      },
      {
        title: "Checkout Extensibility",
        desc: "Custom checkout modifications, order bumps, custom rules via Shopify Functions, and integrated B2B wholesale portals.",
        icon: "shopping_cart_checkout",
        points: ["Shopify Functions discount logic", "Slide-out cart upsells & bumps", "B2B wholesale customer pricing"]
      },
      {
        title: "ERP & 3PL Integrations",
        desc: "Automated inventory and order routing syncing Shopify stores with internal ERPs, warehouse networks, and CRM tools.",
        icon: "inventory_2",
        points: ["Automated 3PL warehouse routing", "ERP inventory synchronization", "Multi-location fulfillment logic"]
      }
    ],
    overview: [
      "Custom eCommerce platforms engineered for high order volumes, sub-second response times, and optimized average order values (AOV).",
      "Whether you are launching a high-velocity DTC brand or managing an enterprise store with 50,000 SKUs on Shopify Plus, our certified developers ensure seamless inventory sync and sub-second load times."
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
      { step: "01", title: "Discovery & UX Audit", desc: "Auditing catalog taxonomy, customer paths, and checkout friction points.", deliverables: "E-Commerce Wireframe & Store Spec" },
      { step: "02", title: "Custom Figma Design", desc: "Crafting bespoke desktop and mobile e-commerce screens.", deliverables: "Full Shopify UI Design in Figma" },
      { step: "03", title: "Liquid & Section Coding", desc: "Developing custom modular sections inside Shopify Theme 2.0.", deliverables: "Private Shopify Preview Store" },
      { step: "04", title: "App & Payment Integration", desc: "Integrating reviews, ERP webhooks, and payment gateways.", deliverables: "Functional E-Commerce Testing Store" },
      { step: "05", title: "Data Migration & QA", desc: "Migrating products, customer records, order history, and setting 301 redirects.", deliverables: "Data Verification Sign-Off" },
      { step: "06", title: "Launch & Go-Live", desc: "Zero-downtime DNS cutover, live test purchases, and speed verification.", deliverables: "Live Shopify Store & Staff Training" }
    ],
    industries: [
      { name: "Apparel & Luxury Fashion", desc: "Lookbook layouts, size recommendation calculators, and color swatches.", icon: "checkroom" },
      { name: "Health & Beauty (Cosmetics)", desc: "Subscription refills, bundle builders, and customer review showcases.", icon: "spa" },
      { name: "Electronics & Tech Gear", desc: "Interactive tech spec comparisons, warranty add-ons, and manuals.", icon: "devices" },
      { name: "Food & Beverage", desc: "Perishable delivery scheduling, multi-pack bundles, and regional taxes.", icon: "restaurant" },
      { name: "Home & Interior Decor", desc: "High-resolution zoom visualizers, room mockups, and dimensional guides.", icon: "chair" },
      { name: "Sports & Outdoor Equipment", desc: "Freight calculation, gear selector wizards, and warranty registration.", icon: "sports_tennis" }
    ],
    hireBenefits: [
      { title: "Zero App Bloat", desc: "We code custom features directly into Liquid, saving thousands in monthly app fees.", icon: "savings" },
      { title: "Sub-Second Load Times", desc: "Optimized asset delivery ensuring users never bounce due to laggy pages.", icon: "bolt" },
      { title: "Shopify Plus Experts", desc: "Experience with checkout extensions, scripts, and multi-store international expansion.", icon: "verified" },
      { title: "Complete SEO Preservation", desc: "Rigorous 301 redirects ensuring your existing organic Google rankings remain intact.", icon: "shield" },
      { title: "Conversion-Centric UX", desc: "Slide carts, sticky checkout buttons, and dynamic upsells that lift AOV.", icon: "trending_up" },
      { title: "Full Admin Handover", desc: "Modular section controls allowing non-technical teams to edit content easily.", icon: "admin_panel_settings" }
    ],
    technologies: [
      { name: "Shopify", role: "E-Commerce Core Platform", category: "Core" },
      { name: "Shopify Liquid", role: "Theme Template Engine", category: "Frontend" },
      { name: "Shopify Plus", role: "Enterprise Architecture", category: "Platform" },
      { name: "WooCommerce", role: "Catalog Migration & Tools", category: "E-Commerce" },
      { name: "GraphQL", role: "Storefront API Data", category: "API" },
      { name: "Tailwind CSS", role: "Modular UI Styling", category: "Design" },
      { name: "TypeScript", role: "Custom Script Logic", category: "Code" },
      { name: "React", role: "Headless Components", category: "Frontend" }
    ],
    faqs: [
      { q: "Can you migrate our store from WooCommerce or Magento without losing orders?", a: "Yes. We execute automated and verified database migrations that transfer all historical customers, orders, SKUs, and establish 301 URL redirects so Google rankings remain steady." },
      { q: "Do you build headless Shopify stores using Next.js?", a: "Yes. For brands requiring bespoke web applications or custom interactive experiences, we build headless storefronts powered by Shopify's GraphQL Storefront API." },
      { q: "Will our marketing team be able to customize page sections easily?", a: "Absolutely. We build modular Shopify Theme 2.0 sections, meaning your marketing team can drag, drop, and edit banner content, text, and images without writing code." }
    ],
    stats: [
      { value: "+38%", label: "Average AOV Increase" },
      { value: "1.2s", label: "Average Mobile Load Time" },
      { value: "50+", label: "Shopify Stores Shipped" },
      { value: "100%", label: "Clean Code Guarantee" }
    ]
  },

  // 11. WordPress & Enterprise CMS Development
  {
    id: "wordpress-dev",
    slug: "wordpress-development",
    aliases: ["wordpress-enterprise-cms","wordpress","cms-development","headless-wordpress"],
    title: "WordPress & Enterprise CMS Development",
    heroHeadline: "High-Performance Custom WordPress & WooCommerce Architecture",
    tagline: "Custom Gutenberg blocks, ACF Pro, and headless WordPress architecture.",
    shortDesc: "Lightweight, secure WordPress architectures that replace bloated pre-made templates with custom Gutenberg block ecosystems and Advanced Custom Fields (ACF Pro).",
    heroImage: "/assets/Services Images/wordpress.jpeg",
    secondaryImage: "/assets/Services Images/wordpress.jpeg",
    badge: "Custom CMS",
    icon: "space_dashboard",
    subServicesTitle: "Core WordPress Solutions",
    subServices: [
      {
        title: "Custom Gutenberg Blocks",
        desc: "Native React-powered editor blocks letting teams build layouts without breaking global styles or bloating code.",
        icon: "view_quilt",
        points: ["Native React Gutenberg block suite", "Strict visual style enforcement", "Zero builder plugin dependencies"]
      },
      {
        title: "ACF Pro Content Modeling",
        desc: "Structured relational schemas and flexible content modules tailored for distraction-free editorial workflows.",
        icon: "schema",
        points: ["ACF Pro flexible content schemas", "Custom post type taxonomies", "Intuitive authoring dashboard"]
      },
      {
        title: "Headless WordPress",
        desc: "WordPress used as a decoupled API engine, delivering content via WPGraphQL to high-velocity Next.js frontends.",
        icon: "hub",
        points: ["Decoupled WPGraphQL endpoints", "Next.js ISR frontends", "Hardened isolated admin backend"]
      },
      {
        title: "Enterprise Hardening & Caching",
        desc: "Redis object caching, custom database indexing, and strict endpoint security to guarantee sub-second page loads.",
        icon: "security",
        points: ["Redis object cache acceleration", "Custom MySQL query optimization", "Automated backup & WAF firewall"]
      }
    ],
    overview: [
      "Lightweight, secure WordPress architectures that replace bloated pre-made templates with custom Gutenberg block ecosystems and Advanced Custom Fields (ACF Pro).",
      "We build custom WordPress sites that load in under a second, stay secure, and empower non-technical marketing teams to publish without fear."
    ],
    whatsIncluded: [
      "Bespoke Gutenberg Block Theme (Zero Elementor/Divi Bloat)",
      "Advanced Custom Fields Pro Relational Architecture",
      "Redis Object Caching & MySQL Database Indexing",
      "Automated Daily Backups & WAF Security Rules",
      "Full SEO Schema & Metadata Integration",
      "Staff CMS Training Video Library"
    ],
    process: [
      { step: "01", title: "Discovery & IA Scoping", desc: "Auditing content schemas, editorial workflows, and post relationships.", deliverables: "Content Architecture Blueprint" },
      { step: "02", title: "Custom Figma Design", desc: "Designing responsive layouts and modular block specifications.", deliverables: "Figma UI Block System" },
      { step: "03", title: "Custom Gutenberg Coding", desc: "Building native React blocks and registering clean custom post types.", deliverables: "Private Staging WordPress Build" },
      { step: "04", title: "Database & Security Tuning", desc: "Configuring Redis caching, table indexing, and XML-RPC lockdown.", deliverables: "Speed & Security Audit Sign-Off" },
      { step: "05", title: "Content Migration & QA", desc: "Migrating articles, media, establishing 301 redirects, and SSL cutover.", deliverables: "Verified Content Migration" },
      { step: "06", title: "Launch & Go-Live", desc: "Zero-downtime DNS deployment with continuous security monitoring.", deliverables: "Live WordPress Site & Video Handoff" }
    ],
    industries: [
      { name: "Publishing & Media Outlets", desc: "High-traffic news feeds, editorial workflows, and paywalls.", icon: "newspaper" },
      { name: "Corporate & Enterprise", desc: "Investor relations, compliance newsrooms, and multi-language portals.", icon: "corporate_fare" },
      { name: "Non-Profit & Philanthropy", desc: "Donation processing, campaign storytelling, and volunteer forms.", icon: "volunteer_activism" },
      { name: "Educational Institutions", desc: "Faculty directories, course catalogs, and academic event calendars.", icon: "school" },
      { name: "Professional Advisory", desc: "Whitepaper downloads, case study archives, and consult bookings.", icon: "business_center" },
      { name: "Hospitality & Tourism", desc: "Property portfolios, virtual guides, and dynamic booking integrations.", icon: "hotel" }
    ],
    hireBenefits: [
      { title: "Zero Plugin Bloat", desc: "We replace 30 competing plugins with clean, bespoke native PHP & React code.", icon: "cleaning_services" },
      { title: "90+ PageSpeed Scores", desc: "Sub-second load times engineered via clean semantic HTML and server caching.", icon: "speed" },
      { title: "Custom Gutenberg Freedom", desc: "Your marketing team can build rich landing pages without breaking branding.", icon: "edit_note" },
      { title: "Enterprise Security", desc: "Hardened wp-config, custom login URLs, and Cloudflare WAF protection.", icon: "shield" },
      { title: "Headless Ready", desc: "Easily connect WPGraphQL to Next.js or mobile applications anytime.", icon: "hub" },
      { title: "Comprehensive Video Training", desc: "We record custom screencasts teaching your team how to update every single page.", icon: "ondemand_video" }
    ],
    technologies: [
      { name: "WordPress", role: "Core CMS Engine", category: "CMS" },
      { name: "PHP", role: "Server Runtime", category: "Backend" },
      { name: "WooCommerce", role: "E-Commerce Extension", category: "E-Commerce" },
      { name: "GraphQL", role: "WPGraphQL API Headless", category: "API" },
      { name: "MySQL", role: "Relational Database", category: "Database" },
      { name: "Redis", role: "High-Speed Object Caching", category: "Caching" },
      { name: "JavaScript", role: "Gutenberg Block React Logic", category: "Frontend" },
      { name: "Tailwind CSS", role: "Theme Styling", category: "Design" }
    ],
    faqs: [
      { q: "Why do you avoid page builders like Elementor or Divi?", a: "Pre-made page builders inject dozens of render-blocking CSS/JS files that destroy Core Web Vitals scores. We build native Gutenberg blocks that render cleanly and load in under 1 second." },
      { q: "How do you keep WordPress secure from hackers?", a: "We eliminate insecure third-party plugins, restrict wp-admin via IP/MFA rules, change default endpoints, and deploy web application firewalls (WAF)." },
      { q: "Can we use WordPress as a headless CMS with Next.js?", a: "Yes. We configure WPGraphQL on WordPress and consume the API in Next.js using Incremental Static Regeneration (ISR) for instant page loads." }
    ],
    stats: [
      { value: "< 1.0s", label: "Average Page Load Time" },
      { value: "95+", label: "Lighthouse Performance Score" },
      { value: "70+", label: "WordPress Sites Delivered" },
      { value: "Zero", label: "Plugin Bloat" }
    ]
  },

  // 12. AI & Machine Learning Solutions
  {
    id: "ai-ml",
    slug: "ai-ml-solutions",
    aliases: ["ai-machine-learning","machine-learning","artificial-intelligence","ai-solutions"],
    title: "AI & Machine Learning Solutions",
    heroHeadline: "Enterprise Machine Learning Systems & Applied Predictive Intelligence",
    tagline: "Predictive models, computer vision, and production MLOps pipelines.",
    shortDesc: "Production-ready machine learning pipelines and custom predictive models built to turn complex business data into automated, high-accuracy decisions.",
    heroImage: "/assets/Services Images/Ai and Ml.jpeg",
    secondaryImage: "/assets/Services Images/Ai and Ml.jpeg",
    badge: "Intelligent Systems",
    icon: "psychology",
    subServicesTitle: "Core AI & Machine Learning Solutions",
    subServices: [
      {
        title: "Custom Predictive Models",
        desc: "Supervised and unsupervised pipelines for customer churn prediction, demand forecasting, dynamic pricing, and fraud detection.",
        icon: "insights",
        points: ["Time-series demand forecasting", "Customer churn & risk scoring", "Dynamic pricing optimization"]
      },
      {
        title: "Computer Vision Systems",
        desc: "Vision Transformer and convolutional models for automated defect classification, document parsing (OCR), and image segmentation.",
        icon: "visibility",
        points: ["Automated defect classification", "Document parsing & OCR extraction", "Real-time camera feed analysis"]
      },
      {
        title: "Natural Language Intelligence",
        desc: "Domain-specific text classification, intent recognition, entity extraction, and sentiment scoring models.",
        icon: "translate",
        points: ["Named entity recognition (NER)", "Customer sentiment analytics", "Automated ticket routing"]
      },
      {
        title: "Production MLOps",
        desc: "Model containerization, data drift monitoring, automated re-training pipelines, and low-latency API serving.",
        icon: "cloud_sync",
        points: ["FastAPI containerized microservices", "Data & model drift monitoring", "Automated retraining triggers"]
      }
    ],
    overview: [
      "Production-ready machine learning pipelines and custom predictive models built to turn complex business data into automated, high-accuracy decisions.",
      "We engineer end-to-end AI/ML pipelines from data cleaning to custom model training and production MLOps deployment."
    ],
    whatsIncluded: [
      "Data Feasibility Audit & Problem Framing Document",
      "Cleaned, Validated & Versioned Dataset Pipeline",
      "Trained & Validated Machine Learning Model Weights",
      "Containerized FastAPI / Triton Inference REST API",
      "Automated Model Drift Monitoring & Retraining Triggers",
      "Full Source Code, Weights & Architecture Docs"
    ],
    process: [
      { step: "01", title: "Problem Framing & Data Audit", desc: "Evaluating business objectives, data quality, bias risks, and ROI benchmarks.", deliverables: "AI Feasibility Study & Metric Goals" },
      { step: "02", title: "Data Ingestion & Feature Prep", desc: "Cleaning, normalizing, and feature-engineering historical datasets.", deliverables: "Processed Training & Validation Datasets" },
      { step: "03", title: "Model Architecture & Baseline", desc: "Testing baseline algorithms against performance targets.", deliverables: "Model Performance Comparison Benchmark" },
      { step: "04", title: "Hyperparameter Tuning", desc: "Fine-tuning weights, cross-validation, and optimizing precision-recall curves.", deliverables: "High-Accuracy Production Model" },
      { step: "05", title: "Inference API Deployment", desc: "Packaging models inside Docker containers with GPU acceleration and REST endpoints.", deliverables: "Live Inference API & Swagger Docs" },
      { step: "06", title: "Drift Monitoring & MLOps", desc: "Setting automated alerts for concept drift and scheduling recurring retraining.", deliverables: "MLOps Dashboard & Maintenance SLA" }
    ],
    industries: [
      { name: "FinTech & Risk Underwriting", desc: "Fraud detection, credit risk scoring, and algorithmic signals.", icon: "account_balance" },
      { name: "Manufacturing & Logistics", desc: "Defect inspection on assembly lines, predictive maintenance, and routing.", icon: "precision_manufacturing" },
      { name: "Healthcare & Diagnostics", desc: "Medical imaging scan analysis, patient risk stratification, and trial data.", icon: "medical_services" },
      { name: "Retail & E-Commerce", desc: "Demand forecasting, dynamic pricing algorithms, and recommendations.", icon: "shopping_bag" },
      { name: "Insurance & Claims", desc: "Damage photo analysis, automated claims processing, and risk assessments.", icon: "verified_user" },
      { name: "Agriculture & Agritech", desc: "Satellite crop yield analysis, soil sensor telemetry, and disease detection.", icon: "eco" }
    ],
    hireBenefits: [
      { title: "Senior AI Scientists", desc: "Engineers with deep foundations in mathematics, statistics, and neural networks.", icon: "school" },
      { title: "Data Security & Privacy", desc: "Your data stays private. We sign strict NDAs and deploy on your private cloud.", icon: "lock" },
      { title: "Production MLOps Focus", desc: "We ship hardened production inference APIs ready for scale.", icon: "rocket_launch" },
      { title: "Predictable Cost Models", desc: "Optimized model quantization that reduces cloud GPU inferencing costs by up to 60%.", icon: "savings" },
      { title: "Explainable AI (XAI)", desc: "Transparent visualizations so stakeholders understand model decisions.", icon: "visibility" },
      { title: "Full Model Ownership", desc: "You own 100% of the training code, curated datasets, and final model weights.", icon: "verified" }
    ],
    technologies: [
      { name: "Python", role: "Core AI Language", category: "Language" },
      { name: "PyTorch", role: "Deep Learning Neural Networks", category: "AI/ML" },
      { name: "TensorFlow", role: "Deep Learning Models", category: "AI/ML" },
      { name: "Scikit-Learn", role: "Machine Learning Algorithms", category: "AI/ML" },
      { name: "Hugging Face", role: "Transformer Pipelines", category: "AI/ML" },
      { name: "FastAPI", role: "High-Speed Inference API", category: "Backend" },
      { name: "Docker", role: "Containerized Serving", category: "DevOps" },
      { name: "PostgreSQL", role: "Vector & Tabular Data", category: "Database" },
      { name: "Pandas", role: "Data Processing", category: "Data" },
      { name: "NumPy", role: "Numerical Arrays", category: "Data" },
      { name: "AWS", role: "GPU Cloud Infrastructure", category: "Cloud" }
    ],
    faqs: [
      { q: "How much data do we need before training an AI model?", a: "It depends on the task. Classical machine learning (churn prediction, tabular classification) can succeed with thousands of rows. Deep learning and computer vision require more data, but transfer learning can lower requirements." },
      { q: "Can we deploy the AI model on our own private servers?", a: "Yes. All models and inference containers are fully self-hostable on your own AWS, GCP, Azure, or on-premises GPU infrastructure." },
      { q: "How do you prevent inaccurate model predictions?", a: "We apply rigorous cross-validation, confidence score thresholds, out-of-distribution testing, and human-in-the-loop fallback procedures." }
    ],
    stats: [
      { value: "99.2%", label: "Model Classification Accuracy" },
      { value: "-60%", label: "Inference GPU Cloud Costs" },
      { value: "35+", label: "ML Pipelines Deployed" },
      { value: "100%", label: "Client Model Ownership" }
    ]
  },

  // 13. LLMs & Enterprise RAG Systems
  {
    id: "llms-rag",
    slug: "llms-rag",
    aliases: ["enterprise-rag","rag-systems","llm-development","llm-rag"],
    title: "LLMs & Enterprise RAG Systems",
    heroHeadline: "Private Retrieval-Augmented Generation & Custom Enterprise LLM Architectures",
    tagline: "Context-aware, hallucination-resistant AI grounded in your private data.",
    shortDesc: "Context-aware Large Language Model platforms connected securely to proprietary business documentation, delivering grounded answers with verified citations and zero data leakage.",
    heroImage: "/assets/Services Images/llms.jpeg",
    secondaryImage: "/assets/Services Images/llms.jpeg",
    badge: "GenAI",
    icon: "neurology",
    subServicesTitle: "Core LLM & RAG Solutions",
    subServices: [
      {
        title: "Production RAG Pipelines",
        desc: "Context-aware document chunking, hybrid search (BM25 + dense vectors), and cross-encoder reranking to preserve document context.",
        icon: "hub",
        points: ["Dense vector + BM25 hybrid search", "Cross-encoder semantic reranking", "Context-aware document chunking"]
      },
      {
        title: "Enterprise Vector Databases",
        desc: "High-concurrency vector store setups configured with role-based access control and isolated tenant partitions.",
        icon: "dataset",
        points: ["Role-based access partitioning", "High-concurrency vector indexing", "Sub-200ms document recall"]
      },
      {
        title: "Hallucination Mitigation",
        desc: "Strict contextual grounding constraints, zero-temperature execution, and automated citation mapping to source documents.",
        icon: "fact_check",
        points: ["Zero-hallucination grounding prompt", "Direct page & paragraph citations", "Verifiable evidence logging"]
      },
      {
        title: "Private Cloud Deployments",
        desc: "Self-hosted open-weights models deployed in air-gapped VPCs to guarantee complete data isolation.",
        icon: "dns",
        points: ["Private VPC model deployment", "Zero external API data leakage", "Quantized high-throughput inferencing"]
      }
    ],
    overview: [
      "Context-aware Large Language Model platforms connected securely to proprietary business documentation, delivering grounded answers with verified citations and zero data leakage.",
      "Instead of asking models to recall facts from memory, our RAG systems search your private documents, provide verified citations, and eliminate hallucinations."
    ],
    whatsIncluded: [
      "Custom Document Extraction & Chunking Architecture",
      "Vector Database Setup (Pinecone, Qdrant, or pgvector)",
      "Hybrid Retrieval Pipeline with Semantic Re-Ranker",
      "Streaming Chat Frontend in Next.js with Source Citations",
      "Automated Evaluation Benchmark & Quality Suite",
      "Full VPC Deployment with Zero Data Training Guarantees"
    ],
    process: [
      { step: "01", title: "Discovery & Schema Audit", desc: "Auditing knowledge corpus (PDFs, docs, databases) and defining query personas.", deliverables: "RAG Architecture Specification" },
      { step: "02", title: "Chunking & Vector Indexing", desc: "Implementing hierarchical chunking and generating embeddings with OpenAI / BGE.", deliverables: "Vector Database Cluster Ingested" },
      { step: "03", title: "Hybrid Retrieval & Re-ranking", desc: "Configuring dense vector search + BM25 keyword matching + cross-encoder re-ranking.", deliverables: "Benchmarked Retrieval Pipeline" },
      { step: "04", title: "Prompt & Context Guardrails", desc: "Writing system prompts, citation rules, and guardrails to eradicate hallucinations.", deliverables: "Guarded Prompt Pipeline" },
      { step: "05", title: "Streaming Frontend Build", desc: "Building responsive chat UI with markdown code syntax highlighting and sources.", deliverables: "Live Interactive Copilot Application" },
      { step: "06", title: "Growth & Accuracy Benchmarks", desc: "Running test suites against 200+ golden Q&A queries to guarantee 99%+ accuracy.", deliverables: "Accuracy Audit & Production Release" }
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
      { title: "State-of-the-Art Re-ranking", desc: "Cross-encoder re-rankers that retrieve the exact paragraph needed every time.", icon: "filter_list" },
      { title: "Fast Streaming UI", desc: "Real-time token streaming with sub-500ms time-to-first-token response rates.", icon: "bolt" },
      { title: "Multi-Modal Support", desc: "Extract insights from embedded charts, complex tables, diagrams, and scanned images.", icon: "image" },
      { title: "Continuous Test Benchmarks", desc: "Continuous regression testing ensuring retrieval precision never degrades.", icon: "checklist" }
    ],
    technologies: [
      { name: "LangChain", role: "LLM Orchestration", category: "AI" },
      { name: "Pinecone", role: "Vector Database", category: "Database" },
      { name: "OpenAI", role: "Frontier Foundation Models", category: "AI" },
      { name: "Claude AI", role: "Long-Context Reasoning", category: "AI" },
      { name: "Google Gemini", role: "Multimodal Models", category: "AI" },
      { name: "PostgreSQL", role: "pgvector Storage", category: "Database" },
      { name: "Next.js", role: "Streaming Chat UI", category: "Frontend" },
      { name: "FastAPI", role: "Async Streaming Backend", category: "Backend" },
      { name: "Python", role: "Data Chunking Pipeline", category: "Language" }
    ],
    faqs: [
      { q: "How do RAG systems prevent AI hallucinations?", a: "Instead of asking the LLM to recall facts from training memory, RAG retrieves verified paragraphs from your private documents and instructs the model to only answer using provided evidence with exact citations." },
      { q: "Can we use self-hosted open-source models instead of public APIs?", a: "Yes. We deploy models like Llama 3 and Mistral on your private AWS or Azure VPCs so internal company data never leaves your infrastructure." },
      { q: "How are updates to knowledge documents handled?", a: "We establish automated synchronization webhooks: when files in S3, Notion, or Google Drive change, vector embeddings update in real-time." }
    ],
    stats: [
      { value: "< 0.5%", label: "Hallucination Rate" },
      { value: "0.3s", label: "Vector Search Latency" },
      { value: "100%", label: "Source Citation Accuracy" },
      { value: "20+", label: "Enterprise RAG Systems Live" }
    ]
  },

  // 14. Autonomous AI Agents
  {
    id: "agentic-ai",
    slug: "agentic-ai",
    aliases: ["autonomous-ai-agents","ai-agents","autonomous-agents","agentic-systems"],
    title: "Autonomous AI Agents",
    heroHeadline: "Multi-Agent Workflows, Tool-Calling Systems & Autonomous Task Execution",
    tagline: "Multi-agent systems that plan, execute, and self-correct within guardrails.",
    shortDesc: "Self-directing, multi-agent systems engineered to plan, execute multi-step workflows, call business APIs, and self-correct within guarded enterprise boundaries.",
    heroImage: "/assets/Services Images/agentic ai.jpeg",
    secondaryImage: "/assets/Services Images/agentic ai.jpeg",
    badge: "Autonomous",
    icon: "smart_toy",
    subServicesTitle: "Core Agentic Solutions",
    subServices: [
      {
        title: "Multi-Agent Swarms",
        desc: "Orchestrator-worker and consensus-driven agent networks decomposing large operational goals into parallelized steps.",
        icon: "smart_toy",
        points: ["Supervisor & worker agent graphs", "Parallel goal decomposition", "Persistent thread state memory"]
      },
      {
        title: "Deterministic Tool Calling",
        desc: "Strict function execution connecting AI agents to internal ERPs, databases, CRMs, and developer tools via validated JSON payloads.",
        icon: "build",
        points: ["Safe execution sandboxes", "Strict JSON schema validation", "Automated error recovery"]
      },
      {
        title: "Cognitive Architecture",
        desc: "ReAct (Reason + Act) patterns, reflection loops, and persistent vector-backed episodic memory.",
        icon: "psychology",
        points: ["ReAct reasoning & execution loops", "Episodic memory vector retrieval", "Self-critique & iterative tuning"]
      },
      {
        title: "Human-in-the-Loop Safeguards",
        desc: "Configurable confidence thresholds requiring manager sign-off on critical state-changing actions.",
        icon: "how_to_reg",
        points: ["Approval checkpoints for critical actions", "One-click Slack / Dashboard approvals", "Full state rollback capabilities"]
      }
    ],
    overview: [
      "Self-directing, multi-agent systems engineered to plan, execute multi-step workflows, call business APIs, and self-correct within guarded enterprise boundaries.",
      "The future of AI is not passive chatbots that merely talk; it is autonomous agents that execute real operational work safely and reliably."
    ],
    whatsIncluded: [
      "Agent State Machine Graph Architecture",
      "Custom Toolset Integration (SQL, CRMs, APIs)",
      "Human-in-the-Loop Approval Modal & Slack Notifications",
      "Sandboxed Code Execution & Self-Correction Loops",
      "Complete Observability & Tracing Setup",
      "Production Container Deployment with Auto-Recovery"
    ],
    process: [
      { step: "01", title: "Discovery & Workflow Mapping", desc: "Deconstructing target business processes into granular reasoning steps and tools.", deliverables: "Agent Workflow Graph Diagram" },
      { step: "02", title: "Tool & API Construction", desc: "Writing safe tool functions with rigorous Pydantic parameter schemas.", deliverables: "Verified Tool Registry" },
      { step: "03", title: "State Graph Engineering", desc: "Implementing cyclical logic, error fallbacks, and supervisor nodes in LangGraph.", deliverables: "Compiled Multi-Agent Engine" },
      { step: "04", title: "Human Approval Gateways", desc: "Setting up pause/resume interrupt points for human review on critical actions.", deliverables: "HITL Notification & Review UI" },
      { step: "05", title: "Stress & Adversarial Testing", desc: "Subjecting agents to thousands of edge cases, bad inputs, and infinite loop traps.", deliverables: "Resilience & Test Benchmark Report" },
      { step: "06", title: "Growth & SLA Monitoring", desc: "Deploying agent worker nodes with queue management and telemetry observability.", deliverables: "Live Autonomous Agent System" }
    ],
    industries: [
      { name: "Customer Operations & Support", desc: "Autonomous tier-2 support agents that diagnose issues and check databases.", icon: "support_agent" },
      { name: "Financial Reconciliation", desc: "Agents that compare invoices against bank feeds and spot anomalies.", icon: "account_balance" },
      { name: "Software Development (DevOps)", desc: "Autonomous code review agents, bug reproducers, and pull request generators.", icon: "terminal" },
      { name: "Healthcare Admin", desc: "Pre-authorizations, insurance claims verification, and intake coordination.", icon: "health_and_safety" },
      { name: "Procurement & Supply Chain", desc: "Automated supplier vendor outreach, quote comparisons, and purchase orders.", icon: "local_shipping" },
      { name: "Sales Outreach & Enrichment", desc: "Autonomous prospect qualification, LinkedIn enrichment, and email drafting.", icon: "send" }
    ],
    hireBenefits: [
      { title: "LangGraph Certified Experts", desc: "Pioneering team building complex cyclic state graphs and multi-agent topologies.", icon: "hub" },
      { title: "Safe Tool Sandboxing", desc: "Agents execute actions in secure sandboxes with strict execution permissions.", icon: "shield" },
      { title: "Human Oversight Guaranteed", desc: "High-consequence actions always require human sign-off via Slack or dashboard.", icon: "how_to_reg" },
      { title: "Self-Healing Workflows", desc: "Agents automatically catch errors, diagnose root causes, and retry alternative tools.", icon: "autorenew" },
      { title: "Full Execution Tracing", desc: "Inspect every thought, token, tool call, and latency spike in real-time.", icon: "insights" },
      { title: "Direct Enterprise Integrations", desc: "Connect seamlessly to Jira, Postgres, Slack, and cloud databases.", icon: "cable" }
    ],
    technologies: [
      { name: "LangGraph", role: "Cyclic State Machine Graph", category: "Framework" },
      { name: "CrewAI", role: "Role-Based Agent Swarms", category: "Framework" },
      { name: "Python", role: "Core Language & Tools", category: "Language" },
      { name: "LangChain", role: "Tool Execution Primitives", category: "AI" },
      { name: "Claude AI", role: "High-Order Reasoning Engine", category: "AI" },
      { name: "OpenAI", role: "Multimodal Agent Models", category: "AI" },
      { name: "FastAPI", role: "Worker Queue & REST API", category: "Backend" },
      { name: "Docker", role: "Sandbox Isolation", category: "Security" },
      { name: "Redis", role: "Thread State Persistence", category: "Caching" },
      { name: "PostgreSQL", role: "Memory Logs & Audit Trails", category: "Database" }
    ],
    faqs: [
      { q: "What prevents an autonomous agent from getting stuck in an infinite loop?", a: "We engineer strict recursion limits, deterministic state graph cycles, and timeout monitors in LangGraph. If an agent fails to resolve an issue after N iterations, it triggers a human fallback." },
      { q: "Can an agent take destructive actions (like deleting records or transferring funds)?", a: "No action of that nature is permitted autonomously. We implement Human-in-the-Loop (HITL) checkpoints: the agent stages the proposed action and pauses until a human manager explicitly approves it." },
      { q: "How is Agentic AI different from simple chatbot automation?", a: "Chatbots only output text based on prompts. Agents have goals, maintain working memory, formulate multi-step plans, execute tool calls, evaluate results, and iteratively solve complex problems." }
    ],
    stats: [
      { value: "85%", label: "Manual Workflow Time Saved" },
      { value: "Zero", label: "Unauthorized Tool Executions" },
      { value: "15+", label: "Multi-Agent Deployments" },
      { value: "100%", label: "State Tracing Coverage" }
    ]
  },

  // 15. Custom Model Training & Fine-Tuning
  {
    id: "model-training",
    slug: "model-training",
    aliases: ["custom-model-training","fine-tuning","llm-fine-tuning","lora-training"],
    title: "Custom Model Training & Fine-Tuning",
    heroHeadline: "Custom Deep Learning Architectures, Domain Fine-Tuning & Quantized Deployment",
    tagline: "LoRA/QLoRA fine-tuning, alignment, and quantization for proprietary models.",
    shortDesc: "Adapting foundation models into specialized, proprietary systems optimized for custom enterprise tasks, private vocabularies, and low-latency deployments.",
    heroImage: "/assets/Services Images/model training.jpeg",
    secondaryImage: "/assets/Services Images/model training.jpeg",
    badge: "Deep Learning",
    icon: "tune",
    subServicesTitle: "Core Model Training Solutions",
    subServices: [
      {
        title: "Parameter-Efficient Fine-Tuning (PEFT)",
        desc: "Implementing LoRA, QLoRA, and DoRA on open-source foundation models to minimize compute overhead.",
        icon: "tune",
        points: ["LoRA & QLoRA weight adapters", "Low VRAM compute training", "Targeted domain specialization"]
      },
      {
        title: "Instruction Dataset Engineering",
        desc: "Curation, deduplication, and quality-filtering pipelines turning enterprise records into instruction-response datasets.",
        icon: "dataset",
        points: ["Enterprise record extraction", "Automated deduplication & scoring", "Clean instruction-response pairs"]
      },
      {
        title: "Model Alignment (DPO / ORPO)",
        desc: "Direct Preference Optimization ensuring the model follows exact enterprise safety, tone, and JSON schema requirements.",
        icon: "thumb_up",
        points: ["Direct Preference Optimization (DPO)", "Strict enterprise safety guardrails", "Guaranteed JSON schema output"]
      },
      {
        title: "Quantization & Distillation",
        desc: "Knowledge distillation and weight quantization (INT4, FP8, AWQ, GGUF) reducing memory footprints for local deployments.",
        icon: "compress",
        points: ["4-bit / 8-bit model quantization", "Knowledge distillation pipelines", "Low-latency edge deployment"]
      }
    ],
    overview: [
      "Adapting foundation models into specialized, proprietary systems optimized for custom enterprise tasks, private vocabularies, and low-latency deployments.",
      "General foundation models are jacks of all trades. When you need an AI that writes in your exact corporate voice or adheres to strict schemas 100% of the time, fine-tuning is the definitive answer."
    ],
    whatsIncluded: [
      "Domain Dataset Curation, Cleaning & Formatting",
      "LoRA / QLoRA Hyperparameter Configuration & Distributed Runs",
      "Direct Preference Optimization (DPO) Alignment",
      "Catastrophic Forgetting & Quality Benchmark Audit",
      "Merged Model Weights Archive in Hugging Face / GGUF Format",
      "High-Throughput Production Inference Container"
    ],
    process: [
      { step: "01", title: "Discovery & Objective", desc: "Auditing domain data and establishing clear accuracy and latency objectives.", deliverables: "Training Roadmap & Dataset Spec" },
      { step: "02", title: "Data Preparation & Synthesis", desc: "Extracting, formatting, cleaning, and validating high-quality instruction pairs.", deliverables: "Clean JSONL Training Dataset" },
      { step: "03", title: "Base Model Selection", desc: "Benchmarking candidate foundation models on raw domain capability.", deliverables: "Selected Foundation Architecture" },
      { step: "04", title: "LoRA / QLoRA Training Run", desc: "Executing training on distributed GPUs with loss curve monitoring and early stopping.", deliverables: "Trained Adapter Weights & Loss Logs" },
      { step: "05", title: "Alignment & Benchmarking", desc: "Applying DPO alignment and running automated domain benchmark evaluations.", deliverables: "Model Performance & Benchmark Deck" },
      { step: "06", title: "Quantization & Serving", desc: "Quantizing weights and containerizing inside high-throughput Docker images.", deliverables: "Production-Ready Inference Image" }
    ],
    industries: [
      { name: "Medical & Clinical Notes", desc: "Fine-tuning models on medical terminology, ICD-10 coding, and clinical summaries.", icon: "medical_services" },
      { name: "Legal Document Analysis", desc: "Teaching models exact legal brief conventions, contractual clauses, and citations.", icon: "gavel" },
      { name: "Financial & Tax Advisory", desc: "Training on regional accounting standards, tax codes, and audit formats.", icon: "account_balance" },
      { name: "Custom Code Generation", desc: "Fine-tuning on proprietary internal SDKs, frameworks, and coding standards.", icon: "terminal" },
      { name: "Specialized Customer Support", desc: "Replicating exact customer care tone, return policies, and brand vocabulary.", icon: "support_agent" },
      { name: "Academic Research & STEM", desc: "Specialized models for chemical informatics and mathematical simulations.", icon: "science" }
    ],
    hireBenefits: [
      { title: "Cost-Effective QLoRA", desc: "We fine-tune state-of-the-art models on single or dual GPUs, slashing training costs.", icon: "savings" },
      { title: "No Catastrophic Forgetting", desc: "Carefully balanced training mixes ensuring models retain general reasoning abilities.", icon: "psychology" },
      { title: "Complete IP & Weight Ownership", desc: "You own all resulting model weights, adapter files, and synthetic datasets unconditionally.", icon: "verified" },
      { title: "Synthetic Data Mastery", desc: "We turn sparse raw text into tens of thousands of high-yield training examples.", icon: "auto_awesome" },
      { title: "Blistering Inference Speed", desc: "Quantized builds delivering hundreds of tokens per second.", icon: "speed" },
      { title: "Private Cloud Execution", desc: "Training executed securely on RunPod, AWS, or your private on-prem GPUs.", icon: "security" }
    ],
    technologies: [
      { name: "PyTorch", role: "Deep Learning Engine", category: "Core" },
      { name: "Hugging Face", role: "Transformers & PEFT", category: "Library" },
      { name: "Python", role: "Core AI Scripting", category: "Language" },
      { name: "TensorFlow", role: "Neural Network Modeling", category: "AI/ML" },
      { name: "Scikit-Learn", role: "Evaluation Metrics", category: "AI/ML" },
      { name: "Pandas", role: "Dataset Engineering", category: "Data" },
      { name: "NumPy", role: "Matrix Operations", category: "Data" },
      { name: "Docker", role: "GPU Containerization", category: "DevOps" },
      { name: "AWS", role: "Cloud GPU Clusters", category: "Cloud" }
    ],
    faqs: [
      { q: "When should we fine-tune an LLM versus using RAG?", a: "Use RAG when you need an AI to pull in dynamic external knowledge and cite source documents. Use fine-tuning when you need the model to learn a specific tone of voice, follow a rigid formatting schema, or specialize in proprietary domain terminology." },
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

  // 16. FYP Ideas, Mentorship & Academic Prototyping
  {
    id: "fyp-ideas",
    slug: "fyp-ideas",
    aliases: ["fyp-ideas-mentorship","academic-prototyping","fyp-mentorship","fyp-projects"],
    title: "FYP Ideas, Mentorship & Academic Prototyping",
    heroHeadline: "Innovative Final Year Project Concepts, Architectural Blueprints & Production Prototypes",
    tagline: "Research-grade problem formulation, prototyping, and thesis support.",
    shortDesc: "Bridging university research and production-grade engineering through structured mentorship, defensible problem definitions, working prototypes, and rigorous academic reports.",
    heroImage: "/assets/Services Images/fpy.jpeg",
    secondaryImage: "/assets/Services Images/fpy.jpeg",
    badge: "Innovation Hub",
    icon: "school",
    subServicesTitle: "Core Academic Solutions",
    subServices: [
      {
        title: "Research Problem Formulation",
        desc: "Selecting defensible, research-grade problem statements backed by IEEE/ACM literature reviews.",
        icon: "lightbulb",
        points: ["Novelty & feasibility assessments", "IEEE/ACM literature reviews", "Committee-ready proposal decks"]
      },
      {
        title: "Working Functional Prototypes",
        desc: "Complete implementation combining modern frontends, robust backend APIs, and applied AI/ML pipelines.",
        icon: "code",
        points: ["Next.js, FastAPI & Flutter builds", "Applied machine learning integration", "Clean, commented sovereign code"]
      },
      {
        title: "Empirical Benchmarking",
        desc: "Formal performance telemetry (inference latency, F1-scores, resource footprints) evaluated against baseline algorithms.",
        icon: "query_stats",
        points: ["Inference latency & throughput logs", "F1-score & accuracy metrics", "Baseline algorithm comparison charts"]
      },
      {
        title: "Defense & Documentation Prep",
        desc: "Comprehensive LaTeX thesis drafting, architectural diagrams (DFD, UML), and simulated defense presentations.",
        icon: "menu_book",
        points: ["LaTeX thesis & IEEE format papers", "UML & system architecture diagrams", "Simulated mock defense coaching"]
      }
    ],
    overview: [
      "Bridging university research and production-grade engineering through structured mentorship, defensible problem definitions, working prototypes, and rigorous academic reports.",
      "We help ambitious students, researchers, and innovators build award-winning graduation software, hardware, and AI systems."
    ],
    whatsIncluded: [
      "Research Topic Formulation & Proposal Document",
      "Full Working Production Prototype (Frontend, Backend, DB)",
      "Applied AI/ML Model Pipeline with Evaluation Charts",
      "Comprehensive Architecture Diagrams (UML, DFD, ERD)",
      "LaTeX Thesis & IEEE Publication-Ready Paper Draft",
      "Mock Viva Defense Coaching & Slide Presentation"
    ],
    process: [
      { step: "01", title: "Topic Formulation & Defense", desc: "Formulating novel, research-grade problem statements and passing committee approval.", deliverables: "Project Proposal & Literature Review" },
      { step: "02", title: "System Blueprint & Spec", desc: "Defining entity schemas, hardware sensor connections, and system architecture.", deliverables: "System Architecture & UML Diagrams" },
      { step: "03", title: "Core Prototype Build", desc: "Implementing full-stack code, machine learning pipelines, and hardware drivers.", deliverables: "Working Prototype Alpha" },
      { step: "04", title: "Empirical Testing & Results", desc: "Benchmarking against baselines and generating validation charts (F1, precision).", deliverables: "Empirical Results & Telemetry Data" },
      { step: "05", title: "Thesis Drafting & Review", desc: "Drafting complete thesis chapters conforming to university formatting guidelines.", deliverables: "Complete Thesis Draft" },
      { step: "06", title: "Mock Defense & Handoff", desc: "Conducting mock defense presentations and technical code walkthroughs.", deliverables: "Viva Slide Deck & Working Codebase" }
    ],
    industries: [
      { name: "Artificial Intelligence & Vision", desc: "Computer vision, deep learning classifiers, and LLMs.", icon: "psychology" },
      { name: "IoT & Smart Hardware", desc: "Arduino, ESP32, sensor telemetry, and automation.", icon: "memory" },
      { name: "Healthcare Informatics", desc: "Telemedicine portals, wearable tracking, and imaging.", icon: "medical_services" },
      { name: "Blockchain & Web3", desc: "Smart contracts, decentralized voting, and NFT systems.", icon: "currency_bitcoin" },
      { name: "Autonomous Systems", desc: "Robotics, obstacle avoidance, and agent swarms.", icon: "smart_toy" },
      { name: "Cybersecurity & Cryptography", desc: "Network intrusion detection and encrypted messaging.", icon: "security" }
    ],
    hireBenefits: [
      { title: "Senior Engineering Mentorship", desc: "Learn directly from production software architects and AI engineers.", icon: "school" },
      { title: "IEEE Publication Standards", desc: "Methodologies and documentation formatted to peer-reviewed academic standards.", icon: "article" },
      { title: "Clean Modular Code", desc: "Thoroughly documented codebases that are easy to explain during faculty viva reviews.", icon: "code" },
      { title: "Empirical Proof & Metrics", desc: "Generate concrete graphs, confusion matrices, and benchmark tables for defense.", icon: "insights" },
      { title: "Complete Viva Preparation", desc: "Practice with mock viva cross-examinations addressing common faculty questions.", icon: "record_voice_over" },
      { title: "100% Student Code Ownership", desc: "You own all code, thesis files, and designs completely for graduation.", icon: "verified" }
    ],
    technologies: [
      { name: "Python", role: "Machine Learning & Prototyping", category: "Language" },
      { name: "Next.js", role: "Interactive Web Portal", category: "Frontend" },
      { name: "FastAPI", role: "High-Performance Backend", category: "Backend" },
      { name: "Flutter", role: "Mobile Application Prototype", category: "Mobile" },
      { name: "PyTorch", role: "Deep Learning Research", category: "AI/ML" },
      { name: "TensorFlow", role: "Neural Network Models", category: "AI/ML" },
      { name: "PostgreSQL", role: "Relational Research Data", category: "Database" },
      { name: "Firebase", role: "Rapid Real-time Sync", category: "Backend" },
      { name: "Arduino", role: "Hardware Sensors & IoT", category: "IoT" },
      { name: "Docker", role: "Reproducible Environment", category: "DevOps" }
    ],
    faqs: [
      { q: "Can Solvexa help formulate a novel FYP topic from scratch?", a: "Yes. We evaluate current IEEE/ACM research trends in AI, IoT, and Web3 to propose novel, high-feasibility project concepts that pass university evaluation committees." },
      { q: "Is the code delivered clean and commented for evaluation?", a: "Every line of code is structured modularly with clear docstrings, comments, and architecture diagrams so you can confidently explain every module during viva." },
      { q: "Do you assist with the final thesis and viva presentation?", a: "Yes. We guide literature reviews, methodology chapters, empirical benchmark generation, and conduct simulated mock defenses with presentation slide decks." }
    ],
    stats: [
      { value: "4.0 GPA", label: "Average Project Defense Grade" },
      { value: "60+", label: "Prototypes Mentored & Shipped" },
      { value: "100%", label: "Academic Defense Pass Rate" },
      { value: "IEEE", label: "Publication Documentation Standard" }
    ]
  }
];
