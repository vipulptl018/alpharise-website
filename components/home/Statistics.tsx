"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  Code2,
  GraduationCap,
  Layers,
  Smile,
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
import { ds, fadeUp, staggerItem, staggerList } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
  gradient: string;
};

const stats: Stat[] = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    icon: Briefcase,
    gradient: "from-sky-500 to-cyan-400",
  },
  {
    value: 100,
    suffix: "+",
    label: "Students Trained",
    icon: GraduationCap,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    value: 20,
    suffix: "+",
    label: "Technologies",
    icon: Layers,
    gradient: "from-amber-500 to-orange-400",
  },
  {
    value: 15,
    suffix: "+",
    label: "Enterprise Clients",
    icon: Code2,
    gradient: "from-slate-700 to-slate-500",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    icon: Award,
    gradient: "from-cyan-600 to-sky-400",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    icon: Smile,
    gradient: "from-sky-600 to-blue-400",
  },
];

function useCountUp(target: number, enabled: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!enabled) return;

    if (reduceMotion) {
      setValue(target);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, enabled, duration, reduceMotion]);

  return value;
}

function StatCard({ value, suffix, label, icon: Icon, gradient }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(value, inView);

  return (
    <Card ref={ref} className={ds.card}>
      <CardHeader className={ds.cardHeader}>
        <div className={cn(ds.iconGradient, gradient)}>
          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
        </div>
        <CardTitle className="font-heading text-4xl font-semibold tracking-tight text-slate-950 tabular-nums sm:text-[2.5rem]">
          <span aria-hidden>
            {count}
            {suffix}
          </span>
          <span className="sr-only">
            {value}
            {suffix} {label}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className={ds.cardContent}>
        <CardDescription className={ds.cardDescription} aria-hidden>
          {label}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default function Statistics() {
  return (
    <section
      aria-labelledby="statistics-heading"
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
            titleId="statistics-heading"
            title="Our Impact"
            description="Helping businesses and students grow through technology."
          />
        </motion.div>

        <motion.ul
          className={cn(ds.grid, "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3")}
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {stats.map((stat) => (
            <motion.li key={stat.label} variants={staggerItem} className="h-full">
              <StatCard {...stat} />
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
