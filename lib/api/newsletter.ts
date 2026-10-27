import { postToApi, type ApiResult } from "@/lib/api/client";

const DEFAULT_SUCCESS_MESSAGE = "You are subscribed for occasional updates.";

export function submitNewsletterSubscription(email: string): Promise<ApiResult> {
  return postToApi("/api/v1/newsletter", { email }, DEFAULT_SUCCESS_MESSAGE);
}
