import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#121130",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#4FEA73" }}>
          SPRYB DIGITAL — FULL-STACK AGENCY
        </div>
        <div style={{ fontSize: 110, fontWeight: 900, lineHeight: 1, marginTop: 20 }}>
          WE MAKE BRANDS
        </div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            lineHeight: 1,
            background: "linear-gradient(100deg,#4FEA73,#D8F23F)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          IMPOSSIBLE TO IGNORE.
        </div>
        <div style={{ fontSize: 30, marginTop: 30, color: "rgba(255,255,255,0.7)" }}>
          Social · SEO · Ads · ORM · Hyperlocal — sprybdigital.com
        </div>
      </div>
    ),
    { ...size }
  );
}
