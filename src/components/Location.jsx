import React from "react";

export default function Location() {
  const iconHeight = 28;
  const iconWidth = 28;
  return (
    <div className="flex flex-nowrap border-l-2 border-lightgrey">
      <img
        src="/src/assets/icons/location icon.svg"
        alt="location icon"
        height={iconHeight}
        width={iconWidth}
      />
      <p className="text-black font-medium text-lg">Use Current Address</p>
    </div>
  );
}
