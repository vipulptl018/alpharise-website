"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import type { Copy } from "@/lib/content/sinchan-mitra-copy";
import { gallery, galleryCategories, type GalleryCategory } from "@/lib/content/sinchan-mitra";
import { cn } from "@/lib/utils";

type Filter = GalleryCategory | "All";

const filters: Filter[] = ["All", ...galleryCategories];

type Props = { copy: Copy["gallery"]; ui: Copy["ui"] };

/**
 * Small, watermarked screens of the app, filtered by area. There is deliberately no enlarged view:
 * the pictures are low resolution so they cannot be used to rebuild the app's screens.
 */
export function ScreenGallery({ copy, ui }: Props) {
  const [filter, setFilter] = useState<Filter>("All");

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((i) => i.category === filter)),
    [filter]
  );

  const titleOf = (id: string) => copy.titles[id] ?? id;
  const labelOf = (name: Filter) => (name === "All" ? copy.all : copy.categories[name]);

  return (
    <div>
      <div
        role="tablist"
        aria-label={ui.categories}
        className="flex flex-wrap justify-center gap-2"
      >
        {filters.map((name) => (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={filter === name}
            onClick={() => setFilter(name)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300",
              filter === name
                ? "border-transparent bg-gradient-to-r from-[var(--sm-grad-a)] to-[var(--sm-grad-b)] text-white shadow-lg shadow-emerald-500/25"
                : "border-[var(--sm-line)] bg-[var(--sm-card)] text-[var(--sm-ink)] hover:border-[var(--sm-brand)]"
            )}
          >
            {labelOf(name)}
          </button>
        ))}
      </div>

      <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.id}>
            <figure className="group overflow-hidden rounded-2xl border border-[var(--sm-line)] bg-[var(--sm-card)] shadow-lg shadow-emerald-950/5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-[var(--sm-brand)] hover:shadow-xl hover:shadow-emerald-500/15">
              <Image
                src={`/sinchan-mitra/${item.file}`}
                alt={`${titleOf(item.id)}: ${ui.screenshotAlt}`}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 30vw, 46vw"
                loading="lazy"
                unoptimized
                draggable={false}
                className="h-auto w-full border-b border-[var(--sm-line)]"
              />
              <figcaption className="px-3 py-2.5 text-xs leading-5 font-medium text-[var(--sm-ink)]">
                {titleOf(item.id)}
                <span className="mt-0.5 block text-[11px] font-normal text-[var(--sm-muted)]">
                  {copy.categories[item.category]}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-center text-xs text-[var(--sm-muted)]">{copy.hint}</p>
    </div>
  );
}
