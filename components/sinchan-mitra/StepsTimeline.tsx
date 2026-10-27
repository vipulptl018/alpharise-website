"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ChartColumn, Check, Monitor, Package, Receipt, Store, Wallet } from "lucide-react";

import { FadeIn } from "@/components/common/motion";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  Store,
  Monitor,
  Package,
  Receipt,
  Wallet,
  ChartColumn,
};

type Step = { title: string; description: string; points: string[] };

/** Vertical step-by-step timeline: the green line fills as the visitor scrolls down. */
export function StepsTimeline({ steps, iconNames }: { steps: Step[]; iconNames: string[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 });

  return (
    <ol ref={ref} className="relative mx-auto mt-14 max-w-5xl space-y-10 lg:space-y-14">
      {/* the track and the part that fills while scrolling */}
      <div
        aria-hidden
        className="absolute top-2 bottom-2 left-[1.375rem] w-0.5 -translate-x-1/2 rounded-full bg-[var(--sm-line)] lg:left-1/2"
      >
        <m.div
          className="h-full w-full origin-top rounded-full bg-gradient-to-b from-[var(--sm-brand)] via-[var(--sm-brand-2)] to-[var(--sm-sky)]"
          style={{ scaleY: reduceMotion ? 1 : fill }}
        />
      </div>

      {steps.map((step, index) => {
        const Icon = icons[iconNames[index]] ?? Store;
        const left = index % 2 === 0;
        return (
          <li
            key={step.title}
            className="relative grid grid-cols-[2.75rem_1fr] gap-x-4 lg:grid-cols-[1fr_2.75rem_1fr] lg:gap-x-10"
          >
            <span
              aria-hidden
              className="relative z-10 col-start-1 row-start-1 flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--sm-grad-a)] to-[var(--sm-grad-b)] text-white shadow-lg shadow-emerald-500/30 ring-4 ring-[var(--sm-bg)] lg:col-start-2"
            >
              <Icon className="size-5" strokeWidth={1.9} />
            </span>

            <FadeIn
              amount={0.25}
              className={cn(
                "col-start-2 row-start-1",
                left ? "lg:col-start-1" : "lg:col-start-3"
              )}
            >
              <div className="rounded-3xl border border-[var(--sm-line)] bg-[var(--sm-card)] p-6 shadow-xl shadow-emerald-950/5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[var(--sm-brand)] hover:shadow-2xl hover:shadow-emerald-500/10">
                <p className="text-xs font-semibold tracking-[0.14em] text-[var(--sm-brand-ink)] uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading mt-1 text-xl font-semibold tracking-[-0.02em] text-[var(--sm-ink)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--sm-muted)]">{step.description}</p>
                <ul className="mt-4 space-y-2">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-6 text-[var(--sm-ink)]"
                    >
                      <Check
                        className="mt-1 size-4 shrink-0 text-[var(--sm-brand)]"
                        strokeWidth={3}
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </li>
        );
      })}
    </ol>
  );
}
