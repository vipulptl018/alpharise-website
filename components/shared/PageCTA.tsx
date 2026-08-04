"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ds, fadeUp } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type PageCTAProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  muted?: boolean;
};

export function PageCTA({
  eyebrow = "Ready to get started?",
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  muted = true,
}: PageCTAProps) {
  return (
    <section
      className={cn(ds.section, muted ? ds.sectionMuted : ds.sectionWhite)}
    >
      {muted ? <div aria-hidden className={ds.divider} /> : null}
      <Container>
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
        >
          <div className={cn(ds.ctaPanel, "text-center")}>
            <p className={ds.ctaEyebrow}>{eyebrow}</p>
            <h2 className={ds.ctaTitle}>{title}</h2>
            {description ? (
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                {description}
              </p>
            ) : null}
            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button
                render={<Link href={primaryHref} />}
                size="lg"
                className={ds.btnPrimary}
              >
                {primaryLabel}
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Button>
              {secondaryLabel && secondaryHref ? (
                <Button
                  render={<Link href={secondaryHref} />}
                  variant="outline"
                  size="lg"
                  className={ds.btnOutline}
                >
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
