import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import { OfferingBlock } from "@/components/shared/SectionBlocks";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { productsContent } from "@/lib/content/offerings";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Alpharise products including TechRise Academy, Voice Platform, ERP, CRM, HRMS, and Business Websites.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Products That Accelerate Growth"
        description="Powerful digital products designed to accelerate business growth, operations, and digital transformation."
        primaryCta={{ label: "Talk to Our Team", href: "/contact" }}
        secondaryCta={{ label: "TechRise Academy", href: "/academy" }}
      />

      <section className={cn(ds.section, ds.sectionWhite)}>
        <div aria-hidden className={ds.divider} />
        <Container>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {productsContent.map((product) => (
              <Button
                key={product.id}
                render={<Link href={`#${product.id}`} />}
                variant="outline"
                size="sm"
                className="rounded-lg"
              >
                {product.title}
              </Button>
            ))}
          </div>
        </Container>
      </section>

      {productsContent.map((product, index) => (
        <OfferingBlock
          key={product.id}
          id={product.id}
          title={product.title}
          overview={product.overview}
          features={[...product.features]}
          benefits={[...product.benefits]}
          muted={index % 2 === 0}
        />
      ))}

      <PageCTA
        title="Need a custom product?"
        description="Let's build something amazing together for your organization."
        primaryLabel="Get Started"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
