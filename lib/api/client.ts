import { CONTACT } from "@/lib/constants";

export type ApiValidationError = {
  field?: string;
  message?: string;
  type?: string;
};

export type ApiResponse = {
  success?: boolean;
  message?: string;
  errors?: ApiValidationError[] | null;
  detail?: string | ApiValidationError[] | Record<string, unknown>;
};

export type ApiResult =
  | { ok: true; message: string }
  | { ok: false; message: string };

// The API runs on Render Free, which sleeps when idle and can take half a minute or more to wake.
// A visitor must not stare at a spinner for a minute: after SLOW_NOTICE_MS a clear note appears
// (the request keeps going), and after REQUEST_TIMEOUT_MS the form gives up with the contact details.
const SLOW_NOTICE_MS = 6_000;
const REQUEST_TIMEOUT_MS = 30_000;

const contactHint = () => `email ${CONTACT.email} or call ${CONTACT.phone}`;

const slowMessage = () =>
  `Our server is waking up, which can take up to half a minute. You can wait here, or ${contactHint()}.`;
const unreachableMessage = () =>
  `Our server is not responding right now. Please email ${CONTACT.email} or call ${CONTACT.phone}; we reply within one business day.`;

let wakeSent = false;

/**
 * Wakes a sleeping backend while the visitor is still filling in the form, so the submit itself
 * does not have to wait for a cold start. Fire and forget: the answer is not used.
 */
export function wakeApi(): void {
  if (wakeSent || typeof window === "undefined") return;
  wakeSent = true;
  try {
    void fetch(`${getApiBaseUrl()}/health`, { mode: "no-cors", cache: "no-store" }).catch(() => {});
  } catch {
    /* no API URL configured: nothing to wake */
  }
}

function getApiBaseUrl(): string {
  const base = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (
    !base ||
    !base.startsWith("http") ||
    base === "NEXT_PUBLIC_API_URL" ||
    base === "NEXT_PUBLIC_SITE_URL"
  ) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is not configured with a valid http(s) URL."
    );
  }
  return base.replace(/\/$/, "");
}

function formatValidationErrors(
  errors: ApiValidationError[] | null | undefined
): string | null {
  if (!errors?.length) return null;

  const lines = errors
    .map((error) => {
      const field = error.field?.trim();
      const message = error.message?.trim();
      if (field && message) return `${field}: ${message}`;
      return message || field || null;
    })
    .filter((line): line is string => Boolean(line));

  return lines.length ? lines.join("\n") : null;
}

function parseErrorMessage(status: number, body: ApiResponse | null): string {
  const validation = formatValidationErrors(body?.errors ?? undefined);
  if (validation) return validation;

  if (typeof body?.message === "string" && body.message.trim()) {
    return body.message.trim();
  }

  if (typeof body?.detail === "string" && body.detail.trim()) {
    return body.detail.trim();
  }

  if (status === 429) {
    return "Too many requests. Please wait a moment and try again.";
  }

  if (status >= 500) {
    return `Server error (${status}). No error detail returned.`;
  }

  return "Unable to send your request. Please check your details and try again.";
}

async function readJsonSafe(response: Response): Promise<ApiResponse | null> {
  try {
    return (await response.json()) as ApiResponse;
  } catch {
    return null;
  }
}

/** POST JSON to the FastAPI backend (`path` like `/api/v1/contact`). */
export async function postToApi(
  path: string,
  payload: unknown,
  successMessage: string,
  onSlow?: (message: string) => void
): Promise<ApiResult> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(
    () => controller.abort(),
    REQUEST_TIMEOUT_MS
  );
  const slowId = onSlow
    ? window.setTimeout(() => onSlow(slowMessage()), SLOW_NOTICE_MS)
    : 0;

  try {
    const response = await fetch(`${getApiBaseUrl()}${path}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const body = await readJsonSafe(response);

    if (!response.ok) {
      return {
        ok: false,
        message: parseErrorMessage(response.status, body),
      };
    }

    return {
      ok: true,
      message:
        (typeof body?.message === "string" && body.message.trim()) ||
        successMessage,
    };
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      return { ok: false, message: unreachableMessage() };
    }

    if (error instanceof Error && error.message.includes("NEXT_PUBLIC_API_URL")) {
      // A visitor must never see a variable name: the real reason goes to the console only.
      console.error(error.message);
      return {
        ok: false,
        message: `This form is not available right now. Please ${contactHint()}.`,
      };
    }

    return { ok: false, message: unreachableMessage() };
  } finally {
    window.clearTimeout(timeoutId);
    if (slowId) window.clearTimeout(slowId);
  }
}
