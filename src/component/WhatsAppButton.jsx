import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Ensure correct import

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Branches with phone numbers
  const branches = [
    { name: "Mylapore", phone: "9940018292" },
    { name: "Mogappair", phone: "9445345025" },
    { name: "Tambaram", phone: "8925926686" },
    { name: "Madurai", phone: "8870388604" },
  ];

  // Open WhatsApp chat
  const openWhatsApp = (branch) => {
    const message = `Hello! I'm interested in your services at ${branch.name} branch.`;
    const whatsappLink = `https://wa.me/${branch.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    setShowPopup(false);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        className="whatsapp-float"
        onClick={() => setShowPopup(!showPopup)}
      >
        <FaWhatsapp size={30} />
      </button>

      {/* Popup Box for Branch Selection */}
      {showPopup && (
        <div className="popup-box">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="popup-item"
              onClick={() => openWhatsApp(branch)}
            >
              {branch.name}
            </div>
          ))}
        </div>
      )}

      {/* CSS Styles */}
      <style>
        {`
          /* Floating WhatsApp Button */
          .whatsapp-float {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #25d366;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            z-index: 1000;
          }

          /* Popup Box */
          .popup-box {
            position: fixed;
            bottom: 80px;
            right: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
            padding: 10px;
            width: 180px;
            z-index: 999;
          }

          /* Popup Items */
          .popup-item {
            padding: 8px 10px;
            border-bottom: 1px solid #ddd;
            cursor: pointer;
            transition: background 0.2s;
          }

          .popup-item:last-child {
            border-bottom: none;
          }

          .popup-item:hover {
            background: #f1f1f1;
          }
        `}
      </style>
    </>
  );
};

export default WhatsAppButton;
