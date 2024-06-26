import React from 'react';

import '../utils/Project.css'

const ProjectCard = ({ title, imageUrl, link }) => (
  <div className="col-md-4 mb-4">
    <a href={link} className="card-link">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={'Screenshot of Projects'} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
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
        title: "Weather Database(API)",
        imageUrl: "../../assets/PortfProj6.png",
        link: "project5.htmhttps://github.com/derekmedrano/random-password-generator"
      }
  ];

  return (
    <div className="container"> 
      <div className='project-header'>
                      <h2>Previous Projects</h2>
        <h3>(checkout my Github link below for even more!)</h3>
      </div>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
