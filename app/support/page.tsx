import Link from "next/link";
import { Clock3, Mail, MessageSquareText, Phone } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import { SectionShell } from "@/components/shared/SectionBlocks";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CONTACT } from "@/lib/constants";
import { footerNavigation } from "@/lib/navigation";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Support",
  description: "Customer support for ALPHARISE INNOVATION PRIVATE LIMITED services, Sinchan Mitra, and the Social Voice Communication Platform.",
  path: "/support",
});

const channels = [
  {
    title: "Email Support",
    description:
      "Best for account, billing, product, and policy questions. Include relevant order or account details.",
    value: CONTACT.supportEmail,
    href: `mailto:${CONTACT.supportEmail}`,
    icon: Mail,
  },
  {
    title: "Business Inquiries",
    description:
      "For new projects, partnerships, and enterprise proposals, contact our primary business inbox.",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: MessageSquareText,
  },
  ...(CONTACT.phone
    ? [
        {
          title: "Phone",
          description:
            "Call during business hours for time-sensitive support or sales coordination.",
          value: CONTACT.phone,
          href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
          icon: Phone,
        },
      ]
    : []),
  {
    title: "Business Hours",
    description:
      "We aim to respond within one business day. Complex investigations may take longer with status updates.",
    value: CONTACT.hours,
    href: undefined,
    icon: Clock3,
  },
] as const;

const topics = [
  {
    title: "Services & Delivery",
    description:
      "Project status, change requests, maintenance, and technical incidents for client systems.",
  },
  {
    title: "Sinchan Mitra",
    description:
      "Set-up for your business type, activation and renewal codes, backups and updates, and how-to questions about billing, stock, and reports.",
  },
  {
    title: "Social Voice Platform",
    description:
      "Account access, OTP issues, host/creator tools, moderation reports, wallet, gifts, withdrawals, and virtual coin questions. See Social Voice Documentation for feature guides.",
  },
  {
    title: "Billing & Pricing",
    description:
      "Invoices, payment confirmation, package questions, and refund-policy clarifications.",
  },
] as const;

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Customer Support"
        description="Professional help for ALPHARISE services, products, Sinchan Mitra, and the Social Voice Communication Platform (Android app preparing for public release)."
        primaryCta={{ label: "Email Support", href: `mailto:${CONTACT.supportEmail}` }}
        secondaryCta={{ label: "Social Voice Docs", href: "/social-voice" }}
      />

      <SectionShell
        id="support-channels"
        title="How to Reach Us"
        description="Choose the channel that matches your request so we can respond efficiently."
      >
        <ul className={cn("mt-12", ds.grid2)}>
          {channels.map(({ title, description, value, href, icon: Icon }) => (
            <li key={title} className="h-full">
              <Card className={ds.card}>
                <CardHeader className={ds.cardHeader}>
                  <div className={ds.iconBox}>
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <CardTitle className={ds.cardTitle}>{title}</CardTitle>
                </CardHeader>
                <CardContent className={ds.cardContent}>
                  <CardDescription className={ds.cardDescription}>
                    {description}
                  </CardDescription>
                  {href ? (
                    <a
                      href={href}
                      className="mt-4 inline-flex text-sm font-medium text-violet-700 underline-offset-2 hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-4 text-sm font-medium text-slate-800">
                      {value}
                    </p>
                  )}
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell
        id="support-topics"
        title="Common Support Topics"
        description="We assist across delivery, education, platform operations, and commercial questions."
        muted
      >
        <ul className={cn("mt-12", ds.grid2)}>
          {topics.map((topic) => (
            <li key={topic.title} className="h-full">
              <Card className={ds.card}>
                <CardHeader className={ds.cardHeader}>
                  <CardTitle className={ds.cardTitle}>{topic.title}</CardTitle>
                </CardHeader>
                <CardContent className={ds.cardContent}>
                  <CardDescription className={ds.cardDescription}>
                    {topic.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell
        id="policy-resources"
        title="Policy Resources"
        description="Review published policies before escalating disputes whenever possible."
      >
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {footerNavigation.platform.map((item) => (
            <Button
              key={item.href}
              render={<Link href={item.href} />}
              variant="outline"
              size="sm"
              className="rounded-lg"
            >
              {item.label}
            </Button>
          ))}
          <Button
            render={<Link href="/pricing" />}
            variant="outline"
            size="sm"
            className="rounded-lg"
          >
            Pricing
          </Button>
          <Button
            render={<Link href="/refund-policy" />}
            variant="outline"
            size="sm"
            className="rounded-lg"
          >
            Refund Policy
          </Button>
        </div>
      </SectionShell>

      <PageCTA
        title="Need help right away?"
        description="Email admin@alphariseinnovation.com with your account details and a clear summary of the issue."
        primaryLabel="Email Support"
        primaryHref={`mailto:${CONTACT.supportEmail}`}
        secondaryLabel="Social Voice Docs"
        secondaryHref="/social-voice"
      />
    </>
  );
}
