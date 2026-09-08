# SOLVEXA — Website Content & UI Guide
**Reference site:** ropstam.com | **Rebuild target:** Next.js | **Current site:** solvxa.github.io/website

This document is your single source of truth for restructuring Solvexa's site to match the
Ropstam-style layout: sitemap, navigation, section-by-section home page copy, every inner page
(Services, Work, About, Team, Contact), and the visual style system to implement it all in Next.js.

---

## 1. Sitemap (what Ropstam has → what you build)

```
/                       Home
/services               Services hub (grid of all services)
/services/[slug]        Individual service page (one per service)
/work                   Work / Portfolio hub (grid of all project types)
/work/[category]        Individual work-category page (filtered project grid)
/work/[category]/[slug] Individual project / case study page
/about                  About Us
/team                   Our Team
/contact                Contact Us
/faq                    (optional standalone, FAQs also live on Home)
```

Next.js App Router mapping:
```
app/
 ├─ page.tsx                      → Home
 ├─ services/page.tsx             → Services hub
 ├─ services/[slug]/page.tsx      → Service detail
 ├─ work/page.tsx                 → Work hub
 ├─ work/[category]/page.tsx      → Work category grid
 ├─ work/[category]/[slug]/page.tsx → Project case study
 ├─ about/page.tsx
 ├─ team/page.tsx
 └─ contact/page.tsx
```

Keep all service/work/team data in typed content files (`/data/services.ts`, `/data/work.ts`,
`/data/team.ts`) so pages are generated with `generateStaticParams`, not hardcoded.

---

## 2. Navbar Structure

```
Logo
Home | Services ▾ | Work ▾ | About Us | Team | Contact Us         [Call Us]  [Get a Quote →]
```

**Services dropdown** (mega-menu style, one row per service, icon + title + one-line tagline):

| Service | Tagline |
|---|---|
| Web Development | Custom-built, high-performance websites |
| Mobile App Development | Seamless iOS & Android apps |
| UI/UX Design | Interfaces people love to use |
| Digital Marketing | SEO, PPC & social growth strategies |
| Branding & Logo Design | Identity that makes you memorable |
| Video Editing & Motion | Polished video & logo animation |
| Content Marketing | Words and content that convert |
| MVP Development | Validate your idea, fast |

**Work dropdown** (mirrors your existing project categories):

| Category | Description |
|---|---|
| Website Development | HTML/CSS/JS & full-stack builds |
| Mobile App Development | React Native / cross-platform |
| Windows / Desktop Apps | C#, .NET desktop software |
| Game Development | Unity-built interactive experiences |
| Database Management | Custom data-driven systems |
| Branding & Logo Design | Identity & logo work |
| Video & Motion | Editing, animation, motion graphics |

Sticky navbar on scroll, background transitions from transparent → solid on scroll (Ropstam does
this). Mobile: hamburger → full-screen slide-in menu, accordions for Services/Work.

---

## 3. HOME PAGE — Section by Section

Build each of these as its own component: `<Hero/>`, `<TrustedBy/>`, `<Outsourcing/>`,
`<ServicesGrid/>`, `<WhyClientsLoveUs/>`, `<ContactCTA/>`, `<TechStack/>`, `<Achievements/>`,
`<FAQ/>`.

### 3.1 Hero Section
**Layout:** Full-width, dark or brand-gradient background, large heading left-aligned, supporting
paragraph, two CTA buttons, small trust badges/stats row below or client logo strip.

```md
H1: Where Creativity Meets Innovation — We Grow Your Business Online

Sub: Solvexa is a full-service digital agency delivering web & mobile app
development, branding, video production, and growth marketing — all under one roof.

CTA Primary: [Get a Free Quote →]   (links to /contact)
CTA Secondary: [Explore Our Work]   (links to /work)
```
Below hero: rotate 3–4 stat counters (keep your existing numbers):
- 85 Satisfied Early Adopters
- 15 Successful Pilot Projects
- 50 Clients Trusting Solvexa
- 4.5 Average Client Rating

### 3.2 Trusted By / Client Logos Strip
Horizontal auto-scrolling marquee of client/partner logos (grayscale, colors on hover). If you
don't yet have client logos, use placeholder "As Featured In" tech/tool logos temporarily, or
skip this section until you have real client marks — don't fabricate client names.

### 3.3 "Unlock Your Business Potential" (Outsourcing / Value Prop Section)
This is the Ropstam block you specifically asked for. Two-column layout: text + CTA on one side,
product/device mockup image on the other.

```md
H2: Unlock Your Business Potential With Our Expert Outsourcing Solutions

Body: We act as an extension of your in-house team — carefully matching designers,
developers, and marketers to your project so you get senior-level talent without the
overhead of full-time hiring. Scale up or down as your business needs change.

CTA: [Let's Build Your Team →]  (links to /contact or /services)
```

### 3.4 Our Services
Section intro + 3x3 (or 4x2) icon-card grid, one card per service, each with icon, title, 1–2
line description, and "Learn More →" linking to `/services/[slug]`.

```md
H2: Our Services
Sub: Driving your business forward with innovation, design, and technology.

[Card] Web Development — Custom-built, high-performance websites tailored to your business.
[Card] Mobile App Development — Seamless cross-platform apps for iOS & Android.
[Card] UI/UX Design — Interfaces that are as functional as they are beautiful.
[Card] Digital Marketing — SEO, PPC, and social strategies that drive real growth.
[Card] Branding & Logo Design — Complete identity systems that make you memorable.
[Card] Video Editing & Motion Graphics — Polished video content and logo animation.
[Card] Content Marketing — Blog, social, and content strategy that converts.
[Card] MVP Development — Validate your idea fast with a lean, working product.

Footer link: [Explore All Services →] (/services)
```

### 3.5 "Why Our Clients Love Us?"
Short intro paragraph + CTA button, followed by a testimonial carousel (photo, quote, name,
title/company). Reuse your 4 existing testimonials (Shahzaib, Shan Ali, Fatima Shah, Michael) —
paraphrase slightly for freshness, keep them factual to what was actually said.

```md
H2: Why Our Clients Love Us?

Body: Our clients stick with us because we prioritize clear communication, reliable
delivery, and results that actually move the needle for their business.

CTA: [Contact Us →] (/contact)

[Testimonial 1] Shahzaib — Software Engineer
[Testimonial 2] Shan Ali — Project Manager
[Testimonial 3] Fatima Shah — Entrepreneur
[Testimonial 4] Michael — Marketing Specialist
```

### 3.6 Contact CTA / Lead Form Section
Full-width band, contrasting background, heading + short lead-capture form (Name, Email, Phone,
Company, Message). This is the same content as your /contact page's form — can be a shared
`<ContactForm/>` component rendered here as a shortened variant.

```md
H2: Ready to Discuss Your Project With Us? Get in Touch Today to Get Started.

Form fields: Full Name*, Work Email*, Phone, Company Name (optional), Message*
Button: [Get In Touch]
```

### 3.7 Our Technology Stack
Tabbed section: Web | Mobile | Marketing/SEO Tools | Design | Database | Testing. Each tab shows
a logo grid of tools/languages you actually use. Suggested tab content based on your stack:

```md
H2: Our Technology Stack

Tabs:
- Web: HTML5, CSS3, JavaScript, React, Next.js, Node.js, WordPress, PHP
- Mobile: React Native, Flutter, Android, iOS
- Design: Figma, Adobe XD, Photoshop, Illustrator, After Effects
- Marketing: Google Analytics, SEMrush/Ahrefs, Meta Ads Manager, Mailchimp
- Database: MySQL, MongoDB, PostgreSQL, Firebase
- Testing/Tools: Postman, Jira, Trello, GitHub
```
Only list tools your team genuinely uses — don't copy Ropstam's exact stack wholesale.

### 3.8 Achievements / Recognition (optional, once you have any)
Single-stat highlight block: "Trusted IT Service Provider — Rawalpindi, Pakistan" with a link to
any directory profile (Clutch, GoodFirms) once you're listed. Omit until you have a real
credential to show — don't fabricate awards.

### 3.9 FAQ's
Accordion, 5 questions, matches Ropstam's pattern (what/who/why/how/where):

```md
H2: FAQ's

Q: What does Solvexa do?
A: Solvexa is a full-service digital agency providing web and mobile app development,
branding, video production, and digital marketing to businesses of all sizes.

Q: What services does Solvexa offer?
A: We offer Web Development, Mobile App Development, UI/UX Design, Digital Marketing,
Branding & Logo Design, Video Editing & Motion Graphics, Content Marketing, and MVP
Development — each tailored to your specific goals.

Q: Why should I choose Solvexa for my project?
A: We combine a client-first approach with a skilled, versatile team, transparent
communication, and a track record of delivering projects on time and to spec.

Q: How can I start a project with Solvexa?
A: Reach out through our contact form or email info.solvexa@gmail.com with your
requirements, and our team will get back to you to discuss your goals and next steps.

Q: Where is Solvexa located?
A: Solvexa is based in Rawalpindi, Punjab, Pakistan, and works with clients remotely
across the globe.
```

### 3.10 Footer
Logo + short tagline · Quick Links (About, Services, Work, Contact) · Legal (Terms of Use,
Privacy Policy) · Social icons (Instagram, LinkedIn) · Contact block (address, phone, email) ·
copyright line.

---

## 4. SERVICES SECTION

### 4.1 `/services` — Services Hub Page
Hero banner: "Our Services — Solutions Built Specifically for Your Business" + short intro
paragraph. Below: full grid of all 8 services as cards (same cards as home, but this page shows
ALL of them, home page can show a subset of 6–8). Each card → links to its own detail page.

### 4.2 `/services/[slug]` — Individual Service Page Template
Every service gets this same structure (this is what "make ther page proper" means — a
repeatable template, not one bespoke page per service):

```md
1. Hero: Service name (H1) + one-line value statement + "Get a Quote" CTA + relevant image/icon
2. Overview: 2–3 paragraph explanation of the service and who it's for
3. What's Included: bullet list of sub-offerings (see per-service lists below)
4. Our Process: 4–5 step numbered process (Discovery → Design → Development → Testing → Launch)
5. Tech/Tools used for this service (small logo row)
6. Related Work: 3-project mini-grid pulled from /work filtered by this service's category
7. FAQ: 3 service-specific questions
8. CTA band: "Ready to start your [Service] project?" → contact form
```

**Per-service "What's Included" content** (reuse/expand what you already had):

- **Web Development:** Custom Website Development, E-commerce Solutions, WordPress & CMS
  Development, Web App Development, API Integration, Website Maintenance
- **Mobile App Development:** iOS & Android Development, React Native & Flutter Solutions,
  UI/UX-Focused Apps, App Store Deployment, App Maintenance & Updates
- **UI/UX Design:** Wireframing & Prototyping, User Research, Interface Design, Design Systems,
  Usability Testing
- **Digital Marketing:** SEO, PPC Advertising, Social Media Marketing, Email & Content Marketing,
  Brand Awareness Campaigns
- **Branding & Logo Design:** Custom Logo Design, Brand Identity Packages, Style Guides,
  Revisions Until Satisfaction
- **Video Editing & Motion Graphics:** Corporate Videos, Social Media Content, 2D/3D Logo
  Animation, Motion Graphics & Effects
- **Content Marketing:** Blog Writing, Social Media Content, Content Strategy & Planning,
  Copywriting
- **MVP Development:** Rapid Prototyping, Core Feature Scoping, Lean Build & Launch, Post-Launch
  Iteration Support

### 4.3 "Hire a Dedicated Team" (optional, Ropstam-style)
If you offer staffing/outsourcing like the home-page CTA promises, give it its own page at
`/services/hire-team` explaining engagement models (dedicated resource, dedicated team,
project-based) — otherwise remove that CTA from the home page so it doesn't promise something
you don't offer.

---

## 5. WORK / PORTFOLIO SECTION

### 5.1 `/work` — Work Hub Page
Hero: "Our Work — See What We've Built" + intro paragraph. Filter/category tabs at top (All,
Website, Mobile App, Desktop, Game Dev, Database, Branding, Video). Below: masonry/grid of
project thumbnail cards. Each card: cover image, project title, one-line category tag, hover
overlay with "View Project →".

Use your existing projects as the seed data:

| Category | Project | Description |
|---|---|---|
| Website Development | (name it) | Built with HTML, CSS, and JavaScript |
| Windows Application | (name it) | Developed using C# and .NET Framework |
| Mobile App Development | (name it) | CRM system built with React Native |
| Desktop Application | (name it) | Traffic simulation software |
| Game Development | (name it) | Explorer game built with Unity Engine |
| Database Management | (name it) | Pro Manager app with MySQL |
| Logo Animation | (name it) | Dynamic animations with After Effects |
| Video Editing | (name it) | Professional editing with Premiere Pro |
| Logo Design | (name it) | Creative branding with Adobe Illustrator |

Give each project a real, specific name instead of just the category label — this is what makes
it read as a genuine portfolio rather than a placeholder grid.

### 5.2 `/work/[category]` — Category Page
Same grid, pre-filtered to one category, short category-specific intro paragraph at top.

### 5.3 `/work/[category]/[slug]` — Project / Case Study Page Template
Reuse the same structure for every project:

```md
1. Hero: Project name, category tag, cover image/screenshot, client name (if public), live link
2. Overview: The problem/brief in 2–3 sentences
3. What We Did: bullet list of deliverables
4. Tech Stack used for this specific project
5. Gallery: 3–6 screenshots/mockups
6. Results: outcome/impact (only include numbers you can actually stand behind)
7. Next Project: link to the next case study for continuous browsing
```

---

## 6. ABOUT US PAGE (`/about`)

```md
Hero: About Solvexa
Sub: Where Creativity Meets Innovation.

Section 1 — Our Story:
2–3 paragraphs based on your existing About copy: who Solvexa is, what you specialize in,
and the client-first philosophy. (Reuse and lightly expand your current About text.)

Section 2 — Our Mission / What Drives Us:
Short mission statement + 3 value cards (e.g. Innovation, Integrity, Client-First Delivery)

Section 3 — Why Choose Us:
3–4 short reason cards (reuse your existing "Why Choose Us" content: innovation, creativity,
excellence, client-centric approach, real results)

Section 4 — Stats row: reuse the 85 / 15 / 50 / 4.5 stats from the home page

Section 5 — Meet the Team (teaser):
2–3 team photo cards + "Meet the Full Team →" linking to /team

Section 6 — CTA band: "Let's build something great together" → /contact
```

---

## 7. TEAM PAGE (`/team`)

```md
Hero: Meet Our Team
Sub: The people behind Solvexa's work.

Grid of team member cards (reuse your real team data):

1. Ammar Ahmed — CEO (Chief Executive Officer)
   Social: Facebook, Instagram, LinkedIn

2. Rohan Bin Ejaz — CTO (Chief Technology Officer)
   Social: Facebook, Instagram, LinkedIn

3. Abdullah Abbasi — CMO (Chief Marketing Officer)
   Social: Instagram

Card layout: circular/rounded photo, name, title, 1-line bio (optional, add if you have it),
social icon row. On hover: subtle lift/shadow + color accent border.

Optional: "Join Our Team" CTA band at bottom linking to a careers/contact email if you're hiring.
```

---

## 8. CONTACT US PAGE (`/contact`)

```md
Hero: Get In Touch
Sub: Have a project in mind? Let's talk.

Two-column layout:
LEFT — Contact form: Full Name*, Work Email*, Phone, Company Name, Message*, Submit button
RIGHT — Contact details card:
  Address: Rawalpindi, Punjab, Pakistan
  Phone: +92 328 8521417
  Email: info.solvexa@gmail.com
  Social: Instagram, LinkedIn

Below: embedded Google Map (reuse your existing embed for Rawalpindi)

Optional: FAQ mini-section repeating 2–3 relevant questions from the home FAQ
```

---

## 9. VISUAL / STYLE SYSTEM

Ropstam uses a clean, high-contrast, product-agency style: bold sans-serif headings, generous
white space, rounded cards with soft shadows, one strong accent color against dark/light neutral
backgrounds, and consistent icon-led service cards. Adapt it with **your own brand color**, don't
copy Ropstam's palette exactly.

```md
### Typography
- Headings: a bold, modern sans-serif (e.g. Poppins, Sora, or Inter Bold) — large scale,
  H1 ~48–64px desktop / 32–40px mobile
- Body: Inter or similar, 16–18px, line-height 1.6
- Use a consistent H1 > H2 > H3 scale across every page template

### Color System (example — swap in Solvexa's real brand colors)
- Primary/Brand: choose one strong accent (e.g. a blue or teal — check your logo for the exact hex)
- Dark neutral (headings/background bands): near-black, e.g. #0B0F19
- Light neutral (page background): #FFFFFF / #F7F8FA
- Muted text: #6B7280
- Success/CTA button: primary color, white text, rounded-full or rounded-lg

### Components
- Buttons: pill or rounded-lg, primary filled + secondary outline variant, subtle hover scale
- Cards: rounded-2xl, soft drop shadow, icon on colored circular badge at top
- Section spacing: 80–120px vertical padding desktop, 48–64px mobile
- Container max-width: ~1280px, centered, 24px side padding on mobile

### Motion
- Fade/slide-in on scroll for section headings and cards (e.g. Framer Motion)
- Sticky navbar with background blur/solid on scroll
- Testimonial and client-logo sections as auto-scrolling carousels
```

---

## 10. Next.js Build Notes

- Use `next/image` for every image with explicit width/height to avoid layout shift.
- Store services/work/team as typed arrays in `/data/*.ts` so cards and detail pages are
  generated from one source of truth (`services.map(...)`, `generateStaticParams`).
- Use dynamic routes `[slug]` for services and `[category]/[slug]` for work so adding a new
  service or project is just adding a data entry, not a new page file.
- Reuse one `<SectionHeading/>`, one `<Card/>`, one `<CTASection/>`, and one `<ContactForm/>`
  component across all pages instead of rebuilding markup per page — this is what will make the
  whole site feel consistent like Ropstam's.
- Wire the contact form to a real endpoint (API route + email service, e.g. Resend/Nodemailer)
  instead of a static mailto link.

---

**Note on content honesty:** Everywhere this guide includes example numbers, client names, or
achievements, replace them with your real figures before launch — copying Ropstam's specific
claims (their stats, their partner logos, their office addresses) onto Solvexa's site would be
misleading. Use their site only as a structural/layout reference, not as a copy source.
