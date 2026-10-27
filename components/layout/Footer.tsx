import type { SVGProps } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/Container";
import {
  COMPANY,
  COMPANY_NAME,
  CONTACT,
  LEGAL,
  SITE_NAME,
  SOCIAL_LINKS,
  formatGstinLabel,
  formatRegisteredAddress,
} from "@/lib/constants";
import { footerNavigation } from "@/lib/navigation";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.4.4 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5 1-.4.2-1.1.4-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1-.4-.4-.7-.9-1-1.5-.2-.4-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .4-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0.1 5.7.1 4.9.3 4.1.6c-.8.3-1.5.7-2.2 1.4C1.3 2.6.9 3.3.6 4.1.3 4.9.1 5.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.3 2.1.6 2.9.3.8.7 1.5 1.4 2.2.7.7 1.3 1.1 2.2 1.4.8.3 1.6.5 2.9.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.1-.3 2.9-.6.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.3 1.4-2.2.3-.8.5-1.6.6-2.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.1-.6-2.9-.3-.8-.7-1.5-1.4-2.2C21.4 1.3 20.7.9 19.9.6 19.1.3 18.3.1 17 .1 15.7 0 15.3 0 12 0z" />
      <path d="M12 5.8A6.2 6.2 0 105.8 12 6.2 6.2 0 0012 5.8m0 10.2A4 4 0 1116 12a4 4 0 01-4 4.1zM18.4 4.2a1.4 1.4 0 11-1.4 1.4 1.4 1.4 0 011.4-1.4z" />
    </svg>
  );
}

const socialItems = [
  {
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    icon: InstagramIcon,
  },
] as const;

const linkClass =
  "text-sm text-slate-400 transition-colors duration-200 hover:text-white";

const contactRow =
  "flex items-start gap-2.5 text-sm leading-6 text-slate-400 transition-colors hover:text-white";

export function Footer() {
  const year = new Date().getFullYear();
  const address = formatRegisteredAddress() || "India";
  const phone = CONTACT.phone.trim();

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#0F172A] text-slate-300">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_0%,rgba(79,70,229,0.22),transparent_55%),radial-gradient(ellipse_50%_40%_at_90%_100%,rgba(124,58,237,0.14),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent"
      />

      <Container className="relative py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-10 lg:grid-cols-5 lg:gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-heading text-xl font-semibold tracking-[-0.02em] text-white transition-colors hover:text-[#C4B5FD]"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-3 text-sm font-semibold tracking-tight text-white">
              {COMPANY_NAME}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              {COMPANY.description}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {socialItems.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7C3AED]/50 hover:bg-[#4F46E5]/20 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.12em] text-white uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.12em] text-white uppercase">
              Platform
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.platform.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.12em] text-white uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.12em] text-white uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              {phone ? (
                <li>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className={contactRow}
                  >
                    <Phone className="mt-0.5 size-4 shrink-0 text-[#A78BFA]" />
                    <span>{phone}</span>
                  </a>
                </li>
              ) : null}
              <li>
                <a href={`mailto:${CONTACT.email}`} className={contactRow}>
                  <Mail className="mt-0.5 size-4 shrink-0 text-[#A78BFA]" />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              {CONTACT.supportEmail !== CONTACT.email ? (
                <li>
                  <a
                    href={`mailto:${CONTACT.supportEmail}`}
                    className={contactRow}
                  >
                    <Mail className="mt-0.5 size-4 shrink-0 text-[#A78BFA]" />
                    <span>{CONTACT.supportEmail}</span>
                  </a>
                </li>
              ) : null}
              <li className="text-sm leading-6 text-slate-400">
                {CONTACT.hours}
              </li>
              {LEGAL.cin ? (
                <li className="text-sm leading-6 text-slate-400">
                  <span className="text-slate-500">CIN</span>
                  <br />
                  <span className="text-slate-200">{LEGAL.cin}</span>
                </li>
              ) : null}
              <li className="text-sm leading-6 text-slate-400">
                <span className="text-slate-500">GSTIN</span>
                <br />
                <span className="text-slate-200">{formatGstinLabel()}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm leading-6 text-slate-400">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#A78BFA]" />
                <span>
                  <span className="text-slate-500">Registered Office</span>
                  <br />
                  <span className="text-slate-200">{address}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          role="separator"
          className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />

        <div className="flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:gap-y-2">
          <p suppressHydrationWarning>
            © {year} {COMPANY_NAME}
          </p>
          {LEGAL.cin ? <p>CIN: {LEGAL.cin}</p> : null}
          <p>GSTIN: {formatGstinLabel()}</p>
          <p>All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
