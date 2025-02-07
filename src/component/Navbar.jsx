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
        { from: 'bot', text: 'Hello! What is your name?', timestamp: new Date().toLocaleTimeString() }
    ]);
    const [userName, setUserName] = useState('');
    const [userBranchChoice, setUserBranchChoice] = useState(null);

    const chatContainerRef = useRef(null);

    const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };

    const handleSendMessage = () => {
        if (userMessage.trim()) {
            const timestamp = new Date().toLocaleTimeString();

            setChatHistory((prevHistory) => [
                ...prevHistory,
                { from: 'user', text: userMessage, timestamp }
            ]);
            const userInput = userMessage.toLowerCase().trim();
            setUserMessage('');

            if (!userName) {
                setChatHistory((prevHistory) => [
                    ...prevHistory,
                    { from: 'bot', text: `Nice to meet you, ${userMessage}! How can I assist you today?`, timestamp }
                ]);
                setUserName(userMessage);
                // Ask if the user has any queries or wants to contact a branch
                setChatHistory((prevHistory) => [
                    ...prevHistory,
                    { from: 'bot', text: 'Do you have any queries, or would you like to contact a particular branch?', timestamp }
                ]);
            } else if (!userBranchChoice && (userInput.includes('contact') || userInput.includes('branch'))) {
                setChatHistory((prevHistory) => [
                    ...prevHistory,
                    { from: 'bot', text: 'Do you need to contact a branch? (Yes/No)', timestamp }
                ]);
            } else if (!userBranchChoice && userInput === 'yes') {
                setChatHistory((prevHistory) => [
                    ...prevHistory,
                    { from: 'bot', text: 'Please choose a branch you would like to contact:', timestamp }
                ]);
            } else if (!userBranchChoice && userInput === 'no') {
                setChatHistory((prevHistory) => [
                    ...prevHistory,
                    { from: 'bot', text: 'Okay, feel free to ask anything else!', timestamp }
                ]);
            } else if (!userBranchChoice) {
                setChatHistory((prevHistory) => [
                    ...prevHistory,
                    { from: 'bot', text: "I didn't quite get that. Could you rephrase?", timestamp }
                ]);
            }

        }
    };

    const handleBranchSelection = (branch) => {
        const timestamp = new Date().toLocaleTimeString();
        setUserBranchChoice(branch);

        const emailSent = sendBranchEmail(branch); // Simulate sending email
        const botResponse = emailSent
            ? `You have selected the ${branch} branch. A representative will contact you within 24 hours.`
            : `Sorry, we couldn't process your request to contact the ${branch} branch at the moment. Please try again later.`;

        setChatHistory((prevHistory) => [
            ...prevHistory,
            { from: 'user', text: branch, timestamp },
            { from: 'bot', text: botResponse, timestamp }
        ]);
    };

    const sendBranchEmail = (branch) => {
        // Simulate sending an email alert
        console.log(`Sending email alert to ${branch} branch.`);
        return true;
    };

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
                                width: '320px',
                                height: '500px',
                                background: 'linear-gradient(135deg, #007bff, #0056b3)',
                                borderRadius: '15px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                display: 'flex',
                                flexDirection: 'column',
                                zIndex: 9999,
                                color: '#fff',
                            }}
                        >
                            <div
                                style={{
                                    padding: '10px',
                                    backgroundColor: '#003f7f',
                                    color: 'white',
                                    textAlign: 'center',
                                    borderTopLeftRadius: '15px',
                                    borderTopRightRadius: '15px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Chatbot
                                <button
                                    onClick={toggleChatbot}
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        color: 'white',
                                        position: 'absolute',
                                        right: '15px',
                                        top: '10px',
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
                                    backgroundColor: '#f8f9fa',
                                    borderRadius: '0 0 15px 15px',
                                }}
                            >
                                {chatHistory.map((message, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: message.from === 'user' ? 'flex-end' : 'flex-start',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        <div
                                            style={{
                                                maxWidth: '75%',
                                                padding: '10px',
                                                borderRadius: '15px',
                                                backgroundColor: message.from === 'user' ? '#007bff' : '#f1f1f1',
                                                color: message.from === 'user' ? 'white' : 'black',
                                                textAlign: 'left',
                                            }}
                                        >
                                            <p style={{ margin: 0 }}>{message.text}</p>
                                        </div>
                                        <small
                                            style={{
                                                marginTop: '5px',
                                                fontSize: '10px',
                                                color: '#666',
                                                textAlign: message.from === 'user' ? 'right' : 'left',
                                            }}
                                        >
                                            {message.timestamp}
                                        </small>
                                    </div>
                                ))}

                                {chatHistory.some((msg) => msg.text.includes('choose a branch')) && !userBranchChoice && (
                                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                        {['Chennai', 'Coimbatore', 'Trichy'].map((branch) => (
                                            <button
                                                key={branch}
                                                onClick={() => handleBranchSelection(branch)}
                                                style={{
                                                    margin: '5px',
                                                    padding: '5px 15px',
                                                    borderRadius: '20px',
                                                    border: 'none',
                                                    backgroundColor: '#007bff',
                                                    color: 'white',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                {branch}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    padding: '10px',
                                    backgroundColor: '#f8f9fa',
                                    borderTop: '1px solid #ddd',
                                    borderBottomLeftRadius: '15px',
                                    borderBottomRightRadius: '15px',
                                }}
                            >
                                <input
                                    type="text"
                                    value={userMessage}
                                    onChange={(e) => setUserMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    style={{
                                        flex: 1,
                                        padding: '10px',
                                        borderRadius: '20px',
                                        border: '1px solid #ccc',
                                        outline: 'none',
                                        marginRight: '10px',
                                    }}
                                />
                                <button
                                    onClick={handleSendMessage}
                                    style={{
                                        padding: '10px 15px',
                                        borderRadius: '20px',
                                        border: 'none',
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        cursor: 'pointer',
                                    }}
                                >
                                    ➤
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