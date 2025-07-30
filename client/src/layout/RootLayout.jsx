import React from "react";
import NavBar from "../components/ui/customComponents/NavBar";
import { Outlet } from "react-router-dom";
import { AppContextProvider } from "../context/AppContext";
import Footer from "../components/ui/customComponents/Footer";

const RootLayout = () => {
  return (
    <div>
      <AppContextProvider>
        <NavBar />
        <React.Fragment>
          <Outlet />
        </React.Fragment>
        <Footer />
      </AppContextProvider>
    </div>
  );
};

export default RootLayout;
