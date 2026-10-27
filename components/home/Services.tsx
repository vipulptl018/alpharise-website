import Link from "next/link";
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
import type { LucideIcon } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/common/motion";
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
import { homeServices } from "@/lib/content/offerings";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const serviceIcons: Record<(typeof homeServices)[number]["id"], LucideIcon> = {
  "software-development": Code2,
  "website-development": Globe,
  "mobile-apps": Smartphone,
  "ai-solutions": Brain,
  "cloud-solutions": Cloud,
  "api-development": Server,
  "ui-ux-design": Palette,
  maintenance: ShieldCheck,
};

export default function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className={cn(ds.section, ds.sectionMuted)}
    >
      <div aria-hidden className={ds.divider} />

      <Container>
        <FadeIn>
          <SectionTitle
            titleId="services-heading"
            title="Our Services"
            description="Every professional service ALPHARISE delivers—software, websites, Android mobile apps, AI, cloud, APIs, design, and maintenance—with clear descriptions."
          />
        </FadeIn>

        <Stagger
          className={cn("mt-12", ds.grid4)}
        >
          {homeServices.map(({ id, title, description }) => {
            const Icon = serviceIcons[id];
            return (
              <StaggerItem key={id} className="h-full">
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
                    <Link
                      href={`/services#${id}`}
                      className="mt-4 inline-flex text-sm font-medium text-[#4F46E5] underline-offset-2 hover:underline"
                    >
                      View details
                    </Link>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
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
        </FadeIn>
      </Container>
    </section>
  );
}
