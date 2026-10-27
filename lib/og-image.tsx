import { ImageResponse } from "next/og";

import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  SITE_NAME,
  getSiteUrl,
} from "@/lib/constants";
import { shareImageSize } from "@/lib/share-image";

/** Brand card shared by the Open Graph and Twitter share images. */
export function renderBrandImage() {
  const host = new URL(getSiteUrl()).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#FFFFFF",
          background:
            "linear-gradient(135deg, #0F172A 0%, #1E3A8A 55%, #2563EB 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 6,
            color: "#93C5FD",
          }}
        >
          {COMPANY_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 128,
              fontWeight: 700,
              letterSpacing: -3,
            }}
          >
            {SITE_NAME}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: 36,
              lineHeight: 1.35,
              color: "#DBEAFE",
              maxWidth: 900,
            }}
          >
            {COMPANY_TAGLINE}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#BFDBFE" }}>
          {host}
        </div>
      </div>
    ),
    { ...shareImageSize }
  );
}
