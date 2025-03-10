import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router";

const Layout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="font-poppins mx-auto max-w-7xl">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
