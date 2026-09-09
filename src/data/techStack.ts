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
    name: "Web Development",
    tools: [
      { name: "Next.js", icon: "/assets/Tech Stack Icons/nextjs.svg" },
      { name: "React", icon: "/assets/Tech Stack Icons/react.svg" },
      { name: "TypeScript", icon: "/assets/Tech Stack Icons/typescript-svgrepo-com.svg" },
      { name: "JavaScript", icon: "/assets/Tech Stack Icons/javascript.svg" },
      { name: "Tailwind CSS", icon: "/assets/Tech Stack Icons/tailwind.svg" },
      { name: "HTML5", icon: "/assets/Tech Stack Icons/html-5-svgrepo-com.svg" },
      { name: "CSS3", icon: "/assets/Tech Stack Icons/css-3-svgrepo-com.svg" },
      { name: "WordPress", icon: "/assets/Tech Stack Icons/wordpress-svgrepo-com.svg" },
      { name: "Shopify", icon: "/assets/Tech Stack Icons/shopify-color-svgrepo-com.svg" },
      { name: "WooCommerce", icon: "/assets/Tech Stack Icons/WooCommerce.svg" },
      { name: "Webflow", icon: "/assets/Tech Stack Icons/webflow.svg" }
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
      { name: "Expo", icon: "/assets/Tech Stack Icons/expo.svg" }
    ]
  },
  {
    id: "backend",
    name: "Backend",
    tools: [
      { name: "Node.js", icon: "/assets/Tech Stack Icons/node-js-svgrepo-com.svg" },
      { name: "Express.js", icon: "/assets/Tech Stack Icons/express-js-icon.svg" },
      { name: "Python", icon: "/assets/Tech Stack Icons/python.svg" },
      { name: "FastAPI", icon: "/assets/Tech Stack Icons/fastapi.svg" },
      { name: "Asp.Net Core", icon: "/assets/Tech Stack Icons/NET core.svg" },
      { name: "C#", icon: "/assets/Tech Stack Icons/csharp-svgrepo-com.svg" },
      { name: "Java", icon: "/assets/Tech Stack Icons/java.svg" },
      { name: "PHP", icon: "/assets/Tech Stack Icons/php.svg" },
      { name: "Laravel", icon: "/assets/Tech Stack Icons/laravel-svgrepo-com.svg" },
      { name: "GraphQL", icon: "/assets/Tech Stack Icons/graphql-icon.svg" },
      { name: "Postman", icon: "/assets/Tech Stack Icons/postman.svg" }
    ]
  },
  {
    id: "ai-ml",
    name: "AI & ML",
    tools: [
      { name: "Python", icon: "/assets/Tech Stack Icons/python.svg" },
      { name: "PyTorch", icon: "/assets/Tech Stack Icons/pytorch-icon.svg" },
      { name: "TensorFlow", icon: "/assets/Tech Stack Icons/tensorflow-icon.svg" },
      { name: "OpenAI / LLMs", icon: "/assets/Tech Stack Icons/OpenAi.svg" },
      { name: "Claude AI", icon: "/assets/Tech Stack Icons/claude-ai-icon.svg" },
      { name: "Google Gemini", icon: "/assets/Tech Stack Icons/google-gemini-icon.svg" },
      { name: "LangChain", icon: "/assets/Tech Stack Icons/langchain.svg" },
      { name: "CrewAI", icon: "/assets/Tech Stack Icons/crewai.svg" },
      { name: "Hugging Face", icon: "/assets/Tech Stack Icons/huggingface.svg" },
      { name: "Scikit-Learn", icon: "/assets/Tech Stack Icons/scikitlearn.svg" },
      { name: "Pandas", icon: "/assets/Tech Stack Icons/pandas-software-icon.svg" },
      { name: "NumPy", icon: "/assets/Tech Stack Icons/numpy-icon.svg" },
      { name: "Pinecone", icon: "/assets/Tech Stack Icons/pinecone.svg" }
    ]
  },
  {
    id: "design",
    name: "UI/UX Design",
    tools: [
      { name: "Figma", icon: "/assets/Tech Stack Icons/figma-svgrepo-com.svg" },
      { name: "Photoshop", icon: "/assets/Tech Stack Icons/photoshop.svg" },
      { name: "Illustrator", icon: "/assets/Tech Stack Icons/illustrator.svg" },
      { name: "Adobe InDesign", icon: "/assets/Tech Stack Icons/indesign.svg" },
      { name: "Adobe XD", icon: "/assets/Tech Stack Icons/adobexd.svg" },
      { name: "Canva", icon: "/assets/Tech Stack Icons/canva-icon.svg" },
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
      { name: "CapCut", icon: "/assets/Tech Stack Icons/capcut-icon.svg" },
      { name: "Final Cut Pro", icon: "/assets/Tech Stack Icons/finalcutpro.svg" }
    ]
  },
  {
    id: "marketing",
    name: "Digital Marketing & SEO",
    tools: [
      { name: "Meta Ads", icon: "/assets/Tech Stack Icons/meta-icon.svg" },
      { name: "Google Ads", icon: "/assets/Tech Stack Icons/google-ads-svgrepo-com.svg" },
      { name: "Google Analytics", icon: "/assets/Tech Stack Icons/google-analytics-icon.svg" },
      { name: "SEMrush", icon: "/assets/Tech Stack Icons/semrush.svg" },
      { name: "Ahrefs", icon: "/assets/Tech Stack Icons/ahrefs.svg" },
      { name: "Mailchimp", icon: "/assets/Tech Stack Icons/mailchimp.svg" }
    ]
  },
  {
    id: "database",
    name: "Database",
    tools: [
      { name: "PostgreSQL", icon: "/assets/Tech Stack Icons/postgresql-icon.svg" },
      { name: "MongoDB", icon: "/assets/Tech Stack Icons/mongodb-svgrepo-com.svg" },
      { name: "MySQL", icon: "/assets/Tech Stack Icons/mysql-logo-svgrepo-com.svg" },
      { name: "MS SQL Server", icon: "/assets/Tech Stack Icons/mssqlserver.svg" },
      { name: "Redis", icon: "/assets/Tech Stack Icons/redis-logo-svgrepo-com.svg" },
      { name: "Supabase", icon: "/assets/Tech Stack Icons/supabase.svg" },
      { name: "Firebase", icon: "/assets/Tech Stack Icons/google-firebase-icon.svg" }
    ]
  },
  {
    id: "testing",
    name: "DevOps & Cloud",
    tools: [
      { name: "Docker", icon: "/assets/Tech Stack Icons/docker-icon.svg" },
      { name: "Kubernetes", icon: "/assets/Tech Stack Icons/kubernetes-icon.svg" },
      { name: "AWS", icon: "/assets/Tech Stack Icons/aws-icon.svg" },
      { name: "Azure", icon: "/assets/Tech Stack Icons/azure.svg" },
      { name: "GitHub", icon: "/assets/Tech Stack Icons/github.svg" },
      { name: "GitHub Actions", icon: "/assets/Tech Stack Icons/githubactions.svg" },
      { name: "Jenkins", icon: "/assets/Tech Stack Icons/jenkins-icon.svg" },
      { name: "Prometheus", icon: "/assets/Tech Stack Icons/prometheus.svg" },
      { name: "Grafana", icon: "/assets/Tech Stack Icons/grafana.svg" },
      { name: "Jira", icon: "/assets/Tech Stack Icons/jira.svg" }
    ]
  }
];
