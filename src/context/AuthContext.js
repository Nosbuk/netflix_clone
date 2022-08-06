import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import auth from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({
  children,
}) => {
  const [user, setUser] = useState({});

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  const logOut = () => signOut();
  const logIn = () =>
    signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
      }
    );
    return () => unsubscribe;
  });

  return (
    <AuthContext.Provider
      value={{ signUp, logIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () =>
  useContext(AuthContext);
