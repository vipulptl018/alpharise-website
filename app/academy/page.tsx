import type { Metadata } from "next";
import Link from "next/link";

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
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "TechRise Academy",
  description:
    "Industry-ready IT training with live projects, mentors, mock interviews, certificates, and placement assistance.",
};

const courses = [
  {
    title: "Python Full Stack",
    duration: "4–6 Months",
    stack: ["Python", "Django", "React"],
  },
  {
    title: "Java Full Stack",
    duration: "5–6 Months",
    stack: ["Java", "Spring", "React"],
  },
  {
    title: ".NET Full Stack",
    duration: "4–5 Months",
    stack: ["C#", ".NET", "SQL"],
  },
  {
    title: "React Development",
    duration: "3–4 Months",
    stack: ["React", "Next.js", "TS"],
  },
  {
    title: "Flutter Development",
    duration: "3–4 Months",
    stack: ["Flutter", "Dart", "API"],
  },
  {
    title: "Testing",
    duration: "3–4 Months",
    stack: ["Manual", "Selenium", "API"],
  },
  {
    title: "Data Analytics",
    duration: "3–4 Months",
    stack: ["SQL", "Python", "Power BI"],
  },
  {
    title: "Artificial Intelligence",
    duration: "4–5 Months",
    stack: ["ML", "OpenAI", "LangChain"],
  },
];

const faqs = [
  {
    q: "Do you offer placement assistance?",
    a: "Yes. We provide resume support, mock interviews, career guidance, and placement assistance.",
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
  return (
    <>
      <PageHero
        eyebrow="TechRise Academy"
        title="Industry-Ready IT Training"
        description="Live projects, industry mentors, mock interviews, and placement assistance designed for real career outcomes."
        primaryCta={{ label: "Explore Courses", href: "#courses" }}
        secondaryCta={{ label: "Talk to Counselor", href: "/contact" }}
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
          <ul
            className={cn(
              ds.grid,
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            )}
          >
            {courses.map((course) => (
              <li key={course.title} className="h-full">
                <Card className={ds.card}>
                  <CardHeader className={ds.cardHeader}>
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={cn(
                          ds.iconGradient,
                          "from-sky-500 to-cyan-400"
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
                    <div className="flex flex-wrap gap-1.5">
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
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200/90 bg-white/80 p-6 text-center shadow-[0_12px_40px_-28px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:p-8">
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
          <div className="mt-10 rounded-2xl border border-slate-200/90 bg-white/80 p-2 sm:p-4">
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
