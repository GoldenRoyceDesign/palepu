import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import chatbot from '../assets/chatbot.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    // Function to handle collapse
    const handleNavLinkClick = () => {
        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show");
        }
    };

    const [showChatbot, setShowChatbot] = useState(false);
    const [userMessage, setUserMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { from: 'bot', text: 'Hello! What is your name?' } // Ask for the name first
    ]);
    const [userName, setUserName] = useState('');
    const [userBranchChoice, setUserBranchChoice] = useState(null);

    const chatContainerRef = useRef(null);

    const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };

    const handleSendMessage = () => {
        if (userMessage.trim()) {
            // Add user message to the chat history
            setChatHistory([...chatHistory, { from: 'user', text: userMessage }]);
            setUserMessage('');

            // Handle the chatbot's response based on the current conversation flow
            if (!userName) {
                // Ask for the name
                setChatHistory(prevHistory => [
                    ...prevHistory,
                    { from: 'bot', text: `Nice to meet you, ${userMessage}! How can I assist you today?` }
                ]);
                setUserName(userMessage); // Store the user's name
            } else if (!userBranchChoice && (userMessage.toLowerCase().includes('contact') || userMessage.toLowerCase().includes('branch'))) {
                // Ask if the user needs to contact a branch
                setChatHistory(prevHistory => [
                    ...prevHistory,
                    { from: 'bot', text: 'Do you need to contact a branch? (Yes/No)' }
                ]);
            } else if (!userBranchChoice && userMessage.toLowerCase() === 'yes') {
                // Show branches if the user wants to contact a branch
                setChatHistory(prevHistory => [
                    ...prevHistory,
                    { from: 'bot', text: 'Please choose a branch you would like to contact: \n1. Chennai\n2. Coimbatore\n3. Trichy' }
                ]);
            } else if (!userBranchChoice && userMessage.toLowerCase() === 'no') {
                // If user says no to branch contact
                setChatHistory(prevHistory => [
                    ...prevHistory,
                    { from: 'bot', text: 'Okay, feel free to ask anything else!' }
                ]);
            } else if (userBranchChoice === null) {
                // Default fallback if user message does not match any condition
                setChatHistory(prevHistory => [
                    ...prevHistory,
                    { from: 'bot', text: 'I didn\'t quite get that. Could you rephrase?' }
                ]);
            }
        }
    };

    const handleBranchSelection = (branch) => {
        setUserBranchChoice(branch);
        const botResponse = `You have selected the ${branch} branch. Please contact us at the following number: 123-456-7890.`;
        setChatHistory(prevHistory => [
            ...prevHistory,
            { from: 'user', text: branch },
            { from: 'bot', text: botResponse }
        ]);
    };

    // Scroll to the bottom of the chat container every time the chat history changes
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]); 

    return (
        <>
            <div className='bg-primary'></div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid me-4 ms-4">
                    {/* Left Side - Logo */}
                    <a className="navbar-brand" href="/">
                        <img
                            src={logo} // Replace with your logo URL
                            alt="Logo"
                            style={{ height: "40px" }}
                        />
                    </a>

                    {/* Toggle Button for Smaller Screens */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Center Links */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav d-flex gap-4">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link text-primary" : "nav-link"
                                    }
                                    onClick={handleNavLinkClick}
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/management"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link text-primary" : "nav-link"
                                    }
                                    onClick={handleNavLinkClick}
                                >
                                    MANAGEMENT
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/weborder"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link text-primary" : "nav-link"
                                    }
                                    onClick={handleNavLinkClick}
                                >
                                    WEB ORDERS
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/location"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link text-primary" : "nav-link"
                                    }
                                    onClick={handleNavLinkClick}
                                >
                                    LOCATIONS
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link text-primary" : "nav-link"
                                    }
                                    onClick={handleNavLinkClick}
                                >
                                    CONTACT US
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side - Chatbot Icon */}
                    <div>
                        <a href="#chatbot" className="nav-link">
                            <img
                                src={chatbot} // Replace with your chatbot icon URL
                                alt="Chatbot"
                                style={{ height: "40px" }}
                                onClick={toggleChatbot}
                            />
                        </a>
                    </div>

                    {/* Chatbot Modal */}
            {showChatbot && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        width: '300px',
                        height: '400px',
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: 9999, // Ensure it's on top of other elements
                    }}
                >
                    <div
                        style={{
                            padding: '10px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            textAlign: 'center',
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px',
                        }}
                    >
                        <strong>Chatbot</strong>
                        <button
                            onClick={toggleChatbot}
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: 'white',
                                position: 'absolute',
                                right: '10px',
                                top: '5px',
                                fontSize: '16px',
                                cursor: 'pointer',
                            }}
                        >
                            ✖
                        </button>
                    </div>
                    <div
                        ref={chatContainerRef}
                        style={{
                            flex: 1,
                            padding: '10px',
                            overflowY: 'auto',
                        }}
                    >
                        {/* Display Chat History */}
                        {chatHistory.map((message, index) => (
                            <div key={index} style={{ textAlign: message.from === 'user' ? 'right' : 'left' }}>
                                <strong>{message.from === 'user' ? 'You: ' : 'Bot: '}</strong>
                                <p>{message.text}</p>
                            </div>
                        ))}

                        {/* Branch Selection */}
                        {chatHistory.some(msg => msg.text.includes('choose a branch')) && !userBranchChoice && (
                            <div>
                                <button onClick={() => handleBranchSelection('Chennai')}>Chennai</button>
                                <button onClick={() => handleBranchSelection('Coimbatore')}>Coimbatore</button>
                                <button onClick={() => handleBranchSelection('Trichy')}>Trichy</button>
                            </div>
                        )}
                    </div>
                    <div
                        style={{
                            padding: '10px',
                            borderTop: '1px solid #ccc',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <input
                            type="text"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            placeholder="Type your message..."
                            style={{
                                width: '80%',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                            }}
                        />
                        <button
                            onClick={handleSendMessage}
                            style={{
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                padding: '10px',
                                cursor: 'pointer',
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}

                    
                </div>
            </nav>
        </>
    );
};

export default Navbar;