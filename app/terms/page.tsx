import type { Metadata } from "next";

import { LegalPage } from "@/components/shared/LegalPage";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions governing use of ${COMPANY_NAME} websites and services.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="Please read these terms carefully before using our website or engaging our services."
      lastUpdated="March 1, 2026"
      sections={[
        {
          heading: "1. Acceptance of Terms",
          body: (
            <p>
              By accessing this website or engaging {COMPANY_NAME}, you agree to
              these Terms & Conditions and all applicable laws.
            </p>
          ),
        },
        {
          heading: "2. Services",
          body: (
            <p>
              We provide software development, digital products, cloud and AI
              solutions, and training services. Specific deliverables, timelines,
              and fees are defined in separate proposals or agreements.
            </p>
          ),
        },
        {
          heading: "3. Intellectual Property",
          body: (
            <p>
              Website content, branding, and materials owned by Alpharise remain
              our intellectual property unless otherwise agreed in writing.
              Client project IP is handled as specified in contracts.
            </p>
          ),
        },
        {
          heading: "4. Acceptable Use",
          body: (
            <p>
              You agree not to misuse the website, attempt unauthorized access,
              or use our services for unlawful purposes.
            </p>
          ),
        },
        {
          heading: "5. Limitation of Liability",
          body: (
            <p>
              To the maximum extent permitted by law, Alpharise is not liable for
              indirect or consequential damages arising from website use or
              service engagement beyond contractual commitments.
            </p>
          ),
        },
        {
          heading: "6. Changes",
          body: (
            <p>
              We may update these terms periodically. Continued use of the
              website after updates constitutes acceptance of the revised terms.
            </p>
          ),
        },
      ]}
    />
  );
}
