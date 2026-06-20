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
  title: string;
  description: string;
  icon: LucideIcon;
};

export { services } from "./services";

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
    client: "Workvivo Portal",
    industry: "Enterprise Communication",
    challenge:
      "A major U.S. airline relied on outdated intranet systems that fragmented communication between employees.",
    solution:
      "Upgrade sharepoint 2013 to sharepoint 2016 and migrate to Workvivo to unify 5000+ employees.",
    results: [
      "Unified 5000+ employees through a single digital workplace",
      "Increased engagement with mobile access and social collaboration tools",
      "Improved content management and search accuracy across the organization",
    ],
  },
  {
    slug: "custom-order-processing-rules-engine",
    client: "Order Processing Engine",
    industry: "E-Commerce",
    challenge:
      "A seasonal e-commerce retailer needed complex delivery scheduling based on product type, location, and seasonality.",
    solution:
      "Built a custom middleware rules engine to automate seasonal order processing and integrate with internal platforms.",
    results: [
      "100% automation of seasonal order processing",
      "Reduced fulfillment errors through automated routing",
      "Improved customer satisfaction by eliminating delivery mix-ups",
    ],
  },
  {
    slug: "jupiter-app-customer-support",
    client: "Jupiter App",
    industry: "E-Commerce",
    challenge:
      "Manual workflow slowed ticket resolution and created bottlenecks during peak sales periods.",
    solution:
      "Custom Zendesk widget that integrates directly with Shipworks, cutting customer support time by 40%.",
    results: [
      "Faster ticket resolution through automated order management",
      "Customer support agents can handle order changes independently",
      "Improved security by removing the need for direct Shipworks access",
    ],
  },
  {
    slug: "smartmatch-platform",
    client: "Matchmaking Platform",
    industry: "CRM Integration",
    challenge:
      "Manual transfer of profiles, status updates, and data management created delays and limited scalability.",
    solution:
      "Built automaation and integration between the public matchmaking portal and SmartMatch App.",
    results: [
      "100% automation of profile onboarding and data synchronization",
      "New members enter the matchmaking pool immediately after registration",
      "Higher member engagement through faster matches and real-time updates",
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
    question: "What does a free consultation include?",
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
      "We focus on local and regional businesses because we believe in building close, dependable partnerships. That said, our team works remotely, so geography is never a barrier to great collaboration. We can work with you depending on your needs.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Our team is made up of experienced developers and engineers, allowing us to work with a wide range of technologies. We're technology-agnostic so we choose the right tools for your needs. From custom software and cloud platforms to BI tools, AI solutions, and modern web frameworks, we match the stack to your goals, not the other way around.",
  },
];
