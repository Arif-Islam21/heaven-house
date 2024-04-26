import { createContext } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    emailSignUp,
    emailSignIn,
    googleLogIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
