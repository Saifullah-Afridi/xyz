import React from "react";
import NavBar from "../components/ui/customComponents/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <React.Fragment>
        <Outlet />
      </React.Fragment>
    </div>
  );
};

export default RootLayout;
