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

export const services: Service[] = [
  {
    title: "Custom Software Development",
    description:
      "We build custom software that is tailored to your business's specific needs and workflows.",
    icon: Code2,
  },
  {
    title: "System & Data Integrations",
    description:
      "We integrate data from different systems and tools to create a seamless experience for your team.",
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
    title: "Strategy & Discover",
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
};

export const caseStudies: CaseStudy[] = [
  {
    client: "Custom Order Processing Rules Engine",
    industry: "E-Commerce & Logistics",
    challenge:
      "A seasonal e-commerce retailer needed complex delivery scheduling based on product type, location, and seasonality. Their existing fulfillment software lacked the flexibility to automate these rules, and critical systems had limited or no API access.",
    solution:
      "Built a custom middleware rules engine that automatically evaluates orders, assigns fulfillment schedules, and integrates with legacy inventory and shipping platforms through secure database connections.",
    results: [
      "100% automation of seasonal order processing",
      "Reduced fulfillment errors through automated routing",
      "Improved customer satisfaction by eliminating delivery mix-ups",
    ],
  },
  {
    client: "Jupiter App for Customer Support",
    industry: "E-Commerce",
    challenge:
      "Customer support agents had to switch between Zendesk and Shipworks to make order changes, verify inventory, and process refunds. This manual workflow slowed ticket resolution and created bottlenecks during peak sales periods.",
    solution:
      "Developed Jupiter, a custom Zendesk widget that integrates directly with Shipworks, allowing agents to view orders, make updates, and process refunds without leaving their support dashboard.",
    results: [
      "Faster ticket resolution through automated order management",
      "Customer support agents can handle order changes independently",
      "Improved security by removing the need for direct Shipworks access",
    ],
  },
  {
    client: "SmartMatch Platform",
    industry: "Relationship Services & CRM Integration",
    challenge:
      "A growing faith-based matchmaking platform relied on separate systems for member registration and matchmaker operations. Staff had to manually transfer profiles, update statuses, and manage member data across multiple platforms, creating delays and limiting scalability.",
    solution:
      "Built a real-time integration between the public matchmaking portal and SmartMatch App, automatically syncing member profiles, preferences, event registrations, and account status updates between both systems",
    results: [
      "100% automation of profile onboarding and data synchronization",
      "New members enter the matchmaking pool immediately after registration",
      "Higher member engagement through faster matches and real-time updates",
    ],
  },
  {
    client: "Digital Workplace Portal",
    industry: "Enterprise Communication & Employee Engagement",
    challenge:
      "A major U.S. airline relied on outdated intranet systems that fragmented communication between corporate teams and frontline employees. Critical resources, tools, and updates were spread across multiple platforms, making collaboration and engagement difficult.",
    solution:
      "Modernized the airline’s digital workplace by upgrading its SharePoint infrastructure and deploying a unified Workvivo portal. The new platform centralized communications, content, and employee resources in a mobile-first experience accessible to both office and field staff.",
    results: [
      "Unified thousands of employees through a single digital workplace",
      "Increased engagement with mobile access and social collaboration tools",
      "Improved content management and search accuracy across the organization",
    ],
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
