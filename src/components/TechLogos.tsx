import React from "react";

interface TechLogoProps {
  name: string;
  className?: string;
}

// Direct mapping from normalized tech aliases to SVG icon filenames in /assets/Tech Stack Icons/
const ICON_FILE_MAP: Record<string, string> = {
  // Web & Full-Stack
  "next.js": "nextjs.svg",
  "nextjs": "nextjs.svg",
  "react": "react.svg",
  "react native": "react.svg",
  "reactjs": "react.svg",
  "typescript": "typescript-svgrepo-com.svg",
  "javascript": "javascript.svg",
  "node.js": "node-js-svgrepo-com.svg",
  "nodejs": "node-js-svgrepo-com.svg",
  "node": "node-js-svgrepo-com.svg",
  "express": "express-js-icon.svg",
  "express.js": "express-js-icon.svg",
  "expressjs": "express-js-icon.svg",
  "python": "python.svg",
  "c#": "csharp-svgrepo-com.svg",
  "csharp": "csharp-svgrepo-com.svg",
  "asp.net": "NET core.svg",
  "asp.net core": "NET core.svg",
  "aspdotnet": "aspdotnet.svg",
  "php": "php.svg",
  "php 8.3": "php.svg",
  "laravel": "laravel-svgrepo-com.svg",
  "mern": "mern.svg",
  "tailwind": "tailwind.svg",
  "tailwindcss": "tailwind.svg",
  "html5": "html-5-svgrepo-com.svg",
  "html": "html-5-svgrepo-com.svg",
  "css3": "css-3-svgrepo-com.svg",
  "css": "css-3-svgrepo-com.svg",

  // Databases & Backend
  "postgresql": "postgresql-icon.svg",
  "postgres": "postgresql-icon.svg",
  "pgvector": "postgresql-icon.svg",
  "mongodb": "mongodb-svgrepo-com.svg",
  "mongo": "mongodb-svgrepo-com.svg",
  "mysql": "mysql-logo-svgrepo-com.svg",
  "mysql / mariadb": "mysql-logo-svgrepo-com.svg",
  "mariadb": "mysql-logo-svgrepo-com.svg",
  "redis": "redis-logo-svgrepo-com.svg",
  "supabase": "supabase.svg",
  "fastapi": "fastapi.svg",
  "graphql": "graphql-icon.svg",
  "graphql api": "graphql-icon.svg",
  "wpgraphql": "graphql-icon.svg",
  "ms sql server": "mssqlserver.svg",
  "sql server": "mssqlserver.svg",
  "mssql": "mssqlserver.svg",

  // Mobile
  "flutter": "flutter.svg",
  "firebase": "google-firebase-icon.svg",
  "swift": "swift.svg",
  "kotlin": "kotlin.svg",
  "expo": "expo.svg",

  // Design & 3D
  "figma": "figma-svgrepo-com.svg",
  "figjam": "figma-svgrepo-com.svg",
  "adobe xd": "adobexd.svg",
  "adobexd": "adobexd.svg",
  "photoshop": "photoshop.svg",
  "adobe photoshop": "photoshop.svg",
  "illustrator": "illustrator.svg",
  "adobe illustrator": "illustrator.svg",
  "indesign": "indesign.svg",
  "adobe indesign": "indesign.svg",
  "canva": "canva-icon.svg",
  "blender": "blender.svg",

  // Video & Motion
  "premiere pro": "premierepro.svg",
  "premierepro": "premierepro.svg",
  "after effects": "aftereffects.svg",
  "aftereffects": "aftereffects.svg",
  "davinci resolve": "davinciresolve.svg",
  "davinci": "davinciresolve.svg",
  "capcut": "capcut-icon.svg",
  "final cut pro": "finalcutpro.svg",
  "finalcutpro": "finalcutpro.svg",

  // CMS & E-Commerce
  "shopify": "shopify-color-svgrepo-com.svg",
  "shopify liquid": "shopify-color-svgrepo-com.svg",
  "shopify plus": "shopify-color-svgrepo-com.svg",
  "liquid": "shopify-color-svgrepo-com.svg",
  "hydrogen / react": "react.svg",
  "hydrogen": "react.svg",
  "wordpress": "wordpress-svgrepo-com.svg",
  "wordpress 6.7+": "wordpress-svgrepo-com.svg",
  "woocommerce": "WooCommerce.svg",
  "webflow": "webflow.svg",

  // AI, ML & Data Science
  "tensorflow": "tensorflow-icon.svg",
  "pytorch": "pytorch-icon.svg",
  "scikit-learn": "scikitlearn.svg",
  "scikitlearn": "scikitlearn.svg",
  "sklearn": "scikitlearn.svg",
  "keras": "keras.svg",
  "openai": "OpenAi.svg",
  "gpt": "OpenAi.svg",
  "gpt-4o": "OpenAi.svg",
  "chatgpt": "OpenAi.svg",
  "openai / claude": "OpenAi.svg",
  "claude 3.5 sonnet": "claude-ai-icon.svg",
  "claude": "claude-ai-icon.svg",
  "gemini": "google-gemini-icon.svg",
  "pandas": "pandas-software-icon.svg",
  "numpy": "numpy-icon.svg",
  "langchain": "langchain.svg",
  "langchain / llamaindex": "langchain.svg",
  "llamaindex": "langchain.svg",
  "langgraph": "langchain.svg",
  "langsmith": "langchain.svg",
  "ragas": "langchain.svg",
  "hugging face": "huggingface.svg",
  "huggingface": "huggingface.svg",
  "agentic ai": "agentic-ai.svg",
  "agentic-ai": "agentic-ai.svg",
  "agentic ai & autonomous systems": "agentic-ai.svg",
  "crewai": "crewai.svg",
  "pinecone": "pinecone.svg",
  "pinecone / qdrant": "pinecone.svg",
  "qdrant": "pinecone.svg",

  // Marketing & SEO
  "google ads": "google-ads-svgrepo-com.svg",
  "googleads": "google-ads-svgrepo-com.svg",
  "meta ads": "meta-icon.svg",
  "meta ads manager": "meta-icon.svg",
  "meta": "meta-icon.svg",
  "meta capi": "meta-icon.svg",
  "google analytics": "google-analytics-icon.svg",
  "google analytics 4": "google-analytics-icon.svg",
  "ga4": "google-analytics-icon.svg",
  "analytics": "google-analytics-icon.svg",
  "semrush": "semrush.svg",
  "ahrefs": "ahrefs.svg",
  "mailchimp": "mailchimp.svg",

  // Hardware & IoT
  "arduino": "arduino.svg",
  "esp32 / arduino": "arduino.svg",
  "esp32": "arduino.svg",

  // DevOps & Cloud
  "docker": "docker-icon.svg",
  "kubernetes": "kubernetes-icon.svg",
  "github": "github.svg",
  "github actions": "githubactions.svg",
  "githubactions": "githubactions.svg",
  "aws": "aws-icon.svg",
  "azure": "azure.svg",
  "jenkins": "jenkins-icon.svg",
  "prometheus": "prometheus.svg",
  "grafana": "grafana.svg",
  "jira": "jira.svg",
  "postman": "postman.svg",

  // Web3 & Blockchain
  "solidity": "solidity.svg",
  "ethereum": "ethereum.svg",
  "polygon": "polygon.svg"
};

export default function TechLogo({ name, className = "w-6 h-6" }: TechLogoProps) {
  const raw = name || "";
  const normalized = raw.toLowerCase().trim();

  // 1. Direct or fuzzy lookup in SVG icons library
  const matchedFile =
    ICON_FILE_MAP[normalized] ||
    Object.entries(ICON_FILE_MAP).find(([key]) => normalized.includes(key) || key.includes(normalized))?.[1];

  if (matchedFile) {
    return (
      <img
        src={`/assets/Tech%20Stack%20Icons/${matchedFile}`}
        alt={raw}
        className={`object-contain inline-block shrink-0 ${className}`}
        loading="lazy"
      />
    );
  }

  // 2. Special branded inline vector logos
  switch (normalized) {
    case "aws":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M67.8 82.3c-14.8 0-26.6-5.8-35.8-15.3-1.4-1.4-1.2-3.3.4-4.5 1.5-1.1 3.4-.9 4.8.5 8.1 8.3 18.5 13.4 30.6 13.4 10.2 0 19.8-3.4 27.8-9.8 1.4-1.1 3.4-1 4.7.4 1.3 1.4 1.2 3.4-.2 4.6-9 7.3-20.1 10.7-32.3 10.7z" fill="#FF9900" />
          <path d="M102.3 70.8c-1.3-1.6-4.5-.6-6.6-.1-2.2.5-3.3 1.9-3.5 3.3-.2 1.4.8 2.6 2.3 2.6 1.7 0 4.7-.6 6.8-1.5 1.8-.8 2.1-3 1-4.3z" fill="#FF9900" />
        </svg>
      );

    case "three.js":
    case "webgl":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="currentColor">
          <path d="M64 8L10 101.6h108L64 8zm0 29.8l38.2 65.8H25.8L64 37.8z" />
        </svg>
      );

    case "google":
      return (
        <svg className={className} viewBox="0 0 48 48">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
      );

    case "instagram":
    case "insta":
      return (
        <svg className={className} viewBox="0 0 48 48">
          <defs>
            <radialGradient id="ig-g1" cx="20%" cy="100%" r="150%">
              <stop offset="0%" stopColor="#ffd600"/>
              <stop offset="25%" stopColor="#ff7a00"/>
              <stop offset="50%" stopColor="#ff0169"/>
              <stop offset="75%" stopColor="#d300c5"/>
              <stop offset="100%" stopColor="#7638fa"/>
            </radialGradient>
          </defs>
          <rect width="48" height="48" rx="12" fill="url(#ig-g1)"/>
          <circle cx="24" cy="24" r="8.5" fill="none" stroke="#FFF" strokeWidth="3"/>
          <rect x="9" y="9" width="30" height="30" rx="8" fill="none" stroke="#FFF" strokeWidth="3"/>
          <circle cx="34" cy="14" r="2" fill="#FFF"/>
        </svg>
      );

    case "facebook":
      return (
        <svg className={className} viewBox="0 0 48 48">
          <rect width="48" height="48" rx="12" fill="#1877F2"/>
          <path d="M29.5 25l.8-5.2h-5V16.5c0-1.4.7-2.8 2.9-2.8H30.5V9.2s-2-.3-3.9-.3c-3.9 0-6.4 2.4-6.4 6.6v4.3h-4.3v5.2h4.3v14.5h5.3V25h4z" fill="#FFF"/>
        </svg>
      );

    case "microsoft":
      return (
        <svg className={className} viewBox="0 0 48 48">
          <rect x="4" y="4" width="18" height="18" fill="#F25022"/>
          <rect x="26" y="4" width="18" height="18" fill="#7FBA00"/>
          <rect x="4" y="26" width="18" height="18" fill="#00A4EF"/>
          <rect x="26" y="26" width="18" height="18" fill="#FFB900"/>
        </svg>
      );

    case "antigravity":
    case "agy":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          <defs>
            <linearGradient id="agy-g" x1="0" y1="48" x2="48" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6807ba"/>
              <stop offset="0.5" stopColor="#d4af37"/>
              <stop offset="1" stopColor="#f2ca50"/>
            </linearGradient>
          </defs>
          <path d="M24 4L42 40H6L24 4Z" stroke="url(#agy-g)" strokeWidth="3" strokeLinejoin="round"/>
          <path d="M24 16L34 36H14L24 16Z" fill="url(#agy-g)" opacity="0.85"/>
          <circle cx="24" cy="27" r="2.5" fill="#FFF"/>
        </svg>
      );

    default:
      return (
        <div className={`${className} rounded-md bg-surface-container-highest flex items-center justify-center text-primary font-mono text-[10px] font-bold border border-primary/30 shrink-0`}>
          {raw.slice(0, 3).toUpperCase()}
        </div>
      );
  }
}
