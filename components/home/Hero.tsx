"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Cloud,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { COMPANY_NAME, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const stats = [
  { value: "50+", label: "Projects" },
  { value: "15+", label: "Technologies" },
  { value: "100+", label: "Students" },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease },
  }),
};

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/70 bg-white/70 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

function FloatCard({
  children,
  className,
  delay = 0,
  amplitude = 8,
  duration = 5.5,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={cn("absolute z-10", className)}
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={{
        opacity: 1,
        y: [0, -amplitude, 0],
        scale: 1,
      }}
      transition={{
        opacity: { duration: 0.65, delay, ease },
        scale: { duration: 0.65, delay, ease },
        y: {
          duration,
          delay: delay + 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function AnalyticsCard() {
  const bars = [38, 58, 44, 72, 51, 86, 63, 94, 70, 82];

  return (
    <GlassCard className="w-full p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium tracking-[0.14em] text-slate-500 uppercase">
            Analytics
          </p>
          <p className="mt-1.5 font-heading text-2xl font-semibold tracking-tight text-slate-950">
            128.4k
          </p>
          <p className="mt-1 text-xs text-emerald-600">+18.2% this month</p>
        </div>
        <div className="flex size-9 items-center justify-center rounded-xl bg-slate-950 text-white">
          <Activity className="size-4" />
        </div>
      </div>

      <div className="mt-6 flex h-20 items-end gap-1.5">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            className="flex-1 rounded-t-md bg-gradient-to-t from-slate-900 to-slate-500/80"
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.75, delay: 0.7 + index * 0.04, ease }}
          />
        ))}
      </div>
    </GlassCard>
  );
}

function AICard() {
  return (
    <GlassCard className="w-full p-5">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-700">
          <BrainCircuit className="size-4" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">AI Engine</p>
          <p className="text-xs text-slate-500">Model orchestration</p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {[
          { label: "Inference", value: "99.2%" },
          { label: "Accuracy", value: "97.8%" },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between">
            <span className="text-xs text-slate-500">{row.label}</span>
            <span className="text-xs font-semibold text-slate-900">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 overflow-hidden rounded-xl bg-slate-950/[0.03] p-3">
        <div className="flex items-center gap-2 text-[11px] text-slate-500">
          <Sparkles className="size-3.5 text-sky-600" />
          <span>Realtime reasoning active</span>
          <motion.span
            className="ml-auto size-1.5 rounded-full bg-emerald-500"
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </div>
      </div>
    </GlassCard>
  );
}

function APICard() {
  return (
    <GlassCard className="w-full p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-slate-950/[0.04] text-slate-800">
            <Terminal className="size-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">API Gateway</p>
            <p className="text-xs text-slate-500">24 endpoints</p>
          </div>
        </div>
        <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold tracking-wide text-emerald-700 uppercase">
          Healthy
        </span>
      </div>

      <div className="mt-5 space-y-2.5 font-mono text-[11px]">
        <div className="flex items-center justify-between rounded-lg bg-slate-950/[0.03] px-3 py-2">
          <span className="text-sky-700">GET</span>
          <span className="text-slate-600">/v1/projects</span>
          <span className="text-slate-400">42ms</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-slate-950/[0.03] px-3 py-2">
          <span className="text-amber-700">POST</span>
          <span className="text-slate-600">/v1/deploy</span>
          <span className="text-slate-400">89ms</span>
        </div>
      </div>
    </GlassCard>
  );
}

function CloudCard() {
  return (
    <GlassCard className="w-full p-5">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-700">
          <Cloud className="size-4" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Cloud Platform</p>
          <p className="text-xs text-slate-500">Multi-region uptime</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {[
          { region: "IND", status: "Online" },
          { region: "SG", status: "Online" },
          { region: "EU", status: "Online" },
        ].map((item) => (
          <div
            key={item.region}
            className="rounded-xl bg-slate-950/[0.03] px-2 py-3 text-center"
          >
            <div className="mx-auto mb-2 size-1.5 rounded-full bg-emerald-500" />
            <p className="text-xs font-semibold text-slate-800">{item.region}</p>
            <p className="mt-0.5 text-[10px] text-slate-500">{item.status}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <Zap className="size-3.5 text-amber-500" />
        Auto-scale enabled · 99.99% SLA
      </div>
    </GlassCard>
  );
}

function DashboardComposition() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[560px] sm:h-[560px] lg:mx-0 lg:max-w-none xl:h-[600px]">
      {/* Ambient glow behind cards */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18)_0%,transparent_70%)] blur-2xl"
      />

      {/* Analytics — top left, large */}
      <FloatCard
        className="top-0 left-0 w-[58%] sm:w-[54%]"
        delay={0.2}
        amplitude={7}
        duration={6}
      >
        <AnalyticsCard />
      </FloatCard>

      {/* AI — top right */}
      <FloatCard
        className="top-4 right-0 w-[44%] sm:top-8 sm:w-[42%]"
        delay={0.35}
        amplitude={10}
        duration={5.2}
      >
        <AICard />
      </FloatCard>

      {/* API — bottom left */}
      <FloatCard
        className="bottom-8 left-0 w-[48%] sm:bottom-10 sm:w-[46%]"
        delay={0.45}
        amplitude={8}
        duration={5.8}
      >
        <APICard />
      </FloatCard>

      {/* Cloud — bottom right */}
      <FloatCard
        className="right-0 bottom-0 w-[50%] sm:w-[48%]"
        delay={0.55}
        amplitude={9}
        duration={6.4}
      >
        <CloudCard />
      </FloatCard>
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f8fafc]" />
        <motion.div
          className="absolute top-[-12%] left-[20%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.14)_0%,transparent_68%)]"
          animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-8%] bottom-[5%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(100,116,139,0.12)_0%,transparent_70%)]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(148,163,184,0.28) 0.7px, transparent 0.7px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 65% 55% at 50% 35%, black 15%, transparent 75%)",
          }}
        />
      </div>

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          {/* Left content */}
          <div className="max-w-xl lg:max-w-[34rem]">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-sky-500" />
                {SITE_NAME} Innovation
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="font-heading mt-8 text-[2.5rem] leading-[1.08] font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]"
              custom={0.08}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              Build Future-Ready Software Solutions
            </motion.h1>

            <motion.p
              className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg sm:leading-8"
              custom={0.16}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {COMPANY_NAME} develops enterprise software, AI solutions,
              websites, mobile apps, cloud platforms and professional IT
              training.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              custom={0.24}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="h-11 px-6 text-sm"
              >
                Get Started
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Button>

              <Button
                render={<Link href="/services" />}
                variant="outline"
                size="lg"
                className="h-11 border-slate-200/90 bg-white/70 px-6 text-sm backdrop-blur-sm"
              >
                Explore Services
              </Button>
            </motion.div>

            <motion.dl
              className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-slate-200/90 pt-10"
              custom={0.34}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <p className="font-heading text-3xl font-semibold tracking-tight text-slate-950">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-sm text-slate-500">{stat.label}</p>
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right dashboard */}
          <div className="relative lg:justify-self-end lg:w-full">
            <DashboardComposition />
          </div>
        </div>
      </Container>
    </section>
  );
}
