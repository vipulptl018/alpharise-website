import { COMPANY_NAME, SITE_NAME } from "@/lib/constants";

/** Kept apart from lib/og-image.tsx so page metadata does not pull in next/og. */
export const shareImageSize = { width: 1200, height: 630 };

export const shareImageAlt = `${SITE_NAME} | ${COMPANY_NAME}`;
