import React from "react";
import testimonial from '../assets/testimonial1.png'

const Testimonials = () => {
  const testimonials = [
    {
      title: "Ease of Use",
      text: "Ordering my medications has never been so simple! The website is easy to navigate, and the process is seamless. I love the convenience of having my prescriptions delivered right to my door.",
      author: "Sarah S",
      image: testimonial,
    },
    {
      title: "Quick Delivery",
      text: "I was impressed by how quickly my order was delivered! The support team was also very helpful and responsive. Highly recommended!",
      author: "John D",
      image: testimonial,
    },
    {
      title: "Great Service",
      text: "The service provided by this platform is amazing. I feel valued as a customer, and the experience has been delightful.",
      author: "Emily R",
      image: testimonial,
    },
    {
      title: "Top Quality",
      text: "The quality of service is unmatched. I'm very happy with my experience and will definitely recommend it to my friends and family.",
      author: "Michael T",
      image: testimonial,
    },
  ];

  // Duplicate the testimonials array to ensure a seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="testimonials-container">
      <div className="testimonials-track">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content p-4">
              <h5 className="testimonial-title">{testimonial.title}</h5>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
            <hr></hr>
            <div className="testimonial-image d-flex align-items-center gap-4 ps-4 pe-4">
              <img src={testimonial.image} alt={testimonial.author} />
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
