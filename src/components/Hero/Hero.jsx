import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
         MERN | React | WordPress | Shopify | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          
          <img src="./assets/images/imgP.png" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/physics.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/node.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/express.png" style={{backgroundColor: "white"}} alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/mongoDB.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/tailwind.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
