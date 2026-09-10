# Solvexa — Digital Engineering, AI & Creative Collective

> **Where Creativity Meets Innovation — We Grow Your Business Online**  
> A high-performance, modern digital agency web application engineered with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Designed with a signature luxury dark-gold aesthetic, kinetic micro-interactions, responsive 3D elements, and zero-compromise performance.

---

## 🌟 Table of Contents

- [Executive Overview](#-executive-overview)
- [Design Aesthetics & Brand Identity](#-design-aesthetics--brand-identity)
- [Technology Stack](#-technology-stack)
- [Complete Pages & Route Architecture](#-complete-pages--route-architecture)
  - [1. Homepage (`/`)](#1-homepage-)
  - [2. Services Catalog (`/services`)](#2-services-catalog-services)
  - [3. Dynamic Service Detail Pages (`/services/[slug]`)](#3-dynamic-service-detail-pages-servicesslug)
  - [4. Portfolio & Production Work (`/work`)](#4-portfolio--production-work-work)
  - [5. Dynamic Case Study Pages (`/work/[slug]`)](#5-dynamic-case-study-pages-workslug)
  - [6. About Us (`/about`)](#6-about-us-about)
  - [7. Executive Leadership & Team (`/team`)](#7-executive-leadership--team-team)
  - [8. Contact & Client Onboarding (`/contact`)](#8-contact--client-onboarding-contact)
  - [9. Privacy Policy (`/privacy`)](#9-privacy-policy-privacy)
  - [10. Terms of Service (`/terms`)](#10-terms-of-service-terms)
  - [11. Enterprise Billing Gateway (`/402`)](#11-enterprise-billing-gateway-402)
  - [12. Custom 404 Page (`/not-found`)](#12-custom-404-page-not-found)
- [Component Architecture](#-component-architecture)
- [Data Layer Architecture](#-data-layer-architecture)
- [Getting Started & Local Development](#-getting-started--local-development)
- [Project Directory Structure](#-project-directory-structure)
- [Corporate Information & Contact](#-corporate-information--contact)

---

## 🚀 Executive Overview

**Solvexa** is a premier digital engineering, artificial intelligence, and brand agency. We partner with ambitious founders, high-growth startups, and established enterprises to conceptualize, design, and engineer mission-critical digital products.

### Core Value Propositions:
- **Full IP & Sovereign Codebases**: 100% client ownership of repositories, cloud infrastructure, and Figma source files.
- **Enterprise Speed**: Rapid 48-hour team onboarding with dedicated agile squads.
- **Sub-Second Telemetry**: High-velocity frontends delivering 99.99% uptime and <100ms API response times.
- **Holistic Digital Capability**: 16 specialized technical and creative disciplines spanning full-stack web, native mobile apps, autonomous AI agents, LLM pipelines, brand identity, and performance marketing.

---

## 🎨 Design Aesthetics & Brand Identity

The application is styled with a custom dark-mode design system:
- **Color Palette**:
  - **Primary Gold**: `#d4af37` & `#f2ca50` (luxury gold accents, glow rings, gradient buttons).
  - **Dark Base Surfaces**: `#09090b` (deep background), `#121215`, `#18181b` (high-contrast glassmorphic card containers).
  - **Secondary Accents**: Amber, Cyan, and Emerald for real-time status indicators and category badges.
- **Typography**:
  - **Plus Jakarta Sans**: Clean, highly readable body typography.
  - **Space Grotesk**: High-tech headlines, stats, and metadata labels.
  - **Syne**: Expressive typography for artistic agency statements.
  - **Google Material Symbols Outlined**: Modern UI icons throughout navigation, buttons, and feature cards.
- **Interactive UI & Motion**:
  - Kinetic 3D Globe & floating 3D logo in hero sections.
  - Device frame displays (realistic Macbook Pro laptops, mobile phone viewports, and dual responsive viewports).
  - Real-time scroll progress bar and floating WhatsApp quick-action button.

---

## 💻 Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) with PostCSS |
| **Animations** | [Motion](https://motion.dev/) & [Anime.js](https://animejs.com/) |
| **Icons & Media** | Custom Vector SVGs & Material Symbols Outlined |
| **Font Delivery** | `next/font/google` (Plus Jakarta Sans, Space Grotesk, Syne) |

---

## 📄 Complete Pages & Route Architecture

### 1. Homepage (`/`)
The main digital storefront of Solvexa, introducing visitors to the agency's capabilities, culture, and social proof:
- **Hero Section**: Large-type headline with animated gradient text, kinetic 3D interactive elements, and dual call-to-action buttons ("Explore Services" & "Book Consultation").
- **Stats Counter**: Live ticker showing **100+ Delivered Products**, **99.4% Client Satisfaction**, **24/7 Global Remote Delivery**, and **15+ Production Releases**.
- **Trusted By Marquee**: Animated partner logo reel showing modern enterprise stacks (Google, Microsoft, Meta, AWS, OpenAI, etc.).
- **Client Attraction Section**: "Built for Velocity. Engineered for Scale." — highlighting core enterprise capabilities.
- **Services Grid Section**: Interactive visual cards showcasing core services with direct links to service pages.
- **Client Love Section**: Authentic testimonials from global founders and CTOs with 5-star ratings.
- **Tech Stack Section**: Tabbed interactive matrix showing categorized icons (Web Dev, Mobile, Backend, AI/ML, Design, Marketing) using pure SVG assets.
- **Contact CTA Section**: Glassmorphic lead capture form with instant response guarantees.
- **FAQ Section**: Collapsible accordion answering critical engagement and delivery questions.

---

### 2. Services Catalog (`/services`)
An exhaustive catalog detailing Solvexa’s **16 core disciplines**:
- **Interactive Hero**: Features dynamic counter anchor scrolling (`16 disciplines`) that jumps directly to the alternating service cards.
- **Alternating Showcase Cards**: High-definition cards with custom hero imagery, 01–16 sequence tracking, branded category icons, service taglines, bulleted deliverables, preferred technology tags, and key metrics.
- **Dynamic Routing**: Every card contains a "View service" CTA directing to its dedicated deep-dive route (`/services/[slug]`).

---

### 3. Dynamic Service Detail Pages (`/services/[slug]`)
Fully individualized landing pages statically generated using `generateStaticParams()` for all 16 service disciplines:

| # | Service Slug | Discipline Title | Core Focus |
| :--- | :--- | :--- | :--- |
| 1 | `web-development` | **Web Development** | Next.js, React, Node.js, SaaS platforms, high-velocity frontends. |
| 2 | `mobile-app-development` | **Mobile App Development** | React Native, Flutter, offline-first iOS & Android apps. |
| 3 | `ui-ux-design` | **UI/UX Design** | Figma design systems, wireframing, interactive prototypes. |
| 4 | `digital-marketing` | **Digital Marketing** | Growth hacking, omni-channel campaigns, funnel optimization. |
| 5 | `seo` | **Search Engine Optimization** | Technical SEO, on-page optimization, backlink acquisition. |
| 6 | `google-meta-ads` | **Google & Meta Ads** | High-ROI paid search, PPC campaigns, dynamic retargeting. |
| 7 | `branding` | **Brand Identity & Design** | Brand strategy, visual typography, logo systems, brand manuals. |
| 8 | `video-editing-motion` | **Video & Motion Graphics** | Commercial editing, product demos, 3D kinetic typography. |
| 9 | `mvp-development` | **Rapid MVP Development** | 4-to-6 week zero-to-one product development for founders. |
| 10 | `shopify-development` | **Shopify Store Development** | Custom Liquid themes, headless Shopify, checkout optimization. |
| 11 | `wordpress-development` | **WordPress Development** | Custom themes, ACF Pro architectures, WooCommerce setups. |
| 12 | `ai-machine-learning` | **AI & Machine Learning** | Predictive models, computer vision, data pipeline engineering. |
| 13 | `llms-rag` | **LLMs & RAG Systems** | LangChain, LlamaIndex, vector databases (Pinecone, ChromaDB). |
| 14 | `agentic-ai` | **Autonomous AI Agents** | Multi-agent collaboration, workflow automation, autonomous tools. |
| 15 | `model-training` | **Custom Model Training** | PyTorch, Hugging Face, fine-tuning open-source LLMs (Llama, Mistral). |
| 16 | `fyp-ideas` | **FYP Ideas & Mentorship** | Academic Final Year Projects, engineering coaching, novel prototypes. |

#### Service Detail Page Structure:
- **Hero & Value Metric**: Value statement, primary delivery timeline, and client rating.
- **Sub-Services Grid**: 6 structured service modules per discipline with specific feature checklists.
- **6-Step Delivery Workflow**: From discovery to production cutover and SLA maintenance.
- **Outsourcing Advantages**: Why hiring a Solvexa dedicated pod outperforms local hiring.
- **Technology Stack Badges**: Official branded icons for every relevant language, framework, and tool.
- **Discipline FAQs & Inquiry Trigger**: Contextual FAQs answering pricing, tech handoff, and support.

---

### 4. Portfolio & Production Work (`/work`)
A showcase of **15 production-grade client platforms** engineered by Solvexa:
- **Hero Metric Strip**: Highlights **15+ Production Releases**, **99.99% Uptime SLA**, **<100ms Latency**, and **100% Custom Codebases**.
- **15 Detailed Case Studies** featuring interactive **Device Displays**:
  1. **Custom Name Domain** (Web SaaS, React, Node, DNS Automation) — *Macbook Laptop Display*
  2. **LUCA.ai:** (AI Literacy & Phoneme Recognition, Next.js, Speech API) — *Dual Device Display (Laptop + Mobile)*
  3. **Aetheria OS** (Decentralized Web3 Operating System) — *Macbook Laptop Display*
  4. **Apex Horizon** (Enterprise Wealth & Asset Management Terminal) — *Macbook Laptop Display*
  5. **VaultPay** (Next-Gen FinTech & Cross-Border Payments) — *Dual Device Display (Laptop + Mobile)*
  6. **HealthPulse** (Telehealth & Remote Patient Monitoring) — *iPhone Mobile Display*
  7. **QuantEdge** (Algorithmic Trading & Analytics Terminal) — *Macbook Laptop Display*
  8. **OmniCart** (Headless Global Retail eCommerce Platform) — *Dual Device Display (Laptop + Mobile)*
  9. **Nova Pulse** (Biometric Fitness & Heart Rate Companion App) — *iPhone Mobile Display*
  10. **CloudForge** (Multi-Cloud DevOps & Orchestration Suite) — *Macbook Laptop Display*
  11. **EduSphere** (Virtual Classroom & LMS Platform) — *Macbook Laptop Display*
  12. **UrbanRide** (On-Demand Mobility & Ride-Hailing Platform) — *Dual Device Display (Laptop + Mobile)*
  13. **SolvCore** (Internal Developer Portal & Microservices Hub) — *Macbook Laptop Display*
  14. **Lumina Studio** (Generative AI Creative Canvas & Asset Pipeline) — *Macbook Laptop Display*
  15. **SoundWave** (Spatial Audio Streaming & Creator Marketplace) — *Dual Device Display (Laptop + Mobile)*
- Each project card includes verified client names, delivery turnaround, impact metrics (e.g., *45K+ Domains Registered*, *120K+ Active Students*), architecture breakdown, challenges solved, and direct live URL links.

---

### 5. Dynamic Case Study Pages (`/work/[slug]`)
In-depth project retrospective pages for every portfolio project:
- **Full Scope of Work**: Deliverables breakdown, system architecture overview, and technology stack.
- **The Challenge vs. The Solution**: Technical narratives illustrating how Solvexa solved complex concurrency, UI latency, or data synchronization issues.
- **Client Testimonial & Next Project Navigator**: Direct quote from the founder/CEO and forward navigation to the next case study.

---

### 6. About Us (`/about`)
A complete exploration of Solvexa’s corporate identity, engineering philosophy, and values:
- **Hero & Mission**: "Building Digital Solutions That Move Businesses Forward."
- **Who We Are**: The collective philosophy and bespoke consulting approach.
- **What We Do**: 6 core pillars (Web Development, Mobile App Development, Custom Software, AI & Machine Learning, UI/UX & Digital Experiences, Digital Transformation).
- **Our Vision**: Shaping a smarter, accessible digital future for modern enterprises.
- **Our Core Values**: *Innovation*, *Quality*, *Collaboration*, *Integrity*, *Customer First*, *Continuous Growth*.
- **The 7-Step Delivery Process**:
  1. `01 Discover`
  2. `02 Plan`
  3. `03 Design`
  4. `04 Build`
  5. `05 Test`
  6. `06 Launch`
  7. `07 Improve`
- **Why Choose Solvexa**: The Solvexa Guarantee — clean sovereign codebases with 100% IP ownership.
- **Our Approach**: *Think. Build. Improve.*
- **Partner Technologies**: Grid of 18 industry-standard frameworks, databases, and cloud providers.

---

### 7. Executive Leadership & Team (`/team`)
Showcases the leadership steering Solvexa's architectural, operational, and design standards:
- **Executive Profiles**:
  - **Chief Executive Officer (CEO)**: Product strategy, global client relations, and enterprise vision.
  - **Chief Technology Officer (CTO)**: Cloud architecture, AI pipelines, system scalability, and technical leadership.
  - **Chief Marketing Officer (CMO)**: Brand storytelling, customer acquisition funnels, and growth marketing.
- **Profile Cards**: High-resolution imagery, department focus, key achievements, focus skills, and direct LinkedIn profile links.
- **How We Work Together**: 6 collaboration principles (Continuous Alignment, Cross-Discipline Pods, Async Documentation, Code Reviews, Rapid Iterations, Direct Slack Channels).
- **Careers Banner**: Call-to-action inviting top engineering talent to submit portfolios to `info.solvexa@gmail.com`.

---

### 8. Contact & Client Onboarding (`/contact`)
A complete conversion-oriented consultation and inquiry portal:
- **Interactive Project Scoping Form**:
  - Full Name, Email, Phone Number, Company.
  - Service selection dropdown covering all 16 disciplines.
  - Estimated budget selector (`Under $5,000`, `$5,000 – $15,000`, `$15,000 – $35,000`, `$35,000+`).
  - Project requirements message box.
  - Instant submission feedback state with reset capabilities.
- **Direct Corporate Contact Details**:
  - **Phone**: `+92 328 8521417`
  - **Email**: `info.solvexa@gmail.com`
  - **Physical Studio**: Rawalpindi / Islamabad, Punjab, Pakistan (serving clients worldwide).
- **Official Social Channels**:
  - [LinkedIn (@solvexa1)](https://www.linkedin.com/company/solvexa1/posts/)
  - [Instagram (@solvexa_)](https://www.instagram.com/solvexa_/)
  - [Facebook (Solvexa Official)](https://www.facebook.com/profile.php?id=61573528962536)
- **Interactive Location Map**: Custom dark-themed Google Maps embed showing the headquarters.
- **Onboarding FAQs**: Immediate answers regarding NDA execution, milestones, pricing models, and team allocation.

---

### 9. Privacy Policy (`/privacy`)
Comprehensive legal policy detailing how Solvexa manages and protects client data:
- Information Collection & Confidential Information definition.
- **Strict NDA & Intellectual Property Enforcement**: Explicit clause safeguarding client source code, Figma files, and proprietary algorithms.
- Third-party cloud infrastructure safeguards (AWS, Vercel, Supabase).
- Data retention, GDPR/compliance rights, and contact details for legal inquiries.

---

### 10. Terms of Service (`/terms`)
Governing terms between Solvexa and enterprise clients:
- Engagement models (Fixed-Price Milestones and Monthly Agile Headcount).
- Deliverables acceptance and 14-day warranty review period.
- Sovereign Intellectual Property transfer upon final invoice settlement.
- Limitation of liability, governing law, and dispute resolution mechanisms.

---

### 11. Enterprise Billing Gateway (`/402`)
Custom styled HTTP 402 error page:
- Visual gold lock icon with pulse animation.
- Explains escrow clearance, retainer settlement, or milestone authorizations for private staging environments.
- Direct CTA buttons to contact the Accounts Desk or return to the homepage.

---

### 12. Custom 404 Page (`/not-found`)
A polished error recovery experience:
- Atmospheric neon gold glowing `404` drop-shadow.
- Quick navigation buttons to Home, Services, or the Contact Desk.

---

## 🧩 Component Architecture

All components reside in `src/components/` and are built for modularity and high performance:

| Component | Functionality |
| :--- | :--- |
| `Navbar.tsx` | Fixed luxury header with enlarged logo, navigation links, and "Contact Us" CTA. |
| `Footer.tsx` | Comprehensive footer with directory links, contact info, social links, and copyright. |
| `HeroSection.tsx` | Homepage hero with kinetic typography and dual action buttons. |
| `HeroGlobe.tsx` | Interactive kinetic globe showing global delivery hubs. |
| `HeroLogo3D.tsx` | 3D layered interactive logo with mouse-tilt effects. |
| `ProjectDeviceDisplay.tsx` | Highly detailed device frames: **Macbook Laptop**, **Mobile Smartphone**, and **Dual Combination**. |
| `ProjectBrandLogo.tsx` | Distinct custom vector brand logos for every portfolio project. |
| `TechLogos.tsx` | SVG component rendering authentic corporate logos for 30+ technologies. |
| `TechStackSection.tsx` | Interactive tabbed showcase filtering technologies by discipline. |
| `StatsCounter.tsx` | Live animated counter component for company metrics. |
| `ClientLoveSection.tsx` | Testimonials carousel and grid featuring verified client reviews. |
| `HowWeWorkSection.tsx` | Interactive 6-step teamwork methodology showcase. |
| `ContactCtaSection.tsx` | Reusable high-converting contact and consultation CTA. |
| `ScrollProgress.tsx` | Top-of-screen gold reading progress bar. |
| `BackToTopButton.tsx` | Smooth scroll-to-top floating button. |
| `WhatsAppButton.tsx` | Instant WhatsApp messaging trigger button. |

---

## 🗄️ Data Layer Architecture

Static content and project records are structured in TypeScript schemas located in `src/data/`:
- **`services.ts`**: Defines the 16 disciplines, sub-services, step-by-step methodologies, deliverables, FAQs, and tech stacks.
- **`work.ts`**: Contains data for the 15 production projects, including device display modes (`web`, `mobile`, `both`), accent colors, screenshots, and metrics.
- **`team.ts`**: Contains executive leadership profiles, career highlights, skill tags, and social URLs.
- **`techStack.ts`**: Categorized lists of technologies mapped to authentic SVG icons.
- **`testimonials.ts`**: Curated client quotes with author roles and company names.
- **`faqs.ts`**: General agency FAQs.

---

## 🛠️ Getting Started & Local Development

### Prerequisites
- **Node.js**: v18.18.0 or higher (v20+ recommended)
- **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ammarahmad01/Solvexa.git
   cd Solvexa
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

5. **Linting**:
   ```bash
   npm run lint
   ```

---

## 📁 Project Directory Structure

```text
Solvexa/
├── public/
│   ├── assets/              # SVG icons, social media logos, brand graphics
│   └── images/              # Project and hero image assets
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── 402/             # Payment Required page
│   │   ├── about/           # About Us page
│   │   ├── contact/         # Contact & Onboarding page
│   │   ├── privacy/         # Privacy Policy page
│   │   ├── services/        # Services catalog & [slug] deep-dives
│   │   │   └── [slug]/      # Dynamic service detail pages
│   │   ├── team/            # Team & Executive leadership page
│   │   ├── terms/           # Terms of Service page
│   │   ├── work/            # Portfolio catalog & [slug] case studies
│   │   │   └── [slug]/      # Dynamic project case study pages
│   │   ├── globals.css      # Design tokens, CSS variables, dark theme base
│   │   ├── layout.tsx       # Root layout (Fonts, Navbar, Footer, Scroll widgets)
│   │   ├── not-found.tsx    # Custom 404 Error page
│   │   └── page.tsx         # Homepage
│   ├── components/          # Reusable UI components & device mockups
│   └── data/                # Typed data records (services, work, team, techStack)
├── package.json             # Project dependencies & scripts
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

---

## 🏢 Corporate Information & Contact

- **Company Name**: Solvexa
- **Tagline**: Where Creativity Meets Innovation
- **Headquarters**: Rawalpindi / Islamabad, Punjab, Pakistan
- **Global Inquiries**: [info.solvexa@gmail.com](mailto:info.solvexa@gmail.com)
- **Direct Phone / WhatsApp**: [+92 328 8521417](tel:+923288521417)
- **Official Profiles**:
  - [LinkedIn](https://www.linkedin.com/company/solvexa1/posts/)
  - [Instagram](https://www.instagram.com/solvexa_/)
  - [Facebook](https://www.facebook.com/profile.php?id=61573528962536)

---

&copy; 2026 Solvexa. All rights reserved. Built with precision, passion, and engineering excellence.
