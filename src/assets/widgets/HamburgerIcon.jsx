import React from "react";

export default function NonVegIcon({ svgWidth = 50, svgHeight = 50 }) {
  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 9H21V7H3V9Z" fill="black" />
      <path d="M3 15H21V13H3V15Z" fill="black" />
      <path d="M3 21H21V19H3V21Z" fill="black" />
    </svg>
  );
}
