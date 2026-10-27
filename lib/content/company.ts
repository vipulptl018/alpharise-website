import type { IconName } from "@/components/shared/SectionBlocks";

export const companyOverview = {
  title: "Company Overview",
  description:
    "ALPHARISE INNOVATION PRIVATE LIMITED provides software development, website development, mobile application development, AI solutions, cloud solutions, enterprise software, and the Sinchan Mitra AgriBusiness SaaS.",
  body: [
    "We partner with startups, SMEs, and enterprises to plan, build, and operate digital systems that support measurable business outcomes. Our delivery model combines product thinking, disciplined engineering, and transparent communication.",
    "We are developing a Social Voice Communication Platform for Android that is preparing for public release, and we build Sinchan Mitra, an AgriBusiness SaaS for agri-input and irrigation shops, under clear product, safety, and support policies.",
  ],
};

export const technologyExpertise: {
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    title: "Frontend Engineering",
    description:
      "React, Next.js, TypeScript, and Tailwind CSS for fast, accessible, and maintainable interfaces.",
    icon: "Laptop",
  },
  {
    title: "Backend & APIs",
    description:
      "Python, FastAPI, Django, and Node.js services with authentication, validation, and documentation.",
    icon: "Code2",
  },
  {
    title: "Data & Cloud",
    description:
      "PostgreSQL, MySQL, MongoDB, AWS, Docker, and CI/CD for resilient production systems.",
    icon: "Layers3",
  },
  {
    title: "AI Systems",
    description:
      "OpenAI, LangChain, retrieval workflows, evaluation, and safe deployment patterns for business use.",
    icon: "Lightbulb",
  },
  {
    title: "Mobile Delivery",
    description:
      "Android applications developed with Flutter and a Node.js backend.",
    icon: "Smartphone",
  },
  {
    title: "Product Operations",
    description:
      "Observability, incident response, release management, and continuous improvement for live products.",
    icon: "ClipboardCheck",
  },
];

export const platformSafety: {
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    title: "Clear Community Standards",
    description:
      "Published guidelines define acceptable behavior for users, hosts, and creators on our social voice product.",
    icon: "Shield",
  },
  {
    title: "Role-Based Responsibilities",
    description:
      "Host, creator, and user policies set expectations for moderation, content, payments, and account use.",
    icon: "Users",
  },
  {
    title: "Virtual Economy Controls",
    description:
      "Virtual coin rules explain purchases, usage, non-cash value, and prohibited manipulation of the economy.",
    icon: "Wallet",
  },
  {
    title: "Reporting & Enforcement",
    description:
      "Users can report concerns; we review violations and may restrict access to protect the community.",
    icon: "ClipboardCheck",
  },
];

export const customerSupport: {
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    title: "Dedicated Support Channel",
    description:
      "Reach our team through the Support page or admin@alphariseinnovation.com for product, billing, and service questions.",
    icon: "HeartHandshake",
  },
  {
    title: "Business-Hours Response",
    description:
      "We aim to respond within one business day during Monday–Saturday, 10:00 AM – 7:00 PM (IST).",
    icon: "Timer",
  },
  {
    title: "Transparent Policies",
    description:
      "Pricing, refunds, community rules, and platform policies are published so customers know what to expect.",
    icon: "FileBadge",
  },
  {
    title: "Ongoing Maintenance",
    description:
      "For client systems and live products, we provide monitoring, updates, and structured incident handling.",
    icon: "Shield",
  },
];
