import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className={cn(ds.section, ds.sectionWhite)}>
      <Container size="md" className="text-center">
        <p className="text-sm font-medium tracking-wide text-violet-700 uppercase">
          404
        </p>
        <h1 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
          The page you requested does not exist or may have moved. Return to the{" "}
          {SITE_NAME} homepage or contact support.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button render={<Link href="/" />} size="lg" className={ds.btnPrimary}>
            Go home
          </Button>
          <Button
            render={<Link href="/contact" />}
            variant="outline"
            size="lg"
          >
            Contact
          </Button>
        </div>
      </Container>
    </section>
  );
}
