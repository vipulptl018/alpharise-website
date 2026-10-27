import type { Metadata } from "next";

import { SinchanMitraView } from "@/components/sinchan-mitra/SinchanMitraView";
import { sinchanMitraMetadata } from "@/lib/sinchan-mitra-seo";

export const metadata: Metadata = sinchanMitraMetadata("en");

/** English page; Marathi and Hindi are at /sinchan-mitra/mr and /sinchan-mitra/hi. */
export default function SinchanMitraPage() {
  return <SinchanMitraView lang="en" />;
}
