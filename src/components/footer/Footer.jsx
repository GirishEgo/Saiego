import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const navLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About Us", href: "/About-us" },
    { id: 3, name: "Contact Us", href: "/Contact-us" },
    { id: 4, name: "Catalogs", href: "/resources/catalogue-download" },
    { id: 5, name: "Heating", href: "/products/Heating" },
    { id: 6, name: "Controling", href: "/products/Control" },
    { id: 6, name: "Accessories", href: "/products/Accessories" },
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
      value: "+91 9769281724 ",
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

  return (
    <footer className="footer">
      {/* Logo */}
      <motion.div
        className="footer-logo"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Logo image placeholder */}
        <h6>Saiego</h6>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="footer-tagline"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        We are trusted for more than 45 years +
      </motion.p>

      {/* Navigation Links */}
      <motion.nav
        className="footer-nav"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Address */}
      <motion.div
        className="footer-address"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
      >
        {address.map((line, index) => (
          <div key={index}>
            <p>{line}</p>
          </div>
        ))}
      </motion.div>

      {/* Contact Information */}
      <motion.div
        className="footer-contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        viewport={{ once: true }}
      >
        {contactInfo.map((info) => (
          <div key={info.id}>
            <div className="contact-footerholder">
              {info.label}:
              {info.values ? (
                info.values.map((phone, idx) => (
                  <div key={idx}>
                    <p>
                      <a href={phone.link} className="phone-link">
                        {phone.number}
                      </a>
                      {","}
                    </p>
                  </div>
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
          </div>
        ))}
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="footer-copyright"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        viewport={{ once: true }}
      >
        <p>
          &copy; {new Date().getFullYear()} Saiegotherm India. All rights
          reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
