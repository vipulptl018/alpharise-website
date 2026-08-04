import type { Metadata } from "next";

import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
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
import { COMPANY_NAME, SITE_NAME } from "@/lib/constants";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY_NAME} — our mission, vision, values, leadership, and technology-first approach to digital products.`,
};

const values: IconCardItem[] = [
  {
    title: "Innovation",
    description: "We build with curiosity and ship future-ready solutions.",
    icon: "Lightbulb",
  },
  {
    title: "Integrity",
    description: "Transparent communication and accountable delivery.",
    icon: "Shield",
  },
  {
    title: "Excellence",
    description: "Engineering quality without compromise.",
    icon: "Target",
  },
  {
    title: "Partnership",
    description: "We succeed when our clients and students succeed.",
    icon: "HeartHandshake",
  },
  {
    title: "Scalability",
    description: "Architecture designed for growth from day one.",
    icon: "Layers3",
  },
  {
    title: "People First",
    description: "Teams, mentors, and learners at the center of everything.",
    icon: "Users",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Foundation",
    description: "Alpharise began with a vision to bridge software and skills.",
  },
  {
    year: "2023",
    title: "Product Expansion",
    description: "Launched enterprise platforms and TechRise Academy programs.",
  },
  {
    year: "2024",
    title: "AI Acceleration",
    description: "Integrated AI solutions into client products and training.",
  },
  {
    year: "2025",
    title: "Scale & Impact",
    description: "Expanded delivery across startups, SMEs, and enterprises.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100+", label: "Students Trained" },
  { value: "15+", label: "Enterprise Clients" },
  { value: "98%", label: "Client Satisfaction" },
];

const leaders: IconCardItem[] = [
  {
    title: "Leadership Team",
    description:
      "Engineering & Strategy — Cross-functional leaders guiding architecture, delivery, and growth.",
    icon: "Building2",
  },
  {
    title: "Academy Mentors",
    description:
      "Industry Experts — Practitioners who mentor students with real-world project experience.",
    icon: "Building2",
  },
  {
    title: "Delivery Leads",
    description:
      "Client Success — Program managers ensuring quality, timelines, and clear communication.",
    icon: "Building2",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About ${SITE_NAME}`}
        title="Building Intelligent Products and Careers"
        description={`${COMPANY_NAME} combines enterprise software engineering, AI innovation, and industry-ready training to help businesses and students grow.`}
        primaryCta={{ label: "Work With Us", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services" }}
      />

      <SectionShell
        id="story"
        title="Company Story"
        description="We started with a simple belief: technology should create measurable business value and meaningful career opportunities."
      >
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200/90 bg-white/80 p-6 text-base leading-8 text-slate-600 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:mt-12 sm:p-8">
          <p>
            From early consulting engagements to full-scale product platforms,
            Alpharise has grown into a trusted partner for digital
            transformation. Today we design software, deploy cloud systems,
            build AI capabilities, and train the next generation of engineers
            through TechRise Academy.
          </p>
        </div>
      </SectionShell>

      <SectionShell
        id="mission-vision"
        title="Mission & Vision"
        description="Our purpose guides every product, engagement, and learning program."
        muted
      >
        <div className={cn(ds.grid, "grid-cols-1 md:grid-cols-2")}>
          <Card className={ds.card}>
            <CardHeader className={ds.cardHeader}>
              <CardTitle className={ds.cardTitle}>Mission</CardTitle>
            </CardHeader>
            <CardContent className={ds.cardContent}>
              <CardDescription className={ds.cardDescription}>
                Deliver secure, scalable digital products and practical IT
                education that accelerate growth for businesses and careers.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className={ds.card}>
            <CardHeader className={ds.cardHeader}>
              <CardTitle className={ds.cardTitle}>Vision</CardTitle>
            </CardHeader>
            <CardContent className={ds.cardContent}>
              <CardDescription className={ds.cardDescription}>
                Become a leading technology partner known for engineering
                excellence, AI innovation, and transformative learning outcomes.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </SectionShell>

      <SectionShell
        id="values"
        title="Core Values"
        description="Principles that shape how we design, build, and collaborate."
      >
        <IconCardGrid items={values} />
      </SectionShell>

      <SectionShell
        id="leadership"
        title="Leadership"
        description="Experienced teams driving strategy, mentorship, and delivery excellence."
        muted
      >
        <IconCardGrid columns="3" items={leaders} />
      </SectionShell>

      <SectionShell
        id="timeline"
        title="Timeline"
        description="Key milestones in our journey of building products and people."
      >
        <ol className="mx-auto mt-12 max-w-3xl space-y-5">
          {timeline.map((item) => (
            <li
              key={item.year}
              className="rounded-2xl border border-slate-200/90 bg-white/80 p-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:p-6"
            >
              <p className="text-sm font-semibold text-sky-700">{item.year}</p>
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

      <SectionShell
        id="technology-focus"
        title="Technology Focus"
        description="We invest in modern stacks that power reliable products and practical learning."
        muted
      >
        <IconCardGrid
          columns="3"
          items={[
            {
              title: "Modern Web",
              description: "Next.js, React, TypeScript, and Tailwind CSS.",
              icon: "Layers3",
            },
            {
              title: "Backend & APIs",
              description: "Python, FastAPI, Django, and Node.js services.",
              icon: "Target",
            },
            {
              title: "Cloud & AI",
              description: "AWS, Docker, OpenAI, LangChain, and automation.",
              icon: "Lightbulb",
            },
          ]}
        />
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
                className="rounded-2xl border border-slate-200/90 bg-white/80 p-6 text-center shadow-[0_12px_40px_-28px_rgba(15,23,42,0.2)] backdrop-blur-xl"
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
        title="Let's build the next chapter together"
        description="Partner with Alpharise for software, AI, cloud, or academy programs."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="Explore Products"
        secondaryHref="/products"
      />
    </>
  );
}
