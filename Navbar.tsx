import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-blue-900 fixed top-0 w-full z-50 py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-white text-3xl font-bold'>Sumera Ali</h1>
        <ul className='flex space-x-6'>
          <li>
            <Link href="#Home" className='text-white hover:text-blue-300'>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className='text-white hover:text-blue-300'>
              About
            </Link>
          </li>
          <li>
            <Link href="#Projects" className='text-white hover:text-blue-300'>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#Skills" className='text-white hover:text-blue-300'>
              Skills
            </Link>
          </li>
          <li>
            <Link href="#Contact" className='text-white hover:text-blue-300'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
