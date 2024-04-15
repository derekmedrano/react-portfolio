import React from 'react';

const ProjectCard = ({ title, imageUrl, link }) => (
  <div className="col-md-4 mb-4">
    <a href={link} className="card-link">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </a>
  </div>
);

const Project = () => {
  const projects = [
    {
      title: "Foodr (Lead UX/UI Design)",
      imageUrl: "../../assets/PortfProj1.png",
      link: "https://github.com/camwhritenour/Foodr"
    },
    {
      title: "Veterinary App (Database Management)",
      imageUrl: "../../assets/PortfProj2.png",
      link: "https://github.com/Efren96/vet-tech-app"
    },
    {
      title: "Employee Tracker (Back End)",
      imageUrl: "../../assets/PortfProj3.png",
      link: "https://github.com/derekmedrano/employee-tracker"
    },
    {
      title: "Readme Generator (Node app)",
      imageUrl: "../../assets/PortfProj4.png",
      link: "https://github.com/derekmedrano/readme-generator"
    },
    {
      title: "Random Password Generator (Front End only)",
      imageUrl: "../../assets/PortfProj5.jpg",
      link: "project5.htmhttps://github.com/derekmedrano/random-password-generator"
    },
    {
        title: "Random Password Generator (Front End only)",
        imageUrl: "../../assets/PortfProj6.png",
        link: "project5.htmhttps://github.com/derekmedrano/random-password-generator"
      }
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
