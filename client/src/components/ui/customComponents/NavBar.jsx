import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import { Link, NavLink } from "react-router-dom";
import {
  IoCaretDown,
  IoCaretUp,
  IoClose,
  IoSearchOutline,
} from "react-icons/io5";
import { appContextValue } from "../../../context/AppContext";
import { IoMdMenu } from "react-icons/io";
import {
  FcBarChart,
  FcBusiness,
  FcHome,
  FcLeave,
  FcPhoneAndroid,
} from "react-icons/fc";
import { useCart } from "../../../context/CartContext";
import Login from "./Login";

const NavBar = () => {
  const { user, setUser, isLogin, setIsLogin } = appContextValue();
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);
  const [open, setOpen] = useState(false);

  const { numberofCartItems } = useCart();

  const navigationItem = [
    {
      path: "/home",
      label: "Home",
    },
    {
      path: "/all-products",
      label: "All Products",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];

  const handleToggleDropDown = () => {
    setToggleDropDown(!toggleDropDown);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLogin(false);
  };

  const handleSearchSubmitt = () => {
    e.preventDefault();
    console.log(searchTerm);
  };

  const handleOpenDrawer = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };
  return (
    <header className="shadow-sm bg-[#1a5d4a] text-white sticky inset-0 z-[999] ">
      <nav className="py-3 px-3">
        {/* desktop navigation bar */}

        <div className="custom-container">
          <div className="flex justify-between items-center w-full ">
            <Link to="/">
              <img src={assets.logo} alt="website logo" />
            </Link>
            <div className="hidden sm:block">
              <ul className="flex justify-between space-x-8 text-[17px] tracking-wide">
                {navigationItem.map(({ path, label }) => (
                  <li key={label}>
                    <NavLink
                      to={path}
                      className={({ isActive }) => {
                        return `hover:bg-[#2d7a65] py-2 px-2 ${
                          isActive ? "bg-[#2d7a65]" : ""
                        }`;
                      }}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden sm:flex justify-between items-center space-x-6">
              <form
                onSubmit={handleSearchSubmitt}
                className="flex  items-center border-2 border-[#2d7a52] px-2 rounded-lg"
              >
                <input
                  type="text"
                  placeholder="Search Products"
                  className="focus:outline-none py-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IoSearchOutline className="cursor-pointer" />
              </form>
              <div className="relative p-3  ">
                <Link to="/cart">
                  <img
                    src={assets.cart_icon}
                    alt="cart icon"
                    className="h-6 cursor-pointer"
                  />
                  <span className="absolute top-0 right-0 bg-orange-400 rounded-full w-5 h-5 p-2 flex items-center justify-center ">
                    {numberofCartItems}
                  </span>
                </Link>
              </div>
              {!user && !isLogin ? (
                <Login />
              ) : (
                <div className="relative">
                  <div
                    className="  flex items-center space-x-3 border-2 border-gray-100 p-1 rounded-xl cursor-pointer
              "
                    onClick={handleToggleDropDown}
                  >
                    <img
                      src={assets.profile_icon}
                      alt="profile icon"
                      className="h-8 w-8"
                    />
                    {toggleDropDown ? <IoCaretUp /> : <IoCaretDown />}
                  </div>

                  {toggleDropDown ? (
                    <div className=" flex flex-col p-3 space-y-2 justify-start absolute top-13 py-2 z-50 mr-20 right-[-3] w-[150px] bg-[#2d7a65] ">
                      <Link
                        to="/my-orders"
                        className="cursor-pointer"
                        onClick={handleToggleDropDown}
                      >
                        My orders
                      </Link>
                      <button
                        className="self-start cursor-pointer "
                        onClick={() => {
                          handleLogout();
                          handleToggleDropDown();
                        }}
                      >
                        Log out
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              )}
            </div>

            {/* mobile navigation  */}

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
                className={`fixed top-0 left-0 h-full z-50  w-0 bg-gray-200  text-black  transition-all duration-300 ease-in-out ${
                  open ? "w-[65%]" : "w-0"
                } overflow-hidden `}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-2 flex flex-col space-y-4 overflow-hidden">
                  <div className="flex justify-between items-center">
                    <img src={assets.logo} alt="logo" />
                    <span onClick={handleCloseDrawer}>
                      <IoClose
                        size="20"
                        className="hover:bg-[#22c55e] hover:rounded-full"
                      />
                    </span>
                  </div>
                  <div className="flex space-x-2 hover:bg-[#22c55e] ">
                    <img
                      src={assets.profile_icon}
                      alt="profile picture"
                      className="w-12 h-12"
                    />
                    <div className="flex flex-col gap-[1px] ">
                      <span>User Name</span>
                      <span>username@.com</span>
                    </div>
                  </div>
                  <Link
                    to="/home"
                    className="flex items-center space-x-2 hover:bg-[#22c55e]"
                    onClick={handleCloseDrawer}
                  >
                    <FcHome />
                    <span>Home</span>
                  </Link>
                  <Link
                    to="/all-products"
                    className="flex items-center space-x-2 hover:bg-[#22c55e]"
                    onClick={handleCloseDrawer}
                  >
                    <FcBusiness />
                    <span>All Products</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center space-x-2 hover:bg-[#22c55e]"
                    onClick={handleCloseDrawer}
                  >
                    <FcPhoneAndroid />
                    <span>Contact</span>
                  </Link>
                  <div className="flex flex-col space-y-1">
                    <span>Search Product</span>
                    <form
                      onSubmit={handleSearchSubmitt}
                      className="flex  items-center border-2 border-[#2d7a52] px-2 rounded-lg mr-6"
                    >
                      <input
                        type="text"
                        placeholder="Search Products"
                        className="focus:outline-none  py-2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <IoSearchOutline className="cursor-pointer" />
                    </form>
                  </div>

                  <div
                    className="flex items-center space-x-2 hover:bg-[#22c55e]"
                    onClick={handleCloseDrawer}
                  >
                    <FcBusiness />
                    <span>Shoping cart</span>
                  </div>
                  <div
                    className="flex items-center space-x-2 hover:bg-[#22c55e]"
                    onClick={handleCloseDrawer}
                  >
                    <FcBarChart />
                    <span>My Orders</span>
                  </div>
                  <span
                    className="flex items-center space-x-2 "
                    onClick={() => {
                      handleLogout();
                      handleCloseDrawer();
                    }}
                  >
                    <FcLeave />
                    <span className="text-red-500">Logout</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
