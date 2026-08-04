import Link from "next/link";
import {
  ArrowRight,
  Atom,
  BarChart3,
  Boxes,
  Brain,
  Code2,
  Coffee,
  Database,
  FileText,
  FlaskConical,
  Mic,
  Network,
  Smartphone,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/common/motion";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { academyCourses } from "@/lib/content/academy-courses";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const iconFor = (title: string): LucideIcon => {
  if (title.includes("Python")) return Code2;
  if (title.includes("Java")) return Coffee;
  if (title.includes(".NET")) return Boxes;
  if (title.includes("React")) return Atom;
  if (title.includes("Flutter")) return Smartphone;
  if (title.includes("Node")) return Network;
  if (title.includes("Testing")) return FlaskConical;
  if (title.includes("SQL") || title.includes("Database")) return Database;
  if (title.includes("Power BI") || title.includes("Analytics")) return BarChart3;
  if (title.includes("Science") || title.includes("Engineering")) return BarChart3;
  if (title.includes("Machine") || title.includes("Artificial")) return Brain;
  if (title.includes("Generative")) return Sparkles;
  if (title.includes("Internship") || title.includes("Placement")) return Trophy;
  return Code2;
};

const homeCourses = academyCourses.slice(0, 8);

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
        <FadeIn>
          <SectionTitle
            titleId="academy-heading"
            title="TechRise Academy"
            description="Industry-ready IT training with live projects, industry mentors, mock interviews and placement assistance."
          />
        </FadeIn>

        <Stagger
          className={cn(ds.grid, "mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4")}
        >
          {homeCourses.map((course) => {
            const Icon = iconFor(course.title);
            return (
              <StaggerItem key={course.title} className="h-full">
                <Card className={ds.card}>
                  <CardHeader className={ds.cardHeader}>
                    <div className={cn(ds.iconGradient, "from-[#2563EB] to-[#3B82F6]")}>
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </div>
                    <CardTitle className={ds.cardTitle}>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className={ds.cardContent}>
                    <p className="text-sm leading-6 text-slate-600">
                      {course.description}
                    </p>
                    <p className="mt-3 text-xs font-medium text-slate-500">
                      {course.duration} · {course.level}
                    </p>
                  </CardContent>
                  <CardFooter className={ds.cardFooter}>
                    <Button
                      render={<Link href="/academy#courses" />}
                      variant="outline"
                      className={ds.btnCard}
                    >
                      View course
                      <ArrowRight data-icon="inline-end" className="size-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {placementHighlights.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600"
            >
              <Icon className="size-4 text-[#2563EB]" aria-hidden />
              {label}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button render={<Link href="/academy" />} size="lg" className={ds.btnPrimary}>
            View all Academy courses
            <ArrowRight data-icon="inline-end" className="size-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
