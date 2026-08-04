"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/layout/Container";
import { CTA, SITE_NAME } from "@/lib/constants";
import { mainNavigation } from "@/lib/navigation";
import { GlobalSearch } from "@/components/shared/GlobalSearch";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 12);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[#E2E8F0]/80 bg-white/80 shadow-[0_8px_30px_-20px_rgba(37,99,235,0.2)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-[-0.02em] text-[#0F172A] transition-colors hover:text-[#2563EB]"
        >
          {SITE_NAME}
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {mainNavigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-2.5 py-2 text-sm font-medium transition-colors duration-200 xl:px-3",
                  isActive
                    ? "bg-[#EEF6FF] text-[#1D4ED8]"
                    : "text-[#64748B] hover:bg-[#EEF6FF]/70 hover:text-[#0F172A]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <GlobalSearch />
          <Button
            render={<Link href={CTA.primary.href} />}
            size="lg"
            className={ds.btnPrimary}
          >
            {CTA.primary.label}
          </Button>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu />
          </SheetTrigger>

          <SheetContent side="right" className="w-full max-w-xs">
            <SheetHeader>
              <SheetTitle>{SITE_NAME}</SheetTitle>
            </SheetHeader>

            <nav
              className="flex flex-col gap-1 px-4 pb-6"
              aria-label="Mobile"
            >
              <div className="mb-3">
                <GlobalSearch className="w-full [&_input]:w-full" />
              </div>
              {mainNavigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                      isActive
                        ? "bg-[#EEF6FF] text-[#1D4ED8]"
                        : "text-[#64748B] hover:bg-[#EEF6FF]/70 hover:text-[#0F172A]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Button
                render={<Link href={CTA.primary.href} />}
                className={cn(ds.btnPrimary, "mt-4 w-full")}
                size="lg"
                onClick={() => setMobileOpen(false)}
              >
                {CTA.primary.label}
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
