import React from "react";
import { IoIosAddCircleOutline, IoIosList } from "react-icons/io";
import { IoCloudDoneOutline } from "react-icons/io5";
import { Link, matchPath, useLocation } from "react-router-dom";
const SellerDashboardSidebar = () => {
  const { pathname } = useLocation();

  const isActive = (link) => {
    if (pathname === "/seller-dashboard" && link.link === "add-product") {
      return true;
    }
    return matchPath(`/seller-dashboard/${link.link}`, pathname);
  };

  const navigationLinks = [
    {
      icon: <IoIosAddCircleOutline />,
      title: "Add Product",
      link: "add-product",
    },
    {
      icon: <IoIosList />,
      title: "Product List",
      link: "product-list",
    },
    {
      icon: <IoCloudDoneOutline />,
      title: "Orders",
      link: "orders-list",
    },
  ];
  return (
    <div className="flex-1 border-r-1 shadow-sm h-screen border-r-gray-300">
      {navigationLinks?.map((link) => (
        <Link
          to={link?.link}
          key={link.title}
          className={`${
            isActive(link) ? "border-r-8 border-r-primary bg-green-100 " : ""
          } flex items-center gap-2 hover:bg-green-100 h-12 px-2 transition-all duration-200 ease-in-out`}
        >
          <span>{link?.icon}</span>
          <span>{link?.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default SellerDashboardSidebar;
