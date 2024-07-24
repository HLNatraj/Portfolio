import React from 'react';
import { FaJsSquare, FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Import icons

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
        style={{ backgroundColor:'lightcyan'}} // Replace with your background image
    >
      <div className="bg-black bg-opacity-50 p-6 md:p-10 lg:p-20 rounded-lg max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-5xl md:text-6xl lg:text-7xl text-yellow-500 mb-4" />
            <p className="text-lg md:text-xl lg:text-2xl">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-5xl md:text-6xl lg:text-7xl text-blue-500 mb-4" />
            <p className="text-lg md:text-xl lg:text-2xl">React</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-5xl md:text-6xl lg:text-7xl text-blue-600 mb-4" />
            <p className="text-lg md:text-xl lg:text-2xl">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-5xl md:text-6xl lg:text-7xl text-orange-500 mb-4" />
            <p className="text-lg md:text-xl lg:text-2xl">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-5xl md:text-6xl lg:text-7xl text-green-500 mb-4" />
            <p className="text-lg md:text-xl lg:text-2xl">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <FaDatabase className="text-5xl md:text-6xl lg:text-7xl text-blue-900 mb-4" />
            <p className="text-lg md:text-xl lg:text-2xl">Database</p>
          </div>
          {/* Add more skill items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
