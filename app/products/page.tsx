import Link from "next/link";

import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LastUpdated } from "@/components/shared/LastUpdated";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import {
  IconCardGrid,
  OfferingBlock,
  SectionShell,
} from "@/components/shared/SectionBlocks";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ANDROID_APP_STATUS, SOCIAL_LINKS } from "@/lib/constants";
import { productsPageContent } from "@/lib/content/offerings";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Products",
  description: "Products from ALPHARISE INNOVATION PRIVATE LIMITED: software, websites, mobile apps, AI, cloud, APIs, TechRise Academy, and Social Voice Communication Platform preparing for public release.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Products" }]} />
      <LastUpdated date="August 4, 2026" />
      <PageHero
        eyebrow="Products & Capabilities"
        title="What ALPHARISE Builds and Operates"
        description="Software development, websites, Android mobile application development, AI solutions, cloud solutions, API development, TechRise Academy, and the Social Voice Communication Platform preparing for public release on Android."
        primaryCta={{ label: "Talk to Our Team", href: "/contact" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
      />

      <section className={cn(ds.section, ds.sectionWhite)}>
        <div aria-hidden className={ds.divider} />
        <Container>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {productsPageContent.map((product) => (
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
            <Button
              render={<Link href="#android-app" />}
              variant="outline"
              size="sm"
              className="rounded-lg"
            >
              Android App Release Status
            </Button>
          </div>
        </Container>
      </section>

      {productsPageContent.map((product, index) => (
        <OfferingBlock
          key={product.id}
          id={product.id}
          title={product.title}
          overview={product.overview}
          features={[...product.features]}
          benefits={[...product.benefits]}
          technologies={[...product.technologies]}
          muted={index % 2 === 0}
        />
      ))}

      <SectionShell
        id="android-app"
        title={ANDROID_APP_STATUS.headline}
        description={ANDROID_APP_STATUS.summary}
        muted
      >
        <IconCardGrid
          columns="2"
          items={[
            {
              title: "Flutter Android Client",
              description:
                "The Android application is being developed with Flutter for a modern interface, reliable performance, and maintainable mobile delivery.",
              icon: "Smartphone",
            },
            {
              title: "Node.js Backend",
              description:
                "Backend services run on Node.js to power APIs, authentication, business logic, and integrations for the Android app.",
              icon: "Code2",
            },
            {
              title: "Social Voice for Android",
              description:
                "The Social Voice Communication Platform is designed for Android, including planned live rooms, wallets, virtual coins, and moderation tools.",
              icon: "Users",
            },
            {
              title: "Release Announcements",
              description:
                "When the app becomes publicly available, ALPHARISE will announce it on this website and Instagram. There is no public download link at this time.",
              icon: "Shield",
            },
          ]}
        />
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-600">
          Follow release updates on{" "}
          <Link
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sky-700 underline underline-offset-2"
          >
            Instagram
          </Link>{" "}
          or check this website. Full feature documentation is on the{" "}
          <Link
            href="/social-voice"
            className="font-medium text-sky-700 underline underline-offset-2"
          >
            Social Voice Documentation
          </Link>{" "}
          page.
        </p>
      </SectionShell>

      <PageCTA
        title="Need a written scope or demo?"
        description="We will walk through modules, delivery approach, platform policies, and commercial options."
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
        secondaryLabel="Social Voice Documentation"
        secondaryHref="/social-voice"
      />
    </>
  );
}
