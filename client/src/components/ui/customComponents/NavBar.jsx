// import React from "react";
// import { Link } from "react-router-dom";
// import { assets } from "../../../assets/assets";
// import CustomDrawer from "./CustomDrawer";
// import NavigationMenu from "./NavigationMenu";
// import NavBarSection3 from "./NavBarSection3";

// const NavBar = () => {
//   return (
//     <header className="md:custom-container p-3  ">
//       <nav className="flex justify-between">
//         <Link>
//           <img src={assets.logo} alt="logo" />
//         </Link>
//         <div className="sm:hidden">
//           <CustomDrawer />
//         </div>
//         <div className="hidden sm:block">
//           <NavigationMenu direction="flex-row" />
//         </div>
//         <NavBarSection3 />
//       </nav>
//     </header>
//   );
// };

// export default NavBar;

// import React, { useState, useRef, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { IoSearchOutline } from "react-icons/io5";
// import { assets } from "../../../assets/assets";
// import { appContextValue } from "../../../context/AppContext";

// const NavBar = () => {
//   const { user, setUser, isLogin, setIsLogin } = appContextValue();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [showUserDropdown, setShowUserDropdown] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const dropdownRef = useRef(null);

//   // Navigation items
//   const navigationItems = [
//     { path: "/home", label: "Home" },
//     { path: "/all-products", label: "All Products" },
//     { path: "/contact", label: "Contact" },
//   ];

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowUserDropdown(false);
//       }
//     };

//     if (showUserDropdown) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [showUserDropdown]);

//   // Close drawer on resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 640) {
//         setIsDrawerOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Handlers
//   const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
//   const closeDrawer = () => setIsDrawerOpen(false);
//   const toggleUserDropdown = () => setShowUserDropdown((prev) => !prev);

//   const handleLogin = () => {
//     console.log("Login clicked");
//     closeDrawer();
//     // Add your login logic here
//   };

//   const handleRegister = () => {
//     console.log("Register clicked");
//     closeDrawer();
//     // Add your register logic here
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setIsLogin(false);
//     setShowUserDropdown(false);
//     closeDrawer();
//     localStorage.removeItem("authToken");
//     console.log("User logged out");
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       console.log("Search:", searchQuery);
//       closeDrawer();
//       // Add your search logic here
//     }
//   };

//   const handleCartClick = () => {
//     console.log("Cart clicked");
//     closeDrawer();
//     // Add your cart logic here
//   };

//   return (
//     <header className="md:custom-container p-3 sticky top-0 bg-white shadow-sm z-30">
//       <nav className="flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex-shrink-0">
//           <img src={assets.logo} alt="logo" className="h-8 sm:h-10" />
//         </Link>

//         {/* Mobile Menu Button */}
//         <div className="sm:hidden">
//           <button
//             onClick={toggleDrawer}
//             className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
//             aria-label="Toggle navigation menu"
//           >
//             <img src={assets.menu_icon} alt="Menu" className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Desktop Navigation Links */}
//         <div className="hidden sm:flex items-center space-x-8">
//           <ul className="flex space-x-6">
//             {navigationItems.map(({ path, label }) => (
//               <li key={path}>
//                 <NavLink
//                   to={path}
//                   className={({ isActive }) =>
//                     `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
//                       isActive
//                         ? "text-blue-600 bg-blue-50"
//                         : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
//                     }`
//                   }
//                 >
//                   {label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Desktop Right Section */}
//         <div className="hidden sm:flex items-center space-x-4">
//           {/* Search Bar */}
//           <form onSubmit={handleSearch} className="relative">
//             <div className="flex items-center border-2 border-gray-300 rounded-lg bg-gray-50 focus-within:border-blue-500 focus-within:bg-white transition-colors duration-200">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="bg-transparent focus:outline-none w-32 lg:w-48 text-sm px-3 py-2 placeholder-gray-500"
//               />
//               <button
//                 type="submit"
//                 className="px-3 py-2 text-gray-500 hover:text-blue-600 transition-colors duration-200"
//               >
//                 <IoSearchOutline className="w-5 h-5" />
//               </button>
//             </div>
//           </form>

//           {/* Cart Button */}
//           <button
//             onClick={handleCartClick}
//             className="relative p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
//             aria-label="Shopping cart"
//           >
//             <img src={assets.cart_icon} alt="Cart" className="w-6 h-6" />
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
//               0
//             </span>
//           </button>

//           {/* Desktop Authentication */}
//           {!isLogin && !user ? (
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={handleLogin}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={handleRegister}
//                 className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg font-medium transition-all duration-200"
//               >
//                 Register
//               </button>
//             </div>
//           ) : (
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={toggleUserDropdown}
//                 className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
//                 aria-label="User menu"
//               >
//                 <img
//                   src={assets.profile_icon}
//                   alt="User profile"
//                   className="w-8 h-8 rounded-full object-cover"
//                 />
//                 <svg
//                   className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
//                     showUserDropdown ? "rotate-180" : ""
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               {/* Desktop User Dropdown */}
//               {showUserDropdown && (
//                 <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
//                   <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
//                     <div className="flex items-center space-x-3">
//                       <img
//                         src={assets.profile_icon}
//                         alt="User profile"
//                         className="w-10 h-10 rounded-full object-cover"
//                       />
//                       <div className="flex-1 min-w-0">
//                         <p className="text-sm font-medium text-gray-900 truncate">
//                           {user?.name || "John Doe"}
//                         </p>
//                         <p className="text-xs text-gray-500 truncate">
//                           {user?.email || "user@example.com"}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="py-1">
//                     {[
//                       { label: "My Profile", icon: "👤" },
//                       { label: "My Orders", icon: "📦" },
//                       { label: "Settings", icon: "⚙️" },
//                       { label: "Help & Support", icon: "❓" },
//                     ].map((item) => (
//                       <button
//                         key={item.label}
//                         onClick={() => {
//                           setShowUserDropdown(false);
//                           console.log(`${item.label} clicked`);
//                         }}
//                         className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
//                       >
//                         <span className="text-lg">{item.icon}</span>
//                         <span>{item.label}</span>
//                       </button>
//                     ))}
//                   </div>

//                   <hr className="my-1" />

//                   <button
//                     onClick={handleLogout}
//                     className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
//                   >
//                     <span className="text-lg">🚪</span>
//                     <span>Logout</span>
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Mobile Drawer Backdrop */}
//       {isDrawerOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 sm:hidden"
//           onClick={closeDrawer}
//           aria-hidden="true"
//         />
//       )}

//       {/* Mobile Drawer */}
//       <div
//         className={`fixed top-0 left-0 h-full z-50 bg-white shadow-lg transform transition-transform duration-300 ease-in-out sm:hidden ${
//           isDrawerOpen ? "translate-x-0" : "-translate-x-full"
//         } w-[280px] max-w-[80vw] overflow-y-auto`}
//       >
//         {/* Mobile Drawer Header */}
//         <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
//           <img src={assets.logo} alt="Logo" className="h-8" />
//           <button
//             onClick={closeDrawer}
//             className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
//             aria-label="Close menu"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile User Section (if logged in) */}
//         {isLogin && user && (
//           <div className="p-4 bg-blue-50 border-b border-gray-200">
//             <div className="flex items-center space-x-3">
//               <img
//                 src={assets.profile_icon}
//                 alt="User profile"
//                 className="w-12 h-12 rounded-full object-cover"
//               />
//               <div className="flex-1">
//                 <h3 className="text-sm font-semibold text-gray-900">
//                   {user?.name || "John Doe"}
//                 </h3>
//                 <p className="text-xs text-gray-600">
//                   {user?.email || "user@example.com"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Mobile Navigation Links */}
//         <div className="py-2">
//           <ul>
//             {navigationItems.map(({ path, label }) => (
//               <li key={path}>
//                 <NavLink
//                   to={path}
//                   onClick={closeDrawer}
//                   className={({ isActive }) =>
//                     `flex items-center px-6 py-4 text-gray-700 hover:bg-gray-100 border-b border-gray-100 transition-colors duration-200 ${
//                       isActive
//                         ? "bg-blue-50 text-blue-600 border-blue-200 font-medium"
//                         : ""
//                     }`
//                   }
//                 >
//                   <span className="text-lg mr-4">
//                     {path === "/home"
//                       ? "🏠"
//                       : path === "/all-products"
//                       ? "🛍️"
//                       : "📞"}
//                   </span>
//                   {label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Mobile Search Section */}
//         <div className="px-6 py-4 border-b border-gray-200">
//           <h4 className="text-sm font-medium text-gray-900 mb-3">
//             Search Products
//           </h4>
//           <form onSubmit={handleSearch}>
//             <div className="flex items-center border-2 border-gray-300 rounded-lg bg-gray-50 focus-within:border-blue-500 focus-within:bg-white">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="flex-1 bg-transparent focus:outline-none text-sm px-4 py-3 placeholder-gray-500"
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-3 text-gray-500 hover:text-blue-600"
//               >
//                 <IoSearchOutline className="w-5 h-5" />
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Mobile Cart Section */}
//         <div className="px-6 py-4 border-b border-gray-200">
//           <button
//             onClick={handleCartClick}
//             className="flex items-center w-full text-left space-x-4 text-gray-700 hover:text-blue-600 transition-colors duration-200"
//           >
//             <div className="relative">
//               <img src={assets.cart_icon} alt="Cart" className="w-6 h-6" />
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
//                 0
//               </span>
//             </div>
//             <span className="font-medium">Shopping Cart</span>
//           </button>
//         </div>

//         {/* Mobile Authentication Section */}
//         <div className="px-6 py-4">
//           {!isLogin && !user ? (
//             <div className="space-y-3">
//               <button
//                 onClick={handleLogin}
//                 className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200"
//               >
//                 Login to Your Account
//               </button>
//               <button
//                 onClick={handleRegister}
//                 className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg font-medium transition-all duration-200"
//               >
//                 Create New Account
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-3">
//               {[
//                 { label: "My Profile", icon: "👤" },
//                 { label: "My Orders", icon: "📦" },
//                 { label: "Settings", icon: "⚙️" },
//                 { label: "Help & Support", icon: "❓" },
//               ].map((item) => (
//                 <button
//                   key={item.label}
//                   onClick={() => {
//                     closeDrawer();
//                     console.log(`${item.label} clicked`);
//                   }}
//                   className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
//                 >
//                   <span className="text-lg">{item.icon}</span>
//                   <span>{item.label}</span>
//                 </button>
//               ))}

//               <hr className="my-3" />

//               <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
//               >
//                 <span className="text-lg">🚪</span>
//                 <span>Logout</span>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import { Link, NavLink } from "react-router-dom";
import {
  IoCaretDown,
  IoCaretUp,
  IoFileTrayStacked,
  IoSearchOutline,
} from "react-icons/io5";
import { appContextValue } from "../../../context/AppContext";
import { IoMdMenu } from "react-icons/io";
import CustomDrawer from "./CustomDrawer";

const NavBar = () => {
  const { user, setUser, isLogin, setIsLogin } = appContextValue();
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);

  const [open, setOpen] = useState(false);

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
    setUser(false);
    setIsLogin(false);
  };

  const handleLogin = () => {
    setIsLogin(true);
    setUser(true);
  };

  const handleSearchSubmitt = () => {
    e.preventDefault();
    console.log(searchTerm);
  };

  const handleOpenDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="shadow-sm bg-[#1a5d4a] text-white ">
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
                  <span className="absolute top-0 right-0 bg-orange-400 rounded-full w-4 h-4 flex items-center justify-center ">
                    3
                  </span>
                </Link>
              </div>
              {!user && !isLogin ? (
                <button
                  className="bg-green-500 cursor-pointer px-6 py-2 text-white rounded-md hover:bg-green-600  transition-all duration-200 ease-in-out"
                  onClick={handleLogin}
                >
                  Login
                </button>
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
                className={`fixed top-0 left-0 h-full z-50  w-0 bg-[#1a5d4a]   transition-all duration-300 ease-in-out ${
                  open ? "w-[70%]" : "w-0"
                } overflow-hidden `}
                onClick={(e) => e.stopPropagation()}
              >
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
