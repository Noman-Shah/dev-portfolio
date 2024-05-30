import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-container">
        <div style={{flex: 1}}>
          <ContactInfoCard
            iconUrl="./assets/images/email-icon.svg"
            text="mailto: nomankhalidofficial@gmail.com"
          />  
        </div>

        
        <div style={{flex: 1}}>
        <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="https://github.com/Noman-Shah"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
