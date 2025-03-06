const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Saiego. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#577D73", // Dark Green
    color: "#E5D0CF", // Soft Pink
    textAlign: "center",
    padding: "15px",
    position: "fixed",
    bottom: "0",
    width: "100%",
    fontFamily: "'Poppins', sans-serif",
  },
  text: {
    margin: 0,
    fontSize: "1rem",
  },
};

export default Footer;
