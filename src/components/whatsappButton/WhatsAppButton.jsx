import React from "react";
import "./whatsappbutton.css";
import { PiWhatsappLogoBold } from "react-icons/pi"; // or use FaWhatsapp from react-icons/fa

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
        <PiWhatsappLogoBold
          className="whatsapp-logo"
          title="Contact us on WhatsApp"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
