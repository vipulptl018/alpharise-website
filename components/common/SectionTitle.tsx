import type { ReactNode } from "react";

import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleId?: string;
  children?: ReactNode;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleId,
  children,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col",
        align === "center" && "mx-auto items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className={cn(ds.eyebrow, "mb-4")}>{eyebrow}</p>
      ) : null}

      <h2 id={titleId} className={ds.title}>
        {title}
      </h2>

      {description ? <p className={ds.subtitle}>{description}</p> : null}

      {children}
    </div>
  );
}
