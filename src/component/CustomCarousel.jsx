import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const CustomCarousel = () => {

  useEffect(() => {
        AOS.init({ duration: 1000, once: false });
      }, []);

  return (
    <div id="customCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active bg-image1">
          <div className="carousel-caption">
            <div data-aos="fade-up">
            <h1>Continuing 60 Years of <br></br> Delivering Health</h1>
            <p>
              Cardiology, Neurology, Nephrology, Diabetology, Pediatrics,<br />
              Anti-Infectives, Nutraceuticals, and many more pharmaceutical products.
            </p>
            <button className="btn btn-custom"><a href='#home' style={{textDecoration: 'none', color: 'white'}}> Find Us &gt;</a></button>
            </div>
          </div>
        </div>
        {/* <div className="carousel-item bg-image2">
          <div className="carousel-caption">
            <h1>Another Slide Title</h1>
            <p>Additional description for the second slide.</p>
            <button className="btn btn-custom">Learn More &gt;</button>
          </div>
        </div> */}
      </div>
      {/* <button className="carousel-control-prev custom-arrow" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next custom-arrow" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
};

export default CustomCarousel;
