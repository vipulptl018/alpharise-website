import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BusinessDetailView } from "@/components/sinchan-mitra/BusinessDetailView";
import { detailSlugs, isDetailSlug } from "@/lib/content/sinchan-mitra-details";
import { sinchanMitraDetailMetadata } from "@/lib/sinchan-mitra-seo";

// English detail pages; Marathi and Hindi are under /sinchan-mitra/mr|hi/for/<slug>.
export const dynamicParams = false;

export function generateStaticParams() {
  return detailSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return isDetailSlug(slug) ? sinchanMitraDetailMetadata("en", slug) : {};
}

export default async function SinchanMitraBusinessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isDetailSlug(slug)) notFound();
  return <BusinessDetailView lang="en" slug={slug} />;
}
