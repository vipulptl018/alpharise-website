import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { FadeIn } from "@/components/common/motion";
import { Container } from "@/components/layout/Container";
import { BrowserFrame } from "@/components/sinchan-mitra/frames";
import { Button } from "@/components/ui/button";
import { SM_NAME, SM_NAME_MR, SM_PATH, shots } from "@/lib/content/sinchan-mitra";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const highlights = [
  "Billing with barcode scan, GST and udhaar",
  "Stock with batch and expiry, registers and licence reminders",
  "Irrigation files with Aalekh farm layouts in 2D and 3D",
  "Marathi, Hindi and English; works without internet",
];

export default function SinchanMitraSpotlight() {
  return (
    <section
      aria-labelledby="sinchan-mitra-spotlight-heading"
      className={cn(ds.section, ds.sectionMuted)}
    >
      <div aria-hidden className={ds.divider} />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn amount={0.25}>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-white py-1 pr-4 pl-1.5 text-sm font-medium text-emerald-800 shadow-sm">
              <Image
                src={shots.logo.src}
                alt=""
                width={28}
                height={28}
                unoptimized
                className="size-7 rounded-full"
              />
              AgriBusiness SaaS
            </p>
            <h2
              id="sinchan-mitra-spotlight-heading"
              className="font-heading mt-5 text-3xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-4xl"
            >
              {SM_NAME} <span className="text-emerald-700">· {SM_NAME_MR}</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8">
              The all-in-one app for agri-input shops, irrigation dealers and
              related shops across Maharashtra and beyond.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                render={<Link href={SM_PATH} />}
                size="lg"
                className={ds.btnPrimary}
              >
                Explore Sinchan Mitra
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Button>
              <Button
                render={<Link href="/contact" />}
                variant="outline"
                size="lg"
                className={ds.btnOutline}
              >
                Request a demo
              </Button>
            </div>
          </FadeIn>
          <FadeIn amount={0.2}>
            <BrowserFrame
              shot={shots.homeMr}
              alt="Sinchan Mitra home screen in Marathi on Windows"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
