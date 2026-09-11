export interface ProjectItem {
  id: string;
  slug: string;
  brandName: string;
  brandSeparator: string;
  title: string;
  brandLogoType: string;
  clientLogo?: string;
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
  objectives: string[];
  architecture: string;
  keyFeatures: string[];
  howSolvexaSolvedIt: string;
  outcome: string;
  techStack: string;
  mlPipeline?: string;
  servicesDelivered?: string[];
  designProcess?: string;
  workflow?: string;
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
    id: "alkhidmat-foundation",
    slug: "alkhidmat-foundation-punjab-north",
    brandName: "Alkhidmat Foundation",
    brandSeparator: "–",
    title: "Punjab North — Digital Platform & Operations Ecosystem",
    brandLogoType: "alkhidmat",
    clientLogo: "/assets/Client Logo/ALKHIDMAT-Logo.png",
    deviceType: "web",
    accentColor: "#10b981",
    themeGlow: "rgba(16, 185, 129, 0.25)",
    buttonGradient: "from-emerald-500 to-teal-600",
    shortDesc: "Organizational website with online donations, CRM, ERP, and CMS.",
    description:
      "Alkhidmat Foundation Punjab North required a comprehensive digital platform capable of representing the organization's mission online while also supporting its operational and donation-related activities. Solvexa developed a modern organizational website combined with an online donation system and supporting management capabilities, giving visitors clear program information while giving the organization a structured way to manage digital content and operations.",
    heroImage: "/assets/Work/Alkhidmat.png",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
    liveUrl: "#",
    client: "Alkhidmat Foundation Punjab North",
    timeline: "Completed",
    metrics: "Full-Stack",
    metricsLabel: "Web + CRM/ERP/CMS",
    category: "Website, Online Donation System, CRM, ERP & CMS",
    categorySlug: "web-crm-erp",
    galleryImages: [],
    overview:
      "Alkhidmat Foundation Punjab North required a comprehensive digital platform capable of representing the organization's mission online while also supporting its operational and donation-related activities.",
    challenge:
      "The major challenge was combining a public-facing website with operational functionality while keeping the experience simple for visitors and manageable for administrators — and ensuring donation and organizational information could be handled reliably without complicating the user journey.",
    solution:
      "Solvexa separated public-facing experiences from administrative workflows while keeping them connected through a centralized backend. The platform was structured around reusable components, database-driven content, controlled administrative access, and scalable backend services.",
    howSolvexaSolvedIt:
      "Solvexa separated public-facing experiences from administrative workflows while keeping them connected through a centralized backend. The platform was structured around reusable components, database-driven content, controlled administrative access, and scalable backend services — allowing the organization to manage information efficiently while visitors received a fast, professional experience.",
    outcome:
      "The project created a stronger digital presence while establishing a centralized foundation for online donations, content management, and organizational operations.",
    objectives: [
      "Build a professional and trustworthy online presence",
      "Provide clear information about programs and initiatives",
      "Enable online donations",
      "Simplify donation and contact management",
      "Provide centralized content management",
      "Support internal operational workflows",
      "Improve accessibility across desktop and mobile devices",
      "Create a scalable foundation for future digital services",
    ],
    architecture: "Frontend → API / Server Logic → Supabase → PostgreSQL",
    keyFeatures: [
      "Organization website",
      "Online donation system & donation management",
      "CMS",
      "CRM / management functionality",
      "Contact forms",
      "Administrative dashboard",
      "Content management",
      "Responsive design",
      "Secure authentication",
      "Data export and reporting capabilities",
    ],
    techStack:
      "Next.js · React · TypeScript · Supabase · PostgreSQL · Authentication · REST/API integrations · Cloudflare · Responsive UI",
    deliverables: [
      "Organization website with responsive design",
      "Online donation system & donation management",
      "CRM / ERP management functionality",
      "CMS & administrative dashboard",
    ],
  },
  {
    id: "noor-educational-system",
    slug: "noor-educational-system",
    brandName: "Noor Educational System",
    brandSeparator: "–",
    title: "AI-Powered Educational Platform & Learning Ecosystem",
    brandLogoType: "noor",
    deviceType: "web",
    accentColor: "#3b82f6",
    themeGlow: "rgba(59, 130, 246, 0.25)",
    buttonGradient: "from-blue-500 to-indigo-600",
    shortDesc:
      "Educational platform with AI chatbot, school management, LMS, and CMS.",
    description:
      "Noor Educational System required more than a traditional educational website — it needed a digital ecosystem capable of presenting educational information while supporting students, staff, administration, learning resources, and communication. Solvexa developed a website integrated with an AI chatbot, school management capabilities, LMS functionality, and CMS features into one unified educational platform.",
    heroImage: "/assets/Work/Noor edu.png",
    technologies: ["Next.js", "React", "TypeScript", "OpenAI", "Node.js"],
    liveUrl: "#",
    client: "Noor Educational System",
    timeline: "Completed",
    metrics: "AI + EdTech",
    metricsLabel: "Full Platform",
    category: "Education Website, AI Chatbot, School Management System, LMS & CMS",
    categorySlug: "web-ai-edtech",
    galleryImages: [],
    overview:
      "Noor Educational System needed a digital ecosystem capable of presenting educational information while supporting students, staff, administration, learning resources, and communication.",
    challenge:
      "The platform had to serve different users with different needs — visitors, students, teachers, and administrators — while the AI chatbot needed to provide useful answers while remaining connected to the educational context.",
    solution:
      "Solvexa designed the platform using modular functionality and role-based workflows. The AI assistant was integrated as a dedicated intelligent layer, while the management and learning systems remained structured around their specific workflows.",
    howSolvexaSolvedIt:
      "Solvexa designed the platform using modular functionality and role-based workflows. The AI assistant was integrated as a dedicated intelligent layer, while the management and learning systems remained structured around their specific workflows — making the platform easier to maintain, expand, and manage.",
    outcome:
      "Noor Educational System gained a centralized digital platform combining its website, learning environment, management functionality, content management, and AI assistance.",
    objectives: [
      "Create a professional educational website",
      "Improve communication with students and visitors",
      "Provide AI-powered assistance",
      "Support school management operations",
      "Provide an LMS environment",
      "Centralize educational content",
      "Give administrators control over website content",
      "Improve accessibility to learning resources",
    ],
    architecture:
      "Web Application → Backend/API Layer → Database\nAI Chatbot → LLM Integration → Context / Knowledge Layer",
    keyFeatures: [
      "Educational website",
      "AI chatbot",
      "Student management",
      "School management",
      "LMS",
      "CMS",
      "Admin dashboard",
      "Authentication",
      "Course/learning content",
      "Responsive interface",
    ],
    techStack:
      "Next.js · React · TypeScript · Backend APIs · Database · AI/LLM integration · CMS · Authentication · Responsive UI",
    deliverables: [
      "Educational website with AI chatbot",
      "School management system",
      "Learning management system (LMS)",
      "CMS & admin dashboard",
    ],
  },
  {
    id: "crowdcam",
    slug: "crowdcam-event-management",
    brandName: "CrowdCam",
    brandSeparator: "–",
    title: "Mobile Event Management Application",
    brandLogoType: "crowdcam",
    clientLogo: "/assets/Client Logo/Crowd Cam.png",
    deviceType: "web",
    accentColor: "#f59e0b",
    themeGlow: "rgba(245, 158, 11, 0.25)",
    buttonGradient: "from-amber-500 to-orange-600",
    shortDesc:
      "Mobile event management application built with Flutter.",
    description:
      "CrowdCam is a mobile event management application developed with Flutter to simplify event-related activities and provide users with a centralized mobile experience. It focuses on organizing event information, managing users and event activities, and creating a smoother experience for participants and organizers.",
    heroImage: "/assets/Work/CrowdCam.png",
    technologies: ["Flutter", "Dart", "Firebase", "REST API"],
    liveUrl: "#",
    client: "CrowdCam",
    timeline: "Completed",
    metrics: "Mobile",
    metricsLabel: "Flutter App",
    category: "Event Management Mobile Application",
    categorySlug: "mobile-app",
    galleryImages: [],
    overview:
      "CrowdCam needed a centralized mobile platform for organizing event information, managing users, and creating a smoother experience for participants and organizers.",
    challenge:
      "Event applications need to handle multiple user flows while keeping the interface simple enough for users who may only interact with the app during an event.",
    solution:
      "Solvexa focused on clear navigation, reusable components, structured data flows, and a mobile-first user experience.",
    howSolvexaSolvedIt:
      "Solvexa focused on clear navigation, reusable components, structured data flows, and a mobile-first user experience.",
    outcome:
      "CrowdCam provides a centralized mobile platform for managing and supporting event experiences.",
    objectives: [
      "Simplify event management",
      "Centralize event information",
      "Improve communication",
      "Provide mobile-first accessibility",
      "Improve participant engagement",
      "Reduce manual event-management processes",
    ],
    architecture: "Flutter Application → API Layer → Backend Services → Database",
    keyFeatures: [
      "Event management & organization",
      "User management",
      "Mobile-first experience",
      "Push notifications",
      "Centralized event information",
    ],
    techStack:
      "Flutter · Dart · Backend APIs · Database · Authentication · Cloud Services · Push Notifications",
    deliverables: [
      "Flutter mobile application",
      "Event management system",
      "User management & authentication",
      "Cloud-based backend services",
    ],
  },
  {
    id: "tayyab-autos",
    slug: "tayyab-autos-website",
    brandName: "Tayyab Autos",
    brandSeparator: "–",
    title: "Modern Automotive Business Website",
    brandLogoType: "tayyab-autos",
    deviceType: "web",
    accentColor: "#ef4444",
    themeGlow: "rgba(239, 68, 68, 0.25)",
    buttonGradient: "from-red-500 to-rose-600",
    shortDesc:
      "Modern responsive website for an automotive business.",
    description:
      "Tayyab Autos required a modern online presence that could showcase its automotive products and services professionally while making it easier for potential customers to discover and contact the business. Solvexa created a responsive automotive website focused on clean presentation, strong visual hierarchy, easy navigation, and mobile accessibility.",
    heroImage: "/assets/Work/tayab auto.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    client: "Tayyab Autos",
    timeline: "Completed",
    metrics: "Web",
    metricsLabel: "Responsive Website",
    category: "Automotive Business Website",
    categorySlug: "web-development",
    galleryImages: [],
    overview:
      "Tayyab Autos needed a modern online presence to showcase its automotive products and services professionally while making it easier for potential customers to discover and contact the business.",
    challenge:
      "The website needed to communicate automotive information clearly without overwhelming visitors with unnecessary content.",
    solution:
      "Solvexa focused on a visual-first interface with structured sections, clear calls-to-action, responsive layouts, and optimized content presentation.",
    howSolvexaSolvedIt:
      "Solvexa focused on a visual-first interface with structured sections, clear calls-to-action, responsive layouts, and optimized content presentation.",
    outcome:
      "A modern digital presence that gives the automotive business a stronger professional identity and makes its services easier for customers to discover.",
    objectives: [
      "Establish a professional online presence",
      "Showcase automotive services/products",
      "Improve customer discovery",
      "Make contact information easily accessible",
      "Build trust through professional presentation",
      "Provide a mobile-friendly experience",
    ],
    architecture: "Client Browser → Next.js Application → Content / API Layer",
    keyFeatures: [
      "Automotive service showcase",
      "Responsive design",
      "Contact functionality",
      "Clean visual hierarchy",
      "Mobile accessibility",
    ],
    techStack:
      "Next.js · React · TypeScript · Tailwind CSS · Responsive Web Design · Modern deployment infrastructure",
    deliverables: [
      "Responsive automotive business website",
      "Mobile-optimized design",
      "Contact & discovery features",
      "Clean visual presentation",
    ],
  },
  {
    id: "mealmates-ai",
    slug: "mealmates-ai-platform",
    brandName: "MealMates AI",
    brandSeparator: "–",
    title: "AI-Powered Personalized Meal Planning Platform",
    brandLogoType: "mealmates",
    clientLogo: "/assets/Client Logo/MealMates Logo.png",
    deviceType: "web",
    accentColor: "#22c55e",
    themeGlow: "rgba(34, 197, 94, 0.25)",
    buttonGradient: "from-green-500 to-emerald-600",
    shortDesc:
      "AI-powered personalized meal planning platform.",
    description:
      "MealMates AI is an AI-powered meal planning platform combining machine learning, personalized recommendations, user management, administration, and mobile/web applications. The system generates personalized meal recommendations based on user information and preferences while providing an organized digital experience through web and mobile interfaces.",
    heroImage: "/assets/Work/Meal Mates.png",
    mobileImage: "/assets/Work/Meal Mates.png",
    technologies: ["Flutter", "Python", "Machine Learning", "REST API"],
    liveUrl: "#",
    client: "MealMates AI",
    timeline: "Completed",
    metrics: "AI + ML",
    metricsLabel: "Full-Stack + ML",
    category: "AI-Powered Personalized Meal Planning Platform",
    categorySlug: "ai-mobile-web",
    galleryImages: [],
    overview:
      "MealMates AI needed to generate personalized meal recommendations based on user information and preferences, combining ML with full-stack application development.",
    challenge:
      "Personalized recommendations require more than simply connecting an application to an AI model — input data needs to be cleaned and transformed into a format the model can understand, and the application needs to handle predictions reliably and present results in a user-friendly way.",
    solution:
      "Solvexa separated the machine learning pipeline from the application layer. The model was trained through a structured preprocessing and training workflow, while the backend provided a controlled interface for making predictions.",
    howSolvexaSolvedIt:
      "Solvexa separated the machine learning pipeline from the application layer. The model was trained through a structured preprocessing and training workflow, while the backend provided a controlled interface for making predictions — allowing the ML component to operate as part of the larger application rather than being tightly coupled to the UI.",
    outcome:
      "MealMates AI demonstrates Solvexa's ability to combine full-stack application development with machine learning and personalized digital experiences.",
    objectives: [
      "Provide personalized meal recommendations",
      "Train and integrate an ML model",
      "Build user management",
      "Create an administrative system",
      "Provide prediction functionality",
      "Deliver web and mobile applications",
      "Centralize user and application data",
      "Create a scalable foundation for future AI features",
    ],
    architecture:
      "Web / Mobile App → Backend API → User & Application Services → ML Prediction Service → Trained Model → Personalized Recommendation",
    keyFeatures: [
      "User registration/login & personalized profiles",
      "Meal planning",
      "AI/ML predictions & recommendation workflow",
      "User management & admin dashboard",
      "Backend APIs",
      "Mobile and web applications",
      "Model prediction pipeline",
    ],
    techStack:
      "Flutter · Web Application · Backend APIs · Database · Python · Machine Learning · Data Preprocessing · Model Training · Prediction Pipeline · Admin Dashboard",
    mlPipeline:
      "Data Collection → Cleaning → Preprocessing → Feature Engineering → Model Training → Evaluation → Prediction",
    deliverables: [
      "Web and mobile applications",
      "ML prediction pipeline",
      "User management & admin dashboard",
      "Personalized recommendation engine",
    ],
  },
  {
    id: "plantguard",
    slug: "plantguard-ai-detection",
    brandName: "PlantGuard",
    brandSeparator: "–",
    title: "AI-Powered Plant Disease Detection & Care Management",
    brandLogoType: "plantguard",
    clientLogo: "/assets/Client Logo/PlantGurad.png",
    deviceType: "web",
    accentColor: "#16a34a",
    themeGlow: "rgba(22, 163, 74, 0.25)",
    buttonGradient: "from-green-600 to-emerald-700",
    shortDesc:
      "AI-powered plant disease detection and care management app.",
    description:
      "PlantGuard is an AI-powered plant health application designed to identify plant diseases from images and provide a digital interface for plant care management. The project combines deep learning, computer vision, image classification, Flutter mobile development, and web application development, with a CNN-based deep learning model trained to classify plant images and identify potential diseases.",
    heroImage: "/assets/Work/Plantguard.png",
    technologies: ["Python", "TensorFlow", "Flutter", "REST API"],
    liveUrl: "#",
    client: "PlantGuard",
    timeline: "Completed",
    metrics: "AI / CV",
    metricsLabel: "Deep Learning",
    category: "AI-Powered Plant Disease Detection & Care Management",
    categorySlug: "ai-computer-vision",
    galleryImages: [],
    overview:
      "PlantGuard needed to identify plant diseases from images and provide a digital interface for plant care management, combining deep learning with mobile and web development.",
    challenge:
      "Plant disease classification can be affected by image quality, lighting conditions, backgrounds, plant varieties, and differences between training and real-world images.",
    solution:
      "Solvexa created a structured image preprocessing and model-training workflow and connected the trained model to application interfaces, separating the AI component from the presentation layer.",
    howSolvexaSolvedIt:
      "Solvexa created a structured image preprocessing and model-training workflow and connected the trained model to application interfaces, separating the AI component from the presentation layer so predictions could be delivered through both mobile and web experiences.",
    outcome:
      "PlantGuard demonstrates the practical application of deep learning and computer vision in an accessible plant-care product.",
    objectives: [
      "Detect plant diseases from images",
      "Train a deep learning classification model",
      "Provide accessible plant health assistance",
      "Create mobile and web applications",
      "Connect AI predictions with a user-friendly interface",
      "Support plant care management",
    ],
    architecture:
      "Plant Image → Image Preprocessing → CNN Model → Disease Classification → Prediction Result → Mobile / Web Interface",
    keyFeatures: [
      "Plant image upload/capture",
      "AI disease detection & CNN classification",
      "Prediction results & plant care information",
      "Mobile and web applications",
      "User management & backend integration",
    ],
    techStack:
      "Python · TensorFlow / Keras · CNN · Deep Learning · Image Classification · Computer Vision · Flutter · Web Application · Backend APIs · Database",
    mlPipeline:
      "Dataset → Cleaning → Image Preprocessing → Training → Validation → Model Evaluation → Prediction",
    deliverables: [
      "CNN-based disease detection model",
      "Flutter mobile application",
      "Web application",
      "Image preprocessing pipeline",
    ],
  },
  {
    id: "punjab-silk-house",
    slug: "punjab-silk-house-marketing",
    brandName: "Punjab Silk House",
    brandSeparator: "–",
    title: "Social Media & Digital Marketing",
    brandLogoType: "punjab-silk-house",
    deviceType: "web",
    accentColor: "#8b5cf6",
    themeGlow: "rgba(139, 92, 246, 0.25)",
    buttonGradient: "from-violet-500 to-purple-600",
    shortDesc:
      "Social media and digital marketing services.",
    description:
      "Solvexa supported Punjab Silk House with social and digital marketing activities focused on improving its online communication, brand presentation, and audience engagement — planning digital content, maintaining a consistent visual identity, and producing communication materials for social media platforms.",
    heroImage: "/assets/Work/Punjab slik house.png",
    technologies: ["Instagram", "Facebook", "Meta", "Graphic Design"],
    liveUrl: "#",
    client: "Punjab Silk House",
    timeline: "Completed",
    metrics: "Digital",
    metricsLabel: "Marketing",
    category: "Social Media & Digital Marketing",
    categorySlug: "digital-marketing",
    galleryImages: [],
    overview:
      "Punjab Silk House needed improved online communication, brand presentation, and audience engagement through structured digital marketing.",
    challenge:
      "Educational and skills-development organizations need to communicate valuable information while keeping content visually engaging and easy to understand.",
    solution:
      "Solvexa combined structured content planning with consistent graphic design and platform-specific communication, built around clear messaging, visual hierarchy, audience relevance, and consistent branding.",
    howSolvexaSolvedIt:
      "Solvexa combined structured content planning with consistent graphic design and platform-specific communication, built around clear messaging, visual hierarchy, audience relevance, and consistent branding.",
    outcome:
      "A more organized and professional digital communication presence designed to improve visibility and audience engagement.",
    objectives: [
      "Improve digital presence",
      "Strengthen brand communication",
      "Increase audience engagement",
      "Maintain consistent visual identity",
      "Communicate programs and services effectively",
      "Create professional social media content",
    ],
    architecture: "Content Strategy → Design → Platform Distribution → Audience Engagement",
    keyFeatures: [
      "Social media management",
      "Digital marketing & content planning",
      "Social media creatives & campaign content",
      "Brand communication",
      "Audience-focused content",
      "Digital promotion",
    ],
    techStack: "Social Media Management · Digital Marketing · Content Planning · Graphic Design · Brand Communication",
    servicesDelivered: [
      "Social media management",
      "Digital marketing & content planning",
      "Social media creatives & campaign content",
      "Brand communication",
      "Audience-focused content",
      "Digital promotion",
    ],
    deliverables: [
      "Social media management",
      "Digital marketing strategy",
      "Social media creatives",
      "Brand communication materials",
    ],
  },
  {
    id: "autoaid",
    slug: "autoaid-roadside-assistance",
    brandName: "AutoAid",
    brandSeparator: "–",
    title: "On-Demand Roadside Assistance Mobile Application",
    brandLogoType: "autoaid",
    deviceType: "mobile",
    accentColor: "#f97316",
    themeGlow: "rgba(249, 115, 22, 0.25)",
    buttonGradient: "from-orange-500 to-red-600",
    shortDesc:
      "On-demand roadside assistance app connecting drivers with mechanics.",
    description:
      "AutoAid is an Android-based on-demand roadside assistance application designed to connect vehicle owners with nearby mechanics during breakdowns or roadside emergencies. Users can request assistance, share their live location and vehicle issue, communicate with mechanics, track the service process, and rate the completed job.",
    heroImage: "/assets/Work/AutoAid.jpg",
    mobileImage: "/assets/Work/AutoAid.jpg",
    technologies: ["Flutter", "Firebase", "Google Maps", "REST API"],
    liveUrl: "#",
    client: "AutoAid",
    timeline: "Completed",
    metrics: "Mobile",
    metricsLabel: "Android App",
    category: "On-Demand Roadside Assistance Mobile Application",
    categorySlug: "mobile-app",
    galleryImages: [],
    overview:
      "AutoAid needed to connect vehicle owners with nearby mechanics during breakdowns, providing real-time location sharing and communication.",
    challenge:
      "The key challenge was creating a reliable workflow for emergency situations where speed and accurate location information are critical.",
    solution:
      "Solvexa designed the application around a simple request lifecycle: a user quickly describes the issue and shares their location, the backend manages request information and connects it with available mechanics.",
    howSolvexaSolvedIt:
      "Solvexa designed the application around a simple request lifecycle: a user quickly describes the issue and shares their location, the backend manages request information and connects it with available mechanics, and notifications keep both sides informed throughout.",
    outcome:
      "AutoAid provides a structured digital solution for roadside assistance, making it easier for vehicle owners to request help and for mechanics to respond to service opportunities.",
    objectives: [
      "Connect vehicle owners with nearby mechanics",
      "Reduce response time during breakdowns",
      "Enable location-based assistance",
      "Provide real-time service communication",
      "Improve transparency between customers and mechanics",
      "Allow users to rate completed services",
    ],
    architecture:
      "Flutter Mobile App → REST APIs → Backend → Database\nUser Location → Location Service → Backend → Nearby Mechanic",
    keyFeatures: [
      "User registration/login",
      "Roadside assistance requests",
      "Live location sharing",
      "Issue description",
      "Mechanic discovery",
      "Service request management",
      "Real-time status updates",
      "Communication & notifications",
      "Service ratings",
      "Request history",
    ],
    techStack:
      "Flutter · Android · Backend APIs · Database · GPS/Location Services · Real-Time Communication · Push Notifications · Authentication",
    deliverables: [
      "Flutter mobile application",
      "Live location sharing system",
      "Mechanic discovery & matching",
      "Rating & review system",
    ],
  },
  {
    id: "bidflow-ai",
    slug: "bidflow-ai-evaluation",
    brandName: "BidFlow-AI",
    brandSeparator: "–",
    title: "AI-Powered RFP Bid Evaluation Engine",
    brandLogoType: "bidflow",
    deviceType: "web",
    accentColor: "#06b6d4",
    themeGlow: "rgba(6, 182, 212, 0.25)",
    buttonGradient: "from-cyan-500 to-blue-600",
    shortDesc:
      "AI-powered RFP bid evaluation and vendor scoring engine.",
    description:
      "BidFlow-AI is an AI-powered bid engine designed to automate vendor evaluation for RFP-based procurement. Traditional proposal evaluation requires teams to manually read large documents, extract information, compare vendors, apply scoring criteria, and shortlist candidates. BidFlow-AI transforms this into an intelligent, automated pipeline using LLM-driven document extraction and a scoring engine that evaluates vendors against weighted criteria.",
    heroImage: "/assets/Work/bidflow.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "SQLite", "OpenAI"],
    liveUrl: "#",
    client: "BidFlow-AI",
    timeline: "Completed",
    metrics: "AI",
    metricsLabel: "Automation",
    category: "AI-Powered RFP Bid Evaluation Engine",
    categorySlug: "ai-automation",
    galleryImages: [],
    overview:
      "BidFlow-AI needed to automate vendor evaluation for RFP-based procurement, replacing manual document review with AI-powered extraction and scoring.",
    challenge:
      "RFP documents are often unstructured, with different formats, terminology, and levels of detail. A second challenge was ensuring AI extraction could be converted into consistent information suitable for automated scoring.",
    solution:
      "Solvexa created an AI processing pipeline that separates document understanding from evaluation. The LLM extracts relevant information into structured fields, while the scoring engine applies predefined weighted criteria.",
    howSolvexaSolvedIt:
      "Solvexa created an AI processing pipeline that separates document understanding from evaluation. The LLM extracts relevant information into structured fields, while the scoring engine applies predefined weighted criteria rather than letting the AI model make the final decision independently — creating a more consistent and explainable evaluation workflow.",
    outcome:
      "BidFlow-AI significantly reduces repetitive proposal-review work and creates a faster, more structured approach to vendor evaluation and shortlisting.",
    objectives: [
      "Automate RFP document analysis",
      "Extract structured information from documents",
      "Reduce manual evaluation time",
      "Apply consistent evaluation criteria",
      "Score vendor proposals",
      "Automatically shortlist suitable vendors",
      "Provide a clear evaluation interface",
    ],
    architecture:
      "RFP / Vendor Documents → Document Processing → LLM Extraction → Structured Data → Weighted Scoring Engine → Vendor Ranking → Automated Shortlist → Next.js Dashboard",
    keyFeatures: [
      "RFP document processing",
      "AI-powered extraction",
      "Structured proposal data",
      "Weighted evaluation criteria",
      "Vendor scoring & ranking",
      "Automated shortlisting",
      "Responsive dashboard with evaluation results",
    ],
    techStack:
      "Next.js · React · Tailwind CSS · SQLite · LLM Integrations · AI Document Processing",
    deliverables: [
      "AI-powered document extraction pipeline",
      "Weighted scoring engine",
      "Vendor ranking dashboard",
      "Automated shortlisting system",
    ],
  },
  {
    id: "solveflow",
    slug: "solveflow-task-management",
    brandName: "SolveFlow",
    brandSeparator: "–",
    title: "Real-Time Task Management & Collaboration Platform",
    brandLogoType: "solveflow",
    deviceType: "web",
    accentColor: "#a855f7",
    themeGlow: "rgba(168, 85, 247, 0.25)",
    buttonGradient: "from-purple-500 to-indigo-600",
    shortDesc:
      "Real-time task management and collaboration platform.",
    description:
      "SolveFlow is a Trello-style task management platform designed to help teams organize work, assign responsibilities, track progress, and collaborate in real time. It combines a modern Next.js interface with an ASP.NET Core backend and PostgreSQL database, using SignalR for real-time communication.",
    heroImage: "/assets/Work/solveflowM.png",
    technologies: ["C#", "ASP.NET Core", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
    liveUrl: "#",
    client: "SolveFlow",
    timeline: "Completed",
    metrics: "Full-Stack",
    metricsLabel: "Custom Software",
    category: "Real-Time Task Management & Collaboration Platform",
    categorySlug: "custom-software",
    galleryImages: [],
    overview:
      "SolveFlow needed a centralized task management system with real-time collaboration and production-grade deployment architecture.",
    challenge:
      "Real-time collaboration requires more than standard request-response APIs, and the platform also needed a deployment architecture capable of supporting a scalable production environment.",
    solution:
      "SignalR was implemented for real-time communication so changes could be pushed to connected users without page refreshes. The backend was structured with ASP.NET Core, PostgreSQL provided relational data storage.",
    howSolvexaSolvedIt:
      "SignalR was implemented for real-time communication so changes could be pushed to connected users without page refreshes. The backend was structured with ASP.NET Core, PostgreSQL provided relational data storage, and Docker, Kubernetes, GitHub Actions, and ArgoCD created an automated deployment workflow.",
    outcome:
      "SolveFlow demonstrates Solvexa's ability to build modern collaborative systems with real-time communication and production-oriented DevOps architecture.",
    objectives: [
      "Create a centralized task management system",
      "Support team collaboration",
      "Enable role-based task assignment",
      "Provide real-time updates",
      "Organize projects and workflows",
      "Build a scalable production architecture",
      "Automate deployment",
    ],
    architecture:
      "Next.js Frontend → ASP.NET Core Web API → Business Logic → PostgreSQL\nSignalR → Real-Time Events\nGitHub → GitHub Actions → Docker → Kubernetes → ArgoCD",
    keyFeatures: [
      "Project management, boards, and tasks",
      "Role-based access & task assignment",
      "Real-time updates & team collaboration",
      "Status management",
      "PostgreSQL data persistence",
      "Containerized deployment",
      "CI/CD pipeline",
    ],
    techStack:
      "C# · ASP.NET Core · Next.js · TypeScript · PostgreSQL · SignalR · Docker · Kubernetes · GitHub Actions · ArgoCD",
    deliverables: [
      "Next.js frontend with real-time updates",
      "ASP.NET Core backend API",
      "SignalR real-time collaboration",
      "Docker + Kubernetes deployment pipeline",
    ],
  },
  {
    id: "rentease",
    slug: "rentease-marketplace",
    brandName: "RentEase",
    brandSeparator: "–",
    title: "Full-Stack Online Rental Marketplace",
    brandLogoType: "rentease",
    deviceType: "web",
    accentColor: "#0ea5e9",
    themeGlow: "rgba(14, 165, 233, 0.25)",
    buttonGradient: "from-sky-500 to-blue-600",
    shortDesc: "Full-stack online rental marketplace.",
    description:
      "RentEase is a full-stack rental marketplace that allows users to list items for rent, discover available products, make bookings, communicate with other users, and manage rental transactions — creating a complete digital marketplace experience for both renters and item owners.",
    heroImage: "/assets/Work/rentease main.png",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe API"],
    liveUrl: "#",
    client: "RentEase",
    timeline: "Completed",
    metrics: "Marketplace",
    metricsLabel: "Full-Stack Platform",
    category: "Online Rental Marketplace",
    categorySlug: "marketplace",
    galleryImages: [],
    overview:
      "RentEase needed a complete digital marketplace experience for users to list items, discover products, make bookings, and manage rental transactions.",
    challenge:
      "A marketplace has multiple connected workflows — listing, availability, booking, payment, deposit handling, communication, and reviews — that need to remain synchronized.",
    solution:
      "The platform was structured around clearly separated marketplace entities and workflows. Listings, users, bookings, payments, deposits, and reviews were treated as connected but independent modules.",
    howSolvexaSolvedIt:
      "The platform was structured around clearly separated marketplace entities and workflows. Listings, users, bookings, payments, deposits, and reviews were treated as connected but independent modules, keeping the system easier to manage and extend.",
    outcome:
      "RentEase provides a complete digital marketplace experience for users looking to rent or offer products for rent.",
    objectives: [
      "Create a complete rental marketplace",
      "Allow owners to list items",
      "Enable users to search and filter rentals",
      "Support booking workflows",
      "Handle payments securely",
      "Manage deposits",
      "Enable user communication",
      "Provide reviews and ratings",
    ],
    architecture:
      "Web Client → API/Backend → Database\nPayment Gateway → Transaction Processing → Booking\nMessaging Layer → User Communication",
    keyFeatures: [
      "User accounts",
      "Rental listings, advanced search & filters",
      "Booking system",
      "Payment processing & deposit management",
      "Reviews and ratings",
      "User messaging",
      "Rental management",
    ],
    techStack:
      "Full-Stack Web Development · React/Next.js · Backend APIs · Database · Authentication · Payment Integration · Search & Filtering · Messaging",
    deliverables: [
      "Full-stack rental marketplace",
      "Booking & payment system",
      "User messaging platform",
      "Reviews & ratings system",
    ],
  },
  {
    id: "nimbus",
    slug: "nimbus-ai-assistant",
    brandName: "Nimbus",
    brandSeparator: "–",
    title: "AI-Powered Social Media Marketing & Management Assistant",
    brandLogoType: "nimbus",
    clientLogo: "/assets/Client Logo/Nimbus.png",
    deviceType: "web",
    accentColor: "#ec4899",
    themeGlow: "rgba(236, 72, 153, 0.25)",
    buttonGradient: "from-pink-500 to-rose-600",
    shortDesc:
      "AI-powered social media marketing and management assistant.",
    description:
      "Nimbus is an AI-powered chatbot and digital assistant designed to support social media marketing and management activities across web and mobile experiences, combining conversational AI with business-focused workflows.",
    heroImage: "/assets/Work/Nimbus.png",
    mobileImage: "/assets/Work/Nimbus.png",
    technologies: ["Next.js", "React", "OpenAI", "Node.js", "Flutter"],
    liveUrl: "#",
    client: "Nimbus",
    timeline: "Completed",
    metrics: "AI",
    metricsLabel: "Chatbot Platform",
    category: "AI-Powered Social Media Marketing & Management Assistant",
    categorySlug: "ai-chatbot",
    galleryImages: [],
    overview:
      "Nimbus needed to provide AI-powered marketing assistance through conversational AI combined with business-focused social media management workflows.",
    challenge:
      "AI assistants need to provide useful responses while maintaining context and following the purpose of the application — the challenge was creating an experience that feels like a useful marketing assistant rather than a generic chatbot.",
    solution:
      "Solvexa designed dedicated prompts, application workflows, and backend integration around the marketing use case, connecting the AI layer to the application's business logic.",
    howSolvexaSolvedIt:
      "Solvexa designed dedicated prompts, application workflows, and backend integration around the marketing use case, connecting the AI layer to the application's business logic so the assistant could operate within a structured product environment.",
    outcome:
      "Nimbus provides a practical AI interface for users looking to simplify and improve their social media marketing and management workflows.",
    objectives: [
      "Create an AI-powered marketing assistant",
      "Provide conversational interaction",
      "Support social media management workflows",
      "Simplify marketing-related tasks",
      "Provide web and mobile access",
      "Create a scalable AI foundation",
    ],
    architecture:
      "Web / Mobile Client → Backend API → AI Orchestration Layer → LLM → Response / Marketing Workflow",
    keyFeatures: [
      "AI chatbot & conversational interface",
      "Marketing assistance",
      "User management",
      "Web and mobile applications",
      "AI-powered, context-aware responses",
    ],
    techStack:
      "AI/LLM Integration · React / Next.js · Mobile Application · Backend APIs · Database · Authentication · Prompt Engineering · API Integrations",
    deliverables: [
      "AI chatbot & conversational interface",
      "Web and mobile applications",
      "Marketing workflow automation",
      "Context-aware AI responses",
    ],
  },
  {
    id: "draftly",
    slug: "draftly-document-platform",
    brandName: "Draftly",
    brandSeparator: "–",
    title: "Collaborative Online Document Creation Platform",
    brandLogoType: "draftly",
    clientLogo: "/assets/Client Logo/draftly LOGO.png",
    deviceType: "web",
    accentColor: "#6366f1",
    themeGlow: "rgba(99, 102, 241, 0.25)",
    buttonGradient: "from-indigo-500 to-violet-600",
    shortDesc:
      "Collaborative online document creation platform.",
    description:
      "Draftly is a browser-based document creation and management platform designed around the experience of modern online document editors, providing users with a centralized environment to create, edit, organize, and manage digital documents through a clean web interface.",
    heroImage: "/assets/Work/draftly.png",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    client: "Draftly",
    timeline: "Completed",
    metrics: "Web / SaaS",
    metricsLabel: "Document Platform",
    category: "Collaborative Online Document Creation Platform",
    categorySlug: "web-saas",
    galleryImages: [],
    overview:
      "Draftly needed a centralized browser-based environment for creating, editing, organizing, and managing digital documents through an intuitive web interface.",
    challenge:
      "Online document applications need to provide a smooth editing experience while maintaining reliable document persistence.",
    solution:
      "Solvexa designed the editor around reusable UI components and structured document data, while separating authentication, document management, and editing workflows.",
    howSolvexaSolvedIt:
      "Solvexa designed the editor around reusable UI components and structured document data, while separating authentication, document management, and editing workflows.",
    outcome:
      "Draftly provides a modern foundation for browser-based document creation and management.",
    objectives: [
      "Build an online document platform",
      "Provide document creation and editing",
      "Create an intuitive editor experience",
      "Manage user documents",
      "Provide secure user access",
      "Create a scalable foundation for collaboration",
    ],
    architecture: "Browser → Web Application → API Layer → Database",
    keyFeatures: [
      "User authentication",
      "Document creation, editing & management",
      "Rich text editing",
      "Document organization",
      "Responsive interface",
    ],
    techStack:
      "Modern Web Application · React / Next.js · TypeScript · Backend APIs · Database · Authentication · Rich Text Editing",
    deliverables: [
      "Online document editor",
      "User authentication system",
      "Document management backend",
      "Responsive web interface",
    ],
  },
  {
    id: "perfume-palace",
    slug: "perfume-palace-ecommerce",
    brandName: "Perfume Palace",
    brandSeparator: "–",
    title: "Shopify Ecommerce Store for Premium Fragrances",
    brandLogoType: "perfume-palace",
    clientLogo: "/assets/Client Logo/PerfumePalace.jpeg",
    deviceType: "web",
    accentColor: "#d4af37",
    themeGlow: "rgba(212, 175, 55, 0.25)",
    buttonGradient: "from-amber-500 to-yellow-600",
    shortDesc:
      "Shopify ecommerce website for a premium perfume brand.",
    description:
      "Perfume Palace is a Shopify-based ecommerce store designed to showcase and sell premium fragrances online. Solvexa built a visually rich, brand-aligned storefront with intuitive product browsing, seamless checkout, and a luxurious user experience that reflects the elegance of the perfume industry.",
    heroImage: "/assets/Work/perfumepalace m.png",
    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    client: "Perfume Palace",
    timeline: "Completed",
    metrics: "Ecommerce",
    metricsLabel: "Shopify Store",
    category: "Shopify Ecommerce Website",
    categorySlug: "ecommerce",
    galleryImages: [],
    overview:
      "Perfume Palace needed a premium online storefront to sell fragrances with a luxurious, brand-consistent shopping experience.",
    challenge:
      "A perfume ecommerce store needs to convey luxury and quality through visuals and UX while making product discovery and checkout effortless for customers.",
    solution:
      "Solvexa designed a Shopify storefront with elegant typography, rich product imagery, intuitive navigation, and a streamlined checkout flow tailored to the fragrance industry.",
    howSolvexaSolvedIt:
      "Solvexa built a custom Shopify theme with a focus on visual storytelling, product presentation, and conversion-optimized user flows — giving Perfume Palace a digital presence that matches its brand identity.",
    outcome:
      "Perfume Palace gained a professional ecommerce platform that showcases its fragrance collection beautifully and provides a smooth shopping experience for customers.",
    objectives: [
      "Build a premium Shopify ecommerce store",
      "Showcase fragrance products with rich visuals",
      "Provide intuitive product browsing and filtering",
      "Enable seamless checkout and payment processing",
      "Reflect brand luxury through design and UX",
      "Optimize for mobile shopping",
    ],
    architecture: "Shopify Storefront → Liquid Templates → Shopify Backend → Payment Gateway",
    keyFeatures: [
      "Product catalog with categories and filters",
      "Rich product pages with imagery and descriptions",
      "Shopping cart and secure checkout",
      "Mobile-responsive design",
      "Brand-consistent visual identity",
    ],
    techStack:
      "Shopify · Liquid · HTML · CSS · JavaScript · Payment Gateway Integration · Responsive Design",
    deliverables: [
      "Custom Shopify ecommerce store",
      "Product catalog and collection pages",
      "Secure checkout and payment integration",
      "Mobile-optimized storefront",
    ],
  },
  {
    id: "graphic-design",
    slug: "graphic-design-creative-solutions",
    brandName: "Graphic Design",
    brandSeparator: "–",
    title: "Visual Identity, Marketing Creatives & Digital Assets",
    brandLogoType: "graphic-design",
    deviceType: "web",
    accentColor: "#d946ef",
    themeGlow: "rgba(217, 70, 239, 0.25)",
    buttonGradient: "from-fuchsia-500 to-purple-600",
    shortDesc:
      "Visual identity, marketing creatives, and digital assets.",
    description:
      "Solvexa provides graphic design services that support businesses, organizations, campaigns, products, and digital platforms. Our design work focuses on creating visual communication that is professional, consistent, memorable, and aligned with the purpose of the brand.",
    heroImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Figma", "Photoshop", "Illustrator", "After Effects"],
    liveUrl: "#",
    client: "Multiple Clients",
    timeline: "Ongoing",
    metrics: "Creative",
    metricsLabel: "Design Services",
    category: "Visual Identity, Marketing Creatives & Digital Assets",
    categorySlug: "creative",
    galleryImages: [],
    overview:
      "Solvexa provides graphic design services that support businesses, organizations, campaigns, products, and digital platforms with professional visual communication.",
    challenge:
      "Different platforms have different requirements, audiences, and visual formats — the challenge is maintaining brand consistency while adapting content for each use case.",
    solution:
      "Solvexa builds designs around the brand's visual language, audience, communication objective, and platform requirements.",
    howSolvexaSolvedIt:
      "Solvexa builds designs around the brand's visual language, audience, communication objective, and platform requirements, focusing on typography, layout, hierarchy, consistency, and clear messaging to make every creative asset purposeful.",
    outcome:
      "Professional visual communication designed to strengthen brand identity and improve digital engagement.",
    objectives: [
      "Build stronger visual identities",
      "Create professional marketing materials",
      "Improve digital communication",
      "Maintain brand consistency",
      "Produce platform-ready creative assets",
    ],
    architecture: "Understand → Research → Concept → Design → Review → Refine → Deliver",
    keyFeatures: [
      "Brand identity & logo design",
      "Social media graphics",
      "Marketing banners & promotional materials",
      "Presentation design",
      "Website graphics",
      "Digital advertisements",
      "Event creatives",
    ],
    techStack:
      "Brand identity · Logo design · Social media graphics · Marketing banners · Promotional materials · Presentation design · Website graphics · Digital advertisements · Event creatives · Business graphics",
    designProcess: "Understand → Research → Concept → Design → Review → Refine → Deliver",
    servicesDelivered: [
      "Brand identity & logo design",
      "Social media graphics",
      "Marketing banners",
      "Promotional materials",
      "Presentation design",
      "Website graphics",
      "Digital advertisements",
      "Event creatives",
    ],
    deliverables: [
      "Brand identity systems",
      "Marketing creatives & campaigns",
      "Social media graphics",
      "Digital advertisements & assets",
    ],
  },
  {
    id: "video-editing",
    slug: "video-editing-motion-content",
    brandName: "Video Editing",
    brandSeparator: "–",
    title: "Professional Video & Digital Content Production",
    brandLogoType: "video-editing",
    deviceType: "web",
    accentColor: "#e11d48",
    themeGlow: "rgba(225, 29, 72, 0.25)",
    buttonGradient: "from-rose-600 to-red-700",
    shortDesc:
      "Professional video editing and motion content production.",
    description:
      "Solvexa provides video editing and digital content services for businesses, organizations, events, marketing campaigns, and online platforms — transforming raw footage and ideas into structured visual stories designed for digital audiences.",
    heroImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    liveUrl: "#",
    client: "Multiple Clients",
    timeline: "Ongoing",
    metrics: "Creative",
    metricsLabel: "Video Production",
    category: "Professional Video & Digital Content Production",
    categorySlug: "creative",
    galleryImages: [],
    overview:
      "Solvexa provides video editing and digital content services for businesses, organizations, events, marketing campaigns, and online platforms.",
    challenge:
      "Raw footage can contain inconsistent lighting, audio, pacing, framing, and unnecessary content.",
    solution:
      "Solvexa applies structured editing workflows to improve pacing, visual consistency, storytelling, audio, transitions, typography, and overall presentation.",
    howSolvexaSolvedIt:
      "Solvexa applies structured editing workflows to improve pacing, visual consistency, storytelling, audio, transitions, typography, and overall presentation.",
    outcome:
      "Professional video content designed to communicate ideas clearly and create stronger digital engagement.",
    objectives: [
      "Create professional video content",
      "Improve brand communication",
      "Produce promotional material",
      "Create social media videos",
      "Improve audience engagement",
      "Turn raw footage into polished content",
    ],
    architecture: "Concept → Footage → Editing → Motion → Audio → Review → Final Delivery",
    keyFeatures: [
      "Promotional videos",
      "Social media videos",
      "Corporate & event videos",
      "Product videos",
      "Reels/short-form content",
      "Motion graphics & visual effects",
      "Audio synchronization",
      "Color and visual enhancement",
    ],
    techStack:
      "Promotional videos · Social media videos · Corporate videos · Event videos · Product videos · Reels/short-form content · Motion graphics · Video transitions · Text animation · Visual effects · Audio synchronization · Color and visual enhancement",
    workflow: "Concept → Footage → Editing → Motion → Audio → Review → Final Delivery",
    servicesDelivered: [
      "Promotional videos",
      "Social media videos",
      "Corporate videos",
      "Event videos",
      "Product videos",
      "Reels/short-form content",
      "Motion graphics",
      "Visual effects",
    ],
    deliverables: [
      "Professional video production",
      "Motion graphics & effects",
      "Social media video content",
      "Corporate & promotional videos",
    ],
  },
];
