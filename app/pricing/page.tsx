import Link from "next/link";

import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LastUpdated } from "@/components/shared/LastUpdated";
import { PageHero } from "@/components/shared/PageHero";
import { SectionShell } from "@/components/shared/SectionBlocks";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  academyPricing,
  pricingIntro,
  pricingNotes,
  servicePricing,
  virtualCoinPackages,
} from "@/lib/content/pricing";
import { ds } from "@/lib/design-system";
import { FEATURES } from "@/lib/features";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Pricing",
  description: "Pricing for ALPHARISE INNOVATION PRIVATE LIMITED services, Sinchan Mitra subscriptions, and Social Voice Communication Platform virtual coin packages.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Pricing" }]} />
      <LastUpdated date="August 4, 2026" />
      <PageHero
        eyebrow="Pricing"
        title={pricingIntro.title}
        description={pricingIntro.description}
        primaryCta={{ label: "Request a Quote", href: "/contact" }}
        secondaryCta={{ label: "Talk to Support", href: "/support" }}
      />

      <SectionShell
        id="services-pricing"
        title="Professional Services"
        description="Software, AI, cloud, website, and managed support engagements."
      >
        <ul className={cn("mt-12", ds.grid3)}>
          {servicePricing.map((tier) => (
            <li key={tier.name} className="h-full">
              <Card className={ds.card}>
                <CardHeader className={ds.cardHeader}>
                  <CardTitle className={ds.cardTitle}>{tier.name}</CardTitle>
                  <p className="text-sm font-medium text-violet-700">{tier.price}</p>
                </CardHeader>
                <CardContent className={ds.cardContent}>
                  <CardDescription className={ds.cardDescription}>
                    {tier.detail}
                  </CardDescription>
                  <ul className="mt-4 space-y-2">
                    {tier.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className={ds.cardFooter}>
                  <Button
                    render={<Link href="/contact" />}
                    variant="outline"
                    className={ds.btnCard}
                  >
                    Request quote
                  </Button>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell
        id="sinchan-mitra-pricing"
        title="Sinchan Mitra (AgriBusiness SaaS)"
        description="Subscription plans for agri-input shops, irrigation dealers, and related shops. There is no public price list: contact us for pricing and a demo."
        muted
      >
        <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
          <Button
            render={<Link href="/contact" />}
            className={ds.btnPrimary}
          >
            Ask for pricing
          </Button>
          <Button
            render={<Link href="/sinchan-mitra" />}
            variant="outline"
            className={ds.btnOutline}
          >
            See Sinchan Mitra
          </Button>
        </div>
      </SectionShell>

      {FEATURES.academy ? (
      <SectionShell
        id="academy-pricing"
        title="TechRise Academy"
        description="Published starting fees for training programs. Exact track pricing is confirmed before enrollment."
        muted
      >
        <ul className={cn("mt-12", ds.grid2)}>
          {academyPricing.map((tier) => (
            <li key={tier.name} className="h-full">
              <Card className={ds.card}>
                <CardHeader className={ds.cardHeader}>
                  <CardTitle className={ds.cardTitle}>{tier.name}</CardTitle>
                  <p className="text-sm font-medium text-violet-700">{tier.price}</p>
                </CardHeader>
                <CardContent className={ds.cardContent}>
                  <CardDescription className={ds.cardDescription}>
                    {tier.detail}
                  </CardDescription>
                  <ul className="mt-4 space-y-2">
                    {tier.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </SectionShell>
      ) : null}

      <SectionShell
        id="virtual-coin-packages"
        title="Virtual Coin Packages"
        description="Published coin packs for the Social Voice Communication Platform after public release. Coins are digital items only and are not redeemable for cash. Our Android application is currently preparing for public release. Availability will be announced through our official website and Instagram."
      >
        <ul className={cn("mt-12", ds.grid3)}>
          {virtualCoinPackages.map((pack) => (
            <li key={pack.name} className="h-full">
              <Card className={ds.card}>
                <CardHeader className={ds.cardHeader}>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className={ds.cardTitle}>{pack.name}</CardTitle>
                    {pack.badge ? (
                      <span className="rounded-lg border border-violet-200 bg-violet-50 px-2 py-1 text-[10px] font-semibold tracking-wide text-violet-700 uppercase">
                        {pack.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm font-medium text-violet-700">{pack.price}</p>
                  <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                    {pack.coins}
                  </p>
                </CardHeader>
                <CardContent className={ds.cardContent}>
                  <CardDescription className={ds.cardDescription}>
                    {pack.detail}
                  </CardDescription>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-600">
          Purchases are also governed by the{" "}
          <Link
            href="/virtual-coin-policy"
            className="font-medium text-violet-700 underline underline-offset-2"
          >
            Virtual Coin Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/refund-policy"
            className="font-medium text-violet-700 underline underline-offset-2"
          >
            Refund Policy
          </Link>
          . Feature documentation for wallets, gifting, and withdrawals is in the{" "}
          <Link
            href="/social-voice"
            className="font-medium text-violet-700 underline underline-offset-2"
          >
            Social Voice Documentation
          </Link>
          .
        </p>
      </SectionShell>

      <SectionShell
        id="pricing-notes"
        title="Commercial Notes"
        description="Important details for transparent checkout and invoicing."
        muted
      >
        <div
          className={cn(
            "mx-auto mt-12 max-w-3xl",
            ds.surface,
            ds.surfacePad
          )}
        >
          <ul className="space-y-3">
            {pricingNotes.map((note) => (
              <li
                key={note}
                className="flex gap-2 text-sm leading-7 text-slate-600"
              >
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-violet-500" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>
    </>
  );
}
