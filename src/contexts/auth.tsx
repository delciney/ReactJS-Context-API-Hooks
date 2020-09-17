import React, { createContext } from "react";
import * as auth from "../sevices/auth";
interface AuthContextData {
  signed: boolean;
  user: object;
  singIn(): Promise<void>;
}

const AuthContexts = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  async function singIn() {
    const response = await auth.singIn();
    console.log(response);
  }
  return (
    <AuthContexts.Provider value={{ signed: true, user: {}, singIn }}>
      {children}
    </AuthContexts.Provider>
  );
};

export default AuthContexts;
