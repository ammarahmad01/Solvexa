export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  project?: string;
  metric?: string;
  tag?: string;
  location?: string;
  countryFlag?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "hammad-malik",
    author: "Hammad Malik",
    role: "Regional Manager",
    company: "Alkhidmat Foundation Punjab North",
    rating: 5,
    quote: "Working with Solvexa has been a great experience for Alkhidmat Punjab North. Their team is professional, committed, and genuinely understands our needs. Their reliable technology solutions have made a real difference in helping us manage and support our welfare operations more effectively.",    project: "Regional Website & Online Donation Management System",
    metric: "100% Outreach Efficiency & 100% Donor Satisfaction",
    tag: "Social Impact & Cloud Platforms",
    location: "Punjab, Pakistan",
    countryFlag: "🇵🇰"
  },
  {
    id: "irfan-ahmed",
    author: "Irfan Ahmed",
    role: "Owner",
    company: "Punjab Silk House",
    rating: 5,
    quote: "Solvexa really helped us take Punjab Silk House’s online presence to the next level. Their team made it easier for our customers to browse and place orders, and we saw a noticeable improvement in our sales and overall customer experience.",    project: "E-Commerce & Retail Catalog Suite",
    metric: "+85% Online Sales Growth",
    tag: "E-Commerce & Digital Branding",
    location: "Punjab, Pakistan",
    countryFlag: "🇵🇰"
  },
  {
    id: "tayyab-autos",
    author: "Nouman Abbasi",
    role: "Operations Lead",
    company: "Tayyab Autos",
    rating: 5,
    quote: "We really like the website Solvexa created for us. It looks professional, is easy to use, and has given our business a much stronger online presence. We are very happy with the result.",    project: "Automotive Parts Management & Order System",
    metric: "Save 25+ Hours Weekly",
    tag: "Automotive & Inventory Automation",
    location: "Punjab, Pakistan",
    countryFlag: "🇵🇰"
  },
  {
    id: "haji-rizwan-ahmad",
    author: "Haji Rizwan Ahmad",
    role: "Director",
    company: "Noor Educational System",
    rating: 5,
    quote: "Solvexa has done an excellent job building our school website and digital management system. The integrated AI chatbot makes it much easier for parents and students to get information, while the school management system has helped us streamline our daily operations. We're very pleased with the professionalism and support of the Solvexa team.",    project: "School Website & AI-Powered Management System",
    metric: "Streamlined Daily Operations",
    tag: "Education & AI Integration",
    location: "Pakistan",
    countryFlag: "🇵🇰"
  },
  {
    id: "mujahid-fyp",
    author: "Mujahid",
    role: "Lead Researcher",
    company: "Final Year Project (FYP)",
    rating: 5,
    quote: "Solvexa provided world-class architectural guidance and AI implementation for our university FYP. Their computer vision and deep learning expertise helped our team achieve an A+ and the Best Project Award.",    project: "Computer Vision & Deep Learning FYP System",
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
    quote: "Collaborating with Solvexa on our FYP was a game-changer. They guided us in building scalable multi-agent AI systems and rigorous documentation that thoroughly impressed our evaluation board.",    project: "Autonomous Agentic AI Infrastructure FYP",
    metric: "Top Evaluator Distinction",
    tag: "Agentic AI & Distributed Architecture",
    location: "Islamabad, Pakistan",
    countryFlag: "🇵🇰"
  },

  {
    id: "arshia-adnan",
    author: "Arshia Adnan",
    role: "Founder",
    company: "Perfume Palace",
    rating: 5,
    quote: "Solvexa did a great job creating our Shopify store. They understood our brand and turned our ideas into a beautiful, easy-to-use website. It has made it much easier for our customers to explore our perfumes and shop online. We're really happy with the final result.",    project: "Shopify E-Commerce Store",
    metric: "Enhanced Online Shopping Experience",
    tag: "E-Commerce & Brand Identity",
    location: "Pakistan",
    countryFlag: "🇵🇰"
  }
];
