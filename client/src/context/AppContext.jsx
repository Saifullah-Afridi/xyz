import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);

  const value = { navigate, user, setUser, isSeller, setIsSeller };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

const appContextValue = useContext(appContext);

export { appContext, AppContextProvider, appContextValue };
