import { cn } from "@/lib/utils";

/**
 * Unified layout + visual tokens.
 * Spacing/layout only changes here keep pages aligned without redesigning components.
 */
export const ds = {
  /** Clear sticky navbar — applied on <main>. */
  pageTop: "pt-20 md:pt-24 lg:pt-28",
  section: "relative overflow-hidden py-12 sm:py-16 lg:py-20",
  sectionWhite:
    "bg-[#F8F7FF] bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(79,70,229,0.08),transparent_60%)]",
  sectionMuted:
    "bg-[#F5F3FF] bg-[radial-gradient(ellipse_60%_45%_at_80%_10%,rgba(124,58,237,0.14),transparent_55%)]",
  divider:
    "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/35 to-transparent",
  header: "mx-auto max-w-2xl text-center",
  title:
    "font-heading text-3xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-4xl sm:tracking-[-0.035em]",
  subtitle:
    "mt-4 text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8",
  grid: "mt-12 grid gap-6 lg:gap-8",
  grid2: "grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8",
  grid3: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8",
  grid4: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6",
  /** Static content panel — same chrome as cards, no hover lift. */
  surface: cn(
    "rounded-3xl border border-[#E2E8F0] bg-white",
    "shadow-xl shadow-slate-900/5"
  ),
  surfacePad: "p-6 sm:p-8",
  surfacePadSm: "p-5 sm:p-6",
  accordionShell: cn(
    "rounded-3xl border border-[#E2E8F0] bg-white p-2",
    "shadow-xl shadow-slate-900/5 sm:p-4"
  ),
  card: cn(
    "group/card flex h-full flex-col rounded-3xl border border-[#E2E8F0] bg-white py-0",
    "shadow-xl shadow-slate-900/5",
    "transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "will-change-transform",
    "hover:-translate-y-1.5 hover:border-[#DDD6FE] hover:shadow-2xl hover:shadow-violet-500/10",
    "focus-within:border-[#C4B5FD] focus-within:ring-2 focus-within:ring-[#4F46E5]/20"
  ),
  cardHeader: "gap-4 p-6 pb-3 sm:p-7 sm:pb-3",
  cardContent: "flex-1 p-6 pt-0 sm:p-7 sm:pt-0",
  cardFooter: "mt-auto border-0 bg-transparent p-6 pt-2 sm:p-7 sm:pt-2",
  cardTitle:
    "font-heading text-lg font-semibold tracking-[-0.02em] text-[#0F172A]",
  cardDescription: "text-[0.9375rem] leading-7 text-[#64748B]",
  iconBox: cn(
    "flex size-11 shrink-0 items-center justify-center rounded-2xl",
    "border border-[#EDE9FE] bg-gradient-to-br from-[#F5F3FF] to-white text-[#4F46E5]",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]",
    "transition-[border-color,background-color,color,box-shadow,transform] duration-300",
    "group-hover/card:border-[#DDD6FE] group-hover/card:from-[#EDE9FE] group-hover/card:to-white",
    "group-hover/card:text-[#4338CA] group-hover/card:shadow-[0_10px_22px_-12px_rgba(79,70,229,0.55)]",
    "group-hover/card:scale-105"
  ),
  iconGradient: cn(
    "flex size-11 shrink-0 items-center justify-center rounded-2xl",
    "bg-gradient-to-br text-white shadow-[0_12px_24px_-12px_rgba(79,70,229,0.65)]",
    "ring-1 ring-white/30 transition-transform duration-300 group-hover/card:scale-105"
  ),
  btnPrimary: cn(
    // the light sweep over the button on hover
    "relative overflow-hidden before:pointer-events-none before:absolute before:inset-y-0 before:-left-1/2 before:w-1/3 before:skew-x-[-20deg] before:bg-white/30 before:blur-md before:transition-all before:duration-700 hover:before:left-[130%]",
    "h-11 px-6 text-sm font-medium",
    "border-transparent bg-[linear-gradient(180deg,#4F46E5_0%,#7C3AED_100%)] text-white",
    "shadow-[0_1px_0_rgba(255,255,255,0.22)_inset,0_12px_28px_-12px_rgba(79,70,229,0.55)]",
    "hover:bg-[linear-gradient(180deg,#4338CA_0%,#4F46E5_100%)] hover:text-white",
    "hover:shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_16px_34px_-12px_rgba(79,70,229,0.6)]",
    "active:translate-y-px",
    "focus-visible:border-[#C4B5FD] focus-visible:ring-[#4F46E5]/40"
  ),
  btnOutline: cn(
    "h-11 border-[#CBD5E1] bg-white px-6 text-sm font-medium text-[#0F172A]",
    "shadow-sm",
    "hover:border-[#C4B5FD] hover:bg-[#F5F3FF] hover:text-[#0F172A]",
    "hover:shadow-[0_10px_28px_-18px_rgba(79,70,229,0.35)]",
    "active:translate-y-px",
    "focus-visible:border-[#C4B5FD] focus-visible:ring-[#4F46E5]/30"
  ),
  btnCard: cn(
    "h-10 w-full border-[#E2E8F0] bg-white text-sm font-medium text-[#0F172A]",
    "hover:border-[#C4B5FD] hover:bg-[#F5F3FF]",
    "active:translate-y-px"
  ),
  ctaPanel: cn(
    "rounded-3xl border border-[#EDE9FE]",
    "bg-white",
    "px-6 py-10 sm:px-10 sm:py-12",
    "shadow-xl shadow-violet-500/5"
  ),
  ctaEyebrow:
    "text-sm font-medium tracking-[0.08em] text-[#4F46E5] uppercase",
  ctaTitle:
    "font-heading mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-[1.75rem]",
  eyebrow: cn(
    "inline-flex items-center gap-2 rounded-full border border-[#DDD6FE] bg-white/80 px-3.5 py-1",
    "text-xs font-semibold tracking-[0.14em] text-[#4F46E5] uppercase shadow-sm backdrop-blur",
    "before:size-1.5 before:rounded-full before:bg-gradient-to-br before:from-[#4F46E5] before:to-[#7C3AED] before:content-['']"
  ),
} as const;

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: motionEase },
  },
};

export const staggerList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.06,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: motionEase },
  },
};
