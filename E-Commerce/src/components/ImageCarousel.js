import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl h-full mx-auto p-4">
      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white text-3xl p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
        aria-label="Previous Image"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white text-3xl p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
        aria-label="Next Image"
      >
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'} transition-colors duration-300`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
