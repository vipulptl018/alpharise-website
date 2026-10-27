import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Coffee,
  FileBadge,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Layers3,
  Lightbulb,
  Rocket,
  Route,
  Shield,
  Smartphone,
  Target,
  Timer,
  Users,
  Wallet,
} from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/common/motion";
import { SectionTitle } from "@/components/common/SectionTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export const iconMap = {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Coffee,
  FileBadge,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Layers3,
  Lightbulb,
  Rocket,
  Route,
  Shield,
  Smartphone,
  Target,
  Timer,
  Users,
  Wallet,
} as const;

export type IconName = keyof typeof iconMap;

type SectionShellProps = {
  id?: string;
  title: string;
  description?: string;
  eyebrow?: string;
  muted?: boolean;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  title,
  description,
  eyebrow,
  muted = false,
  children,
  className,
}: SectionShellProps) {
  const titleId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn(
        ds.section,
        muted ? ds.sectionMuted : ds.sectionWhite,
        className
      )}
    >
      <div aria-hidden className={ds.divider} />
      <Container>
        <FadeIn amount={0.35}>
          <SectionTitle
            titleId={titleId}
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </FadeIn>
        {children}
      </Container>
    </section>
  );
}

export type IconCardItem = {
  title: string;
  description: string;
  icon: IconName;
  gradient?: string;
};

type IconCardGridProps = {
  items: IconCardItem[];
  columns?: "2" | "3" | "4";
};

export function IconCardGrid({ items, columns = "3" }: IconCardGridProps) {
  const cols =
    columns === "2" ? ds.grid2 : columns === "4" ? ds.grid4 : ds.grid3;

  return (
    <Stagger className={cn("mt-12", cols)}>
      {items.map(({ title, description, icon, gradient }) => {
        const Icon = iconMap[icon];
        return (
          <StaggerItem key={title} className="h-full">
            <Card className={ds.card}>
              <CardHeader className={ds.cardHeader}>
                <div
                  className={cn(
                    gradient ? ds.iconGradient : ds.iconBox,
                    gradient
                  )}
                >
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                </div>
                <CardTitle className={ds.cardTitle}>{title}</CardTitle>
              </CardHeader>
              <CardContent className={ds.cardContent}>
                <CardDescription className={ds.cardDescription}>
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

type BulletCardProps = {
  title: string;
  items: string[];
  icon?: LucideIcon;
};

export function BulletCard({ title, items, icon: Icon }: BulletCardProps) {
  return (
    <Card className={ds.card}>
      <CardHeader className={ds.cardHeader}>
        {Icon ? (
          <div className={ds.iconBox}>
            <Icon className="size-5" strokeWidth={1.75} aria-hidden />
          </div>
        ) : null}
        <CardTitle className={ds.cardTitle}>{title}</CardTitle>
      </CardHeader>
      <CardContent className={ds.cardContent}>
        <ul className="space-y-2.5">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-6 text-slate-600"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#4F46E5]" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

type WorkflowStepsProps = {
  title: string;
  steps: { title: string; description: string }[];
};

/** Numbered workflow using existing card styles — no new design tokens. */
export function WorkflowSteps({ title, steps }: WorkflowStepsProps) {
  return (
    <div className="mt-10 sm:mt-12">
      <h3 className="font-heading text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
        {title}
      </h3>
      <ol className="mt-5 space-y-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-xl shadow-slate-900/5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-[#DDD6FE] hover:shadow-2xl hover:shadow-violet-500/10 sm:p-6"
          >
            <div className="flex gap-4">
              <span
                className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F5F3FF] to-white text-sm font-semibold text-[#4F46E5] ring-1 ring-[#DDD6FE]"
                aria-hidden
              >
                {index + 1}
              </span>
              <div>
                <h4 className="font-heading text-base font-semibold text-slate-950">
                  {step.title}
                </h4>
                <p className="mt-1.5 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

type OfferingBlockProps = {
  id: string;
  title: string;
  overview: string;
  features: string[];
  benefits: string[];
  technologies?: string[];
  muted?: boolean;
};

export function OfferingBlock({
  id,
  title,
  overview,
  features,
  benefits,
  technologies,
  muted = false,
}: OfferingBlockProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(ds.section, muted ? ds.sectionMuted : ds.sectionWhite)}
    >
      <div aria-hidden className={ds.divider} />
      <Container>
        <FadeIn amount={0.3} className="max-w-3xl">
          <h2
            id={`${id}-heading`}
            className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            {overview}
          </p>
        </FadeIn>

        <div className={cn("mt-10", ds.grid3)}>
          <BulletCard title="Features" items={features} />
          <BulletCard title="Benefits" items={benefits} />
          {technologies ? (
            <BulletCard title="Technology" items={technologies} />
          ) : (
            <Card className={ds.card}>
              <CardHeader className={ds.cardHeader}>
                <CardTitle className={ds.cardTitle}>Get Started</CardTitle>
              </CardHeader>
              <CardContent className={ds.cardContent}>
                <CardDescription className={ds.cardDescription}>
                  Talk to our team to scope, design, and deliver this solution
                  for your organization.
                </CardDescription>
              </CardContent>
            </Card>
          )}
        </div>
      </Container>
    </section>
  );
}
