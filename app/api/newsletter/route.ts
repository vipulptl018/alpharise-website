import { NextResponse } from "next/server";

import { clientKey, rateLimit } from "@/lib/rate-limit";
import { readJsonArray, writeJsonArray } from "@/lib/storage";
import {
  validateNewsletterPayload,
  type NewsletterSubscription,
} from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const limited = rateLimit(clientKey(request, "newsletter"), 8, 60_000);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfterSec) },
      }
    );
  }

  try {
    const body = await request.json();
    const validated = validateNewsletterPayload(body);
    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const subscribers = await readJsonArray<NewsletterSubscription>(
      "newsletter-subscribers.json"
    );
    const exists = subscribers.some(
      (item) => item.email.toLowerCase() === validated.email
    );
    if (exists) {
      return NextResponse.json(
        { error: "This email is already subscribed." },
        { status: 409 }
      );
    }

    subscribers.push({
      id: crypto.randomUUID(),
      email: validated.email,
      createdAt: new Date().toISOString(),
    });
    await writeJsonArray("newsletter-subscribers.json", subscribers);

    return NextResponse.json({
      ok: true,
      message: "You are subscribed for occasional updates.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to save your subscription right now." },
      { status: 500 }
    );
  }
}
