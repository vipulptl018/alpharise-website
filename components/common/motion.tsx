"use client";

import type { ReactNode } from "react";
import { m, useReducedMotion, type HTMLMotionProps } from "framer-motion";

import { fadeUp, motionEase, staggerItem, staggerList } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** whileInView amount (ignored when mode="mount") */
  amount?: number;
  /**
   * inView — scroll reveal (default).
   * mount — animate on first paint (hero).
   */
  mode?: "inView" | "mount";
  delay?: number;
};

export function FadeIn({
  children,
  className,
  amount = 0.4,
  mode = "inView",
  delay = 0,
}: FadeInProps) {
  if (mode === "mount") {
    return (
      <m.div
        className={className}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease: motionEase }}
      >
        {children}
      </m.div>
    );
  }

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={fadeUp}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </m.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
  as?: "ul" | "div";
};

export function Stagger({
  children,
  className,
  amount = 0.1,
  as = "ul",
}: StaggerProps) {
  const Comp = as === "div" ? m.div : m.ul;

  return (
    <Comp
      className={className}
      variants={staggerList}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </Comp>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "li" | "div";
};

export function StaggerItem({
  children,
  className,
  as = "li",
}: StaggerItemProps) {
  const Comp = as === "div" ? m.div : m.li;

  return (
    <Comp className={className} variants={staggerItem}>
      {children}
    </Comp>
  );
}

type FloatProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
  duration?: number;
};

/** Continuous float used by the homepage hero composition. */
export function Float({
  children,
  className,
  delay = 0,
  amplitude = 8,
  duration = 5.5,
}: FloatProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={cn("absolute z-10", className)}
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={
        reduceMotion
          ? { opacity: 1, y: 0, scale: 1 }
          : {
              opacity: 1,
              y: [0, -amplitude, 0],
              scale: 1,
            }
      }
      transition={{
        opacity: { duration: 0.65, delay, ease: motionEase },
        scale: { duration: 0.65, delay, ease: motionEase },
        y: reduceMotion
          ? { duration: 0.65, delay, ease: motionEase }
          : {
              duration,
              delay: delay + 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
      }}
    >
      {children}
    </m.div>
  );
}

type AmbientBlobProps = HTMLMotionProps<"div"> & {
  reduceMotionSafe?: boolean;
};

/** Decorative ambient motion blob; no-ops motion when reduced-motion is on. */
export function AmbientBlob({
  className,
  animate,
  transition,
  ...props
}: AmbientBlobProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      animate={reduceMotion ? undefined : animate}
      transition={transition}
      {...props}
    />
  );
}
