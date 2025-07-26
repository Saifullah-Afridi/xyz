import React from "react";
import { appContextValue } from "../../../context/AppContext";
import { assets } from "../../../assets/assets";

const NavBarButton = () => {
  const { user, setUser, isLogin, setIsLogin } = appContextValue();
  return (
    <div>
      {!isLogin && !user ? (
        <button className="bg-green-600 px-4 py-2 text-white rounded-lg  hover:bg-green-900 cursor-pointer transition-all duration-150 ease-in-out">
          Login
        </button>
      ) : (
        <img src={assets.profile_icon} className="w-12 h-12 cursor-pointer" />
      )}
    </div>
  );
};

export default NavBarButton;
