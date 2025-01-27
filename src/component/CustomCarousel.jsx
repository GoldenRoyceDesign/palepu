import React from 'react';



const CustomCarousel = () => {
  return (
    <div id="customCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active bg-image1">
          <div className="carousel-caption">
            <h1>Continuing 60 Years of Delivering Health</h1>
            <p>
              Cardiology, Neurology, Nephrology, Diabetology, Pediatrics,<br />
              Anti-Infectives, Nutraceuticals, and many more pharmaceutical products.
            </p>
            <button className="btn btn-custom">Find Us &gt;</button>
          </div>
        </div>
        <div className="carousel-item bg-image2">
          <div className="carousel-caption">
            <h1>Another Slide Title</h1>
            <p>Additional description for the second slide.</p>
            <button className="btn btn-custom">Learn More &gt;</button>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev custom-arrow" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next custom-arrow" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CustomCarousel;
