import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsData } from '../Data/ProjectData'
const Projects = () => {
  return (
    <section id='projects' className='relative bg-white text-black py-10 px-6 sm:px-10 lg:px-20 overflow-hidden'>

      <div className='relative z-10 text-center mb-8'>
        <h2 className='text-4xl font-bold'>
          My{' '}
          <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
            Projects
          </span>
        </h2>
        <div className='w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full' />
      </div>

      <div className='relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projectsData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

    </section>
  )
}

export default Projects