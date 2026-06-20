export type AiUseCase = {
  title: string;
  description: string;
};

export type AiIndustry = {
  name: string;
  intro: string;
  summaryLine?: string;
  useCases: AiUseCase[];
};

export const aiIndustryIntro =
  "Project 19 builds AI-powered solutions for businesses across e-commerce, healthcare, finance, insurance, real estate, logistics, SaaS, HR, retail, and professional services. Our AI agents are designed to solve real business problems, automate repetitive workflows, and help teams make faster, data-driven decisions.";

export const aiIndustries: AiIndustry[] = [
  {
    name: "E-Commerce Use Cases",
    intro:
      "Project 19 helps e-commerce businesses automate customer support, product recommendations, returns, and inventory workflows with AI-powered applications.",
    useCases: [
      {
        title: "AI Customer Support Agent",
        description:
          "Answers customer questions about orders, shipping, returns, refunds, and product details. Reduces repetitive support tickets and helps customers get faster responses.",
      },
      {
        title: "Product recommendation assistant",
        description:
          "Suggests products based on customer preferences, browsing behavior, past purchases, or quiz answers. Helps increase conversions and average order value.",
      },
      {
        title: "Returns and refund automation",
        description:
          "Reviews return requests, checks return policies, confirms order details, and routes exceptions to a human. Makes the return process faster for both customers and support teams.",
      },
      {
        title: "Inventory monitoring agent",
        description:
          "Tracks low-stock items, delayed shipments, and fast-selling products. Alerts teams before inventory problems affect customers.",
      },
      {
        title: "Review and sentiment analysis",
        description:
          "Analyzes product reviews, complaints, and customer feedback. Identifies common product issues or opportunities for improvement.",
      },
    ],
  },
  {
    name: "Healthcare Use Cases",
    intro:
      "Project 19 builds healthcare AI solutions that streamline administrative workflows, reduce manual paperwork, and improve patient communication.",
    useCases: [
      {
        title: "Patient intake form processing",
        description:
          "Extracts information from digital or uploaded forms. Organizes patient details before appointments.",
      },
      {
        title: "Appointment support assistant",
        description:
          "Answers common questions about scheduling, preparation instructions, office policies, and required documents. Helps reduce phone calls to front-desk staff.",
      },
      {
        title: "Healthcare admin workflow automation",
        description:
          "Routes patient requests, billing questions, insurance questions, and follow-up tasks to the right team. Helps administrative staff manage high-volume work.",
      },
      {
        title: "Document summarization",
        description:
          "Summarizes long patient forms, referral documents, insurance letters, or administrative records. Saves time for staff reviewing documents.",
      },
      {
        title: "Internal knowledge assistant",
        description:
          "Helps employees quickly find office policies, compliance rules, procedures, and training information.",
      },
    ],
  },
  {
    name: "Finance Use Cases",
    intro:
      "Project 19 helps financial teams automate reporting, invoice processing, fraud detection, and compliance workflows using AI-powered systems.",
    useCases: [
      {
        title: "AI financial reporting agent",
        description:
          "Generates summaries of revenue, expenses, cash flow, and business performance. Helps finance teams explain what changed and why.",
      },
      {
        title: "Invoice processing automation",
        description:
          "Extracts invoice numbers, vendor names, payment amounts, due dates, and tax details. Reduces manual data entry and approval delays.",
      },
      {
        title: "Fraud and anomaly detection",
        description:
          "Flags unusual transactions, duplicate payments, suspicious account activity, or unexpected spending patterns. Helps teams catch issues earlier.",
      },
      {
        title: "Compliance support assistant",
        description:
          "Searches policies, regulations, and internal documents. Helps employees find answers faster without digging through files.",
      },
      {
        title: "Budget forecasting tools",
        description:
          "Uses historical financial data to forecast costs, revenue, or future demand. Supports better planning and decision-making.",
      },
    ],
  },
  {
    name: "Insurance Use Cases",
    intro:
      "Project 19 develops AI applications that help insurance companies review claims, search policies, detect risk, and improve customer support.",
    useCases: [
      {
        title: "Claims processing agent",
        description:
          "Reviews claim forms, extracts key information, and checks for missing documents. Helps claims teams process cases faster.",
      },
      {
        title: "Policy search assistant",
        description:
          "Lets employees or customers ask questions about policy coverage in plain English. Finds relevant policy details quickly.",
      },
      {
        title: "Document review automation",
        description:
          "Reads forms, photos, PDFs, and supporting documents. Organizes claim information into structured summaries.",
      },
      {
        title: "Fraud risk flagging",
        description:
          "Identifies unusual claim patterns, duplicate claims, or inconsistent information. Sends suspicious cases for manual review.",
      },
      {
        title: "Customer support agent",
        description:
          "Answers common questions about coverage, claim status, documents needed, and next steps.",
      },
    ],
  },
  {
    name: "Real Estate Use Cases",
    intro:
      "Project 19 builds real estate AI tools that help teams manage listings, communicate with clients, summarize documents, and analyze market data.",
    useCases: [
      {
        title: "Property search assistant",
        description:
          "Helps buyers or renters find properties based on budget, location, bedrooms, amenities, and preferences. Creates a more personalized search experience.",
      },
      {
        title: "Listing description generator",
        description:
          "Writes property descriptions, social captions, email copy, and ad content. Saves agents time while keeping listings professional.",
      },
      {
        title: "Client communication assistant",
        description:
          "Answers questions about available listings, showing times, property details, and application steps. Helps real estate teams respond faster.",
      },
      {
        title: "Document summarization",
        description:
          "Summarizes leases, applications, inspection reports, and property agreements. Helps clients and agents understand key terms faster.",
      },
      {
        title: "Market insight dashboard",
        description:
          "Tracks pricing trends, neighborhood demand, property performance, and lead activity. Helps teams make better sales and investment decisions.",
      },
    ],
  },
  {
    name: "Logistics Use Cases",
    intro:
      "Project 19 helps logistics companies automate shipment tracking, inventory monitoring, route planning, and exception management.",
    useCases: [
      {
        title: "Shipment tracking assistant",
        description:
          "Answers customer or internal questions about delivery status, delays, and estimated arrival times. Connects with tracking systems and logistics databases.",
      },
      {
        title: "Route optimization tool",
        description:
          "Suggests efficient delivery routes based on distance, traffic, cost, and delivery priorities. Helps reduce delays and transportation costs.",
      },
      {
        title: "Inventory and warehouse monitoring",
        description:
          "Tracks stock levels, shipment movement, warehouse capacity, and reorder needs. Alerts teams about shortages or bottlenecks.",
      },
      {
        title: "Vendor and carrier management",
        description:
          "Compares supplier performance, shipping times, costs, and reliability. Helps businesses choose better logistics partners.",
      },
      {
        title: "Exception management agent",
        description:
          "Flags late shipments, missing documents, damaged goods, or delivery issues. Routes problems to the right team automatically.",
      },
    ],
  },
  {
    name: "Professional Services Use Cases",
    intro:
      "Project 19 builds AI tools for professional service firms that automate proposals, reporting, project management, and knowledge search.",
    useCases: [
      {
        title: "Proposal and RFP response agent",
        description:
          "Reads RFPs, identifies requirements, and drafts proposal sections. Reuses approved company content, case studies, and service descriptions.",
      },
      {
        title: "Client reporting assistant",
        description:
          "Creates weekly or monthly client reports from project data, dashboards, and notes. Saves teams time on manual reporting.",
      },
      {
        title: "Internal knowledge assistant",
        description:
          "Helps employees search past projects, templates, SOPs, case studies, and client materials. Makes company knowledge easier to access.",
      },
      {
        title: "Meeting summary and task agent",
        description:
          "Summarizes client calls, extracts action items, and updates project management tools. Keeps projects organized.",
      },
      {
        title: "Content and sales enablement agent",
        description:
          "Turns case studies, project results, and service details into emails, landing pages, and sales decks."
      },
    ],
  },
  {
    name: "SaaS / Tech Companies Use Cases",
    intro:
      "Project 19 helps SaaS and tech companies build AI copilots, support agents, analytics tools, and intelligent product features.",
    useCases: [
      {
        title: "AI product copilot",
        description: "Adds an AI assistant directly inside a SaaS platform. Helps users search, summarize, generate, or complete tasks inside the product.",
      },
      {
        title: "Customer support agent",
        description:
          "Answers product questions, troubleshooting steps, billing questions, and onboarding guidance. Reduces support load for software teams.",
      },
      {
        title: "Developer productivity agent",
        description:
          "Helps with documentation, code review, test generation, bug summaries, and technical explanations. Supports engineering teams without replacing developers.",
      },
      {
        title: "User behavior analytics",
        description:
          "Tracks product usage, churn signals, feature adoption, and customer pain points. Helps product teams make better roadmap decisions.",
      },
      {
        title: "Onboarding assistant",
        description:
          "Guides new users through setup, product features, and best practices. Improves activation and user retention.",
      },
    ],
  },
  {
    name: "HR / Staffing Use Cases",
    intro:
      "Project 19 builds AI solutions for HR and staffing teams that improve recruiting, onboarding, employee support, and policy search.",
    useCases: [
      {
        title: "Resume screening assistant",
        description:
          "Summarizes resumes and compares candidates to job requirements. Helps recruiters review applicants faster.",
      },
      {
        title: "Recruiting outreach agent",
        description:
          "Drafts personalized candidate messages, follow-ups, and interview invitations. Supports high-volume recruiting.",
      },
      {
        title: "Interview preparation agent",
        description: "Generates role-specific interview questions. Summarizes candidate profiles before interviews.",
      },
      {
        title: "Employee onboarding agent",
        description:
          "Answers questions about benefits, payroll, policies, tools, and training. Helps new hires get settled faster.",
      },
      {
        title: "HR policy assistant",
        description:
          "Searches employee handbooks, benefits documents, and internal policies. Reduces repetitive HR questions.",
      },
    ],
  },
  {
    name: "Retail / CPG Use Cases",
    intro:
      "CPG means consumer packaged goods, like food, drinks, beauty products, cleaning products, and household goods. Project 19 helps retail and CPG companies use AI for demand forecasting, customer insights, inventory planning, and sales performance analysis.",
    useCases: [
      {
        title: "Demand forecasting tool",
        description:
          "Predicts product demand using sales history, seasonality, promotions, and market trends. Helps businesses avoid overstocking or running out of products.",
      },
      {
        title: "Retail analytics dashboard",
        description:
          "Tracks sales, product performance, store performance, and customer trends. Helps teams make better merchandising decisions.",
      },
      {
        title: "Quality control assistant",
        description:
          "Reviews product feedback, return reasons, and complaint patterns. Identifies quality issues earlier.",
      },
      {
        title: "Promotion planning agent",
        description:
          "Analyzes past campaigns and recommends discounts, bundles, or timing. Helps improve marketing and sales performance.",
      },
      {
        title: "Customer insight agent",
        description:
          "Summarizes reviews, surveys, social media comments, and support tickets. Helps brands understand what customers like or dislike.",
      },
    ],
  },
];

export const aiHowWeHelp = [
  "Design the workflow",
  "Connect existing tools and data",
  "Build the AI agent or application",
  "Test the system with real business scenarios",
  "Add human review where needed",
  "Deploy and improve over time",
];

export const aiOutcomes = [
  "Faster response times",
  "Less manual work",
  "Better customer experience",
  "More accurate reporting",
  "Improved operational efficiency",
];
