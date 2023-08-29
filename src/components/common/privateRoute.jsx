import React, { useContext } from "react";
import { UserContext } from "../../context";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return <>{token ? children : <Navigate to="/signin" />}</>;
};

export default PrivateRoute;
