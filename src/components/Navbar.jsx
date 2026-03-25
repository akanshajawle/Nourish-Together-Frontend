import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";
import {
  FaUser,
  FaTachometerAlt,
  FaSignOutAlt,
  FaChevronDown,
  FaBars,
  FaHospital,
  FaHandHoldingHeart,
  FaUsers,
  FaUserShield,
} from "react-icons/fa";
import Logo from "../assets/nourish-logo.png";
import toast from "react-hot-toast";

const Navbar = ({ isDashboard = false }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    logout();
    navigate("/");
  };

  const getUserDashboard = () => {
    switch (user?.role) {
      case "donor":
        return { path: "/donor-dashboard", label: "Donor Dashboard", icon: FaHandHoldingHeart };
      case "ngo":
        return { path: "/ngo-dashboard", label: "NGO Dashboard", icon: FaHospital };
      case "volunteer":
        return { path: "/volunteer-dashboard", label: "Volunteer Dashboard", icon: FaUsers };
      case "admin":
        return { path: "/admin-dashboard", label: "Admin Dashboard", icon: FaUserShield };
      default:
        return null;
    }
  };

  const getDashboardLink = () => {
    const dashboard = getUserDashboard();
    return dashboard ? dashboard.path : "/";
  };

  const getProfileLink = () => {
    return "/profile";
  };

  const navLinks = (
    <>
      <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
        Home
      </Link>
      <Link to="/about-us" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
        About Us
      </Link>
      <Link to="/contact-us" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
        Contact Us
      </Link>
    </>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white shadow-lg z-50 ${isDashboard ? "dashboard-navbar" : ""}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link to="/" className="flex-shrink-0">
            <img
              src={Logo}
              alt="Nourish Together Logo"
              className="h-8 w-auto sm:h-10 lg:h-12"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <FaUser className="text-green-600 text-sm" />
                  </div>
                  <span className="hidden md:inline-block text-gray-700 font-medium max-w-[120px] truncate">
                    {user?.name}
                  </span>
                  <FaChevronDown
                    className={`text-gray-500 text-xs transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100 transform transition-all duration-200 ease-out z-50 ${
                    dropdownOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                  }`}
                >
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-500 capitalize">
                      {user?.role}
                    </p>
                  </div>

                  <Link
                    to={getProfileLink()}
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <FaUser className="mr-3 text-gray-400" />
                    Profile
                  </Link>

                  {(() => {
                    const userDashboard = getUserDashboard();
                    if (!userDashboard) return null;
                    const Icon = userDashboard.icon;
                    return (
                      <Link
                        to={userDashboard.path}
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <Icon className="mr-3 text-gray-400" />
                        {userDashboard.label}
                      </Link>
                    );
                  })()}

                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                  >
                    <FaSignOutAlt className="mr-3 text-gray-400" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base"
                >
                  Register
                </Link>
              </>
            )}

            <button
              className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors duration-200 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100 bg-white px-4 pb-4">
            {navLinks}
            {user && (
              <Link
                to={getDashboardLink()}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                <FaTachometerAlt className="mr-3" />
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
