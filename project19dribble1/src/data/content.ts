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

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Client Stories", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
];

export const values = [
  {
    title: "Results",
    description:
      "We measure success by outcomes that matter to your business — revenue growth, operational efficiency, and problems solved.",
  },
  {
    title: "Honesty",
    description:
      "Transparent communication, realistic timelines, and straight talk about what will actually move the needle for your budget.",
  },
  {
    title: "Reliability",
    description:
      "When we commit, we deliver. You get a dependable partner who shows up consistently, not a vendor who disappears after the sale.",
  },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Custom Software Development",
    description:
      "Tailored applications built around how your business actually works — not the other way around.",
    icon: Code2,
  },
  {
    title: "System & Data Integrations",
    description:
      "Connect disconnected tools and data sources so your team works from a single source of truth.",
    icon: Link2,
  },
  {
    title: "Business Intelligence & Reporting",
    description:
      "Turn raw data into dashboards and reports that drive smarter, faster decisions.",
    icon: BarChart3,
  },
  {
    title: "Corporate Intranets",
    description:
      "Internal platforms that keep teams aligned, informed, and productive across locations.",
    icon: Monitor,
  },
  {
    title: "Web Design & Development",
    description:
      "Modern, performant websites that represent your brand and convert visitors into customers.",
    icon: Globe,
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive interfaces that reduce friction for your customers and your internal teams.",
    icon: Layout,
  },
  {
    title: "Digital Marketing",
    description:
      "Targeted campaigns and strategies that help local businesses compete and grow online.",
    icon: Megaphone,
  },
  {
    title: "Cloud-Based Solutions",
    description:
      "Scalable, secure cloud infrastructure that grows with you without enterprise-level overhead.",
    icon: Cloud,
  },
  {
    title: "Dedicated Developer / Team",
    description:
      "Embedded talent that works as an extension of your team — flexible, remote, and fully committed.",
    icon: Users,
  },
  {
    title: "AI Solutions",
    description:
      "Practical AI implementations that automate workflows and unlock insights without the hype.",
    icon: Brain,
  },
];

export const approachSteps = [
  {
    step: "01",
    title: "Listen & Discover",
    description:
      "We start by understanding your pain points, constraints, and goals. No assumptions — just honest conversations about what's holding you back.",
  },
  {
    step: "02",
    title: "Plan & Prioritize",
    description:
      "Together we define a roadmap that fits your budget and timeline, focusing on high-impact wins first so you see value quickly.",
  },
  {
    step: "03",
    title: "Build & Deliver",
    description:
      "Our team executes with transparency at every stage. Regular check-ins, clear milestones, and no surprises along the way.",
  },
  {
    step: "04",
    title: "Support & Grow",
    description:
      "We stay engaged after launch. As your business evolves, we adapt our solutions so technology keeps enabling your growth.",
  },
];

export type CaseStudy = {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metric: string;
  metricLabel: string;
};

export const caseStudies: CaseStudy[] = [
  {
    client: "Regional Logistics Co.",
    industry: "Transportation",
    challenge:
      "Disconnected dispatch, billing, and tracking systems caused delays and revenue leakage across three locations.",
    solution:
      "Built a unified operations platform with real-time tracking, automated invoicing, and a driver mobile app.",
    results: [
      "Dispatch time reduced by 40%",
      "Billing errors dropped to near zero",
      "Single dashboard for all locations",
    ],
    metric: "40%",
    metricLabel: "Faster dispatch",
  },
  {
    client: "Harborview Medical Group",
    industry: "Healthcare",
    challenge:
      "Patient scheduling, records, and internal communication lived in separate tools, creating bottlenecks for a growing practice.",
    solution:
      "Designed a custom intranet with integrated scheduling, secure document sharing, and staff communication channels.",
    results: [
      "Patient wait times cut by 25%",
      "Staff onboarding time halved",
      "HIPAA-compliant from day one",
    ],
    metric: "25%",
    metricLabel: "Shorter wait times",
  },
  {
    client: "Summit Retail Partners",
    industry: "Retail",
    challenge:
      "No visibility into inventory, sales trends, or marketing ROI across five storefronts and an e-commerce channel.",
    solution:
      "Deployed BI dashboards, POS integrations, and a targeted digital marketing program with measurable KPIs.",
    results: [
      "Inventory accuracy up to 98%",
      "Online revenue grew 3x in 12 months",
      "Marketing spend optimized by 30%",
    ],
    metric: "3x",
    metricLabel: "Online revenue growth",
  },
];

export const faqs = [
  {
    question: "What size businesses does Project 19 work with?",
    answer:
      "We specialize in small to medium local businesses — typically teams of 5 to 200 people. If you have limited budget, stretched expertise, or delivery challenges, we're built for exactly that situation.",
  },
  {
    question: "How is Project 19 different from a typical agency?",
    answer:
      "We're a partner, not a vendor. Your success directly impacts ours, so we're invested in outcomes — not just billable hours. We communicate honestly, set realistic expectations, and deliver reliably.",
  },
  {
    question: "What does a free consultation include?",
    answer:
      "A 30-minute call where we learn about your business, discuss your biggest pain points, and outline how we might help. There's no obligation — just a clear, honest conversation about whether we're the right fit.",
  },
  {
    question: "Can you work within a limited budget?",
    answer:
      "Absolutely. We prioritize high-impact work first and offer flexible engagement models — from project-based work to dedicated team-as-a-service — so you get real value without overextending.",
  },
  {
    question: "Do you only work with local businesses?",
    answer:
      "We focus on local and regional businesses because we believe in building close, dependable partnerships. That said, our team works remotely, so geography is never a barrier to great collaboration.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We're technology-agnostic and choose the right tools for your needs — from custom software and cloud platforms to BI tools, AI solutions, and modern web frameworks. We match the stack to your goals, not the other way around.",
  },
];
