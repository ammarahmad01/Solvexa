export interface TechTool {
  name: string;
  icon: string;
  role?: string;
  badge?: string;
}

export interface TechTab {
  id: string;
  name: string;
  tools: TechTool[];
}

export const techTabsData: TechTab[] = [
  {
    id: "web",
    name: "Web",
    tools: [
      { name: "HTML5", icon: "/assets/Tech Stack Icons/html5.svg" },
      { name: "CSS3", icon: "/assets/Tech Stack Icons/css3.svg" },
      { name: "JavaScript", icon: "/assets/Tech Stack Icons/javascript.svg" },
      { name: "TypeScript", icon: "/assets/Tech Stack Icons/typescript.svg" },
      { name: "React", icon: "/assets/Tech Stack Icons/react.svg" },
      { name: "Next.js", icon: "/assets/Tech Stack Icons/nextjs.svg" },
      { name: "MERN", icon: "/assets/Tech Stack Icons/mern.svg" },
      { name: "PHP", icon: "/assets/Tech Stack Icons/php.svg" },
      { name: "Webflow", icon: "/assets/Tech Stack Icons/webflow.svg" },
      { name: "WordPress", icon: "/assets/Tech Stack Icons/wordpress.svg" },
      { name: "Laravel", icon: "/assets/Tech Stack Icons/laravel.svg" },
      { name: "Shopify", icon: "/assets/Tech Stack Icons/shopify.svg" }
    ]
  },
  {
    id: "mobile",
    name: "Mobile",
    tools: [
      { name: "React Native", icon: "/assets/Tech Stack Icons/react.svg" },
      { name: "Flutter", icon: "/assets/Tech Stack Icons/flutter.svg" },
      { name: "Swift", icon: "/assets/Tech Stack Icons/swift.svg" },
      { name: "Kotlin", icon: "/assets/Tech Stack Icons/kotlin.svg" },
      { name: "Expo", icon: "/assets/Tech Stack Icons/expo.svg" },
      { name: "Firebase", icon: "/assets/Tech Stack Icons/firebase.svg" }
    ]
  },
  {
    id: "backend",
    name: "Backend",
    tools: [
      { name: "Node.js", icon: "/assets/Tech Stack Icons/nodejs.svg" },
      { name: "Express.js", icon: "/assets/Tech Stack Icons/express.svg" },
      { name: "C#", icon: "/assets/Tech Stack Icons/csharp.svg" },
      { name: "Python", icon: "/assets/Tech Stack Icons/python.svg" },
      { name: "PHP", icon: "/assets/Tech Stack Icons/php.svg" },
      { name: "Laravel", icon: "/assets/Tech Stack Icons/laravel.svg" }
    ]
  },
  {
    id: "ai-ml",
    name: "AI & ML",
    tools: [
      { name: "TensorFlow", icon: "/assets/Tech Stack Icons/tensorflow.svg" },
      { name: "Keras", icon: "/assets/Tech Stack Icons/keras.svg" },
      { name: "Scikit-Learn", icon: "/assets/Tech Stack Icons/scikitlearn.svg" },
      { name: "PyTorch", icon: "/assets/Tech Stack Icons/pytorch.svg" },
      { name: "LangChain", icon: "/assets/Tech Stack Icons/langchain.svg" },
      { name: "OpenAI / LLMs", icon: "/assets/Tech Stack Icons/openai.svg" },
      { name: "Agentic AI", icon: "/assets/Tech Stack Icons/agentic-ai.svg" },
      { name: "Hugging Face", icon: "/assets/Tech Stack Icons/huggingface.svg" }
    ]
  },
  {
    id: "design",
    name: "UI/UX Design",
    tools: [
      { name: "Figma", icon: "/assets/Tech Stack Icons/figma.svg" },
      { name: "Adobe XD", icon: "/assets/Tech Stack Icons/adobexd.svg" },
      { name: "Photoshop", icon: "/assets/Tech Stack Icons/photoshop.svg" },
      { name: "Illustrator", icon: "/assets/Tech Stack Icons/illustrator.svg" },
      { name: "Google Stitch", icon: "/assets/Tech Stack Icons/googlestitch.svg" },
      { name: "After Effects", icon: "/assets/Tech Stack Icons/aftereffects.svg" },
      { name: "Blender", icon: "/assets/Tech Stack Icons/blender.svg" }
    ]
  },
  {
    id: "video-editing",
    name: "Video Editing",
    tools: [
      { name: "Premiere Pro", icon: "/assets/Tech Stack Icons/premierepro.svg" },
      { name: "After Effects", icon: "/assets/Tech Stack Icons/aftereffects.svg" },
      { name: "DaVinci Resolve", icon: "/assets/Tech Stack Icons/davinciresolve.svg" },
      { name: "CapCut", icon: "/assets/Tech Stack Icons/capcut.svg" },
      { name: "Final Cut Pro", icon: "/assets/Tech Stack Icons/finalcutpro.svg" },
      { name: "Blender", icon: "/assets/Tech Stack Icons/blender.svg" }
    ]
  },
  {
    id: "database",
    name: "Database",
    tools: [
      { name: "PostgreSQL", icon: "/assets/Tech Stack Icons/postgresql.svg" },
      { name: "MongoDB", icon: "/assets/Tech Stack Icons/mongodb.svg" },
      { name: "MySQL", icon: "/assets/Tech Stack Icons/mysql.svg" },
      { name: "Redis", icon: "/assets/Tech Stack Icons/redis.svg" },
      { name: "Supabase", icon: "/assets/Tech Stack Icons/supabase.svg" },
      { name: "Firebase", icon: "/assets/Tech Stack Icons/firebase.svg" }
    ]
  },
  {
    id: "testing",
    name: "Testing & DevOps",
    tools: [
      { name: "Docker", icon: "/assets/Tech Stack Icons/docker.svg" },
      { name: "Kubernetes", icon: "/assets/Tech Stack Icons/kubernetes.svg" },
      { name: "GitHub", icon: "/assets/Tech Stack Icons/github.svg" },
      { name: "Postman", icon: "/assets/Tech Stack Icons/postman.svg" },
      { name: "Jira", icon: "/assets/Tech Stack Icons/jira.svg" }
    ]
  }
];
