"use client";

import type { ReactNode } from "react";
import { m } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Cloud,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

import { Float } from "@/components/common/motion";
import { motionEase } from "@/lib/design-system";
import { cn } from "@/lib/utils";

function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[#E2E8F0]/90 bg-white/90 shadow-xl shadow-blue-500/10 ring-1 ring-[#BFDBFE]/40 backdrop-blur-2xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/15",
        className
      )}
    >
      {children}
    </div>
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
        <div className="flex size-9 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#2563EB_0%,#3B82F6_100%)] text-white shadow-[0_8px_18px_-10px_rgba(37,99,235,0.55)]">
          <Activity className="size-4" strokeWidth={1.75} />
        </div>
      </div>

      <div className="mt-6 flex h-20 items-end gap-1.5">
        {bars.map((height, index) => (
          <m.div
            key={index}
            className="flex-1 rounded-t-md bg-gradient-to-t from-[#1D4ED8] via-[#2563EB] to-[#93C5FD]"
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{
              duration: 0.75,
              delay: 0.7 + index * 0.04,
              ease: motionEase,
            }}
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
        <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#EEF6FF] to-[#DBEAFE] text-[#2563EB] ring-1 ring-[#BFDBFE]">
          <BrainCircuit className="size-4" strokeWidth={1.75} />
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
          <Sparkles className="size-3.5 text-[#2563EB]" />
          <span>Realtime reasoning active</span>
          <m.span
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
        <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#EEF6FF] to-white text-[#1D4ED8] ring-1 ring-[#DBEAFE]">
            <Terminal className="size-4" strokeWidth={1.75} />
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
          <span className="text-[#2563EB]">GET</span>
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
        <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#EEF6FF] to-[#DBEAFE] text-[#2563EB] ring-1 ring-[#BFDBFE]">
          <Cloud className="size-4" strokeWidth={1.75} />
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

export function HeroDashboard() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[560px] sm:h-[560px] lg:mx-0 lg:max-w-none xl:h-[600px]">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.24)_0%,transparent_70%)] blur-3xl"
      />

      <Float
        className="top-0 left-0 w-[58%] sm:w-[54%]"
        delay={0.2}
        amplitude={7}
        duration={6}
      >
        <AnalyticsCard />
      </Float>

      <Float
        className="top-4 right-0 w-[44%] sm:top-8 sm:w-[42%]"
        delay={0.35}
        amplitude={10}
        duration={5.2}
      >
        <AICard />
      </Float>

      <Float
        className="bottom-8 left-0 w-[48%] sm:bottom-10 sm:w-[46%]"
        delay={0.45}
        amplitude={8}
        duration={5.8}
      >
        <APICard />
      </Float>

      <Float
        className="right-0 bottom-0 w-[50%] sm:w-[48%]"
        delay={0.55}
        amplitude={9}
        duration={6.4}
      >
        <CloudCard />
      </Float>
    </div>
  );
}
