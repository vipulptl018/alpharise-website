
import { LegalPage } from "@/components/shared/LegalPage";
import {
  policyMeta,
  virtualCoinPolicySections,
} from "@/lib/content/policies";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Virtual Coin Policy",
  description: "Virtual Coin Policy for digital items offered by ALPHARISE INNOVATION PRIVATE LIMITED, including on the Social Voice Communication Platform.",
  path: "/virtual-coin-policy",
});

export default function VirtualCoinPolicyPage() {
  return (
    <LegalPage
      title="Virtual Coin Policy"
      description="How virtual coins are purchased, used, restricted, and managed across ALPHARISE products."
      lastUpdated={policyMeta.lastUpdated}
      sections={virtualCoinPolicySections}
    />
  );
}
