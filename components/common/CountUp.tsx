"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  target: number;
  suffix: string;
  label: string;
  duration?: number;
  className?: string;
};

/** Animated stat number — the only client piece needed for Statistics. */
export function CountUp({
  target,
  suffix,
  label,
  duration = 1400,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, inView, duration, reduceMotion]);

  const display = !inView ? 0 : reduceMotion ? target : value;

  return (
    <span ref={ref} className={className}>
      <span aria-hidden>
        {display}
        {suffix}
      </span>
      <span className="sr-only">
        {target}
        {suffix} {label}
      </span>
    </span>
  );
}
