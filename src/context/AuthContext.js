import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
const AuthContext = createContext();

export const AuthContextProvider = ({
  children,
}) => {
  const [user, setUser] = useState({});

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  };
  const logOut = () => signOut(auth);
  const logIn = (email, password) =>
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
      value={{ user, signUp, logIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () =>
  useContext(AuthContext);
