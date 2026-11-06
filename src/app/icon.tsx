import { ImageResponse } from "next/og";

export const alt = "RAY—95";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F2F1EC",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 20V4H13C17 4 17 12 13 12H5M12 12L17 20"
            stroke="#141414"
            strokeWidth="3.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          <rect x="18" y="18" width="4" height="4" fill="#E8540B" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
