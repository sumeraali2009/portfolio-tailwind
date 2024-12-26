import React from 'react';
import Image from 'next/image'; // Import the Image component

interface CardProps {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ title, desc, img, tags }) => {
  return (
    <div className="bg-black-850 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 p-4 w-64 h-auto flex flex-col justify-between" data-aos="zoom-out-right">
      <div className="h-40 w-full mb-4 relative"> {/* Change to relative for Image layout */}
        <Image 
          src={img} 
          alt={title} 
          layout="fill" // Use layout fill to cover the parent div
          objectFit="contain" // Maintain the aspect ratio
          className="w-full h-full" // Optional: can be removed since layout fill handles size
        />
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-900 mb-4 flex-grow">{desc}</p>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <span key={index} className="bg-pink-300 text-blue-900 px-2 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;