import React, { useEffect, useState } from "react";
import "./SlideshowBackground.css";

const SlideshowBackground = () => {
  const images = [
    process.env.PUBLIC_URL + "/image1.jpg.jpg",
    process.env.PUBLIC_URL + "/image2.jpg.png",
    process.env.PUBLIC_URL + "/image3.jpg.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background-slideshow"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="overlay">
        <h1>Welcome to Our College</h1>
        <p>Empowering Students for the Future</p>
      </div>
    </div>
  );
};

export default SlideshowBackground;
