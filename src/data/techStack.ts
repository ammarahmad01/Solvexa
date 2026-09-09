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
      { name: "Next.js", icon: "/assets/Tech Stack Icons/nextjs.svg" },
      { name: "React", icon: "/assets/Tech Stack Icons/react.svg" },
      { name: "TypeScript", icon: "/assets/Tech Stack Icons/typescript.svg" },
      { name: "JavaScript", icon: "/assets/Tech Stack Icons/javascript.svg" },
      { name: "Tailwind CSS", icon: "/assets/Tech Stack Icons/tailwind.svg" },
      { name: "HTML5", icon: "/assets/Tech Stack Icons/html5.svg" },
      { name: "CSS3", icon: "/assets/Tech Stack Icons/css3.svg" },
      { name: "MERN", icon: "/assets/Tech Stack Icons/mern.svg" },
      { name: "PHP", icon: "/assets/Tech Stack Icons/php.svg" },
      { name: "Laravel", icon: "/assets/Tech Stack Icons/laravel.svg" },
      { name: "WordPress", icon: "/assets/Tech Stack Icons/wordpress.svg" },
      { name: "Shopify", icon: "/assets/Tech Stack Icons/shopify.svg" },
      { name: "WooCommerce", icon: "/assets/Tech Stack Icons/woocommerce.svg" },
      { name: "Webflow", icon: "/assets/Tech Stack Icons/webflow.svg" }
    ]
  },
  {
    id: "mobile",
    name: "Mobile",
    tools: [
      { name: "React Native", icon: "/assets/Tech Stack Icons/react.svg" },
      { name: "Flutter", icon: "/assets/Tech Stack Icons/flutter.svg" },
      { name: "Firebase", icon: "/assets/Tech Stack Icons/firebase.svg" },
      { name: "Swift", icon: "/assets/Tech Stack Icons/swift.svg" },
      { name: "Kotlin", icon: "/assets/Tech Stack Icons/kotlin.svg" },
      { name: "Expo", icon: "/assets/Tech Stack Icons/expo.svg" }
    ]
  },
  {
    id: "backend",
    name: "Backend",
    tools: [
      { name: "Node.js", icon: "/assets/Tech Stack Icons/nodejs.svg" },
      { name: "Express.js", icon: "/assets/Tech Stack Icons/express.svg" },
      { name: "Python", icon: "/assets/Tech Stack Icons/python.svg" },
      { name: "FastAPI", icon: "/assets/Tech Stack Icons/fastapi.svg" },
      { name: "C#", icon: "/assets/Tech Stack Icons/csharp.svg" },
      { name: "GraphQL", icon: "/assets/Tech Stack Icons/graphql.svg" },
      { name: "PHP", icon: "/assets/Tech Stack Icons/php.svg" },
      { name: "Laravel", icon: "/assets/Tech Stack Icons/laravel.svg" }
    ]
  },
  {
    id: "ai-ml",
    name: "AI & ML",
    tools: [
      { name: "Python", icon: "/assets/Tech Stack Icons/python.svg" },
      { name: "PyTorch", icon: "/assets/Tech Stack Icons/pytorch.svg" },
      { name: "TensorFlow", icon: "/assets/Tech Stack Icons/tensorflow.svg" },
      { name: "LangChain", icon: "/assets/Tech Stack Icons/langchain.svg" },
      { name: "CrewAI", icon: "/assets/Tech Stack Icons/crewai.svg" },
      { name: "Pinecone", icon: "/assets/Tech Stack Icons/pinecone.svg" },
      { name: "OpenAI / LLMs", icon: "/assets/Tech Stack Icons/openai.svg" },
      { name: "Agentic AI", icon: "/assets/Tech Stack Icons/agentic-ai.svg" },
      { name: "Hugging Face", icon: "/assets/Tech Stack Icons/huggingface.svg" },
      { name: "Scikit-Learn", icon: "/assets/Tech Stack Icons/scikitlearn.svg" },
      { name: "Keras", icon: "/assets/Tech Stack Icons/keras.svg" }
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
      { name: "InDesign", icon: "/assets/Tech Stack Icons/indesign.svg" },
      { name: "Canva", icon: "/assets/Tech Stack Icons/canva.svg" },
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
    id: "marketing",
    name: "Digital Marketing & SEO",
    tools: [
      { name: "Meta Ads", icon: "/assets/Tech Stack Icons/meta.svg" },
      { name: "Google Ads", icon: "/assets/Tech Stack Icons/googleads.svg" },
      { name: "Google Analytics", icon: "/assets/Tech Stack Icons/analytics.svg" },
      { name: "Search Console", icon: "/assets/Tech Stack Icons/searchconsole.svg" },
      { name: "SEMrush", icon: "/assets/Tech Stack Icons/semrush.svg" },
      { name: "Ahrefs", icon: "/assets/Tech Stack Icons/ahrefs.svg" },
      { name: "Mailchimp", icon: "/assets/Tech Stack Icons/mailchimp.svg" }
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
    name: "DevOps & Cloud",
    tools: [
      { name: "Docker", icon: "/assets/Tech Stack Icons/docker.svg" },
      { name: "Kubernetes", icon: "/assets/Tech Stack Icons/kubernetes.svg" },
      { name: "GitHub", icon: "/assets/Tech Stack Icons/github.svg" },
      { name: "Postman", icon: "/assets/Tech Stack Icons/postman.svg" },
      { name: "Jira", icon: "/assets/Tech Stack Icons/jira.svg" }
    ]
  }
];
