import Link from "next/link";

import { LegalPage } from "@/components/shared/LegalPage";
import { COMPANY_NAME, CONTACT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  description: "Terms and Conditions governing use of ALPHARISE INNOVATION PRIVATE LIMITED websites, services, and platforms.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="Please read these terms carefully before using our website, services, or products."
      lastUpdated="August 4, 2026"
      sections={[
        {
          heading: "1. Acceptance of Terms",
          body: (
            <p>
              By accessing this website or engaging {COMPANY_NAME}, you agree to
              these Terms & Conditions and all applicable laws. Additional
              product-specific policies may also apply.
            </p>
          ),
        },
        {
          heading: "2. Services and Products",
          body: (
            <p>
              We provide software development, website development, mobile and
              desktop application development, AI solutions, cloud solutions,
              business software for agribusiness, hospital and HomeCare, and the
              Social Voice Communication Platform for Android (preparing for
              public release). Specific
              deliverables, timelines, and fees are defined in proposals, product
              terms, or separate agreements.
            </p>
          ),
        },
        {
          heading: "3. Platform Policies",
          body: (
            <p>
              Use of the Social Voice Communication Platform is also governed by
              our Community Guidelines, Host Policy, Creator Policy, User Policy,
              and Virtual Coin Policy. Feature documentation for the Android
              application is published in the{" "}
              <Link
                href="/social-voice"
                className="font-medium text-violet-700 underline underline-offset-2"
              >
                Social Voice Documentation
              </Link>
              . In case of conflict for platform conduct or virtual items, the
              more specific policy controls for that topic.
            </p>
          ),
        },
        {
          heading: "4. Intellectual Property",
          body: (
            <p>
              Website content, branding, and materials owned by {COMPANY_NAME}{" "}
              remain our intellectual property unless otherwise agreed in
              writing. Client project IP is handled as specified in contracts.
            </p>
          ),
        },
        {
          heading: "5. Acceptable Use",
          body: (
            <p>
              You agree not to misuse the website or products, attempt
              unauthorized access, manipulate virtual economies unfairly, or use
              our services for unlawful purposes.
            </p>
          ),
        },
        {
          heading: "6. Limitation of Liability",
          body: (
            <p>
              To the maximum extent permitted by law, {COMPANY_NAME} is not
              liable for indirect or consequential damages arising from website
              use or service engagement beyond contractual commitments.
            </p>
          ),
        },
        {
          heading: "8. Contact",
          body: (
            <p>
              For questions about these terms, contact{" "}
              {CONTACT.email}
              {CONTACT.phone ? (
                <>
                  {" "}
                  or {CONTACT.phone}
                </>
              ) : null}
              . Business hours: {CONTACT.hours}. Registered office details are
              published on the Contact page.
            </p>
          ),
        },
      ]}
    />
  );
}
