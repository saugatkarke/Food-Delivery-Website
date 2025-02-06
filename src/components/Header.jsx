import React from "react";
import { Link } from "react-router";
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
      <div className="border-b-2 border-lightgrey p-3">
        <div
          id="header"
          className="p-2 sm:p-1 flex align-middle items-center mx-auto justify-between"
        >
          <div
            className="md:hidden grid self-center"
            onClick={handleMenuToggle}
          >
            <HamburgerIcon />
          </div>
          <Link to="/">
            <img
              src={LOGO_PNG}
              alt="Foodie Logo Transparent"
              style={{ height: logoHeight, width: logoWidth }}
              className="object-contain"
            />
          </Link>
          <div className="hidden px-3 md:flex justify-end lg:justify-center w-full gap-5 mx-auto items-center">
            <AppNav />
            <Location />
            <div className="sm:w-[40%] rd:w-[28%] w-[90%] lg:block hidden">
              <SearchBox />
            </div>
            <CartIcon />
          </div>
          <div
            className="md:hidden grid self-center"
          >
            <CartIcon />
          </div>
          <MobileNavBox showMobileMenu={showMenu} toggleMenu={setShowMenu} />
        </div>
      </div>
    </>
  );
}
