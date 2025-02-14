import React from 'react';
import logo from '../assets/logo.png';
// import chatbot from '../assets/chatbot.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    // Function to handle collapse
    const handleNavLinkClick = () => {
        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show");
        }
    };



    return (
        <>
            <div className='bg-nav'></div>
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
                    <div className="collapse navbar-collapse justify-content-right" id="navbarNav">
                        <ul className="navbar-nav ms-auto d-flex gap-4">
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

                    {/* Right Side - Chatbot Icon
                    <div>
                        <a href="#chatbot" className="nav-link">
                            <img
                                src={chatbot} // Replace with your chatbot icon URL
                                alt="Chatbot"
                                style={{ height: "40px" }}
                            />
                        </a>
                    </div> */}





                </div>
            </nav>
        </>
    );
};

export default Navbar;