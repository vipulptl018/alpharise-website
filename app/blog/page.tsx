
import { PageHero } from "@/components/shared/PageHero";
import { BlogContent } from "@/components/shared/BlogContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Blog",
  description: "Engineering, AI, cloud, product, and career insights from ALPHARISE INNOVATION PRIVATE LIMITED.",
  path: "/blog",
});

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
