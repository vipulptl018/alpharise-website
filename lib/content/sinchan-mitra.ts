/**
 * Structure of the Sinchan Mitra product page (/sinchan-mitra, /sinchan-mitra/mr, /sinchan-mitra/hi):
 * images, icons, ids and download links. The words live in sinchan-mitra-copy.ts, one block per language.
 *
 * Every claim follows the app's own feature list (docs/BUSINESS_TYPE_BROCHURES.md and the in-app
 * guide of the Sinchan Mitra project). All screenshots show SAMPLE data of the real Windows / Android
 * app. No prices are published: plans are quoted on request.
 */

export const SM_NAME = "Sinchan Mitra";
export const SM_NAME_MR = "सिंचन मित्र";
export const SM_PATH = "/sinchan-mitra";

export type Lang = "en" | "mr" | "hi";

export const LANGS: { code: Lang; label: string; path: string }[] = [
  { code: "mr", label: "मराठी", path: `${SM_PATH}/mr` },
  { code: "hi", label: "हिन्दी", path: `${SM_PATH}/hi` },
  { code: "en", label: "English", path: SM_PATH },
];

export const langPath = (lang: Lang) => LANGS.find((l) => l.code === lang)?.path ?? SM_PATH;

export type Shot = { src: string; width: number; height: number };

/**
 * Files live in public/sinchan-mitra. They are deliberately small and watermarked (so they cannot be used to
 * rebuild the app); width / height here only give the picture's aspect ratio to the layout.
 */
const shot = (file: string, width: number, height: number): Shot => ({
  src: `/sinchan-mitra/${file}`,
  width,
  height,
});

export const shots = {
  logo: shot("logo.png", 256, 256),
  // close-up crops of the real app
  billing: shot("crops/billing.webp", 1400, 729),
  bill: shot("crops/bill.webp", 1020, 480),
  udhaar: shot("crops/udhaar.webp", 1350, 640),
  jobs: shot("crops/jobs.webp", 1350, 580),
  material: shot("crops/material.webp", 820, 510),
  pipes: shot("crops/pipes.webp", 1000, 520),
  docs: shot("crops/docs.webp", 1160, 578),
  editor2d: shot("crops/editor2d.webp", 1230, 760),
  print3d: shot("crops/print3d.webp", 1400, 1218),
  print2d: shot("crops/print2d.webp", 1400, 770),
  phone: shot("crops/phone.webp", 810, 1440),
  phoneDark: shot("crops/phone-dark.webp", 810, 1440),
  // whole Windows app window
  homeMr: shot("screens/home-mr.webp", 1600, 900),
  homeHi: shot("screens/home-hi.webp", 1600, 900),
  homeEn: shot("screens/home-en.webp", 1600, 900),
  homeDark: shot("screens/home-dark.webp", 1600, 900),
  homeLight: shot("screens/home-light.webp", 1600, 900),
  aalekh2d: shot("screens/aalekh-2d.webp", 1600, 900),
  aalekh3d: shot("screens/aalekh-3d.webp", 1600, 900),
  batches: shot("screens/ksk-batches.webp", 1500, 844),
  gst: shot("screens/irr-gst.webp", 1500, 844),
  caPack: shot("screens/irr-ca-pack.webp", 1500, 844),
  profit: shot("screens/irr-profit.webp", 1500, 844),
} as const;

// Icon names (lucide-react) in the order of the matching list in the copy.
export const typeIcons = ["Store", "Leaf", "Sprout", "ShieldCheck", "Droplets", "Cable", "Zap", "Sprout"];
export const whyIcons = ["Wallet", "Boxes", "ClipboardList", "Droplets", "ChartColumn", "Users"];
export const benefitIcons = ["Timer", "ShieldCheck", "Wallet", "BadgeCheck", "TrendingUp", "Languages"];
export const stepIcons = ["Store", "Monitor", "Package", "Receipt", "Wallet", "ChartColumn"];
export const insideIcons = ["Receipt", "Boxes", "Wallet", "ClipboardList", "Droplets", "ChartColumn"];

export type SpotlightImage = { shot: keyof typeof shots; frame: "browser" | "plain" };

/** Images of the six feature spotlights, in the order of the copy. */
export const spotlightImages: { id: string; images: SpotlightImage[] }[] = [
  { id: "billing", images: [{ shot: "billing", frame: "plain" }] },
  { id: "udhaar", images: [{ shot: "udhaar", frame: "plain" }] },
  { id: "stock", images: [{ shot: "batches", frame: "browser" }] },
  {
    id: "aalekh",
    images: [
      { shot: "editor2d", frame: "plain" },
      { shot: "print3d", frame: "plain" },
    ],
  },
  { id: "jobs", images: [{ shot: "jobs", frame: "plain" }] },
  {
    id: "reports",
    images: [
      { shot: "gst", frame: "browser" },
      { shot: "caPack", frame: "browser" },
    ],
  },
];

export type GalleryCategory = "Billing" | "Stock" | "Money" | "Irrigation" | "Reports" | "Registers";

export const galleryCategories: GalleryCategory[] = [
  "Billing",
  "Stock",
  "Money",
  "Irrigation",
  "Reports",
  "Registers",
];

export type GalleryItem = {
  id: string;
  file: string;
  width: number;
  height: number;
  category: GalleryCategory;
};

const g = (
  id: string,
  category: GalleryCategory,
  width = 1500,
  height = 844
): GalleryItem => ({ id, file: `screens/${id}.webp`, width, height, category });

/** Order of the screenshot gallery; the titles are in the copy, keyed by id. */
export const gallery: GalleryItem[] = [
  g("irr-billing", "Billing"),
  g("irr-sold-bills", "Billing"),
  g("irr-parties", "Billing"),
  g("irr-stock", "Stock"),
  g("ksk-batches", "Stock"),
  g("ksk-stock-board", "Stock"),
  g("irr-pipe-grid", "Stock"),
  g("irr-warranty", "Stock"),
  g("irr-udhaar", "Money"),
  g("irr-cash-close", "Money"),
  g("irr-irr-file", "Irrigation"),
  g("irr-irr-land", "Irrigation"),
  g("aalekh-2d", "Irrigation", 1600, 900),
  g("aalekh-3d", "Irrigation", 1600, 900),
  g("irr-irr-material", "Irrigation"),
  g("irr-irr-papers", "Irrigation"),
  g("irr-irr-stages", "Irrigation"),
  g("irr-owner-section", "Reports"),
  g("irr-profit", "Reports"),
  g("irr-reports", "Reports"),
  g("irr-gst", "Reports"),
  g("irr-ca-pack", "Reports"),
  g("ksk-pack-registers", "Registers"),
  g("ksk-licences", "Registers"),
  g("ksk-regulated-sale", "Registers"),
  g("ksk-todays-jobs", "Registers"),
];

/**
 * Where the apps are downloaded from. Leave the variables empty until the files are published:
 * the page then shows "coming soon" and a link to ask for access. Set them in Vercel (they are read at build time):
 *   NEXT_PUBLIC_SINCHAN_MITRA_WINDOWS_URL   the Windows setup file / page
 *   NEXT_PUBLIC_SINCHAN_MITRA_ANDROID_URL   the Android app file / Play Store page
 */
export const downloadLinks = {
  windows: process.env.NEXT_PUBLIC_SINCHAN_MITRA_WINDOWS_URL?.trim() || "",
  android: process.env.NEXT_PUBLIC_SINCHAN_MITRA_ANDROID_URL?.trim() || "",
};
