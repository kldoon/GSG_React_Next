import { createContext, useState } from "react";
import { IUserData } from "../types";

export interface IAuthContext {
  user: IUserData | null;
  login: (data: IUserData) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({ user: null, login: () => { }, logout: () => { } });

export const AuthProvider = (props: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUserData | null>(null);

  const login = (data: IUserData) => {
    if (data.userName.length >= 3) {
      setUser(data);
    } else {
      setUser(null);
    }
  }

  const logout = () => {
    setUser(null);
  }

  const data = { user, login, logout };

  return <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>;
};