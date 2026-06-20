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
    slug: "custom-software-development",
    title: "Custom Development",
    description:
      "Build software tailored to your business's specific needs and workflows",
    icon: Code2,
    overview:
      "Off-the-shelf tools rarely fit how your business actually operates. We design and build software around your workflows, your team, and your growth plans — so technology works for you instead of against you.",
    whatWeDo: [
      "Discovery sessions to map processes, pain points, and success criteria",
      "Custom web apps, internal tools, and workflow automation",
      "API design and backend development built for maintainability",
      "Iterative delivery with regular demos and feedback loops",
    ],
    idealFor: [
      "Businesses outgrowing spreadsheets and manual processes",
      "Teams needing a tool that doesn't exist in the market",
      "Companies replacing legacy systems without enterprise budgets",
    ],
    outcomes: [
      "Software that matches how your team actually works",
      "Reduced manual work and fewer errors across operations",
      "A scalable foundation you own and control long-term",
    ],
  },
  {
    slug: "system-data-integrations",
    title: "System Integrations",
    description:
      "Integrate data from different systems to create seamless experiences",
    icon: Link2,
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
    title: "Cloud Solutions",
    description:
      "Build and maintain scalable, secure cloud infrastructure",
    icon: Cloud,
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
    title: "BI & Reporting",
    description:
      "Turn raw data into dashboards and reports that drive smarter decisions",
    icon: BarChart3,
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
    title: "Corporate Intranets",
    description:
      "Keep teams aligned, informed, and productive across internal platforms",
    icon: Monitor,
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
    title: "Web Development",
    description:
      "Represent your brand and convert visitors into customers with your site",
    icon: Globe,
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
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Reduce friction for your customers with intuitive interfaces",
    icon: Layout,
    overview:
      "Great software fails when people can't figure out how to use it. We design interfaces that feel obvious — whether it's a customer-facing product or an internal tool your team uses every day.",
    whatWeDo: [
      "User research, journey mapping, and usability testing",
      "Wireframes and high-fidelity UI design aligned to your brand",
      "Design systems and component libraries for consistency",
      "Handoff and collaboration with your development team or ours",
    ],
    idealFor: [
      "Products with high drop-off or support tickets tied to confusion",
      "Teams building new apps who want to validate before coding",
      "Businesses refreshing dated interfaces without a full rebuild",
    ],
    outcomes: [
      "Interfaces that users understand without training",
      "Lower friction, fewer errors, and higher adoption",
      "Design assets ready for efficient development",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Compete through analytics, targeted campaigns, and outreach",
    icon: Megaphone,
    overview:
      "Competing online doesn't require an enterprise budget — it requires focus. We help local businesses reach the right audience with practical digital marketing tied to measurable results.",
    whatWeDo: [
      "Marketing strategy aligned to your goals and budget",
      "SEO foundations, local search, and content recommendations",
      "Paid campaign setup and optimization across key channels",
      "Tracking and reporting so you know what's working",
    ],
    idealFor: [
      "Local businesses ready to grow beyond word-of-mouth",
      "Teams spending on ads without clear ROI visibility",
      "Companies launching new services or locations",
    ],
    outcomes: [
      "More qualified traffic and leads from the channels that matter",
      "Clear reporting on spend, performance, and next steps",
      "Marketing that supports sales instead of operating in a silo",
    ],
  },
  {
    slug: "dedicated-developer-team",
    title: "Dedicated Developer",
    description:
      "Embedded talent that works as an extension of your team",
    icon: Users,
    overview:
      "Hiring full-time is slow and expensive; project agencies disappear when the SOW ends. Our dedicated developer model gives you ongoing capacity — someone who learns your business and ships consistently.",
    whatWeDo: [
      "Matched developers or small teams embedded in your workflow",
      "Flexible engagement from part-time to full-time capacity",
      "Direct communication, sprint planning, and transparent reporting",
      "Continuity across projects so context isn't lost",
    ],
    idealFor: [
      "Businesses with a backlog but no in-house dev team",
      "Teams needing extra capacity during growth or peak seasons",
      "Leaders who want a long-term technical partner, not a one-off vendor",
    ],
    outcomes: [
      "Steady delivery without the overhead of full-time hiring",
      "A team member who understands your systems and priorities",
      "Flexibility to scale capacity up or down as needs change",
    ],
  },
];

export const services = serviceDetails.map(({ title, description, icon }) => ({
  title,
  description,
  icon,
}));
