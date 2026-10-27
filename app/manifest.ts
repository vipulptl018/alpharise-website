import type { MetadataRoute } from "next";

import { COMPANY, COMPANY_NAME, SITE_NAME } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_NAME,
    short_name: SITE_NAME,
    description: COMPANY.description,
    start_url: "/",
    display: "browser",
    background_color: "#F8F7FF",
    theme_color: "#4F46E5",
    lang: "en-IN",
    icons: [],
  };
}
