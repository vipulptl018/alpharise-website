"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  Boxes,
  Cloud,
  CloudCog,
  Code2,
  CreditCard,
  Database,
  Hexagon,
  Zap,
} from "lucide-react";

import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/layout/Container";
import {
  ds,
  fadeUp,
  staggerItem,
  staggerList,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";

type TechItem = {
  name: string;
  icon: LucideIcon;
  accent: string;
};

const technologies: TechItem[] = [
  { name: "Python", icon: Code2, accent: "group-hover:text-[#3776AB]" },
  { name: "FastAPI", icon: Zap, accent: "group-hover:text-[#009688]" },
  { name: "Next.js", icon: Hexagon, accent: "group-hover:text-slate-950" },
  { name: "Docker", icon: Boxes, accent: "group-hover:text-[#2496ED]" },
  {
    name: "PostgreSQL",
    icon: Database,
    accent: "group-hover:text-[#336791]",
  },
  { name: "AWS", icon: Cloud, accent: "group-hover:text-[#FF9900]" },
  {
    name: "Google Cloud",
    icon: CloudCog,
    accent: "group-hover:text-[#4285F4]",
  },
  {
    name: "Razorpay",
    icon: CreditCard,
    accent: "group-hover:text-[#072654]",
  },
];

export function TrustedBy() {
  return (
    <section
      aria-labelledby="trusted-by-heading"
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
            titleId="trusted-by-heading"
            title="Trusted by Modern Businesses & Technologies"
            description="We build enterprise-grade software using industry-leading technologies and platforms."
          />
        </motion.div>

        <motion.ul
          className={cn(
            ds.grid,
            "mx-auto max-w-5xl grid-cols-2 sm:grid-cols-4"
          )}
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map(({ name, icon: Icon, accent }) => (
            <motion.li key={name} variants={staggerItem}>
              <div
                className={cn(
                  "group flex h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200/90 bg-white/80 px-4",
                  "shadow-[0_12px_40px_-28px_rgba(15,23,42,0.2)] backdrop-blur-xl",
                  "transition-all duration-300 ease-out",
                  "hover:-translate-y-1 hover:border-sky-200/80 hover:bg-white",
                  "hover:shadow-[0_0_0_1px_rgba(14,165,233,0.12),0_22px_48px_-22px_rgba(14,165,233,0.28)]"
                )}
              >
                <Icon
                  className={cn(
                    "size-7 text-slate-400 transition-all duration-300 ease-out motion-safe:group-hover:scale-110",
                    accent
                  )}
                  strokeWidth={1.6}
                  aria-hidden
                />
                <span className="text-xs font-medium tracking-wide text-slate-400 transition-colors duration-300 group-hover:text-slate-700">
                  {name}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
