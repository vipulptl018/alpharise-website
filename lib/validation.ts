export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  createdAt: string;
};

export type NewsletterSubscription = {
  id: string;
  email: string;
  createdAt: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return emailPattern.test(email);
}

export function validateContactPayload(body: unknown): {
  ok: true;
  data: Omit<ContactSubmission, "id" | "createdAt">;
} | {
  ok: false;
  error: string;
} {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const record = body as Record<string, unknown>;
  const name = String(record.name ?? "").trim();
  const email = String(record.email ?? "").trim().toLowerCase();
  const company = String(record.company ?? "").trim();
  const phone = String(record.phone ?? "").trim();
  const message = String(record.message ?? "").trim();

  if (name.length < 2) {
    return { ok: false, error: "Please enter your full name." };
  }
  if (!isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (message.length < 10) {
    return { ok: false, error: "Please enter a message with at least 10 characters." };
  }
  if (phone && phone.replace(/\D/g, "").length < 8) {
    return { ok: false, error: "Please enter a valid phone number or leave it blank." };
  }

  return {
    ok: true,
    data: { name, email, company, phone, message },
  };
}

export function validateNewsletterPayload(body: unknown): {
  ok: true;
  email: string;
} | {
  ok: false;
  error: string;
} {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }
  const email = String((body as Record<string, unknown>).email ?? "")
    .trim()
    .toLowerCase();
  if (!isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  return { ok: true, email };
}
