import React from "react";
import { useState } from "react";
import Location from "./Location";
import SearchBox from "./SearchBox";
import CartIcon from "./CartIcon";
import { LOGO_PNG } from "../utils/constant";
import AppNav from "./AppNav";
import HamburgerIcon from "../assets/widgets/HamburgerIcon";
import MobileNavBox from "./MobileNavBox";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const logoHeight = 70;
  const logoWidth = 250;
  const handleMenuToggle = () => {
    if (!showMenu) return setShowMenu(true);
    setShowMenu(false);
  };
  return (
    <>
      <div className="border-b-2 border-lightgrey py-3 ">
        <div
          id="header"
          className="p-2 sm:p-1 flex align-middle items-center mx-auto justify-between"
        >
          <img
            src={LOGO_PNG}
            alt="Foodie Logo Transparent"
            style={{ height: logoHeight, width: logoWidth }}
            className="object-contain"
          />
          <div className="hidden px-3 sm:flex justify-center  w-full gap-5 mx-auto items-center">
            <AppNav />
            <Location />
            <SearchBox />
            <CartIcon />
          </div>
          <div className="sm:hidden" onClick={handleMenuToggle}>
            <HamburgerIcon />
          </div>
          <MobileNavBox showMobileMenu={showMenu} toggleMenu={setShowMenu} />
        </div>
      </div>
    </>
  );
}
