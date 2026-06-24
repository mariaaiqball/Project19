export type CaseStudyStageHighlight = {
  title: string;
  description: string;
};

export type CaseStudyStage = {
  title: string;
  description: string;
  highlights?: CaseStudyStageHighlight[];
};

export type CaseStudyChallengeItem = {
  title: string;
  description: string;
};

export type CaseStudyDetailContent = {
  slug: string;
  heroImage?: string;
  heroImageAlt?: string;
  category: string;
  headline: string;
  subtitle: string;
  executiveSummary: string[];
  technologyInsight?: {
    title: string;
    paragraphs: string[];
  };
  challenge: {
    title: string;
    intro: string;
    items: CaseStudyChallengeItem[];
  };
  solution: {
    title: string;
    intro: string;
    stages: CaseStudyStage[];
  };
  impact: {
    title: string;
    intro: string;
    outcomes: string[];
  };
  takeaway: string;
};

export const caseStudyDetails: Record<string, CaseStudyDetailContent> = {
  "unified-workplace-portal": {
    slug: "unified-workplace-portal",
    heroImage: "/assets/case-studies/workvivo-digital-workplace.png",
    heroImageAlt:
      "Workvivo digital workplace platform displayed on desktop and mobile, showing employee activity feed and people directory",
    category: "Digital Workplace Revamp",
    headline: "Connecting the Skies: Consolidated Digital Workplace Portal for a Major US Airline",
    subtitle:
      "How Project 19 executed a multiphase enterprise migration, combining a SharePoint core upgrade with Workvivo to unify distributed deskless and corporate workers.",
    executiveSummary: [
      "A global airfrieght leader in the United States operated a sprawling network of corporate staff and deskless on field personnel including pilots, flight attendants, and ground crew. They faced a severe internal communications crisis, where the company's workforce infrastructure was segregated across multiple disjointed digital systems, operating on a heavily outdated intranet that failed to connect isolated operational teams. The airline required a centralized, unified portal to act as a single entry point for all organizational content, tools, and social engagement.",
      "Project 19 was selected to design and execute a comprehensive, multiphase infrastructure overhaul. Our team successfully modernized the airline's communication and infrastructure by structuring the project into two distinct strategic stages. We upgraded their core data layers to SharePoint 2016 and deployed Workvivo as an interactive employee engagement layer. Project 19 built a robustly integrated, digital workplace on both web and mobile platforms that bridged the gap between the corporate office and the flight line.",
    ],
    technologyInsight: {
      title: "Technology Insight: What is Workvivo?",
      paragraphs: [
        "Workvivo is an employee engagement and digital workplace platform designed to centralize internal communications, corporate culture, and team collaboration within a modern, social media style interface.",
        "Engineered explicitly to boost organizational alignment, it provides a vibrant activity feed, native mobile accessibility, and tools for top management strategy streaming. Project 19 utilized Workvivo as the highly interactive front end experience for the airline, sitting directly on top of secure enterprise document structures to maximize day to day employee adoption.",
      ],
    },
    challenge: {
      title: "The Challenge: A Fragmented, Isolated Workplace Network",
      intro:
        "A major airline relies on split second execution and strict operational compliance, making instant communication vital. However, the client's existing intranet infrastructure was crippled by legacy technical debt and operational silos, presenting nine critical challenges:",
      items: [
        {
          title: "Outdated Platform Infrastructure",
          description:
            "The central infrastructure was built on an obsolete, slow version of SharePoint (2013) that could no longer sustain enterprise grade integrations.",
        },
        {
          title: "Severe System Segregation",
          description:
            "Internal data, employee resources, and toolsets were scattered across completely different, unlinked platforms with no unified entry point.",
        },
        {
          title: "Inaccessible Field Workforce",
          description:
            "The system lacked a mobile first strategy, completely locking out critical on field, deskless employees such as pilots, flight crew, and terminal ground staff who rely entirely on mobile devices.",
        },
        {
          title: "Inefficient Content Management (CMS)",
          description:
            "The legacy CMS was highly technical and difficult to use. Posting basic updates required a bottlenecked, dedicated technical team to manually publish content.",
        },
        {
          title: "Broken Search Capabilities",
          description:
            "Enterprise indexing algorithms routinely failed, returning old, outdated, or broken search results to employees looking for vital operational manuals.",
        },
        {
          title: "Waning Employee Engagement",
          description:
            "Due to static layouts and poor delivery, personnel showed total disinterest in corporate news, announcements, and cultural updates.",
        },
        {
          title: "Missing Social & Peer Collaboration",
          description:
            "The digital environment lacked any interactive, peer to peer social mechanisms, leaving employees feeling isolated from their broader teams.",
        },
        {
          title: "Siloed Executive Communication",
          description:
            "Top management had no direct, frictionless channel to stream corporate strategy, leaving frontline staff disconnected from overarching corporate goals.",
        },
        {
          title: "Absence of Ecosystem Integration",
          description:
            "Seamless, real time integration with peripheral operational systems was nonexistent, requiring workers to log into several separate applications to finish simple tasks.",
        },
      ],
    },
    solution: {
      title: "The Solution: A Two Stage Enterprise Overhaul",
      intro:
        "Project 19 designed a strategic roadmap to replace the fragmented intranet with an enterprise digital workplace. The solution was deployed in two heavily managed engineering phases.",
      stages: [
        {
          title: "Stage 1: SharePoint 2013 to 2016 Upgrade",
          description:
            "The first phase focused entirely on upgrading the client's core data storage, document trees, and integration capabilities. Project 19 seamlessly migrated the airline's vast database from SharePoint 2013 to SharePoint 2016. This structural upgrade repaired broken enterprise search indexing, introduced reliable data structures, and established the scalable API framework necessary to safely feed data into external communication layers.",
        },
        {
          title: "Stage 2: Digital Workplace Consolidation & Workvivo Engagement Layer Deployment ",
          description:
            "With a clean database foundation established, Project 19 introduced Workvivo as the unified digital workspace engine. We integrated the platforms to feed SharePoint document repositories directly into Workvivo's front end environment, delivering a unified system experience.",
          highlights: [
            {
              title: "Consolidated Single Entry Point",
              description:
                "We consolidated the scattered platforms into a single, comprehensive portal, creating a unified entry point where corporate and frontline staff access tools, news, and compliance documents simultaneously.",
            },
            {
              title: "Mobile First Native Accessibility",
              description:
                "Project 19 optimized the Workvivo deployment for mobile app ecosystems, enabling pilots in the cockpit and ground crews on the tarmac to securely access company tools, shift updates, and manuals over cellular data networks.",
            },
            {
              title: "Decentralized, Simplified CMS",
              description:
                "The user friendly interface allowed authorized nontechnical staff and department heads to draft and publish localized updates instantly, completely eliminating the need for a dedicated technical support team to post articles.",
            },
            {
              title: "Executive Streams and Social Connectivity",
              description:
                "We introduced social functionality, including peer recognition badges, community spaces, and an interactive feed. This feature allowed top executives to broadcast corporate strategies directly to frontline staff via interactive video posts and live streams, driving companywide alignment.",
            },
          ],
        },
      ],
    },
    impact: {
      title: "Business Impact & Operational Outcomes",
      intro:
        "The deployment of the consolidated intranet infrastructure transformed the airline's organizational culture and operational agility, delivering clear measurable value.",
      outcomes: [
        "Unprecedented Field Employee Adoption: Transitioning to a mobile first strategy allowed thousands of onfield employees (pilots, crew, and ground staff) to access the digital workspace on the move, closing the deskless worker gap.",
        "Surge in Employee Engagement and Alignment: Replacing dry, static updates with an interactive social layer drove employee interest in company strategy, significantly increasing daily active user engagement.",
        "Elimination of Operational Content Bottlenecks: Upgrading the search indexing structure completely cleared out outdated results, ensuring safety, compliance, and corporate documentation are immediately searchable and accurate.",
        "Optimized Administrative Efficiency: Empowering nontechnical teams to manage content directly through the simplified CMS freed up technical IT personnel, cutting down operational management costs.",
      ],
    },
    takeaway:
      "By pairing a heavyduty backend migration (SharePoint 2016) with an agile, humancentric engagement layer (Workvivo), Project 19 turned a fragmented, legacy infrastructure into a unified digital home. The project successfully aligned tens of thousands of distributed aviation employees under a single entry point, proving that deep technical experience combined with usercentric design can bridge even the widest enterprise communication gaps.",
  },
  "custom-order-processing-rules-engine": {
    slug: "custom-order-processing-rules-engine",
    category: "Custom Order Processing Rules Engine",
    headline:
      "Orchestrating Complex Logistics: Custom Rules Engine for Automated Seasonal Ecommerce Fulfillment",
    subtitle:
      "How Project 19 overcame legacy infrastructure barriers and zero sandbox limitations to engineer an enterprise grade automated order processing bridge.",
    executiveSummary: [
      "An established ecommerce retailer selling seeds and flower buds ran  high volume digital storefronts. They faced a critical logistical roadblock: their business model relied on selling seasonal products. These items required strict, zone specific delivery schedules alongside standard goods that demanded immediate dispatch based on locality and climate conditions. While the client utilized an industry standard third party shipping and inventory software platform, that core software lacked the capability to process highly dynamic, context aware scheduling logic.",
      "Project 19 was contracted to bridge this software gap. We engineered a highly tailored, intelligent order processing middleware solution. Despite dealing with severe architectural limitations including legacy on premise components hidden behind secure network firewalls, systems completely devoid of API support, and the absolute absence of a staging/sandbox environment, Project 19 delivered a seamless automated system. The solution now operates as the foundation to the backend system powering all of the client's online storefronts.",
    ],
    challenge: {
      title: "The Challenge: Inconsistent Integration and Infrastructure Barriers",
      intro:
        "To implement precise, zone and season based fulfillment rules, the new solution had to sit directly between the consumer facing ecommerce store and the third party inventory fulfillment platform. However, the existing infrastructure presented severe technical complications that standard out of the box connectors could not address.",
      items: [
        {
          title: "Inconsistent Integration Capabilities",
          description:
            "The client's existing third party logistics platforms lacked uniform connectivity. Some subsystems provided highly limited API support, while other essential platforms lacked API access altogether.",
        },
        {
          title: "Legacy On Premise Environments",
          description:
            "To retrieve inventory data and write shipping rules, Project 19 had to bypass the lack of APIs by establishing direct database connections. These databases were located on premise behind strict enterprise network firewalls, requiring customized security access protocols to dial in from the outside securely.",
        },
        {
          title: "Zero Testing Infrastructure (The Sandbox Challenge)",
          description:
            "The most pressing risk was the complete nonexistence of a development or sandbox environment. Mirroring the environment meant meticulously recreating multiple distinct vendor database setups, auditing and modifying production database triggers, and testing the software thoroughly while ensuring the client's active production site remained completely untouched and operational.",
        },
      ],
    },
    solution: {
      title: "The Solution: Bespoke Architectural Middleware & Controlled Deployment",
      intro:
        "Project 19 assembled a dedicated engineering team to build a bespoke order processing bridge. Utilizing best in class software development frameworks and a rigorous continuous integration workflow, the team tackled the problem through an advanced architecture plan.",
      stages: [
        {
          title: "Bespoke Logic Rules Engine",
          description:
            "We designed a custom processing layer that automatically screens incoming ecommerce receipts. The system evaluates the item type (seasonal vs. immediate standard shipping), calculates the customer's geographical delivery zone, and dynamically assigns a strict release and shipping schedule to the warehouse software.",
        },
        {
          title: "Hybrid Data Access Layer",
          description:
            "For systems with limited APIs, our team built tailored connection wrappers. For non API systems, we developed secure database connectors that safely pierced the on premise firewall using industry leading security parameters, enabling safe direct to DB reading and writing.",
        },
        {
          title: "Recreated Staging Environment",
          description:
            "To guarantee absolute safety before launch, Project 19 carefully reverse engineered a local testing sandbox. We replicated the vendor database schemas, systematically isolated and modified complex database triggers, and ran comprehensive automated checks without exposing live consumer transactions to any operational risk.",
        },
      ],
    },
    impact: {
      title: "Business Impact & Tangible Outcomes",
      intro:
        "Upon deployment, Project 19's custom solution immediately stabilized the client's complex supply chain, transforming an error prone manual bottleneck into a reliable, automated engine. The project successfully achieved the following milestones:",
      outcomes: [
        "100% Automation of Seasonal Logic: All manual parsing, sorting, and holding of seasonal orders were fully automated. This completely eliminated human data entry errors and dramatically boosted backend staff productivity.",
        "Optimized Order Handling: Orders are now cleanly routed, grouped, and released to fulfillment centers based on zone schedules automatically, maximizing warehouse efficiency.",
        "Elevated Customer Satisfaction: Eliminating fulfillment delays and seasonal delivery mix ups drastically lowered customer complaints, leading to stronger brand loyalty and a frictionless post purchase experience.",
      ],
    },
    takeaway:
      "Even when constrained by restrictive legacy databases, missing APIs, and a complete lack of testing sandboxes, Project 19's rigorous engineering practices successfully brought automation to a complex retail ecosystem. The custom engine has transformed from a software patch into the permanent digital backbone of our client's multistore ecommerce business.",
  },
  "smartmatch-platform": {
    slug: "smartmatch-platform",
    heroImage: "/assets/case-studies/smartmatchdemo.png",
    heroImageAlt:
      "SmartMatch App matchmaking CRM showing a client profile with membership details, preferences, and matchmaker tools",
    category: "Tristate Matchmaking Service",
    headline:
      "unifying matrimony and technology: Building a matchmaking Platform with SmartMatch App Integration",
    subtitle:
      "How Project 19 architected a secure, automated synchronization engine between a premier Muslim Matchmaking Site and enterprise CRM software.",
    executiveSummary: [
      "Modern niche matchmaking services require a delicate balance of user friendly community portals and sophisticated backend administrative tools. This nonprofit was dedicated to helping single professionals across the tri-state area find life partners in a culturally and spiritually aligned manner. With their inital platform, they faced an operational hurdle. While their frontend community portal successfully attracted highly qualified members, their administrative and matchmaking teams required an enterprise grade engine to manage relationships, filter preferences, and execute smart compatibility pairings.",
      "Project 19 was retained to design and build a secure, real time integration bridge between the public facing web portal and SmartMatch App knownn for its industry leading professional matchmaking CRM. By bridging this gap, Project 19 automated the client's onboarding pipeline, eliminated manual profile duplication, and gave matchmakers advanced filtering controls to serve their growing regional user base.",
    ],
    technologyInsight: {
      title: "Technology Insight: What is SmartMatch App?",
      paragraphs: [
        "SmartMatch App is an award winning matchmaking CRM and membership management software used globally to introduce and connect individuals for personal, social, and professional relationships.",
        "Armed with advanced matching algorithms, customizable client profiles, and automated introduction tools, it serves as the ultimate mission critical dashboard for relationship agencies. Project 19 leveraged SmartMatch App's extensive API layer to transform it into the operational powerhouse behind this platform, allowing automated workflows to dictate matchmaking pipelines.",
      ],
    },
    challenge: {
      title: "The Challenge: The Friction of Fragmented Profiles",
      intro:
        "To maintain a safe, high integrity community, faith based professional matchmaking requires rigorous data collection encompassing location, corporate background, education, values, and deeply personal lifestyle preferences. Prior to Project 19's architectural intervention, the client faced major scalability roadblocks:",
      items: [
        {
          title: "Siloed Member Data",
          description:
            "When users registered on the web portal, their profiles lived exclusively in the frontend database. Matchmakers had to manually copy, format, and paste this complex metadata into their inner matching systems to utilize professional search tools.",
        },
        {
          title: "Delayed Compatibility Pipeline",
          description:
            "Because user profiles were not synced in real time, new registrants suffered long wait times before entering the active matchmaking pool, causing early-stage drop-offs.",
        },
        {
          title: "Administrative Scaling Bottleneck",
          description:
            "As the user base expanded rapidly across the Tri-State area, managing manual profile updates, profile status changes (e.g., active, matched, paused), and client communication via separate systems became impossible to sustain.",
        },
      ],
    },
    solution: {
      title: "The Solution: Real-Time Sync Engine Built by Project 19",
      intro:
        "Project 19 designed a robust, secure middleware infrastructure that seamlessly unifies the front-end web ecosystem with the SmartMatch App environment. Our development team ensured that data, media assets, and preference logs flow bidirectionally between systems without friction.",
      stages: [
        {
          title: "Key Architectural Milestones Implemented",
          description: "",
          highlights: [
            {
              title: "Automated API Onboarding Pipeline",
              description:
                "Project 19 built a custom registration pipeline using a Node.js backend wrapper. The moment a user submits their profile on the website, a secure, structured payload is instantly fed into the SmartMatch App API, building a verified, matchmaker-ready CRM record automatically.",
            },
            {
              title: "Match-making Event Management and Registration",
              description:
                "Event management was integrated with the ticketing and payment setup to allow their subscribers to attend match-making events. Additionally, we introduced a digital check-in process to track guest attendance in real time.",
            },
            {
              title: "Dynamic Preference and Media Mapping",
              description:
                "Faith-specific filters, career markers, and sensitive profile data (including private photographs and bio disclosures) are safely mapped and synchronized. Matchmakers can instantly view high-definition media and structured fields straight from their SmartMatch console.",
            },
            {
              title: "Automated Status Webhooks",
              description:
                "When a matchmaker updates a user's relationship or interaction status inside SmartMatch App, automated webhooks push back to the main server, altering front-end access permissions, account statuses, and member dashboard notifications immediately.",
            },
          ],
        },
      ],
    },
    impact: {
      title: "Business Impact & Key Outcomes",
      intro:
        "By deploying this tailored integration, Project 19 transformed a heavily manual administrative burden into an automated, high-velocity community engine:",
      outcomes: [
        "Elimination of Human Input Error: 100% of the manual data migration and profile-copying workflow was automated. Administrative human errors and typos were entirely wiped out.",
        "Exponentially Faster Introductions: New members enter the active matching pool immediately upon registration. SmartMatch App's core algorithms can now evaluate profiles against the entire Tri-State professional database instantly, drastically reducing the time required to issue initial introductions.",
        "Fewer Client Complaints & Higher Engagement: Users experienced an immediate boost in platform responsiveness, accurate matching notifications, and intuitive account management. The reduction in operational delays caused client satisfaction rates and active retention to skyrocket.",
      ],
    },
    takeaway:
      "By cleanly bridging a community-focused portal with a specialized backend framework like SmartMatch App, Project 19 built an expandable digital architecture capable of processing thousands of unique professional profiles across the Tri-State area. The platform now operates with absolute efficiency, scaling its member base effortlessly while preserving the personalized care essential to elite, faith-based professional matchmaking.",
  },
  "jupiter-app-customer-support": {
    slug: "jupiter-app-customer-support",
    category: "Streamlining E-Commerce Operations with Jupiter App",
    headline: "Eliminating Cross-Platform Friction via Custom Zendesk & Shipworks Integration",
    subtitle:
      "How Project 19 engineered Jupiter App to grant customer support agents complete operational autonomy and accelerate ticket resolution.",
    executiveSummary: [
      "Our client operates a high-scale enterprise e-commerce business running multiple online stores that generate multi-million-dollar sales monthly. With a massive consumer base spread across the United States, managing high order volumes requires frictionless precision from centralized logistics warehouses. However, an operational bottleneck emerged inside their customer support channel. Because customer service environments were siloed from fulfillment systems, executing routine post-purchase order changes was a highly manual, time-consuming challenge.",
      "Project 19 was brought in to eliminate this friction. We engineered and deployed Jupiter, a custom application integrated directly into the client's Zendesk UI as an embedded widget. By bridging the gap between Zendesk and the client's central order processing software, Shipworks, Project 19 empowered customer support agents to update orders and process financial refunds autonomously without ever leaving their communication dashboard.",
    ],
    technologyInsight: {
      title: "Technology Insight: What is Zendesk?",
      paragraphs: [
        "Zendesk is a cloud-based customer service platform designed to help businesses manage customer interactions, support tickets, and engagement across multiple channels.",
        "Because it consolidates all incoming customer requests into a single clean screen, it serves as the primary home base and dashboard for support teams worldwide. Project 19 leveraged this layout by embedding our custom application directly into its native user interface framework, allowing data from other internal platforms to view alongside regular client messages.",
      ],
    },
    challenge: {
      title: "The Challenge: A Fragmented, Clunky Workflow",
      intro:
        "In high-volume e-commerce, order updates—such as changing shipping details, adjusting item quantities, or modifying item variations—frequently occur right after an order is placed. Because adjustments inherently alter the transactional financial balance, they regularly generate partial or full refunds. Prior to Project 19's intervention, the client's customer support workflow was clunky, fragmented, and heavily manual due to a complete lack of system integration:",
      items: [
        {
          title: "Constant System-Hopping",
          description:
            "Agents had to repeatedly switch screens between Zendesk (to converse with the customer) and Shipworks (the core fulfillment system) to verify order states, check inventory, and log adjustments.",
        },
        {
          title: "Manual Refund Processing",
          description:
            "Adjustments made to live orders did not flow to payment gateways automatically. Staff had to cross-reference multiple tools to compute and process corresponding refunds manually.",
        },
        {
          title: "Compounding Ticket Latency",
          description:
            "This disjointed workflow dragged out the resolution time for simple tickets, resulting in support backlogs during high-traffic sales windows.",
        },
      ],
    },
    solution: {
      title: 'The Solution: "Jupiter"',
      intro:
        "To eliminate cross-system friction, Project 19 architected and built Jupiter. Rather than introducing another separate, disjointed platform for the agents to manage, we engineered Jupiter to integrate directly into the existing customer service infrastructure, functioning as a native widget inside the Zendesk UI. Jupiter securely bridges the gap between customer conversations and warehouse fulfillment by integrating deeply with Shipworks:",
      stages: [
        {
          title: "Key Capabilities",
          description: "",
          highlights: [
            {
              title: "Embedded Order Management",
              description:
                "When an agent views an open customer ticket in Zendesk, the Jupiter widget instantly surfaces real-time order logs fetched directly from Shipworks.",
            },
            {
              title: "Autonomous Modifications",
              description:
                "Agents can directly update shipping addresses, cancel lines, or alter ordered items right inside the Zendesk sidebar, pushing live updates straight to Shipworks.",
            },
            {
              title: "Instant Automated Refunds",
              description:
                "Whenever an order modification generates a financial credit, Jupiter calculates the discrepancy automatically and processes the customer's refund securely on the spot.",
            },
          ],
        },
      ],
    },
    impact: {
      title: "Business Impact & Productivity Improvements",
      intro:
        "By rolling out Jupiter, Project 19 fundamentally transformed the client's day-to-day customer support velocity, driving monumental improvements across their internal processing pipelines:",
      outcomes: [
        "Accelerated Ticket Resolution: The support team now processes open tickets significantly faster and with 100% accuracy. By eliminating manual data re-entry across platforms, the time to resolve modification tickets plummeted, vastly improving overall team productivity.",
        "Complete Support Autonomy: Customer support agents operate completely independently within their native Zendesk environment.",
        "Operational Security: Because agents use Jupiter to relay changes, they no longer require direct access to the main order processing system (Shipworks). This successfully shields the core fulfillment database from broad internal access and accidental manual overrides.",
      ],
    },
    takeaway:
      "By bridging the gap between customer communication (Zendesk) and fulfillment logistics (Shipworks), Project 19 transformed a major operational bottleneck into a competitive advantage. The client can now comfortably absorb surging sales volumes during peak seasons without requiring a proportional increase in support headcount.",
  },
  "unified-ecommerce-data-hub": {
    slug: "unified-ecommerce-data-hub",
    heroImage: "/assets/case-studies/lovelytics_hr.png",
    heroImageAlt:
      "Tableau executive dashboard showing centralized HR and operational reporting with KPIs, charts, and geographic data views",
    category: "Centralized Data Hub and Reporting",
    headline:
      "From Siloed Systems to a Single Source of Truth: Unified Ecommerce Data Hub & Business Intelligence",
    subtitle:
      "How Project 19 connected ShopSite, Shipworks, and SKUVault into a centralized data platform, powering Tableau dashboards and Avalara tax compliance at scale.",
    executiveSummary: [
      "A growing ecommerce business powered its storefront with ShopSite, processed and shipped every order through Shipworks, and managed inventory through a cloud based warehouse management system called SKUVault. On paper, the stack covered the full order lifecycle. In practice, all three platforms ran in isolation. Client records, order history, inventory levels, and shipping data lived in separate silos with only loose coupling between ShopSite and SKUVault. Leadership lacked a unified view of operations, and teams spent hours reconciling spreadsheets to understand what was actually happening across the business.",
      "Project 19 stepped in to design and build a centralized data hub that aggregates clients, orders, inventory, and shipping information into one reliable foundation. The new architecture did more than consolidate data. It unlocked a wave of downstream systems, executive dashboards, and near real time reporting that gave leadership visibility into the KPIs driving fulfillment, shipping, and overall productivity.",
    ],
    technologyInsight: {
      title: "Technology Insight: Why a Centralized Data Hub?",
      paragraphs: [
        "Modern ecommerce operations rarely fail because of a single broken tool. They fail because critical systems never talk to each other. A data hub acts as the connective tissue between storefront, fulfillment, and inventory platforms, normalizing disparate data formats into a single warehouse that downstream applications can trust.",
        "Once that foundation exists, business intelligence, compliance reporting, and operational monitoring become practical instead of aspirational. Project 19 treated the data hub not as a one time integration project, but as the permanent backbone for every analytics, reporting, and automation initiative the organization would build next.",
      ],
    },
    challenge: {
      title: "The Challenge: Disconnected Platforms and Blind Spots",
      intro:
        "Without a unified data layer, the client's teams were flying blind. Executives could not answer basic questions about order throughput, warehouse efficiency, or inventory health without manual effort. Project 19 identified four core barriers standing in the way of operational clarity:",
      items: [
        {
          title: "Three Systems, Zero Integration",
          description:
            "ShopSite handled online sales, Shipworks managed order processing and shipping, and SKUVault tracked inventory, but none shared a consistent, synchronized dataset. Information had to be pulled manually from each platform, wasting valuable time and resources.",
        },
        {
          title: "No Executive Visibility",
          description:
            "Leadership had no near real time view of business performance. KPIs around order fulfillment, picking accuracy, and shipping throughput were buried in disconnected reports that were always days behind.",
        },
        {
          title: "Manual Tax Compliance Overhead",
          description:
            "The client's unique business model required collecting taxes from customers and filing on monthly and quarterly schedules. Without automated pipelines, tax data had to be extracted and reconciled by hand, a process prone to delays and errors.",
        },
        {
          title: "Undetected Process Inefficiencies",
          description:
            "Productivity gaps in fulfillment and shipping went unnoticed because there was no monitoring layer to surface bottlenecks. Teams repeated flawed workflows without the data to prove where time and margin were being lost.",
        },
      ],
    },
    solution: {
      title: "The Solution: Data Hub, BI Dashboards, and Compliance Pipelines",
      intro:
        "Project 19 delivered a three phase implementation that transformed fragmented operational data into a cohesive intelligence platform.",
      stages: [
        {
          title: "Phase 1: Centralized Data Hub Architecture",
          description:
            "We designed an enterprise data hub that normalizes data from ShopSite, Shipworks, and SKUVault. Client profiles, order transactions, inventory positions, and shipping events are consolidated into a single source of truth, creating the foundation for every downstream system the organization needed.",
        },
        {
          title: "Phase 2: Tableau Business Intelligence & Executive Dashboards",
          description:
            "With the data hub in place, Project 19 built multiple Tableau dashboards giving management and executives a holistic, near realtime view of the state of their operations and business.",
          highlights: [
            {
              title: "Sales & Order Performance",
              description:
                "Dashboards covering sales trends, order details, and fulfillment status, allowing leadership to track team performance at any given moment.",
            },
            {
              title: "Warehouse & Shipping Operations",
              description:
                "Reports on picking, packing, and shipping throughput help operations managers monitor efficiency and catch delays before they compound.",
            },
            {
              title: "Inventory & Demand Forecasting",
              description:
                "Full visibility into the inventory system enables product demand forecasting and supply chain monitoring, reducing stockouts and overstock situations.",
            },
          ],
        },
        {
          title: "Phase 3: Avalara Tax Compliance Integration",
          description:
            "Project 19 built data pipelines to extract tax relevant transaction data from the warehouse, integrate it with Avalara AvaTax, and run scheduled ETL jobs that feed compliance dashboards. AvaTax applies accurate, jurisdiction aware tax calculations in real time across both sales and purchasing workflows covering product type, exemption rules, and regional requirements while automated reporting replaced manual monthly and quarterly filing preparation.",
        },
      ],
    },
    impact: {
      title: "Business Impact & Measurable Outcomes",
      intro:
        "The unified data platform immediately changed how the organization operated, from the warehouse floor to the executive suite.",
      outcomes: [
        "2x Increase in Order Fulfillment & Shipping: KPI visibility exposed process flaws that had gone undetected for years. Once identified, new monitoring systems were introduced and workflows were optimized,doubling fulfillment and shipping throughput.",
        "Near Real Time Executive Reporting: Leadership gained a continuous view of business performance instead of waiting on stale, manually compiled reports. Decision making shifted from reactive to data driven.",
        "Streamlined Tax Compliance: Avalara integration and automated ETL pipelines eliminated manual tax data extraction, giving finance teams accurate dashboards for monthly and quarterly filing with far less operational overhead.",
      ],
    },
    takeaway:
      "When ecommerce platforms run in isolation, the cost is not just inefficiency, it is invisible inefficiency. By building a centralized data hub and layering Tableau intelligence and Avalara compliance on top, Project 19 gave this organization the visibility to find problems, fix them, and scale with confidence. The data hub has become the permanent foundation for every operational and strategic initiative that follows.",
  },
  "nonprofit-peer-to-peer-fundraising": {
    slug: "nonprofit-peer-to-peer-fundraising",
    heroImage: "/assets/case-studies/img-donation-pages.png",
    heroImageAlt:
      "Peer-to-peer fundraising platform showing personalized donation pages with individual goals and campaign progress",
    category: "Crowdfunding for a Nonprofit",
    headline:
      "Amplifying the Giving Season: Peer to Peer Fundraising Platform for a Non Profit Organization",
    subtitle:
      "How Project 19 designed and deployed a personalized fundraising system through Bonterra that turned supporters into campaign ambassadors and delivered one of the organization's most successful drives ever.",
    executiveSummary: [
      "A nonprofit client faced a common challenge: raising critical funds during Ramadan, the giving season for Muslims, when donor attention is at its peak and competition for charitable dollars is fierce. Traditional donation channels a central campaign page and direct appeals could only reach so far. The organization needed a way to mobilize its existing community, empower individual supporters to fundraise on its behalf, and create a sense of personal ownership around every dollar raised.",
      "The nonprofit partnered with Project 19 to design and implement a peer to peer fundraising system where users can take initiative and make a difference. Project 19 used Bonterra to deliver a platform that allowed fundraisers to create personalized campaign pages, set individual fundraising goals, and share their progress with friends, family, and colleagues through social media and email. The result was a deeper level of engagement across the supporter base and a campaign that became one of the most successful fundraising drives in the organization's history, meeting its targeted goals on schedule.",
    ],
    technologyInsight: {
      title: "Technology Insight: What is Peer to Peer Fundraising?",
      paragraphs: [
        "Peer to peer (P2P) fundraising shifts the center of gravity from a single organizational donation page to a network of personal campaign pages, each owned and promoted by an individual supporter. Rather than asking donors to give once to a faceless cause, P2P fundraising invites them to support someone they know (a friend, colleague, or community member).",
        "When executed well, P2P campaigns multiply reach organically. Every fundraiser becomes an ambassador, sharing their page across social channels, email, and personal networks. Project 19 built this model into a turnkey system the nonprofit could deploy season after season without requiring technical staff to manage pages manually.",
      ],
    },
    challenge: {
      title: "The Challenge: Reaching Fundraising Goals Within Ramadan",
      intro:
        "Ramadan represents a narrow one month window of opportunity. The nonprofit had a committed donor base but no infrastructure to activate them as individual fundraisers. Without the right platform, the organization risked leaving significant donations on the table.",
      items: [
        {
          title: "Single Channel Fundraising Limits",
          description:
            "Donations flowed primarily through a centralized campaign page. There was no mechanism for supporters to create their own fundraising presence or rally their personal networks around the cause.",
        },
        {
          title: "Low Supporter Engagement",
          description:
            "Without personalized pages and individual goals, donors had little reason to stay involved beyond a one time contribution. The organization struggled to sustain momentum throughout Ramadan.",
        },
        {
          title: "No Visibility Into Fundraiser Performance",
          description:
            "Leadership could track overall donations but had no way to monitor individual fundraiser progress, identify top performers, or intervene when pages stalled midcampaign.",
        },
        {
          title: "Tight Seasonal Timeline",
          description:
            "The platform needed to be designed, built, and launched before the giving season window closed, leaving no room for a prolonged development cycle or post launch rework.",
        },
      ],
    },
    solution: {
      title: "The Solution: Building on Bonterra's Network for Good Platform",
      intro:
        "Project 19 partnered closely with the nonprofit's development and marketing teams to design a fundraising system tailored to their usual charity event workflow. The platform was built to be simple for supporters to use and powerful enough for the organization to manage at scale.",
      stages: [
        {
          title: "Personalized Fundraiser Pages",
          description:
            "Each supporter can create a dedicated fundraising page with their own story, photo, and personal fundraising goal. Pages are shareable across social media, email, and messaging platforms, turning every fundraiser into a direct outreach channel for the organization.",
        },
        {
          title: "Goal Tracking & Progress Visibility",
          description:
            "Real time progress bars and milestone notifications keep fundraisers motivated and donors informed. Supporters can see exactly how close they are to their personal target, creating urgency that drives additional contributions as the campaign progresses.",
          highlights: [
            {
              title: "Individual Goal Setting",
              description:
                "Fundraisers set personal targets that roll up into the organization's overall campaign goal, giving every participant a tangible stake in the outcome.",
            },
            {
              title: "Campaign Dashboard for Leadership",
              description:
                "The nonprofit's team monitors aggregate progress, top performing fundraisers, and donation trends from a centralized admin view enabling timely outreach and recognition throughout the season.",
            },
            {
              title: "Seamless Donor Experience",
              description:
                "Donors contribute directly through a fundraiser's personal page with a streamlined checkout flow, ensuring every gift is attributed correctly and acknowledged immediately.",
            },
          ],
        },
        {
          title: "Engagement Tools & Campaign Launch Support",
          description:
            "Project 19 equipped the organization with share templates, email prompts, and onboarding guides so fundraisers could launch their pages confidently on day one. A structured kickoff process helped the campaign build momentum quickly rather than ramping up slowly over weeks.",
        },
      ],
    },
    impact: {
      title: "Business Impact & Campaign Outcomes",
      intro:
        "The peer to peer platform transformed the nonprofit's Ramadan charity strategy from a single appeal into a community wide movement.",
      outcomes: [
        "One of the Most Successful Campaigns in Organization History: The giving season drive exceeded expectations, ranking among the highest performing fundraising campaigns the nonprofit had ever run.",
        "Fundraising Goals Met on Target: The organization reached its targeted fundraising goal within Ramadan validating the peer to peer model as a repeatable strategy for future campaigns.",
        "Deeper Supporter Engagement: Personalized pages and individual goals kept fundraisers active throughout the campaign, generating sustained donations rather than a single spike at launch.",
      ],
    },
    takeaway:
      "Nonprofits don't need bigger marketing budgets to raise more. They need systems that activate the communities they already have. By giving supporters the tools to fundraise personally on the organization's behalf, Project 19 turned a seasonal challenge into a scalable, repeatable platform for growth. The campaign proved that when people feel ownership over a goal, they advocate.",
  },
};

export function getCaseStudyDetail(slug: string) {
  return caseStudyDetails[slug];
}
