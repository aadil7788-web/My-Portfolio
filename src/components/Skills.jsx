
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub"
];

import React from 'react'

const Skills = () => {
  return (
    <div>
      <section
      id="skills"
      className="min-h-screen bg-slate-900 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        <h2 className="text-5xl font-bold text-cyan-400 mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:bg-cyan-500 hover:text-black transition duration-300"
            >
              <h3 className="text-xl font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
    </div>
  )
}

export default Skills;