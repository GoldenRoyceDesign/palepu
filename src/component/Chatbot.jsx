import React, { useState } from "react";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [step, setStep] = useState("start");
  const [showChat, setShowChat] = useState(false);

  const branches = {
    Mylapore: { phone: "044-4867 5533", email: "mylapore@yourwebsite.com" },
    Corporate_Office: { phone: "044-24672711/12/13/14", email: "corporate@yourwebsite.com" },
    Mogappair: { phone: "044-26560599", email: "mogappair@yourwebsite.com" },
    Tambaram: { phone: "044-2241 1141", email: "tambaram@yourwebsite.com" },
    Madurai: { phone: "0452-258 6550, 4393462", email: "madurai@yourwebsite.com" },
    Coimbatore: { phone: "0422-4033100", email: "coimbatore@yourwebsite.com" },
    Kanchipuram: { phone: "044 2723 3710", email: "kanchipuram@yourwebsite.com" },
  };

  return (
    <div className="chatbot-container">
      {!showChat && (
        <button className="chat-toggle" onClick={() => setShowChat(true)}>
          💬 Chat
        </button>
      )}

      {showChat && (
        <motion.div
          className="chat-window"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="chat-header">
            <span>Chatbot</span>
            <button onClick={() => setShowChat(false)}>✖</button>
          </div>

          <div className="chat-body">
            {step === "start" && (
              <>
                <p>👋 Hi! How can I help you?</p>
                <button onClick={() => setStep("findBranch")}>
                  📍 Find a Branch
                </button>
                <button onClick={() => (window.location.href = "/contact")}>
                  📞 Contact Us
                </button>
              </>
            )}

            {step === "findBranch" && (
              <>
                <p>Which branch are you looking for?</p>
                {Object.keys(branches).map((branch) => (
                  <button key={branch} onClick={() => setStep(branch)}>
                    {branch}
                  </button>
                ))}
                <button onClick={() => setStep("start")}>⬅️ Go Back</button>
              </>
            )}

            {Object.keys(branches).map(
              (branch) =>
                step === branch && (
                  <>
                    <p>📍 {branch} Branch</p>
                    <p>📞 {branches[branch].phone}</p>
                    <p>📧 {branches[branch].email}</p>
                    <button onClick={() => setStep("findBranch")}>
                      🔙 Choose Another Branch
                    </button>
                    <button onClick={() => setStep("start")}>
                      🔚 End Chat
                    </button>
                  </>
                )
            )}
          </div>
        </motion.div>
      )}

      <style>{`
        .chatbot-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
        }
        .chat-toggle {
          background-color: #134C79;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 50px;
          cursor: pointer;
          font-size: 16px;
        }
        .chat-window {
          width: 300px;
          background: white;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          position: fixed;
          bottom: 80px;
          right: 20px;
        }
        .chat-header {
          background: #134C79;
          color: white;
          padding: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .chat-body {
          padding: 15px;
          display: flex;
          flex-direction: column;
        }
        .chat-body button {
          background: #007bff;
          color: white;
          border: none;
          padding: 8px 12px;
          margin: 5px 0;
          border-radius: 5px;
          cursor: pointer;
        }
        .chat-body button:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
