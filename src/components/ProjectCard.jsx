import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project}) => {
  return (
    <div className='flex flex-col justify-between p-6 rounded-2xl border border-gray-800 bg-[#111] backdrop-blur-sm hover:border-blue-500/50 hover:bg-[#333] transition-all duration-300 hover:-translate-y-1'>

      <div className='mb-4'>
        <span className='text-xs px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400'>
          {project.type}
        </span>
      </div>

      <div className='flex-1'>
        <h3 className='text-lg font-semibold text-white mb-2'>{project.name}</h3>
        <p className='text-white text-sm leading-7 mb-4'>{project.desc}</p>
      </div>

      <div className='flex flex-wrap gap-2 mb-5'>
        {project.tags.map((tag) => (
          <span key={tag} className='text-xs px-2.5 py-1 rounded-md bg-gray-900 text-gray-100 border border-gray-700'>
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.live}
        target='_blank'
        rel='noreferrer'
        className='inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200'
      >
        <FaExternalLinkAlt className='text-xs' />
        View Live Site
      </a>

    </div>
  )
}

export default ProjectCard