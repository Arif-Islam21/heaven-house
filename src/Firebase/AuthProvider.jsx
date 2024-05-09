import { createContext } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "./Firebase.config";

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

  const authInfo = {
    emailSignUp,
    emailSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
