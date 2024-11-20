import React from "react";
import Location from "./Location";
import SearchBox from "./SearchBox";
import Cart from "./Cart";
import { LOGO_PNG } from "../utils/constant";

export default function Header() {
  const logoHeight = 50;
  const logoWidth = 200;
  return (
    <>
      <div className="border-b-2 border-lightgrey py-3 ">
        <div id="header" className="flex align-middle items-center mx-auto ">
          <img
            src={LOGO_PNG}
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
      </div>
    </>
  );
}