import { useState } from "react";
import { assets } from "../../../assets/assets";
import { Button } from "./button";
import NavigationMenu from "./NavigationMenu";

const CustomDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="">
      <Button
        className="bg-transparent hover:bg-white"
        onClick={handleOpenDrawer}
      >
        <img src={assets.menu_icon} alt="hamburgur icon" />
      </Button>
      {open && (
        <div
          className="fixed top-0 left-0 h-full w-full bg-black/50 z-40 transition-all duration-300 ease-in-out"
          onClick={handleOpenDrawer}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full z-50  w-0 bg-gray-200   transition-all duration-300 ease-in-out ${
          open ? "w-[70%]" : "w-0"
        } overflow-hidden `}
        onClick={(e) => e.stopPropagation()}
      >
        <NavigationMenu handleDrawer={handleOpenDrawer} direction="flex-col" />
      </div>
    </div>
  );
};

export default CustomDrawer;
