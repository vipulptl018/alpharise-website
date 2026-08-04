import Link from "next/link";

import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LastUpdated } from "@/components/shared/LastUpdated";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import {
  IconCardGrid,
  SectionShell,
  WorkflowSteps,
} from "@/components/shared/SectionBlocks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ANDROID_APP_STATUS, COMPANY_NAME, SOCIAL_LINKS } from "@/lib/constants";
import {
  socialVoiceFaqs,
  socialVoiceMeta,
  socialVoiceSections,
  socialVoiceToc,
} from "@/lib/content/social-voice";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Social Voice Documentation",
  description: "Feature documentation for the Social Voice Communication Platform Android application operated by ALPHARISE INNOVATION PRIVATE LIMITED.",
  path: "/social-voice",
});

export default function SocialVoiceDocsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Products", href: "/products" },
          { label: "Social Voice Documentation" },
        ]}
      />
      <LastUpdated date={socialVoiceMeta.lastUpdated} />
      <PageHero
        eyebrow={socialVoiceMeta.eyebrow}
        title={socialVoiceMeta.title}
        description={socialVoiceMeta.description}
        primaryCta={{ label: "View Coin Pricing", href: "/pricing#virtual-coin-packages" }}
        secondaryCta={{ label: "Get Support", href: "/support" }}
      />

      <section className={cn(ds.section, ds.sectionWhite)}>
        <div aria-hidden className={ds.divider} />
        <Container>
          <div
            className={cn(
              "mx-auto max-w-3xl",
              ds.surface,
              ds.surfacePad
            )}
          >
            <p className="text-sm leading-7 text-slate-600">
              Operated by {COMPANY_NAME}. Platform: {socialVoiceMeta.platform}.{" "}
              Stack: {socialVoiceMeta.stack}. Last updated:{" "}
              {socialVoiceMeta.lastUpdated}.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {ANDROID_APP_STATUS.summary} Follow{" "}
              <Link
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky-700 underline underline-offset-2"
              >
                Instagram
              </Link>{" "}
              for release updates.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Related policies:{" "}
              <Link
                href="/community-guidelines"
                className="font-medium text-sky-700 underline underline-offset-2"
              >
                Community Guidelines
              </Link>
              ,{" "}
              <Link
                href="/host-policy"
                className="font-medium text-sky-700 underline underline-offset-2"
              >
                Host Policy
              </Link>
              ,{" "}
              <Link
                href="/creator-policy"
                className="font-medium text-sky-700 underline underline-offset-2"
              >
                Creator Policy
              </Link>
              ,{" "}
              <Link
                href="/user-policy"
                className="font-medium text-sky-700 underline underline-offset-2"
              >
                User Policy
              </Link>
              ,{" "}
              <Link
                href="/virtual-coin-policy"
                className="font-medium text-sky-700 underline underline-offset-2"
              >
                Virtual Coin Policy
              </Link>
              ,{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-sky-700 underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              , and{" "}
              <Link
                href="/terms"
                className="font-medium text-sky-700 underline underline-offset-2"
              >
                Terms
              </Link>
              .
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {socialVoiceToc.map((item) => (
              <Button
                key={item.id}
                render={<Link href={`#${item.id}`} />}
                variant="outline"
                size="sm"
                className="rounded-lg"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </Container>
      </section>

      {socialVoiceSections.map((section, index) => (
        <SectionShell
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          muted={index % 2 === 1}
        >
          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-base leading-8 text-slate-600 sm:mt-12">
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {section.highlights && section.highlights.length > 0 ? (
            <div className="mt-10 sm:mt-12">
              <IconCardGrid
                columns={section.highlights.length > 3 ? "2" : "3"}
                items={section.highlights}
              />
            </div>
          ) : null}

          {section.workflow ? (
            <div className="mx-auto max-w-3xl">
              <WorkflowSteps
                title={section.workflow.title}
                steps={section.workflow.steps}
              />
            </div>
          ) : null}

          {section.relatedLinks && section.relatedLinks.length > 0 ? (
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap gap-2">
              {section.relatedLinks.map((link) => (
                <Button
                  key={link.href + link.label}
                  render={<Link href={link.href} />}
                  variant="outline"
                  size="sm"
                  className="rounded-lg"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          ) : null}
        </SectionShell>
      ))}

      <SectionShell
        id="faq"
        title="Frequently Asked Questions"
        description="Short answers about the Android Social Voice Communication Platform."
        muted
      >
        <div className="mx-auto mt-10 max-w-3xl space-y-4 sm:mt-12">
          {socialVoiceFaqs.map((item) => (
            <Card key={item.question} className={ds.card}>
              <CardHeader className={ds.cardHeader}>
                <CardTitle className={ds.cardTitle}>{item.question}</CardTitle>
              </CardHeader>
              <CardContent className={ds.cardContent}>
                <CardDescription className={ds.cardDescription}>
                  {item.answer}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionShell>

      <PageCTA
        title="Questions about Social Voice?"
        description="Contact Support for product, policy, or release-status questions during published business hours. Public Android release will be announced on this website and Instagram."
        primaryLabel="Open Support"
        primaryHref="/support"
        secondaryLabel="View Products"
        secondaryHref="/products#android-app"
      />
    </>
  );
}
