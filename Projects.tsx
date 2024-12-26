
import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: "Word Counter",
    desc: "Implemented a word counter tool that dynamically tracks and displays the total word count as the user types, providing real-time feedback for efficient content creation.",
    img: "/wordcounter.JPG",
    tags: ["HTML", "Node", "Css"],
  },
  {
    id: 1,
    title: "Todo List",
    desc: "Developed a to-do list application with the ability to add, edit, and delete tasks, allowing users to efficiently manage their daily tasks. Integrated real-time task tracking and state persistence using React and local storage.",
    img: "/todoproject.JPG",
    tags: ["Typescript", "HTML", "Css"],
  },
  {
    id: 2,
    title: "Simple Calculator",
    desc: "A simple yet functional calculator built with HTML, CSS, and JavaScript. It features basic arithmetic operations and a user-friendly interface, demonstrating my skills in frontend development.",
    img: "/calculator.JPG",
    tags: ["Typescript", "Node", "css"],
  },
  {
    id: 3,
    title: "ATM Machine",
    desc: "An ATM machine simulation designed using HTML, CSS, and JavaScript. It handles basic banking functions like withdrawals, deposits, and balance inquiries with a simple, interactive interface.",
    img: "/atm shot.JPG",
    tags: ["React", "Node", "Css"],
  },
  {
    id: 4,
    title: "Static Resume",
    desc: "A clean, static resume created using HTML and CSS, showcasing my professional experience and skills. It highlights responsive design principles, ensuring optimal viewing across devices.",
    img: "/resume.JPG",
    tags: ["React", "HTML", "Typescript"],
  },
  {
    id: 5,
    title: "Currency-Converter",
    desc: "The currency converter, built using HTML and CSS, allows users to convert between currencies with a simple and responsive interface. It provides quick conversions using real-time exchange rates for a smooth user experience.",
    img: "/Convertot.JPG",
    tags: ["HTML", "node.js", "Typescript"],
  },

];

const Projects = () => {
  return (
    <div id='Projects' className='container pt-32'>
      <Heading title='My Awesome Projects'  />
      <div className='grid gap-10  text md:grid-cols-2 lg:grid-cols-3 font-bold place-items-center'>
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
