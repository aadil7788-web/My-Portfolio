import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

      
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-cyan-400">
            Asad Azam
          </h2>

          <p className="text-gray-400 mt-2">
            MERN Stack Developer
          </p>

          <p className="text-gray-500 text-sm mt-2">
            © 2026 All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-6 text-gray-300">

          <a
            href="https://github.com/aadil7788-web"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/asad-azam-4b70532b4"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="asadazam0786@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            Email
          </a>

        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href="#home"
          className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600 transition"
        >
          Back to Top ↑
        </a>
      </div>

    </footer>
  );
};

export default Footer;
