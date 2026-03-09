import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "linear-gradient(135deg, #0f0f1a 0%, #1a1040 100%)",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Neural network node dots */}
        {/* Left layer nodes */}
        <div
          style={{
            position: "absolute",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.7)",
            top: 14,
            left: 8,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.7)",
            top: 30,
            left: 8,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.7)",
            top: 46,
            left: 8,
          }}
        />
        {/* Right layer nodes */}
        <div
          style={{
            position: "absolute",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "rgba(168,85,247,0.7)",
            top: 14,
            right: 8,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "rgba(168,85,247,0.7)",
            top: 30,
            right: 8,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "rgba(168,85,247,0.7)",
            top: 46,
            right: 8,
          }}
        />

        {/* NN text */}
        <span
          style={{
            fontSize: 26,
            fontWeight: 900,
            letterSpacing: "-2px",
            background: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
            backgroundClip: "text",
            color: "transparent",
            fontFamily: "sans-serif",
            lineHeight: 1,
          }}
        >
          NN
        </span>
      </div>
    ),
    { ...size }
  );
}
