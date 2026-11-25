import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Spryb Creative Lab - In a world of AI slop, humans win";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#121130";
const GREEN = "#4FEA73";
const LIME = "#D8F23F";
const PINK = "#FF8AD8";
const CYAN = "#00D4FF";

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
          background: NAVY,
          color: "#fff",
          fontFamily: "Arial, sans-serif",
          padding: "52px 64px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -130,
            right: -90,
            width: 460,
            height: 460,
            borderRadius: 999,
            background: `linear-gradient(135deg, ${GREEN}66, ${GREEN}00)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -110,
            width: 540,
            height: 540,
            borderRadius: 999,
            background: `linear-gradient(135deg, ${PINK}55, ${PINK}00)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 180,
            left: 620,
            width: 300,
            height: 300,
            borderRadius: 999,
            background: `linear-gradient(135deg, ${CYAN}44, ${CYAN}00)`,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: 5, fontWeight: 800, color: GREEN }}>
            SPRYB CREATIVE LAB
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#1E1C4A",
              borderRadius: 999,
              padding: "10px 22px",
              fontSize: 18,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: 999, background: PINK, marginRight: 10 }} />
            HUMAN-MADE, ALWAYS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ fontSize: 92, fontWeight: 900, lineHeight: 1, color: "rgba(255,255,255,0.28)" }}>
              AI SLOP?
            </div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 900,
                color: PINK,
                border: `3px solid ${PINK}`,
                borderRadius: 12,
                padding: "6px 14px",
                marginLeft: 18,
                transform: "rotate(-8deg)",
              }}
            >
              NOPE
            </div>
          </div>
          <div
            style={{
              fontSize: 104,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: -2,
              background: `linear-gradient(100deg, ${GREEN}, ${LIME})`,
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            HUMANS WIN.
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.72)", marginTop: 18 }}>
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
                border: "2px solid rgba(255,255,255,0.22)",
                background: "rgba(255,255,255,0.06)",
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
