// const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
//     console.log("Current data: ", doc.data());
// });
import { useState, useEffect, createContext, useContext } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';

import { db } from './config';
import { useAuth } from './AuthProvider';

interface IAuthProvider {
  children: JSX.Element | JSX.Element[];
}

interface DbUser {
  name: string;
  email: string;
  role: string;
}

const UserContext = createContext<DbUser | null>(null);

export const UserProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<DbUser | null>(null);

  const authUser = useAuth();

  useEffect(() => {
    let unsubscribe;
    if (authUser) {
      unsubscribe = onSnapshot(doc(db, 'users', authUser.uid), (userDoc) => {
        console.log('Current db user data: ', userDoc.data());
        const dbUser = userDoc.data() as DbUser;
        setUser(dbUser);
      });
    }

    return unsubscribe;
  }, [authUser]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export function useDBUser() {
  const context = useContext(UserContext);

  return context;
}
