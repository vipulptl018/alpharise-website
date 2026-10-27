import {
  Award,
  Briefcase,
  Code2,
  GraduationCap,
  Layers,
  Smile,
} from "lucide-react";

import { CountUp } from "@/components/common/CountUp";
import { FadeIn, Stagger, StaggerItem } from "@/components/common/motion";
import { SectionTitle } from "@/components/common/SectionTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { ds } from "@/lib/design-system";
import { FEATURES } from "@/lib/features";
import { cn } from "@/lib/utils";

const allStats = [
  {
    value: 2026,
    suffix: "",
    label: "Incorporation Year",
    icon: Award,
    gradient: "from-[#4F46E5] to-[#7C3AED]",
  },
  {
    value: 19,
    suffix: "",
    label: "Academy Courses",
    icon: GraduationCap,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    value: 8,
    suffix: "",
    label: "Product Areas",
    icon: Layers,
    gradient: "from-amber-500 to-orange-400",
  },
  {
    value: 6,
    suffix: "",
    label: "Support Days / Week",
    icon: Briefcase,
    gradient: "from-slate-700 to-slate-500",
  },
  {
    value: 1,
    suffix: "",
    label: "Official Instagram Channel",
    icon: Code2,
    gradient: "from-[#4F46E5] to-[#A78BFA]",
  },
  {
    value: 100,
    suffix: "%",
    label: "Transparent Pricing Intent",
    icon: Smile,
    gradient: "from-[#4338CA] to-[#A78BFA]",
  },
] as const;

const stats = allStats.filter(
  (stat) => FEATURES.academy || stat.label !== "Academy Courses"
);

export default function Statistics() {
  return (
    <section
      aria-labelledby="statistics-heading"
      className={cn(ds.section, ds.sectionMuted)}
    >
      <div aria-hidden className={ds.divider} />

      <Container>
        <FadeIn>
          <SectionTitle
            titleId="statistics-heading"
            title="Company Snapshot"
            description="Key facts about ALPHARISE offerings and support hours."
          />
        </FadeIn>

        <Stagger
          className={cn("mt-12", ds.grid3)}
        >
          {stats.map(({ value, suffix, label, icon: Icon, gradient }) => (
            <StaggerItem key={label} className="h-full">
              <Card className={ds.card}>
                <CardHeader className={ds.cardHeader}>
                  <div className={cn(ds.iconGradient, gradient)}>
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <CardTitle className="font-heading text-4xl font-semibold tracking-tight text-slate-950 tabular-nums sm:text-[2.5rem]">
                    <CountUp
                      target={value}
                      suffix={suffix}
                      label={label}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent className={ds.cardContent}>
                  <CardDescription className={ds.cardDescription} aria-hidden>
                    {label}
                  </CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
