import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AmbientBlob, FadeIn } from "@/components/common/motion";
import { HeroDashboard } from "@/components/home/HeroDashboard";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { COMPANY_NAME, SITE_NAME } from "@/lib/constants";
import { ds } from "@/lib/design-system";

const stats = [
  { value: "Android", label: "App Platform" },
  { value: "Flutter", label: "Mobile Client" },
  { value: "Node.js", label: "App Backend" },
] as const;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative -mt-20 flex min-h-[100svh] items-center overflow-hidden md:-mt-24 lg:-mt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 premium-mesh" />
        <AmbientBlob
          className="absolute top-[-14%] left-[12%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.22)_0%,transparent_68%)] blur-2xl"
          animate={{ x: [0, 36, 0], y: [0, 22, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <AmbientBlob
          className="absolute right-[-12%] bottom-[-5%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] blur-2xl"
          animate={{ x: [0, -28, 0], y: [0, -18, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <AmbientBlob
          className="absolute top-[38%] left-[48%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(196,181,253,0.2)_0%,transparent_70%)]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(79,70,229,0.22) 0.65px, transparent 0.65px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 35%, black 12%, transparent 78%)",
          }}
        />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="max-w-xl lg:max-w-[34rem]">
            <FadeIn mode="mount" delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#DDD6FE] bg-white/90 px-3.5 py-1.5 text-xs font-medium tracking-wide text-[#4338CA] shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_28px_-18px_rgba(79,70,229,0.35)] backdrop-blur-md">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#7C3AED] opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-[#4F46E5]" />
                </span>
                {SITE_NAME} Innovation
              </span>
            </FadeIn>

            <FadeIn mode="mount" delay={0.08}>
              <h1
                id="hero-heading"
                className="font-heading mt-7 text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.04em] text-[#0F172A] sm:mt-8 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.04]"
              >
                Build{" "}
                <span className="sm-shine-text bg-gradient-to-r from-[#4338CA] via-[#7C3AED] to-[#0EA5E9] bg-clip-text text-transparent">
                  Production-Ready
                </span>{" "}
                Software and Platforms
              </h1>
            </FadeIn>

            <FadeIn mode="mount" delay={0.16}>
              <p className="mt-5 max-w-lg text-base leading-8 text-[#64748B] sm:mt-6 sm:text-lg sm:leading-8">
                {COMPANY_NAME} delivers software development, AI solutions,
                cloud systems, the Sinchan Mitra AgriBusiness SaaS,
                and the Social Voice Communication Platform preparing for public
                release on Android.
              </p>
            </FadeIn>

            <FadeIn
              mode="mount"
              delay={0.24}
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
            >
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className={ds.btnPrimary}
              >
                Get Started
                <ArrowRight data-icon="inline-end" className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
              </Button>

              <Button
                render={<Link href="/services" />}
                variant="outline"
                size="lg"
                className={ds.btnOutline}
              >
                Explore Services
              </Button>
            </FadeIn>

            <FadeIn mode="mount" delay={0.34}>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-[#E2E8F0] pt-8 sm:mt-14 sm:gap-6 sm:pt-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <p className="font-heading text-2xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1.5 text-xs leading-5 text-[#64748B] sm:text-sm">
                        {stat.label}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>

          <div className="relative lg:justify-self-end lg:w-full">
            <HeroDashboard />
          </div>
        </div>
      </Container>
    </section>
  );
}
