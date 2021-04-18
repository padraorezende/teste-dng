import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { MySwal } from "../components/MySwal";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const login = ({ username, password }) => {
    if (username !== "administradordng" && password !== "processoseletivo") {
      return MySwal.fire({
        title: "Usuário ou senha errados",
        icon: "error",
      });
    }
    setIsLogged(true);
  };
  const logout = () => {
    setIsLogged(false);
  };
  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
