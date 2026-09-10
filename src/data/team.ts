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
    role: "Founder & Chief Executive Officer",
    department: "Executive Leadership",
    experience: "Founder & CEO",
    bio: "Ammar leads Solvexa's overall vision, strategy, and client relationships, with expertise in full-stack development, artificial intelligence, and blockchain technology. He drives the company's technical and business direction, overseeing the delivery of scalable web applications, AI-powered tools, and blockchain-based systems.",
    highlights: [
      "Leads company vision, strategy, and client relationships",
      "Expertise in full-stack development using modern web technologies",
      "Oversees delivery of AI-powered and blockchain-based solutions"
    ],
    image: "/assets/Team/Ammar Ahmed.png",
    skills: ["Company Vision", "Client Relationships", "Full-Stack Engineering", "AI & Blockchain"],
    social: {
      linkedin: "https://www.linkedin.com/in/ammar-ahmad-012a29261/",
      facebook: "https://www.facebook.com/profile.php?id=61573528962536",
      instagram: "https://www.instagram.com/solvexa_/"
    }
  },
  {
    id: "rohan-bin-ejaz",
    name: "Rohan Bin Ejaz",
    role: "Chief Technology Officer",
    department: "Engineering & Architecture",
    experience: "CTO",
    bio: "Rohan leads Solvexa's engineering direction, overseeing the development of web applications, mobile applications, and AI-powered systems. He is responsible for the company's technical architecture, ensuring products are scalable, reliable, and built on modern, industry-standard technologies.",
    highlights: [
      "Leads technical architecture and engineering strategy",
      "Oversees development of scalable web, mobile, and backend systems",
      "Drives integration of artificial intelligence and machine learning into products"
    ],
    image: "/assets/Team/Rohan Bin Ejaz.png",
    skills: ["Engineering Strategy", "Full-Stack & Mobile Development", "AI & ML Engineering", "Technical Architecture"],
    social: {
      linkedin: "https://www.linkedin.com/in/rohan-bin-ejaz-514177317/",
      facebook: "https://www.facebook.com/profile.php?id=61573528962536",
      instagram: "https://www.instagram.com/solvexa_/"
    }
  },
  {
    id: "abdullah-abbasi",
    name: "Abdullah Abbasi",
    role: "CMO & Creative Director",
    department: "Marketing & Creative Direction",
    experience: "CMO & Creative Director",
    bio: "Abdullah leads Solvexa's brand, marketing, and creative direction, overseeing the visual identity and communication strategy that represents the company and its clients. He is responsible for the design, video, and marketing output that shapes how Solvexa presents itself to the world.",
    highlights: [
      "Leads brand strategy, marketing direction, and creative output",
      "Oversees graphic design, branding, and marketing communications",
      "Directs video production, motion graphics, and UI/UX design"
    ],
    image: "/assets/Team/abullah.png",
    skills: ["Marketing & Brand Strategy", "Creative Direction", "Graphic Design & Video", "UI/UX & Animation"],
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
