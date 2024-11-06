import React from "react";
import { useState } from "react";

export default function Cart() {
  const iconHeight = 40;
  const iconWidth = 40;
  const [count, setCount] = useState(0);
  return (
    <div className="relative">
      <img
        src="/src/assets/icons/cart icon.svg"
        alt="cart icon"
        height={iconHeight}
        width={iconWidth}
      />
      <span className="absolute text-white bg-red-600 p-[3%_20%] rounded-full -top-3 -right-3">
        {count}
      </span>
    </div>
  );
}
