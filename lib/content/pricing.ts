export const pricingIntro = {
  title: "Transparent pricing for services and products",
  description:
    "ALPHARISE publishes commercial structures for consulting work, Sinchan Mitra subscriptions, and Social Voice Communication Platform virtual coin packages. Formal quotes confirm taxes and final totals before payment.",
};

export const servicePricing = [
  {
    name: "Project Delivery",
    price: "Milestone-based quote",
    detail:
      "Software, website, mobile, AI, and cloud projects are priced against an agreed statement of work with clear milestones and acceptance criteria.",
    includes: [
      "Design and engineering",
      "Quality assurance",
      "Deployment support",
      "Knowledge transfer",
    ],
  },
  {
    name: "Managed Support",
    price: "From ₹15,000 / month",
    detail:
      "Ongoing maintenance, monitoring, and enhancement capacity for production systems with defined response expectations.",
    includes: [
      "Uptime monitoring",
      "Security updates",
      "Priority support channel",
      "Monthly status reporting",
    ],
  },
  {
    name: "Website Package",
    price: "From ₹60,000",
    detail:
      "Corporate website package including design system alignment, core pages, SEO foundations, and analytics setup.",
    includes: [
      "Responsive page set",
      "SEO foundations",
      "Contact workflows",
      "Launch support",
    ],
  },
] as const;

export const academyPricing = [
  {
    name: "Career Track (Standard)",
    price: "From ₹45,000",
    detail:
      "Core program fee for selected full-stack or specialty tracks. Duration and stack determine the final package shared during counseling.",
    includes: [
      "Live instructor-led sessions",
      "Project assignments",
      "Mentor check-ins",
      "Certificate of completion",
    ],
  },
  {
    name: "Career Track (Placement Assist)",
    price: "From ₹65,000",
    detail:
      "Includes standard training plus intensified interview preparation and placement-assistance workflows. Assistance does not guarantee employment.",
    includes: [
      "Everything in Standard",
      "Mock interviews",
      "Resume and portfolio reviews",
      "Placement assistance process",
    ],
  },
] as const;

export const virtualCoinPackages = [
  {
    name: "Starter Pack",
    coins: "50 Coins",
    price: "₹49",
    badge: null,
    detail: "Entry package for trying gifts and lightweight in-room interactions after public release.",
  },
  {
    name: "Basic Pack",
    coins: "100 Coins",
    price: "₹98",
    badge: null,
    detail: "A straightforward pack for regular gift activity.",
  },
  {
    name: "Value Pack",
    coins: "200 Coins",
    price: "₹190",
    badge: "Save 5%",
    detail: "Better per-coin value for frequent room participation.",
  },
  {
    name: "Popular Pack",
    coins: "500 Coins",
    price: "₹449",
    badge: "12% Extra Value",
    detail: "Higher-volume package for active participants and creators.",
  },
  {
    name: "Premium Pack",
    coins: "1200 Coins",
    price: "₹899",
    badge: "15% Extra Value",
    detail: "Larger allocation for hosts and creators with regular activity.",
  },
  {
    name: "Studio Pack",
    coins: "2,400 Coins",
    price: "₹1,999",
    badge: "20% Extra Value",
    detail:
      "Best-value package for regular platform users, hosts, and creators. Includes 20% extra value compared to the standard coin value.",
  },
] as const;

export const productPricing = [
  {
    name: "TechRise Academy",
    price: "Program-based fees",
    detail:
      "See academy packages above. Counselors confirm the exact track, duration, and inclusions before enrollment payment.",
  },
  {
    name: "Social Voice Communication Platform",
    price: "Free access + paid coins (after public release)",
    detail:
      "Core participation is intended to be free after public release. Virtual coin packages will power optional gifts and disclosed paid features under the Virtual Coin Policy. Our Android application is currently preparing for public release. Availability will be announced through our official website and Instagram.",
  },
] as const;

export const pricingNotes = [
  "Prices are listed in Indian Rupees (INR) and are exclusive of applicable GST unless a quote states otherwise. GSTIN: Not Applicable.",
  "Virtual coins have no cash value outside the platform and are governed by the Virtual Coin Policy.",
  "Formal invoices are issued for paid services and subscriptions where applicable.",
  "Refund eligibility follows the Refund Policy and the commercial agreement for each purchase.",
  "Package prices may be updated periodically; the amount shown at checkout or in a signed quote prevails.",
  "For custom project scope, contact admin@alphariseinnovation.com or visit Support.",
  "Social Voice feature documentation is published at /social-voice. Our Android application is currently preparing for public release. Availability will be announced through our official website and Instagram.",
] as const;
