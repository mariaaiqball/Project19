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
  "At Project 19, we provide end to end engineering that bridges the gap between vision and deployment. We take full ownership of the development lifecycle. To ensure industry leading turnaround, we leverage an AI integrated development platform that accelerates everything from initial scaffolding to automated testing and continuous delivery. By combining cloud native infrastructure with AI augmented workflows, we deliver enterprise grade solutions with startup level velocity.",
  "Before committing to full scale production, we help lower your risk of investment through Proof of Concepts (PoC) and Minimum Viable Products (MVP). We build features that validate your core business requirements and pressure test feasibility to ensure a product market fit. By integrating AI driven development tools, we drastically compress the build phase. This allows us to provide product teams with high fidelity MVPs in record time, enabling you to gather real world user feedback and iterate within an Agile framework, minimizing impediments and maximizing ROI."
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
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "unified-workplace-portal",
    client: "Digital Workplace Revamp",
    industry: "Enterprise Communication",
  },
  {
    slug: "custom-order-processing-rules-engine",
    client: "Custom Order Processing Rules Engine",
    industry: "E-Commerce",
  },
  {
    slug: "jupiter-app-customer-support",
    client: "Zendesk & Shipworks Integration ",
    industry: "Customer Support",
  },
  {
    slug: "smartmatch-platform",
    client: "Tri-State Matchmaking Service",
    industry: "Non-Profit",
  },
  {
    slug: "unified-ecommerce-data-hub",
    client: "Centralized Data Hub & Reporting",
    industry: "E-Commerce and Logistics",
  },
  {
    slug: "nonprofit-peer-to-peer-fundraising",
    client: "Crowdfunding Campaign",
    industry: "Non-Profit",
  },
];

export const faqs = [
  {
    question: "Who is Project 19?",
    answer:
      "Project 19 is a full service software development agency that engineers business's vision to deployment. We translate your biggest technical challenges into a roadmap that fits your budget and timeline. Our expertise spans from AI applications and agents to digital workplaces, system integrations, and custom software development.",
  },
  {
    question: "What industries do we work with?",
    answer:
      "We are industry agnostic. Our team has the technical versatility to serve a wide range of sectors, including finance, healthcare, ecommerce, logistics, education, and enterprise corporate environments.",
  },
  {
    question: "What is our typical project onboarding process?",
    answer:
      "We follow a structured, collaborative onboarding process. Discovery & Consultation: We discuss your business goals, challenges, and project requirements. Proposal & Strategy: We present a detailed roadmap, technology stack recommendation, timeline, and cost estimate. Kickoff: We introduce your dedicated project team and set up communication channels (e.g., Slack, Jira) to begin development.",
  },
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
      "A 30 minute call where we learn about your business, discuss your biggest pain points, and outline how we might help. With the services we provide, we will outline your best solution. Then, we will give you the space and time you need to decide if we're a good fit for your business.",
  },
  {
    question: "Can you work within a limited budget?",
    answer:
      "Absolutely. We prioritize high impact work first and offer flexible engagement models from project based work to dedicated team as a services, so you get real value without overextending.",
  },
  {
    question: "Do you only work with local businesses?",
    answer:
      "We focus on local and regional businesses because we believe in building close, dependable partnerships. That said, our team works remotely, so geography is never a barrier to great collaboration.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Our team is made up of experienced developers and engineers, allowing us to work with a wide range of technologies. We're technology agnostic so we choose the right tools for your needs. From AI agents, AI applications, and data analystics to custom software, cloud platforms, and modern web frameworks, we match the stack to your goals, not the other way around.",
  },
];
