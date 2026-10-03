import { ImageResponse } from "next/og";
import { eventData, venueLine } from "@/data/event";

export const alt = `${eventData.name} — ${eventData.subtitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 0%, #3a2d82 0%, #0d1226 48%, #05060f 100%)",
          color: "#e2e8f0",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "2px solid rgba(224,185,90,0.55)",
            borderRadius: 24,
            display: "flex",
          }}
        />
        <div style={{ fontSize: 26, letterSpacing: 14, color: "#ecd28a", display: "flex" }}>
          {eventData.theme.toUpperCase()}
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 136,
            fontWeight: 700,
            letterSpacing: 6,
            color: "#ecd28a",
            display: "flex",
          }}
        >
          {eventData.name}
        </div>
        <div style={{ marginTop: 6, fontSize: 38, letterSpacing: 18, color: "#f6e7b4", display: "flex" }}>
          {eventData.subtitle.toUpperCase()}
        </div>
        <div style={{ marginTop: 40, fontSize: 30, color: "#cbd5e1", display: "flex" }}>
          {eventData.community}
        </div>
        <div style={{ marginTop: 14, fontSize: 28, color: "#94a3b8", display: "flex" }}>
          {`${eventData.date}  ·  ${venueLine}  ·  ${eventData.time}`}
        </div>
      </div>
    ),
    { ...size },
  );
}
