import type { Metadata } from "next";

import { LegalPage } from "@/components/shared/LegalPage";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie Policy explaining how ${COMPANY_NAME} uses cookies and similar technologies.`,
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="Learn how we use cookies and similar technologies on the Alpharise website."
      lastUpdated="March 1, 2026"
      sections={[
        {
          heading: "1. What Are Cookies?",
          body: (
            <p>
              Cookies are small text files stored on your device that help
              websites function, remember preferences, and understand usage
              patterns.
            </p>
          ),
        },
        {
          heading: "2. How We Use Cookies",
          body: (
            <p>
              We may use essential cookies for site functionality, analytics
              cookies to improve experience, and preference cookies to remember
              settings.
            </p>
          ),
        },
        {
          heading: "3. Managing Cookies",
          body: (
            <p>
              You can control cookies through your browser settings. Disabling
              certain cookies may affect website functionality.
            </p>
          ),
        },
        {
          heading: "4. Third-Party Cookies",
          body: (
            <p>
              Some analytics or embedded services may set their own cookies.
              Those providers are responsible for their own privacy practices.
            </p>
          ),
        },
        {
          heading: "5. Updates & Contact",
          body: (
            <p>
              We may update this Cookie Policy periodically. Questions can be
              sent to hello@alpharise.in ({COMPANY_NAME}).
            </p>
          ),
        },
      ]}
    />
  );
}
