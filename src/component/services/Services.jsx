import React from "react";
import { FcDataConfiguration } from "react-icons/fc";
import { FaCouch, FaPaintBrush, FaTools } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const servicesData = [
    {
      icon: <FaCouch size={60} color="#1b6c73" />,
      title: "Custom Furniture",
      points: [
        "Tailored furniture for any room",
        "Wide variety of materials",
        "Space-optimized designs",
      ],
    },
    {
      icon: <FaPaintBrush size={60} color="#1b6c73" />,
      title: "Wood Polishing",
      points: [
        "Premium finishing options",
        "Eco-friendly polish",
        "Long-lasting protection",
      ],
    },
    {
      icon: <FaTools size={60} color="#1b6c73" />,
      title: "Repair & Restoration",
      points: [
        "Furniture part replacements",
        "Antique restoration",
        "Polish + repair package",
      ],
    },
  ];

  return (
    <div className="services-container">
      <div className="service-heading">
        <FcDataConfiguration style={{ width: "100px", height: "100px" }} />
        <h1>
          We would love to hear <br />
          about your project.
        </h1>
        <button className="services-btn">Let's Talk</button>
      </div>

      <div className="what-we-do">
        <h1 className="service-title">What we do</h1>
        <p className="service-description">
          We specialize in creating custom furniture that perfectly fits your
          space and style. Our expert team is dedicated to delivering
          high-quality craftsmanship, whether you need a unique piece for your
          home or professional wood polishing and restoration services. Explore
          our offerings to find the perfect solution for your needs. We are a
          team of passionate individuals who specialize in creating beautiful
          and functional furniture. Whether you want custom woodwork or polish
          for your old furniture, we bring your ideas to life.
        </p>
      </div>

      <div className="services-contain">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title-1">{service.title}</h3>
            <ul className="service-list">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
