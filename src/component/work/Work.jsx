import React from "react";
import "./Work.css";

const Work = () => {
  const furnitureData = [
    {
      title: "Modern Sofa Set",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      description:
        "A luxurious modern sofa set designed with comfort and elegance, perfect for living rooms.",
    },
    {
      title: "Wooden Dining Table",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      description:
        "A classic 6-seater dining table made from premium oak wood with a polished finish.",
    },
    {
      title: "Custom TV Unit",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      description:
        "A custom-built entertainment unit with storage cabinets and modern woodwork finish.",
    },
    {
      title: "Modular Kitchen Design",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      description:
        "A modular kitchen setup with soft-close drawers, glossy finish, and integrated lighting.",
    },
    {
      title: "Office Workstation",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      description:
        "Ergonomic and minimal office furniture designed for productivity and aesthetics.",
    },
    {
      title: "Bedroom Wardrobe",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      description:
        "A floor-to-ceiling sliding wardrobe with mirror doors and internal storage design.",
    },
    {
      title: "Reading Nook with Bookshelf",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      description:
        "A cozy corner with a custom bookshelf and lounge chair setup for reading enthusiasts.",
    },
    {
      title: "Rustic Coffee Table",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      description:
        "Handcrafted rustic-style coffee table made from reclaimed wood.",
    },
  ];

  return (
    <div className="work-container">
      <div className="heading">
        <h1 className="work-heading">Our Recent Work</h1>
      </div>
      <div className="work-card">
        {furnitureData.map((item, index) => (
          <div key={index} className="work-content">
            <img src={item.image} alt={item.title} className="work-img" />
            <h2 className="work-title">{item.title}</h2>
            <p className="work-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
