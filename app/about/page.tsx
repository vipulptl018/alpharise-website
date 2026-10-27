import Link from "next/link";

import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LastUpdated } from "@/components/shared/LastUpdated";
import {
  IconCardGrid,
  SectionShell,
  type IconCardItem,
} from "@/components/shared/SectionBlocks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { BUSINESS_DIVISIONS, COMPANY_NAME, SITE_NAME } from "@/lib/constants";
import {
  companyOverview,
  customerSupport,
  platformSafety,
  technologyExpertise,
} from "@/lib/content/company";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description: "About ALPHARISE INNOVATION PRIVATE LIMITED — company overview, business divisions, technology expertise, platform safety, and customer support.",
  path: "/about",
});

const values: IconCardItem[] = [
  {
    title: "Innovation",
    description:
      "We apply modern engineering and practical AI to solve real business problems.",
    icon: "Lightbulb",
  },
  {
    title: "Integrity",
    description:
      "Clear commercial terms, honest timelines, and accountable delivery.",
    icon: "Shield",
  },
  {
    title: "Excellence",
    description:
      "Quality architecture, testing, and operations without cutting corners.",
    icon: "Target",
  },
  {
    title: "Partnership",
    description:
      "We succeed when clients, learners, and platform communities succeed.",
    icon: "HeartHandshake",
  },
  {
    title: "Scalability",
    description:
      "Systems and products designed to grow with demand and complexity.",
    icon: "Layers3",
  },
  {
    title: "Responsibility",
    description:
      "Published safety, support, and monetization policies for trustworthy products.",
    icon: "Users",
  },
];

const timeline = [
  {
    year: "2026",
    title: "Company Incorporation",
    description:
      "ALPHARISE INNOVATION PRIVATE LIMITED was incorporated in India (CIN U62091PN2026PTC253412) with registered office in Chikhali, Haveli, Pune, Maharashtra.",
  },
  {
    year: "2026",
    title: "Services & Products Published",
    description:
      "Public offerings cover software development, websites, Android mobile applications, AI solutions, cloud solutions, enterprise software, and the Sinchan Mitra AgriBusiness SaaS.",
  },
  {
    year: "2026",
    title: "Social Voice Platform Documentation",
    description:
      "Feature documentation and platform policies were published for the Social Voice Communication Platform, which is preparing for public release on Android, including wallets, virtual coins, host and creator programs, and safety tooling.",
  },
  {
    year: "2026",
    title: "Support & Commercial Transparency",
    description:
      "Contact channels, business hours, pricing structures, refund rules, and legal policies were published for customer review before purchase.",
  },
];

const stats = [
  { value: "2026", label: "Incorporation Year" },
  { value: "Pune", label: "Registered Office" },
  { value: "Android", label: "Voice Platform" },
  { value: "IST", label: "Business Hours Zone" },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About" }]} />
      <LastUpdated date="August 4, 2026" />
      <PageHero
        eyebrow={`About ${SITE_NAME}`}
        title="A Professional Technology Company"
        description={`${COMPANY_NAME} provides software development, website development, Android mobile applications, AI solutions, cloud solutions, and the Sinchan Mitra AgriBusiness SaaS, and is developing a Social Voice Communication Platform for Android that is preparing for public release.`}
        primaryCta={{ label: "Work With Us", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />

      <SectionShell
        id="company-overview"
        title={companyOverview.title}
        description={companyOverview.description}
      >
        <div
          className={cn(
            "mx-auto mt-12 max-w-3xl space-y-4 text-base leading-8 text-slate-600",
            ds.surface,
            ds.surfacePad
          )}
        >
          {companyOverview.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="business-divisions"
        title="Business Divisions"
        description="Our work is organized around the capabilities that matter most to customers and learners."
        muted
      >
        <IconCardGrid
          items={BUSINESS_DIVISIONS.map((division) => ({
            title: division.title,
            description: division.description,
            icon:
              division.title === "Software Development"
                ? "Code2"
                : division.title === "AI Solutions"
                  ? "Lightbulb"
                  : division.title === "Cloud Solutions"
                    ? "Layers3"
                    : division.title === "API Development"
                      ? "Code2"
                      : division.title === "Social Voice Communication Platform"
                        ? "Users"
                        : division.title === "TechRise Academy"
                          ? "GraduationCap"
                          : division.title === "Sinchan Mitra"
                            ? "Layers3"
                            : division.title === "Website Development"
                            ? "Laptop"
                            : "Smartphone",
          }))}
        />
      </SectionShell>

      <SectionShell
        id="mission-vision"
        title="Mission & Vision"
        description="A clear purpose guides every engagement, product release, and customer rollout."
      >
        <div className={cn("mt-12", ds.grid2)}>
          <Card className={ds.card}>
            <CardHeader className={ds.cardHeader}>
              <CardTitle className={ds.cardTitle}>Mission</CardTitle>
            </CardHeader>
            <CardContent className={ds.cardContent}>
              <CardDescription className={ds.cardDescription}>
                Help organizations and professionals grow through secure
                software, responsible AI, reliable cloud systems, and practical
                education.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className={ds.card}>
            <CardHeader className={ds.cardHeader}>
              <CardTitle className={ds.cardTitle}>Vision</CardTitle>
            </CardHeader>
            <CardContent className={ds.cardContent}>
              <CardDescription className={ds.cardDescription}>
                Be a trusted technology partner known for engineering quality,
                transparent operations, and products people can rely on.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </SectionShell>

      <SectionShell
        id="values"
        title="Core Values"
        description="Principles that shape how we design, build, operate, and support."
        muted
      >
        <IconCardGrid items={values} />
      </SectionShell>

      <SectionShell
        id="technology-expertise"
        title="Technology Expertise"
        description="We invest in proven stacks and delivery practices for production systems."
      >
        <IconCardGrid items={technologyExpertise} />
      </SectionShell>

      <SectionShell
        id="platform-safety"
        title="Platform Safety"
        description="Safety and fairness are built into how we operate the Social Voice Communication Platform. See documentation for feature-level safety, reporting, and fraud-prevention guidance."
        muted
      >
        <IconCardGrid columns="2" items={platformSafety} />
        <div className="mt-8 flex justify-center">
          <Link
            href="/social-voice#fraud-prevention"
            className="text-sm font-medium text-violet-700 underline underline-offset-2"
          >
            Open Social Voice safety documentation
          </Link>
        </div>
      </SectionShell>

      <SectionShell
        id="customer-support"
        title="Customer Support"
        description="Professional support channels keep customers informed and issues resolved."
      >
        <IconCardGrid columns="2" items={customerSupport} />
      </SectionShell>

      <SectionShell
        id="timeline"
        title="Company Timeline"
        description="Key milestones in building products, services, and learning programs."
        muted
      >
        <ol className="mx-auto mt-12 max-w-3xl space-y-5">
          {timeline.map((item) => (
            <li
              key={item.title}
              className={cn(ds.surface, ds.surfacePadSm)}
            >
              <p className="text-sm font-semibold text-violet-700">{item.year}</p>
              <h3 className="font-heading mt-1 text-lg font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <section
        aria-labelledby="about-stats-heading"
        className={cn(ds.section, ds.sectionWhite)}
      >
        <div aria-hidden className={ds.divider} />
        <Container>
          <h2 id="about-stats-heading" className="sr-only">
            Company Statistics
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={cn(ds.surface, "p-6 text-center")}
              >
                <p className="font-heading text-3xl font-semibold tracking-tight text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PageCTA
        title="Partner with ALPHARISE"
        description="Discuss software development, AI, cloud solutions, or Sinchan Mitra."
        primaryLabel="Contact Sales"
        primaryHref="/contact"
        secondaryLabel="Visit Support"
        secondaryHref="/support"
      />
    </>
  );
}
