import React, { useEffect } from 'react'
import weborder from '../assets/weborder.png'
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Chatbot from '../component/Chatbot';

const Weborder = () => {

  useEffect(() => {
        AOS.init({ duration: 1000, once: false });
      }, []);

  const branches = [
    {
      name: "Mylapore Branch",
      location: "Chennai, Tamil Nadu",
      orderLinks: [
        { name: "Order Link 1", url: "http://202.83.25.111/onlineorder/", color: "#dbe0fe", borderColor: "#0123FF" },
        { name: "Order Link 2", url: "http://210.18.182.18/onlineorder/", color: "#e6d1f0", borderColor: "#8F26B8" },
      ],
    },
    {
      name: "Mogappair Branch",
      location: "Chennai, Tamil Nadu",
      orderLinks: [
        { name: "Order Link 1", url: "http://210.18.177.236/onlineorder/", color: "#dbe0fe", borderColor: "#0123FF" },
        { name: "Order Link 2", url: "http://49.207.180.145/onlineorder/", color: "#e6d1f0", borderColor: "#8F26B8" },
      ],
    },
    {
      name: "Tambaram Branch",
      location: "Chennai, Tamil Nadu",
      orderLinks: [
        { name: "Order Link 1", url: "http://210.18.133.36:8080/liveordertab/", color: "#dbe0fe", borderColor: "#0123FF" },
        { name: "Order Link 2", url: "http://49.207.184.140:8080/liveordertab/", color: "#e6d1f0", borderColor: "#8F26B8" },
      ],
    },
    {
      name: "Madurai Branch",
      location: "Tamil Nadu",
      orderLinks: [
        { name: "Order Link 1", url: "http://103.219.207.84/onlineorder/", color: "#dbe0fe", borderColor: "#0123FF" },
      ],
    },
    {
      name: "Coimbatore Branch",
      location: "Tamil Nadu",
      orderLinks: [
        { name: "Order Link 1", url: "http://49.204.233.88:8080/liveorder", color: "#dbe0fe", borderColor: "#0123FF" },
      ],
    },
    {
      name: "Kanchipuram Branch",
      location: "Tamil Nadu",
      orderLinks: [
        { name: "Order Link 1", url: "https://www.palepukpmweborder.com/", color: "#dbe0fe", borderColor: "#0123FF" },
        { name: "Order Link 2", url: "http://202.170.206.232/liveorder/", color: "#e6d1f0", borderColor: "#8F26B8" },
      ],
    },
  ];

  return (
    <>
      <section>
        <div className='weborder p-5'>
          <h1 className='text-white'><strong>Orders Product Online</strong></h1>
        </div>

        <div className='container mt-5'>
          <p data-aos="fade-right">Cardiology, Neurology, Nephrology, Diabetology, Pediatrics, Anti-Infectives, Nutraceuticals
            and many more pharmaceutical products available with us</p>

          <div className="row">
            <div className="col-12 col-lg-8 mt-4">
              {branches.map((branch, index) => (
                <div key={index} className="branch-row py-3 border-bottom" data-aos="zoom-in-right">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center branch-order">
                    <div className="mb-3 mb-md-0 branch-col1">
                      <h5 className="fw-bold">{branch.name}</h5>
                    </div>
                    <div className="mb-3 mb-md-0 branch-col2">
                      <p className="mb-0">{branch.location}</p>
                    </div>
                    <div className="d-flex gap-2 branch-col3">
                      {branch.orderLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer" // For security
                          className="btn btn-outline-primary btn-sm rounded-5 pe-3 ps-3"

                          style={{
                            backgroundColor: link.color,
                            border: `1px solid ${link.borderColor}`,
                            color: link.borderColor,
                          }}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Help Section */}
              <div className="mt-5 mb-5" data-aos="fade-right">
                <h6 className="fw-bold">
                  Unsure about making
                  online orders?
                </h6>
                <p>
                  Contact our staff and we’ll help you place your first online order at
                  the nearest branch.
                </p>
              </div>
            </div>

            {/* Info Section */}
            <div className="col-12 col-lg-4 mt-lg-0 mb-4" data-aos="fade-up">
              <div className="info-box p-4 text-center rounded">
                <img
                  src={weborder} // Replace with your image path
                  alt="Online Pharmacy"
                  className="img-fluid mb-3"
                />
                <div className='text-center p-4' style={{ background: '#317CBF' }}>
                  <h5 className="fw-bold">"Your Trusted Online Pharmacy"</h5>
                  <hr></hr>
                  <h6 className="text-white">Quick, Easy, Reliable!</h6>
                  <Link to='/contact'>
                    <button className="btn-custom mt-4">Contact Us</button></Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>


      <Chatbot />
    </>
  )
}

export default Weborder