import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "RAYYAN.";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Minimalist Geometric 'R' */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 20V4H13C17 4 17 12 13 12H5M12 12L17 20"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="20" r="3" fill="#3ABEF9" />
        </svg>
        
        {/* Subtle Gradient Overlay */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
            pointerEvents: 'none'
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
