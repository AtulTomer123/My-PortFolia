import React from 'react'
import { FaReact } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden'>

      {/* Background — same as Hero */}
      <div className='absolute top-[-100px] left-[-100px] w-[350px] h-[350px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)' }} />
      <div className='absolute bottom-[-100px] right-[-80px] w-[350px] h-[350px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)' }} />
      <div className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

      <div className='relative z-10 text-center px-6'>
        <FaReact className='text-6xl text-blue-400 mx-auto mb-6 animate-spin' style={{ animationDuration: '4s' }} />
        <h1 className='text-8xl font-bold mb-4'>
          4
          <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>0</span>
          4
        </h1>
        <p className='text-gray-400 text-xl mb-2'>Page Not Found</p>
        <p className='text-gray-600 text-sm mb-10'>Oops! Lagta hai galat URL daal diya! 😄</p>
        <a
          href='/'
          className='px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105'
          style={{ background: 'linear-gradient(to right, #3b82f6, #a855f7)' }}
        >
          Go Back Home
        </a>
      </div>

    </div>
  )
}

export default NotFound