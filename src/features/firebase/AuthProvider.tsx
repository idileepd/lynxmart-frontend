import { useState, useEffect, createContext, useContext } from 'react';
import { User } from 'firebase/auth';

import { auth } from './config';

interface IAuthProvider {
  children: JSX.Element | JSX.Element[];
}

const AuthContext = createContext<User | null>(null);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userState) => {
      // Todo::  Fetch user data and add
      console.log('[AuthProvider] -- user state --');
      console.log(userState);
      setUser(userState);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
