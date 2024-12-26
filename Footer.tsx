import React from 'react';

const Footer = () => {
  return (
    <div className="mt-16 py-6 bg-blue-900 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm"> 2024 Sumera, Inc. All Rights Reserved.</p>
        <ul className="flex space-x-4 text-sm">
          <li>
            <a href="#" className="hover:text-blue-300">Community Guidelines</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300">Terms of Service</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300">Privacy Policy</a>
          </li>
        </ul>
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:text-blue-300">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="#" className="hover:text-blue-300">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="#" className="hover:text-blue-300">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
