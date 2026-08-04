import { NextResponse } from "next/server";

import { clientKey, rateLimit } from "@/lib/rate-limit";
import { readJsonArray, writeJsonArray } from "@/lib/storage";
import {
  validateContactPayload,
  type ContactSubmission,
} from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const limited = rateLimit(clientKey(request, "contact"), 8, 60_000);
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
    const validated = validateContactPayload(body);
    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const submissions = await readJsonArray<ContactSubmission>(
      "contact-submissions.json"
    );
    const entry: ContactSubmission = {
      id: crypto.randomUUID(),
      ...validated.data,
      createdAt: new Date().toISOString(),
    };
    submissions.push(entry);
    await writeJsonArray("contact-submissions.json", submissions);

    return NextResponse.json({
      ok: true,
      message:
        "Your message has been saved. We will respond during business hours.",
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "Unable to save your message right now. Please email admin@alphariseinnovation.com.",
      },
      { status: 500 }
    );
  }
}
