import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../User/ScrollingImgae.css";
import { useNavigate } from "react-router-dom";

const ImageSlider = ({ slides }) => {
  const navigate = useNavigate();
  const length = slides.length;
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevSlide) => (prevSlide + 1) % length);
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      <FaArrowAltCircleLeft
        className="arrow left-arrow"
        onClick={prevSlide}
        aria-label="Previous Slide"
      />
      <FaArrowAltCircleRight
        className="arrow right-arrow"
        onClick={nextSlide}
        aria-label="Next Slide"
      />
      {slides.map((slide, index) => (
        <div
          onClick={() => navigate("/products")}
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <img src={slide.image} alt={`Slide ${index}`} className="image" />
          )}
        </div>
      ))}
    </section>
  );
};

export default ImageSlider;
