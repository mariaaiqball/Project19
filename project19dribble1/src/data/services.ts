import {
  BarChart3,
  Brain,
  Cloud,
  Globe,
  Link2,
  Monitor,
  type LucideIcon,
} from "lucide-react";
import {
  aiHowWeHelp,
  aiIndustries,
  aiIndustryIntro,
  type AiIndustry,
} from "./aiAgentContent";
import {
  systemIntegrationsCtaHeading,
  systemIntegrationsOverview,
  systemIntegrationsSections,
  systemIntegrationsTagline,
} from "./systemIntegrationsContent";
import {
  cloudSolutionsCtaHeading,
  cloudSolutionsOverview,
  cloudSolutionsSections,
} from "./cloudSolutionsContent";
import {
  dataAnalyticsCtaHeading,
  dataAnalyticsOverview,
  dataAnalyticsSections,
} from "./dataAnalyticsContent";
import {
  digitalWorkplaceCtaHeading,
  digitalWorkplaceOverview,
  digitalWorkplaceSections,
} from "./digitalWorkplaceContent";
import {
  webDesignCtaHeading,
  webDesignOverview,
  webDesignSections,
} from "./webDesignContent";
import type { ServiceContentSection } from "./serviceContentTypes";

export type ServiceDetail = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  cardImage: string;
  cardImageAlt: string;
  overview: string;
  tagline?: string;
  sections?: ServiceContentSection[];
  industryIntro?: string;
  industries?: AiIndustry[];
  howWeHelp?: string[];
  ctaHeading?: string;
  ctaButtonLabel?: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "ai-solutions",
    title: "AI Applications & Agents",
    description:
      "We build AI agents and applications that automate real business workflows",
    icon: Brain,
    cardImage: "/assets/services/ai-agents.jpg",
    cardImageAlt: "Abstract visualization of artificial intelligence technology",
    overview:
      "Project 19 builds practical AI agents and AI-powered applications that connect to your business systems, automate repetitive workflows, and help teams make faster decisions. At Project 19, we believe AI is our future.",
    industryIntro: aiIndustryIntro,
    industries: aiIndustries,
    howWeHelp: aiHowWeHelp,
    ctaHeading:
      "Ready to automate your business workflows with AI?",
    ctaButtonLabel: "Book a Discovery Call",
  },
  {
    slug: "system-data-integrations",
    title: "System Integrations",
    description:
      "Integrate data from different systems to create seamless experiences",
    icon: Link2,
    cardImage: "/assets/services/system-integrations.jpg",
    cardImageAlt: "Server room with network cables connecting systems",
    tagline: systemIntegrationsTagline,
    overview: systemIntegrationsOverview,
    sections: systemIntegrationsSections,
    ctaHeading: systemIntegrationsCtaHeading,
    ctaButtonLabel: "Discuss this service",
  },
  {
    slug: "cloud-based-solutions",
    title: "Cloud Based Solutions",
    description:
      "Build and maintain scalable, secure cloud infrastructure",
    icon: Cloud,
    cardImage: "/assets/services/cloud-solutions.jpg",
    cardImageAlt: "Earth viewed from space representing cloud infrastructure",
    overview: cloudSolutionsOverview,
    sections: cloudSolutionsSections,
    ctaHeading: cloudSolutionsCtaHeading,
    ctaButtonLabel: "Discuss this service",
  },
  {
    slug: "business-intelligence-reporting",
    title: "Data Analytics & Reporting",
    description:
      "Turn business intelligence and data into dashboards and reports that drive smarter decisions",
    icon: BarChart3,
    cardImage: "/assets/services/data-analytics.jpg",
    cardImageAlt: "Business analytics dashboard on a computer screen",
    overview: dataAnalyticsOverview,
    sections: dataAnalyticsSections,
    ctaHeading: dataAnalyticsCtaHeading,
    ctaButtonLabel: "Discuss this service",
  },
  {
    slug: "corporate-intranets",
    title: "Digital Workplace",
    description:
      "Keep teams aligned, informed, and productive across internal platforms",
    icon: Monitor,
    cardImage: "/assets/services/digital-workplace.jpg",
    cardImageAlt: "Team collaborating around laptops in a modern office",
    overview: digitalWorkplaceOverview,
    sections: digitalWorkplaceSections,
    ctaHeading: digitalWorkplaceCtaHeading,
    ctaButtonLabel: "Discuss this service",
  },
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    description:
      "Represent your brand and convert visitors into customers with your site",
    icon: Globe,
    cardImage: "/assets/services/web-design.jpg",
    cardImageAlt: "Website analytics and design work on a laptop",
    overview: webDesignOverview,
    sections: webDesignSections,
    ctaHeading: webDesignCtaHeading,
    ctaButtonLabel: "Discuss this service",
  },
];

export const services = serviceDetails.map(
  ({ slug, title, description, icon, cardImage, cardImageAlt }) => ({
    slug,
    title,
    description,
    icon,
    cardImage,
    cardImageAlt,
  }),
);

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
