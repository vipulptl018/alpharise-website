"use client";

import { m, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** A thin gradient bar across the top of the window that fills as the page is scrolled. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <m.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#0EA5E9]"
      style={{ scaleX }}
    />
  );
}
