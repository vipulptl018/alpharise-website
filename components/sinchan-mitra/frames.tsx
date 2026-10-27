import Image from "next/image";

import type { Shot } from "@/lib/content/sinchan-mitra";
import { cn } from "@/lib/utils";

type FrameProps = {
  shot: Shot;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** A Windows-style window around a screenshot of the real app. */
export function BrowserFrame({ shot, alt, sizes, priority, className }: FrameProps) {
  return (
    <div
      className={cn(
        "sm-protect overflow-hidden rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-card)]",
        "shadow-2xl shadow-emerald-950/15",
        className
      )}
    >
      <div
        aria-hidden
        className="flex items-center gap-1.5 border-b border-[var(--sm-line)] bg-[var(--sm-bg2)] px-4 py-2.5"
      >
        <span className="size-2.5 rounded-full bg-[#F87171]" />
        <span className="size-2.5 rounded-full bg-[#FBBF24]" />
        <span className="size-2.5 rounded-full bg-[#34D399]" />
        <span className="ml-3 text-[11px] font-medium text-[var(--sm-muted)]">
          Sinchan Mitra · Windows
        </span>
      </div>
      <Image
        src={shot.src}
        alt={alt}
        width={shot.width}
        height={shot.height}
        sizes={sizes}
        unoptimized
        draggable={false}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}

/** A phone body around a screenshot of the Android helper app. */
export function PhoneFrame({ shot, alt, sizes, className }: FrameProps) {
  return (
    <div
      className={cn(
        "sm-protect overflow-hidden rounded-[2rem] border-[7px] border-slate-900 bg-slate-900",
        "shadow-2xl shadow-emerald-950/30 dark:border-slate-700 dark:bg-slate-700",
        className
      )}
    >
      <Image
        src={shot.src}
        alt={alt}
        width={shot.width}
        height={shot.height}
        sizes={sizes}
        unoptimized
        draggable={false}
        className="h-auto w-full rounded-[1.5rem]"
      />
    </div>
  );
}

/** A plain, rounded screenshot (close-up crops of the app). */
export function ShotCard({ shot, alt, sizes, priority, className }: FrameProps) {
  return (
    <div
      className={cn(
        "sm-protect overflow-hidden rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-card)]",
        "shadow-xl shadow-emerald-950/10",
        className
      )}
    >
      <Image
        src={shot.src}
        alt={alt}
        width={shot.width}
        height={shot.height}
        sizes={sizes}
        unoptimized
        draggable={false}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}
