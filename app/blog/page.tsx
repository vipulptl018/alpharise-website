import type { Metadata } from "next";

import { PageHero } from "@/components/shared/PageHero";
import { BlogContent } from "@/components/shared/BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering, AI, cloud, product, and career insights from ALPHARISE Innovation Private Limited.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Ideas for Builders and Leaders"
        description="Practical articles on software engineering, AI, cloud platforms, and career growth."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services" }}
      />
      <BlogContent />
    </>
  );
}
