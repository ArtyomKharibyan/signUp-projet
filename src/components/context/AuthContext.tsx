import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import auth, {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth as customAuth } from "../firebase";

interface IContextValues {
  createUser: (email: string, password: string) => Promise<auth.UserCredential>;
  setIsAuth: (value: boolean) => void;
  signIn: (email: string, password: string) => void;
  isAuth: boolean;
}

const UserContext = createContext<IContextValues>({} as IContextValues);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  const createUser = useCallback(
    (email: string, password: string) =>
      createUserWithEmailAndPassword(customAuth, email, password),
    []
  );

  console.log(isAuth);

  const signIn = (email: string, password: string) =>
    signInWithEmailAndPassword(customAuth, email, password);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(customAuth, (currentUser) => {
      console.log(currentUser);

      if (currentUser !== null) {
        setUser(currentUser);
      }
    });

    return () => {
      unSubscribe();
    };
  }, [user]);

  const contextValue = useMemo(
    () => ({ createUser, setIsAuth, signIn, isAuth }),
    [createUser, setIsAuth, isAuth]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const UserAuth = () => useContext(UserContext);
