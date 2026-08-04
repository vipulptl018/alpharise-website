"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
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
  Target,
  Timer,
  Users,
  Wallet,
} from "lucide-react";

import { SectionTitle } from "@/components/common/SectionTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import {
  ds,
  fadeUp,
  staggerItem,
  staggerList,
} from "@/lib/design-system";
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
        >
          <SectionTitle
            titleId={titleId}
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </motion.div>
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
    columns === "2"
      ? "sm:grid-cols-2"
      : columns === "4"
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <motion.ul
      className={cn(ds.grid, "grid-cols-1", cols)}
      variants={staggerList}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {items.map(({ title, description, icon, gradient }) => {
        const Icon = iconMap[icon];
        return (
          <motion.li key={title} variants={staggerItem} className="h-full">
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
          </motion.li>
        );
      })}
    </motion.ul>
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
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-500" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <h2
            id={`${id}-heading`}
            className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            {overview}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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
