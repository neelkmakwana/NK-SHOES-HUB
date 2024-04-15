import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  // Array of image URLs for the slideshow
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/NK%20-%20SHOES%20HUB%20HERO%20SECTION-1.png?alt=media&token=3972ea18-0921-4fda-86b1-b85ee3f5da23',
    'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/NK%20-%20SHOES%20HUB%20HERO%20SECTION-2.png?alt=media&token=fdb673b1-eb32-4969-a7e5-ec4eed4a94be',
    'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/NK%20-%20SHOES%20HUB%20HERO%20SECTION-3.png?alt=media&token=3fd49c30-4841-4e0e-8333-77499de8eb19',
    // Add more image URLs here for the slideshow
  ];

  // Settings for the slider
  const sliderSettings = {
    dots: true, // Enable pagination dots
    infinite: true, // Loop the slideshow
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    pauseOnHover: true, // Pause autoplay when hovering over the slider
    dotsClass: 'slick-dots custom-dots', // Use the custom class for dots
  };

  return (
    <div>
      {/* Include the CSS styles for the slideshow inside a <style> tag */}
      <style jsx>
        {`
        /* Custom styles for the dots */
        .custom-dots {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1; /* Ensure dots appear above image */
        }

        /* Style for individual dots */
        .custom-dots li button:before {
          color: white; /* Customize dot color */
        }
      `}
      </style>
      
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="h-40 lg:h-full rounded-b-lg"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
