import { cn } from "@/lib/utils";

/** Shared homepage design tokens — keep all sections visually aligned. */
export const ds = {
  section: "relative overflow-hidden py-20 sm:py-24 lg:py-28",
  sectionWhite: "bg-white",
  sectionMuted: "bg-[#f8fafc]",
  divider:
    "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent",
  header: "mx-auto max-w-2xl text-center",
  title:
    "font-heading text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl",
  subtitle:
    "mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8",
  grid: "mt-14 grid gap-5 sm:mt-16 sm:gap-6",
  card: cn(
    "flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white/80 py-0",
    "shadow-[0_12px_40px_-28px_rgba(15,23,42,0.28)] ring-0 backdrop-blur-xl",
    "transition-all duration-300 ease-out will-change-transform",
    "hover:-translate-y-1 hover:border-sky-200/80 hover:bg-white",
    "hover:shadow-[0_0_0_1px_rgba(14,165,233,0.12),0_22px_48px_-22px_rgba(14,165,233,0.32)]",
    "focus-within:border-sky-200/80 focus-within:ring-2 focus-within:ring-sky-500/15"
  ),
  cardHeader: "gap-4 p-6 pb-3 sm:p-7 sm:pb-3",
  cardContent: "flex-1 p-6 pt-0 sm:p-7 sm:pt-0",
  cardFooter: "mt-auto border-0 bg-transparent p-6 pt-2 sm:p-7 sm:pt-2",
  cardTitle:
    "font-heading text-lg font-semibold tracking-tight text-slate-950",
  cardDescription: "text-[0.9375rem] leading-7 text-slate-600",
  iconBox:
    "flex size-11 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50 text-slate-700 transition-colors duration-300 group-hover/card:border-sky-200 group-hover/card:bg-sky-50 group-hover/card:text-sky-700",
  iconGradient:
    "flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm",
  btnPrimary: "h-11 px-6 text-sm",
  btnOutline:
    "h-11 border-slate-200/90 bg-white/70 px-6 text-sm backdrop-blur-sm",
  btnCard:
    "h-10 w-full border-slate-200 bg-white/70 text-sm hover:bg-slate-50",
  ctaPanel:
    "rounded-2xl border border-slate-200/90 bg-slate-50/80 px-6 py-10 backdrop-blur-sm sm:px-10 sm:py-12",
  ctaEyebrow: "text-sm font-medium tracking-wide text-sky-700",
  ctaTitle:
    "font-heading mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-[1.75rem]",
} as const;

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: motionEase },
  },
};

export const staggerList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: motionEase },
  },
};
