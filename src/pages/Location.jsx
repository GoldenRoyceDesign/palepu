import React from "react";
import branch1 from '../assets/branch1.png'
import branch2 from '../assets/branch2.png'
import branch3 from '../assets/branch3.png'
import mail from '../assets/mail-emoji.png'
import call from '../assets/call-emoji.png'
import location from '../assets/location-emoji.png'


const branches = [
  {
    name: "Mylapore",
    mapLink: "https://www.google.com/maps/embed?...", // Embed map link here
    images: [
      branch1, branch2, branch3  // Add actual image URLs
    ],
    address: "Palepu Pharma Distributors Pvt. Ltd., No: 1, Ramachandra Road, Mylapore, Chennai - 600004.",
    phone: "044 -4867 5533",
    email: "mylapore@company.com",
    description: "Lorem ipsum dolor sit amet. In atque oluptas eum possimus accusamus"
  },
  {
    name: "Corporate Office",
    mapLink: "https://www.google.com/maps/embed?...", // Embed map link here
    images: [
      branch1, branch2, branch3   // Add actual image URLs
    ],
    address: "Palepu Pharma Distributors Pvt. Ltd., Paragon Towers 9 & 10, South Facing, Rukumani Colony, 11th Street, Nehru Nagar, Kottivakkam, Chennai - 600041",
    phone: "044-24672711/12/13/14",
    email: "tambaram@company.com",
    description: "Lorem ipsum dolor sit amet. In atque oluptas eum possimus accusamus"
  },
  {
    name: "Mogappair",
    mapLink: "https://www.google.com/maps/embed?...", // Embed map link here
    images: [
      branch1, branch2, branch3   // Add actual image URLs
    ],
    address: "Palepu Pharma Distributors Pvt. Ltd., C-24, Mogappair Industrial Estate, Mogappair East, Phase II, Chennai - 600037",
    phone: "044 - 26560599",
    email: "tambaram@company.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Tambaram",
    mapLink: "https://www.google.com/maps/embed?...", // Embed map link here
    images: [
      branch1, branch2, branch3   // Add actual image URLs
    ],
    address: "Palepu Pharma Distributors Pvt. Ltd., Plot No 52, Door No 1, Jaya Nagar 4th Cross Street, Vedantham Colony, Tambaram Sanatorium, 600047",
    phone: "044-2241 1141",
    contact: "Contact Person: Mr. Mahesh.",
    mobile: "Mobile: +91 98407 25473",
    email: "tambaram@company.com",
    description: "Lorem ipsum dolor sit amet. In atque oluptas eum possimus accusamus"
  },
  {
    name: "Madurai",
    mapLink: "https://www.google.com/maps/embed?...", // Embed map link here
    images: [
      branch1, branch2, branch3   // Add actual image URLs
    ],
    address: "Palepu Pharma Distributors Pvt. Ltd., No.6-A, Sivagangai Road, Managiri, Madurai - 625020",
    phone: "0452 - 258 6550, 4393462",
    contact: "Contact Person: Mr. Mahesh.",
    mobile: "Mobile: +91 88703 88604",
    email: "tambaram@company.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Coimbatore",
    mapLink: "https://www.google.com/maps/embed?...", // Embed map link here
    images: [
      branch1, branch2, branch3   // Add actual image URLs
    ],
    address: "Palepu Pharma Distributors Pvt. Ltd., SF NO:1199/4A1,A2,A3,A4,A5, Kempatty Colony, Selvapuram Bypass Road, South Ukkadam, Coimbatore - 641001",
    phone: "0422 - 4033100",
    email: "tambaram@company.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Kanchipuram",
    mapLink: "https://www.google.com/maps/embed?...", // Embed map link here
    images: [
      branch1, branch2, branch3   // Add actual image URLs
    ],
    address: "Palepu Pharma Distributors Pvt. Ltd., No 52AB, IInd Floor, Back Portion, Sengazhuneerodai Street, Kanchipuram - 631502",
    phone: " 044 2723 3710",
    email: "tambaram@company.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
];

const BranchCard = ({ branch }) => (
  <div className="container branch-card pe-4 ps-4 pt-3 pb-3 mb-3">
    <div className="row">
      <h3 className="branch-name">{branch.name}</h3>
      {/* Left Side: Map + Images */}
      <div className="col-md-6">
        <iframe
          src={branch.mapLink}
          width="100%"
          height="250"
          style={{ border: "none" }}
          allowFullScreen
          loading="lazy"
          title="map"
        ></iframe>

        <div className="d-flex p-3 gap-2 mb-4" style={{ background: '#92bade' }}>
          {branch.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Branch ${index + 1}`}
              className="branch-image"
            />
          ))}
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="col-md-6 d-flex flex-column gap-2">
        <p className="branch-desc">{branch.description}</p>
        <hr className="horizontal"></hr>
        <div className="d-flex align-items-center gap-2">
          <img src={location} alt="mail-icon" className="img-fluid" style={{ marginTop: "-30px" }} />
          <p>{branch.address}</p>
        </div>

        <div className="d-flex align-items-center gap-2">
          <img src={call} alt="mail-icon" className="img-fluid" style={{ marginTop: "-15px" }} />
          <p><strong>Ph:</strong> {branch.phone}</p>
        </div>

        <div className="d-flex align-items-center gap-2">
          <img src={mail} alt="mail-icon"  style={{ marginTop: "-15px" }} />
          <p><a href={`mailto:${branch.email}`}>{branch.email}</a></p>
        </div>

        <p>{branch.contact}</p>
        <p>{branch.mobile}</p>
      </div>
    </div>
  </div>
);

const Location = () => (
  <div className="container mt-4">
    {branches.map((branch, index) => (
      <BranchCard key={index} branch={branch} />
    ))}
  </div>
);

export default Location;
