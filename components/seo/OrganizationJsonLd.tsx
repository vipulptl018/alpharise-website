import {
  COMPANY,
  COMPANY_NAME,
  CONTACT,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  LEGAL,
  formatGstinLabel,
} from "@/lib/constants";
import { virtualCoinPackages } from "@/lib/content/pricing";
import { productsPageContent } from "@/lib/content/offerings";
import { socialVoiceFaqs } from "@/lib/content/social-voice";

/** Organization + WebSite + LocalBusiness + Product + FAQ JSON-LD */
export function OrganizationJsonLd() {
  const postal = {
    "@type": "PostalAddress",
    streetAddress: [
      LEGAL.registeredOffice.line1,
      LEGAL.registeredOffice.line2,
      LEGAL.registeredOffice.line3,
    ]
      .filter(Boolean)
      .join(", "),
    addressLocality: LEGAL.registeredOffice.city || undefined,
    addressRegion: LEGAL.registeredOffice.state || undefined,
    postalCode: LEGAL.registeredOffice.postalCode || undefined,
    addressCountry: LEGAL.registeredOffice.country,
  };

  const contactPoint = [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: CONTACT.supportEmail,
      telephone: CONTACT.phone,
      availableLanguage: ["English", "Hindi"],
      areaServed: "IN",
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT.email,
      telephone: CONTACT.phone,
      availableLanguage: ["English", "Hindi"],
      areaServed: "IN",
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: COMPANY_NAME,
        alternateName: SITE_NAME,
        url: SITE_URL,
        description: COMPANY.description,
        email: CONTACT.email,
        telephone: CONTACT.phone,
        foundingDate: String(COMPANY.foundedYear),
        sameAs: [SOCIAL_LINKS.instagram],
        identifier: {
          "@type": "PropertyValue",
          name: "CIN",
          value: LEGAL.cin,
        },
        address: postal,
        contactPoint,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: COMPANY_NAME,
        image: SITE_URL,
        url: SITE_URL,
        telephone: CONTACT.phone,
        email: CONTACT.email,
        address: postal,
        description: COMPANY.description,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        openingHours: "Mo-Sa 10:00-19:00",
        priceRange: "INR",
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "GSTIN",
            value: formatGstinLabel(),
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: COMPANY.description,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-IN",
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/api/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      ...productsPageContent.map((product) => ({
        "@type": "Product",
        "@id": `${SITE_URL}/products#${product.id}`,
        name: product.title,
        description: product.overview,
        brand: { "@id": `${SITE_URL}/#organization` },
        category: "Software / Digital Products",
        url: `${SITE_URL}/products#${product.id}`,
      })),
      ...virtualCoinPackages.map((pack) => ({
        "@type": "Product",
        name: `Social Voice ${pack.name}`,
        description: `${pack.coins}. ${pack.detail}`,
        brand: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: pack.price.replace(/[^\d.]/g, ""),
          availability: "https://schema.org/PreOrder",
          url: `${SITE_URL}/pricing#virtual-coin-packages`,
        },
      })),
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/social-voice#faq`,
        mainEntity: socialVoiceFaqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
