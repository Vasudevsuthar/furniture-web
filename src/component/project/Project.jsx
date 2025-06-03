import React from "react";
import "./Project.css";

const Project = () => {
  const projectData = [
    {
      title: "E-Commerce Website",
      image: "https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg",
      description:
        "A full-featured e-commerce website built using React and Firebase.",
    },
    {
      title: "Portfolio Website",
      image:
        "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/c153799b-2716-4a2d-86a6-e8e4c2efc027/whatsapp-image-2023-02-19-at-11-46-23-pm.jpeg",
      description:
        "A personal portfolio website to showcase my skills and projects.",
    },
    {
      title: "To-Do App",
      image:
        "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg",
      description:
        "A simple to-do app with CRUD functionality using React Hooks.",
    },
    {
      title: "Calculator App",
      image:
        "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg",
      description:
        "A simple to-do app with CRUD functionality using React Hooks.",
    },
    {
      title: "Snake Game",
      image:
        "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg",
      description:
        "A simple to-do app with CRUD functionality using React Hooks.",
    },
    {
      title: "Weather App",
      image:
        "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg",
      description:
        "A simple to-do app with CRUD functionality using React Hooks.",
    },
    {
      title: "Chat Application",
      image:
        "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg",
      description:
        "A simple to-do app with CRUD functionality using React Hooks.",
    },
    {
      title: "Blog Website",
      image:
        "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg",
      description:
        "A simple to-do app with CRUD functionality using React Hooks.",
    },
  ];

  return (
    <div>
      <div className="project-container">
        <div className="project-heading">
          <h1>Our Recent Project</h1>
        </div>
        <div className="project-card">
          {projectData.map((project, index) => (
            <div key={index} className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
