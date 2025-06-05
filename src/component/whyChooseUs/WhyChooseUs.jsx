import React from "react";
import { BiSolidUserPlus } from "react-icons/bi";
import { MdAirlineStops } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { FaBullhorn } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const whyData = [
    {
      icon: <BiSolidUserPlus size={40} color="#dd7210" />,
      title: "Customer-Centric Approach",
      description:
        "We prioritize your needs and preferences, ensuring a personalized experience. We listen to your requirements and tailor our services to meet them. We believe in building long-term relationships with our customers.",
    },
    {
      icon: <MdAirlineStops size={40} color="#dd7210" />,
      title: "Quality Materials",
      description:
        "We use only the finest wood and materials to ensure durability and beauty. Our products are sourced from trusted suppliers, ensuring that you receive the best quality for your projects. We stand behind the quality of our materials and offer a satisfaction guarantee.",
    },
    {
      icon: <GrServices size={40} color="#dd7210" />,
      title: "Comprehensive Services",
      description:
        "From custom furniture to restoration, we offer a wide range of services. Whether you need help with design, fabrication, or installation, our team is here to assist you. We have the expertise to handle projects of all sizes and complexities.",
    },
    {
      icon: <FaBullhorn size={40} color="#dd7210" />,
      title: "Transparent Pricing",
      description:
        "No hidden fees, just clear and competitive pricing for all our products and services. We believe in transparency and honesty in our pricing. You can trust that you are getting the best value for your investment with us.",
    },
    {
      icon: <HiMiniUsers size={40} color="#dd7210" />,
      title: "Expert Team",
      description:
        "Our skilled professionals are here to guide you through every step of your project. We have a team of experienced craftsmen and designers who are passionate about woodwork. They are dedicated to providing you with the best solutions and advice for your projects.",
    },
  ];

  return (
    <div className="why-choose-us">
      <h1 className="why-heading">Why Choose Us?</h1>
      <p className="why-description">
        At Royal Wood, we are committed to providing the highest quality wood
        products and exceptional customer service. Our team of experts is
        dedicated to helping you find the perfect materials for your projects,
        whether you're a DIY enthusiast or a professional contractor. We pride
        ourselves on our extensive selection, competitive pricing, and fast
        delivery. Choose Royal Wood for your next project and experience the
        difference in quality and service.
      </p>
      <div className="why-container">
        {whyData.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon-wrapper">
              <div className="why-icon">{item.icon}</div>
            </div>
            <h2 className="why-title">{item.title}</h2>
            <p className="why-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
