/**
 * Unified catalog for Products page — capabilities and platforms offered by ALPHARISE.
 */
import { FEATURES } from "@/lib/features";

const allProductsPageContent = [
  {
    id: "software-development",
    title: "Software Development",
    overview:
      "Custom software engineered for security, performance, maintainability, and long-term business fit. Engagements cover requirements, architecture, build, testing, and handover.",
    features: [
      "Requirement workshops and solution architecture",
      "Modular backend and frontend codebases",
      "Role-based access control and audit trails",
      "Third-party and payment integrations where required",
      "Automated testing, code review, and CI/CD",
      "Documentation and knowledge transfer",
    ],
    benefits: [
      "Systems aligned to real operating processes",
      "Lower long-term maintenance cost",
      "Clear ownership of source and deployments",
      "Room to extend without full rewrites",
    ],
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    id: "website-development",
    title: "Website Development",
    overview:
      "Professional corporate and product websites designed for credibility, search visibility, accessibility, and lead generation—typically delivered with Next.js and a maintainable content structure.",
    features: [
      "Responsive UI aligned to brand guidelines",
      "SEO foundations (metadata, structure, performance)",
      "Lead capture and contact workflows",
      "Blog or resource modules when needed",
      "Analytics and conversion tracking setup",
      "Secure hosting and release process",
    ],
    benefits: [
      "Stronger first impression for buyers and partners",
      "Faster page experience on mobile and desktop",
      "Easier content updates for marketing teams",
      "Measurable inbound inquiry paths",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    id: "mobile-apps",
    title: "Mobile Application Development",
    overview:
      "Android applications developed with Flutter and a Node.js backend for secure APIs, scalable services, and production-ready delivery.",
    features: [
      "Flutter-based Android client applications",
      "Node.js backend APIs and business logic",
      "Secure authentication and session handling",
      "Push notifications and offline-friendly flows",
      "API integration, validation, and error handling",
      "Google Play submission support for client apps",
    ],
    benefits: [
      "Faster Android delivery with a modern UI framework",
      "Consistent experience across Android devices",
      "Scalable Node.js backend connectivity",
      "Clear path from MVP to production releases",
    ],
    technologies: ["Flutter", "Dart", "Node.js", "REST APIs"],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    overview:
      "Applied AI for business workflows—assistants, document intelligence, automation, and retrieval-augmented systems—with monitoring and responsible deployment practices.",
    features: [
      "Custom LLM-powered assistants and tools",
      "Document parsing and knowledge retrieval",
      "Workflow automation and human-in-the-loop design",
      "Evaluation, logging, and usage controls",
      "Integration with existing business systems",
      "Operational runbooks for production use",
    ],
    benefits: [
      "Reduced repetitive manual work",
      "Faster internal information access",
      "Differentiated product experiences",
      "Controlled rollout with measurable outcomes",
    ],
    technologies: ["OpenAI", "LangChain", "Python", "Vector Databases"],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    overview:
      "Cloud architecture and operations focused on AWS—covering design, deployment, observability, security hardening, and cost-aware scaling for production workloads.",
    features: [
      "Architecture design and environment strategy",
      "Infrastructure as code and repeatable releases",
      "Auto-scaling, load balancing, and networking",
      "Monitoring, alerting, and incident response basics",
      "Backup and recovery planning",
      "Cost reviews and optimization recommendations",
    ],
    benefits: [
      "Higher availability for customer-facing systems",
      "Predictable deployments across environments",
      "Improved security posture",
      "Clearer control of cloud spend",
    ],
    technologies: ["AWS", "Docker", "Cloudflare", "CI/CD"],
  },
  {
    id: "api-development",
    title: "API Development",
    overview:
      "High-performance REST APIs using FastAPI and Python, designed for reliability, documentation, and scale.",
    features: [
      "Clean REST architecture",
      "Authentication and rate limiting",
      "OpenAPI documentation",
      "Versioning strategy",
      "Caching and performance tuning",
      "Integration-ready contracts",
    ],
    benefits: [
      "Reliable integrations",
      "Faster frontend delivery",
      "Clear developer experience",
      "Production-ready security",
    ],
    technologies: ["FastAPI", "Python", "PostgreSQL", "Redis"],
  },
  {
    id: "techrise-academy",
    title: "TechRise Academy",
    overview:
      "TechRise Academy is ALPHARISE’s professional IT training division. Programs emphasize live projects, mentorship, interview readiness, and placement assistance. Placement assistance does not guarantee employment.",
    features: [
      "Full-stack, mobile, testing, data, and AI tracks",
      "Live project assignments with review",
      "Industry mentor sessions",
      "Resume, portfolio, and mock interview support",
      "Placement assistance processes",
      "Progress tracking and counselor guidance",
    ],
    benefits: [
      "Job-oriented skill development",
      "Practical exposure beyond theory",
      "Clearer interview preparation",
      "Support through the early career transition",
    ],
    technologies: ["Python", "Java", "React", "Next.js", "Flutter", "SQL"],
  },
  {
    id: "voice-platform",
    title: "Social Voice Communication Platform",
    overview:
      "ALPHARISE’s Social Voice Communication Platform for real-time rooms, community interaction, host/creator tools, wallets, virtual coins, rankings, and moderation—built for Android and preparing for public release under published community and monetization policies. Our Android application is currently preparing for public release. Availability will be announced through our official website and Instagram. Full feature documentation is at /social-voice.",
    features: [
      "OTP login and user registration",
      "Profile verification and user profiles",
      "Voice calling in live rooms",
      "Coin wallet, coin purchase, and gifting system",
      "Leaderboard, host dashboard, and creator dashboard",
      "Withdrawal request, report user, block user, privacy controls",
    ],
    benefits: [
      "Structured community interaction designed for Android",
      "Transparent virtual economy rules",
      "Clear host, creator, and user responsibilities",
      "Documented support paths for account and billing issues",
    ],
    technologies: ["Flutter", "Node.js", "Real-time audio", "Cloud infrastructure"],
  },
] as const;

/** TechRise Academy stays in the data above but is not listed while FEATURES.academy is false. */
export const productsPageContent = allProductsPageContent.filter(
  (product) => FEATURES.academy || product.id !== "techrise-academy"
);

export const servicesContent = [
  {
    id: "software-development",
    title: "Software Development",
    overview:
      "Custom software engineered for performance, security, and long-term scalability — tailored to your business processes.",
    features: [
      "Requirement analysis and architecture design",
      "Modular, maintainable codebase",
      "Role-based access and audit trails",
      "Integrations with third-party systems",
      "Automated testing and CI/CD pipelines",
    ],
    benefits: [
      "Faster operational workflows",
      "Lower total cost of ownership",
      "Secure and reliable systems",
      "Easy future enhancements",
    ],
    technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "AWS"],
  },
  {
    id: "website-development",
    title: "Website Development",
    overview:
      "Modern, SEO-friendly corporate websites built with Next.js for speed, accessibility, and conversion-focused experiences.",
    features: [
      "Responsive premium UI",
      "SEO and performance optimization",
      "CMS-ready content structures",
      "Analytics and conversion tracking",
      "Secure hosting and deployments",
    ],
    benefits: [
      "Strong brand presence",
      "Faster page loads",
      "Better search visibility",
      "Higher lead conversion",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    overview:
      "Android applications developed with Flutter and a Node.js backend for secure APIs and scalable production services.",
    features: [
      "Flutter Android UI development",
      "Node.js backend services",
      "Push notifications",
      "Secure authentication",
      "Google Play deployment support for client apps",
    ],
    benefits: [
      "Modern Android user experience",
      "Faster time-to-market for Android apps",
      "Scalable backend APIs",
      "Maintainable Flutter + Node.js stack",
    ],
    technologies: ["Flutter", "Dart", "Node.js", "REST APIs"],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    overview:
      "Generative AI, chatbots, automation, and intelligent business systems that reduce manual work and unlock insights.",
    features: [
      "Custom LLM applications",
      "Document intelligence",
      "Workflow automation",
      "Retrieval-augmented generation",
      "Monitoring and evaluation",
    ],
    benefits: [
      "Reduced operational cost",
      "Faster decision making",
      "Practical intelligent assistants",
      "Competitive product differentiation",
    ],
    technologies: ["OpenAI", "LangChain", "Python", "Vector Databases"],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    overview:
      "AWS cloud architecture, deployment, DevOps, and monitoring for highly available production systems.",
    features: [
      "Cloud architecture design",
      "Infrastructure as code",
      "Auto-scaling and load balancing",
      "Observability and alerts",
      "Cost optimization",
    ],
    benefits: [
      "High availability",
      "Predictable deployments",
      "Improved security posture",
      "Controlled cloud spend",
    ],
    technologies: ["AWS", "Docker", "Cloudflare", "CI/CD"],
  },
  {
    id: "api-development",
    title: "API Development",
    overview:
      "High-performance REST APIs using FastAPI and Python, designed for reliability, documentation, and scale.",
    features: [
      "Clean REST architecture",
      "Authentication and rate limiting",
      "OpenAPI documentation",
      "Versioning strategy",
      "Caching and performance tuning",
    ],
    benefits: [
      "Reliable integrations",
      "Faster frontend delivery",
      "Clear developer experience",
      "Production-ready security",
    ],
    technologies: ["FastAPI", "Python", "PostgreSQL", "Redis"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    overview:
      "Interfaces and digital experiences that balance aesthetics, usability, and conversion goals.",
    features: [
      "User research and flows",
      "Wireframes and prototypes",
      "Design systems",
      "Accessibility compliance",
      "Developer handoff",
    ],
    benefits: [
      "Higher engagement",
      "Reduced support friction",
      "Consistent brand experience",
      "Faster engineering delivery",
    ],
    technologies: ["Figma", "Design Systems", "Accessibility", "Prototyping"],
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    overview:
      "Continuous monitoring, maintenance, and technical support to keep your products secure, fast, and reliable.",
    features: [
      "Uptime monitoring",
      "Security patching",
      "Performance optimization",
      "Bug fixes and enhancements",
      "SLA-based support",
    ],
    benefits: [
      "Peace of mind operations",
      "Lower downtime risk",
      "Continuous improvement",
      "Predictable support costs",
    ],
    technologies: ["Monitoring", "DevOps", "AWS", "Incident Response"],
  },
] as const;

export const homeServices = [
  {
    id: "software-development",
    title: "Software Development",
    description: "Custom software tailored to business requirements.",
  },
  {
    id: "website-development",
    title: "Website Development",
    description: "Modern, SEO-friendly websites built with Next.js.",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description:
      "Android applications developed with Flutter and a Node.js backend.",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "Generative AI, chatbots, automation, and intelligent business systems.",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "AWS cloud architecture, deployment, DevOps and monitoring.",
  },
  {
    id: "api-development",
    title: "API Development",
    description: "High-performance REST APIs using FastAPI and Python.",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User interfaces and intuitive digital experiences.",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description:
      "Continuous monitoring, maintenance, and technical support.",
  },
] as const;

const allHomeProducts = [
  {
    title: "Sinchan Mitra",
    description:
      "AgriBusiness SaaS for agri-input shops and irrigation dealers: billing, stock, udhaar, reports, and irrigation files in Marathi, Hindi, and English.",
    cta: "Open Sinchan Mitra",
    href: "/sinchan-mitra",
  },
  {
    title: "Software Development",
    description:
      "Custom software engineered for security, performance, and maintainability.",
    cta: "View Details",
    href: "/products#software-development",
  },
  {
    title: "Website Development",
    description:
      "Corporate and product websites built for performance and SEO foundations.",
    cta: "View Details",
    href: "/products#website-development",
  },
  {
    title: "Mobile Application Development",
    description:
      "Android applications developed with Flutter and a Node.js backend.",
    cta: "View Details",
    href: "/products#mobile-apps",
  },
  {
    title: "AI Solutions",
    description:
      "Applied AI for assistants, automation, document intelligence, and workflow optimization.",
    cta: "View Details",
    href: "/products#ai-solutions",
  },
  {
    title: "Cloud Solutions",
    description:
      "AWS architecture, deployment, monitoring, and cost-aware cloud operations.",
    cta: "View Details",
    href: "/products#cloud-solutions",
  },
  {
    title: "API Development",
    description:
      "REST APIs designed for reliability, documentation, and integration.",
    cta: "View Details",
    href: "/products#api-development",
  },
  {
    title: "TechRise Academy",
    description:
      "Industry-ready IT training with live projects, mentorship, mock interviews, and placement assistance.",
    cta: "Explore Academy",
    href: "/academy",
  },
  {
    title: "Social Voice Communication Platform",
    description:
      "Live social voice rooms for Android with wallets, virtual coins, rankings, hosts, creators, and moderation — preparing for public release.",
    cta: "Read Documentation",
    href: "/social-voice",
  },
] as const;

export const homeProducts = allHomeProducts.filter(
  (product) => FEATURES.academy || product.href !== "/academy"
);
