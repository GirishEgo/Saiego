import React from "react";
import { toast } from "react-toastify"; // Make sure to import toast
import { useCall } from "../../../context/CallContext"; // Adjust path as needed

const PopupModal = ({ showPopup, onClose, loading, message }) => {
  const { handleCall } = useCall(); // Access the handleCall function from context

  if (!showPopup) return null; // Don't render if showPopup is false

  // Check if the device is mobile or desktop
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const handleAction = () => {
    const email = "info@saiego.com"; // Replace with your company's email
    const phoneNumber = "+912222068032"; // Replace with your phone number

    if (isMobile) {
      // If mobile, initiate the phone call
      handleCall(phoneNumber);
    } else {
      // If desktop, try opening email client
      try {
           window.open(
             `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
             "_blank"
           );
        console.log("Opening email client...");
      } catch (error) {
        console.error("Error opening email client:", error);
        toast.warning(
          "Unable to open your email client. Please try manually.",
          {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
          }
        );
      }
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h3>Thank you for reaching out!</h3>
        <p>{message}</p>
        <div className="popup-buttons">
          <button className="call-btn" onClick={handleAction}>
            {loading ? "Processing..." : isMobile ? "Call Us" : "Mail Us"}
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
