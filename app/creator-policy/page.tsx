
import { LegalPage } from "@/components/shared/LegalPage";
import { creatorPolicySections, policyMeta } from "@/lib/content/policies";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Creator Policy",
  description: "Creator Policy for content and monetization on platforms operated by ALPHARISE INNOVATION PRIVATE LIMITED.",
  path: "/creator-policy",
});

export default function CreatorPolicyPage() {
  return (
    <LegalPage
      title="Creator Policy"
      description="Standards for creators who publish experiences, host sessions, and participate in platform monetization."
      lastUpdated={policyMeta.lastUpdated}
      sections={creatorPolicySections}
    />
  );
}
