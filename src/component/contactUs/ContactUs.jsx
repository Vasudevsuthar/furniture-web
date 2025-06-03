import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="contact-pic">
        <img
          src="https://img.freepik.com/free-photo/3d-interior-design-wallpaper_23-2151852496.jpg"
          alt=""
        />
      </div>
      <div className="contact-form">
        <h1>Send us a message</h1>
        <div className="form">
          <div className="form-1">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-2">
            <input type="text" placeholder="E-mail" />
            <input type="number" placeholder="Number" />
            <input type="text" placeholder="Type a message" />
            <button className="contact-btn">Get in touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
