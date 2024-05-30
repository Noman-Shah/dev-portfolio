import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <a href={text} target="blank"><div className="icon">
        <img src={iconUrl} alt={text} />
      </div></a>

      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
