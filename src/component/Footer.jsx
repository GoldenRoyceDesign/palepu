import React from "react";
import centerlogo from '../assets/center-logo.png' // Replace with your logo path
// import { FaInstagram } from "react-icons/fa"; // Social media icons
import location from '../assets/location-vector.png'
import contactvec from '../assets/contact-vector.png'
// import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="text-white py-5" style={{ background: '#134C79' }}>
            <div className="container">
                <div className="row text-md-start footer">
                    {/* Left Section - Logo & Social Icons */}
                    <div className="col-md-4 mb-3 mb-md-0 d-flex flex-column align-items-center" data-aos="fade-up">
                        <img src={centerlogo} alt="Company Logo" className="w-25" />
                        <h5 className="mt-4 fw-bold">PALEPU PHARMA</h5>
                        {/* <div className="d-flex gap-3 mt-2">
                            <a href="/" className="text-white fs-5 border" style={{ borderRadius: '25px', padding: '.1rem .5rem' }}>
                                <FaSquareFacebook />
                            </a>
                            <a href="/" className="text-white fs-5 border" style={{ borderRadius: '25px', padding: '.1rem .5rem' }}>
                                <FaSquareXTwitter />
                            </a>
                            <a href="/" className="text-white fs-5 border" style={{ borderRadius: '25px', padding: '.1rem .5rem' }}>
                                <FaInstagram />
                            </a>
                        </div> */}
                    </div>

                    {/* Middle Section - Quick Links */}
                    <div className="col-md-4 mb-3 mb-md-0 d-flex flex-column align-items-center" data-aos="fade-up">
                        <h5 className="fw-bold">QUICK LINKS</h5>
                        <ul className="list-unstyled d-flex flex-column gap-3 mt-2">
                            <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="/management" className="text-white text-decoration-none">Management</a></li>
                            <li><a href="/weborder" className="text-white text-decoration-none">Web Orders</a></li>
                            <li><a href="/location" className="text-white text-decoration-none">Locations</a></li>
                            <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Right Section - Contact Info */}
                    <div className="col-md-4 d-flex flex-column align-items-center" data-aos="fade-up">
                        <div className="d-flex flex-column align-items-start">
                            <h5 className="fw-bold">PALEPU PHARMA</h5>
                            <p className="mb-1 mt-2">Mylapore, Chennai Branch</p>
                            <p className="mb-1">Palepu Pharma Distributions Pvt. Ltd</p>
                            <img src={location} alt='location-vector-image' className='img-fluid mt-3' />
                            <p className="mb-1 mt-2">
                                No.1, Ramachandra Road, <br />
                                Mylapore, Chennai - 600004.
                            </p>
                            <img src={contactvec} alt='contact-vector-image' className='img-fluid mt-3' />
                            <p className="mb-0 mt-2">Ph: 044-4897 5823</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <hr className="border-white mt-4" />
                <div className="text-center">
                    <p className="mb-0">Copyright ©2014 PPPL all rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
