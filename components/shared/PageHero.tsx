"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ds, fadeUp } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type Cta = {
  label: string;
  href: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: PageHeroProps) {
  const headingId = "page-hero-heading";

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative overflow-hidden border-b border-slate-200/70 bg-[#f8fafc] py-20 sm:py-24 lg:py-28",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_45%)]"
      />

      <Container className="relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {eyebrow ? (
            <p className="mb-4 text-sm font-medium tracking-wide text-sky-700">
              {eyebrow}
            </p>
          ) : null}
          <h1
            id={headingId}
            className="font-heading text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            {description}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              {primaryCta ? (
                <Button
                  render={<Link href={primaryCta.href} />}
                  size="lg"
                  className={ds.btnPrimary}
                >
                  {primaryCta.label}
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button
                  render={<Link href={secondaryCta.href} />}
                  variant="outline"
                  size="lg"
                  className={ds.btnOutline}
                >
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
