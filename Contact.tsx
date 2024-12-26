import React from 'react';
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='Contact' className='pt-32 container' data-aos="zoom-out-right">
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl text-blue-600'>Get in Touch!</h2>
          <p className='text-gray-600 text-lg pt-2'>Feel free to call me or message me!</p>
          <div className='flex gap-3 items-center'>
            <CiMail size={30} className='text-blue-600' />
            <span className='text-lg'>abcd123@gmail.com</span>
          </div>
          <div className='flex gap-3 items-center'>
            <FaWhatsapp size={30} className='text-green-600' />
            <span className='text-lg'>0312-22846578</span>
          </div>
        </div>

        <div className='space-y-8'>
          <h2 className='text-4xl text-blue-600'>Contact Form:</h2>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='name' className='text-lg'>Name</label>
              <input
                type="text"
                className='h-12 p-2 bg-transparent border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'
                id='name'
                placeholder='Enter your name'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='email' className='text-lg'>Email</label>
              <input
                type="email"
                className='h-12 p-2 bg-transparent border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'
                id='email'
                placeholder='Enter your email'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='message' className='text-lg'>Message</label>
              <textarea
                className='bg-transparent border border-blue-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300'
                id='message'
                rows={6}
                placeholder='Type your message here...'
              />
            </div>
            <button className='bg-blue-600 text-white p-2 px-6 rounded-md hover:bg-blue-700 transition duration-300'>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
