import Link from "next/link";

import { LegalPage } from "@/components/shared/LegalPage";
import { COMPANY_NAME, CONTACT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for ALPHARISE INNOVATION PRIVATE LIMITED. How we collect, use, and protect personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This policy explains how ALPHARISE collects, uses, and safeguards personal information across our website, services, academy, and platforms."
      lastUpdated="August 4, 2026"
      sections={[
        {
          heading: "1. Who We Are",
          body: (
            <p>
              {COMPANY_NAME} (“ALPHARISE”, “we”, “us”) operates
              alphariseinnovation.com and related products including TechRise
              Academy programs and the Social Voice Communication Platform for
              Android (preparing for public release).
            </p>
          ),
        },
        {
          heading: "2. Information We Collect",
          body: (
            <p>
              We may collect identity and contact details (including mobile
              numbers used for registration and OTP verification), profile
              information, company information, project requirements, support
              tickets, payment references from payment processors, communication
              records, and technical data such as browser type, device data, and
              usage analytics when you interact with our website, Android
              application, or services.
            </p>
          ),
        },
        {
          heading: "3. How We Use Information",
          body: (
            <p>
              Information is used to respond to inquiries, deliver contracted
              services, authenticate accounts, process enrollments and support
              requests, issue invoices, operate platform features such as rooms
              and wallets, improve our website and app, communicate service
              updates, prevent fraud or abuse, and meet legal or accounting
              obligations.
            </p>
          ),
        },
        {
          heading: "4. Payments",
          body: (
            <p>
              Card and UPI payments are processed by third-party payment
              gateways. ALPHARISE does not store full card numbers on its
              servers. Payment processors may collect billing details under their
              own privacy terms.
            </p>
          ),
        },
        {
          heading: "5. Sharing of Information",
          body: (
            <p>
              We do not sell personal information. We may share data with trusted
              processors who support hosting, analytics, email, customer support,
              or payments—only as needed to operate our business—and with
              authorities when legally required.
            </p>
          ),
        },
        {
          heading: "6. Data Security",
          body: (
            <p>
              We apply reasonable administrative and technical safeguards to
              protect information. No method of transmission over the Internet is
              fully secure; please avoid sending unnecessary sensitive data by
              email. Do not share OTP codes with anyone.
            </p>
          ),
        },
        {
          heading: "7. Platform Privacy Controls",
          body: (
            <p>
              The Social Voice Communication Platform Android app may provide
              profile visibility and notification preferences. Available controls
              can vary by app version. Feature-level privacy guidance is
              described in the{" "}
              <Link
                href="/social-voice#privacy-controls"
                className="font-medium text-sky-700 underline underline-offset-2"
              >
                Social Voice Documentation
              </Link>
              .
            </p>
          ),
        },
        {
          heading: "8. Retention",
          body: (
            <p>
              We retain personal data only as long as needed for the purposes
              collected, including legal, tax, and dispute-resolution
              requirements, then delete or anonymize it where practicable.
            </p>
          ),
        },
        {
          heading: "9. Your Rights",
          body: (
            <p>
              Depending on applicable law, you may request access, correction, or
              deletion of personal information. Contact {CONTACT.supportEmail} or{" "}
              {CONTACT.email} to submit a request. We may need to verify your
              identity before acting.
            </p>
          ),
        },
        {
          heading: "10. Children’s Privacy",
          body: (
            <p>
              Our services are intended for adults and organizations. We do not
              knowingly collect personal information from children under 13 (or
              the higher age required in your jurisdiction) for commercial
              platform use.
            </p>
          ),
        },
        {
          heading: "11. Contact",
          body: (
            <p>
              Privacy questions for {COMPANY_NAME} can be sent to{" "}
              {CONTACT.email}.
            </p>
          ),
        },
      ]}
    />
  );
}
