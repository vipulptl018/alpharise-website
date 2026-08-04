import Link from "next/link";

import { LegalPage } from "@/components/shared/LegalPage";
import { COMPANY_NAME, CONTACT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Refund Policy",
  description: "Refund Policy for services, academy programs, and platform purchases from ALPHARISE INNOVATION PRIVATE LIMITED.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      description="This policy explains refund eligibility for consulting services, TechRise Academy enrollments, and Social Voice Communication Platform purchases."
      lastUpdated="August 4, 2026"
      sections={[
        {
          heading: "1. Software & Consulting Services",
          body: (
            <p>
              Project and retainer fees are generally non-refundable once
              discovery or delivery work has started, except where a written
              agreement states otherwise or where mandatory consumer law
              requires a refund.
            </p>
          ),
        },
        {
          heading: "2. TechRise Academy Programs",
          body: (
            <p>
              Course fees may be eligible for a partial refund if cancellation is
              requested in writing before the cohort start date, subject to
              administrative charges disclosed at enrollment. After a batch
              begins, refunds are evaluated case-by-case based on attendance and
              unused services.
            </p>
          ),
        },
        {
          heading: "3. Product and Platform Fees",
          body: (
            <p>
              Fees for delivered software, website, or platform work are
              typically non-refundable after activation or milestone acceptance,
              unless a separate order form provides a cooling-off period.
              Implementation fees for completed milestones are non-refundable.
            </p>
          ),
        },
        {
          heading: "4. Virtual Coins & Platform Purchases",
          body: (
            <p>
              Virtual coin packs and consumable in-platform purchases are
              generally non-refundable once credited to an account, except where
              a verified technical failure prevented delivery, a duplicate charge
              occurred, or applicable law requires otherwise. Coins have no cash
              value outside the platform. See the{" "}
              <Link
                href="/virtual-coin-policy"
                className="font-medium text-sky-700 underline underline-offset-2"
              >
                Virtual Coin Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/pricing#virtual-coin-packages"
                className="font-medium text-sky-700 underline underline-offset-2"
              >
                Pricing
              </Link>{" "}
              for package and usage rules.
            </p>
          ),
        },
        {
          heading: "5. How to Request a Refund",
          body: (
            <p>
              Email {CONTACT.supportEmail} or {CONTACT.email} with your full
              name, order or enrollment reference, payment proof, and reason for
              the request. Incomplete requests may delay review.
            </p>
          ),
        },
        {
          heading: "6. Processing Time",
          body: (
            <p>
              Approved refunds are typically processed within 7–14 business days
              to the original payment method, subject to payment provider
              timelines and bank processing. Approval of a refund request is not
              guaranteed and depends on the facts of each case and applicable
              law.
            </p>
          ),
        },
        {
          heading: "7. Chargebacks",
          body: (
            <p>
              Please contact support before filing a chargeback so we can
              investigate. Confirmed fraud or policy abuse may result in account
              restrictions in addition to reversing virtual balances.
            </p>
          ),
        },
        {
          heading: "8. Contact",
          body: (
            <p>
              Billing questions for {COMPANY_NAME} can be sent to{" "}
              {CONTACT.supportEmail}.
            </p>
          ),
        },
      ]}
    />
  );
}
