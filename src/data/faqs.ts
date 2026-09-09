export interface FaqItem {
  q: string;
  a: string;
  category?: string;
}

export const homeFaqs: FaqItem[] = [
  {
    q: "What does Solvexa do?",
    a: "Solvexa is a full-service digital agency providing Ai solutions, web and mobile app development, branding, and digital marketing to businesses of all sizes worldwide."
  },
  {
    q: "What services does Solvexa offer?",
    a: "We offer Ai solutions, Web Development, Mobile App Development, UI/UX Design, Digital Marketing, Branding & Logo Design, Video Editing & Motion Graphics, Content Marketing, and MVP Development — each tailored to your specific business goals."
  },
  {
    q: "Why should I choose Solvexa for my project?",
    a: "We combine a client-first approach with a skilled, versatile team, transparent communication, modern engineering standards, and a proven track record of delivering projects on time and to specification."
  },
  {
    q: "How can I start a project with Solvexa?",
    a: "Reach out through our contact form, call us at +92 328 8521417, or email info.solvexa@gmail.com with your project brief. Our team will schedule an introductory discovery call to discuss your goals and provide an actionable scope and quote."
  },
  {
    q: "Where is Solvexa located?",
    a: "Solvexa is based in Rawalpindi, Punjab, Pakistan, and works with clients, startups, and enterprises remotely across the globe."
  }
];
