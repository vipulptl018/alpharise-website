"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Building2, Clock3, Mail, Phone, Send } from "lucide-react";

import { FadeIn } from "@/components/common/motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/layout/Container";
import { wakeApi } from "@/lib/api/client";
import { submitContactInquiry } from "@/lib/api/contact";
import {
  COMPANY_NAME,
  CONTACT,
  LEGAL,
  formatGstinLabel,
  formatRegisteredAddressLines,
} from "@/lib/constants";
import { ds } from "@/lib/design-system";
import { useHydrated } from "@/lib/use-hydrated";
import { cn } from "@/lib/utils";

const contactCard = cn(ds.card, "w-full p-8");

const contactHeading =
  "mb-6 font-heading text-lg font-semibold tracking-tight text-[#0F172A]";

const contactText = "text-sm leading-7 text-slate-600";

const contactButton = cn(ds.btnPrimary, "h-11 w-full");

const contactRow =
  "flex items-start gap-3 text-sm leading-7 text-slate-600 transition-colors hover:text-[#4F46E5]";

const DEFAULT_SUBJECT = "Website contact inquiry";

type Draft = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

/** The visitor's own mail app with the form already filled in, for when the server cannot take it. */
function emailFallbackHref(draft: Draft): string {
  const body = [
    `Name: ${draft.name}`,
    `Email: ${draft.email}`,
    ...(draft.company ? [`Company: ${draft.company}`] : []),
    ...(draft.phone ? [`Phone: ${draft.phone}`] : []),
    "",
    draft.message,
  ].join("\n");
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(DEFAULT_SUBJECT)}&body=${encodeURIComponent(body)}`;
}

export function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");
  const [draft, setDraft] = useState<Draft | null>(null);
  const hydrated = useHydrated();

  // wake a sleeping backend while the visitor types, so sending does not wait for a cold start
  useEffect(() => {
    wakeApi();
  }, []);

  const addressLines = formatRegisteredAddressLines();
  const phone = CONTACT.phone.trim();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const company = String(data.get("company") || "").trim();
    const entered: Draft = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company,
      phone: String(data.get("phone") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };
    setDraft(entered);

    const result = await submitContactInquiry(
      {
        full_name: entered.name,
        email: entered.email,
        phone: entered.phone,
        company: company || undefined,
        subject: DEFAULT_SUBJECT,
        message: entered.message,
      },
      // still waiting after a few seconds: say why, and how else to reach us
      (message) => setFeedback(message)
    );

    if (!result.ok) {
      setStatus("error");
      setFeedback(result.message);
      return;
    }

    setStatus("success");
    setFeedback(result.message);
    setDraft(null);
    form.reset();
  }

  return (
    <section className={cn(ds.section, ds.sectionMuted)}>
      <div aria-hidden className={ds.divider} />
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          <FadeIn amount={0.2} className="h-full">
            <article className={contactCard}>
              <h2 className={contactHeading}>Contact form</h2>

              {status === "success" ? (
                <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-7 text-emerald-800 whitespace-pre-line">
                  {feedback}
                </p>
              ) : (
                <form className="flex flex-1 flex-col gap-4" onSubmit={onSubmit}>
                  <p className={contactText}>
                    Submit this form to send a message to {CONTACT.email}. We
                    aim to respond within one business day during {CONTACT.hours}.
                  </p>
                  {status === "loading" && feedback ? (
                    <p
                      role="status"
                      className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-900 whitespace-pre-line"
                    >
                      {feedback}
                    </p>
                  ) : null}
                  {status === "error" ? (
                    <p
                      role="alert"
                      className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-7 text-red-800 whitespace-pre-line"
                    >
                      {feedback}
                    </p>
                  ) : null}
                  {status === "error" && draft ? (
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href={emailFallbackHref(draft)}
                        className={cn(
                          buttonVariants({ size: "lg" }),
                          ds.btnPrimary,
                          "sm:flex-1"
                        )}
                      >
                        <Mail data-icon="inline-start" className="size-4" />
                        Send by email instead
                      </a>
                      {phone ? (
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            ds.btnOutline,
                            "sm:flex-1"
                          )}
                        >
                          <Phone data-icon="inline-start" className="size-4" />
                          Call {phone}
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block space-y-1.5 text-sm">
                      <span className="font-medium text-[#0F172A]">Name</span>
                      <Input name="name" required autoComplete="name" />
                    </label>
                    <label className="block space-y-1.5 text-sm">
                      <span className="font-medium text-[#0F172A]">Email</span>
                      <Input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                      />
                    </label>
                  </div>
                  <label className="block space-y-1.5 text-sm">
                    <span className="font-medium text-[#0F172A]">Company</span>
                    <Input name="company" autoComplete="organization" />
                  </label>
                  <label className="block space-y-1.5 text-sm">
                    <span className="font-medium text-[#0F172A]">Phone</span>
                    <Input name="phone" type="tel" autoComplete="tel" />
                  </label>
                  <label className="block space-y-1.5 text-sm">
                    <span className="font-medium text-[#0F172A]">Message</span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      minLength={10}
                      className="w-full rounded-xl border border-[#E2E8F0] bg-white px-2.5 py-2 text-sm outline-none transition-[border-color,box-shadow] focus-visible:border-[#C4B5FD] focus-visible:ring-3 focus-visible:ring-[#4F46E5]/30"
                    />
                  </label>
                  <div className="mt-auto pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className={contactButton}
                      disabled={status === "loading" || !hydrated}
                    >
                      {status === "loading" ? "Loading..." : "Send Message"}
                      <Send data-icon="inline-end" className="size-4" />
                    </Button>
                  </div>
                </form>
              )}
            </article>
          </FadeIn>

          <FadeIn amount={0.2} className="h-full">
            <article className={contactCard}>
              <h2 className={contactHeading}>Registered office</h2>
              <div className="flex flex-1 flex-col gap-3">
                <p className={cn(contactRow, "hover:text-slate-600")}>
                  <Building2 className="mt-1 size-4 shrink-0 text-[#4F46E5]" />
                  <span>
                    <span className="font-medium text-[#0F172A]">
                      {COMPANY_NAME}
                    </span>
                    <br />
                    {addressLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                    {LEGAL.cin ? (
                      <>
                        <br />
                        CIN: {LEGAL.cin}
                      </>
                    ) : null}
                    <>
                      <br />
                      GSTIN: {formatGstinLabel()}
                    </>
                  </span>
                </p>
                {phone ? (
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className={contactRow}
                  >
                    <Phone className="mt-1 size-4 shrink-0 text-[#4F46E5]" />
                    <span>{phone}</span>
                  </a>
                ) : (
                  <p className={cn(contactRow, "hover:text-slate-600")}>
                    <Phone className="mt-1 size-4 shrink-0 text-[#4F46E5]" />
                    <span>Phone number available on request via email</span>
                  </p>
                )}
                <a href={`mailto:${CONTACT.email}`} className={contactRow}>
                  <Mail className="mt-1 size-4 shrink-0 text-[#4F46E5]" />
                  <span>{CONTACT.email}</span>
                </a>
                {CONTACT.supportEmail !== CONTACT.email ? (
                  <a
                    href={`mailto:${CONTACT.supportEmail}`}
                    className={contactRow}
                  >
                    <Mail className="mt-1 size-4 shrink-0 text-[#4F46E5]" />
                    <span>{CONTACT.supportEmail}</span>
                  </a>
                ) : null}
                <p className={cn(contactRow, "hover:text-slate-600")}>
                  <Clock3 className="mt-1 size-4 shrink-0 text-[#4F46E5]" />
                  <span>{CONTACT.hours}</span>
                </p>
              </div>
            </article>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
