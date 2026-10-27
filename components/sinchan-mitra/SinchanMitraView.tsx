import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  ChartColumn,
  Download,
  Languages,
  Monitor,
  Smartphone,
  Timer,
  Wallet,
  WifiOff,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/common/motion";
import { CountUp } from "@/components/common/CountUp";
import { Container } from "@/components/layout/Container";
import { BrowserFrame, PhoneFrame, ShotCard } from "@/components/sinchan-mitra/frames";
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
  iconOf,
  iconTile,
} from "@/components/sinchan-mitra/parts";
import { StepsTimeline } from "@/components/sinchan-mitra/StepsTimeline";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { COMPANY_NAME, CONTACT, getSiteUrl } from "@/lib/constants";
import {
  SM_NAME,
  SM_NAME_MR,
  SM_PATH,
  benefitIcons,
  downloadLinks,
  insideIcons,
  langPath,
  shots,
  spotlightImages,
  stepIcons,
  typeIcons,
  whyIcons,
  type Lang,
} from "@/lib/content/sinchan-mitra";
import { details, detailPath, detailSlugs } from "@/lib/content/sinchan-mitra-details";
import { copy, type Copy } from "@/lib/content/sinchan-mitra-copy";
import { cn } from "@/lib/utils";

function SubNav({ lang, c }: { lang: Lang; c: Copy }) {
  const anchors: [string, string][] = [
    ["why", c.subnav.why],
    ["steps", c.subnav.steps],
    ["features", c.subnav.features],
    ["download", c.subnav.download],
    ["faq", c.subnav.faq],
  ];
  return (
    <div className="sticky top-16 z-40 border-b border-[var(--sm-line)] bg-[var(--sm-bg)]/85 backdrop-blur-xl">
      <Container className="flex h-14 items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2.5 font-heading font-semibold text-[var(--sm-ink)]">
          <Image
            src={shots.logo.src}
            alt=""
            width={28}
            height={28}
            unoptimized
            className="size-7 rounded-full"
          />
          <span className="hidden sm:inline">{lang === "en" ? SM_NAME : SM_NAME_MR}</span>
        </a>
        <nav aria-label="Sinchan Mitra" className="hidden items-center gap-1 lg:flex">
          {anchors.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-[var(--sm-muted)] transition-colors hover:bg-[var(--sm-bg2)] hover:text-[var(--sm-ink)]"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} label={c.subnav.pageLanguage} />
          <Link href="/contact" className={cn(btnPrimary, "hidden h-9 px-4 text-xs md:inline-flex")}>
            {c.subnav.demo}
          </Link>
        </div>
      </Container>
    </div>
  );
}

const heroShot = (lang: Lang) =>
  lang === "mr" ? shots.homeMr : lang === "hi" ? shots.homeHi : shots.homeEn;

function Hero({ lang, c }: { lang: Lang; c: Copy }) {
  const primary = lang === "en" ? SM_NAME : SM_NAME_MR;
  const secondary = lang === "en" ? SM_NAME_MR : SM_NAME;
  const floats = [
    { text: c.hero.floats[0], Icon: Wallet, pos: "-left-2 top-6 sm:-left-8", delay: "0s" },
    { text: c.hero.floats[1], Icon: ChartColumn, pos: "-right-1 top-24 sm:-right-6", delay: "1.4s" },
    { text: c.hero.floats[2], Icon: Boxes, pos: "right-8 -bottom-4 sm:right-16", delay: "2.6s" },
  ];
  const chipIcons = [Languages, Monitor, Smartphone, WifiOff];

  return (
    <section
      aria-labelledby="sm-hero-heading"
      className="relative isolate overflow-hidden bg-[var(--sm-bg)] pt-12 pb-20 sm:pt-16 lg:pt-20 lg:pb-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="sm-drift absolute -top-32 -left-24 size-[30rem] rounded-full bg-emerald-400/30 blur-3xl dark:bg-emerald-500/15" />
        <div
          className="sm-drift absolute top-10 -right-20 size-[26rem] rounded-full bg-sky-400/25 blur-3xl dark:bg-sky-500/10"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="sm-drift absolute -bottom-24 left-1/3 size-[22rem] rounded-full bg-amber-300/25 blur-3xl dark:bg-amber-400/10"
          style={{ animationDelay: "-12s" }}
        />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: "radial-gradient(var(--sm-line) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
          }}
        />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <Rise>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-[var(--sm-line)] bg-[var(--sm-card)]/80 py-1 pr-4 pl-1.5 text-sm font-medium text-[var(--sm-brand-ink)] shadow-sm backdrop-blur">
                <span className="relative flex size-7 items-center justify-center">
                  <span className="sm-pulse-ring absolute inset-0 rounded-full bg-emerald-400/60" aria-hidden />
                  <Image
                    src={shots.logo.src}
                    alt=""
                    width={28}
                    height={28}
                    unoptimized
                    className="relative size-7 rounded-full"
                  />
                </span>
                {c.hero.badge}
              </p>
            </Rise>
            <Rise delay={0.08}>
              <h1
                id="sm-hero-heading"
                className="font-heading mt-6 text-[2.75rem] leading-[1.02] font-semibold tracking-[-0.04em] text-[var(--sm-ink)] sm:text-6xl lg:text-[4.25rem]"
              >
                <span className={cn("sm-shine-text", gradientText)}>{primary}</span>
                <span className="mt-2 block text-[0.5em] leading-tight font-medium tracking-[-0.02em] text-[var(--sm-muted)]">
                  {secondary}
                </span>
              </h1>
            </Rise>
            <Rise delay={0.16}>
              <p className="font-heading mt-6 max-w-xl text-xl font-semibold tracking-[-0.02em] text-[var(--sm-ink)] sm:text-2xl">
                {c.hero.headline}
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-[var(--sm-muted)] sm:text-lg">
                {c.hero.intro}
              </p>
              <p className="mt-3 text-sm font-medium text-[var(--sm-brand-ink)]">{c.hero.sub}</p>
            </Rise>
            <Rise delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href="/contact" className={btnPrimary}>
                  {c.hero.ctaDemo}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a href="#download" className={btnGhost}>
                  <Download className="size-4" aria-hidden />
                  {c.hero.ctaDownload}
                </a>
                <a
                  href="#features"
                  className="inline-flex h-12 items-center px-2 text-sm font-semibold text-[var(--sm-brand-ink)] underline-offset-4 hover:underline"
                >
                  {c.hero.ctaScreens}
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {c.hero.chips.map((chip, i) => {
                  const Icon = chipIcons[i];
                  return (
                    <li
                      key={chip}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--sm-line)] bg-[var(--sm-card)]/70 px-3.5 py-1.5 text-xs font-medium text-[var(--sm-ink)] backdrop-blur"
                    >
                      <Icon className="size-3.5 text-[var(--sm-brand)]" aria-hidden />
                      {chip}
                    </li>
                  );
                })}
              </ul>
            </Rise>
          </div>

          <Rise delay={0.2} className="relative pb-6 lg:pb-10">
            <div
              aria-hidden
              className="absolute inset-x-6 top-8 -bottom-2 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-400/40 via-teal-300/30 to-sky-400/40 blur-2xl dark:from-emerald-500/25 dark:via-teal-400/15 dark:to-sky-500/25"
            />
            <div className="sm-float-slow">
              <BrowserFrame
                shot={heroShot(lang)}
                alt={c.ui.heroAlt}
                sizes="(min-width: 1024px) 540px, 100vw"
                priority
                className="lg:ml-auto lg:max-w-[540px]"
              />
            </div>
            {floats.map(({ text, Icon, pos, delay }) => (
              <div
                key={text}
                className={cn("absolute hidden sm:block", pos)}
                style={{ animationDelay: delay }}
              >
                <div
                  className="sm-float flex items-center gap-2 rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-card)]/90 px-3.5 py-2 text-xs font-semibold text-[var(--sm-ink)] shadow-xl shadow-emerald-950/10 backdrop-blur"
                  style={{ animationDelay: delay }}
                >
                  <span className="flex size-6 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--sm-grad-a)] to-[var(--sm-grad-b)] text-white">
                    <Icon className="size-3.5" aria-hidden />
                  </span>
                  {text}
                </div>
              </div>
            ))}
          </Rise>
        </div>

        <FadeIn amount={0.3} className="mt-16">
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {c.hero.facts.map((fact) => (
              <li
                key={fact.label}
                className="rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-card)]/80 p-5 text-center shadow-lg shadow-emerald-950/5 backdrop-blur"
              >
                <p
                  className={cn(
                    "font-heading text-2xl font-semibold sm:text-4xl",
                    gradientText
                  )}
                >
                  {typeof fact.value === "number" ? (
                    <CountUp target={fact.value} suffix={fact.suffix ?? ""} label={fact.label} />
                  ) : (
                    fact.value
                  )}
                </p>
                <p className="mt-1.5 text-sm leading-5 text-[var(--sm-muted)]">{fact.label}</p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}

function Marquee({ c }: { c: Copy }) {
  const items = c.types.items.map((item, i) => ({ title: item.title, Icon: iconOf(typeIcons[i]) }));
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={hidden || undefined}>
      {items.map(({ title, Icon }) => (
        <li
          key={title}
          className="inline-flex items-center gap-2.5 rounded-full border border-[var(--sm-line)] bg-[var(--sm-card)] px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-[var(--sm-ink)] shadow-sm"
        >
          <Icon className="size-4 text-[var(--sm-brand)]" aria-hidden />
          {title}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="relative overflow-hidden border-y border-[var(--sm-line)] bg-[var(--sm-bg2)] py-5">
      <div className="sm-marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

function Why({ c }: { c: Copy }) {
  return (
    <Section id="why">
      <SectionHead eyebrow={c.why.eyebrow} title={c.why.title} description={c.why.description} />
      <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {c.why.items.map((item, i) => {
          const Icon = iconOf(whyIcons[i]);
          return (
            <StaggerItem key={item.title} className="h-full">
              <article className={cn(card, "flex h-full flex-col p-6 sm:p-7")}>
                <div className="flex items-center gap-4">
                  <span className={iconTile}>
                    <Icon className="size-5" strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="font-heading text-lg font-semibold tracking-[-0.02em] text-[var(--sm-ink)]">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-5 rounded-2xl bg-amber-500/10 p-4">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-amber-700 uppercase dark:text-amber-300">
                    {c.why.problem}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[var(--sm-muted)]">{item.problem}</p>
                </div>
                <div className="mt-3 flex-1 rounded-2xl bg-emerald-500/10 p-4">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--sm-brand-ink)] uppercase">
                    {c.why.solution}
                  </p>
                  <p className="mt-1 text-sm leading-6 font-medium text-[var(--sm-ink)]">
                    {item.solution}
                  </p>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

function Benefits({ c }: { c: Copy }) {
  return (
    <Section muted>
      <SectionHead
        eyebrow={c.benefits.eyebrow}
        title={c.benefits.title}
        description={c.benefits.description}
      />
      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {c.benefits.items.map((item, i) => {
          const Icon = iconOf(benefitIcons[i]);
          return (
            <StaggerItem key={item.title} className="h-full">
              <article className={cn(card, "group relative h-full overflow-hidden p-7")}>
                <span
                  aria-hidden
                  className="absolute -top-10 -right-10 size-32 rounded-full bg-emerald-400/15 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-emerald-400/25"
                />
                <span className={cn(iconTile, "size-14")}>
                  <Icon className="size-6" strokeWidth={1.7} aria-hidden />
                </span>
                <h3 className="font-heading mt-5 text-xl font-semibold tracking-[-0.02em] text-[var(--sm-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--sm-muted)]">{item.description}</p>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

function Steps({ c }: { c: Copy }) {
  return (
    <Section id="steps">
      <SectionHead eyebrow={c.steps.eyebrow} title={c.steps.title} description={c.steps.description} />
      <StepsTimeline steps={c.steps.items} iconNames={stepIcons} />
    </Section>
  );
}

function Types({ c, lang }: { c: Copy; lang: Lang }) {
  const more = details[lang].ui.learnMore;
  return (
    <Section muted>
      <SectionHead eyebrow={c.types.eyebrow} title={c.types.title} description={c.types.description} />
      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {c.types.items.map((item, i) => {
          const Icon = iconOf(typeIcons[i]);
          return (
            <StaggerItem key={item.title} className="h-full">
              <Link
                href={detailPath(lang, detailSlugs[i])}
                className={cn(
                  card,
                  "group flex h-full flex-col p-6 focus-visible:ring-4 focus-visible:ring-emerald-500/30 focus-visible:outline-none"
                )}
              >
                <span className={iconTile}>
                  <Icon className="size-5" strokeWidth={1.8} aria-hidden />
                </span>
                <h3 className="font-heading mt-4 text-lg font-semibold tracking-[-0.02em] text-[var(--sm-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-[var(--sm-muted)]">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--sm-brand-ink)]">
                  {more}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

function Features({ c }: { c: Copy }) {
  return (
    <div id="features" className="scroll-mt-32">
      <Section>
        <SectionHead
          eyebrow={c.features.eyebrow}
          title={c.features.title}
          description={c.features.description}
        />
      </Section>
      {c.features.items.map((item, index) => {
        const reversed = index % 2 === 1;
        const images = spotlightImages[index].images;
        const twoImages = images.length > 1;
        return (
          <section
            key={spotlightImages[index].id}
            id={spotlightImages[index].id}
            className={cn(
              "relative scroll-mt-32 py-14 sm:py-16",
              index % 2 === 0 ? "bg-[var(--sm-bg2)]" : "bg-[var(--sm-bg)]"
            )}
          >
            <Container>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <FadeIn className={cn(reversed && "lg:order-2")} amount={0.25}>
                  <p className="text-sm font-semibold tracking-[0.14em] text-[var(--sm-brand-ink)] uppercase">
                    {item.eyebrow}
                  </p>
                  <h3 className="font-heading mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--sm-ink)] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--sm-muted)]">{item.description}</p>
                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <Tick key={point}>{point}</Tick>
                    ))}
                  </ul>
                </FadeIn>
                <FadeIn className={cn("relative", reversed && "lg:order-1")} amount={0.2}>
                  <div
                    aria-hidden
                    className="absolute inset-4 -z-0 rounded-[2rem] bg-gradient-to-br from-emerald-400/30 to-sky-400/25 blur-2xl dark:from-emerald-500/15 dark:to-sky-500/10"
                  />
                  <div className={cn("relative mx-auto grid max-w-lg gap-5", twoImages && "sm:grid-cols-2")}>
                    {images.map(({ shot, frame }) =>
                      frame === "browser" ? (
                        <BrowserFrame
                          key={shot}
                          shot={shots[shot]}
                          alt={`${item.title}: ${c.ui.screenshotAlt}`}
                          sizes="(min-width: 1024px) 560px, 100vw"
                        />
                      ) : (
                        <ShotCard
                          key={shot}
                          shot={shots[shot]}
                          alt={`${item.title}: ${c.ui.screenshotAlt}`}
                          sizes={
                            twoImages
                              ? "(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                              : "(min-width: 1024px) 560px, 100vw"
                          }
                        />
                      )
                    )}
                  </div>
                </FadeIn>
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}

function LanguagesBlock({ c }: { c: Copy }) {
  const names = [c.languages.mr, c.languages.hi, c.languages.en];
  return (
    <Section muted>
      <SectionHead
        eyebrow={c.languages.eyebrow}
        title={c.languages.title}
        description={c.languages.description}
      />
      <ul className="mt-12 flex flex-wrap justify-center gap-3">
        {names.map((name) => (
          <li
            key={name}
            className="rounded-full border border-[var(--sm-line)] bg-[var(--sm-card)] px-6 py-2.5 font-heading text-lg font-semibold text-[var(--sm-ink)] shadow-lg shadow-emerald-950/5"
          >
            {name}
          </li>
        ))}
      </ul>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn amount={0.25}>
          <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-[var(--sm-ink)] sm:text-3xl">
            {c.languages.counterTitle}
          </h3>
          <ul className="mt-6 space-y-3">
            {c.languages.points.map((point) => (
              <Tick key={point}>{point}</Tick>
            ))}
          </ul>
        </FadeIn>
        <FadeIn amount={0.2}>
          <div className="flex justify-center">
            <PhoneFrame
              shot={shots.phone}
              alt={c.ui.phoneAlt}
              sizes="200px"
              className="sm-float w-40 sm:w-48"
            />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function Inside({ c }: { c: Copy }) {
  return (
    <Section>
      <SectionHead
        eyebrow={c.inside.eyebrow}
        title={c.inside.title}
        description={c.inside.description}
      />
      <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {c.inside.items.map((group, i) => {
          const Icon = iconOf(insideIcons[i]);
          return (
            <StaggerItem key={group.title} className="h-full">
              <article className={cn(card, "h-full p-6")}>
                <div className="flex items-center gap-3">
                  <span className={cn(iconTile, "size-11")}>
                    <Icon className="size-5" strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="font-heading text-lg font-semibold tracking-[-0.02em] text-[var(--sm-ink)]">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((entry) => (
                    <Tick key={entry}>{entry}</Tick>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

function DownloadCard({
  title,
  description,
  points,
  Icon,
  href,
  c,
}: {
  title: string;
  description: string;
  points: string[];
  Icon: LucideIcon;
  href: string;
  c: Copy["download"];
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/15 bg-white/[0.06] p-7 shadow-2xl shadow-black/20 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300/40 hover:bg-white/[0.09]">
      <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-emerald-950 shadow-lg shadow-emerald-500/30">
        <Icon className="size-7" strokeWidth={1.7} aria-hidden />
      </span>
      <h3 className="font-heading mt-5 text-2xl font-semibold tracking-[-0.02em] text-white">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-emerald-100/80">{description}</p>
      <ul className="mt-5 space-y-2.5">
        {points.map((point) => (
          <Tick key={point} inverted>
            {point}
          </Tick>
        ))}
      </ul>
      <div className="mt-8 flex flex-1 flex-col justify-end gap-3">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 px-6 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-emerald-300/50 focus-visible:outline-none"
          >
            <Download className="size-4" aria-hidden />
            {c.button}
          </a>
        ) : (
          <>
            <span className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-dashed border-white/25 px-6 text-sm font-semibold text-emerald-100/80">
              <Timer className="size-4" aria-hidden />
              {c.soon}
            </span>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center text-sm font-semibold text-emerald-200 underline-offset-4 hover:underline"
            >
              {c.request}
            </Link>
          </>
        )}
      </div>
    </article>
  );
}

function DownloadBand({ c }: { c: Copy }) {
  return (
    <section
      id="download"
      className="relative isolate scroll-mt-32 overflow-hidden bg-[var(--sm-deep)] py-16 sm:py-20 lg:py-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="sm-drift absolute -top-32 left-1/4 size-[28rem] rounded-full bg-emerald-500/25 blur-3xl" />
        <div
          className="sm-drift absolute -right-20 bottom-0 size-[24rem] rounded-full bg-sky-500/15 blur-3xl"
          style={{ animationDelay: "-8s" }}
        />
      </div>
      <Container>
        <SectionHead
          inverted
          eyebrow={c.download.eyebrow}
          title={c.download.title}
          description={c.download.description}
        />
        <Stagger as="div" className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          <StaggerItem as="div">
            <DownloadCard
              {...c.download.windows}
              Icon={Monitor}
              href={downloadLinks.windows}
              c={c.download}
            />
          </StaggerItem>
          <StaggerItem as="div">
            <DownloadCard
              {...c.download.android}
              Icon={Smartphone}
              href={downloadLinks.android}
              c={c.download}
            />
          </StaggerItem>
        </Stagger>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-emerald-100/70">
          {c.download.note}
        </p>
      </Container>
    </section>
  );
}

function Faq({ c }: { c: Copy }) {
  return (
    <Section id="faq">
      <SectionHead eyebrow={c.faq.eyebrow} title={c.faq.title} />
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {c.faq.items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-card)] px-5 py-4 shadow-sm transition-colors open:border-[var(--sm-brand)] open:shadow-lg open:shadow-emerald-500/10"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-[var(--sm-ink)] marker:hidden">
              {item.question}
              <span
                aria-hidden
                className="flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-lg leading-none text-[var(--sm-brand)] transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-[var(--sm-muted)]">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

export function Cta({ c }: { c: Copy }) {
  const fill = (text: string) =>
    text
      .replace("{email}", CONTACT.email)
      .replace("{phone}", CONTACT.phone)
      .replace("{hours}", CONTACT.hours);
  const phone = CONTACT.phone.replace(/\s/g, "");
  return (
    <section className="relative bg-[var(--sm-bg2)] py-16 sm:py-20">
      <Container>
        <FadeIn amount={0.3}>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#047857] via-[#0f766e] to-[#0369a1] px-6 py-14 text-center shadow-2xl shadow-emerald-900/30 sm:px-12">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="sm-drift absolute -top-24 -left-16 size-72 rounded-full bg-white/15 blur-3xl" />
              <div
                className="sm-drift absolute -right-10 -bottom-24 size-72 rounded-full bg-amber-300/20 blur-3xl"
                style={{ animationDelay: "-9s" }}
              />
            </div>
            <p className="text-xs font-semibold tracking-[0.16em] text-emerald-100 uppercase">
              {c.cta.eyebrow}
            </p>
            <h2 className="font-heading mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              {c.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50/90">
              {fill(c.cta.description)}
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-semibold text-emerald-900 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-white/40 focus-visible:outline-none"
              >
                {c.cta.primary}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a
                href={`tel:${phone}`}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/40 px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 focus-visible:ring-4 focus-visible:ring-white/40 focus-visible:outline-none"
              >
                {fill(c.cta.secondary)}
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export function SinchanMitraView({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${langPath(lang)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}${SM_PATH}#software`,
    name: SM_NAME,
    alternateName: SM_NAME_MR,
    url,
    image: `${siteUrl}${shots.logo.src}`,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "AgriBusiness SaaS",
    operatingSystem: "Windows, Android",
    inLanguage: ["mr", "hi", "en"],
    description: c.meta.description,
    publisher: { "@type": "Organization", name: COMPANY_NAME, url: siteUrl },
  };

  return (
    <div
      id="top"
      lang={c.htmlLang}
      className={cn("sm-root", devanagari.variable)}
      style={{ fontFamily: "var(--font-geist-sans), var(--font-deva), system-ui, sans-serif" }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: "Products", href: "/products" }, { label: SM_NAME }]} />
      <SubNav lang={lang} c={c} />
      <Hero lang={lang} c={c} />
      <Marquee c={c} />
      <Why c={c} />
      <Benefits c={c} />
      <Steps c={c} />
      <Types c={c} lang={lang} />
      <Features c={c} />
      <LanguagesBlock c={c} />
      <Inside c={c} />
      <DownloadBand c={c} />
      <Faq c={c} />
      <Cta c={c} />
    </div>
  );
}
