
import { LegalPage } from "@/components/shared/LegalPage";
import {
  communityGuidelinesSections,
  policyMeta,
} from "@/lib/content/policies";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Community Guidelines",
  description: "Community Guidelines for ALPHARISE INNOVATION PRIVATE LIMITED products, including the Social Voice Communication Platform.",
  path: "/community-guidelines",
});

export default function CommunityGuidelinesPage() {
  return (
    <LegalPage
      title="Community Guidelines"
      description="Standards of respectful, lawful, and safe participation across ALPHARISE platforms and communities."
      lastUpdated={policyMeta.lastUpdated}
      sections={communityGuidelinesSections}
    />
  );
}
