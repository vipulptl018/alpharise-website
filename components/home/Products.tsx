"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  LayoutDashboard,
  Mic,
  Users,
  Globe,
} from "lucide-react";

import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { ds, fadeUp, staggerItem, staggerList } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type Product = {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
  gradient: string;
};

const products: Product[] = [
  {
    title: "TechRise Academy",
    description:
      "Industry-ready IT training with live projects, mock interviews and placement assistance.",
    cta: "Explore Courses",
    href: "/products/techrise-academy",
    icon: GraduationCap,
    gradient: "from-sky-500 to-cyan-400",
  },
  {
    title: "Voice Communication Platform",
    description:
      "Real-time voice communication platform with coins, wallets, rankings and live interactions.",
    cta: "View Product",
    href: "/products/voice-platform",
    icon: Mic,
    gradient: "from-slate-800 to-slate-600",
  },
  {
    title: "ERP Solution",
    description:
      "Manage HR, Finance, Inventory and Operations from one unified platform.",
    cta: "Learn More",
    href: "/products/erp",
    icon: LayoutDashboard,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "CRM Platform",
    description:
      "Customer relationship management with automation and analytics.",
    cta: "Learn More",
    href: "/products/crm",
    icon: Users,
    gradient: "from-amber-500 to-orange-400",
  },
  {
    title: "HRMS",
    description:
      "Employee management, payroll, attendance and performance tracking.",
    cta: "Learn More",
    href: "/products/hrms",
    icon: Briefcase,
    gradient: "from-sky-600 to-cyan-400",
  },
  {
    title: "Business Websites",
    description:
      "Premium corporate websites built with Next.js and modern UI.",
    cta: "Get Started",
    href: "/contact",
    icon: Globe,
    gradient: "from-slate-700 to-slate-500",
  },
];

export default function Products() {
  return (
    <section
      aria-labelledby="products-heading"
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
            titleId="products-heading"
            title="Our Products"
            description="Powerful digital products designed to accelerate business growth and digital transformation."
          />
        </motion.div>

        <motion.ul
          className={cn(ds.grid, "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3")}
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map(
            ({ title, description, cta, href, icon: Icon, gradient }) => (
              <motion.li key={title} variants={staggerItem} className="h-full">
                <Card className={ds.card}>
                  <CardHeader className={ds.cardHeader}>
                    <div className={cn(ds.iconGradient, gradient)}>
                      <Icon
                        className="size-5"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </div>
                    <CardTitle className={ds.cardTitle}>{title}</CardTitle>
                  </CardHeader>

                  <CardContent className={ds.cardContent}>
                    <CardDescription className={ds.cardDescription}>
                      {description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className={ds.cardFooter}>
                    <Button
                      render={<Link href={href} />}
                      variant="outline"
                      size="lg"
                      className={ds.btnCard}
                    >
                      {cta}
                      <ArrowRight data-icon="inline-end" className="size-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.li>
            )
          )}
        </motion.ul>

        <motion.div
          className="mx-auto mt-16 max-w-2xl text-center sm:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className={cn(ds.ctaPanel, "text-center")}>
            <p className={ds.ctaEyebrow}>Need a custom product?</p>
            <h3 className={ds.ctaTitle}>
              Let&apos;s build something amazing together.
            </h3>
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className={cn("mt-7", ds.btnPrimary)}
            >
              Talk to Our Team
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
