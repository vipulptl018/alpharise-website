import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";

const routes = [
  "/",
  "/about",
  "/services",
  "/products",
  "/social-voice",
  "/academy",
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
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
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
