import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6"
    >
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
          Contact Me
        </h2>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-slate-800 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-slate-800 outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-slate-800 outline-none"
          ></textarea>

          <button 
            className=" ml-60 bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold transition text-center"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;