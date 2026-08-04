"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Cloud,
  Database,
  Layers,
  Server,
  Workflow,
} from "lucide-react";

import { SectionTitle } from "@/components/common/SectionTitle";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { ds, fadeUp, staggerItem, staggerList } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type TechCategory = {
  title: string;
  icon: LucideIcon;
  accent: string;
  border: string;
  items: string[];
};

const categories: TechCategory[] = [
  {
    title: "Frontend",
    icon: Layers,
    accent: "from-sky-500 to-cyan-400",
    border: "from-sky-400/70 via-cyan-300/40 to-transparent",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "from-emerald-500 to-teal-400",
    border: "from-emerald-400/70 via-teal-300/40 to-transparent",
    items: ["Python", "FastAPI", "Django", "Node.js"],
  },
  {
    title: "Database",
    icon: Database,
    accent: "from-amber-500 to-orange-400",
    border: "from-amber-400/70 via-orange-300/40 to-transparent",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    accent: "from-slate-700 to-sky-500",
    border: "from-slate-500/60 via-sky-400/40 to-transparent",
    items: ["AWS", "Docker", "Cloudflare"],
  },
  {
    title: "DevOps",
    icon: Workflow,
    accent: "from-cyan-600 to-sky-400",
    border: "from-cyan-400/70 via-sky-300/40 to-transparent",
    items: ["GitHub", "Git", "Linux", "CI/CD"],
  },
  {
    title: "AI",
    icon: Brain,
    accent: "from-slate-800 to-cyan-500",
    border: "from-slate-600/60 via-cyan-400/40 to-transparent",
    items: ["OpenAI", "LangChain", "MCP", "Vector Database"],
  },
];

export default function Technology() {
  return (
    <section
      aria-labelledby="technology-heading"
      className={cn(ds.section, ds.sectionWhite)}
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
            titleId="technology-heading"
            title="Technology Stack"
            description="Modern technologies powering our software solutions."
          />
        </motion.div>

        <motion.ul
          className={cn(ds.grid, "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3")}
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map(({ title, icon: Icon, accent, border, items }) => (
            <motion.li key={title} variants={staggerItem} className="h-full">
              <div
                className={cn(
                  "group h-full rounded-2xl bg-gradient-to-br p-px transition-transform duration-300 ease-out",
                  "hover:-translate-y-1",
                  border
                )}
              >
                <Card className="flex h-full flex-col rounded-[calc(1rem-1px)] border-0 bg-white/90 py-0 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.28)] ring-0 backdrop-blur-xl">
                  <CardHeader className={ds.cardHeader}>
                    <div className="flex items-center gap-3">
                      <div className={cn(ds.iconGradient, accent)}>
                        <Icon
                          className="size-5"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </div>
                      <CardTitle className={ds.cardTitle}>{title}</CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className={ds.cardContent}>
                    <ul className="grid grid-cols-2 gap-2.5">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2.5 text-center text-sm font-medium text-slate-600 transition-colors duration-300 group-hover:border-slate-300 group-hover:bg-white group-hover:text-slate-800"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
