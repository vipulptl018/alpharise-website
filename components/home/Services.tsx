"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Brain,
  Cloud,
  Code2,
  Globe,
  Palette,
  Server,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
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

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Software Development",
    description:
      "Custom enterprise software tailored to business requirements.",
    icon: Code2,
  },
  {
    title: "Website Development",
    description: "Modern, SEO-friendly websites built with Next.js.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform Android and iOS applications using Flutter.",
    icon: Smartphone,
  },
  {
    title: "AI Solutions",
    description:
      "Generative AI, chatbots, automation, and intelligent business systems.",
    icon: Brain,
  },
  {
    title: "Cloud Solutions",
    description:
      "AWS cloud architecture, deployment, DevOps and monitoring.",
    icon: Cloud,
  },
  {
    title: "API Development",
    description: "High-performance REST APIs using FastAPI and Python.",
    icon: Server,
  },
  {
    title: "UI/UX Design",
    description:
      "Premium user interfaces and intuitive digital experiences.",
    icon: Palette,
  },
  {
    title: "Maintenance & Support",
    description:
      "Continuous monitoring, maintenance, and technical support.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section
      aria-labelledby="services-heading"
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
            titleId="services-heading"
            title="Our Services"
            description="We deliver enterprise-grade digital solutions designed for startups, SMEs, and large organizations."
          />
        </motion.div>

        <motion.ul
          className={cn(
            ds.grid,
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          )}
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map(({ title, description, icon: Icon }) => (
            <motion.li key={title} variants={staggerItem} className="h-full">
              <Card className={ds.card}>
                <CardHeader className={ds.cardHeader}>
                  <div className={ds.iconBox}>
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
          ))}
        </motion.ul>

        <motion.div
          className="mx-auto mt-16 max-w-2xl text-center sm:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className={cn(ds.ctaPanel, "bg-white/80 text-center")}>
            <p className={ds.ctaEyebrow}>Need a custom software solution?</p>
            <h3 className={ds.ctaTitle}>
              Let&apos;s discuss your next project.
            </h3>
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className={cn("mt-7", ds.btnPrimary)}
            >
              Schedule Consultation
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
