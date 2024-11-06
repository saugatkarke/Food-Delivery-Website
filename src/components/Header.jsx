import React from "react";
import Location from "./Location";
import SearchBox from "./SearchBox";
import Cart from "./Cart";

export default function Header() {
  const logoHeight = 50;
  const logoWidth = 200;
  return (
    <>
      <div id="header" className="flex align-middle items-center mx-auto">
        <img
          src="/src/assets/logos/FoodieMe Logo Trasparent.png"
          alt="Foodie Logo Transparent"
          style={{ height: logoHeight, width: logoWidth }}
          className="object-contain"
        />
        <div className="px-3 flex justify-center  w-full gap-5 mx-auto items-center">
          <Location />
          <SearchBox />
          <Cart />
        </div>
      </div>
    </>
  );
}
