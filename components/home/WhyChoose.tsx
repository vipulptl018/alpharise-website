"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building,
  Cloud,
  Headphones,
  Rocket,
  ShieldCheck,
  Sparkles,
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

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Enterprise Software",
    description:
      "Custom enterprise software built for scalability and performance.",
    icon: Building,
  },
  {
    title: "AI Powered Solutions",
    description:
      "Generative AI, Automation and Intelligent Business Solutions.",
    icon: Sparkles,
  },
  {
    title: "Cloud Native",
    description:
      "Deploy highly available cloud applications using AWS and modern infrastructure.",
    icon: Cloud,
  },
  {
    title: "Security First",
    description:
      "Security best practices with authentication, authorization and data protection.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Development",
    description:
      "Rapid development using Next.js, FastAPI and modern engineering workflows.",
    icon: Rocket,
  },
  {
    title: "24×7 Support",
    description:
      "Continuous maintenance, monitoring and technical support.",
    icon: Headphones,
  },
];

export default function WhyChoose() {
  return (
    <section
      aria-labelledby="why-choose-heading"
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
            titleId="why-choose-heading"
            title="Why Choose Alpharise"
            description="We combine technology, innovation and engineering excellence to deliver secure, scalable and future-ready digital products."
          />
        </motion.div>

        <motion.ul
          className={cn(ds.grid, "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3")}
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {features.map(({ title, description, icon: Icon }) => (
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
          <div className={cn(ds.ctaPanel, "text-center")}>
            <p className={ds.ctaEyebrow}>Need a technology partner?</p>
            <h3 className={ds.ctaTitle}>
              Build your next digital product with Alpharise.
            </h3>
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className={cn("mt-7", ds.btnPrimary)}
            >
              Start Your Project
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
