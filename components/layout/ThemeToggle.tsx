"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

const STORAGE_KEY = "theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const isDark = () => document.documentElement.classList.contains("dark");

/**
 * One icon button for light / dark mode. The class on <html> is set before first paint by
 * the inline script in app/layout.tsx; the choice is remembered in localStorage.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  const toggle = useCallback(() => {
    const next = !isDark();
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      /* private mode: the choice just is not remembered */
    }
  }, []);

  const label = dark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={dark}
      title={label}
      className={cn(
        "relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full",
        "border border-[#E2E8F0] bg-white text-[#0F172A] shadow-sm",
        "transition-colors duration-300 hover:border-[#C4B5FD] hover:bg-[#F5F3FF]",
        "focus-visible:ring-3 focus-visible:ring-[#4F46E5]/40 focus-visible:outline-none",
        className
      )}
    >
      <Sun
        aria-hidden
        className={cn(
          "absolute size-[1.15rem] transition-all duration-500 ease-out",
          dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
        )}
      />
      <Moon
        aria-hidden
        className={cn(
          "absolute size-[1.15rem] transition-all duration-500 ease-out",
          dark ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
        )}
      />
    </button>
  );
}
