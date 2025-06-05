import React from "react";
import { useState, useEffect } from "react";
import "./OurClient.css";

const testimonials = [
  {
    text: "I was nervous about buying furniture online, but RajFurniture made it so easy. The photos matched exactly what I received, and the quality was even better than expected. My sofa is super comfortable, and the finish is flawless. They handled my questions quickly and professionally. I’ll definitely shop here again. A great experience from start to finish.",
    author: "— Ravi Mehra, New Delhi",
  },
  {
    text: "We ordered a complete bedroom set and couldn’t be happier. The wood feels solid, and the design is both simple and elegant. Everything was delivered on time and assembled properly. The customer care team followed up to ensure we were satisfied. It’s rare to find such dedication. Thank you, RajFurniture!",
    author: "— Priya Shah, Mumbai",
  },
  {
    text: "I was nervous about buying furniture online, but RajFurniture made it so easy. The photos matched exactly what I received, and the quality was even better than expected. My sofa is super comfortable, and the finish is flawless. They handled my questions quickly and professionally. I’ll definitely shop here again. A great experience from start to finish.",
    author: "— Amit Sinha, Lucknow",
  },
  {
    text: "RajFurniture helped us furnish our new office, and the results are amazing. The chairs are ergonomic and stylish, and the desks are super functional. Their team listened to our needs and suggested the best options. The prices were reasonable for the quality we got. We’ve received so many compliments from visitors. Couldn’t have asked for more.",
    author: "— Nikita Rao, Bangalore",
  },
  {
    text: "I love how my new dining table blends with my interior. It’s sturdy, spacious, and looks even better in person. RajFurniture’s team ensured a smooth and fast delivery. The installation was quick, and everything was handled professionally. Shopping here was stress-free and satisfying. Totally worth it!",
    author: "— Ramesh Patel, Ahmedabad",
  },
  {
    text: "The craftsmanship in RajFurniture’s products is top-tier. I bought a TV unit and a wardrobe, and both are fantastic. The finish is clean, and the materials feel premium. I appreciate how responsive the team was during the whole process. This is now my go-to furniture brand.Thank you for the great service!",
    author: "— Sonia Verma, Jaipur",
  },
  {
    text: "RajFurniture made my house feel like home. Every piece I ordered has added warmth and character to the space. Their collection is modern yet timeless, which I love. The buying process was simple and transparent. Excellent value for money and exceptional support. I’ll definitely be a returning customer.",
    author: "— Karan Malhotra, Pune",
  },
];

const OurClient = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };



  return (
    <div className="our-client-container">
      <hr />
      <h1 className="client-heading">What Our Clients Say</h1>

      <div className="testimonial-slider-container">
        <button className="slider-button left" onClick={handlePrev}>
          &#8592;
        </button>

        <div className="testimonial-wrapper">
          <div className="testimonial-card">
            <p className="testimonial-text">"{testimonials[index].text}"</p>
            <p className="testimonial-author">{testimonials[index].author}</p>
          </div>
        </div>

        <button className="slider-button right" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default OurClient;
