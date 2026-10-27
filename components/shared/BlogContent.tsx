"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

import { FadeIn, Stagger, StaggerItem } from "@/components/common/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { submitNewsletterSubscription } from "@/lib/api/newsletter";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Engineering",
  "AI",
  "Cloud",
  "Career",
  "Product",
] as const;

const articles = [
  {
    title: "How We Design Scalable Next.js Architectures",
    category: "Engineering",
    excerpt:
      "Patterns for maintainable app routers, shared UI systems, and performance.",
    featured: true,
    date: "Mar 12, 2026",
  },
  {
    title: "Practical AI Features for Business Workflows",
    category: "AI",
    excerpt:
      "Where generative AI creates ROI — and where it should not be forced.",
    featured: false,
    date: "Mar 2, 2026",
  },
  {
    title: "AWS Foundations for Growing Product Teams",
    category: "Cloud",
    excerpt:
      "A pragmatic checklist for reliability, observability, and cost control.",
    featured: false,
    date: "Feb 18, 2026",
  },
  {
    title: "Building a Placement-Ready Engineering Portfolio",
    category: "Career",
    excerpt:
      "What hiring managers look for beyond certificates and course names.",
    featured: false,
    date: "Feb 5, 2026",
  },
  {
    title: "From MVP to Production: Product Lessons We Learned",
    category: "Product",
    excerpt:
      "How modular design helps software platforms evolve without rewrites.",
    featured: false,
    date: "Jan 22, 2026",
  },
  {
    title: "FastAPI Tips for Clean API Design",
    category: "Engineering",
    excerpt:
      "Versioning, validation, and documentation practices that scale teams.",
    featured: false,
    date: "Jan 10, 2026",
  },
];

export function BlogContent() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [subscribed, setSubscribed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory =
        category === "All" || article.category === category;
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const featured = articles.find((article) => article.featured);

  return (
    <>
      <section className={cn(ds.section, ds.sectionWhite)}>
        <div aria-hidden className={ds.divider} />
        <Container>
          <FadeIn>
            <SectionTitle
              title="Featured Blog"
              description="Topic summaries on engineering, AI, cloud, product, and careers from the Alpharise team."
            />
          </FadeIn>

          {featured ? (
            <Card className={cn(ds.card, "mt-12")}>
              <CardHeader className={ds.cardHeader}>
                <span className="inline-flex h-5 w-fit items-center rounded-lg border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                  Featured · {featured.category}
                </span>
                <CardTitle className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {featured.title}
                </CardTitle>
              </CardHeader>
              <CardContent className={ds.cardContent}>
                <CardDescription className={ds.cardDescription}>
                  {featured.excerpt}
                </CardDescription>
                <p className="mt-4 text-xs text-slate-500">{featured.date}</p>
              </CardContent>
            </Card>
          ) : null}
        </Container>
      </section>

      <section className={cn(ds.section, ds.sectionMuted)}>
        <div aria-hidden className={ds.divider} />
        <Container>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <SectionTitle
              align="left"
              title="Latest Articles"
              description="Browse by category or search the archive."
              className="max-w-xl"
            />
            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search articles"
                className="h-11 pl-9"
                aria-label="Search articles"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((item) => (
              <Button
                key={item}
                type="button"
                size="sm"
                variant={category === item ? "default" : "outline"}
                className="rounded-lg"
                onClick={() => setCategory(item)}
              >
                {item}
              </Button>
            ))}
          </div>

          <Stagger
            className={cn("mt-12", ds.grid3)}
          >
            {filtered.map((article) => (
              <StaggerItem key={article.title}>
                <Card className={ds.card}>
                  <CardHeader className={ds.cardHeader}>
                    <span className="inline-flex h-5 w-fit items-center rounded-lg border border-border bg-background px-2 py-0.5 text-xs font-medium">
                      {article.category}
                    </span>
                    <CardTitle className={ds.cardTitle}>{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className={ds.cardContent}>
                    <CardDescription className={ds.cardDescription}>
                      {article.excerpt}
                    </CardDescription>
                    <p className="mt-4 text-xs text-slate-500">{article.date}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>

          {filtered.length === 0 ? (
            <p className="mt-10 text-center text-sm text-slate-500">
              No articles match your filters.
            </p>
          ) : null}
        </Container>
      </section>

      <section className={cn(ds.section, ds.sectionWhite)}>
        <div aria-hidden className={ds.divider} />
        <Container size="md">
          <div className={cn(ds.ctaPanel, "text-center")}>
            <p className={ds.ctaEyebrow}>Newsletter</p>
            <h2 className={ds.ctaTitle}>Get product and engineering updates</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600">
              Occasional insights on software, AI, cloud, and careers. Duplicate
              emails are rejected.
            </p>
            {subscribed ? (
              <p className="mt-6 text-sm font-medium text-emerald-700">
                {feedback || "You are subscribed for occasional updates."}
              </p>
            ) : (
              <form
                className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={async (event) => {
                  event.preventDefault();
                  setStatus("loading");
                  setFeedback("");
                  const form = event.currentTarget;
                  const emailInput = form.elements.namedItem(
                    "newsletter-email"
                  ) as HTMLInputElement | null;
                  const email = emailInput?.value.trim() || "";
                  const result = await submitNewsletterSubscription(email);
                  if (!result.ok) {
                    setStatus("error");
                    setFeedback(result.message);
                    return;
                  }
                  setSubscribed(true);
                  setStatus("success");
                  setFeedback(result.message);
                  form.reset();
                }}
              >
                <Input
                  name="newsletter-email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="h-11"
                  aria-label="Email for newsletter"
                />
                <Button
                  type="submit"
                  className={ds.btnPrimary}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Saving…" : "Subscribe"}
                </Button>
              </form>
            )}
            {status === "error" ? (
              <p role="alert" className="mt-3 text-sm text-red-700">
                {feedback}
              </p>
            ) : null}
            <p className="mt-4 text-xs text-slate-500">
              Looking for training? Visit{" "}
              <Link href="/academy" className="underline underline-offset-2">
                TechRise Academy
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
