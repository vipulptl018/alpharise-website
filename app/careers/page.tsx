import Link from "next/link";

import { SectionTitle } from "@/components/common/SectionTitle";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import {
  IconCardGrid,
  SectionShell,
} from "@/components/shared/SectionBlocks";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/Container";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Careers",
  description: "Join ALPHARISE — explore culture, benefits, open positions, and our hiring process.",
  path: "/careers",
});

const roles = [
  {
    title: "Full Stack Engineer",
    type: "Full-time",
    location: "Hybrid / India",
    description: "Build web products with Next.js, Python, and cloud services.",
  },
  {
    title: "AI Engineer",
    type: "Full-time",
    location: "Remote-friendly",
    description: "Design LLM applications, automation, and evaluation systems.",
  },
  {
    title: "Flutter Developer",
    type: "Full-time",
    location: "Hybrid / India",
    description: "Ship polished Android mobile experiences with Flutter and Node.js.",
  },
  {
    title: "Technical Trainer",
    type: "Contract / Full-time",
    location: "Hybrid",
    description: "Mentor TechRise Academy cohorts and review projects.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Meaningful Technology With Us"
        description="Join a team that values craftsmanship, mentorship, and products that create real impact."
        primaryCta={{ label: "View Open Roles", href: "#positions" }}
        secondaryCta={{ label: "Contact HR", href: "/contact" }}
      />

      <SectionShell
        id="culture"
        title="Company Culture"
        description="Collaborative, learning-driven, and focused on high-quality delivery."
      >
        <IconCardGrid
          items={[
            {
              title: "Ownership",
              description: "Engineers own outcomes from design to deployment.",
              icon: "Rocket",
            },
            {
              title: "Mentorship",
              description: "We grow by teaching, reviewing, and pairing.",
              icon: "Users",
            },
            {
              title: "Craft",
              description: "Clean architecture and thoughtful product details.",
              icon: "Laptop",
            },
          ]}
        />
      </SectionShell>

      <SectionShell
        id="benefits"
        title="Benefits"
        description="Support that helps you do your best work."
        muted
      >
        <IconCardGrid
          columns="4"
          items={[
            {
              title: "Competitive Pay",
              description: "Market-aligned compensation.",
              icon: "Wallet",
            },
            {
              title: "Flexible Work",
              description: "Hybrid-friendly collaboration.",
              icon: "Coffee",
            },
            {
              title: "Learning Budget",
              description: "Courses, books, and certifications.",
              icon: "HeartHandshake",
            },
            {
              title: "Growth Path",
              description: "Clear progression and feedback.",
              icon: "Timer",
            },
          ]}
        />
      </SectionShell>

      <section
        id="positions"
        aria-labelledby="positions-heading"
        className={cn(ds.section, ds.sectionWhite)}
      >
        <div aria-hidden className={ds.divider} />
        <Container>
          <SectionTitle
            titleId="positions-heading"
            title="Open Positions"
            description="Current opportunities across engineering and academy teams."
          />
          <ul className={cn(ds.grid, "sm:grid-cols-2")}>
            {roles.map((role) => (
              <li key={role.title} className="h-full">
                <Card className={ds.card}>
                  <CardHeader className={ds.cardHeader}>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="rounded-lg">
                        {role.type}
                      </Badge>
                      <Badge variant="outline" className="rounded-lg">
                        {role.location}
                      </Badge>
                    </div>
                    <CardTitle className={ds.cardTitle}>{role.title}</CardTitle>
                  </CardHeader>
                  <CardContent className={ds.cardContent}>
                    <CardDescription className={ds.cardDescription}>
                      {role.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className={ds.cardFooter}>
                    <Button
                      render={<Link href="/contact" />}
                      variant="outline"
                      className={ds.btnCard}
                    >
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <SectionShell
        id="hiring-process"
        title="Hiring Process"
        description="A transparent process designed to respect your time."
        muted
      >
        <IconCardGrid
          columns="4"
          items={[
            {
              title: "1. Apply",
              description: "Share your profile and preferred role.",
              icon: "Rocket",
            },
            {
              title: "2. Screen",
              description: "Intro conversation with our team.",
              icon: "Users",
            },
            {
              title: "3. Technical",
              description: "Practical assessment or discussion.",
              icon: "Laptop",
            },
            {
              title: "4. Offer",
              description: "Final fit conversation and offer.",
              icon: "HeartHandshake",
            },
          ]}
        />
      </SectionShell>

      <PageCTA
        title="Don't see the right role?"
        description="Send your profile anyway — we're always interested in great people."
        primaryLabel="Submit Application"
        primaryHref="/contact"
        secondaryLabel="About Alpharise"
        secondaryHref="/about"
        muted={false}
      />
    </>
  );
}
