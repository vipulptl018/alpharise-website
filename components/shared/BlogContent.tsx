"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ds, fadeUp, staggerItem, staggerList } from "@/lib/design-system";
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
    title: "From MVP to ERP: Product Lessons We Learned",
    category: "Product",
    excerpt:
      "How modular design helps enterprise platforms evolve without rewrites.",
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

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        category === "All" || article.category === category;
      const matchesQuery =
        !query ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const featured = articles.find((article) => article.featured);

  return (
    <>
      <section className={cn(ds.section, ds.sectionWhite)}>
        <div aria-hidden className={ds.divider} />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionTitle
              title="Featured Blog"
              description="Insights on engineering, AI, cloud, product, and careers from the Alpharise team."
            />
          </motion.div>

          {featured ? (
            <Card className={cn(ds.card, "mt-12")}>
              <CardHeader className={ds.cardHeader}>
                <Badge className="w-fit rounded-lg" variant="secondary">
                  Featured · {featured.category}
                </Badge>
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
              <CardFooter className={ds.cardFooter}>
                <Button variant="outline" className={ds.btnPrimary}>
                  Read Article
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </Button>
              </CardFooter>
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

          <motion.ul
            className={cn(ds.grid, "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3")}
            variants={staggerList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {filtered.map((article) => (
              <motion.li key={article.title} variants={staggerItem}>
                <Card className={ds.card}>
                  <CardHeader className={ds.cardHeader}>
                    <Badge variant="outline" className="w-fit rounded-lg">
                      {article.category}
                    </Badge>
                    <CardTitle className={ds.cardTitle}>{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className={ds.cardContent}>
                    <CardDescription className={ds.cardDescription}>
                      {article.excerpt}
                    </CardDescription>
                    <p className="mt-4 text-xs text-slate-500">{article.date}</p>
                  </CardContent>
                </Card>
              </motion.li>
            ))}
          </motion.ul>

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
              Occasional insights on software, AI, cloud, and careers. No spam.
            </p>
            {subscribed ? (
              <p className="mt-6 text-sm font-medium text-emerald-700">
                You&apos;re subscribed. Welcome aboard.
              </p>
            ) : (
              <form
                className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubscribed(true);
                }}
              >
                <Input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="h-11"
                  aria-label="Email for newsletter"
                />
                <Button type="submit" className={ds.btnPrimary}>
                  Subscribe
                </Button>
              </form>
            )}
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
