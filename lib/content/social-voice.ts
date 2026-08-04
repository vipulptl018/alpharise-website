import type { IconName } from "@/components/shared/SectionBlocks";
import { CONTACT } from "@/lib/constants";
import { virtualCoinPackages } from "@/lib/content/pricing";

export const socialVoiceMeta = {
  title: "Social Voice Communication Platform",
  eyebrow: "Product Documentation",
  description:
    "Feature documentation for the Social Voice Communication Platform Android application operated by ALPHARISE INNOVATION PRIVATE LIMITED. The Android app is preparing for public release. Covers planned registration, voice rooms, wallets, virtual coins, host and creator programs, safety tools, and support.",
  lastUpdated: "August 4, 2026",
  platform: "Android (preparing for public release)",
  stack: "Flutter client with Node.js backend",
} as const;

export type DocLink = { label: string; href: string };

export type DocHighlight = {
  title: string;
  description: string;
  icon: IconName;
};

export type WorkflowStep = {
  title: string;
  description: string;
};

export type DocSection = {
  id: string;
  title: string;
  description: string;
  body: string[];
  highlights?: DocHighlight[];
  workflow?: {
    title: string;
    steps: WorkflowStep[];
  };
  relatedLinks?: DocLink[];
};

export const socialVoiceToc: { id: string; label: string }[] = [
  { id: "platform-overview", label: "Platform Overview" },
  { id: "user-registration", label: "User Registration" },
  { id: "otp-verification", label: "OTP Login" },
  { id: "profile-verification", label: "Profile Verification" },
  { id: "virtual-coin-system", label: "Virtual Coins" },
  { id: "wallet", label: "Wallet" },
  { id: "coin-packages", label: "Coin Purchase" },
  { id: "voice-calling", label: "Voice Calling" },
  { id: "gift-sending", label: "Gift Sending" },
  { id: "gift-receiving", label: "Gift Receiving" },
  { id: "leaderboard", label: "Leaderboard" },
  { id: "host-program", label: "Host Dashboard" },
  { id: "creator-program", label: "Creator Dashboard" },
  { id: "withdrawal-process", label: "Withdrawal Request" },
  { id: "admin-verification", label: "Admin Verification" },
  { id: "fraud-prevention", label: "Fraud Prevention" },
  { id: "community-reporting", label: "Community Reporting" },
  { id: "user-blocking", label: "User Blocking" },
  { id: "privacy-controls", label: "Privacy Controls" },
  { id: "notifications", label: "Notifications" },
  { id: "call-history", label: "Call History" },
  { id: "virtual-coin-policy", label: "Virtual Coin Policy" },
  { id: "refund-rules", label: "Refund Rules" },
  { id: "terms", label: "Terms" },
  { id: "community-guidelines", label: "Community Guidelines" },
  { id: "customer-support", label: "Customer Support" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export const socialVoiceSections: DocSection[] = [
  {
    id: "platform-overview",
    title: "Platform Overview",
    description:
      "What the Social Voice Communication Platform is and how it is delivered.",
    body: [
      "The Social Voice Communication Platform is an Android application operated by ALPHARISE INNOVATION PRIVATE LIMITED. It is designed to enable users to join and participate in live voice rooms, manage profiles, use wallets and virtual coins, and interact under published community and monetization policies.",
      "The Android client is built with Flutter. Backend services run on Node.js and provide APIs for authentication, rooms, wallets, gifts, rankings, moderation signals, and related account features.",
      "Our Android application is currently preparing for public release. Availability will be announced through our official website and Instagram. Planned features include OTP login, user registration, profile verification, voice calling, coin wallet, coin purchase, gifting system, leaderboard, host dashboard, creator dashboard, wallet, withdrawal request, report user, block user, community guidelines, and privacy controls.",
    ],
    highlights: [
      {
        title: "Release Status",
        description:
          "Our Android application is currently preparing for public release. Availability will be announced through our official website and Instagram.",
        icon: "Smartphone",
      },
      {
        title: "Live Voice Rooms",
        description:
          "Users will be able to enter rooms to listen and speak according to room roles and host controls.",
        icon: "Users",
      },
      {
        title: "Published Policies",
        description:
          "Community Guidelines, Host Policy, Creator Policy, User Policy, and Virtual Coin Policy define acceptable use.",
        icon: "FileBadge",
      },
      {
        title: "Support Channels",
        description: `Account and billing help is available via Support and ${CONTACT.supportEmail} during ${CONTACT.hours}.`,
        icon: "HeartHandshake",
      },
    ],
    relatedLinks: [
      { label: "Products — Voice Platform", href: "/products#voice-platform" },
      { label: "Android App Notes", href: "/products#android-app" },
      { label: "Pricing", href: "/pricing#virtual-coin-packages" },
    ],
  },
  {
    id: "user-registration",
    title: "User Registration",
    description:
      "How new users will create an account on the Android application after public release.",
    body: [
      "Registration will create a user account required to access authenticated features such as profiles, rooms, wallet balances, and reporting tools.",
      "Users will provide the information requested in the registration flow (for example mobile number and basic profile details). Information must be accurate and kept up to date where account recovery or verification depends on it.",
      "By registering, users agree to the Terms & Conditions, User Policy, Community Guidelines, and Privacy Policy applicable to the platform. These flows apply once the Android application is publicly released.",
    ],
    workflow: {
      title: "Registration workflow (after public release)",
      steps: [
        {
          title: "Open the Android app",
          description:
            "Launch the Social Voice Communication Platform application on a supported Android device after public release.",
        },
        {
          title: "Start registration",
          description:
            "Choose the create-account option and enter the required registration details.",
        },
        {
          title: "Accept policies",
          description:
            "Review and accept the published terms and policies presented during signup.",
        },
        {
          title: "Verify identity step",
          description:
            "Complete OTP verification when prompted before the account becomes fully active.",
        },
        {
          title: "Complete profile basics",
          description:
            "Add or confirm display information needed to appear in rooms and on your profile.",
        },
      ],
    },
    relatedLinks: [
      { label: "User Policy", href: "/user-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    id: "otp-verification",
    title: "OTP Login",
    description:
      "One-time password login used to confirm ownership of a contact channel and sign in securely.",
    body: [
      "OTP login confirms that the person signing in controls the registered contact channel (typically a mobile number). It is used during registration and for subsequent sign-in when passwordless OTP authentication is enabled.",
      "An OTP is sent to the contact method associated with the account. The code is time-limited and intended for one-time use. Failed or expired codes can be retried subject to rate limits.",
      "Users should not share OTP codes with anyone, including people claiming to be support staff. ALPHARISE support does not ask users to disclose OTPs.",
    ],
    workflow: {
      title: "OTP login workflow",
      steps: [
        {
          title: "Submit contact details",
          description:
            "Enter the mobile number (or other contact channel) requested by the app.",
        },
        {
          title: "Receive OTP",
          description:
            "Wait for the one-time code delivered through the configured channel.",
        },
        {
          title: "Enter the code",
          description:
            "Type the OTP into the verification screen before it expires.",
        },
        {
          title: "Access the account",
          description:
            "On success, the app opens the authenticated session and proceeds to the home or next required step.",
        },
      ],
    },
    relatedLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Customer Support", href: "/social-voice#customer-support" },
    ],
  },
  {
    id: "profile-verification",
    title: "Profile Verification",
    description:
      "Profile information, display identity, and verification steps that support account integrity.",
    body: [
      "A user profile stores display attributes such as name, avatar, and optional bio or status fields. Profiles help other participants recognize users in rooms and on rankings where rankings are visible.",
      "Profile verification may be required for sensitive actions such as host or creator eligibility and withdrawal requests. When requested, users provide accurate identity or payout details for review.",
      "Users are responsible for profile content. Impersonation, misleading identity claims, and content that violates Community Guidelines are not allowed. Some profile fields remain editable; changes that affect verification or payout eligibility may require additional confirmation.",
    ],
    highlights: [
      {
        title: "Display identity",
        description:
          "Visible profile details help hosts and participants identify speakers in live rooms.",
        icon: "Users",
      },
      {
        title: "Verification when required",
        description:
          "Additional checks may apply before host tools, creator tools, or withdrawals are enabled.",
        icon: "ClipboardCheck",
      },
      {
        title: "Policy compliance",
        description:
          "Profile content must follow Community Guidelines and User Policy.",
        icon: "Shield",
      },
    ],
    relatedLinks: [
      { label: "User Policy", href: "/user-policy" },
      { label: "Community Guidelines", href: "/community-guidelines" },
      { label: "Admin Verification", href: "/social-voice#admin-verification" },
    ],
  },
  {
    id: "voice-calling",
    title: "Voice Calling",
    description:
      "Live voice participation inside platform rooms.",
    body: [
      "Voice features center on live rooms where participants can listen and, when permitted by room roles and host controls, speak in real time.",
      "Hosts manage room participation (for example inviting speakers, muting, or removing disruptive users) according to Host Policy and Community Guidelines.",
      "Audio quality depends on device capability, network conditions, and room capacity. The platform does not guarantee uninterrupted audio in all network environments.",
      "Users should use voice rooms respectfully. Harassment, illegal solicitation, and other prohibited behavior may result in removal from a room and account action.",
    ],
    workflow: {
      title: "Typical room participation workflow",
      steps: [
        {
          title: "Browse or search rooms",
          description:
            "Open the rooms list in the Android app and select an available room.",
        },
        {
          title: "Join as listener",
          description:
            "Enter the room. Default entry may place the user in a listen-only state depending on room settings.",
        },
        {
          title: "Request or receive speak access",
          description:
            "When enabled, request the mic or accept a host invitation to speak.",
        },
        {
          title: "Participate under room rules",
          description:
            "Follow host instructions and published community standards while in the room.",
        },
        {
          title: "Leave the room",
          description:
            "Exit when finished. Hosts may also end the session or remove participants for policy reasons.",
        },
      ],
    },
    relatedLinks: [
      { label: "Host Policy", href: "/host-policy" },
      { label: "Community Guidelines", href: "/community-guidelines" },
    ],
  },
  {
    id: "virtual-coin-system",
    title: "Virtual Coins",
    description:
      "How virtual coins work inside the Android application.",
    body: [
      "Virtual coins are digital items used inside the Social Voice Communication Platform for disclosed in-app features such as gifting. Coins have no intrinsic cash value outside the platform and are not bank deposits, securities, or real-world currency.",
      "Coin balances are associated with the authenticated account wallet. Purchases, gifts, and certain feature uses adjust wallet balances according to the Virtual Coin Policy.",
      "Users may not sell, trade, or transfer coins for real money outside authorized platform channels. Unauthorized acquisition or manipulation of coins may be reversed and may lead to account restrictions.",
    ],
    highlights: [
      {
        title: "Digital items only",
        description:
          "Coins are in-platform items and are not redeemable as cash by purchasers.",
        icon: "Wallet",
      },
      {
        title: "Policy governed",
        description:
          "Purchase, use, and restrictions are described in the Virtual Coin Policy and Refund Policy.",
        icon: "FileBadge",
      },
      {
        title: "Transparent pricing",
        description:
          "Package prices are published on the Pricing page and confirmed at checkout in the app.",
        icon: "ClipboardCheck",
      },
    ],
    relatedLinks: [
      { label: "Virtual Coin Policy", href: "/virtual-coin-policy" },
      { label: "Coin Packages", href: "/social-voice#coin-packages" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
  {
    id: "coin-packages",
    title: "Coin Purchase",
    description:
      "Paid packages that add virtual coins to a user wallet.",
    body: [
      "Users can purchase published coin packages through the payment methods shown at checkout in the Android app. The amount charged, taxes if applicable, and payment-processor terms apply at the time of purchase.",
      "Package names, coin amounts, and list prices published on the website are for transparency. The amount shown at in-app checkout or on a formal invoice prevails if there is a temporary difference.",
      "Coin purchases are generally non-refundable once delivered, subject to the Refund Policy and applicable consumer-protection requirements.",
    ],
    highlights: virtualCoinPackages.map((pack) => ({
      title: `${pack.name} — ${pack.coins}`,
      description: `${pack.price}. ${pack.detail}`,
      icon: "Wallet" as IconName,
    })),
    relatedLinks: [
      { label: "Pricing — Virtual Coin Packages", href: "/pricing#virtual-coin-packages" },
      { label: "Virtual Coin Policy", href: "/virtual-coin-policy" },
    ],
  },
  {
    id: "gift-sending",
    title: "Gift Sending",
    description:
      "Sending virtual gifts funded by wallet coins during platform interactions.",
    body: [
      "Gift sending allows a user to send disclosed in-app gifts to another participant (for example a host or creator) using coins from the sender’s wallet.",
      "When a gift is completed, coins are deducted from the sender’s balance according to the gift’s listed coin cost. Gift transactions are typically final once processed, except where a verified technical error applies or law requires otherwise.",
      "Creators and hosts must not pressure users to send gifts, promise cash equivalents for gifts, or run unauthorized raffles or cash-equivalent reward schemes. Gift activity remains subject to Creator Policy, Host Policy, and Community Guidelines.",
    ],
    workflow: {
      title: "Gift sending workflow",
      steps: [
        {
          title: "Ensure wallet balance",
          description:
            "Confirm enough coins are available, or purchase a coin package if needed.",
        },
        {
          title: "Select a gift",
          description:
            "Choose a disclosed gift option in a room or profile flow where gifting is available.",
        },
        {
          title: "Confirm the send",
          description:
            "Review the coin cost and confirm. The app deducts coins on successful completion.",
        },
        {
          title: "Sender history",
          description:
            "Completed sends may appear in wallet or activity history where the app provides that view.",
        },
      ],
    },
    relatedLinks: [
      { label: "Gift Receiving", href: "/social-voice#gift-receiving" },
      { label: "Creator Policy", href: "/creator-policy" },
      { label: "Virtual Coin Policy", href: "/virtual-coin-policy" },
    ],
  },
  {
    id: "gift-receiving",
    title: "Gift Receiving",
    description:
      "How recipients see and account for virtual gifts received on the platform.",
    body: [
      "Eligible hosts and creators may receive virtual gifts sent by other users. Received gifts are recorded according to product rules and may contribute to in-app recognition metrics such as leaderboards.",
      "Gift receipt does not automatically convert purchased coins into cash for the sender. Any withdrawable earnings for eligible hosts or creators, if offered, follow separate program rules and the withdrawal request process.",
      "Recipients must not misrepresent gift value as guaranteed income, pressure senders, or run unauthorized cash-equivalent schemes. Received gift activity remains subject to Creator Policy, Host Policy, and Community Guidelines.",
    ],
    relatedLinks: [
      { label: "Gift Sending", href: "/social-voice#gift-sending" },
      { label: "Withdrawal Request", href: "/social-voice#withdrawal-process" },
      { label: "Virtual Coin Policy", href: "/virtual-coin-policy" },
    ],
  },
  {
    id: "host-program",
    title: "Host Dashboard",
    description:
      "Host tools and responsibilities for managing live voice rooms.",
    body: [
      "The host dashboard provides tools for users who manage live rooms, set participation expectations, and help maintain a safe environment consistent with ALPHARISE policies.",
      "Host tools may include room creation, speaker management, muting or removal of disruptive participants, and escalation of serious concerns to support.",
      "Hosts must not abuse moderation controls for personal disputes or retaliation. Room rules and any monetization expectations should be communicated clearly. Misleading invitations or coercive payment requests are prohibited.",
      "Host privileges may be granted, limited, or removed based on compliance with Host Policy and Community Guidelines.",
    ],
    highlights: [
      {
        title: "Room management",
        description:
          "Hosts control room flow and speaker access within product capabilities.",
        icon: "Users",
      },
      {
        title: "Moderation duties",
        description:
          "Hosts should address disruptive behavior and escalate serious reports.",
        icon: "Shield",
      },
      {
        title: "Policy compliance",
        description:
          "Hosts follow Host Policy, Community Guidelines, User Policy, Creator Policy, and Virtual Coin Policy.",
        icon: "FileBadge",
      },
    ],
    relatedLinks: [
      { label: "Host Policy", href: "/host-policy" },
      { label: "Community Guidelines", href: "/community-guidelines" },
    ],
  },
  {
    id: "creator-program",
    title: "Creator Dashboard",
    description:
      "Creator tools and expectations for producing or facilitating platform experiences.",
    body: [
      "The creator dashboard supports creators who produce or facilitate content and experiences on the platform, including live voice sessions. Creators are responsible for the content they present and the interactions they encourage.",
      "Creators must use only content they have rights to use, must not misrepresent affiliations, and must follow monetization rules for gifts and promotions.",
      "Creators must not solicit private contact for harmful purposes, share illicit content, or encourage dangerous challenges. Repeated breaches may lead to monetization suspension or account termination.",
    ],
    highlights: [
      {
        title: "Content responsibility",
        description:
          "Creators remain accountable for the sessions and materials they present.",
        icon: "Lightbulb",
      },
      {
        title: "Monetization conduct",
        description:
          "Gifts and promotions must follow the Virtual Coin Policy without coercive tactics.",
        icon: "Wallet",
      },
      {
        title: "Safety standards",
        description:
          "Creators follow Creator Policy and Community Guidelines at all times.",
        icon: "Shield",
      },
    ],
    relatedLinks: [
      { label: "Creator Policy", href: "/creator-policy" },
      { label: "Virtual Coin Policy", href: "/virtual-coin-policy" },
    ],
  },
  {
    id: "wallet",
    title: "Wallet",
    description:
      "Account wallet for virtual coin balances and related transaction history.",
    body: [
      "Each authenticated user has a wallet that shows available virtual coin balance and, where provided by the app, recent transaction history for purchases, gifts, and other disclosed coin movements.",
      "Wallet balances update after successful purchases and completed gift or feature uses. Temporary delays can occur while payment confirmation or server reconciliation completes.",
      "Users should treat wallet access as sensitive. Do not share login credentials or OTPs. Suspected unauthorized wallet activity should be reported to support promptly.",
    ],
    workflow: {
      title: "Wallet usage workflow",
      steps: [
        {
          title: "Open Wallet",
          description:
            "Access the wallet section from the Android app account or home navigation.",
        },
        {
          title: "Review balance",
          description:
            "Check available coins and any pending transaction states shown in the app.",
        },
        {
          title: "Purchase coins if needed",
          description:
            "Select a published package and complete checkout through approved payment methods.",
        },
        {
          title: "Use coins in features",
          description:
            "Spend coins on disclosed features such as gift sending where available.",
        },
      ],
    },
    relatedLinks: [
      { label: "Virtual Coin Policy", href: "/virtual-coin-policy" },
      { label: "Coin Purchase", href: "/social-voice#coin-packages" },
    ],
  },
  {
    id: "leaderboard",
    title: "Leaderboard",
    description:
      "Rankings that surface engagement activity according to published rules.",
    body: [
      "Leaderboards display rankings based on engagement metrics defined by the product (for example gift activity or room participation metrics). Exact ranking formulas may change as the product evolves.",
      "Rankings are for in-app recognition and discovery. They do not constitute a promise of payment, employment, or off-platform rewards unless separately disclosed in writing.",
      "Manipulating rankings through fraud, bots, unauthorized automation, or coordinated abuse is prohibited and may result in removal from rankings and account action.",
    ],
    relatedLinks: [
      { label: "Community Guidelines", href: "/community-guidelines" },
      { label: "User Policy", href: "/user-policy" },
    ],
  },
  {
    id: "withdrawal-process",
    title: "Withdrawal Request",
    description:
      "How eligible earnings withdrawals are requested and reviewed.",
    body: [
      "Purchased virtual coins are digital items and are not redeemable by users for cash. Separately, eligible hosts or creators may earn platform rewards or balances that the product designates as withdrawable under published program rules.",
      "Where withdrawals are enabled, the eligible user submits a withdrawal request from the Android app, provides required payout and identity details, and waits for review. ALPHARISE may request additional verification before approving a payout.",
      "Withdrawal eligibility, minimum thresholds, fees (if any), processing times, and supported payout methods are shown in the app or communicated during the request flow. Incomplete or mismatched account details can delay or reject a request.",
      "ALPHARISE may decline or reverse withdrawals tied to chargebacks, fraud indicators, policy violations, or erroneous balances. Decisions may be appealed through Support with relevant account details.",
    ],
    workflow: {
      title: "Withdrawal request workflow",
      steps: [
        {
          title: "Confirm eligibility",
          description:
            "Verify that the account has a withdrawable balance under host or creator program rules shown in the app.",
        },
        {
          title: "Submit request",
          description:
            "Enter the withdrawal amount (within allowed limits) and payout details in the withdrawal screen.",
        },
        {
          title: "Complete verification",
          description:
            "Provide any requested identity or bank verification information accurately.",
        },
        {
          title: "Review and processing",
          description:
            "ALPHARISE reviews the request. Approved payouts are processed through the selected supported method.",
        },
        {
          title: "Status and support",
          description:
            "Track status in the app where available, or contact Support if a request needs clarification.",
        },
      ],
    },
    relatedLinks: [
      { label: "Virtual Coin Policy", href: "/virtual-coin-policy" },
      { label: "Host Policy", href: "/host-policy" },
      { label: "Creator Policy", href: "/creator-policy" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    id: "admin-verification",
    title: "Admin Verification",
    description:
      "Manual review steps used by ALPHARISE before enabling sensitive account capabilities.",
    body: [
      "Admin verification is a manual review process used when an account requests sensitive capabilities such as host access, creator access, or withdrawal eligibility.",
      "Reviewers may request identity, payout, or supporting information. Providing incomplete or inaccurate details can delay or reject the request.",
      "Verification decisions follow published policies. ALPHARISE may revoke previously granted privileges if later activity violates Host Policy, Creator Policy, User Policy, or Community Guidelines.",
    ],
    relatedLinks: [
      { label: "Profile Verification", href: "/social-voice#profile-verification" },
      { label: "Withdrawal Request", href: "/social-voice#withdrawal-process" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    id: "fraud-prevention",
    title: "Fraud Prevention",
    description:
      "Practices that protect payments, wallets, and account integrity.",
    body: [
      "Fraud prevention covers payment abuse, unauthorized coin acquisition, chargeback misuse, ranking manipulation, multi-accounting to evade bans, and social engineering attempts.",
      "ALPHARISE may use automated and manual checks, reverse unauthorized balances, hold withdrawals under review, and restrict accounts involved in fraud indicators.",
      "Users should only purchase coins through official in-app checkout. Off-platform “cheap coin” offers, credential sharing, and OTP sharing are common fraud vectors and are prohibited.",
    ],
    relatedLinks: [
      { label: "Virtual Coin Policy", href: "/virtual-coin-policy" },
      { label: "User Policy", href: "/user-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
  {
    id: "community-reporting",
    title: "Community Reporting",
    description:
      "How users flag profiles, rooms, or behavior that may violate policies.",
    body: [
      "Community reporting lets users submit concerns about profiles, rooms, messages, or behavior that may violate policies. Reports should include enough context for review (for example room, time, and description).",
      "ALPHARISE reviews reports and may warn, restrict, or permanently remove accounts. Not every report results in the same outcome; decisions depend on evidence and policy severity.",
      "Appeals can be sent to Support with relevant account details. False or abusive reporting may itself lead to account action.",
    ],
    workflow: {
      title: "Reporting workflow",
      steps: [
        {
          title: "Locate the report control",
          description:
            "Open the profile, room, or message menu where reporting actions are available.",
        },
        {
          title: "Submit a report",
          description:
            "Select a reason, add details, and submit. Keep records if the issue is serious.",
        },
        {
          title: "Follow up with Support",
          description:
            `For urgent safety or billing-linked abuse, email ${CONTACT.supportEmail} with account details.`,
        },
      ],
    },
    relatedLinks: [
      { label: "User Blocking", href: "/social-voice#user-blocking" },
      { label: "Community Guidelines", href: "/community-guidelines" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    id: "user-blocking",
    title: "User Blocking",
    description:
      "How users limit further interaction with another account.",
    body: [
      "Blocking limits further interaction with a specific account according to product rules (for example reducing visibility or contact).",
      "Blocking does not replace reporting when a serious violation occurs. Users should report and block when both actions are appropriate.",
      "Blocked accounts remain subject to platform policies. Unblocking is available where the product provides that control.",
    ],
    relatedLinks: [
      { label: "Community Reporting", href: "/social-voice#community-reporting" },
      { label: "Community Guidelines", href: "/community-guidelines" },
      { label: "Privacy Controls", href: "/social-voice#privacy-controls" },
    ],
  },
  {
    id: "privacy-controls",
    title: "Privacy Controls",
    description:
      "How personal information and visibility are handled for platform users.",
    body: [
      "The Privacy Policy explains what information ALPHARISE collects, how it is used, and how users may request access or deletion where applicable.",
      "In-app privacy controls may include profile visibility options and notification preferences. Available controls can vary by app version.",
      "Users must not share another person’s private information without consent. Live rooms are social spaces; avoid announcing sensitive personal data such as full addresses, OTPs, or financial credentials.",
    ],
    relatedLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "User Policy", href: "/user-policy" },
    ],
  },
  {
    id: "notifications",
    title: "Notifications",
    description:
      "Account and activity alerts delivered by the Android application.",
    body: [
      "Notifications inform users about account, room, gift, wallet, withdrawal, and moderation events where enabled.",
      "Users may manage notification preferences in app settings where those controls are available. Critical security notices may still be delivered when required for account safety.",
      "ALPHARISE does not send OTPs through unofficial channels. Treat unexpected payment or credential requests as suspicious and report them to Support.",
    ],
    relatedLinks: [
      { label: "Privacy Controls", href: "/social-voice#privacy-controls" },
      { label: "Customer Support", href: "/social-voice#customer-support" },
    ],
  },
  {
    id: "call-history",
    title: "Call History",
    description:
      "Records of voice-room participation retained for user reference and support review.",
    body: [
      "Call history shows recent voice-room participation and related session metadata provided by the app (for example room name, time, or duration fields when available).",
      "History is intended for user reference and, when needed, support investigation of technical or policy issues. Retention periods follow product configuration and the Privacy Policy.",
      "Users should not rely on call history as a legal transcript. Exact fields can vary by app version.",
    ],
    relatedLinks: [
      { label: "Voice Calling", href: "/social-voice#voice-calling" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    id: "virtual-coin-policy",
    title: "Virtual Coin Policy",
    description:
      "Summary of how virtual coins are purchased, used, and restricted.",
    body: [
      "Virtual coins are digital items for disclosed in-app features. They are not bank deposits, securities, or real-world currency, and purchased coins are not redeemable as cash by purchasers.",
      "Purchase, use, transfer restrictions, and enforcement for unauthorized acquisition are described in the full Virtual Coin Policy.",
      "Package prices published on the website are for transparency. The amount confirmed at in-app checkout or on a formal invoice prevails if there is a temporary difference.",
    ],
    relatedLinks: [
      { label: "Full Virtual Coin Policy", href: "/virtual-coin-policy" },
      { label: "Coin Purchase", href: "/social-voice#coin-packages" },
      { label: "Refund Rules", href: "/social-voice#refund-rules" },
    ],
  },
  {
    id: "refund-rules",
    title: "Refund Rules",
    description:
      "How refunds are handled for platform coin purchases and related billing issues.",
    body: [
      "Coin purchases are generally non-refundable once coins are delivered to the wallet, subject to the Refund Policy and applicable consumer-protection requirements.",
      "Verified technical delivery failures, duplicate charges, or unauthorized transactions reported promptly may be reviewed by Support. Chargebacks filed without contacting Support first may delay resolution.",
      "Refund outcomes depend on payment-processor rules, evidence, and policy. Full details are published on the Refund Policy page.",
    ],
    relatedLinks: [
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Virtual Coin Policy", href: "/virtual-coin-policy" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    id: "terms",
    title: "Terms",
    description:
      "Contractual terms that govern use of ALPHARISE websites, services, and platforms.",
    body: [
      "Use of the Social Voice Communication Platform and related ALPHARISE websites is governed by the Terms & Conditions, together with product-specific policies such as User Policy, Host Policy, Creator Policy, and Virtual Coin Policy.",
      "By registering or continuing to use the product after public release, users agree to the published terms and policies presented in the app and on this website.",
      "If a product-specific policy conflicts with a general website term for platform use, the more specific platform policy controls for that topic unless stated otherwise.",
    ],
    relatedLinks: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "User Policy", href: "/user-policy" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    id: "community-guidelines",
    title: "Community Guidelines",
    description:
      "Behavioral standards for everyone using the platform.",
    body: [
      "Community Guidelines set expectations for respectful, lawful participation by users, hosts, creators, and staff interactions on the Social Voice Communication Platform.",
      "Harassment, hate speech, threats, bullying, doxxing, sexual content involving minors, graphic violence, fraud, and attempts to bypass safety systems are not allowed.",
      "Violations may result in warnings, temporary restrictions, permanent account action, or referral to authorities where required. Full text is published on the Community Guidelines page.",
    ],
    relatedLinks: [
      { label: "Full Community Guidelines", href: "/community-guidelines" },
      { label: "Community Reporting", href: "/social-voice#community-reporting" },
      { label: "User Blocking", href: "/social-voice#user-blocking" },
    ],
  },
  {
    id: "customer-support",
    title: "Customer Support",
    description:
      "How to get help for account, billing, and platform issues.",
    body: [
      `Support is available through the Support page and ${CONTACT.supportEmail}. Phone support is available at ${CONTACT.phone} during published business hours when staff are available.`,
      `Business hours: ${CONTACT.hours}. We aim to respond within one business day. Complex investigations may take longer; status updates are provided when available.`,
      "When contacting support, include your registered contact details, a clear summary of the issue, and relevant transaction or room information. Do not send OTP codes.",
    ],
    highlights: [
      {
        title: "Email",
        description: CONTACT.supportEmail,
        icon: "HeartHandshake",
      },
      {
        title: "Phone",
        description: CONTACT.phone,
        icon: "Smartphone",
      },
      {
        title: "Hours",
        description: CONTACT.hours,
        icon: "Timer",
      },
      {
        title: "Support hub",
        description:
          "Use the Support page for channel details and common topic guidance.",
        icon: "BookOpen",
      },
    ],
    relatedLinks: [
      { label: "Support page", href: "/support" },
      { label: "Contact", href: "/contact" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export const socialVoiceFaqs: { question: string; answer: string }[] = [
  {
    question: "Where is the Social Voice Communication Platform available?",
    answer:
      "The platform is being developed as an Android application using Flutter with a Node.js backend. Our Android application is currently preparing for public release. Availability will be announced through our official website and Instagram.",
  },
  {
    question: "Is an account required?",
    answer:
      "Yes. After public release, registration and OTP verification will be required to access authenticated features such as profiles, wallets, and reporting tools.",
  },
  {
    question: "Are virtual coins real money?",
    answer:
      "No. Virtual coins are digital items for in-platform use. They have no intrinsic cash value outside the platform. See the Virtual Coin Policy.",
  },
  {
    question: "Can I get a refund for unused coins?",
    answer:
      "Coin purchases are generally non-refundable once delivered, subject to the Refund Policy and applicable law. Contact Support for verified technical delivery failures.",
  },
  {
    question: "How do host and creator programs differ?",
    answer:
      "Hosts primarily manage live rooms and moderation. Creators focus on producing or facilitating experiences and monetization conduct. Both must follow published policies.",
  },
  {
    question: "Can purchased coins be withdrawn as cash?",
    answer:
      "No. Purchased coins are not cash-redeemable. Separate withdrawable balances, where offered to eligible hosts or creators, follow the withdrawal process and program rules in the app.",
  },
  {
    question: "How do I report abuse?",
    answer: `Use in-app reporting tools and, for urgent cases, email ${CONTACT.supportEmail} with account details and a clear description of the issue.`,
  },
  {
    question: "Where can I see coin package prices?",
    answer:
      "Published packages are listed on the Pricing page under Virtual Coin Packages and are confirmed again at in-app checkout.",
  },
];
