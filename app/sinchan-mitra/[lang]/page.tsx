import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SinchanMitraView } from "@/components/sinchan-mitra/SinchanMitraView";
import type { Lang } from "@/lib/content/sinchan-mitra";
import { sinchanMitraMetadata } from "@/lib/sinchan-mitra-seo";

// Only the two translated pages exist here; English lives at /sinchan-mitra.
export const dynamicParams = false;

const TRANSLATED: Lang[] = ["mr", "hi"];

export function generateStaticParams() {
  return TRANSLATED.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!TRANSLATED.includes(lang as Lang)) return {};
  return sinchanMitraMetadata(lang as Lang);
}

export default async function SinchanMitraTranslatedPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!TRANSLATED.includes(lang as Lang)) notFound();
  return <SinchanMitraView lang={lang as Lang} />;
}
