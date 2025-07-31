import React from "react";
import NavBar from "../components/ui/customComponents/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { AppContextProvider } from "../context/AppContext";
import Footer from "../components/ui/customComponents/Footer";

const RootLayout = () => {
  const location = useLocation();

  const isSeller = location.pathname.includes("/seller");

  return (
    <div>
      <AppContextProvider>
        {!isSeller && <NavBar />}

        <React.Fragment>
          <Outlet />
        </React.Fragment>
        {!isSeller && <Footer />}
      </AppContextProvider>
    </div>
  );
};

export default RootLayout;
