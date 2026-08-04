import { NextResponse } from "next/server";

import { searchContent } from "@/lib/content/search-index";
import { clientKey, rateLimit } from "@/lib/rate-limit";

export async function GET(request: Request) {
  const limited = rateLimit(clientKey(request, "search"), 30, 60_000);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfterSec) },
      }
    );
  }

  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? "";
  const results = searchContent(q);
  return NextResponse.json({ query: q, results });
}
