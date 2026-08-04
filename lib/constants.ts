export const SITE_NAME = "ALPHARISE";
export const COMPANY_NAME = "ALPHARISE INNOVATION PRIVATE LIMITED";
export const COMPANY_TAGLINE =
  "Building intelligent digital products that drive measurable growth.";

export const COMPANY = {
  name: COMPANY_NAME,
  shortName: SITE_NAME,
  legalName: COMPANY_NAME,
  tagline: COMPANY_TAGLINE,
  description:
    "ALPHARISE Innovation Private Limited delivers enterprise-grade software, AI solutions, and digital transformation services for forward-looking organizations.",
  foundedYear: 2024,
} as const;

export const CONTACT = {
  email: "hello@alpharise.in",
  phone: "+91 00000 00000",
  address: {
    line1: "India",
    city: "",
    country: "India",
  },
} as const;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/alpharise",
  twitter: "https://twitter.com/alpharise",
  github: "https://github.com/alpharise",
} as const;

export const CTA = {
  primary: {
    label: "Get in Touch",
    href: "/contact",
  },
  secondary: {
    label: "Our Services",
    href: "/services",
  },
} as const;
