import React from "react";

export interface ServiceIconConfig {
  src: string;
  isMonochrome: boolean;
  alt: string;
}

export function getServiceIconConfig(slug: string): ServiceIconConfig {
  switch (slug) {
    case "web-development":
      return {
        src: "/assets/Services Icons/webdevelopment.png",
        isMonochrome: false,
        alt: "Web Development",
      };

    case "mobile-app-development":
      return {
        src: "/assets/Services Icons/mobile-development.png",
        isMonochrome: true,
        alt: "Mobile App Development",
      };

    case "ui-ux-design":
      return {
        src: "/assets/Services Icons/ux ui.png",
        isMonochrome: false,
        alt: "UI/UX Design",
      };

    case "digital-marketing":
      return {
        src: "/assets/Services Icons/digital-marketing.png",
        isMonochrome: true,
        alt: "Digital Marketing",
      };

    case "seo":
      return {
        src: "/assets/Services Icons/seo.svg",
        isMonochrome: false,
        alt: "SEO Search Engine Optimization",
      };

    case "google-meta-ads":
      return {
        src: "/assets/Services Icons/google-meta-ads.svg",
        isMonochrome: false,
        alt: "Google & Meta Ads",
      };

    case "branding-logo":
    case "branding-logo-design":
      return {
        src: "/assets/Services Icons/graphic-designer.png",
        isMonochrome: true,
        alt: "Branding & Logo Design",
      };

    case "video-motion-graphics":
    case "video-editing-motion":
      return {
        src: "/assets/Services Icons/video editng.png",
        isMonochrome: false,
        alt: "Video Editing & Motion Graphics",
      };

    case "mvp-development":
      return {
        src: "/assets/Services Icons/mvp.svg",
        isMonochrome: false,
        alt: "MVP Development",
      };

    case "shopify-development":
      return {
        src: "/assets/Services Icons/shopify.svg",
        isMonochrome: false,
        alt: "Shopify Development",
      };

    case "wordpress-development":
      return {
        src: "/assets/Services Icons/wordpress.svg",
        isMonochrome: false,
        alt: "WordPress Development",
      };

    case "ai-ml-solutions":
      return {
        src: "/assets/Services Icons/ai and ml.png",
        isMonochrome: true,
        alt: "AI & ML Solutions",
      };

    case "llms-rag":
      return {
        src: "/assets/Services Icons/llms-rag.svg",
        isMonochrome: false,
        alt: "LLMs & RAG Systems",
      };

    case "agentic-ai":
      return {
        src: "/assets/Services Icons/agentic.png",
        isMonochrome: false,
        alt: "Agentic AI & Autonomous Systems",
      };

    case "model-training":
      return {
        src: "/assets/Services Icons/ml.png",
        isMonochrome: true,
        alt: "Model Training & Fine-Tuning",
      };

    case "fyp-ideas":
      return {
        src: "/assets/Services Icons/fyp-ideas.svg",
        isMonochrome: false,
        alt: "FYP Ideas & Academic Prototypes",
      };

    default:
      return {
        src: "/assets/Services Icons/webdevelopment.png",
        isMonochrome: false,
        alt: "Solvexa Service",
      };
  }
}

interface ServiceBrandIconProps {
  slug: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  containerClassName?: string;
}

export default function ServiceBrandIcon({
  slug,
  size = "md",
  className = "",
  containerClassName = "",
}: ServiceBrandIconProps) {
  const config = getServiceIconConfig(slug);

  // Responsive dimensions
  const containerSizeClasses =
    size === "sm"
      ? "w-8 h-8 rounded-lg p-1.5"
      : size === "lg"
      ? "w-14 h-14 rounded-2xl p-2.5"
      : "w-11 h-11 sm:w-12 sm:h-12 rounded-xl p-2";

  return (
    <div
      className={`relative shrink-0 flex items-center justify-center bg-surface-container-high/90 border border-outline-variant/30 shadow-md group-hover:border-primary/60 group-hover:bg-surface-container-highest transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(242,202,80,0.25)] ${containerSizeClasses} ${containerClassName}`}
    >
      <img
        src={config.src}
        alt={config.alt}
        className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 ${
          config.isMonochrome
            ? "brightness-0 invert drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]"
            : "drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
        } ${className}`}
        loading="lazy"
      />
    </div>
  );
}
