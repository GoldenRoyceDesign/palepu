import React, { useEffect, useState } from 'react'
import contact from '../assets/contact.png'
import logo from '../assets/logo.png'
import location from '../assets/location-vector.png'
import contactvec from '../assets/contact-vector.png'
import AOS from "aos";
import "aos/dist/aos.css";
import Chatbot from '../component/Chatbot'

const Contact = () => {

  useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });

  const [modal, setModal] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModal({ show: true, message: "Form submitted successfully!", type: "success" });
        setFormData({ name: "", email: "", phone: "", reason: "" });
      } else {
        setModal({ show: true, message: "Failed to submit the form", type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setModal({ show: true, message: "An error occurred. Please try again later.", type: "error" });
    }
  };

  return (
    <>
      <div className='contact'>
        <div className='row d-flex justify-content-center align-items-center pt-5 pb-4'>
          <div className='col-md-6' data-aos="zoom-in-up">
            <img src={contact} alt='contact-image' className='img-fluid' />
          </div>
          <div className='col-md-6 p-4' data-aos="fade-up">
            <h1><strong>Don’t Let Your Health
              Take a Backseat!</strong></h1>
            <p>Reference site about Lorem Ipsum, giving information on its origins, as well
              as a random Lipsum generator.</p>
          </div>
        </div>


        <section style={{ background: '#EFFAFE' }}>
          <div className="container pt-5 pb-5">
            <h4 className='fw-bold' data-aos="fade-right">Service in the Cause of Medicine
              and Humanity.</h4>
          </div>

          <div className="contact-form p-5" data-aos="fade-up">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                {[
                  { label: "Name", type: "text", name: "name" },
                  { label: "E - mail", type: "email", name: "email" },
                  { label: "Phone Number", type: "tel", name: "phone" },
                ].map((field, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <label className="form-label mb-4">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="form-control rounded-1"
                      required
                    />
                  </div>
                ))}
              </div>

              <div className="row">
                <div className="col-md-4 mb-4">
                  <label className="form-label mb-4">Reason</label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="form-control rounded-1"
                    required
                  >
                    <option value="">Select a reason</option>
                    <option value="Orders">Orders</option>
                    <option value="Queries">Queries/Escalations</option>
                    <option value="Accounts">Accounts</option>
                    <option value="HR">HR</option>
                  </select>
                </div>
              </div>

              <div className="text-center mt-4">
                <button type="submit" className="btn-custom px-5">
                  SUBMIT
                </button>
              </div>
            </form>

            {/* Modern Bootstrap Modal */}
            {modal.show && (
              <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }} tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content text-center" style={{ borderRadius: "12px", padding: "20px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)",background: "#074881", color: 'white' }}>
                    <div className="modal-body">
                      <h5 className="fw-bold">{modal.type === "success" ? "Success!" : "Error"}</h5>
                      <p>{modal.message}</p>
                    </div>
                    <div className="modal-footer border-0 d-flex justify-content-center align-items-center">
                      <button className="btn-custom rounded-3" onClick={() => setModal({ show: false })}>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>

        <section style={{ background: '#EFFAFE' }}>
          <div className='container pt-5 pb-5'>
            {/* Extra Section */}
            <div className="mt-4 mb-4" data-aos="fade-right">
              <h5><strong>Interested in working with Palepu Pharma?</strong></h5>
              <p>
                Please send us a mail of your CV and small brief about yourself to{" "}
                <a href="mailto:hr@palepugroup.com">hr@palepugroup.com</a>
              </p>
              <a href="/" className="btn-custom">
                GET IN TOUCH
              </a>
            </div>

            <div className='w-100 mt-5' data-aos="fade-right">
              <img
                src={logo}
                alt="PPD Logo"
                className="mb-3"
              />
            </div>

            {/* Footer Info */}
            <div className="footer-info mt-4 p-4" data-aos="zoom">
              <div className='row'>
                <div className='col-md-4 d-flex flex-column align-items-center pt-4'>
                  <p>
                    <strong>Registered Office:</strong> Mylapore, Chennai Branch
                    <br />
                    Palepu Pharma Distributors Pvt. Ltd.,
                  </p>
                </div>
                <div className='col-md-4 d-flex flex-column align-items-center pt-4 gap-3'>
                  <img src={location} alt='location-vector-image' className='img-fluid' />
                  <p>No: 1, Ramachandra Road, <br></br> Mylapore, Chennai - 600004.</p>
                </div>
                <div className='col-md-4 d-flex flex-column align-items-center pt-4 gap-3'>
                  <img src={contactvec} alt='contact-vector-image' className='img-fluid' />
                  <p>
                    <strong>Ph:</strong> 044-4867 5533
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


      <Chatbot />
    </>
  )
}

export default Contact