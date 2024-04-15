import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/NK%20-%20SHOES%20HUB%20HERO%20SECTION-1.png?alt=media&token=3972ea18-0921-4fda-86b1-b85ee3f5da23',
    'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/NK%20-%20SHOES%20HUB%20HERO%20SECTION-2.png?alt=media&token=fdb673b1-eb32-4969-a7e5-ec4eed4a94be',
    'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/NK%20-%20SHOES%20HUB%20HERO%20SECTION-3.png?alt=media&token=fdb673b1-eb32-4969-a7e5-ec4eed4a94be',
  ];

  // Function to handle the slide change
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Set an interval to automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <img
        className="h-40 lg:h-full rounded-b-lg"
        src={images[currentSlide]}
        alt="Slide"
      />
    </div>
  );
};

export default HeroSection;
