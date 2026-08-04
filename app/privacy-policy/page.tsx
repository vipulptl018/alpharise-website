import type { Metadata } from "next";

import { LegalPage } from "@/components/shared/LegalPage";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${COMPANY_NAME}. Learn how we collect, use, and protect your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This policy explains how ALPHARISE collects, uses, and safeguards personal information."
      lastUpdated="March 1, 2026"
      sections={[
        {
          heading: "1. Information We Collect",
          body: (
            <>
              <p>
                We may collect identity and contact details, project
                requirements, communication records, and technical data such as
                browser type and usage analytics when you interact with our
                website or services.
              </p>
            </>
          ),
        },
        {
          heading: "2. How We Use Information",
          body: (
            <>
              <p>
                Information is used to respond to inquiries, deliver services,
                improve our website, communicate updates, and maintain security
                and legal compliance.
              </p>
            </>
          ),
        },
        {
          heading: "3. Sharing of Information",
          body: (
            <>
              <p>
                We do not sell personal information. We may share data with
                trusted processors who support hosting, analytics, or
                communication — only as needed to operate our business.
              </p>
            </>
          ),
        },
        {
          heading: "4. Data Security",
          body: (
            <>
              <p>
                We apply reasonable administrative and technical safeguards to
                protect information. No method of transmission over the Internet
                is fully secure, and we encourage cautious sharing of sensitive
                data.
              </p>
            </>
          ),
        },
        {
          heading: "5. Your Rights",
          body: (
            <>
              <p>
                Depending on applicable law, you may request access, correction,
                or deletion of personal information. Contact us at
                hello@alpharise.in to submit a request.
              </p>
            </>
          ),
        },
        {
          heading: "6. Contact",
          body: (
            <>
              <p>
                For privacy questions, email hello@alpharise.in or contact{" "}
                {COMPANY_NAME}.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
