// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Chatbot = () => {
//   const [step, setStep] = useState("start");
//   const [showChat, setShowChat] = useState(false);
//   const [selectedDepartment, setSelectedDepartment] = useState(null);
//   const [selectedBranch, setSelectedBranch] = useState(null);

//   const departments = [
//     "Queries or Escalations",
//     "HR",
//     "Web Orders",
//     "Accounts",
//     "Whatsapp",
//   ];

//   const branches = {
//     "Mylapore": { phone: "9940018292", email: "sales@palepugroup.com" },
//     "Mogappair": { phone: "9445345025", email: "ambattur@palepugroup.com" },
//     "Tambaram": { phone: "8925926686", email: "tambaram@palepugroup.com" },
//     "Madurai": { phone: "8870388604", email: "vmahesh@palepugroup.com" },
//     "Coimbatore": { phone: "(0422) 3508098", email: "pppl_cbe@yahoo.in" },
//   };

//   const whatsappBranches = [
//     { name: "Mylapore", phone: "9940018292" },
//     { name: "Mogappair", phone: "9445345025" },
//     { name: "Tambaram", phone: "8925926686" },
//     { name: "Madurai", phone: "8870388604" },
//   ];

//   return (
//     <div className="chatbot-container">
//       {!showChat && (
//         <button className="chat-toggle" onClick={() => setShowChat(true)}>
//           💬 Chat
//         </button>
//       )}

//       {showChat && (
//         <motion.div
//           className="chat-window"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <div className="chat-header">
//             <span>Chatbot</span>
//             <button onClick={() => setShowChat(false)}>✖</button>
//           </div>

//           <div className="chat-body">
//             {step === "start" && (
//               <>
//                 <p className="fw-bold">👋 Welcome to Palepu Pharma!</p>
//                 <p>How can we assist you today? Please choose the department you’d like to contact:</p>
//                 {departments.map((dept) => (
//                   <button
//                     key={dept}
//                     onClick={() => {
//                       setSelectedDepartment(dept);
//                       setStep(dept === "WhatsApp" ? "selectWhatsappBranch" : "selectBranch");
//                     }}
//                   >
//                     {dept}
//                   </button>
//                 ))}
//               </>
//             )}

//             {step === "selectBranch" && selectedDepartment && (
//               <>
//                 <p>Great! Now, please select your preferred branch:</p>
//                 {Object.keys(branches).map((branch) => (
//                   <button
//                     key={branch}
//                     onClick={() => {
//                       setSelectedBranch(branch);
//                       setStep("branchDetails");
//                     }}
//                   >
//                     {branch} Branch
//                   </button>
//                 ))}
//                 <button onClick={() => setStep("start")}>⬅️ Go Back</button>
//               </>
//             )}

//             {step === "branchDetails" && selectedBranch && (
//               <>
//                 <p>Here are the contact details for your selected branch:</p>
//                 <p><strong>Branch:</strong> {selectedBranch} Branch</p>
//                 <p><strong>Email:</strong> {branches[selectedBranch].email}</p>
//                 <p><strong>Phone/WhatsApp:</strong> {branches[selectedBranch].phone}</p>

//                 <p><strong>Need more help?</strong></p>
//                 <p>If you’re unsure or need additional information, feel free to visit our <a href="/contact">Contact Us</a> page.</p>

//                 <button onClick={() => setStep("selectBranch")}>🔙 Choose Another Branch</button>
//                 <button onClick={() => setStep("end")}>🔚 End Chat</button>
//               </>
//             )}


//             {step === "selectWhatsappBranch" && (
//               <>
//                 <p>Select a branch to open WhatsApp chat:</p>
//                 {whatsappBranches.map((branch) => (
//                   <button
//                     key={branch.name}
//                     onClick={() => {
//                       window.open(`https://wa.me/${branch.phone}`, "_blank");
//                     }}
//                   >
//                     {branch.name} Branch
//                   </button>
//                 ))}
//                 <button onClick={() => setStep("start")}>⬅️ Go Back</button>
//               </>
//             )}

//             {step === "end" && (
//               <>
//                 <p>Thank you for contacting Palepu Pharma! We’re here to help. Have a great day! 😊</p>
//                 <button onClick={() => setStep("start")}>🔄 Start Over</button>
//               </>
//             )}
//           </div>
//         </motion.div>
//       )}

//       <style>{`
//         .chatbot-container {
//           position: fixed;
//           bottom: 20px;
//           right: 20px;
//         }
//         .chat-toggle {
//           background-color: #134C79;
//           color: white;
//           border: none;
//           padding: 10px 20px;
//           border-radius: 50px;
//           cursor: pointer;
//           font-size: 16px;
//         }
//         .chat-window {
//           width: 300px;
//           background: white;
//           box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//           border-radius: 10px;
//           overflow: hidden;
//           position: fixed;
//           bottom: 80px;
//           right: 20px;
//           font-size: 14px;
//         }
//         .chat-header {
//           background: #134C79;
//           color: white;
//           padding: 10px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }
//         .chat-body {
//           padding: 15px;
//           display: flex;
//           flex-direction: column;
//         }
//         .chat-body button {
//           background: #007bff;
//           color: white;
//           border: none;
//           padding: 8px 12px;
//           margin: 5px 0;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .chat-body button:hover {
//           background: #0056b3;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Chatbot;



import React, { useState } from "react";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [step, setStep] = useState("start");
  const [showChat, setShowChat] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const departments = [
    "Queries or Escalations",
    "HR",
    "Web Orders",
    "Accounts",
    "WhatsApp",
  ];

  const branches = {
    "Mylapore": { phone: "9940018292", email: "sales@palepugroup.com" },
    "Mogappair": { phone: "9445345025", email: "ambattur@palepugroup.com" },
    "Tambaram": { phone: "8925926686", email: "tambaram@palepugroup.com" },
    "Madurai": { phone: "8870388604", email: "vmahesh@palepugroup.com" },
    "Coimbatore": { phone: "(0422) 3508098", email: "pppl_cbe@yahoo.in" },
  };

  const whatsappBranches = [
    { name: "Mylapore", phone: "9940018292" },
    { name: "Mogappair", phone: "9445345025" },
    { name: "Tambaram", phone: "8925926686" },
    { name: "Madurai", phone: "8870388604" },
  ];

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
                <p className="fw-bold">👋 Welcome to Palepu Pharma!
                </p>
                <p>
                  How can we assist you today? Please choose the department you’d like to contact:
                </p>
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => {
                      setSelectedDepartment(dept);
                      setStep(dept === "WhatsApp" ? "selectWhatsappBranch" : "selectBranch");
                    }}
                  >
                    {dept}
                  </button>
                ))}
              </>
            )}

            {step === "selectBranch" && selectedDepartment && (
              <>
                <p>Great! Now, please select your preferred branch:</p>
                {Object.keys(branches).map((branch) => (
                  <button
                    key={branch}
                    onClick={() => {
                      setSelectedBranch(branch);
                      setStep("branchDetails");
                    }}
                  >
                    {branch} Branch
                  </button>
                ))}
                <button onClick={() => setStep("start")}>⬅️ Go Back</button>
              </>
            )}

            {step === "branchDetails" && selectedBranch && (
              <>
                <p>Here are the contact details for your selected branch:</p>
                <p><strong>Branch:</strong> {selectedBranch} Branch</p>
                <p><strong>Email:</strong> {branches[selectedBranch].email}</p>
                <p><strong>Phone/WhatsApp:</strong> {branches[selectedBranch].phone}</p>

                <p><strong>Need more help?</strong></p>
                <p>
                  If you’re unsure or need additional information, feel free to visit our <a href="/contact">Contact Us</a> page.
                </p>

                <button onClick={() => setStep("selectBranch")}>🔙 Choose Another Branch</button>
                <button onClick={() => setStep("end")}>🔚 End Chat</button>
              </>
            )}

            {step === "selectWhatsappBranch" && (
              <>
                <p>Select a branch to open WhatsApp chat:</p>
                {whatsappBranches.map((branch) => (
                  <button
                    key={branch.name}
                    onClick={() => {
                      window.open(`https://wa.me/${branch.phone}`, "_blank");
                    }}
                  >
                    {branch.name} Branch
                  </button>
                ))}
                <button onClick={() => setStep("start")}>⬅️ Go Back</button>
              </>
            )}

            {step === "end" && (
              <>
                <p>
                  Thank you for contacting Palepu Pharma! We’re here to help. Have a great day! 😊
                </p>
                <button onClick={() => setStep("start")}>🔄 Start Over</button>
              </>
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
          font-size: 14px;
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
