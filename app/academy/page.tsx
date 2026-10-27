import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import {
  IconCardGrid,
  SectionShell,
} from "@/components/shared/SectionBlocks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LastUpdated } from "@/components/shared/LastUpdated";
import { academyCourses } from "@/lib/content/academy-courses";
import { ds } from "@/lib/design-system";
import { FEATURES } from "@/lib/features";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "TechRise Academy",
  description: "Industry-ready IT training with live projects, mentors, mock interviews, certificates, and placement assistance.",
  path: "/academy",
});

const courses = academyCourses;

const faqs = [
  {
    q: "Do you offer placement assistance?",
    a: "Yes. We provide resume support, mock interviews, career guidance, and placement assistance. Assistance does not guarantee a job offer.",
  },
  {
    q: "Are projects included?",
    a: "Every program includes live projects aligned to industry use cases.",
  },
  {
    q: "Do students receive certificates?",
    a: "Yes. Students receive course completion certificates after assessments.",
  },
  {
    q: "Is the training online or offline?",
    a: "We offer flexible cohort formats. Contact us for current batch details.",
  },
];

export default function AcademyPage() {
  // Hidden from the public site; flip FEATURES.academy in lib/features.ts to show it again.
  if (!FEATURES.academy) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Academy", href: "/academy" },
          { label: "TechRise Academy" },
        ]}
      />
      <LastUpdated date="August 4, 2026" />
      <PageHero
        eyebrow="TechRise Academy"
        title="Industry-Ready IT Training by ALPHARISE"
        description="TechRise Academy delivers structured programs with live projects, mentors, mock interviews, and placement assistance. Placement assistance does not guarantee employment."
        primaryCta={{ label: "Explore Courses", href: "#courses" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
      />

      <SectionShell
        id="categories"
        title="Course Categories"
        description="Choose a path across full-stack, mobile, testing, analytics, and AI."
      >
        <IconCardGrid
          columns="4"
          items={[
            {
              title: "Full Stack",
              description: "Python, Java, and .NET professional tracks.",
              icon: "Code2",
            },
            {
              title: "Frontend & Mobile",
              description: "React and Flutter development programs.",
              icon: "BookOpen",
            },
            {
              title: "Quality & Data",
              description: "Testing and data analytics specializations.",
              icon: "ClipboardCheck",
            },
            {
              title: "AI Programs",
              description: "Practical AI engineering and automation.",
              icon: "GraduationCap",
            },
          ]}
        />
      </SectionShell>

      <section
        id="courses"
        aria-labelledby="courses-heading"
        className={cn(ds.section, ds.sectionMuted)}
      >
        <div aria-hidden className={ds.divider} />
        <Container>
          <h2
            id="courses-heading"
            className="font-heading text-center text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
          >
            Course Cards
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600 sm:text-lg">
            Structured programs with defined duration and technology stacks.
          </p>
          <ul className={cn("mt-12", ds.grid4)}>
            {courses.map((course) => (
              <li key={course.title} className="h-full">
                <Card className={ds.card}>
                  <CardHeader className={ds.cardHeader}>
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={cn(
                          ds.iconGradient,
                          "from-violet-500 to-cyan-400"
                        )}
                      >
                        <span className="text-sm font-semibold">TR</span>
                      </div>
                      <Badge
                        variant="secondary"
                        className="rounded-lg border border-slate-200 bg-slate-50 text-[10px]"
                      >
                        {course.duration}
                      </Badge>
                    </div>
                    <CardTitle className={ds.cardTitle}>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className={ds.cardContent}>
                    <p className="text-sm leading-6 text-slate-600">
                      {course.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500">
                        {course.level}
                      </span>
                      {course.liveProjects ? (
                        <span className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500">
                          Live Projects
                        </span>
                      ) : null}
                      {course.certificate ? (
                        <span className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500">
                          Certificate
                        </span>
                      ) : null}
                      {course.placementAssistance ? (
                        <span className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500">
                          Placement Assistance
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {course.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className={ds.cardFooter}>
                    <Button
                      render={<Link href="/contact" />}
                      className="h-10 w-full text-sm"
                    >
                      Enroll
                    </Button>
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <SectionShell
        id="training-process"
        title="Training Process"
        description="A practical path from fundamentals to portfolio-ready delivery."
      >
        <IconCardGrid
          items={[
            {
              title: "Learn",
              description: "Concept mastery with guided mentor sessions.",
              icon: "BookOpen",
            },
            {
              title: "Build",
              description: "Apply skills through live industry projects.",
              icon: "Code2",
            },
            {
              title: "Review",
              description: "Code reviews, feedback loops, and assessments.",
              icon: "CheckCircle2",
            },
          ]}
        />
      </SectionShell>

      <SectionShell
        id="placement-process"
        title="Placement Process"
        description="Career support designed to improve interview readiness and outcomes."
        muted
      >
        <IconCardGrid
          items={[
            {
              title: "Profile Building",
              description: "Resume, LinkedIn, and portfolio preparation.",
              icon: "FileBadge",
            },
            {
              title: "Mock Interviews",
              description: "Technical and HR interview simulations.",
              icon: "Users",
            },
            {
              title: "Opportunity Matching",
              description: "Guidance toward relevant openings and referrals.",
              icon: "Briefcase",
            },
          ]}
        />
      </SectionShell>

      <SectionShell
        id="student-journey"
        title="Student Journey"
        description="From enrollment to placement — a clear, supported pathway."
      >
        <IconCardGrid
          columns="4"
          items={[
            {
              title: "Enroll",
              description: "Choose a track and join an active cohort.",
              icon: "Route",
            },
            {
              title: "Train",
              description: "Attend sessions and complete weekly milestones.",
              icon: "GraduationCap",
            },
            {
              title: "Ship Projects",
              description: "Deliver portfolio-quality applications.",
              icon: "Code2",
            },
            {
              title: "Get Hired",
              description: "Interview prep and placement assistance.",
              icon: "Award",
            },
          ]}
        />
      </SectionShell>

      <SectionShell
        id="mentors"
        title="Industry Mentors"
        description="Learn from practitioners with real delivery experience."
        muted
      >
        <IconCardGrid
          items={[
            {
              title: "Software Mentors",
              description: "Full-stack and backend engineering guidance.",
              icon: "Code2",
            },
            {
              title: "Product Mentors",
              description: "Architecture, quality, and delivery best practices.",
              icon: "Users",
            },
            {
              title: "Career Mentors",
              description: "Interview strategy and professional communication.",
              icon: "Briefcase",
            },
          ]}
        />
      </SectionShell>

      <SectionShell
        id="certificates"
        title="Certificates"
        description="Recognize progress with completion certificates after evaluation."
      >
        <div
          className={cn(
            "mx-auto mt-12 max-w-3xl text-center",
            ds.surface,
            ds.surfacePad
          )}
        >
          <p className="font-heading text-lg font-semibold text-slate-950">
            TechRise Certificate of Completion
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Students who complete coursework, projects, and assessments receive
            a TechRise Academy certificate validating their skills and project
            experience.
          </p>
        </div>
      </SectionShell>

      <section className={cn(ds.section, ds.sectionMuted)}>
        <div aria-hidden className={ds.divider} />
        <Container size="md">
          <h2 className="font-heading text-center text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            FAQ
          </h2>
          <div className={cn("mt-10", ds.accordionShell)}>
            <Accordion>
              {faqs.map((item, index) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${index}`}
                  className="px-3 sm:px-4"
                >
                  <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-7 text-slate-600">
                    <p>{item.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <PageCTA
        title="Start your TechRise journey"
        description="Join the next cohort and build career-ready skills with live projects."
        primaryLabel="Apply Now"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
        muted={false}
      />
    </>
  );
}
