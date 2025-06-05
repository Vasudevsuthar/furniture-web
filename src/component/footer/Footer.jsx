import React from "react";
import logo from "../../../public/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-company">
        <div className="footer-company-info">
        <div className="footer-company-logo">
          <img src={logo} alt="Royal Wood Logo" />
        </div>
          <h1>Raj Furniture</h1>
          <p>© 2023 All rights reserved</p>
        </div>
      </div>
      <div className="footer-contect">
        <div className="footer-contect-info">
          <div className="social-icon">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <p>Contact Us</p>
          <p>Phone: +91 1234567890</p>
          <p>Email: abc@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
