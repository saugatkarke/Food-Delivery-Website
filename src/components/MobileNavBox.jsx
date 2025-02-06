import React from "react";
import AppNav from "./AppNav";
import { LOGO_PNG } from "../utils/constant";
import SearchBox from "./SearchBox";
import { CloseXicon } from "../assets/icons/Icon";

export default function MobileNavBox({ showMobileMenu, toggleMenu }) {
  const logoHeight = 90;
  const logoWidth = 220;

  const closeMobileMenu = () => {
    toggleMenu(false);
  };
  return (
    <div className="lg:hidden absolute z-50">
      <div
        className={`${
          showMobileMenu ? "left-0" : "left-[-110vw]"
        } transition-all max-w-sm min-h-screen shadow-[47px_3px_20px_10px_#c1cad4b0] fixed top-0 w-[90%] bg-[#ECF5FF] px-7`}
      >
        <div
          className="absolute right-6 top-8 scale-125"
          onClick={closeMobileMenu}
        >
          <CloseXicon />
        </div>
        <img
          src={LOGO_PNG}
          alt="Foodie Mobile Logo Transparent"
          style={{ height: logoHeight, width: logoWidth }}
          className="object-contain -ml-4"
        />
        <SearchBox />
        <div className="border-b-2 border-white my-4"></div>
        <AppNav />
      </div>
    </div>
  );
}
