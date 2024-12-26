import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center' data-aos="zoom-out-right">
        <div>
          <h1 className='text-4xl md:text-5xl text-blue-600'>Technologies I Work With</h1>
          <p className='text-gray-600 pt-2'>
            I am gaining familiarity with HTML, CSS, and JavaScript, which allows me to create dynamic and visually appealing web applications. Currently, I am enhancing my skills in Tailwind CSS for designing responsive layouts efficiently. Additionally, I am learning TypeScript to improve my coding capabilities and ensure high-quality software development.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-blue-600 text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-out-right">-TypeScript</h2>
              <h2 data-aos="zoom-out-right">-HTML</h2>
              <h2 data-aos="zoom-out-right">-CSS/Tailwindcss</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-out-right">-MS.Word</h2>
              <h2 data-aos="zoom-out-right">-MS.Excel</h2>
              <h2 data-aos="zoom-out-right">-Canva</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
