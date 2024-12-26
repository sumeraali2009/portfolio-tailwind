import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image'; // Import the Image component

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <Navbar />
      <div className="flex flex-row items-center space-x-12"> {/* Increased spacing */}
        {/* Image Section */}
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"> {/* Responsive image */}
          <Image
            src="/g image.jpg" // Ensure the path is correct
            alt="Sumera"
            layout="fill"
            objectFit="cover"
            className="rounded-full" // No border, rounded image
          />
        </div>

        {/* Content Section */}
        <div className="max-w-lg" data-aos="zoom-out-right"> {/* Restrict max width */}
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 italic">
            HI, I am Sumera
          </h1>
          <p className="mt-4 text-lg text-gray-800 font-serif">
            Actively learning HTML, CSS, Tailwind CSS, and JavaScript to build dynamic and responsive web applications. 
          </p>
          <p className="mt-2 text-lg text-gray-800 font-serif">
            Passionate about creating user-friendly designs and continually expanding my skills to deliver impactful digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
