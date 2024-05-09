import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "./Firebase.config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // GETTING THE CURRENT USER TO SAVE AT STATE
  const [user, setUser] = useState(null);
  // SIGN UP WITH EMAIL AND PASSWORD
  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // REGISTER WITH EMAIL AND PASSWORD
  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // LOGING IN WITH GOOGLE
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // LOGING IN WITH GITHUB
  const githubLogIn = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // LOGING OUT THE USER
  const logOut = () => {
    return signOut(auth);
  };

  // ON AUTH STATE CHANGE
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current user value", currentUser);
      // setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    emailSignUp,
    emailSignIn,
    googleLogIn,
    githubLogIn,
    user,
    setUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
