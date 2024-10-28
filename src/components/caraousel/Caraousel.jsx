// components/Carousel.jsx
"use client"
import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'Welcome to Our Platform',
    description: 'Connecting students and alumni seamlessly.',
    image: '/images/cse.jpg',
  },
  {
    id: 2,
    title: 'Explore Resources',
    description: 'Get access to curated subject-wise resources.',
    image: '/images/IT.jpg',
  },
  {
    id: 3,
    title: 'Join the Community',
    description: 'Network with alumni and peers in your field.',
    image: '/images/cse.jpg',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg md:text-2xl">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Previous/Next Buttons */}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75"
      >
        &larr;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75"
      >
        &rarr;
      </button>

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
