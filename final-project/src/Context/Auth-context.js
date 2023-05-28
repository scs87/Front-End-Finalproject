import React, { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const data = {
    isAuth,
    setIsAuth

  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};