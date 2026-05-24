import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import myImg from '../assets/images/my-img.jpeg'
const skills = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'React']
const About = () => {
  return (
    <section id='about' className='bg-gray-50 text-gray-800 py-10 px-6 sm:px-10 lg:px-20'>

      {/* Section Heading */}
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-gray-900'>
          About <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Me</span>
        </h2>
        <div className='w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full' />
      </div>

      <div className='max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start'>

        <div className='w-full lg:w-72 flex-shrink-0'>
          <div className='w-full h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-200'>
            <img
              src={myImg}
              alt='Atul Tomer'
              className='w-full h-full object-cover object-top'
            />
          </div>
        </div>

        {/* RIGHT — Info */}
        <div className='flex-1'>
          <h3 className='text-2xl font-bold text-gray-900 mb-1'>Atul Tomer</h3>
          <p className='text-blue-500 font-medium mb-5'>Frontend Developer</p>
          <p className='text-gray-500 leading-8 mb-6'>
            I'm a Frontend Developer currently working at{' '}
            <span className='text-gray-800 font-medium'>Arrow Info System</span>, where I primarily
            work with <span className='text-gray-800 font-medium'>HTML, CSS, and JavaScript</span> to
            build responsive and interactive web interfaces. I have completed my B.Tech and I'm
            continuously expanding my skillset — currently learning{' '}
            <span className='text-gray-800 font-medium'>React</span> and exploring modern frontend
            technologies.
          </p>

          {/* Info rows */}
          <div className='flex flex-col gap-3 mb-7'>
            <div className='flex items-center gap-3 text-gray-500'>
              <FaBriefcase className='text-blue-500 flex-shrink-0' />
              <span>Frontend Developer — Arrow Info System</span>
            </div>
            <div className='flex items-center gap-3 text-gray-500'>
              <FaGraduationCap className='text-blue-500 flex-shrink-0' />
              <span>B.Tech — Completed</span>
            </div>
            <div className='flex items-center gap-3 text-gray-500'>
              <FaEnvelope className='text-blue-500 flex-shrink-0' />
              <span>atultomer@example.com</span>
            </div>
            <div className='flex items-center gap-3 text-gray-500'>
              <FaMapMarkerAlt className='text-blue-500 flex-shrink-0' />
              <span>India</span>
            </div>
          </div>
          <a
            href='./Atul_Resume.pdf'
            target='_blank'
            rel='noreferrer'
            className='inline-block px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg'
            style={{ background: 'linear-gradient(to right, #3b82f6, #a855f7)' }}
          >
            View Resume
          </a>
        </div>

      </div>
    </section>
  )
}

export default About