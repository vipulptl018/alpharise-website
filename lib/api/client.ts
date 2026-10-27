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

// The API runs on Render Free, which sleeps when idle; a cold start can take ~50 s.
const REQUEST_TIMEOUT_MS = 60_000;

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
  successMessage: string
): Promise<ApiResult> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(
    () => controller.abort(),
    REQUEST_TIMEOUT_MS
  );

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
