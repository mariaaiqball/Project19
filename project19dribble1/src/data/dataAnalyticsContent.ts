import type { ServiceContentSection } from "./serviceContentTypes";

export const dataAnalyticsOverview =
  "In a world drowning in information, the winners are those who find clarity. Project 19 provides small and mid sized businesses with the same high level BI capabilities used by the Fortune 500, transforming raw data into automated intelligence pipelines.";

export const dataAnalyticsSections: ServiceContentSection[] = [
  {
    title: "The ETL Excellence: Our Data Process",
    intro:
      "A report is only as reliable as its foundation. We follow a rigorous Extract, Transform, Load methodology to ensure 100% integrity:",
    steps: [
      {
        title: "Extraction",
        description:
          "Securely pulling data from APIs, SQL/NoSQL databases, legacy systems, and SaaS apps.",
      },
      {
        title: "Hygiene & Transformation",
        description:
          "Rigorous cleaning and normalization to eliminate duplicates and skewed insights.",
      },
      {
        title: "Loading",
        description:
          "Architecting high-performance warehouses (Snowflake, BigQuery, Redshift) for lightning-fast querying.",
      },
    ],
  },
  {
    title: "World-Class Visualization & Analytics",
    intro:
      "We leverage a modern data stack to turn complex numbers into intuitive, interactive stories.",
    highlights: [
      {
        title: "Standard-Setters",
        description:
          "Power BI for Microsoft ecosystem integration and Tableau for complex, deep-dive data storytelling.",
      },
      {
        title: "Next-Gen Tools",
        description:
          "Looker for unified data modeling and Sigma for cloud-scale analytics with a spreadsheet-like feel.",
      },
      {
        title: "AI-Driven Insights",
        description:
          "ThoughtSpot integration allows your team to query data using natural language for instant visual answers.",
      },
    ],
  },
  {
    title: "Why BI Matters for Your Growth",
    highlights: [
      {
        title: "Identify Levers",
        description:
          "Pinpoint the exact products and regions driving your profit.",
      },
      {
        title: "Predictive Modeling",
        description:
          'Shift from "what happened" to AI-driven "what will happen."',
      },
      {
        title: "Automated Truth",
        description:
          "Eliminate manual Excel updates with real-time, self-refreshing dashboards.",
      },
    ],
  },
  {
    title: "Our BI & Data Tech Stack",
    techStack: [
      {
        category: "Primary BI Platforms",
        tools: "Power BI, Tableau, Looker",
      },
      {
        category: "Modern Analytics",
        tools: "ThoughtSpot, Sigma, Mode",
      },
      {
        category: "Data Warehousing",
        tools: "Snowflake, Fabric, AWS Redshift",
      },
      {
        category: "Data Pipelines",
        tools: "Fivetran, dbt (data build tool), Airflow",
      },
      {
        category: "Self-Service Reporting",
        tools: "Google Looker Studio",
      },
    ],
  },
];

export const dataAnalyticsCtaHeading =
  "Turn raw data into the clarity your leadership needs to grow.";
