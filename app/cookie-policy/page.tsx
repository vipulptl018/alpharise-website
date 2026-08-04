
import { LegalPage } from "@/components/shared/LegalPage";
import { COMPANY_NAME, CONTACT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Cookie Policy",
  description: "Cookie Policy explaining how ALPHARISE INNOVATION PRIVATE LIMITED uses cookies and similar technologies.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="How ALPHARISE uses cookies and similar technologies on alphariseinnovation.com."
      lastUpdated="August 4, 2026"
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
              We may use essential cookies required for site functionality,
              analytics cookies to understand aggregate traffic, and preference
              cookies to remember settings. Payment pages operated by gateways
              may set additional security cookies.
            </p>
          ),
        },
        {
          heading: "3. Managing Cookies",
          body: (
            <p>
              You can control cookies through your browser settings. Disabling
              certain cookies may affect website functionality or login/session
              features.
            </p>
          ),
        },
        {
          heading: "4. Third-Party Cookies",
          body: (
            <p>
              Analytics, embedded maps, or payment providers may set their own
              cookies. Those providers are responsible for their own privacy
              practices.
            </p>
          ),
        },
        {
          heading: "5. Updates & Contact",
          body: (
            <p>
              We may update this Cookie Policy periodically. Questions can be
              sent to {CONTACT.email} ({COMPANY_NAME}).
            </p>
          ),
        },
      ]}
    />
  );
}
