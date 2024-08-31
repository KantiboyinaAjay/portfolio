import React from 'react';
import linkdin from './assets/linkedin.png'
import github from './assets/github.png'
import arrow from './assets/arrow.png'
import '../App.css'
import experience from './assets/experience.png'
import education from './assets/education.png'
import profile from './assets/profile.png'
import profile2 from './assets/profile2.jpg'

const About = () => {

  return (
    <>
      <section id="profile">
        <div className="section__pic-container">
          <img src={profile} alt="Ajay Kantiboyina profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Ajay Kantiboyina</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open('https://drive.google.com/file/d/1gzIEKc8AiokY-CmJYoKRIyhegEGqk1dx/view?usp=drive_link')}
            >
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => window.location.href='./#contact'}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkdin}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => window.location.href='https://www.linkedin.com/in/ajaykantiboyina/'}
            />
            <img
              src={github}
              alt="My Github profile"
              className="icon"
              onClick={() => window.location.href='https://github.com/KantiboyinaAjay'}
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src={profile2}
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src={experience}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>1+ years <br />Frontend Development</p>
              </div>
              <div className="details-container">
                <img
                  src={education}
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>Bachelor Of Technology<br /></p>
              </div>
            </div>
            <div className="text-container">
              <p>
              Hello, I'm Ajay,
              I excel in problem-solving, SQL, web development, Salesforce, and have a passion for coding in Python. 
              Eager to apply my skills in real-world projects, I'm committed to continuous learning and making a meaningful impact in technology.
              </p>
            </div>
          </div>
        </div>
        <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => window.location.href='./#experience'}
        />
      </section>
    </>
  );
};

export default About;
