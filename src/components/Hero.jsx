import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 text-white px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <p className="text-cyan-400 text-lg mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Asad Azam
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-4">
            MERN Stack Developer
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            I build responsive and modern web applications using
            React, Node.js, Express.js and MongoDB.
            I love solving problems and creating clean user experiences.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="#projects"
              className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 transition"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          

        </div>

      </div>
    </section>
  );
};

export default Hero;