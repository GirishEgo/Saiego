import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../assets/logo.png";
 import "./Navbar.css"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Function to toggle menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Function to close menu when clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  // Function to close menu when resizing screen
  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setMenuOpen(false);
    }
  };

  // Add event listeners for clicking outside & resizing
  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      {/* Left Side - Logo & Brand */}
      <div className="logo-container">
        {/* <img src={logo} alt="Saiego Logo" className="logo" /> */}
        <h2 className="brand">Saiego</h2>
      </div>

      {/* Desktop Nav Links */}
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" className="nav-link">
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? (
          <FiX size={30} color="#E5D0CF" />
        ) : (
          <FiMenu size={30} color="#E5D0CF" />
        )}
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef} className={`menu ${menuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={toggleMenu}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources" onClick={toggleMenu}>
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
