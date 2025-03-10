import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";

// Protected route component - ensures user is authenticated
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      console.error("Login is required to access this page!");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
