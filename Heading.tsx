import React from 'react';

interface HeadingProps {
  title: string; 
}
const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <h2 className="text-3xl font-bold mb-6 text-center">
      {title}
    </h2>
  );
};

export default Heading;
