"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Atom,
  BarChart3,
  Boxes,
  Brain,
  Code2,
  Coffee,
  FileText,
  FlaskConical,
  GraduationCap,
  Mic,
  Smartphone,
  Trophy,
  Users,
} from "lucide-react";

import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { ds, fadeUp, staggerItem, staggerList } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type Course = {
  title: string;
  duration: string;
  stack: string[];
  icon: LucideIcon;
  gradient: string;
};

const courses: Course[] = [
  {
    title: "Python Full Stack",
    duration: "4–6 Months",
    stack: ["Python", "Django", "React", "PostgreSQL"],
    icon: Code2,
    gradient: "from-sky-500 to-cyan-400",
  },
  {
    title: "Java Full Stack",
    duration: "5–6 Months",
    stack: ["Java", "Spring Boot", "React", "MySQL"],
    icon: Coffee,
    gradient: "from-amber-500 to-orange-400",
  },
  {
    title: ".NET Full Stack",
    duration: "4–5 Months",
    stack: ["C#", ".NET", "SQL Server", "Azure"],
    icon: Boxes,
    gradient: "from-slate-700 to-slate-500",
  },
  {
    title: "React Development",
    duration: "3–4 Months",
    stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    icon: Atom,
    gradient: "from-cyan-500 to-sky-400",
  },
  {
    title: "Flutter Development",
    duration: "3–4 Months",
    stack: ["Flutter", "Dart", "Firebase", "API"],
    icon: Smartphone,
    gradient: "from-teal-500 to-emerald-400",
  },
  {
    title: "Manual & Automation Testing",
    duration: "3–4 Months",
    stack: ["Selenium", "API Testing", "JMeter", "QA"],
    icon: FlaskConical,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Data Analytics",
    duration: "3–4 Months",
    stack: ["Python", "SQL", "Power BI", "Excel"],
    icon: BarChart3,
    gradient: "from-sky-600 to-blue-400",
  },
  {
    title: "Artificial Intelligence",
    duration: "4–5 Months",
    stack: ["Python", "ML", "OpenAI", "LangChain"],
    icon: Brain,
    gradient: "from-slate-800 to-sky-500",
  },
];

const placementHighlights = [
  { label: "Live Projects", icon: Trophy },
  { label: "Career Guidance", icon: Users },
  { label: "Resume Building", icon: FileText },
  { label: "Mock Interviews", icon: Mic },
] as const;

export default function Academy() {
  return (
    <section
      aria-labelledby="academy-heading"
      className={cn(ds.section, ds.sectionMuted)}
    >
      <div aria-hidden className={ds.divider} />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <SectionTitle
            titleId="academy-heading"
            title="TechRise Academy"
            description="Industry-ready IT training with live projects, industry mentors, mock interviews and placement assistance."
            eyebrow="TechRise Academy"
          />
        </motion.div>

        <motion.ul
          className={cn(
            ds.grid,
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          )}
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {courses.map(({ title, duration, stack, icon: Icon, gradient }) => (
            <motion.li key={title} variants={staggerItem} className="h-full">
              <Card className={ds.card}>
                <CardHeader className={ds.cardHeader}>
                  <div className="flex items-start justify-between gap-3">
                    <div className={cn(ds.iconGradient, gradient)}>
                      <Icon
                        className="size-5"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </div>
                    <Badge
                      variant="secondary"
                      className="rounded-lg border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                    >
                      {duration}
                    </Badge>
                  </div>
                  <CardTitle className={ds.cardTitle}>{title}</CardTitle>
                </CardHeader>

                <CardContent className={ds.cardContent}>
                  <div className="flex flex-wrap gap-1.5">
                    {stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-200/80 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className={ds.cardFooter}>
                  <Button
                    render={<Link href="/contact" />}
                    size="lg"
                    className="h-10 w-full text-sm"
                  >
                    Enroll
                    <ArrowRight data-icon="inline-end" className="size-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-16 sm:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-8 text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.55)] sm:p-10 lg:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
              <div>
                <p className="text-sm font-medium tracking-wide text-sky-300">
                  Placement Excellence
                </p>
                <div className="mt-5 grid grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <p className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                      1000+
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Students Trained
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                      95%
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Placement Assistance
                    </p>
                  </div>
                </div>

                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  {placementHighlights.map(({ label, icon: Icon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-200 backdrop-blur-sm"
                    >
                      <Icon
                        className="size-4 shrink-0 text-sky-300"
                        aria-hidden
                      />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
                <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                  Launch your IT career with confidence
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  Structured mentorship, real-world projects, and interview
                  readiness — built for industry outcomes.
                </p>
                <Button
                  render={<Link href="/products/techrise-academy" />}
                  size="lg"
                  className={cn(
                    "mt-7 bg-white text-slate-950 hover:bg-slate-100",
                    ds.btnPrimary
                  )}
                >
                  Explore Courses
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
