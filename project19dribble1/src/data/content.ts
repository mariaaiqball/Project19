import { type LucideIcon } from "lucide-react";

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Client Stories", href: "/case-studies" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

export const values = [
  {
    title: "RESULTS",
    description:
      "We measure success by outcomes that matter to your business whether it's revenue growth, operational efficiency, or problems solved.",
  },
  {
    title: "Honesty",
    description:
      "Transparent communication, realistic timelines, and straight talk about what will actually move the needle for your budget.",
  },
  {
    title: "Reliability",
    description:
      "When we commit, we deliver. You get a dependable partner who shows up consistently and takes accountability, not a vendor who disappears after the sale.",
  },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  cardImage: string;
  cardImageAlt: string;
};

export { services } from "./services";

export const engineeringIntro = [
  "At Project 19, we don't just write code; we architect resilient digital ecosystems. By prioritizing accessibility, responsiveness, and security by design, we ensure your infrastructure is engineered to scale from day one.",
  "Our engineers leverage a high-performance tech stack paired with AI-augmented workflows, allowing us to accelerate delivery timelines. We bridge the gap between speed and sophistication, maintaining the uncompromising architectural integrity and security standards expected by the Fortune 500.",
];

export const techStackCategories = [
  {
    title: "Front-End Excellence",
    technologies: ["JavaScript (ES6+)", "React", "Angular", "Vue.js", "HTML5/CSS3"],
  },
  {
    title: "Back-End & Logic",
    technologies: ["Node.js", ".NET Core", "ASP.NET", "Web Services (REST/SOAP)"],
  },
  {
    title: "Workflow Automation",
    technologies: ["n8n", "Make.com", "API Gateway Frameworks"],
  },
  {
    title: "Database & Storage",
    technologies: ["MS-SQL", "MySQL", "PostgreSQL", "MariaDB", "MongoDB", "Redis"],
  },
  {
    title: "Data Intelligence",
    technologies: ["PowerBI", "Tableau", "Google Looker Studio"],
  },
  {
    title: "Digital Commerce",
    technologies: ["Shopify", "WooCommerce", "WordPress", "Wix"],
  },
];

export const engineeringCapabilities = [
  {
    title: "Remote Full-Stack Development",
    description:
      "At Project 19, we provide end-to-end engineering that bridges the gap between vision and deployment. We take full ownership of the development lifecycle—architecting intuitive front ends in React and Angular while building heavy-lifting back-end logic with Node.js and .NET. To ensure industry-leading turnaround, we leverage an AI-integrated development platform that accelerates everything from initial scaffolding to automated testing and continuous delivery. By combining cloud-native infrastructure with AI-augmented workflows, we deliver enterprise-grade solutions with startup-level velocity.",
  },
  {
    title: "POC and MVP Development to Test Your Concept",
    description:
      "Before committing to full-scale production, we help you de-risk your investment through strategic Proof of Concept (PoC) and Minimum Viable Product (MVP) development. We don't just build features; we validate your core business requirements and pressure-test feasibility to ensure a product-market fit. By integrating AI-driven development tools, we drastically compress the build phase. This allows us to provide product teams with high-fidelity MVPs in record time, enabling you to gather real-world user feedback and iterate within an Agile framework—minimizing impediments and maximizing ROI.",
  },
];

export const approachSteps = [
  {
    step: "01",
    title: "Project Discovery ",
    description:
      "We start by understanding your pain points, constraints, and goals. Just honest conversations about what's holding you back.", 
  },
  {
    step: "02",
    title: "Analysis & Design",
    description:
      "Together we define a roadmap that fits your SOW, budget, and timeline, focusing on high impact wins first so you see value quickly.", 
  },
  {
    step: "03",
    title: "Build & Deliver",
    description:
      "Our team executes with agile methodology at every stage. We have routine check ins, development updates, and testing phases so there are zero surprises along the way.",
  },
  {
    step: "04",
    title: "Post Prod Support",
    description:
      "We stay engaged after launch. As your business evolves, we adapt our solutions so technology keeps enabling your growth.",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "unified-workplace-portal",
    client: "Consolidated Digital Workplace",
    industry: "Enterprise Communication",
    challenge:
      "A major U.S. airline's workforce was split across outdated SharePoint 2013 systems, leaving deskless field staff disconnected from corporate teams.",
    solution:
      "Project 19 executed a two-stage overhaul—SharePoint 2016 core migration plus Workvivo deployment—to create a unified, mobile-first digital workplace.",
    results: [
      "Thousands of deskless employees gained mobile access to tools, updates, and compliance documents",
      "Interactive social engagement replaced static intranet content, driving daily active usage",
      "Modernized search and a simplified CMS eliminated content bottlenecks and outdated results",
    ],
  },
  {
    slug: "custom-order-processing-rules-engine",
    client: "Custom Order Processing Rules Engine",
    industry: "E-Commerce",
    challenge:
      "A seasonal e-commerce retailer needed zone-specific delivery scheduling, but legacy on-premise systems lacked APIs and offered no sandbox for safe testing.",
    solution:
      "Project 19 built a custom middleware rules engine with hybrid data-access layers and a recreated staging environment to automate seasonal fulfillment.",
    results: [
      "100% automation of seasonal order logic eliminated manual data-entry errors",
      "Orders are routed and released to fulfillment centers automatically by zone schedule",
      "Fewer delivery mix-ups improved customer satisfaction and brand loyalty",
    ],
  },
  {
    slug: "jupiter-app-customer-support",
    client: "Jupiter App",
    industry: "E-Commerce",
    challenge:
      "Support agents constantly switched between Zendesk and Shipworks to handle order changes and manual refunds, creating backlogs during peak sales.",
    solution:
      "Project 19 built Jupiter, a custom Zendesk widget that connects to Shipworks for real-time order management, live updates, and automated refunds.",
    results: [
      "Ticket resolution accelerated with 100% accuracy and no cross-platform data re-entry",
      "Agents handle order changes autonomously within their native Zendesk environment",
      "Shipworks access restricted to Jupiter, improving operational security",
    ],
  },
  {
    slug: "smartmatch-platform",
    client: "Seamless Matchmaking Platform",
    industry: "CRM Integration",
    challenge:
      "A faith-based matchmaking platform's member profiles lived in a siloed web portal, forcing matchmakers to manually copy data into SmartMatch App.",
    solution:
      "Project 19 built a real-time sync engine connecting the public portal to SmartMatch App, automating onboarding, events, media mapping, and status webhooks.",
    results: [
      "100% automation of profile onboarding eliminated manual data entry errors",
      "New members enter the active matching pool immediately upon registration",
      "Client satisfaction and retention improved through faster introductions and real-time updates",
    ],
  },
  {
    slug: "unified-ecommerce-data-hub",
    client: "Unified Data Hub & BI",
    industry: "Data Integration",
    challenge:
      "ShopSite, Shipworks, and SKUVault ran in isolation with no shared view of clients, orders, inventory, or shipping data.",
    solution:
      "Project 19 designed a centralized data hub with ETL pipelines, Tableau executive dashboards, and Avalara tax compliance integration.",
    results: [
      "2x increase in order fulfillment and shipping efficiency after KPI visibility exposed process flaws",
      "Near-real-time executive dashboards across sales, fulfillment, inventory, and supply chain",
      "Automated Avalara tax pipelines replaced manual monthly and quarterly filing workflows",
    ],
  },
  {
    slug: "nonprofit-peer-to-peer-fundraising",
    client: "Peer-to-Peer Fundraising Campaign",
    industry: "Non-Profit",
    challenge:
      "A non-profit needed to maximize giving-season donations but lacked a platform for supporters to run personalized fundraising pages.",
    solution:
      "Project 19 designed and built a peer-to-peer fundraising system where supporters create personal pages, set goals, and drive engagement across their networks.",
    results: [
      "Delivered one of the most successful fundraising campaigns in the organization's history",
      "Organization met its targeted fundraising goals for the giving season",
      "Personalized pages generated a deeper level of supporter engagement",
    ],
  },
];

export const faqs = [
  {
    question: "What size businesses does Project 19 work with?",
    answer:
      "We specialize in small to medium local businesses, typically teams of 5 to 200 people. If you have limited budget, stretched expertise, or delivery challenges, we're built for exactly that situation.",
  },
  {
    question: "How is Project 19 different from a typical agency?",
    answer:
      "We're a partner, not a vendor. Your success directly impacts ours, so we're invested in outcomes, not just billable hours. We communicate honestly, set realistic expectations, and deliver reliably.",
  },
  {
    question: "What does a free discovery call include?",
    answer:
      "A 30-minute call where we learn about your business, discuss your biggest pain points, and outline how we might help. With the services we provide, we will outline your best solution. Then, we will give you the space and time you need to decide if we're a good fit for your business.",
  },
  {
    question: "Can you work within a limited budget?",
    answer:
      "Absolutely. We prioritize high-impact work first and offer flexible engagement models from project-based work to dedicated team as a services, so you get real value without overextending.",
  },
  {
    question: "Do you only work with local businesses?",
    answer:
      "We focus on local and regional businesses because we believe in building close, dependable partnerships. That said, our team works remotely, so geography is never a barrier to great collaboration.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Our team is made up of experienced developers and engineers, allowing us to work with a wide range of technologies. We're technology-agnostic so we choose the right tools for your needs. From custom software and cloud platforms to BI tools, AI solutions, and modern web frameworks, we match the stack to your goals, not the other way around.",
  },
];
