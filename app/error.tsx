"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className={cn(ds.section, ds.sectionWhite)}>
      <Container size="md" className="text-center">
        <p className="text-sm font-medium tracking-wide text-sky-700 uppercase">
          Error
        </p>
        <h1 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
          An unexpected error occurred while loading this page. You can try
          again or return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button type="button" size="lg" className={ds.btnPrimary} onClick={reset}>
            Try again
          </Button>
          <Button render={<Link href="/" />} variant="outline" size="lg">
            Go home
          </Button>
        </div>
      </Container>
    </section>
  );
}
