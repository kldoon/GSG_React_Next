import { createContext, useLayoutEffect, useState } from "react";
import { IUserData } from "../@types";
import useLocalStorage from "../hooks/local-storage.hook";

export interface IAuthContext {
  user: IUserData | null;
  loading: boolean;
  login: (data: IUserData) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({ user: null, login: () => { }, logout: () => { }, loading: true });

export const AuthProvider = (props: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUserData | null>(null);
  const { storedData, loading } = useLocalStorage(user, 'auth-user');

  useLayoutEffect(() => {
    if (!loading) {
      setUser(storedData);
    }
  }, [storedData, loading]);

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

  const data = { user, loading, login, logout };

  return <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>;
};