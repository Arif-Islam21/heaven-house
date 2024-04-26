import { createContext } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();

  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    emailSignUp,
    emailSignIn,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
