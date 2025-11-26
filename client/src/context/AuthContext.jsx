import { createContext, useState, useEffect } from "react";
import { setToken } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setAuthToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      setToken(token);
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, [token]);

  const login = (userData, token) => {
    setUser(userData);
    setAuthToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setAuthToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
