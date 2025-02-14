import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; 
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    name: "Lorem Ipsum 1",
    company: "M/s, Oscar & Ponni Architects, Chennai",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Lorem Ipsum 2",
    company: "M/s, Oscar & Ponni Architects, Chennai",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Lorem Ipsum 3",
    company: "M/s, Oscar & Ponni Architects, Chennai",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Lorem Ipsum 4",
    company: "M/s, Oscar & Ponni Architects, Chennai",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 2;

  const handleNext = () => {
    if (index + itemsPerPage < testimonials.length) {
      setIndex(index + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (index - itemsPerPage >= 0) {
      setIndex(index - itemsPerPage);
    }
  };

  useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);

  return (
    <div className="testimonials-container">
      
      <h2 className="text-white mb-4" data-aos="fade-right"><strong>Our Trusted Clients</strong></h2>
      <div className="testimonial-navigation-icons">
        <FaArrowLeft className="testimonial-nav-icon" onClick={handlePrev} />
        <FaArrowRight className="testimonial-nav-icon" onClick={handleNext} />
      </div>
      <div className="row">
        <AnimatePresence mode="wait">
          {testimonials.slice(index, index + itemsPerPage).map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="col-12 mb-4"
              initial={{ opacity: 0, x: 50 }} // Start from right
              animate={{ opacity: 1, x: 0 }} // Fade in to position
              exit={{ opacity: 0, x: -50 }} // Exit to left
              transition={{ duration: 0.5 }} // Smooth transition
            >
              <div className="testimonial-card d-flex align-items-center" data-aos="zoom-in-right">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-img img-fluid" />
                <div className="testimonial-content">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{testimonial.text}</p>
                  <h5><strong>{testimonial.name}</strong></h5>
                  <p className="company">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
    </div>
  );
};

export default Testimonials;
