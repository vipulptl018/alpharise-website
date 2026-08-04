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
    description: "Our mission, vision, and values",
  },
  {
    label: "Services",
    href: "/services",
    description: "Enterprise solutions we deliver",
  },
  {
    label: "Products",
    href: "/products",
    description: "Platforms and products we build",
  },
  {
    label: "Academy",
    href: "/academy",
    description: "TechRise Academy training programs",
  },
  {
    label: "Careers",
    href: "/careers",
    description: "Join the ALPHARISE team",
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Insights and articles",
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
    { label: "Academy", href: "/academy" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
} as const;
