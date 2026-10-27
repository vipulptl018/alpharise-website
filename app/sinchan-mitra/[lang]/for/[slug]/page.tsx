import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BusinessDetailView } from "@/components/sinchan-mitra/BusinessDetailView";
import type { Lang } from "@/lib/content/sinchan-mitra";
import { detailSlugs, isDetailSlug } from "@/lib/content/sinchan-mitra-details";
import { sinchanMitraDetailMetadata } from "@/lib/sinchan-mitra-seo";

export const dynamicParams = false;

const TRANSLATED: Lang[] = ["mr", "hi"];

export function generateStaticParams() {
  return TRANSLATED.flatMap((lang) => detailSlugs.map((slug) => ({ lang, slug })));
}

type Params = Promise<{ lang: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!TRANSLATED.includes(lang as Lang) || !isDetailSlug(slug)) return {};
  return sinchanMitraDetailMetadata(lang as Lang, slug);
}

export default async function SinchanMitraTranslatedBusinessPage({ params }: { params: Params }) {
  const { lang, slug } = await params;
  if (!TRANSLATED.includes(lang as Lang) || !isDetailSlug(slug)) notFound();
  return <BusinessDetailView lang={lang as Lang} slug={slug} />;
}
