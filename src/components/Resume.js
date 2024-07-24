import React from 'react';

const Resume = () => {
  return (
    <section
      id="resume"
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundColor:'lightcyan'}}
    >
      <div className="bg-black bg-opacity-50 p-6 md:p-10 lg:p-20 rounded-lg max-w-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">Resume</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 text-center">
          I have a diverse range of experience and skills. For a comprehensive overview, please download my resume.
        </p>
        <div className="text-center">
          <a
            href="/portfolio.pdf" 
            download
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
