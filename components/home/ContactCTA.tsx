import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { AmbientBlob, FadeIn } from "@/components/common/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { ContactCTADecor } from "@/components/home/ContactCTADecor";

export default function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className={cn(ds.section, "relative bg-[#0F172A]")}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <AmbientBlob
          className="absolute -top-24 left-[10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.4)_0%,transparent_68%)]"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <AmbientBlob
          className="absolute right-[5%] bottom-[-10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.28)_0%,transparent_70%)]"
          animate={{ x: [0, -35, 0], y: [0, -25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <AmbientBlob
          className="absolute top-[35%] left-[45%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.16)_0%,transparent_70%)]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container>
        <FadeIn
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] px-6 py-12 shadow-[0_1px_0_rgba(255,255,255,0.1)_inset,0_36px_90px_-42px_rgba(0,0,0,0.7)] backdrop-blur-2xl sm:px-10 sm:py-16 lg:px-16"
          amount={0.35}
        >
          <ContactCTADecor />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2
              id="contact-cta-heading"
              className="font-heading text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              Let&apos;s Build Reliable Software Together
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
              Partner with ALPHARISE for software development, AI solutions,
              cloud delivery, or TechRise Academy.
            </p>

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className={ds.btnPrimary}
              >
                Start Your Project
                <ArrowRight data-icon="inline-end" className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
              </Button>
              <Button
                render={<Link href="/contact" />}
                variant="outline"
                size="lg"
                className="h-11 border-white/25 bg-white/5 px-6 text-sm font-medium text-white shadow-none hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <CalendarDays data-icon="inline-start" className="size-4" />
                Book Free Consultation
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
