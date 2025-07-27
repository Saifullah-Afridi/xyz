// import React, { useState } from "react";
// import { assets } from "../../../assets/assets";
// import { Link, NavLink } from "react-router-dom";
// import {
//   IoCaretDown,
//   IoCaretUp,
//   IoClose,
//   IoFileTrayStacked,
//   IoSearchOutline,
// } from "react-icons/io5";
// import { appContextValue } from "../../../context/AppContext";
// import { IoMdMenu } from "react-icons/io";
// import {
//   FcBarChart,
//   FcBusiness,
//   FcHome,
//   FcLeave,
//   FcPhone,
//   FcPhoneAndroid,
// } from "react-icons/fc";

// const NavBar = () => {
//   const { user, setUser, isLogin, setIsLogin } = appContextValue();
//   const [toggleDropDown, setToggleDropDown] = useState(false);
//   const [searchTerm, setSearchTerm] = useState(null);

//   const [open, setOpen] = useState(false);

//   const navigationItem = [
//     {
//       path: "/home",
//       label: "Home",
//     },
//     {
//       path: "/all-products",
//       label: "All Products",
//     },
//     {
//       path: "/contact",
//       label: "Contact",
//     },
//   ];

//   const handleToggleDropDown = () => {
//     setToggleDropDown(!toggleDropDown);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setIsLogin(false);
//   };

//   const handleLogin = () => {
//     setIsLogin(true);
//     setUser({});
//   };

//   const handleSearchSubmitt = () => {
//     e.preventDefault();
//     console.log(searchTerm);
//   };

//   const handleOpenDrawer = () => {
//     setOpen((prev) => !prev);
//   };

//   const handleCloseDrawer = () => {
//     setOpen(false);
//   };
//   return (
//     <header className="shadow-sm bg-[#1a5d4a] text-white ">
//       <nav className="py-3 px-3">
//         {/* desktop navigation bar */}

//         <div className="custom-container">
//           <div className="flex justify-between items-center w-full ">
//             <Link to="/">
//               <img src={assets.logo} alt="website logo" />
//             </Link>
//             <div className="hidden sm:block">
//               <ul className="flex justify-between space-x-8 text-[17px] tracking-wide">
//                 {navigationItem.map(({ path, label }) => (
//                   <li key={label}>
//                     <NavLink
//                       to={path}
//                       className={({ isActive }) => {
//                         return `hover:bg-[#2d7a65] py-2 px-2 ${
//                           isActive ? "bg-[#2d7a65]" : ""
//                         }`;
//                       }}
//                     >
//                       {label}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="hidden sm:flex justify-between items-center space-x-6">
//               <form
//                 onSubmit={handleSearchSubmitt}
//                 className="flex  items-center border-2 border-[#2d7a52] px-2 rounded-lg"
//               >
//                 <input
//                   type="text"
//                   placeholder="Search Products"
//                   className="focus:outline-none py-2"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <IoSearchOutline className="cursor-pointer" />
//               </form>
//               <div className="relative p-3  ">
//                 <Link to="/cart">
//                   <img
//                     src={assets.cart_icon}
//                     alt="cart icon"
//                     className="h-6 cursor-pointer"
//                   />
//                   <span className="absolute top-0 right-0 bg-orange-400 rounded-full w-4 h-4 flex items-center justify-center ">
//                     3
//                   </span>
//                 </Link>
//               </div>
//               {!user && !isLogin ? (
//                 <button
//                   className="bg-green-500 cursor-pointer px-6 py-2 text-white rounded-md hover:bg-green-600  transition-all duration-200 ease-in-out"
//                   onClick={handleLogin}
//                 >
//                   Login
//                 </button>
//               ) : (
//                 <div className="relative">
//                   <div
//                     className="  flex items-center space-x-3 border-2 border-gray-100 p-1 rounded-xl cursor-pointer
//               "
//                     onClick={handleToggleDropDown}
//                   >
//                     <img
//                       src={assets.profile_icon}
//                       alt="profile icon"
//                       className="h-8 w-8"
//                     />
//                     {toggleDropDown ? <IoCaretUp /> : <IoCaretDown />}
//                   </div>

//                   {toggleDropDown ? (
//                     <div className=" flex flex-col p-3 space-y-2 justify-start absolute top-13 py-2 z-50 mr-20 right-[-3] w-[150px] bg-[#2d7a65] ">
//                       <Link
//                         to="/my-orders"
//                         className="cursor-pointer"
//                         onClick={handleToggleDropDown}
//                       >
//                         My orders
//                       </Link>
//                       <button
//                         className="self-start cursor-pointer "
//                         onClick={() => {
//                           handleLogout();
//                           handleToggleDropDown();
//                         }}
//                       >
//                         Log out
//                       </button>
//                     </div>
//                   ) : (
//                     ""
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* mobile navigation  */}

//             <div className="block sm:hidden">
//               <button onClick={handleOpenDrawer}>
//                 <IoMdMenu size="25" className="cursor-pointer" />
//               </button>
//               {open && (
//                 <div
//                   className="fixed top-0 left-0 h-full w-full bg-black/50 z-40 transition-all duration-300 ease-in-out"
//                   onClick={handleOpenDrawer}
//                 ></div>
//               )}

//               <div
//                 className={`fixed top-0 left-0 h-full z-50  w-0 bg-gray-200  text-black  transition-all duration-300 ease-in-out ${
//                   open ? "w-[65%]" : "w-0"
//                 } overflow-hidden `}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="p-2 flex flex-col space-y-4 overflow-hidden">
//                   <div className="flex justify-between items-center">
//                     <img src={assets.logo} alt="logo" />
//                     <span onClick={handleCloseDrawer}>
//                       <IoClose
//                         size="20"
//                         className="hover:bg-[#22c55e] hover:rounded-full"
//                       />
//                     </span>
//                   </div>
//                   <div className="flex space-x-2 hover:bg-[#22c55e] ">
//                     <img
//                       src={assets.profile_icon}
//                       alt="profile picture"
//                       className="w-12 h-12"
//                     />
//                     <div className="flex flex-col gap-[1px] ">
//                       <span>User Name</span>
//                       <span>username@.com</span>
//                     </div>
//                   </div>
//                   <Link
//                     to="/home"
//                     className="flex items-center space-x-2 hover:bg-[#22c55e]"
//                     onClick={handleCloseDrawer}
//                   >
//                     <FcHome />
//                     <span>Home</span>
//                   </Link>
//                   <Link
//                     to="/all-products"
//                     className="flex items-center space-x-2 hover:bg-[#22c55e]"
//                     onClick={handleCloseDrawer}
//                   >
//                     <FcBusiness />
//                     <span>All Products</span>
//                   </Link>
//                   <Link
//                     to="/contact"
//                     className="flex items-center space-x-2 hover:bg-[#22c55e]"
//                     onClick={handleCloseDrawer}
//                   >
//                     <FcPhoneAndroid />
//                     <span>Contact</span>
//                   </Link>
//                   <div className="flex flex-col space-y-1">
//                     <span>Search Product</span>
//                     <form
//                       onSubmit={handleSearchSubmitt}
//                       className="flex  items-center border-2 border-[#2d7a52] px-2 rounded-lg mr-6"
//                     >
//                       <input
//                         type="text"
//                         placeholder="Search Products"
//                         className="focus:outline-none  py-2"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                       />
//                       <IoSearchOutline className="cursor-pointer" />
//                     </form>
//                   </div>

//                   <div
//                     className="flex items-center space-x-2 hover:bg-[#22c55e]"
//                     onClick={handleCloseDrawer}
//                   >
//                     <FcBusiness />
//                     <span>Shoping cart</span>
//                   </div>
//                   <div
//                     className="flex items-center space-x-2 hover:bg-[#22c55e]"
//                     onClick={handleCloseDrawer}
//                   >
//                     <FcBarChart />
//                     <span>My Orders</span>
//                   </div>
//                   <span
//                     className="flex items-center space-x-2 "
//                     onClick={() => {
//                       handleLogout();
//                       handleCloseDrawer();
//                     }}
//                   >
//                     <FcLeave />
//                     <span className="text-red-500">Logout</span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default NavBar;


import React, { useState, useRef, useEffect } from "react";
import { assets } from "../../../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  IoCaretDown,
  IoCaretUp,
  IoClose,
  IoSearchOutline,
  IoCartOutline,
  IoPersonOutline,
  IoLogOutOutline,
  IoReceiptOutline,
  IoSettingsOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { appContextValue } from "../../../context/AppContext";

const NavBar = () => {
  const { user, setUser, isLogin, setIsLogin, cartItems = [] } = appContextValue();
  const navigate = useNavigate();
  
  // State management
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Refs for click outside detection
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Navigation items configuration
  const navigationItems = [
    { path: "/home", label: "Home", icon: "🏠" },
    { path: "/all-products", label: "All Products", icon: "🛍️" },
    { path: "/contact", label: "Contact", icon: "📞" },
  ];

  const userMenuItems = [
    { path: "/profile", label: "My Profile", icon: IoPersonOutline },
    { path: "/my-orders", label: "My Orders", icon: IoReceiptOutline },
    { path: "/settings", label: "Settings", icon: IoSettingsOutline },
    { path: "/help", label: "Help & Support", icon: IoHelpCircleOutline },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Event handlers
  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogin = () => {
    setIsLogin(true);
    setUser({ name: "John Doe", email: "john.doe@example.com" });
    handleCloseMobileMenu();
  };

  const handleLogout = () => {
    setUser(null);
    setIsLogin(false);
    setIsDropdownOpen(false);
    handleCloseMobileMenu();
    navigate("/home");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      handleCloseMobileMenu();
    }
  };

  const handleCartClick = () => {
    navigate("/cart");
    handleCloseMobileMenu();
  };

  const cartItemCount = cartItems.length || 0;

  return (
    <header className="sticky top-0 bg-[#1a5d4a] text-white shadow-lg z-40">
      <nav className="custom-container">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link 
            to="/home" 
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            aria-label="FreshMart Home"
          >
            <img 
              src={assets.logo} 
              alt="FreshMart Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {navigationItems.map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-[#2d7a65] text-white shadow-md"
                          : "hover:bg-[#2d7a65] hover:shadow-md"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 focus-within:bg-white focus-within:text-gray-900 transition-all duration-200">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent focus:outline-none text-sm placeholder-white/70 focus-within:placeholder-gray-500 w-48"
                />
                <button
                  type="submit"
                  className="ml-2 p-1 hover:text-[#1a5d4a] transition-colors"
                  aria-label="Search"
                >
                  <IoSearchOutline className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Cart Button */}
            <button
              onClick={handleCartClick}
              className="relative p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label={`Shopping cart with ${cartItemCount} items`}
            >
              <IoCartOutline className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount > 99 ? "99+" : cartItemCount}
                </span>
              )}
            </button>

            {/* Authentication Section */}
            {!isLogin ? (
              <button
                onClick={handleLogin}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
              >
                Login
              </button>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={handleToggleDropdown}
                  className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <img
                    src={assets.profile_icon}
                    alt="User profile"
                    className="w-8 h-8 rounded-full object-cover border-2 border-white/20"
                  />
                  {isDropdownOpen ? (
                    <IoCaretUp className="w-4 h-4" />
                  ) : (
                    <IoCaretDown className="w-4 h-4" />
                  )}
                </button>

                {/* Desktop Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
                    {/* User Info */}
                    <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <img
                          src={assets.profile_icon}
                          alt="User profile"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate">
                            {user?.name || "John Doe"}
                          </p>
                          <p className="text-xs text-gray-600 truncate">
                            {user?.email || "john.doe@example.com"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      {userMenuItems.map(({ path, label, icon: Icon }) => (
                        <Link
                          key={path}
                          to={path}
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                        >
                          <Icon className="w-5 h-5 text-gray-500" />
                          <span>{label}</span>
                        </Link>
                      ))}
                    </div>

                    <div className="border-t border-gray-200">
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                      >
                        <IoLogOutOutline className="w-5 h-5" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggleMobileMenu}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <IoMdMenu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={handleToggleMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white text-gray-900 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <img src={assets.logo} alt="FreshMart Logo" className="h-8" />
          <button
            onClick={handleCloseMobileMenu}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
            aria-label="Close mobile menu"
          >
            <IoClose className="w-5 h-5" />
          </button>
        </div>

        {/* User Section (if logged in) */}
        {isLogin && user && (
          <div className="p-4 bg-blue-50 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <img
                src={assets.profile_icon}
                alt="User profile"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  {user.name || "John Doe"}
                </h3>
                <p className="text-sm text-gray-600">
                  {user.email || "john.doe@example.com"}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Links */}
        <div className="py-2">
          {navigationItems.map(({ path, label, icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={handleCloseMobileMenu}
              className={({ isActive }) =>
                `flex items-center space-x-4 px-6 py-4 border-b border-gray-100 transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-blue-200 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <span className="text-2xl">{icon}</span>
              <span className="font-medium">{label}</span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Search Section */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Search Products
          </h4>
          <form onSubmit={handleSearchSubmit}>
            <div className="flex items-center border-2 border-gray-300 rounded-lg focus-within:border-[#1a5d4a]">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 text-sm focus:outline-none rounded-l-lg"
              />
              <button
                type="submit"
                className="px-4 py-3 text-[#1a5d4a] hover:bg-gray-100 rounded-r-lg transition-colors"
              >
                <IoSearchOutline className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Mobile Cart Section */}
        <div className="px-6 py-4 border-b border-gray-200">
          <button
            onClick={handleCartClick}
            className="flex items-center justify-between w-full text-left"
          >
            <div className="flex items-center space-x-4">
              <div className="relative">
                <IoCartOutline className="w-6 h-6 text-gray-700" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span className="font-medium text-gray-700">Shopping Cart</span>
            </div>
            <span className="text-sm text-gray-500">
              {cartItemCount} {cartItemCount === 1 ? "item" : "items"}
            </span>
          </button>
        </div>

        {/* Mobile Authentication Section */}
        <div className="px-6 py-4">
          {!isLogin ? (
            <button
              onClick={handleLogin}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Login to Your Account
            </button>
          ) : (
            <div className="space-y-2">
              {userMenuItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={handleCloseMobileMenu}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <Icon className="w-5 h-5 text-gray-500" />
                  <span>{label}</span>
                </Link>
              ))}

              <div className="pt-2 mt-2 border-t border-gray-200">
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                >
                  <IoLogOutOutline className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;  