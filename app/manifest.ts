import type { MetadataRoute } from "next";

import { COMPANY, COMPANY_NAME, SITE_NAME } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_NAME,
    short_name: SITE_NAME,
    description: COMPANY.description,
    start_url: "/",
    display: "browser",
    background_color: "#F8FAFC",
    theme_color: "#2563EB",
    lang: "en-IN",
    icons: [],
  };
}
