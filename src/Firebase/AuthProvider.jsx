import { createContext } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "./Firebase.config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
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

  const authInfo = {
    emailSignUp,
    emailSignIn,
    googleLogIn,
    githubLogIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
