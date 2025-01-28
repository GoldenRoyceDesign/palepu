import React, { useState } from 'react'
import contact from '../assets/contact.png'
import logo from '../assets/logo.png'
import location from '../assets/location-vector.png'
import contactvec from '../assets/contact-vector.png'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    companyAddress: '',
    license: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          companyName: '',
          companyAddress: '',
          license: '',
        });
      } else {
        alert('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <div className='container mt-5 contact'>
        <div className='row d-flex justify-content-between'>
          <div className='col-md-7 mb-4'>
            <div className='d-flex align-items-center gap-3'>
              <h1>We Are Here To Help You!</h1>
              <img src={contact} alt='contact-image' className='img-fluid' />
            </div>

            <p>Quick Links</p>

            <div className="row">
              {/* Quick Link Cards */}
              {[
                {
                  title: "Existing Retailers",
                  content:
                    "Interested in ordering online? Leave us a message at support@palepugroup.com and our support staff will reach out to you immediately.",
                  button: "Visit Our Web Order Page",
                },
                {
                  title: "Existing Pharma Companies",
                  content:
                    "Want to download our Stock and Sales statement? Leave us a message at support@palepugroup.com and our support staff will reach out to you immediately.",
                  button: "Stock and Sales",
                },
                {
                  title: "New Retailers",
                  content:
                    "Please fill in the form below and one of our representatives will get in touch with you as soon as possible. For queries, please mail us at queries@palepugroup.com.",
                  button: null,
                },
                {
                  title: "New Pharma Company",
                  content:
                    "Please fill in the form below and one of our representatives will get in touch with you as soon as possible. To fix an appointment, please mail us at queries@palepugroup.com.",
                  button: null,
                },
              ].map((item, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <div className="card p-3">
                    <h5>{item.title}</h5>
                    <p>{item.content}</p>
                    {item.button && (
                      <a href="/" className="btn btn-primary">
                        {item.button}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Extra Section */}
            <div className="mt-4 mb-4">
              <h5>Interested in working with Palepu Pharma?</h5>
              <p>
                Please send us a mail of your CV and small brief about yourself to{" "}
                <a href="mailto:hr@palepugroup.com">hr@palepugroup.com</a>
              </p>
              <a href="/" className="btn btn-primary">
                Click for Web Orders
              </a>
            </div>

            <div className='w-100 mt-5'>
              <img
                src={logo}
                alt="PPD Logo"
                className="mb-3 w-25"
              />
            </div>

            {/* Footer Info */}
            <div className="footer-info mt-4 p-4">
              <div className='row'>
                <div className='col-md-4'>
                  <p>
                    <strong>Registered Office:</strong> Mylapore, Chennai Branch
                    <br />
                    Palepu Pharma Distributors Pvt. Ltd.,
                  </p>
                </div>
                <div className='col-md-4 d-flex flex-column pt-4'>
                  <img src={location} alt='location-vector-image' className='img-fluid' />
                  <p>No: 1, Ramachandra Road, <br></br> Mylapore, Chennai - 600004.</p>
                </div>
                <div className='col-md-4 d-flex flex-column pt-4'>
                  <img src={contactvec} alt='contact-vector-image' className='img-fluid' />
                  <p>
                    <strong>Ph:</strong> 044-4867 5533
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Section */}
          <div className="col-md-4 d-flex flex-column justify-content-center contact-form">
            <h3 className="mb-3">Fill out the tabs below:</h3>
            <form className="p-5" onSubmit={handleSubmit}>
              {[
                { label: "Name", type: "text", name: "name" },
                { label: "E-mail", type: "email", name: "email" },
                { label: "Phone", type: "tel", name: "phone" },
                { label: "Company / Pharmacy Name", type: "text", name: "companyName" },
                { label: "Company / Pharmacy Address", type: "text", name: "companyAddress" },
                { label: "License", type: "text", name: "license" },
              ].map((field, index) => (
                <div className="mb-3" key={index}>
                  <label className="form-label">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              ))}
              <div className="text-center">
                <button type="submit" className="btn btn-warning pe-4 ps-4 rounded-5 text-white">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact