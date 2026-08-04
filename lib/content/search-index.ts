import { academySearchItems } from "@/lib/content/academy-courses";

export type SearchCategory =
  | "Services"
  | "Products"
  | "Academy"
  | "Policies"
  | "Documentation";

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  category: SearchCategory;
  keywords?: string[];
};

const baseSearchIndex: SearchItem[] = [
  {
    title: "Software Development",
    description: "Custom software engineered for security, performance, and maintainability.",
    href: "/services#software-development",
    category: "Services",
    keywords: ["software", "backend", "frontend", "custom"],
  },
  {
    title: "Website Development",
    description: "Corporate and product websites with SEO foundations.",
    href: "/services#website-development",
    category: "Services",
    keywords: ["website", "next.js", "seo"],
  },
  {
    title: "Mobile App Development",
    description: "Android applications with Flutter and Node.js backend.",
    href: "/services#mobile-apps",
    category: "Services",
    keywords: ["android", "flutter", "mobile"],
  },
  {
    title: "AI Solutions",
    description: "Practical AI assistants, automation, and document intelligence.",
    href: "/services#ai-solutions",
    category: "Services",
    keywords: ["ai", "llm", "automation"],
  },
  {
    title: "Cloud Solutions",
    description: "AWS architecture, deployment, and monitoring.",
    href: "/services#cloud-solutions",
    category: "Services",
    keywords: ["aws", "cloud", "devops"],
  },
  {
    title: "API Development",
    description: "REST APIs and integrations for business systems.",
    href: "/services#api-development",
    category: "Services",
    keywords: ["api", "rest", "fastapi"],
  },
  {
    title: "Products Overview",
    description: "ALPHARISE products and capabilities catalog.",
    href: "/products",
    category: "Products",
  },
  {
    title: "Software Development Product",
    description: "Custom software delivery for business systems.",
    href: "/products#software-development",
    category: "Products",
  },
  {
    title: "Website Development Product",
    description: "Professional websites for brands and products.",
    href: "/products#website-development",
    category: "Products",
  },
  {
    title: "Mobile Application Development",
    description: "Android apps with Flutter and Node.js.",
    href: "/products#mobile-apps",
    category: "Products",
  },
  {
    title: "AI Solutions Product",
    description: "Applied AI for workflows and products.",
    href: "/products#ai-solutions",
    category: "Products",
  },
  {
    title: "Cloud Solutions Product",
    description: "Cloud architecture and operations.",
    href: "/products#cloud-solutions",
    category: "Products",
  },
  {
    title: "API Development Product",
    description: "API design and implementation.",
    href: "/products#api-development",
    category: "Products",
  },
  {
    title: "TechRise Academy",
    description: "IT training with live projects and placement assistance.",
    href: "/academy",
    category: "Academy",
    keywords: ["training", "courses", "placement"],
  },
  {
    title: "Social Voice Communication Platform",
    description: "Android social voice product preparing for public release.",
    href: "/social-voice",
    category: "Documentation",
    keywords: [
      "voice",
      "coins",
      "wallet",
      "host",
      "creator",
      "otp",
      "gifts",
      "leaderboard",
      "withdrawal",
      "notifications",
    ],
  },
  {
    title: "OTP Login",
    description: "OTP login and account verification for Social Voice.",
    href: "/social-voice#otp-verification",
    category: "Documentation",
    keywords: ["otp", "login"],
  },
  {
    title: "Wallet & Coin Purchase",
    description: "Virtual coin wallet and purchase packages.",
    href: "/social-voice#wallet",
    category: "Documentation",
    keywords: ["wallet", "coins", "purchase"],
  },
  {
    title: "Host & Creator Dashboards",
    description: "Host and creator tools for Social Voice rooms.",
    href: "/social-voice#host-program",
    category: "Documentation",
    keywords: ["host", "creator", "dashboard"],
  },
  {
    title: "Community Reporting & Blocking",
    description: "Report violations and block users on Social Voice.",
    href: "/social-voice#community-reporting",
    category: "Documentation",
    keywords: ["report", "block", "safety"],
  },
  {
    title: "Community Guidelines",
    description: "Behavioral standards for platform users.",
    href: "/community-guidelines",
    category: "Policies",
  },
  {
    title: "Host Policy",
    description: "Rules for hosts on the Social Voice platform.",
    href: "/host-policy",
    category: "Policies",
  },
  {
    title: "Creator Policy",
    description: "Rules for creators and monetization conduct.",
    href: "/creator-policy",
    category: "Policies",
  },
  {
    title: "User Policy",
    description: "Account and acceptable use rules.",
    href: "/user-policy",
    category: "Policies",
  },
  {
    title: "Virtual Coin Policy",
    description: "Virtual coin purchase and usage rules.",
    href: "/virtual-coin-policy",
    category: "Policies",
    keywords: ["coins", "wallet", "gifting"],
  },
  {
    title: "Privacy Policy",
    description: "How ALPHARISE collects and uses personal information.",
    href: "/privacy-policy",
    category: "Policies",
  },
  {
    title: "Terms & Conditions",
    description: "Terms governing website and product use.",
    href: "/terms",
    category: "Policies",
  },
  {
    title: "Refund Policy",
    description: "Refund eligibility for services, academy, and coins.",
    href: "/refund-policy",
    category: "Policies",
  },
  {
    title: "Pricing",
    description: "Service, academy, and virtual coin package pricing.",
    href: "/pricing",
    category: "Documentation",
  },
  {
    title: "Support",
    description: "Customer support channels and topics.",
    href: "/support",
    category: "Documentation",
  },
];

export const searchIndex: SearchItem[] = [
  ...baseSearchIndex,
  ...academySearchItems,
];

export function searchContent(query: string, limit = 12): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return searchIndex
    .map((item) => {
      const haystack = [
        item.title,
        item.description,
        item.category,
        ...(item.keywords ?? []),
      ]
        .join(" ")
        .toLowerCase();
      const score = haystack.includes(q)
        ? 3
        : q.split(/\s+/).filter((part) => part && haystack.includes(part)).length;
      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
}
