import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="relative p-6 md:p-10 lg:p-20 bg-cover bg-center h-screen"
      style={{ backgroundColor:'lightcyan'}}
    >
      <div className="absolute top-0 right-0 m-4 md:m-8 lg:m-12">
        <img
          // src={profileImage}
          alt="Profile"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-80 lg:h-80 rounded-full border-4 border-white bg-[url(abc.jpg)]"
        />
        <h1 className='text-black text-center text-2xl font-bold'>HLN</h1>
      </div>
      <div className="relative text-black max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-2xl lg:text-2xl">
          Hello! I am a passionate software developer specializing in building web applications using modern technologies.
          This portfolio showcases my work, skills, and background. Feel free to explore and learn more about me.
        </p>
      </div>
    </section>
  );
};

export default Home;
