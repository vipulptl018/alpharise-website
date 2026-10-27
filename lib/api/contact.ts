import { postToApi, type ApiResult } from "@/lib/api/client";

export type ContactApiPayload = {
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
};

export type ContactSubmitResult = ApiResult;

const DEFAULT_SUCCESS_MESSAGE =
  "Thank you for contacting ALPHARISE. We will get back to you shortly.";

export function submitContactInquiry(
  payload: ContactApiPayload,
  onSlow?: (message: string) => void
): Promise<ContactSubmitResult> {
  return postToApi("/api/v1/contact", payload, DEFAULT_SUCCESS_MESSAGE, onSlow);
}
