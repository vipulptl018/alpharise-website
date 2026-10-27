import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/constants";
import { detailPath, detailSlugs } from "@/lib/content/sinchan-mitra-details";
import { FEATURES } from "@/lib/features";

const routes = [
  "/",
  "/about",
  "/services",
  "/products",
  "/social-voice",
  "/sinchan-mitra",
  "/sinchan-mitra/mr",
  "/sinchan-mitra/hi",
  ...detailSlugs.flatMap((slug) => (["en", "mr", "hi"] as const).map((lang) => detailPath(lang, slug))),
  ...(FEATURES.academy ? (["/academy"] as const) : []),
  "/pricing",
  "/support",
  "/careers",
  "/blog",
  "/contact",
  "/community-guidelines",
  "/host-policy",
  "/creator-policy",
  "/user-policy",
  "/virtual-coin-policy",
  "/privacy-policy",
  "/terms",
  "/refund-policy",
  "/cookie-policy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  // No lastModified: every page would just report the build time, which is not
  // a real change date and makes crawlers distrust the field.
  return routes.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    changeFrequency:
      path === "/" || path === "/blog" || path === "/support"
        ? "weekly"
        : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/contact" || path === "/support" || path === "/pricing"
          ? 0.9
          : 0.7,
  }));
}
