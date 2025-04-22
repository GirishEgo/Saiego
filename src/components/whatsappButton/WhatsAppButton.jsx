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
          alt="Contact us on WhatsApp"
          className="whatsapp-logo"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
