import React, { createContext, useContext, useState, useEffect } from "react";
import * as auth from "../sevices/auth";

interface User {
  name: string;
  email: string;
}
interface AuthContextData {
  signed: boolean;
  user: User | null;
  singIn(): Promise<void>;
  singOut(): void;
}

const AuthContexts = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const storageUser = localStorage.getItem("@RNAuth:user");
    const storageToken = localStorage.getItem("@RNAuth:token");

    if (storageUser && storageToken) {
      setUser(JSON.parse(storageUser));
    }
  }, []);
  async function singIn() {
    const response = await auth.singIn();
    setUser(response.user);
    localStorage.setItem("@RNAuth:user", JSON.stringify(response.user));
    localStorage.setItem("@RNAuth:token", response.token);
  }
  function singOut() {
    localStorage.clear();
    setUser(null);
  }
  return (
    <AuthContexts.Provider value={{ signed: !!user, user, singIn, singOut }}>
      {children}
    </AuthContexts.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContexts);
  return context;
}
