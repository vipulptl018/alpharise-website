
import { LegalPage } from "@/components/shared/LegalPage";
import { userPolicySections, policyMeta } from "@/lib/content/policies";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "User Policy",
  description: "User Policy for accounts and acceptable use of ALPHARISE INNOVATION PRIVATE LIMITED products and services.",
  path: "/user-policy",
});

export default function UserPolicyPage() {
  return (
    <LegalPage
      title="User Policy"
      description="Account, acceptable-use, and participation rules for users of ALPHARISE products and services."
      lastUpdated={policyMeta.lastUpdated}
      sections={userPolicySections}
    />
  );
}
