export type ContactApiPayload = {
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
};

export type ContactApiValidationError = {
  field?: string;
  message?: string;
  type?: string;
};

export type ContactApiResponse = {
  success?: boolean;
  message?: string;
  errors?: ContactApiValidationError[] | null;
  detail?: string | ContactApiValidationError[] | Record<string, unknown>;
};

export type ContactSubmitResult =
  | { ok: true; message: string }
  | { ok: false; message: string };

const REQUEST_TIMEOUT_MS = 20_000;

const DEFAULT_SUCCESS_MESSAGE =
  "Thank you for contacting ALPHARISE. We will get back to you shortly.";

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
  errors: ContactApiValidationError[] | null | undefined
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

function parseErrorMessage(
  status: number,
  body: ContactApiResponse | null
): string {
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
    return "The server could not process your request. Please try again later.";
  }

  return "Unable to send your message. Please check your details and try again.";
}

async function readJsonSafe(
  response: Response
): Promise<ContactApiResponse | null> {
  try {
    return (await response.json()) as ContactApiResponse;
  } catch {
    return null;
  }
}

export async function submitContactInquiry(
  payload: ContactApiPayload
): Promise<ContactSubmitResult> {
  const url = `${getApiBaseUrl()}/api/v1/contact`;
  const controller = new AbortController();
  const timeoutId = window.setTimeout(
    () => controller.abort(),
    REQUEST_TIMEOUT_MS
  );

  try {
    const response = await fetch(url, {
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
        DEFAULT_SUCCESS_MESSAGE,
    };
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      return {
        ok: false,
        message:
          "The request timed out. Please check your connection and try again.",
      };
    }

    if (error instanceof Error && error.message.includes("NEXT_PUBLIC_API_URL")) {
      return { ok: false, message: error.message };
    }

    return {
      ok: false,
      message:
        "Unable to reach the server. Please check your connection and try again.",
    };
  } finally {
    window.clearTimeout(timeoutId);
  }
}
