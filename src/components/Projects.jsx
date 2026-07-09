const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    github: "#",
    
  },
  {
    title: "Heart",
    description: "Built a amimated heart.",
    tech: ["Html", "CSS"],
    github: "https://github.com/aadil7788-web/-Insta-story-feature",
    
  },
  {
    title: "Todo App",
    description: "Manage daily tasks with add and delete functionality.",
    tech: ["React", "JavaScript"],
    github: "#",
    live: "#",
  },
];
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="min-h-72 bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          My Projects
        </h2>
      </div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <div
      key={index}
      className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
    >
      <h3 className="text-2xl font-bold text-cyan-400 mb-3">
        {project.title}
      </h3>

      <p className="text-gray-300 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-cyan-500 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
     href={project.github}
          className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
    >
          GitHub
</a>
        
      </div>
    </div>
  ))}
</div>


    </section>
  );
};

export default Projects;
