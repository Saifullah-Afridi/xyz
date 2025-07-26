import { useState } from "react";
import { assets } from "../../../assets/assets";
import { IoMdMenu } from "react-icons/io";

const CustomDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="block sm:hidden">
      <button onClick={handleOpenDrawer}>
        <IoMdMenu size="25" className="cursor-pointer" />
      </button>
      {open && (
        <div
          className="fixed top-0 left-0 h-full w-full bg-black/50 z-40 transition-all duration-300 ease-in-out"
          onClick={handleOpenDrawer}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full z-50  w-0 bg-red-200   transition-all duration-300 ease-in-out ${
          open ? "w-[70%]" : "w-0"
        } overflow-hidden `}
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};

export default CustomDrawer;
