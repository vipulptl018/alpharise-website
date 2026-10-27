import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/common/motion";
import { Container } from "@/components/layout/Container";
import {
  LangSwitch,
  Rise,
  Section,
  SectionHead,
  Tick,
  btnGhost,
  btnPrimary,
  card,
  devanagari,
  gradientText,
  NamedIcon,
  iconTile,
} from "@/components/sinchan-mitra/parts";
import { Cta } from "@/components/sinchan-mitra/SinchanMitraView";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import {
  LANGS,
  SM_NAME,
  gallery,
  langPath,
  typeIcons,
  type Lang,
} from "@/lib/content/sinchan-mitra";
import { copy } from "@/lib/content/sinchan-mitra-copy";
import {
  detailPath,
  detailScreens,
  detailSlugs,
  details,
  type DetailSlug,
} from "@/lib/content/sinchan-mitra-details";
import { cn } from "@/lib/utils";

/** The page behind one business-type card: what Sinchan Mitra does for that kind of shop. */
export function BusinessDetailView({ lang, slug }: { lang: Lang; slug: DetailSlug }) {
  const c = copy[lang];
  const { ui, items } = details[lang];
  const d = items[slug];
  const index = detailSlugs.indexOf(slug);
  const hrefs = Object.fromEntries(LANGS.map((l) => [l.code, detailPath(l.code, slug)])) as Record<
    Lang,
    string
  >;
  const screens = detailScreens[slug]
    .map((id) => gallery.find((g) => g.id === id))
    .filter((g): g is (typeof gallery)[number] => Boolean(g));
  const others = detailSlugs.filter((s) => s !== slug);

  return (
    <div
      lang={c.htmlLang}
      className={cn("sm-root", devanagari.variable)}
      style={{ fontFamily: "var(--font-geist-sans), var(--font-deva), system-ui, sans-serif" }}
    >
      <Breadcrumbs
        items={[
          { label: "Products", href: "/products" },
          { label: ui.breadcrumbHome, href: langPath(lang) },
          { label: d.title },
        ]}
      />

      <div className="border-b border-[var(--sm-line)] bg-[var(--sm-bg)]/90">
        <Container className="flex h-14 items-center justify-between gap-3">
          <Link
            href={langPath(lang)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--sm-brand-ink)] hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden />
            {ui.back}
          </Link>
          <LangSwitch lang={lang} label={c.subnav.pageLanguage} hrefs={hrefs} />
        </Container>
      </div>

      <section className="relative isolate overflow-hidden bg-[var(--sm-bg)] py-14 sm:py-20 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="sm-drift absolute -top-28 -left-20 size-[26rem] rounded-full bg-emerald-400/30 blur-3xl dark:bg-emerald-500/15" />
          <div
            className="sm-drift absolute top-6 -right-16 size-[22rem] rounded-full bg-sky-400/25 blur-3xl dark:bg-sky-500/10"
            style={{ animationDelay: "-7s" }}
          />
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: "radial-gradient(var(--sm-line) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              maskImage: "radial-gradient(ellipse at 50% 20%, black 20%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse at 50% 20%, black 20%, transparent 70%)",
            }}
          />
        </div>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Rise>
              <span className={cn(iconTile, "mx-auto size-16")}>
                <NamedIcon name={typeIcons[index]} className="size-8" strokeWidth={1.6} aria-hidden />
              </span>
              <p className="mt-6 text-sm font-semibold tracking-[0.14em] text-[var(--sm-brand-ink)] uppercase">
                {ui.eyebrow}
              </p>
            </Rise>
            <Rise delay={0.08}>
              <h1 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                <span className={cn("sm-shine-text", gradientText)}>{d.title}</span>
              </h1>
            </Rise>
            <Rise delay={0.16}>
              <p className="font-heading mt-5 text-xl font-semibold tracking-[-0.02em] text-[var(--sm-ink)] sm:text-2xl">
                {d.tagline}
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--sm-muted)] sm:text-lg">
                {d.overview}
              </p>
            </Rise>
            <Rise delay={0.24}>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Link href="/contact" className={btnPrimary}>
                  {c.hero.ctaDemo}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link href={`${langPath(lang)}#download`} className={btnGhost}>
                  {c.hero.ctaDownload}
                </Link>
              </div>
            </Rise>
          </div>
        </Container>
      </section>

      <Section muted>
        <SectionHead eyebrow={ui.eyebrow} title={ui.getsTitle} />
        <Stagger className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
          {d.gets.map((point) => (
            <StaggerItem key={point} className="h-full">
              <div className={cn(card, "h-full p-5")}>
                <ul>
                  <Tick>{point}</Tick>
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <FadeIn amount={0.25}>
          <div className="relative isolate mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#047857] via-[#0f766e] to-[#0369a1] p-8 shadow-2xl shadow-emerald-900/25 sm:p-12">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="sm-drift absolute -top-20 -right-10 size-64 rounded-full bg-white/15 blur-3xl" />
            </div>
            <h2 className="font-heading flex items-center gap-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
              <Sparkles className="size-6 text-amber-300" aria-hidden />
              {ui.specialTitle}
            </h2>
            <ul className="mt-6 space-y-3.5">
              {d.special.map((point) => (
                <Tick key={point} inverted>
                  {point}
                </Tick>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      <Section muted>
        <SectionHead eyebrow={ui.eyebrow} title={ui.screensTitle} description={ui.screensHint} />
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
          {screens.map((shot, i) => (
            <FadeIn key={shot.id} amount={0.15}>
              <figure
                className={cn(
                  "sm-protect overflow-hidden rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-card)] shadow-xl shadow-emerald-950/10",
                  screens.length % 2 === 1 && i === 0 && "md:col-span-2 md:mx-auto md:max-w-xl"
                )}
              >
                <Image
                  src={`/sinchan-mitra/${shot.file}`}
                  alt={`${c.gallery.titles[shot.id]}: ${c.ui.screenshotAlt}`}
                  width={shot.width}
                  height={shot.height}
                  sizes="(min-width: 768px) 560px, 100vw"
                  unoptimized
                  draggable={false}
                  className="h-auto w-full border-b border-[var(--sm-line)]"
                />
                <figcaption className="px-4 py-3 text-sm font-medium text-[var(--sm-ink)]">
                  {c.gallery.titles[shot.id]}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow={SM_NAME} title={ui.commonTitle} />
        <Stagger className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ui.common.map((point) => (
            <StaggerItem key={point} className="h-full">
              <div className={cn(card, "h-full p-5")}>
                <ul>
                  <Tick>{point}</Tick>
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section muted>
        <SectionHead eyebrow={SM_NAME} title={ui.othersTitle} />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((other) => {
            const otherIndex = detailSlugs.indexOf(other);
            return (
              <StaggerItem key={other} className="h-full">
                <Link
                  href={detailPath(lang, other)}
                  className={cn(
                    card,
                    "group flex h-full items-center gap-4 p-5 focus-visible:ring-4 focus-visible:ring-emerald-500/30 focus-visible:outline-none"
                  )}
                >
                  <span className={cn(iconTile, "size-11")}>
                    <NamedIcon name={typeIcons[otherIndex]} className="size-5" strokeWidth={1.8} aria-hidden />
                  </span>
                  <span className="flex-1 font-heading text-base font-semibold text-[var(--sm-ink)]">
                    {items[other].title}
                  </span>
                  <ArrowRight
                    className="size-4 text-[var(--sm-brand-ink)] transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <Cta c={c} />
    </div>
  );
}
