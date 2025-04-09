import React, { useEffect } from "react";
import "./CatalogPage.css";

const CatalogPage = () => {
  const pdfs = [
    {
      title: "Space Heaters and Stem Thermostats",
      pdfUrl: "/catalogs/GIRISH EGO PANEL HEATING CATALOGS.pdf",
      imageUrl: "/catalogs/GEC-CAT-21-01-23-pages-images-0.jpg",
    },
    {
      title: "Enclosure Heaters , Din Rail Thermostats and Hygrostats",
      pdfUrl: "/catalogs/GIRISH-EGO-CONTROLLING CATALOGS.pdf",
      imageUrl: "/catalogs/GEC New Catalog 04 02 2025AA-pages-1.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".pdf-item");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="catalog-page">
      {pdfs.map((pdf, index) => (
        <div className="pdf-item" key={index}>
          <h3>{pdf.title}</h3>
          <div className="catalog-holder">
            <img
              src={pdf.imageUrl}
              alt={`Preview of ${pdf.title}`}
              className="pdf-preview-image"
            />
            <a href={pdf.pdfUrl} download className="download-btn">
              Download PDF
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogPage;
