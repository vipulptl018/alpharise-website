import { renderBrandImage } from "@/lib/og-image";
import { shareImageAlt, shareImageSize } from "@/lib/share-image";

export const alt = shareImageAlt;
export const size = shareImageSize;
export const contentType = "image/png";

export default function Image() {
  return renderBrandImage();
}
