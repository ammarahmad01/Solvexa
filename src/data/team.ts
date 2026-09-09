export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  experience?: string;
  bio: string;
  highlights?: string[];
  image: string;
  skills: string[];
  social: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    github?: string;
    twitter?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: "ammar-ahmed",
    name: "Ammar Ahmad",
    role: "Chief Executive Officer (CEO)",
    department: "Executive Leadership",
    experience: "Executive Director",
    bio: "Visionary digital strategist directing Solvexa's global expansion, enterprise client partnerships, and world-class delivery standards with an unwavering focus on engineering excellence and client ROI.",
    highlights: [
      "Global Enterprise Partnerships & Business Expansion",
      "Strategic Governance & High-Impact Delivery Standards",
      "Cross-Functional Team Culture & Client Success"
    ],
    image: "/assets/ammar.png",
    skills: ["Strategic Vision", "Client Success", "Enterprise Partnerships", "Operations"],
    social: {
      linkedin: "https://www.linkedin.com/in/ammar-ahmad-012a29261/",
      facebook: "https://www.facebook.com/profile.php?id=61573528962536",
      instagram: "https://www.instagram.com/solvexa_/"
    }
  },
  {
    id: "rohan-bin-ejaz",
    name: "Rohan Bin Ejaz",
    role: "Chief Technology Officer (CTO)",
    department: "Engineering & Architecture",
    experience: "Principal Architect",
    bio: "Pioneering technologist spearheading Solvexa's full-stack architecture, 3D WebGL computation, distributed cloud infrastructure, and low-latency AI orchestration pipelines.",
    highlights: [
      "High-Scale Microservices & Cloud Infrastructure",
      "Next.js, WebGL & Real-Time 3D Interactive Graphics",
      "Autonomous AI Agent Orchestration & Distributed APIs"
    ],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
    skills: ["Full-Stack Architecture", "Next.js & React", "WebGL & 3D", "Cloud & AI Pipelines"],
    social: {
      linkedin: "https://www.linkedin.com/in/rohan-bin-ejaz-514177317/",
      facebook: "https://www.facebook.com/profile.php?id=61573528962536",
      instagram: "https://www.instagram.com/solvexa_/"
    }
  },
  {
    id: "abdullah-abbasi",
    name: "Abdullah Abbasi",
    role: "Chief Marketing Officer (CMO)",
    department: "Growth & Brand Strategy",
    experience: "Growth Director",
    bio: "Growth architect orchestrating Solvexa's multi-channel performance marketing, brand narratives, customer acquisition funnels, and global market positioning.",
    highlights: [
      "High-Converting Customer Acquisition & Revenue Funnels",
      "Global Brand Positioning & Digital Storytelling",
      "Data-Driven Performance SEO & Audience Expansion"
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    skills: ["Growth Marketing", "Brand Positioning", "Performance SEO", "Conversion Optimization"],
    social: {
      linkedin: "https://www.linkedin.com/in/abdullah-abbasi-03133a404/",
      facebook: "https://www.facebook.com/profile.php?id=61573528962536",
      instagram: "https://www.instagram.com/solvexa_/"
    }
  },
  {
    id: "fatima-shah",
    name: "Fatima Shah",
    role: "Lead UI/UX Designer & Art Director",
    department: "Product Design",
    experience: "Senior Art Director",
    bio: "Award-winning interface designer crafting intuitive design systems, tactile micro-interactions, spatial 3D experiences, and visual storytelling for digital products.",
    highlights: [
      "Scalable Design Systems & Multi-Brand Component Libraries",
      "Tactile Micro-Interactions & Human-Centered UX Research",
      "Visual Storytelling & Spatial Digital Art Direction"
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
    skills: ["Design Systems", "Figma & Wireframing", "User Research", "Motion Design"],
    social: {
      linkedin: "https://www.linkedin.com/company/solvexa1/posts/",
      instagram: "https://www.instagram.com/solvexa_/"
    }
  },
  {
    id: "shahzaib-malik",
    name: "Shahzaib Malik",
    role: "Lead Full-Stack Engineer",
    department: "Software Engineering",
    experience: "Staff Engineer",
    bio: "Specialist in high-concurrency Node.js, distributed databases, React Native cross-platform apps, and enterprise API microservices engineered for zero-downtime reliability.",
    highlights: [
      "Zero-Downtime Microservices & High-Throughput APIs",
      "Cross-Platform iOS & Android React Native Engineering",
      "Distributed Database Design with PostgreSQL & Redis"
    ],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
    skills: ["TypeScript & Node.js", "Next.js & React", "React Native", "PostgreSQL & Docker"],
    social: {
      linkedin: "https://www.linkedin.com/company/solvexa1/posts/",
      github: "https://github.com/solvxa"
    }
  },
  {
    id: "shan-ali",
    name: "Shan Ali",
    role: "Senior Delivery & Agile Project Manager",
    department: "Project Operations",
    experience: "Agile Lead",
    bio: "Ensuring every sprint delivers on-time and on-spec with crystal-clear stakeholder communication, rigorous QA gates, and seamless production deployments.",
    highlights: [
      "Rigorous QA Gateways & Release Lifecycle Management",
      "Agile Sprint Orchestration & Roadmap Scoping",
      "Transparent Stakeholder Alignment & On-Time Delivery"
    ],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=85",
    skills: ["Agile & Scrum", "Technical Scoping", "QA Engineering", "Stakeholder Relations"],
    social: {
      linkedin: "https://www.linkedin.com/company/solvexa1/posts/",
      github: "https://github.com/solvxa"
    }
  }
];
