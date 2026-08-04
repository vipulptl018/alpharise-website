import type { ReactNode } from "react";
import Link from "next/link";
import { COMPANY_NAME } from "@/lib/constants";

export type PolicySection = {
  heading: string;
  body: ReactNode;
};

const lastUpdated = "August 4, 2026";

export const policyMeta = { lastUpdated } as const;

function DocsLink() {
  return (
    <Link
      href="/social-voice"
      className="font-medium text-sky-700 underline underline-offset-2"
    >
      Social Voice Documentation
    </Link>
  );
}

export const communityGuidelinesSections: PolicySection[] = [
  {
    heading: "1. Purpose",
    body: (
      <>
        <p>
          These Community Guidelines set behavioral standards for everyone using
          ALPHARISE products and services, including the Social Voice
          Communication Platform operated by {COMPANY_NAME}.
        </p>
      </>
    ),
  },
  {
    heading: "2. Respectful Participation",
    body: (
      <>
        <p>
          Treat other users, hosts, creators, and staff with respect. Harassment,
          hate speech, threats, bullying, doxxing, or targeted abuse is not
          allowed.
        </p>
      </>
    ),
  },
  {
    heading: "3. Lawful Use",
    body: (
      <>
        <p>
          Use our platforms only for lawful purposes. Do not promote illegal
          activity, fraud, scams, or content that violates applicable laws or
          third-party rights.
        </p>
      </>
    ),
  },
  {
    heading: "4. Safety and Integrity",
    body: (
      <>
        <p>
          Do not share sexual content involving minors, graphic violence, or
          content that exploits or endangers others. Do not attempt to bypass
          safety systems, impersonate others, or manipulate rankings unfairly.
        </p>
      </>
    ),
  },
  {
    heading: "5. Reporting and Enforcement",
    body: (
      <>
        <p>
          Report violations through in-product tools or admin@alphariseinnovation.com. We
          may warn, suspend, or permanently restrict accounts that break these
          guidelines. Serious violations may be referred to authorities where
          required. Feature-level guidance on reporting and blocking is also
          described in the <DocsLink />.
        </p>
      </>
    ),
  },
];

export const hostPolicySections: PolicySection[] = [
  {
    heading: "1. Host Role",
    body: (
      <>
        <p>
          Hosts on the Social Voice Communication Platform manage rooms, set
          participation expectations, and help maintain a safe live environment
          consistent with ALPHARISE policies.
        </p>
      </>
    ),
  },
  {
    heading: "2. Moderation Duties",
    body: (
      <>
        <p>
          Hosts should monitor conversations, address disruptive behavior
          promptly, and escalate serious concerns to ALPHARISE support. Hosts
          must not abuse moderation tools for personal disputes or retaliation.
        </p>
      </>
    ),
  },
  {
    heading: "3. Transparency with Guests",
    body: (
      <>
        <p>
          Room rules, monetization expectations, and participation requirements
          should be communicated clearly. Misleading invitations or coercive
          payment requests are prohibited.
        </p>
      </>
    ),
  },
  {
    heading: "4. Compliance",
    body: (
      <>
        <p>
          Hosts must follow Community Guidelines, User Policy, Creator Policy,
          and Virtual Coin Policy. Violations may result in removal of host
          privileges or account action. Host program feature documentation is
          published in the <DocsLink />.
        </p>
      </>
    ),
  },
];

export const creatorPolicySections: PolicySection[] = [
  {
    heading: "1. Creator Responsibilities",
    body: (
      <>
        <p>
          Creators produce or facilitate content and experiences on ALPHARISE
          platforms, including live voice sessions. Creators are responsible for
          the content they present and the interactions they encourage.
        </p>
      </>
    ),
  },
  {
    heading: "2. Original and Authorized Content",
    body: (
      <>
        <p>
          Do not use copyrighted material, trademarks, or personal data without
          appropriate rights or permission. Do not misrepresent affiliations with
          brands, public figures, or ALPHARISE.
        </p>
      </>
    ),
  },
  {
    heading: "3. Monetization Conduct",
    body: (
      <>
        <p>
          Virtual coin gifts, tips, or promotions must follow the Virtual Coin
          Policy. Creators must not pressure users, promise cash equivalents, or
          run unauthorized raffles or cash-equivalent reward schemes.
        </p>
      </>
    ),
  },
  {
    heading: "4. Safety Standards",
    body: (
      <>
        <p>
          Creators must not solicit private contact for harmful purposes, share
          illicit content, or encourage dangerous challenges. Repeated policy
          breaches may lead to monetization suspension or account termination.
          Creator program feature documentation is published in the{" "}
          <DocsLink />.
        </p>
      </>
    ),
  },
];

export const userPolicySections: PolicySection[] = [
  {
    heading: "1. Account Eligibility",
    body: (
      <>
        <p>
          Users must provide accurate registration details, complete OTP
          verification when required, protect account credentials, and be
          legally able to use the services in their jurisdiction. One person
          should not create multiple accounts to evade restrictions. Feature
          documentation for registration and profiles is published in the{" "}
          <DocsLink />.
        </p>
      </>
    ),
  },
  {
    heading: "2. Acceptable Use",
    body: (
      <>
        <p>
          Users may join rooms, interact respectfully, and use features as
          intended. Prohibited actions include spam, harassment, malware
          distribution, payment fraud, scraping, and unauthorized automation.
        </p>
      </>
    ),
  },
  {
    heading: "3. Purchases and Virtual Items",
    body: (
      <>
        <p>
          Purchases of virtual coins or paid features are subject to the Virtual
          Coin Policy, Pricing information, and applicable refund rules. Users
          should review costs before confirming transactions.
        </p>
      </>
    ),
  },
  {
    heading: "4. Privacy and Communications",
    body: (
      <>
        <p>
          Do not share another person&apos;s private information without consent.
          Direct messages and profile content remain subject to Community
          Guidelines and applicable law.
        </p>
      </>
    ),
  },
  {
    heading: "5. Account Actions",
    body: (
      <>
        <p>
          ALPHARISE may investigate reports and apply warnings, temporary holds,
          or permanent bans. Users may contact admin@alphariseinnovation.com to appeal
          decisions or request account assistance.
        </p>
      </>
    ),
  },
];

export const virtualCoinPolicySections: PolicySection[] = [
  {
    heading: "1. Nature of Virtual Coins",
    body: (
      <>
        <p>
          Virtual coins are digital items offered within ALPHARISE products,
          including the Social Voice Communication Platform. Coins have no
          intrinsic cash value outside the platform and are not bank deposits,
          securities, or real-world currency.
        </p>
      </>
    ),
  },
  {
    heading: "2. Purchasing Coins",
    body: (
      <>
        <p>
          Coins may be purchased through approved payment methods shown at
          checkout. Prices, taxes, and payment processor terms may apply. ALPHARISE
          does not guarantee uninterrupted availability of any coin package.
        </p>
      </>
    ),
  },
  {
    heading: "3. Allowed Uses",
    body: (
      <>
        <p>
          Coins may be used for in-platform features such as gifts, boosts, or
          other disclosed experiences. Usage is final once completed, except where
          a technical error is verified by ALPHARISE or required by law.
        </p>
      </>
    ),
  },
  {
    heading: "4. Restrictions",
    body: (
      <>
        <p>
          Users may not sell, trade, or transfer coins for real money outside
          authorized channels; reverse-engineer coin systems; or exploit bugs for
          unfair advantage. Unauthorized coin acquisition may be reversed and
          accounts restricted.
        </p>
      </>
    ),
  },
  {
    heading: "5. Refunds, Balance Changes, and Withdrawals",
    body: (
      <>
        <p>
          Coin purchases are generally non-refundable once delivered, subject to
          our Refund Policy and consumer-protection requirements. ALPHARISE may
          adjust balances to correct errors, chargebacks, or policy violations.
        </p>
        <p>
          Purchased virtual coins are not redeemable for cash. Where the product
          offers separate withdrawable balances to eligible hosts or creators,
          withdrawal requests are submitted in the Android app, may require
          identity verification, and are reviewed before payout. Eligibility,
          thresholds, fees (if any), and processing times are shown in the app
          or communicated during the request. See the <DocsLink /> for the
          withdrawal workflow summary.
        </p>
      </>
    ),
  },
];
