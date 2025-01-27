import React from "react";
import Slider from "react-slick"; // Import the slider component
import reviewImage from "../assets/testimonial1.png"; // Updated the image import

const Reviews = () => {
    const reviews = [
        {
            title: "Ease of Use",
            text: "Ordering my medications has never been so simple! The website is easy to navigate, and the process is seamless. I love the convenience of having my prescriptions delivered right to my door.",
            author: "Sarah S",
            image: reviewImage,
        },
        {
            title: "Quick Delivery",
            text: "I was impressed by how quickly my order was delivered! The support team was also very helpful and responsive. Highly recommended!",
            author: "John D",
            image: reviewImage,
        },
        {
            title: "Great Service",
            text: "The service provided by this platform is amazing. I feel valued as a customer, and the experience has been delightful.",
            author: "Emily R",
            image: reviewImage,
        },
        {
            title: "Top Quality",
            text: "The quality of service is unmatched. I'm very happy with my experience and will definitely recommend it to my friends and family.",
            author: "Michael T",
            image: reviewImage,
        },
    ];

    // Slider settings
    const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Infinite loop
        speed: 500, // Transition speed in ms
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Time between transitions in ms
        arrows: true, // Show navigation arrows
    };

    return (
        <div className="reviews-carousel-container">
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <div className="review-layout d-flex">
                            {/* Left column: Profile image */}
                            <div className="review-image-container">
                                <img src={review.image} alt={review.author} className="review-image" />
                            </div>

                            {/* Right column: Name and review */}
                            <div className="review-content">
                                <h4 className="review-author">{review.author}</h4>
                                <p className="review-text">{review.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Reviews;
