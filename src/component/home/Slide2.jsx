import React from "react";
import "./Slide2.css";

const Slide2 = () => {
  return (
    <div className="slide2-container">
      <div className="slide2">
        <div>
          <h3 className="slide2-heading1">Rajesh Suthar</h3>
          <h4 className="slide2-heading2">Manager</h4>
          <h1 className="slide2-heading3">Why US</h1>
          <p className="slide2-p">
            Discover timeless elegance with our exquisite furniture collection.
            Crafted with passion and precision, our designs blend comfort with
            luxury to elevate your living spaces.
          </p>
        </div>
        <div>
          <img className="slide2Img"
            src="https://img.freepik.com/free-vector/hygge-style-interior-design-illustration_1284-32830.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Slide2;
