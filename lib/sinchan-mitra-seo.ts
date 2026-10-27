import type { Metadata } from "next";

import { getSiteUrl } from "@/lib/constants";
import { LANGS, SM_NAME, SM_NAME_MR, langPath, type Lang } from "@/lib/content/sinchan-mitra";
import { copy } from "@/lib/content/sinchan-mitra-copy";
import { detailPath, details, type DetailSlug } from "@/lib/content/sinchan-mitra-details";
import { createPageMetadata } from "@/lib/seo";

const OG_LOCALE: Record<Lang, string> = { en: "en_IN", mr: "mr_IN", hi: "hi_IN" };

/** Title, description, canonical and hreflang links of one language version of the product page. */
export function sinchanMitraMetadata(lang: Lang): Metadata {
  const c = copy[lang];
  const siteUrl = getSiteUrl();
  const base = createPageMetadata({
    title: c.meta.title,
    description: c.meta.description,
    path: langPath(lang),
  });

  const languages: Record<string, string> = {
    "x-default": `${siteUrl}${langPath("en")}`,
  };
  for (const item of LANGS) languages[item.code] = `${siteUrl}${item.path}`;

  return {
    ...base,
    alternates: { canonical: `${siteUrl}${langPath(lang)}`, languages },
    openGraph: { ...base.openGraph, locale: OG_LOCALE[lang] },
  };
}

/** Same for the detail page of one business type. */
export function sinchanMitraDetailMetadata(lang: Lang, slug: DetailSlug): Metadata {
  const d = details[lang].items[slug];
  const siteUrl = getSiteUrl();
  const base = createPageMetadata({
    title: `${d.title} | ${lang === "en" ? SM_NAME : SM_NAME_MR}`,
    description: `${d.tagline} ${d.overview}`,
    path: detailPath(lang, slug),
  });

  const languages: Record<string, string> = {
    "x-default": `${siteUrl}${detailPath("en", slug)}`,
  };
  for (const item of LANGS) languages[item.code] = `${siteUrl}${detailPath(item.code, slug)}`;

  return {
    ...base,
    alternates: { canonical: `${siteUrl}${detailPath(lang, slug)}`, languages },
    openGraph: { ...base.openGraph, locale: OG_LOCALE[lang] },
  };
}
