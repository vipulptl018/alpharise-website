import type { ReactNode } from "react";

import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LastUpdated } from "@/components/shared/LastUpdated";
import { Container } from "@/components/layout/Container";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/shared/PageHero";

type LegalSection = {
  heading: string;
  body: ReactNode;
};

type LegalPageProps = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
  breadcrumbLabel?: string;
};

export function LegalPage({
  title,
  description,
  lastUpdated,
  sections,
  breadcrumbLabel,
}: LegalPageProps) {
  return (
    <>
      <Breadcrumbs items={[{ label: breadcrumbLabel || title }]} />
      <LastUpdated date={lastUpdated} />
      <PageHero title={title} description={description} />
      <section className={cn(ds.section, ds.sectionWhite)}>
        <div aria-hidden className={ds.divider} />
        <Container size="md">
          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="font-heading text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-[0.9375rem]">
                  {section.body}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
