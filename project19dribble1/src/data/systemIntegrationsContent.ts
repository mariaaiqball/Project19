import type { ServiceContentSection } from "./serviceContentTypes";

export type { ServiceCapability, ServiceContentSection, ServiceProcessStep } from "./serviceContentTypes";

export const systemIntegrationsTagline = "Data Intelligence & Ecosystem Integration";

export const systemIntegrationsOverview =
  "Data is often trapped in silos—scattered across SaaS apps, on-premise servers, and fragmented networks. Project 19 transforms this chaos into a high-performance Central Data Hub, empowering your leadership with real-time insights over intuition.";

export const systemIntegrationsSections: ServiceContentSection[] = [
  {
    title: "Our Strategic Data Approach",
    intro:
      "We don't just move data; we orchestrate it through a rigorous three-step process:",
    steps: [
      {
        title: "KPI Alignment",
        description:
          'Defining the "North Star" metrics essential to your growth.',
      },
      {
        title: "Source Mapping",
        description:
          "Identifying data across legacy databases and modern cloud ecosystems.",
      },
      {
        title: "Curated Extraction",
        description:
          "Implementing custom sync strategies to ensure data hygiene and system performance.",
      },
    ],
  },
  {
    title: "Workflow Automation & API Orchestration",
    intro:
      "We eliminate bottlenecks by connecting your tech stack into a cohesive, self-regulating machine.",
    capabilities: [
      {
        title: "Low-Code & Pro-Code",
        methodology:
          "Leveraging n8n and Make.com for multi-step workflows.",
        benefit: "Rapid, scalable automation without high overhead.",
      },
      {
        title: "Custom API Development",
        methodology:
          "Building bespoke, secure gateways for unique legacy or partner systems.",
        benefit: 'Seamless connectivity when "out-of-the-box" isn\'t enough.',
      },
      {
        title: "Managed Ecosystems",
        methodology:
          "Aligning services to ensure fluid, cross-departmental data flow.",
        benefit: "Increased organizational productivity and data reliability.",
      },
    ],
  },
];

export const systemIntegrationsCtaHeading =
  "Turn your fragmented data into your greatest competitive advantage.";
