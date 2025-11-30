import { useState, useEffect, useRef } from "react";
import { certificates } from "../../helpers/certificates";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const CertificateCarousel = () => {
  const [item, setItem] = useState(0);
  const [count, setCount] = useState(3); 
  const btnRef = useRef();
  const total = certificates.length;

  const updateCount = () => {
    const w = window.innerWidth;

    if (w < 600) setCount(1);       
    else if (w < 900) setCount(2);  
    else setCount(3);               
  };

  useEffect(() => {
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  
  const nextItem = () => {
    setItem((prev) => (prev + 1) % total);
  };

  useEffect(() => {
  const cards = document.querySelectorAll(".cert-image");

  let interval = null;
  let isRunning = false;

  const startAutoRotate = () => {
    if (isRunning) return;
    isRunning = true;

    let steps = 0; 

    interval = setInterval(() => {
      if (steps >= 3) {
        clearInterval(interval);
        isRunning = false;
        return;
      }

      nextItem();

      gsap.fromTo(
        ".cert-row",
        { x: 40, opacity: 0.8 },
        {
          x: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power2.out"
        }
      );

      steps++;
    }, 550); 
  };

  const stopAutoRotate = () => {
    clearInterval(interval);
    isRunning = false;
  };

  cards.forEach((card) => {
    card.addEventListener("mouseenter", startAutoRotate);
    card.addEventListener("mouseleave", stopAutoRotate);
  });

  return () => {
    cards.forEach((card) => {
      card.removeEventListener("mouseenter", startAutoRotate);
      card.removeEventListener("mouseleave", stopAutoRotate);
    });
    clearInterval(interval);
  };
}, [item, count]);

  const previousItem = () => {
    setItem((prev) => (prev - 1 + total) % total);
  };


  useGSAP(() => {
  gsap.fromTo(".cert-image",
    { filter: "blur(8px)", opacity: 0.3 },
    { filter: "blur(0px)", opacity: 1, duration: 0.3, ease: "power2.out" }
  );
  }, [item]);

  
  const visibleCertificates = Array.from({ length: count }, (_, i) => {
    return certificates[(item + i) % total];
  });


  const activeIndex = Math.floor(count / 2);

  return (
    <div className="cert-carousel-container">
      <div className="cert-btn" ref={btnRef}>
        
   
        <button onClick={previousItem} className="slide">
          <img
            src="https://img.icons8.com/?size=100&id=60636&format=png&color=000000"
            className="icon"
            alt="Back"
          />
        </button>


        <div className="cert-row">
          {visibleCertificates.map((cert, index) => (
            <img
              key={cert.id}
              src={cert.image}
              alt="certificate"
              className={`cert-image ${
                index === activeIndex ? "active-cert" : ""
              }`}
            />
          ))}
        </div>

       
        <button onClick={nextItem} className="slide">
          <img
            src="https://img.icons8.com/?size=100&id=60671&format=png&color=000000"
            className="icon"
            alt="Forward"
          />
        </button>

      </div>
    </div>
  );
};

export default CertificateCarousel;
