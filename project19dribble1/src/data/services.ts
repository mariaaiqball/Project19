import {
  BarChart3,
  Brain,
  Cloud,
  Code2,
  Globe,
  Layout,
  Link2,
  Megaphone,
  Monitor,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  aiHowWeHelp,
  aiIndustries,
  aiIndustryIntro,
  aiOutcomes,
  type AiIndustry,
} from "./aiAgentContent";

export type ServiceDetail = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  cardImage: string;
  cardImageAlt: string;
  overview: string;
  whatWeDo: string[];
  idealFor: string[];
  outcomes: string[];
  industryIntro?: string;
  industries?: AiIndustry[];
  howWeHelp?: string[];
  ctaHeading?: string;
  ctaButtonLabel?: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "ai-solutions",
    title: "AI Agents",
    description:
      "We build custom AI agents and intelligent applications that automate real business workflows, not just conversations.",
    icon: Brain,
    cardImage: "/assets/services/ai-agents.jpg",
    cardImageAlt: "Abstract visualization of artificial intelligence technology",
    overview:
      "Project 19 builds practical AI agents and AI-powered applications that connect to your business systems, automate repetitive workflows, and help teams make faster decisions. At Project 19, we believe AI is our future.",
    whatWeDo: [],
    idealFor: [],
    outcomes: aiOutcomes,
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
    overview:
      "When your tools don't talk to each other, your team pays the price in duplicate entry, delays, and mistakes. We connect the platforms you rely on so data flows automatically and reliably.",
    whatWeDo: [
      "Integration planning across CRMs, ERPs, e-commerce, and support tools",
      "API, webhook, and database connections — including legacy systems",
      "Middleware and sync jobs to keep data consistent in real time",
      "Monitoring and error handling so integrations stay dependable",
    ],
    idealFor: [
      "Teams juggling multiple platforms with no single source of truth",
      "Businesses hitting limits with native integrations or Zapier-style tools",
      "Operations that need custom rules between systems",
    ],
    outcomes: [
      "One accurate view of customers, orders, and operations",
      "Less time spent copying data between tools",
      "Automated workflows that scale with your business",
    ],
  },
  {
    slug: "cloud-based-solutions",
    title: "Cloud Based Solutions",
    description:
      "Build and maintain scalable, secure cloud infrastructure",
    icon: Cloud,
    cardImage: "/assets/services/cloud-solutions.jpg",
    cardImageAlt: "Earth viewed from space representing cloud infrastructure",
    overview:
      "Cloud doesn't have to mean complexity or runaway costs. We architect and implement cloud solutions that give you reliability and room to grow — sized appropriately for a small or mid-size business.",
    whatWeDo: [
      "Cloud readiness assessments and migration planning",
      "Infrastructure setup on AWS, Azure, or Google Cloud",
      "Security, backup, and disaster recovery best practices",
      "Cost monitoring and optimization as usage scales",
    ],
    idealFor: [
      "Businesses moving off on-premise or aging hosting",
      "Teams needing better uptime, security, or remote access",
      "Companies preparing to scale without re-architecting later",
    ],
    outcomes: [
      "Reliable infrastructure that scales with demand",
      "Reduced downtime risk and improved security posture",
      "Predictable costs aligned to your actual usage",
    ],
  },
  {
    slug: "business-intelligence-reporting",
    title: "Data Analytics & Reporting",
    description:
      "Turn business intelligence and data into dashboards and reports that drive smarter decisions",
    icon: BarChart3,
    cardImage: "/assets/services/data-analytics.jpg",
    cardImageAlt: "Business analytics dashboard on a computer screen",
    overview:
      "You already have the data — it's just scattered and hard to act on. We turn it into clear dashboards and reports so leaders and teams can make confident decisions without waiting on IT.",
    whatWeDo: [
      "Data modeling and pipeline setup from your existing sources",
      "Executive dashboards and operational reports tailored to your KPIs",
      "Self-service analytics so teams can explore without bottlenecks",
      "Training and documentation so insights stay accessible",
    ],
    idealFor: [
      "Leaders who need visibility beyond monthly spreadsheet exports",
      "Teams drowning in reports but starving for actionable insight",
      "Growing businesses ready to measure what matters",
    ],
    outcomes: [
      "Real-time visibility into performance and trends",
      "Faster decisions backed by accurate, shared data",
      "Less time assembling reports, more time acting on them",
    ],
  },
  {
    slug: "corporate-intranets",
    title: "Digital Workplace",
    description:
      "Keep teams aligned, informed, and productive across internal platforms",
    icon: Monitor,
    cardImage: "/assets/services/digital-workplace.jpg",
    cardImageAlt: "Team collaborating around laptops in a modern office",
    overview:
      "A strong intranet is the hub your team actually wants to use — not a graveyard of outdated links. We build internal portals that centralize communication, resources, and tools in one place.",
    whatWeDo: [
      "Information architecture and content strategy for internal audiences",
      "SharePoint, modern portal, or custom intranet development",
      "Employee directories, news feeds, and resource libraries",
      "Mobile-friendly experiences for deskless and remote staff",
    ],
    idealFor: [
      "Organizations with fragmented internal communication",
      "Companies scaling headcount across multiple locations",
      "Teams replacing outdated intranet or document chaos",
    ],
    outcomes: [
      "One trusted place for policies, updates, and team resources",
      "Higher engagement and faster access to what employees need",
      "Stronger alignment between corporate and frontline teams",
    ],
  },
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    description:
      "Represent your brand and convert visitors into customers with your site",
    icon: Globe,
    cardImage: "/assets/services/web-design.jpg",
    cardImageAlt: "Website analytics and design work on a laptop",
    overview:
      "Your website is often the first impression — and for many local businesses, it's the hardest working salesperson on the team. We design and build sites that look professional, load fast, and guide visitors toward action.",
    whatWeDo: [
      "Brand-aligned design with clear messaging and conversion paths",
      "Responsive development optimized for speed and accessibility",
      "CMS setup so your team can update content without developers",
      "Analytics, forms, and integrations with your marketing stack",
    ],
    idealFor: [
      "Businesses with outdated sites that don't reflect their quality",
      "Companies launching new services or entering new markets",
      "Teams that need a site they can maintain and grow over time",
    ],
    outcomes: [
      "A polished online presence that builds trust immediately",
      "Better lead capture and clearer paths to contact or purchase",
      "A site you control and can evolve as your business grows",
    ],
  },
];

export const services = serviceDetails.map(
  ({ title, description, icon, cardImage, cardImageAlt }) => ({
    title,
    description,
    icon,
    cardImage,
    cardImageAlt,
  }),
);
