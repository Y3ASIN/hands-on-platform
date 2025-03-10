import { useNavigate, useLocation } from "react-router";
import { HiOutlineArrowRightStartOnRectangle } from "react-icons/hi2";

import { navLinks, getInitials } from "../utils";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const name = "John Doe";
  const initials = getInitials(name);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="border-accent-secondary mb-2 flex items-center justify-between border-b px-2 py-3 text-black">
      <div>Logo</div>

      <div className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`cursor-pointer px-4 py-2 ${
                location.pathname === link.path
                  ? "border-accent -mt-px border-t"
                  : ""
              }`}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-2">
        <div className="border-accent flex h-8 w-8 items-center justify-center rounded-full border">
          {initials}
        </div>

        <button onClick={handleLogout}>
          <HiOutlineArrowRightStartOnRectangle className="h-6 w-6 cursor-pointer text-accent-secondary" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
