import React from "react";
import NavBar from "../components/ui/customComponents/NavBar";
import { Outlet } from "react-router-dom";
import { AppContextProvider } from "../context/AppContext";

const RootLayout = () => {
  return (
    <div>
      <AppContextProvider>
        <NavBar />
        <React.Fragment>
          <Outlet />
        </React.Fragment>
      </AppContextProvider>
    </div>
  );
};

export default RootLayout;
