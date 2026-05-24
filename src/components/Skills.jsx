import React from 'react'
import { skills } from '../data/skills.jsx'

const levelColor = {
  Expert:       'bg-green-500/10 text-green-400 border-green-500/20',
  Intermediate: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Learning:     'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Basic:        'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
}

const Skills = () => {
  return (
    <section id='skills' className='relative bg-black text-white py-10 px-6 sm:px-10 lg:px-20 overflow-hidden'>
      <div className='absolute top-[-100px] left-[-100px] w-[350px] h-[350px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)' }} />
      <div className='absolute bottom-[-100px] right-[-80px] w-[350px] h-[350px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)' }} />
      <div className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      <div className='relative z-10 text-center mb-8'>
        <h2 className='text-4xl font-bold'>
          My{' '}
          <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
            Skills
          </span>
        </h2>
        <div className='w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full' />
      </div>

      <div className='relative z-10 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-5'>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className='group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-gray-800 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1'
          >
            <div className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
              {skill.icon}
            </div>
            <p className='text-white font-semibold text-base'>{skill.name}</p>
            <span className={`text-xs px-3 py-1 rounded-full border font-medium ${levelColor[skill.level]}`}>
              {skill.level}
            </span>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills