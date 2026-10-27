import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { MotionProvider } from "@/components/common/MotionProvider";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  ANDROID_APP_STATUS,
  COMPANY,
  COMPANY_NAME,
  SITE_NAME,
  getSiteUrl,
} from "@/lib/constants";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const SITE_URL = getSiteUrl();

const metadataBase = new URL(SITE_URL);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${SITE_NAME} | ${COMPANY_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: COMPANY.description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${COMPANY_NAME}`,
    description: COMPANY.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${COMPANY_NAME}`,
    description: COMPANY.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "android-app-status": ANDROID_APP_STATUS.summary,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-950 focus:shadow-md"
        >
          Skip to main content
        </a>
        <OrganizationJsonLd />
        <MotionProvider>
          <Navbar />
          <main
            id="main-content"
            className={cn("flex flex-1 flex-col", ds.pageTop)}
          >
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
