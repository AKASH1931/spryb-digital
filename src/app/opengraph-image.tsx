import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 600, height: 600 };
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
          padding: "40px",
          background: "#121130",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 20, letterSpacing: 4, color: "#4FEA73" }}>
          SPRYB DIGITAL — FULL-STACK AGENCY
        </div>
        <div style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.05, marginTop: 18 }}>
          WE MAKE BRANDS
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            lineHeight: 1.05,
            background: "linear-gradient(100deg,#4FEA73,#D8F23F)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          IMPOSSIBLE TO IGNORE.
        </div>
        <div style={{ fontSize: 22, marginTop: 26, color: "rgba(255,255,255,0.7)" }}>
          Content · SEO · Ads · ORM · Hyperlocal
        </div>
      </div>
    ),
    { ...size }
  );
}
