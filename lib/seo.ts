import type { Metadata } from "next";

import { COMPANY_NAME, SITE_NAME, getSiteUrl } from "@/lib/constants";
import { shareImageAlt, shareImageSize } from "@/lib/share-image";

// A page's own `openGraph` / `twitter` replaces the root layout's, so the file-based
// images from app/opengraph-image.tsx and app/twitter-image.tsx must be repeated here.
const openGraphImages = [
  { url: "/opengraph-image", ...shareImageSize, alt: shareImageAlt },
];
const twitterImages = [{ url: "/twitter-image", alt: shareImageAlt }];

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
  const siteUrl = getSiteUrl();
  const url = path.startsWith("http")
    ? path
    : `${siteUrl}${path === "/" ? "" : path}`;

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
      images: openGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: twitterImages,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    other: {
      "application-name": COMPANY_NAME,
    },
  };
}
