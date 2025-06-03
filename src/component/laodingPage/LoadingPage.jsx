import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./LoadingPage.css"; // External CSS

function FurnitureLoader({ onComplete }) {
  const loaderRef = useRef(null);
  const iconRefs = useRef([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();
  
    iconRefs.current.forEach((icon, index) => {
      tl.fromTo(
        icon,
        { opacity: 0, y: 50, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "bounce.out",
        }
      );
    });
  
    // Add delay to hide loader properly
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.8,
      delay: 0.5, // 👈 Delay added
      onComplete: () => {
        setTimeout(() => {
          setLoading(false); // Hide loader after delay
          onComplete && onComplete(); // Call the completion callback
        }, 300); // 👈 Extra delay to prevent flicker
      },
    });
  }, []);
  
  if (!loading) return null;

  return (
    <div ref={loaderRef} className="loader-container">
      <h2 className="loader-text">Setting up your dream furniture...</h2>

      <div className="icon-container">
        <img
          src="https://img.freepik.com/premium-photo/stylish-living-room-with-vibrant-colors-modern-decor_192345-2221.jpg"
          alt="Furniture 1"
          ref={(el) => (iconRefs.current[0] = el)}
          className="furniture-icon"
        />
        <img
          src="https://img.freepik.com/premium-photo/modern-living-room-interior-design_469760-24867.jpg"
          alt="Furniture 2"
          ref={(el) => (iconRefs.current[1] = el)}
          className="furniture-icon"
        />
        <img
          src="https://img.freepik.com/premium-photo/modern-living-room-interior-design_469760-22984.jpg"
          alt="Furniture 3"
          ref={(el) => (iconRefs.current[2] = el)}
          className="furniture-icon"
        />
      </div>
    </div>
  );
}

export default FurnitureLoader;
