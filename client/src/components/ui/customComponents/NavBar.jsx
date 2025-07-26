import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import CustomDrawer from "./CustomDrawer";
import NavigationMenu from "./NavigationMenu";
import NavBarSection3 from "./NavBarSection3";

const NavBar = () => {
  return (
    <header className="md:custom-container p-3  ">
      <nav className="flex justify-between">
        <Link>
          <img src={assets.logo} alt="logo" />
        </Link>
        <div className="sm:hidden">
          <CustomDrawer />
        </div>
        <div className="hidden sm:block">
          <NavigationMenu direction="flex-row" />
        </div>
        <NavBarSection3 />
      </nav>
    </header>
  );
};

export default NavBar;
