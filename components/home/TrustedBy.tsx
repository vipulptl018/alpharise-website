import {
  Boxes,
  Cloud,
  CloudCog,
  Code2,
  Database,
  Hexagon,
  Smartphone,
  Zap,
} from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/common/motion";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/layout/Container";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const technologies = [
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
    name: "Flutter",
    icon: Smartphone,
    accent: "group-hover:text-[#02569B]",
  },
] as const;

export function TrustedBy() {
  return (
    <section
      aria-labelledby="trusted-by-heading"
      className={cn(ds.section, ds.sectionMuted)}
    >
      <div aria-hidden className={ds.divider} />

      <Container>
        <FadeIn>
          <SectionTitle
            titleId="trusted-by-heading"
            title="Technologies We Use"
            description="We build production software with proven frameworks, databases, and cloud platforms."
          />
        </FadeIn>

        <Stagger
          className={cn(
            ds.grid,
            "mx-auto max-w-5xl grid-cols-2 sm:grid-cols-4"
          )}
          amount={0.2}
        >
          {technologies.map(({ name, icon: Icon, accent }) => (
            <StaggerItem key={name}>
              <div
                className={cn(
                  ds.surface,
                  "group flex h-28 flex-col items-center justify-center gap-3 px-4",
                  "transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "hover:-translate-y-1.5 hover:border-[#BFDBFE] hover:shadow-2xl hover:shadow-blue-500/10"
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
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
