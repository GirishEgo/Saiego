import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Products from "../../Data/Products";
import Control from "../../Data/Control";
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
        <Link to={"/"}>
          <li
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </li>
        </Link>
        <Link to={"/about"}>
          <li
            className={`nav-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </li>
        </Link>

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
              {Control.map((product) => (
                <li key={product.id}>
                  <span
                    className="dropdown-item"
                    onClick={() => handleProductClick(product.id)}
                  >
                    {product.name}
                  </span>
                  <ul className="subdrop-down">
                    {product.subProducts.map((sub) => (
                      <li className="sub-drop-down-list" key={sub.id}>
                        {sub.subHeading ? ( // Check if it's a sub-heading section
                          <>
                            <div className="dropdown-heading">
                              {sub.subHeading}
                            </div>
                            <ul className="subDeopDownlsit">
                              {sub.subProducts.map((nestedSub) => (
                                <li key={nestedSub.id}>
                                  <Link
                                    onClick={() => setMenuOpen(false)}
                                    to={`/Products/${product.id}/${nestedSub.id}`}
                                  >
                                    {nestedSub.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <div className="linksContainer">
                            <Link
                              className="links"
                              onClick={() => setMenuOpen(false)}
                              to={`/Products/${product.id}/${sub.id}`}
                            >
                              {sub.title}
                            </Link>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
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
        <Link to={"/contact"}>
          <li
            className={`nav-item ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
