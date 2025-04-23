import React from "react";
import "./whatsappbutton.css";

const WhatsAppButton = () => {
  const phoneNumber = "9769281724";

  return (
    <div>
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="whatsapp-logo"
          title="Contact us on WhatsApp"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
  