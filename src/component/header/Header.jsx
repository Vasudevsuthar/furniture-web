import React, { useEffect, useState, useRef } from "react";
import { RiAccountCircle2Line } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import logo from "../../../public/logo.png";
import "./Header.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Royal Wood</h1>
      </div>
      <div className="menu">
        <a onClick={() => scrollToSection("home")}>Home</a>
        <a onClick={() => scrollToSection("our-sites")}>Our Sites</a>
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </div>
      <div className="menu1">
        <RiAccountCircle2Line className="profile" />
        <BiSearchAlt className="search" />
      </div>
    </div>
  );
};

export default Header;