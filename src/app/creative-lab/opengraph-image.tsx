import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Spryb Creative Lab - In a world of AI slop, humans win";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const MINT = "#F4FFF8";
const INK = "#121130";
const CYAN = "#00D4FF";
const GREEN = "#4FEA73";
const LIME = "#D8F23F";
const PINK = "#FF8AD8";

const chips = ["100% HUMAN", "RESEARCH-BASED", "TREND-NATIVE", "BUILT TO CONVERT"];

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          background: MINT,
          color: INK,
          fontFamily: "Arial, sans-serif",
          padding: "44px 60px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -90,
            width: 470,
            height: 470,
            borderRadius: 999,
            background: `linear-gradient(135deg, ${CYAN}66, ${CYAN}00)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -190,
            left: -110,
            width: 540,
            height: 540,
            borderRadius: 999,
            background: `linear-gradient(135deg, ${GREEN}77, ${GREEN}00)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 210,
            left: 640,
            width: 330,
            height: 330,
            borderRadius: 999,
            background: `linear-gradient(135deg, ${PINK}55, ${PINK}00)`,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: INK,
              color: "#fff",
              borderRadius: 999,
              padding: "12px 24px",
              fontSize: 19,
              fontWeight: 800,
              letterSpacing: 3,
            }}
          >
            SPRYB CREATIVE LAB&nbsp;&nbsp;✦&nbsp;&nbsp;100% HUMAN
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: GREEN,
              color: INK,
              border: `2px solid ${INK}`,
              borderRadius: 12,
              padding: "10px 20px",
              fontSize: 18,
              fontWeight: 900,
              transform: "rotate(5deg)",
            }}
          >
            ZERO AI SLOP
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.05, color: INK }}>
            IN A WORLD OF
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 6 }}>
            <div
              style={{
                fontSize: 94,
                fontWeight: 900,
                lineHeight: 1.05,
                background: CYAN,
                color: INK,
                padding: "2px 16px",
                transform: "rotate(-1.5deg)",
              }}
            >
              AI SLOP,
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 900,
                color: INK,
                background: PINK,
                border: `3px solid ${INK}`,
                borderRadius: 12,
                padding: "6px 14px",
                marginLeft: 22,
                transform: "rotate(8deg)",
              }}
            >
              NOPE
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 100, fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginTop: 2 }}>
            <span
              style={{
                background: `linear-gradient(100deg, ${GREEN}, ${LIME})`,
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              HUMANS
            </span>
            <span style={{ color: INK }}> WIN.</span>
          </div>
          <div style={{ fontSize: 25, color: "rgba(18,17,48,0.68)", marginTop: 12 }}>
            Real faces. Real voices. Content that connects - and converts.
          </div>
        </div>

        <div style={{ display: "flex" }}>
          {chips.map((c) => (
            <div
              key={c}
              style={{
                fontSize: 17,
                fontWeight: 800,
                letterSpacing: 1,
                padding: "12px 18px",
                borderRadius: 999,
                border: `2px solid ${INK}`,
                background: "#fff",
                color: INK,
                marginRight: 12,
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
