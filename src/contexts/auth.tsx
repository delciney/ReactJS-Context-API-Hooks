import React, { createContext, useState } from "react";
import * as auth from "../sevices/auth";
interface AuthContextData {
  signed: boolean;
  user: object | null;
  singIn(): Promise<void>;
}

const AuthContexts = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  async function singIn() {
    const response = await auth.singIn();
    setUser(response.user);
  }
  return (
    <AuthContexts.Provider value={{ signed: !!user, user, singIn }}>
      {children}
    </AuthContexts.Provider>
  );
};

export default AuthContexts;
