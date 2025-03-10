import { Navigate } from "react-router";
import { useAuth } from "../context/authContext";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard/profile" replace />;
  }

  return children;
};

export default PublicRoute;
