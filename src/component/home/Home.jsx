import { useState } from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import "./Home.css";

const slides = [Slide1, Slide2];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatingIndex, setAnimatingIndex] = useState(null);

  const handleSlideChange = (newIndex) => {
    setAnimatingIndex(newIndex);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setAnimatingIndex(null);
      setIsAnimating(false);
    }, 400); // match animation duration
  };

  const nextSlide = () => {
    handleSlideChange((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentIndex - 1 + slides.length) % slides.length);
  };

  const CurrentSlide = slides[currentIndex];
  const AnimatingSlide = animatingIndex !== null ? slides[animatingIndex] : null;

  return (
    <div className="slider-container">
      {/* Show current slide if not animating */}
      {!isAnimating && (
        <div className="slide-wrapper">
          <CurrentSlide />
        </div>
      )}

      {/* Animate the new slide */}
      {AnimatingSlide && (
        <div className="slide-wrapper animated-slide">
          <AnimatingSlide />
        </div>
      )}

      <button className="prev-btn" onClick={prevSlide}>&#129172;</button>
      <button className="next-btn" onClick={nextSlide}>&#129174;</button>
    </div>
  );
};

export default Home;
