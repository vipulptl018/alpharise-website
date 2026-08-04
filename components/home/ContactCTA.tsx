"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ds, fadeUp } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export default function ContactCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="contact-cta-heading"
      className={cn(ds.section, "bg-slate-950")}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-24 left-[10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.35)_0%,transparent_68%)]"
          animate={
            reduceMotion ? undefined : { x: [0, 40, 0], y: [0, 30, 0] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[5%] bottom-[-10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.28)_0%,transparent_70%)]"
          animate={
            reduceMotion ? undefined : { x: [0, -35, 0], y: [0, -25, 0] }
          }
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[35%] left-[45%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.18)_0%,transparent_70%)]"
          animate={reduceMotion ? undefined : { scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container>
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 px-6 py-14 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:px-10 sm:py-16 lg:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
        >
          {!reduceMotion ? (
            <>
              <motion.div
                aria-hidden
                className="absolute top-8 right-8 size-16 rounded-2xl border border-white/20 bg-white/10"
                animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                aria-hidden
                className="absolute bottom-10 left-8 size-10 rounded-full border border-sky-300/30 bg-sky-400/20"
                animate={{ y: [0, 10, 0], x: [0, 8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                aria-hidden
                className="absolute top-1/2 right-[18%] hidden size-6 rounded-lg bg-cyan-300/25 sm:block"
                animate={{ y: [0, -8, 0], rotate: [0, -12, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </>
          ) : null}

          <div className="relative mx-auto max-w-3xl text-center">
            <h2
              id="contact-cta-heading"
              className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
              Ready to transform your business with modern software solutions?
            </p>

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className={cn(
                  "bg-white text-slate-950 hover:bg-slate-100",
                  ds.btnPrimary
                )}
              >
                Start Your Project
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Button>
              <Button
                render={<Link href="/contact" />}
                variant="outline"
                size="lg"
                className={cn(
                  "border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white",
                  ds.btnPrimary
                )}
              >
                <CalendarDays data-icon="inline-start" className="size-4" />
                Book Free Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
