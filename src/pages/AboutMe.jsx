import CertificatesCarousel from "../components/CertificatesCarousel/CertificateCarousel";
import hero from "./../img/hero.png";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="section">
      <div className="container">
        
        <div>
          <h1 className="title-1">About Me</h1>
        </div>

        <div className="hero-section">

          <div className="hero-section__img">
            <img src={hero} alt="About Me" width="250px"/>
          </div>

          <div>
            <p className="hero-section__about">Hi! I’m Uliana Shemiakina, a frontend developer with a background in SEO. Working with websites from a performance and user-experience perspective naturally led me toward frontend development, where I can build interfaces directly and bring ideas to life.</p>
            <p className="hero-section__about">I focus on creating clean, responsive, and intuitive UI using HTML, CSS, JavaScript, React, and Redux, and I carry over my SEO experience to think deeply about structure, usability, accessibility, and how users interact with a product. I also have foundational knowledge of Node.js and MongoDB, which helps me understand how full web applications work.</p>
            <p className="hero-section__about">What drives me is continuous learning and a passion for building things that look good and feel good to use. I’m excited to grow further as a frontend engineer and contribute to meaningful projects where design and functionality work together.</p>
            
            <div className="hero-section__btns">

              <button
              className="btn"
               onClick={() => navigate("/projects")}
              >
                My projects
              </button>

              <button
              className="btn"
               onClick={() => navigate("/contacts")}
              >
                Contact me
              </button>

            </div>
          </div> 

        </div>

        <div className="hero-section-skills">
          <h2 className="title-2">My skills</h2>

					<ul className="hero-section__content-list">
						<li className="hero-section__content-list__item">
							<h3 className="title-3">Frontend</h3>
							<p>
								JavaScript, ReactJS, Redux,
								HTML, CSS
							</p>
						</li>
						<li className="hero-section__content-list__item">
							<h3 className="title-3">Backend</h3>
							<p>NodeJS, MongoDB</p>
						</li>
					</ul>

        </div>

        <div className="hero-section__content-list">
          <h2 className="title-2">My certificates</h2>        
        </div>

        <CertificatesCarousel />

			</div>    
			
    </div>
    
  );
}
 
export default AboutMe;