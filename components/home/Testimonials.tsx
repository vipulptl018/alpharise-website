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
import { cn } from "@/lib/utils";

/** Factual engagement themes — no attributed customer quotes. */
const engagementThemes = [
  {
    title: "Custom software delivery",
    description:
      "Scoped requirements, architecture, implementation, and handover for custom business applications.",
  },
  {
    title: "Website and product sites",
    description:
      "Corporate and product websites built for performance, accessibility, SEO foundations, and maintainability.",
  },
  {
    title: "Android application work",
    description:
      "Android clients developed with Flutter and Node.js backends for APIs and production operations.",
  },
  {
    title: "AI and cloud systems",
    description:
      "Practical AI integrations and cloud architecture, deployment, and monitoring for production workloads.",
  },
  {
    title: "TechRise Academy training",
    description:
      "Career-focused IT training with live projects, mentorship, mock interviews, and placement assistance.",
  },
  {
    title: "Social Voice platform operations",
    description:
      "Android social voice product preparing for public release, operated under published community, host, creator, coin, and support policies.",
  },
] as const;

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className={cn(ds.section, ds.sectionWhite)}
    >
      <div aria-hidden className={ds.divider} />

      <Container>
        <FadeIn>
          <SectionTitle
            titleId="testimonials-heading"
            title="How We Engage"
            description="Engagement themes across software, training, and the Social Voice Communication Platform."
          />
        </FadeIn>

        <Stagger
          className={cn("mt-12", ds.grid3)}
        >
          {engagementThemes.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <Card className={ds.card}>
                <CardHeader className={ds.cardHeader}>
                  <CardTitle className={ds.cardTitle}>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className={ds.cardContent}>
                  <CardDescription className={ds.cardDescription}>
                    {item.description}
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
