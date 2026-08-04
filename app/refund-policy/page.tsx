import type { Metadata } from "next";

import { LegalPage } from "@/components/shared/LegalPage";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund Policy for services and academy programs offered by ${COMPANY_NAME}.`,
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      description="This policy outlines refund eligibility for consulting services and TechRise Academy programs."
      lastUpdated="March 1, 2026"
      sections={[
        {
          heading: "1. Software & Consulting Services",
          body: (
            <p>
              Project fees are generally non-refundable once discovery or
              development work has started, except where a written agreement
              specifies otherwise or where required by law.
            </p>
          ),
        },
        {
          heading: "2. Academy Programs",
          body: (
            <p>
              Course fees may be eligible for partial refunds if cancellation is
              requested before the cohort start date, subject to administrative
              charges. After a batch begins, refunds are evaluated case-by-case.
            </p>
          ),
        },
        {
          heading: "3. Refund Requests",
          body: (
            <p>
              To request a refund, email hello@alpharise.in with your full name,
              program or project reference, payment details, and reason for the
              request.
            </p>
          ),
        },
        {
          heading: "4. Processing Time",
          body: (
            <p>
              Approved refunds are typically processed within 7–14 business days
              to the original payment method, depending on payment provider
              timelines.
            </p>
          ),
        },
        {
          heading: "5. Contact",
          body: (
            <p>
              For billing questions, contact {COMPANY_NAME} at
              hello@alpharise.in.
            </p>
          ),
        },
      ]}
    />
  );
}
