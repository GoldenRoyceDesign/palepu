import React, { useEffect } from "react";
import branch1 from '../assets/branch1.png'
import branch2 from '../assets/branch2.png'
import branch3 from '../assets/branch3.png'
import mylapore1 from '../assets/Mylapore Front View.jpg'
import mylapore2 from '../assets/Mylapore Office.jpg'
import mylapore3 from '../assets/Mylapore Godown.jpg'
import mogappair1 from '../assets/Mogappair Front View.jpg'
import mogappair2 from '../assets/Mogappair Office.jpg'
import mogappair3 from '../assets/Mogappair Godown.jpg'
import tambaram1 from '../assets/Tambaram Front View.jpg'
import tambaram2 from '../assets/Tambaram Office.jpg'
import tambaram3 from '../assets/Tambram Godown.jpg'
import madurai from '../assets/Madurai Front view.jpg'
import coimbatore1 from '../assets/Coimbatore Front view.jpg'
import coimbatore2 from '../assets/Coimbatore Office.jpg'
import coimbatore3 from '../assets/Coimbatore Billing Room.jpg'
import mail from '../assets/mail-emoji.png'
import call from '../assets/call-emoji.png'
import location from '../assets/location-emoji.png'
import AOS from "aos";
import "aos/dist/aos.css";


const branches = [
  {
    name: "Mylapore",
    mapLink: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62191.9600748152!2d80.22344833831723!3d13.035830566170313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a5267cd4f1438c7%3A0xa8be601fcac17644!2snagalakshmi%20apts%2C%201%2C%20Ramachandra%20Rd%2C%20Kapali%20Thottam%2C%20Mylapore%2C%20Chennai%2C%20Tamil%20Nadu%20600004!3m2!1d13.035750199999999!2d80.26464829999999!5e0!3m2!1sen!2sin!4v1739516920760!5m2!1sen!2sin", // Embed map link here
    images: [
      mylapore1, mylapore2, mylapore3  // Add actual image URLs
    ],
    address: "Palepu Pharma Distributors Pvt. Ltd., No: 1, Ramachandra Road, Mylapore, Chennai - 600004.",
    phone: "044 -4867 5533",
    email: "sales@palepugroup.com",
    description: "Lorem ipsum dolor sit amet. In atque oluptas eum possimus accusamus"
  },
  {
    name: "Corporate Office",
    mapLink: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62191.628603136494!2d80.2119859383224!3d13.037149465418329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a5267005235e387%3A0xfb3cbbf8cdb86d37!2sAyurveda%209.O%2C%2052%2CSeethamma%2C%20Alwarpet%20St%2C%20Seethammal%20Colony%2C%20Lubdhi%20Colony%2C%20Alwarpet%2C%20Chennai%2C%20Tamil%20Nadu%20600018!3m2!1d13.0370691!2d80.25318589999999!5e0!3m2!1sen!2sin!4v1739517097850!5m2!1sen!2sin", // Embed map link here
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
    mapLink: "https://www.google.com/maps/embed?pb=!1m19!1m12!1m3!1d151837.04631448266!2d80.11655498685998!3d12.997369636175563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m4!3e6!4m0!4m1!2sC-24%2C%20Mogappair%20Industrial%20Estate%2C%20Mogappair%20East%2C%20Phase%20II%2C%20Mogapper%20Industrial%20Estate%2C%20Mogappair%20East%2C%20Chennai%2C%20Tamil%20Nadu%20600037%2C%20India!5e0!3m2!1sen!2sin!4v1739517445338!5m2!1sen!2sin", // Embed map link here
    images: [
      mogappair1, mogappair2, mogappair3   // Add actual image URLs
    ],
    address: "Palepu Pharma Distributors Pvt. Ltd., C-24, Mogappair Industrial Estate, Mogappair East, Phase II, Chennai - 600037",
    phone: "044 - 26560599",
    email: "ambattur@palepugroup.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Tambaram",
    mapLink: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62216.00501618949!2d80.09066723794074!3d12.939805320819003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a525f07e3c4fdd3%3A0x1396c74d5c400a4e!2sJaya%20Nagar%2C%20Tambaram%20Sanatoruim%2C%20Chennai%2C%20Tamil%20Nadu%20600047!3m2!1d12.9397249!2d80.1318672!5e0!3m2!1sen!2sin!4v1739517175545!5m2!1sen!2sin", // Embed map link here
    images: [
      tambaram1, tambaram2, tambaram3   // Add actual image URLs
    ],
    address: "Palepu Pharma Distributors Pvt. Ltd., Plot No 52, Door No 1, Jaya Nagar 4th Cross Street, Vedantham Colony, Tambaram Sanatorium, 600047",
    phone: "044-2241 1141",
    contact: "Contact Person: Mr. Mahesh.",
    mobile: "Mobile: +91 98407 25473",
    email: "tambaram@palepugroup.com",
    description: "Lorem ipsum dolor sit amet. In atque oluptas eum possimus accusamus"
  },
  {
    name: "Madurai",
    mapLink: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62881.26092964123!2d78.10724962791382!3d9.927394732593159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3b00c5b1afd5ee29%3A0xff7dee608dea1ca8!2sSMT%20Kalyana%20Mahal%2C%206%2F6%20B2%2C%20Sivaganga%20Rd%2C%20Deputy%20Collector%20Colony%2C%20Managiri%2C%20KK%20Nagar%2C%20Madurai%2C%20Tamil%20Nadu%20625020!3m2!1d9.9273127!2d78.14844959999999!5e0!3m2!1sen!2sin!4v1739517226175!5m2!1sen!2sin", // Embed map link here
    images: [
      madurai,   // Add actual image URLs
    ],
    address: "Palepu Pharma Distributors Pvt. Ltd., No.6-A, Sivagangai Road, Managiri, Madurai - 625020",
    phone: "0452 - 258 6550, 4393462",
    contact: "Contact Person: Mr. Mahesh.",
    mobile: "Mobile: +91 88703 88604",
    email: "vmahesh@palepugroup.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Coimbatore",
    mapLink: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62666.18698787191!2d76.91310123105744!3d10.990771686620178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba8597f4651042d%3A0x21ff695a3404b117!2sKempatty%20Colony%2C%20Coimbatore%2C%20Tamil%20Nadu%20641001!3m2!1d10.9906902!2d76.9543012!5e0!3m2!1sen!2sin!4v1739517274538!5m2!1sen!2sin", // Embed map link here
    images: [
      coimbatore1, coimbatore2, coimbatore3   // Add actual image URLs
    ],
    address: "Palepu Pharma Distributors Pvt. Ltd., SF NO:1199/4A1,A2,A3,A4,A5, Kempatty Colony, Selvapuram Bypass Road, South Ukkadam, Coimbatore - 641001",
    phone: "0422 - 4033100",
    email: "pppl_cbe@yahoo.in",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Kanchipuram",
    mapLink: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7780.054196641864!2d79.69945143948414!3d12.84152541037897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a52c250e84f3e1f%3A0x4889cc9aaa604481!2sSengaluneer%20Odai%20St%2C%20Tamil%20Nadu%20631502!3m2!1d12.841515!2d79.7046013!5e0!3m2!1sen!2sin!4v1739517310415!5m2!1sen!2sin", // Embed map link here
    images: [
      branch1, branch2, branch3   // Add actual image URLs
    ],
    address: "Palepu Pharma Distributors Pvt. Ltd., No 52AB, IInd Floor, Back Portion, Sengazhuneerodai Street, Kanchipuram - 631502",
    phone: " 044 2723 3710",
    email: "kanchipuram@company.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
];

const BranchCard = ({ branch }) => (
  <div className="container branch-card pe-4 ps-4 pt-3 pb-3 mb-3">
    <div className="row">
      <h3 className="branch-name">{branch.name}</h3>
      {/* Left Side: Map + Images */}
      <div className="col-md-6" data-aos="zoom-in-right">
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
      <div className="col-md-6 d-flex flex-column gap-2" data-aos="zoom-in-up">
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

const Location = () => {

  useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);

  return(
    <div className="container mt-4">
      {branches.map((branch, index) => (
        <BranchCard key={index} branch={branch} />
      ))}
    </div>
  );
} 

export default Location;
