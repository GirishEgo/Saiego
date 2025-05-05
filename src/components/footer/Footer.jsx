import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsPageLoaded(true);
      }, 300);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const navLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About Us", href: "/about" },
    { id: 3, name: "Contact Us", href: "/contact" },
  ];

  const contactInfo = [
    {
      id: 1,
      label: "Phone",
      values: [
        { number: "+91 22 22068032", link: "tel:+912222068032" },
        { number: "+91 22 22083857", link: "tel:+912222083857" },
      ],
    },
    {
      id: 2,
      label: "WhatsApp",
      value: "+91 9769281724",
      link: "https://wa.me/919769281724",
    },
    {
      id: 3,
      label: "Email",
      value: "sales@saiego.com",
      link: "mailto:sales@saiego.com",
    },
    {
      id: 4,
      label: "Email",
      value: "info@saiego.com",
      link: "mailto:info@saiego.com",
    },
  ];

  const address = [
    "Saiegotherm India.",
    "31, Tavawala Building, 147, Lohar Chawl, Kalbadevi, Mumbai, Maharashtra 400002",
  ];

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
  });

  if (!isPageLoaded) return null;

  return (
    <footer className="footer">
      <motion.div className="footer-logo" {...fadeUp(0.1)}>
        <img style={{width:"10rem"}} src="Logo.png" alt="" />
      </motion.div>

      <motion.p className="footer-tagline" {...fadeUp(0.2)}>
        We are trusted for more than 45 years +
      </motion.p>

      <motion.nav className="footer-nav" {...fadeUp(0.3)}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </motion.nav>

      <motion.div className="footer-address" {...fadeUp(0.4)}>
        {address.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </motion.div>

      <motion.div className="footer-contact" {...fadeUp(0.5)}>
        {contactInfo.map((info) => (
          <div key={info.id} className="contact-footerholder">
            {info.label}:
            {info.values ? (
              info.values.map((phone, idx) => (
                <p key={idx}>
                  <a href={phone.link} className="phone-link">
                    {phone.number}
                  </a>
                  {","}
                </p>
              ))
            ) : (
              <p>
                <a
                  href={info.link}
                  className={`${info.label.toLowerCase()}-link`}
                >
                  {info.value}
                </a>
              </p>
            )}
          </div>
        ))}
      </motion.div>

      {/* ✅ Fixed: Animation added here */}
      <motion.div className="footer-copyright" {...fadeUp(0.6)}>
        <p>
          &copy; {new Date().getFullYear()} Saiegotherm India. All rights
          reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
