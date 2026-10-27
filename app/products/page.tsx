import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import { ShotCard } from "@/components/sinchan-mitra/frames";
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
import { SM_NAME, SM_NAME_MR, SM_PATH, shots } from "@/lib/content/sinchan-mitra";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Products",
  description: "Products from ALPHARISE INNOVATION PRIVATE LIMITED: the Sinchan Mitra AgriBusiness SaaS, software, websites, mobile apps, AI, cloud, APIs, and Social Voice Communication Platform preparing for public release.",
  path: "/products",
});

const sinchanMitraHighlights = [
  "Billing with barcode scan, GST, cash, UPI, credit and cheque",
  "Stock with batch and expiry, registers and licence reminders",
  "Udhaar ledger per farmer, with Kharif and Rabi seasons",
  "Irrigation files with Aalekh farm layouts in 2D and 3D",
  "GST return worksheets and a CA / year-end pack",
  "Marathi, Hindi and English; Windows app with an Android helper app",
];

export default function ProductsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Products" }]} />
      <LastUpdated date="August 4, 2026" />
      <PageHero
        eyebrow="Products & Capabilities"
        title="What ALPHARISE Builds and Operates"
        description="The Sinchan Mitra AgriBusiness SaaS, software development, websites, Android mobile application development, AI solutions, cloud solutions, API development, and the Social Voice Communication Platform preparing for public release on Android."
        primaryCta={{ label: "Talk to Our Team", href: "/contact" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
      />

      <section className={cn(ds.section, ds.sectionWhite)}>
        <div aria-hidden className={ds.divider} />
        <Container>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <Button
              render={<Link href="#agribusiness-saas" />}
              variant="outline"
              size="sm"
              className="rounded-lg border-emerald-300 text-emerald-800"
            >
              Sinchan Mitra App
            </Button>
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

      <SectionShell
        id="agribusiness-saas"
        eyebrow="AgriBusiness SaaS"
        title="Sinchan Mitra App (सिंचन मित्र)"
        description="Our SaaS for agri-input shops, irrigation dealers and related shops: one app for billing, stock, udhaar, reports and irrigation files."
        muted
      >
        <div
          className={cn(
            "mx-auto mt-12 grid max-w-5xl items-center gap-8 lg:grid-cols-[1.1fr_1fr]",
            ds.surface,
            ds.surfacePad
          )}
        >
          <div>
            <div className="flex items-center gap-4">
              <Image
                src={shots.logo.src}
                alt="Sinchan Mitra logo"
                width={64}
                height={64}
                unoptimized
                className="size-16 rounded-full"
              />
              <div>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-[#0F172A]">
                  {SM_NAME} App
                </h3>
                <p className="text-sm text-slate-500">
                  {SM_NAME_MR} · Windows app and Android helper app
                </p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {sinchanMitraHighlights.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<Link href={SM_PATH} />}
                size="lg"
                className={ds.btnPrimary}
              >
                Open the Sinchan Mitra page
              </Button>
              <Button
                render={<Link href="/contact" />}
                variant="outline"
                size="lg"
                className={ds.btnOutline}
              >
                Request a demo
              </Button>
            </div>
          </div>
          <Link href={SM_PATH} aria-label="Open the Sinchan Mitra page">
            <ShotCard
              shot={shots.billing}
              alt="Sinchan Mitra billing screen in Marathi"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </Link>
        </div>
      </SectionShell>

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
            className="font-medium text-violet-700 underline underline-offset-2"
          >
            Instagram
          </Link>{" "}
          or check this website. Full feature documentation is on the{" "}
          <Link
            href="/social-voice"
            className="font-medium text-violet-700 underline underline-offset-2"
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
