import React from 'react';

const Aboutme = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundColor:'lightcyan'}}
    >
      <div className="bg-black bg-opacity-60 p-6 md:p-10 lg:p-20 rounded-lg">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">About Me</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 text-center">
          Hi, I'm Natraj, a software developer with a passion for creating dynamic and responsive web applications.
           I specialize in mern full stack and have a strong foundation in reactjs.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 text-center">
          Over the years, I've worked on various projects.
          My goal is to continuously improve and leverage my skills to build impactful solutions that make a difference.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-center">
          When I'm not coding, you can find me in sports like cricket. I believe in continuous learning and am always 
          looking for new challenges to tackle. Let's connect and create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
