"use client";

import { useState, type FormEvent } from "react";
import { Building2, Clock3, Mail, Phone, Send } from "lucide-react";

import { FadeIn } from "@/components/common/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/layout/Container";
import { submitContactInquiry } from "@/lib/api/contact";
import {
  COMPANY_NAME,
  CONTACT,
  LEGAL,
  formatGstinLabel,
  formatRegisteredAddressLines,
} from "@/lib/constants";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const contactCard = cn(ds.card, "w-full p-8");

const contactHeading =
  "mb-6 font-heading text-lg font-semibold tracking-tight text-[#0F172A]";

const contactText = "text-sm leading-7 text-slate-600";

const contactButton = cn(ds.btnPrimary, "h-11 w-full");

const contactRow =
  "flex items-start gap-3 text-sm leading-7 text-slate-600 transition-colors hover:text-[#2563EB]";

const DEFAULT_SUBJECT = "Website contact inquiry";

export function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");
  const addressLines = formatRegisteredAddressLines();
  const phone = CONTACT.phone.trim();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const company = String(data.get("company") || "").trim();

    const result = await submitContactInquiry({
      full_name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      company: company || undefined,
      subject: DEFAULT_SUBJECT,
      message: String(data.get("message") || "").trim(),
    });

    if (!result.ok) {
      setStatus("error");
      setFeedback(result.message);
      return;
    }

    setStatus("success");
    setFeedback(result.message);
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
                  {status === "error" ? (
                    <p
                      role="alert"
                      className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-7 text-red-800 whitespace-pre-line"
                    >
                      {feedback}
                    </p>
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
                      className="w-full rounded-xl border border-[#E2E8F0] bg-white px-2.5 py-2 text-sm outline-none transition-[border-color,box-shadow] focus-visible:border-[#93C5FD] focus-visible:ring-3 focus-visible:ring-[#2563EB]/30"
                    />
                  </label>
                  <div className="mt-auto pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className={contactButton}
                      disabled={status === "loading"}
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
                  <Building2 className="mt-1 size-4 shrink-0 text-[#2563EB]" />
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
                    <Phone className="mt-1 size-4 shrink-0 text-[#2563EB]" />
                    <span>{phone}</span>
                  </a>
                ) : (
                  <p className={cn(contactRow, "hover:text-slate-600")}>
                    <Phone className="mt-1 size-4 shrink-0 text-[#2563EB]" />
                    <span>Phone number available on request via email</span>
                  </p>
                )}
                <a href={`mailto:${CONTACT.email}`} className={contactRow}>
                  <Mail className="mt-1 size-4 shrink-0 text-[#2563EB]" />
                  <span>{CONTACT.email}</span>
                </a>
                {CONTACT.supportEmail !== CONTACT.email ? (
                  <a
                    href={`mailto:${CONTACT.supportEmail}`}
                    className={contactRow}
                  >
                    <Mail className="mt-1 size-4 shrink-0 text-[#2563EB]" />
                    <span>{CONTACT.supportEmail}</span>
                  </a>
                ) : null}
                <p className={cn(contactRow, "hover:text-slate-600")}>
                  <Clock3 className="mt-1 size-4 shrink-0 text-[#2563EB]" />
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
