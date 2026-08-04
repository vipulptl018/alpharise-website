function envOr(name: string, fallback: string): string {
  const value = process.env[name]?.trim();
  return value ? value : fallback;
}

const DEFAULT_SITE_URL = "https://alphariseinnovation.com";

/** Safe public site origin — never returns env variable names or non-http values. */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (
    !url ||
    !url.startsWith("http") ||
    url === "NEXT_PUBLIC_SITE_URL" ||
    url === "NEXT_PUBLIC_API_URL"
  ) {
    return DEFAULT_SITE_URL;
  }

  return url.replace(/\/$/, "");
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http") &&
  process.env.NEXT_PUBLIC_SITE_URL !== "NEXT_PUBLIC_SITE_URL" &&
  process.env.NEXT_PUBLIC_SITE_URL !== "NEXT_PUBLIC_API_URL"
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
    : DEFAULT_SITE_URL;

export const SITE_NAME = "ALPHARISE";

export const COMPANY_NAME = envOr(
  "NEXT_PUBLIC_COMPANY_NAME",
  "ALPHARISE INNOVATION PRIVATE LIMITED"
);

export const COMPANY_TAGLINE =
  "Software development, AI solutions, cloud platforms, and TechRise Academy.";

export const LEGAL = {
  legalName: COMPANY_NAME,
  cin: envOr("NEXT_PUBLIC_COMPANY_CIN", "U62091PN2026PTC253412"),
  /** Leave empty when no GSTIN is provided. UI shows "Not Applicable" when empty. */
  gstin: envOr("NEXT_PUBLIC_COMPANY_GSTIN", ""),
  registeredOffice: {
    line1: "GAT NO 991, FLAT NO 105",
    line2: "WING B2, GAYATRI MANTHAVELI",
    line3: "CHIKHALI",
    city: "PUNE",
    state: "MAHARASHTRA",
    postalCode: "411062",
    country: "INDIA",
  },
} as const;

export function formatGstinLabel(): string {
  const gstin = LEGAL.gstin.trim();
  if (!gstin || gstin.toLowerCase() === "not applicable") {
    return "Not Applicable";
  }
  return gstin;
}

export const COMPANY = {
  name: COMPANY_NAME,
  shortName: SITE_NAME,
  legalName: COMPANY_NAME,
  tagline: COMPANY_TAGLINE,
  description:
    "ALPHARISE INNOVATION PRIVATE LIMITED provides software development, website development, mobile application development, AI solutions, cloud solutions, and IT training through TechRise Academy. The company is also developing a Social Voice Communication Platform for Android that is preparing for public release.",
  foundedYear: 2026,
  overview:
    "ALPHARISE INNOVATION PRIVATE LIMITED builds and delivers software, websites, Android mobile applications, AI solutions, and cloud systems for businesses. Through TechRise Academy we provide professional IT training, and we are preparing a Social Voice Communication Platform for public release on Android.",
} as const;

export const CONTACT = {
  email: envOr(
    "NEXT_PUBLIC_COMPANY_EMAIL",
    "admin@alphariseinnovation.com"
  ),
  supportEmail: envOr(
    "NEXT_PUBLIC_COMPANY_EMAIL",
    "admin@alphariseinnovation.com"
  ),
  phone: envOr("NEXT_PUBLIC_COMPANY_PHONE", "+91 9168020295"),
  hours: "Monday–Saturday, 10 AM – 7 PM",
} as const;


/** Official social channel only — Instagram. */
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/alpharise",
} as const;

/**
 * Social Voice Android app release status.
 * Do not claim the app is already published on Google Play.
 */
export const ANDROID_APP_STATUS = {
  platform: "Android",
  headline: "Android App Preparing for Public Release",
  summary:
    "Our Android application is currently preparing for public release. Availability will be announced through our official website and Instagram.",
  announcement:
    "Our Android application is currently preparing for public release. Availability will be announced through our official website and Instagram.",
  stack: "Flutter client with Node.js backend",
} as const;

export function formatRegisteredAddress(): string {
  const { line1, line2, line3, city, state, postalCode, country } =
    LEGAL.registeredOffice;
  return [
    line1,
    line2,
    line3,
    city ? `${city} – ${postalCode}` : postalCode,
    state,
    country,
  ]
    .map((part) => part.trim())
    .filter(Boolean)
    .join(", ");
}

/** Multi-line address for contact cards and legal display. */
export function formatRegisteredAddressLines(): string[] {
  const { line1, line2, line3, city, state, postalCode, country } =
    LEGAL.registeredOffice;
  return [
    line1,
    line2,
    line3,
    city ? `${city} – ${postalCode}` : postalCode,
    state,
    country,
  ]
    .map((part) => part.trim())
    .filter(Boolean);
}

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

export const BUSINESS_DIVISIONS = [
  {
    title: "Software Development",
    description:
      "Custom web and software applications engineered for security, performance, and long-term maintainability.",
    href: "/services#software-development",
  },
  {
    title: "Website Development",
    description:
      "Corporate and product websites built for performance, accessibility, SEO, and conversion.",
    href: "/services#website-development",
  },
  {
    title: "Mobile Applications",
    description:
      "Android applications developed with Flutter and a Node.js backend.",
    href: "/services#mobile-apps",
  },
  {
    title: "AI Solutions",
    description:
      "Practical generative AI, automation, and intelligence layers integrated into business workflows and products.",
    href: "/services#ai-solutions",
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud architecture, deployment, observability, and DevOps for production-grade reliability.",
    href: "/services#cloud-solutions",
  },
  {
    title: "API Development",
    description:
      "REST APIs designed for reliability, documentation, and integration.",
    href: "/services#api-development",
  },
  {
    title: "Social Voice Communication Platform",
    description:
      "A live social voice product for Android (Flutter + Node.js) that is preparing for public release, with rooms, wallets, virtual coins, rankings, and moderation tooling.",
    href: "/social-voice",
  },
  {
    title: "TechRise Academy",
    description:
      "Career-focused IT training with live projects, mentorship, mock interviews, and placement assistance.",
    href: "/academy",
  },
] as const;
