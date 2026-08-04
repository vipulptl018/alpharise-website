import type { Metadata } from "next";

import { COMPANY_NAME, SITE_NAME, SITE_URL } from "@/lib/constants";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

/** Shared metadata builder to keep canonical, OpenGraph, and Twitter consistent. */
export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = path.startsWith("http")
    ? path
    : `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    other: {
      "application-name": COMPANY_NAME,
    },
  };
}
