import React from "react";
import { NavLink } from "react-router";
import { AboutIcon, HelpIcon, HomeIcon } from "../assets/icons/Icon";

export default function AppNav() {
  const ICON_WIDTH = 24;
  const ICON_HEIGHT = 24;
  const toggleActive = ({ isActive }) =>
    isActive
      ? "text-primary no-underline hover:text-primary"
      : "text-black no-underline hover:text-primary hover:scale-105";
  return (
    <nav className="flex sm:gap-4 gap-6 sm:text-xl font-semibold text-3xl flex-col sm:flex-row">
      <NavLink to="/" className={toggleActive}>
        <span className="flex no-wrap items-center gap-1">
          <HomeIcon />
          Home
        </span>
      </NavLink>
      <NavLink to="/about" end className={toggleActive}>
        <span className="flex no-wrap items-center gap-1">
          <AboutIcon />
          About App
        </span>
      </NavLink>
      <NavLink to="/help" end className={toggleActive}>
        <span className="flex no-wrap items-center gap-1">
          <HelpIcon />
          Help
        </span>
      </NavLink>
    </nav>
  );
}
