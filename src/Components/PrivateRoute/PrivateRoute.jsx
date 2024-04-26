import { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user) {
    return children;
  }

  if (loading) {
    <span className="loading mx-auto z-10 text-red-800 loading-infinity loading-lg"></span>;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
