import React, { useEffect } from "react";
import "./CatalogPage.css";

const CatalogPage = () => {
  const pdfs = [
    {
      title: "Saiego New Catalogue",
      pdfUrl: "/catalogs/SaiegoCatalogs.pdf",
      imageUrl: "/catalogs/SaiegoPDFS (1).jpg",
    },
    {
      title: "Saiego Capillary Thermostat Catalogue",
      pdfUrl: "/catalogs/SaiegoCatalogs (2).pdf",
      imageUrl: "/catalogs/SaiegoPDFS (2).jpg",
    },
    {
      title: "Energy Regulator Catalogue",
      pdfUrl: "/catalogs/SaiegoCatalogs (3).pdf",
      imageUrl: "/catalogs/SaiegoPDFS (3).jpg",
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="catalog-page">
      {pdfs.map((pdf, index) => (
        <div className="pdf-item" key={index}>
          <h3>{pdf.title}</h3>
          <div className="catalog-holder">
            {/* Preview opens PDF in new tab */}
            <a href={pdf.pdfUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={pdf.imageUrl}
                alt={`Preview of ${pdf.title}`}
                className="pdf-preview-image"
              />
            </a>

            {/* Actual download button */}
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
