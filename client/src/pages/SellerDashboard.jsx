import React from "react";
import SellerDashboardSidebar from "../components/ui/customComponents/SellerDashboardSidebar";
import { Outlet } from "react-router-dom";
import SellerHeader from "../components/ui/customComponents/SellerHeader";

const SellerDashboard = () => {
  return (
    <div className="">
      <SellerHeader />
      <div className=" flex mt-4">
        <SellerDashboardSidebar />
        <div className="flex-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
