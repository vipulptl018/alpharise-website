import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/common/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ds } from "@/lib/design-system";
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
        "relative overflow-hidden border-b border-[#E2E8F0] py-12 sm:py-16 lg:py-20",
        className
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 premium-mesh" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.14),transparent_42%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent"
      />

      <Container className="relative">
        <FadeIn mode="mount" className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <p className={cn(ds.eyebrow, "mb-4")}>{eyebrow}</p>
          ) : null}
          <h1
            id={headingId}
            className="font-heading text-3xl font-semibold tracking-[-0.035em] text-[#0F172A] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
          >
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
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
        </FadeIn>
      </Container>
    </section>
  );
}
