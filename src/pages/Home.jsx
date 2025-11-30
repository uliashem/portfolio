import gsap from "gsap";
import SplitType from "split-type";
import "../App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ---> particles.js init
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 150, density: { enable: true, value_area: 800 }},
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" }
        },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          out_mode: "out"
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true
        }
      },
      retina_detect: true
    });

    // ---> typing effect
    const split = new SplitType("#typingText", { types: "chars" });

    gsap.from(split.chars, {
      opacity: 0,
      y: 6,
      duration: 0.08,
      stagger: 0.07,
      ease: "none",
      onComplete: () => {
        gsap.to(".line-2", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out"
        });

        gsap.to(".line-3", {
          opacity: 1,
          y: 0,
          delay: 0.25,
          duration: 0.75,
          ease: "power3.out"
        });

        gsap.to(".home-btn", {
          opacity: 1,
          y: 0,
          delay: 0.55,
          duration: 0.8,
          ease: "power3.out"
        });
      }
    });

    return () => split.revert();
  }, []);

  return (
    <header className="header">

      <div id="particles-js" className="particles-bg"></div>

      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            <span id="typingText">
              Hi, my name is <em>Uliana Shemiakina</em>
            </span>
          </strong>

          <br />
          <span className="line-2">a frontend developer</span>
        </h1>

        <div className="header__text line-3">
          <p>with passion for learning and creating</p>
        </div>

        <button className="btn home-btn" onClick={() => navigate("/about")}>
          About me
        </button>
      </div>
    </header>
  );
};

export default Home;
