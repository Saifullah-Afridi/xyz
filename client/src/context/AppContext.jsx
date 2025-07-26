import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    isLogin,
    setIsLogin,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

const appContextValue = () => {
  return useContext(appContext);
};

export { appContext, AppContextProvider, appContextValue };
