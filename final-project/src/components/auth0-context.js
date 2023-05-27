import React, { createContext, useContext, useEffect, useState } from "react";
import { initializeAuth0 } from "./auth0-config";

const Auth0Context = createContext();

export const useAuth0 = () => useContext(Auth0Context);

export const Auth0Provider = ({ children }) => {
  const [auth0, setAuth0] = useState(null);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0Instance = await initializeAuth0();
      setAuth0(auth0Instance);
    };
    initAuth0();
  }, []);

  return (
    <Auth0Context.Provider value={auth0}>
      {children}
    </Auth0Context.Provider>
  );
};