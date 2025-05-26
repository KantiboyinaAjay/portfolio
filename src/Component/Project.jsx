import React from 'react';
import '../App.css';
import train from './assets/train.png';
import shop from './assets/shopping.jpg';
import image from './assets/image.png';
import CODE from './assets/CODE.png';
import todo from './assets/todo.jpg';
import grf from './assets/grf.jpg';

const projects = [
  {
    img: CODE,
    title: 'CodeForge',
    github: 'https://github.com/KantiboyinaAjay/CodeForge',
    demo: 'https://codeforge-dyvj.onrender.com/',
  },
  {
    img: grf,
    title: 'Ground Reaction Force',
    github: 'https://github.com/KantiboyinaAjay/GroundReactionForce',
    demo: 'https://groundreactionforce.netlify.app/',
  },
  {
    img: todo,
    title: 'TaskBoard',
    github: 'https://github.com/KantiboyinaAjay/Todo',
    demo: 'https://todo4221.netlify.app/',
  },
  {
    img: image,
    title: 'TechnicalHub Experience Cloud',
    github: 'https://github.com/KantiboyinaAjay',
    demo: 'https://technicalhub-fd-dev-ed.develop.my.site.com/txpcd/s/',
  },
  {
    img: shop,
    title: 'Webmert',
    github: 'https://github.com/KantiboyinaAjay/shopping',
    demo: 'https://webmert.netlify.app/',
  },
  {
    img: train,
    title: 'Dashboard',
    github: 'https://github.com/KantiboyinaAjay',
    demo: 'https://drive.google.com/file/d/13W2Ya-L2UBPaTNJfgIILK5MyrsoI-nBi/view?usp=drive_link',
  },
];

const Project = () => {
  return (
    <section id="projects" className="projects">
      <p className="projects__intro">Browse My Recent</p>
      <h1 className="projects__title">Projects</h1>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-card__image" />
            <h2 className="project-card__title">{project.title}</h2>
            <div className="project-card__buttons">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open(project.github, '_blank')}
              >
                GitHub
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open(project.demo, '_blank')}
              >
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
