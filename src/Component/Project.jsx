import React from 'react'
import '../App.css'
import arrow from './assets/arrow.png'
import train from './assets/train.png'
import shop from './assets/shopping.jpg'
import image from './assets/image.png'
import CODE from './assets/CODE.png'

const Project = () => {
  return (
    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={image}
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">TechnicalHub Experience Cloud</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://github.com/KantiboyinaAjay'}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={()=>window.location.href='https://technicalhub-fd-dev-ed.develop.my.site.com/txpcd/s/'}
              >
                Live Demo
              </button>
            </div>
          </div>

          {/*project 2*/ }
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={CODE}
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">CodeForge</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://github.com/KantiboyinaAjay/OnlineCodingPlatform.git'}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://codeforge-dyvj.onrender.com/'}
              >
                Live Demo
              </button>
            </div>
          </div>

          {/* project 3 */}

          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={shop}
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Webmert</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://github.com/KantiboyinaAjay/shopping'}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://webmert.netlify.app/'}
              >
                Live Demo
              </button>
            </div>
          </div>

          {/* project 4 */}
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={train}
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Dashboard</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://github.com/KantiboyinaAjay'}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://drive.google.com/file/d/13W2Ya-L2UBPaTNJfgIILK5MyrsoI-nBi/view?usp=drive_link'}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => window.location.href='./#contact'}
        />
    </section>
  )
}

export default Project