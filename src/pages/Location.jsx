import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample data for contact information
const offices = [
  {
    type: "Registered Office",
    branchName: "Mylapore, Chennai",
    address: "Palepu Pharma Distributors Pvt. Ltd., No: 1, Ramachandra Road, Mylapore, Chennai - 600004.",
    contactNumber: "Ph: 044 -4867 5533",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9997015422637!2d80.264219!3d13.0356907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267cd48e7e1c9%3A0x2244d2ce02df33aa!2sPalepu%20Pharma%20Distributors%20Private%20Limited!5e0!3m2!1sen!2sin!4v1737967475865!5m2!1sen!2sin"
  },
  {
    type: "Corporate Office",
    address: "Palepu Pharma Distributors Pvt. Ltd., Paragon Towers 9 & 10, South Facing, Rukumani Colony, 11th Street, Nehru Nagar, Kottivakkam, Chennai - 600041",
    contactNumber: "Ph: 044-24672711/12/13/14",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15551.99241639901!2d80.24427474056095!3d12.971972807720645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPalepu%20Pharma%20Distributors%20Pvt.%20Ltd.%2C%20Paragon%20Towers%209%20%26%2010%2C%20South%20Facing%2C%20Rukumani%20Colony%2C%2011th%20Street%2C%20Nehru%20Nagar%2C%20Kottivakkam%2C%20Chennai%20-%20600041!5e0!3m2!1sen!2sin!4v1737967751364!5m2!1sen!2sin"
  },
];

const branches = [
  {
    type: "Branches",
    branchName: "Mogappair, Chennai",
    address: "Palepu Pharma Distributors Pvt. Ltd., C-24, Mogappair Industrial Estate, Mogappair East, Phase II, Chennai - 600037",
    contactNumber: "Ph: 044 - 26560599",
    mapSrc: "https://www.google.com/maps/embed?pb=..."
  },
  {
    branchName: "Tambaram, Chennai",
    address: "Palepu Pharma Distributors Pvt. Ltd., Plot No 52, Door No 1, Jaya Nagar 4th Cross Street, Vedantham Colony, Tambaram Sanatorium, 600047",
    contactNumber: "Ph: 044-2241 1141,",
    contactPerson: "Contact Person: Mr. Mahesh.",
    mobile: "Mobile: +91 98407 25473",
    mapSrc: "https://www.google.com/maps/embed?pb=..."
  },
  {
    branchName: "Madurai, Tamil Nadu",
    address: "Palepu Pharma Distributors Pvt. Ltd., No.6-A, Sivagangai Road, Managiri, Madurai - 625020",
    contactNumber: "Ph: 0452 - 258 6550, 4393462",
    contactPerson: "Contact Person: Mr. Mahesh.",
    mobile: "Mobile: +91 88703 88604",
    mapSrc: "https://www.google.com/maps/embed?pb=..."
  },
  {
    branchName: "Coimbatore, Tamil Nadu",
    address: "Palepu Pharma Distributors Pvt. Ltd., SF NO:1199/4A1,A2,A3,A4,A5, Kempatty Colony, Selvapuram Bypass Road, South Ukkadam, Coimbatore - 641001",
    contactNumber: "Ph: 0422 - 4033100",
    mapSrc: "https://www.google.com/maps/embed?pb=..."
  },
  {
    branchName: "Kanchipuram, Tamil Nadu",
    address: "Palepu Pharma Distributors Pvt. Ltd., No 52AB, IInd Floor, Back Portion, Sengazhuneerodai Street, Kanchipuram - 631502",
    contactNumber: "Ph: 044 2723 3710",
    mapSrc: "https://www.google.com/maps/embed?pb=..."
  },
];

const Location = () => {
  return (
    <>

      <div className='location-header'></div>

      <div className="container my-5 location">

        {/* Render Registered and Corporate Offices */}
        {offices.map((office, index) => (
          <div className="row mb-5 d-flex justify-content-center align-items-center" key={index}>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card p-4 border-0 rounded">
                <h3 className="text-dark font-weight-bold mb-3">{office.type}</h3>
                <h5 className="text-info font-weight-bold">{office.branchName}</h5>
                <p className="text-muted">{office.address}</p>
                <p style={{ marginTop: '-15px', fontWeight: '500' }}>{office.contactNumber}</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card shadow-lg p-0 border-0 rounded">
                <iframe
                  src={office.mapSrc}
                  width="100%"
                  height="200"
                  style={{ borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        ))}

        {/* Render Branches */}
        {branches.map((branch, index) => (
          <div className="row mb-5 d-flex justify-content-center align-items-center" key={index}>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card p-4 border-0 rounded">
                <h3 className="text-dark font-weight-bold mb-3">{branch.type}</h3>
                <h5 className="text-info font-weight-bold">{branch.branchName}</h5>
                <p className="text-muted">{branch.address}</p>
                <p style={{ marginTop: '-15px', fontWeight: '500' }}>{branch.contactNumber}</p>
                <p style={{ marginTop: '-15px', fontWeight: '500' }}>{branch.contactPerson}</p>
                <p style={{ marginTop: '-15px', fontWeight: '500' }}>{branch.mobile}</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card shadow-lg p-0 border-0 rounded">
                <iframe
                  src={branch.mapSrc}
                  width="100%"
                  height="200"
                  style={{ borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Location;
