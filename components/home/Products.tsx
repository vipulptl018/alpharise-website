import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Cloud,
  Code2,
  GraduationCap,
  LayoutDashboard,
  Mic,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/common/motion";
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
import { homeProducts } from "@/lib/content/offerings";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const productIcons: Record<string, LucideIcon> = {
  "TechRise Academy": GraduationCap,
  "Social Voice Communication Platform": Mic,
  "Software Development": Code2,
  "Website Development": LayoutDashboard,
  "Mobile Application Development": Code2,
  "AI Solutions": Brain,
  "Cloud Solutions": Cloud,
  "API Development": Code2,
};

const productGradients: Record<string, string> = {
  "TechRise Academy": "from-[#2563EB] to-[#3B82F6]",
  "Social Voice Communication Platform": "from-slate-800 to-slate-600",
  "Software Development": "from-[#1D4ED8] to-[#60A5FA]",
  "Website Development": "from-emerald-500 to-teal-400",
  "Mobile Application Development": "from-teal-500 to-emerald-400",
  "AI Solutions": "from-amber-500 to-orange-400",
  "Cloud Solutions": "from-slate-700 to-slate-500",
  "API Development": "from-[#2563EB] to-[#93C5FD]",
};

export default function Products() {
  return (
    <section
      aria-labelledby="products-heading"
      className={cn(ds.section, ds.sectionWhite)}
    >
      <div aria-hidden className={ds.divider} />

      <Container>
        <FadeIn>
          <SectionTitle
            titleId="products-heading"
            title="Our Products"
            description="TechRise Academy, the Social Voice Communication Platform, enterprise suites, and core delivery capabilities—each with a clear description."
          />
        </FadeIn>

        <Stagger
          className={cn("mt-12", ds.grid4)}
        >
          {homeProducts.map(({ title, description, cta, href }) => {
            const Icon = productIcons[title] ?? Code2;
            const gradient = productGradients[title] ?? "from-slate-700 to-slate-500";
            return (
              <StaggerItem key={title} className="h-full">
                <Card className={ds.card}>
                  <CardHeader className={ds.cardHeader}>
                    <div className={cn(ds.iconGradient, gradient)}>
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
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
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
          <div className={cn(ds.ctaPanel, "text-center")}>
            <p className={ds.ctaEyebrow}>Need a detailed briefing?</p>
            <h3 className={ds.ctaTitle}>
              Review full feature lists on the Products page.
            </h3>
            <Button
              render={<Link href="/products" />}
              size="lg"
              className={cn("mt-7", ds.btnPrimary)}
            >
              View All Products
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
