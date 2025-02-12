import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Make sure this is correctly imported

const WhatsAppButton = () => {
  const phoneNumber = "919876543210"; // Replace with your number
  const message = "Hello! I'm interested in your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
