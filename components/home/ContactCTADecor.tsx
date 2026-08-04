"use client";

import { useReducedMotion } from "framer-motion";

import { AmbientBlob } from "@/components/common/motion";

/** Floating decor shapes for the contact CTA panel. */
export function ContactCTADecor() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <>
      <AmbientBlob
        aria-hidden
        className="absolute top-8 right-8 size-16 rounded-2xl border border-white/20 bg-white/10"
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <AmbientBlob
        aria-hidden
        className="absolute bottom-10 left-8 size-10 rounded-full border border-[#93C5FD]/30 bg-[#3B82F6]/20"
        animate={{ y: [0, 10, 0], x: [0, 8, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <AmbientBlob
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
  );
}
