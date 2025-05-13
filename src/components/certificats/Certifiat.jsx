import React from "react";
import { motion } from "framer-motion";
import "./cetficat.css";

import img1 from "./certifat-images/certImg (1).png";
// import img2 from "./certifat-images/certImg (2).png";
// import img3 from "./certifat-images/certImgjpg (1).jpg";
import img4 from "./certifat-images/certImgjpg (2).jpg";
import img5 from "./certifat-images/certImgjpg (3).jpg";

const Certifiat = () => {
  const certificates = [
    { src: img1, name: "ISO Certification" },
    // { src: img2, name: "BIS Certification" },
    // { src: img3, name: "ISI Certification" },
    { src: img4, name: "RoHS Certification" },
    { src: img5, name: "CE Certification" },
  ];

  return (
    <motion.div
      className="cartificate-Container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="line"></div>
      <h2
        style={{
          fontSize: "50px",
          color: "#284328",
          textTransform: "uppercase",
        }}
      >
        Certification
      </h2>
      <div className="line"></div>

      <div className="certoficat_holder">
        <div className="certfict_imgsvontainer">
          <motion.div
            className="Certificat-img"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            viewport={{ once: true }}
          >
            {certificates.map(({ src, name }) => (
              <motion.div
                key={name}
                className="certificate-item"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src={src}
                  alt={name}
                  title={name}
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifiat;
