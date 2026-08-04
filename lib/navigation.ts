export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const mainNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Overview of ALPHARISE",
  },
  {
    label: "About",
    href: "/about",
    description: "Company overview and business divisions",
  },
  {
    label: "Services",
    href: "/services",
    description: "Software, AI, and cloud solutions",
  },
  {
    label: "Products",
    href: "/products",
    description: "Software, platform, and academy products",
  },
  {
    label: "Social Voice",
    href: "/social-voice",
    description: "Social Voice Communication Platform documentation",
  },
  {
    label: "Academy",
    href: "/academy",
    description: "TechRise Academy training programs",
  },
  {
    label: "Pricing",
    href: "/pricing",
    description: "Engagement and platform pricing",
  },
  {
    label: "Support",
    href: "/support",
    description: "Customer support and help resources",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Start a conversation with us",
  },
];

export const footerNavigation = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Social Voice Docs", href: "/social-voice" },
    { label: "Academy", href: "/academy" },
    { label: "Pricing", href: "/pricing" },
    { label: "Support", href: "/support" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  platform: [
    { label: "Social Voice Documentation", href: "/social-voice" },
    { label: "Community Guidelines", href: "/community-guidelines" },
    { label: "Host Policy", href: "/host-policy" },
    { label: "Creator Policy", href: "/creator-policy" },
    { label: "User Policy", href: "/user-policy" },
    { label: "Virtual Coin Policy", href: "/virtual-coin-policy" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
} as const;
