import { useState, useEffect } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import { Link } from "react-router-dom";
import { BiBorderRight } from "react-icons/bi";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Arrays for dynamic content
  const navLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About Us", href: "/about" },
    { id: 3, name: "Contact Us", href: "/contact" },
    { id: 4, name: "Catalogs", href: "/resources/catalogue-download" },
    // { id: 5, name: "Contact Us", href: "/contact" },
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
      value: "Sales@saiego.com",
      link: "mailto:Sales@saiego.com",
    },
    {
      id: 4,
      label: "Email",
      value: "Info@saiego.com",
      link: "mailto:Info@saiego.com",
    },
  ];

  const address = [
    "Saiego controls.",
    "31, Tavawala Building, 147, Lohar Chawl, Kalbadevi, Mumbai, Maharashtra 400002",
  ];

  return (
    <AnimatePresence>
      {showFooter && (
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.footer}
        >
          <div style={styles.logo}>
            <h2 style={{ color: "#ba9c9c" }}>SaiEgo</h2>
          </div>

          <div style={styles.links}>
            {navLinks.map((link) => (
              <Link key={link.id} to={link.href} style={styles.link}>
                {link.name}
              </Link>
            ))}
          </div>

          <div style={styles.contact}>
            {contactInfo.map((info) => (
              <div key={info.id} style={styles.contactItem}>
                <strong>{info.label}:</strong>
                <br />
                {info.values ? (
                  <div style={styles.contactRow}>
                    {info.values.map((val, index) => (
                      <div key={index} style={styles.contactValue}>
                        <a
                          href={val.link}
                          style={styles.contactLink}
                          // target="_blank"
                          rel="noopener noreferrer"
                        >
                          {val.number}
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <a
                    href={info.link}
                    style={styles.contactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    
                  >
                    {info.value}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div style={styles.address}>
            <strong>Address:</strong>
            {address.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <p style={styles.copy}>
            © {new Date().getFullYear()} Sai Egotherm India. All rights
            reserved.
          </p>
        </motion.footer>
      )}
    </AnimatePresence>
  );
};

const styles = {
  footer: {
    marginTop: "30px",
    backgroundColor: "#577D73",
    color: "#E5D0CF",
    textAlign: "center",
    padding: "30px 20px",
    fontFamily: "'Poppins', sans-serif",
    zIndex: "100",
    boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    marginBottom: "1rem",
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#f9d6d6",
   
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "1.5rem",
  },
  link: {
    color: "#E5D0CF",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.3s",
  },
  contact: {
    fontSize: "0.95rem",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  contactItem: {
    marginBottom: "10px",
    borderBottom: "2px solid #2f4435",
    // paddingRight:'20px'
  },
  contactRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap", // Wrap when necessary
    marginTop: "5px",
  },
  contactValue: {
    margin: "0 10px",
  },
  contactLink: {
    color: "#E5D0CF",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  address: {
    fontSize: "0.95rem",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
  },
  copy: {
    fontSize: "0.85rem",
    marginTop: "10px",
    opacity: 0.8,
  },
};

export default Footer;
