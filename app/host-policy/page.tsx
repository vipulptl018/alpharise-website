
import { LegalPage } from "@/components/shared/LegalPage";
import { hostPolicySections, policyMeta } from "@/lib/content/policies";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Host Policy",
  description: "Host Policy for the Social Voice Communication Platform operated by ALPHARISE INNOVATION PRIVATE LIMITED.",
  path: "/host-policy",
});

export default function HostPolicyPage() {
  return (
    <LegalPage
      title="Host Policy"
      description="Responsibilities for hosts who manage rooms and participation on the Social Voice Communication Platform."
      lastUpdated={policyMeta.lastUpdated}
      sections={hostPolicySections}
    />
  );
}
