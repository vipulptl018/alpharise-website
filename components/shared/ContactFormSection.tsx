"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";
import { ds, fadeUp } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const address =
    [CONTACT.address.line1, CONTACT.address.city, CONTACT.address.country]
      .filter(Boolean)
      .join(", ") || "India";

  return (
    <section className={cn(ds.section, ds.sectionWhite)}>
      <div aria-hidden className={ds.divider} />
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <Card className={ds.card}>
              <CardHeader className={ds.cardHeader}>
                <CardTitle className={ds.cardTitle}>Send us a message</CardTitle>
              </CardHeader>
              <CardContent className={cn(ds.cardContent, "pb-7")}>
                {submitted ? (
                  <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                    Thank you. Your message has been received. Our team will
                    respond within one business day.
                  </p>
                ) : (
                  <form className="space-y-4" onSubmit={onSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block space-y-1.5 text-sm">
                        <span className="font-medium text-slate-700">Name</span>
                        <Input name="name" required placeholder="Your name" />
                      </label>
                      <label className="block space-y-1.5 text-sm">
                        <span className="font-medium text-slate-700">Email</span>
                        <Input
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                        />
                      </label>
                    </div>
                    <label className="block space-y-1.5 text-sm">
                      <span className="font-medium text-slate-700">Company</span>
                      <Input name="company" placeholder="Company name" />
                    </label>
                    <label className="block space-y-1.5 text-sm">
                      <span className="font-medium text-slate-700">Message</span>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your project"
                        className="w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                      />
                    </label>
                    <Button type="submit" size="lg" className={ds.btnPrimary}>
                      Send Message
                      <Send data-icon="inline-end" className="size-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <Card className={ds.card}>
              <CardHeader className={ds.cardHeader}>
                <CardTitle className={ds.cardTitle}>Contact details</CardTitle>
              </CardHeader>
              <CardContent className={cn(ds.cardContent, "space-y-4 pb-7")}>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-slate-600 hover:text-slate-950"
                >
                  <Phone className="mt-0.5 size-4 text-slate-400" />
                  {CONTACT.phone}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-3 text-sm text-slate-600 hover:text-slate-950"
                >
                  <Mail className="mt-0.5 size-4 text-slate-400" />
                  {CONTACT.email}
                </a>
                <p className="flex items-start gap-3 text-sm text-slate-600">
                  <MapPin className="mt-0.5 size-4 text-slate-400" />
                  {address}
                </p>
                <p className="flex items-start gap-3 text-sm text-slate-600">
                  <Clock3 className="mt-0.5 size-4 text-slate-400" />
                  Mon–Sat · 10:00 AM – 7:00 PM IST
                </p>
              </CardContent>
            </Card>

            <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.2)]">
              <div className="flex h-56 items-center justify-center bg-[linear-gradient(135deg,#e2e8f0,#f8fafc)] p-6 text-center">
                <div>
                  <p className="font-heading text-lg font-semibold text-slate-800">
                    Google Map Placeholder
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Interactive map embed can be connected here.
                  </p>
                </div>
              </div>
            </div>

            <Card className={ds.card}>
              <CardHeader className={ds.cardHeader}>
                <CardTitle className={ds.cardTitle}>Social media</CardTitle>
              </CardHeader>
              <CardContent className={cn(ds.cardContent, "pb-7")}>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
                    { label: "GitHub", href: SOCIAL_LINKS.github },
                    { label: "Twitter", href: SOCIAL_LINKS.twitter },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 transition-colors hover:text-slate-950"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
