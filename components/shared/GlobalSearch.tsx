"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { SearchItem } from "@/lib/content/search-index";
import { cn } from "@/lib/utils";

export function GlobalSearch({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(false);
  const listId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const requestId = useRef(0);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    const q = query.trim();
    if (!q) return;

    const currentRequest = ++requestId.current;
    const timer = window.setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
        const data = (await response.json()) as { results?: SearchItem[] };
        if (currentRequest !== requestId.current) return;
        setResults(data.results ?? []);
        setOpen(true);
      } catch {
        if (currentRequest !== requestId.current) return;
        setResults([]);
      } finally {
        if (currentRequest === requestId.current) {
          setLoading(false);
        }
      }
    }, 220);

    return () => window.clearTimeout(timer);
  }, [query]);

  function onQueryChange(value: string) {
    setQuery(value);
    if (!value.trim()) {
      requestId.current += 1;
      setResults([]);
      setOpen(false);
      setLoading(false);
    }
  }

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <label className="sr-only" htmlFor={`${listId}-input`}>
        Search the website
      </label>
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-slate-400" />
        <Input
          id={`${listId}-input`}
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          onFocus={() => {
            if (results.length) setOpen(true);
          }}
          placeholder="Search…"
          className="h-9 w-40 pl-8 text-sm xl:w-52"
          aria-autocomplete="list"
          aria-controls={listId}
          aria-expanded={open}
          role="combobox"
        />
      </div>
      {open && query.trim() ? (
        <div
          id={listId}
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-80 max-w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xl shadow-slate-900/5"
        >
          {loading ? (
            <p className="px-3 py-3 text-sm text-slate-500">Searching…</p>
          ) : results.length === 0 ? (
            <p className="px-3 py-3 text-sm text-slate-500">No matches found.</p>
          ) : (
            <ul className="max-h-80 overflow-auto py-1">
              {results.map((item) => (
                <li key={`${item.href}-${item.title}`} role="presentation">
                  <Link
                    href={item.href}
                    role="option"
                    aria-selected={false}
                    className="block px-3 py-2.5 hover:bg-slate-50"
                    onClick={() => {
                      setOpen(false);
                      setQuery("");
                      setResults([]);
                    }}
                  >
                    <p className="text-sm font-medium text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {item.category} · {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className="border-t border-slate-100 px-3 py-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-full justify-start text-xs"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
