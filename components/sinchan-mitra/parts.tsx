import { Noto_Sans_Devanagari } from "next/font/google";
import Link from "next/link";
import type { LucideIcon, LucideProps } from "lucide-react";
import {
  BadgeCheck,
  Boxes,
  Cable,
  ChartColumn,
  Check,
  ClipboardList,
  Droplets,
  Languages,
  Leaf,
  Monitor,
  Package,
  Receipt,
  ShieldCheck,
  Sprout,
  Store,
  Timer,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

import { FadeIn } from "@/components/common/motion";
import { Container } from "@/components/layout/Container";
import { LANGS, type Lang } from "@/lib/content/sinchan-mitra";
import { cn } from "@/lib/utils";

/* Pieces shared by the product page and its detail pages (SinchanMitraView, BusinessDetailView). */

// Marathi and Hindi need a Devanagari face; Geist has none, so the browser falls through to this.
export const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  variable: "--font-deva",
  display: "swap",
});

const icons: Record<string, LucideIcon> = {
  Store,
  Leaf,
  Sprout,
  ShieldCheck,
  Droplets,
  Cable,
  Zap,
  Wallet,
  Boxes,
  ClipboardList,
  ChartColumn,
  Users,
  Timer,
  BadgeCheck,
  TrendingUp,
  Languages,
  Monitor,
  Package,
  Receipt,
};

/** An icon picked by name; a component, so pages can place it without creating one while rendering. */
export function NamedIcon({ name, ...props }: { name: string } & LucideProps) {
  const Component = icons[name] ?? Store;
  return <Component {...props} />;
}

export const iconOf = (name: string): LucideIcon => icons[name] ?? Store;

export const btnPrimary =
  "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--sm-grad-a)] to-[var(--sm-grad-b)] px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-600/40 focus-visible:ring-4 focus-visible:ring-emerald-500/30 focus-visible:outline-none";
export const btnGhost =
  "inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[var(--sm-line)] bg-[var(--sm-card)]/70 px-6 text-sm font-semibold text-[var(--sm-ink)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--sm-brand)] focus-visible:ring-4 focus-visible:ring-emerald-500/20 focus-visible:outline-none";
export const iconTile =
  "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--sm-grad-a)] to-[var(--sm-grad-b)] text-white shadow-lg shadow-emerald-600/25";
export const card =
  "rounded-3xl border border-[var(--sm-line)] bg-[var(--sm-card)] shadow-xl shadow-emerald-950/5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-[var(--sm-brand)] hover:shadow-2xl hover:shadow-emerald-500/10";
export const gradientText =
  "bg-gradient-to-r from-[var(--sm-grad-a)] via-[var(--sm-brand-2)] to-[var(--sm-sky)] bg-clip-text text-transparent dark:from-[#6ee7b7] dark:via-[#2dd4bf] dark:to-[#7dd3fc]";

export function SectionHead({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
}) {
  return (
    <FadeIn amount={0.35} className="mx-auto max-w-3xl text-center">
      <p
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold tracking-[0.14em] uppercase",
          inverted
            ? "border-white/20 bg-white/10 text-emerald-200"
            : "border-[var(--sm-line)] bg-[var(--sm-card)] text-[var(--sm-brand-ink)]"
        )}
      >
        <span className="size-1.5 rounded-full bg-[var(--sm-brand)]" aria-hidden />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-heading mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl",
          inverted ? "text-white" : "text-[var(--sm-ink)]"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-7 sm:text-lg sm:leading-8",
            inverted ? "text-emerald-100/80" : "text-[var(--sm-muted)]"
          )}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}

export function Tick({ children, inverted = false }: { children: React.ReactNode; inverted?: boolean }) {
  return (
    <li
      className={cn(
        "flex gap-3 text-sm leading-6",
        inverted ? "text-emerald-50/90" : "text-[var(--sm-ink)]"
      )}
    >
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-[var(--sm-brand)]">
        <Check className="size-3.5" strokeWidth={3} aria-hidden />
      </span>
      {children}
    </li>
  );
}

/** CSS-only entrance, so the hero text shows even before the page scripts have loaded. */
export function Rise({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("sm-rise", className)} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export function LangSwitch({
  lang,
  label,
  hrefs,
}: {
  lang: Lang;
  label: string;
  /** Where each language button goes; defaults to the product page of that language. */
  hrefs?: Partial<Record<Lang, string>>;
}) {
  return (
    <nav
      aria-label={label}
      className="inline-flex rounded-full border border-[var(--sm-line)] bg-[var(--sm-card)] p-1 text-sm font-semibold shadow-sm"
    >
      {LANGS.map((item) => (
        <Link
          key={item.code}
          href={hrefs?.[item.code] ?? item.path}
          hrefLang={item.code}
          lang={item.code}
          aria-current={item.code === lang ? "page" : undefined}
          className={cn(
            "rounded-full px-3 py-1 transition-all duration-300",
            item.code === lang
              ? "bg-gradient-to-r from-[var(--sm-grad-a)] to-[var(--sm-grad-b)] text-white shadow"
              : "text-[var(--sm-muted)] hover:text-[var(--sm-ink)]"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}


export function Section({
  id,
  muted = false,
  children,
}: {
  id?: string;
  muted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-32 py-16 sm:py-20 lg:py-24",
        muted ? "bg-[var(--sm-bg2)]" : "bg-[var(--sm-bg)]"
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

