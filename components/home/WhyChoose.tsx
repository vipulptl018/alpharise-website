import Link from "next/link";
import {
  ArrowRight,
  Building,
  Cloud,
  Headphones,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

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
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Custom Software",
    description:
      "Custom software built for scalability, security, and performance.",
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
    description: "Continuous maintenance, monitoring and technical support.",
    icon: Headphones,
  },
] as const;

export default function WhyChoose() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className={cn(ds.section, ds.sectionWhite)}
    >
      <div aria-hidden className={ds.divider} />

      <Container>
        <FadeIn>
          <SectionTitle
            titleId="why-choose-heading"
            title="Why Choose ALPHARISE"
            description="A professional technology company combining software engineering, AI, cloud delivery, and the Sinchan Mitra AgriBusiness SaaS under clear commercial and safety policies."
          />
        </FadeIn>

        <Stagger
          className={cn("mt-12", ds.grid3)}
          amount={0.12}
        >
          {features.map(({ title, description, icon: Icon }) => (
            <StaggerItem key={title} className="h-full">
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
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
          <div className={cn(ds.ctaPanel, "text-center")}>
            <p className={ds.ctaEyebrow}>Need a technology partner?</p>
            <h3 className={ds.ctaTitle}>
              Build your next digital product with ALPHARISE.
            </h3>
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className={cn("mt-7", ds.btnPrimary)}
            >
              Start Your Project
              <ArrowRight data-icon="inline-end" className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
