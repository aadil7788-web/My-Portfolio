import React from 'react'


const Navbar = () => {
  return (
    
    <div>
      
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">
          Asad Azam
        </h1>

        <ul className="flex gap-3 lg:gap-8 text-lg text-white">
    <a href='#' className='hover:text-cyan-400'>Home</a>
     <a href='#about' className='hover:text-cyan-400'>About</a>
      <a href='#contact' className='hover:text-cyan-400'>Contact</a>
       <a href='#skills' className='hover:text-cyan-400'>Skills</a>
    
        </ul>

      </div>
    </nav>


    </div>
  )
}

export default Navbar
