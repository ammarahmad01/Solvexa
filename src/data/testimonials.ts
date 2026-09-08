export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  image: string;
  project?: string;
  metric?: string;
  tag?: string;
  location?: string;
  countryFlag?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "haji-rizwan-ahmed",
    author: "Haji Rizwan Ahmed",
    role: "President",
    company: "Alkhidmat North Punjab",
    rating: 5,
    quote: "Solvexa proved to be an exceptional technology partner for Alkhidmat North Punjab. Their dedicated engineering, ethical commitment, and reliable management systems have greatly empowered our regional welfare operations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85",
    project: "Regional Welfare Management Portal",
    metric: "100% Outreach Efficiency",
    tag: "Social Impact & Cloud Platforms",
    location: "Punjab, Pakistan",
    countryFlag: "🇵🇰"
  },
  {
    id: "irfan-ahmed",
    author: "Irfan Ahmed",
    role: "Managing Director",
    company: "Punjab Silk House",
    rating: 5,
    quote: "Solvexa transformed Punjab Silk House's digital retail presence. Their modern online catalog and seamless customer order workflows delivered noticeable sales growth and an effortless customer experience.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
    project: "E-Commerce & Retail Catalog Suite",
    metric: "+85% Online Sales Growth",
    tag: "E-Commerce & Digital Branding",
    location: "Punjab, Pakistan",
    countryFlag: "🇵🇰"
  },
  {
    id: "tayyab-autos",
    author: "Tayyab",
    role: "Operations Lead",
    company: "Tayyab Autos",
    rating: 5,
    quote: "Solvexa digitized and streamlined our entire automotive inventory and client inquiry system at Tayyab Autos. What used to take hours of manual work is now handled instantly with smooth mobile reliability.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85",
    project: "Automotive Parts Management & Order System",
    metric: "Save 25+ Hours Weekly",
    tag: "Automotive & Inventory Automation",
    location: "Punjab, Pakistan",
    countryFlag: "🇵🇰"
  },
  {
    id: "mujahid-fyp",
    author: "Mujahid",
    role: "Lead Researcher",
    company: "Final Year Project (FYP)",
    rating: 5,
    quote: "Solvexa provided world-class architectural guidance and AI implementation for our university FYP. Their computer vision and deep learning expertise helped our team achieve an A+ and the Best Project Award.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85",
    project: "Computer Vision & Deep Learning FYP System",
    metric: "Grade A+ (Best Project Award)",
    tag: "AI / Machine Learning & Research",
    location: "Islamabad, Pakistan",
    countryFlag: "🇵🇰"
  },
  {
    id: "noman-fyp",
    author: "Noman",
    role: "Systems Developer",
    company: "Final Year Project (FYP)",
    rating: 5,
    quote: "Collaborating with Solvexa on our FYP was a game-changer. They guided us in building scalable multi-agent AI systems and rigorous documentation that thoroughly impressed our evaluation board.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1000&q=85",
    project: "Autonomous Agentic AI Infrastructure FYP",
    metric: "Top Evaluator Distinction",
    tag: "Agentic AI & Distributed Architecture",
    location: "Islamabad, Pakistan",
    countryFlag: "🇵🇰"
  }
];
