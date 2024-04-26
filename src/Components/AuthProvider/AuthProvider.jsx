import { createContext } from "react";

const AuthProvider = ({ children }) => {
  const AuthContext = createContext(null);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;
