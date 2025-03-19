import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Products from "../../Data/Products";
import "./Navbar.css";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle entire menu (for mobile)
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Toggle dropdown for products
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Handle product click and navigate to dynamic route
  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  // Handle clicking outside to close menu and dropdown
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  // Handle resizing (close menu on large screens)
  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setMenuOpen(false);
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      {/* Left Side - Logo & Brand */}
      <div className="logo-container">
        <h2 className="brand">Saiego</h2>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? (
          <FiX size={30} color="#E5D0CF" />
        ) : (
          <FiMenu size={30} color="#E5D0CF" />
        )}
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li
          className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className={`nav-item ${
            location.pathname === "/about" ? "active" : ""
          }`}
          onClick={() => navigate("/about")}
        >
          About
        </li>
        <li
          className={`nav-item ${
            location.pathname.includes("/products") ? "active" : ""
          }`}
          ref={dropdownRef}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          onClick={toggleDropdown}
        >
          Products ▾
          {dropdownOpen && (
            <ul className="dropdown-menu">
              {Products.map((product) => (
                <li key={product.id}>
                  <span
                    className="dropdown-item"
                    onClick={() => handleProductClick(product.id)}
                  >
                    {product.title}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li
          className={`nav-item ${
            location.pathname === "/resources" ? "active" : ""
          }`}
          onClick={() => navigate("/resources")}
        >
          Resources
        </li>
        <li
          className={`nav-item ${
            location.pathname === "/contact" ? "active" : ""
          }`}
          onClick={() => navigate("/contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
