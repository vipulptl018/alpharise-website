import Link from "next/link";

import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import { OfferingBlock } from "@/components/shared/SectionBlocks";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { servicesContent } from "@/lib/content/offerings";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services",
  description: "Software development, AI solutions, cloud solutions, APIs, UI/UX, websites, mobile apps, and maintenance from ALPHARISE INNOVATION PRIVATE LIMITED.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Software, AI, and Cloud Delivery"
        description="ALPHARISE provides professional technology services for organizations that need secure software, practical AI, and production-ready cloud operations."
        primaryCta={{ label: "Schedule Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
      />

      <section className={cn(ds.section, ds.sectionWhite)}>
        <div aria-hidden className={ds.divider} />
        <Container>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {servicesContent.map((service) => (
              <Button
                key={service.id}
                render={<Link href={`#${service.id}`} />}
                variant="outline"
                size="sm"
                className="rounded-lg"
              >
                {service.title}
              </Button>
            ))}
          </div>
        </Container>
      </section>

      {servicesContent.map((service, index) => (
        <OfferingBlock
          key={service.id}
          id={service.id}
          title={service.title}
          overview={service.overview}
          features={[...service.features]}
          benefits={[...service.benefits]}
          technologies={[...service.technologies]}
          muted={index % 2 === 0}
        />
      ))}

      <PageCTA
        title="Need a custom software solution?"
        description="Tell us about your goals — we'll help you scope, design, and deliver."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Explore Academy"
        secondaryHref="/academy"
        muted={false}
      />
    </>
  );
}
