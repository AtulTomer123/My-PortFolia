import React from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import myImg from '../assets/images/banner.png'
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <section id='home' className='relative min-h-[560px] bg-[#050508] text-white py-12 overflow-hidden flex items-center'>

      <div className='absolute top-[-100px] left-[-100px] w-[380px] h-[380px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)' }} />
      <div className='absolute bottom-[-120px] right-[-80px] w-[360px] h-[360px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)' }} />

      {/* Grid overlay */}
      <div className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

      <div className='relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12'>

        {/* LEFT */}
        <div className='w-full lg:w-1/2 text-center lg:text-left'>

          {/* Available badge */}
          <div className='inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-[11px] tracking-[3px] uppercase text-indigo-300'
            style={{ background: 'rgba(99,102,241,0.15)', border: '0.5px solid rgba(99,102,241,0.4)' }}>
            <span className='w-2 h-2 bg-indigo-400 rounded-full inline-block animate-pulse' />
            Available for work
          </div>

          <p className='text-indigo-400 text-sm tracking-[3px] uppercase mb-2'>Hii There,</p>

          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4 tracking-tight'>
            I'm Atul{' '}
            <span style={{
              background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Tomer
            </span>
          </h1>
          <h2 className='text-2xl sm:text-3xl text-slate-400 font-normal mb-5'>
            Frontend Developer
          </h2>

          <p className='text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8'>

  I am a{" "}

  <span className='text-blue-500 font-semibold'>
    <ReactTyped
      strings={[
        "Frontend Developer",
        "Software Engineer",
        "Web Developer"
      ]}
      typeSpeed={80}
      backSpeed={50}
      loop
    />
  </span>

</p>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8'>
            <a
              href='mailto:atultomer74@gmail.com'
              target='_blank'
              className='px-8 py-3 rounded-full font-medium text-white transition-all duration-300 hover:-translate-y-0.5'
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                boxShadow: '0 0 24px rgba(99,102,241,0.45)'
              }}
            >
              ✦ Hire Me
            </a>
            <a
              href='./Atul_Resume.pdf'
              target='_blank'
              className='px-8 py-3 rounded-full font-medium text-slate-400 transition-all duration-300 hover:border-indigo-500 hover:text-indigo-300'
              style={{ border: '0.5px solid rgba(255,255,255,0.15)' }}
            >
              ↓ Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className='flex items-center justify-center lg:justify-start gap-3'>
            {[
              { icon: <FaGithub />,     href: 'https://github.com/AtulTomer123', label: 'GitHub'   },
{ icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/atul-tomer-625531310',  label: 'LinkedIn' },
{ icon: <FaEnvelope />,   href: 'mailto:atultomer74@gmail.com',  label: 'Email'    },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                aria-label={label}
                className='w-11 h-11 rounded-full flex items-center justify-center text-lg text-slate-400 transition-all duration-300 hover:text-indigo-300 hover:-translate-y-1'
                style={{ border: '0.5px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — Image */}
        <div className='w-full lg:w-1/2 flex items-center justify-center relative'>

          {/* Floating badges */}
          <div
            className='absolute bottom-4 left-4 sm:left-0 z-20 flex items-center gap-2 px-3 py-2 rounded-xl'
            style={{ background: '#0f172a', border: '0.5px solid rgba(99,102,241,0.3)', animation: 'float 3.5s 0.5s ease-in-out infinite' }}
          >
            <span className='w-2.5 h-2.5 bg-emerald-400 rounded-full' style={{ boxShadow: '0 0 6px #4ade80' }} />
            <div>
              <p className='text-[13px] font-medium text-slate-100 leading-tight'>Open to work</p>
              <p className='text-[11px] text-slate-500'>Full-time / Freelance</p>
            </div>
          </div>

          <div
            className='absolute top-4 right-4 sm:right-0 z-20 flex items-center gap-2 px-3 py-2 rounded-xl'
            style={{ background: '#0f172a', border: '0.5px solid rgba(99,102,241,0.3)', animation: 'float 3.5s 1s ease-in-out infinite' }}
          >
            <span className='text-indigo-400 text-base'>{'</>'}</span>
            <div>
              <p className='text-[13px] font-medium text-slate-100 leading-tight'>React + Tailwind</p>
              <p className='text-[11px] text-slate-500'>Clean code</p>
            </div>
          </div>

          {/* Spinning rings */}
          <div className='relative w-[260px] sm:w-[340px] h-[260px] sm:h-[340px]'>
            <div className='absolute inset-[-20px] rounded-full'
              style={{ border: '1px solid rgba(99,102,241,0.25)', animation: 'spin-slow 12s linear infinite' }}>
              <span className='absolute top-1/2 left-[-5px] w-[10px] h-[10px] bg-indigo-400 rounded-full -translate-y-1/2'
                style={{ boxShadow: '0 0 10px #818cf8' }} />
            </div>
            <div className='absolute inset-[-6px] rounded-full'
              style={{ border: '1px dashed rgba(168,85,247,0.2)', animation: 'spin-slow 8s linear infinite reverse' }} />

            {/* Glow */}
            <div className='absolute inset-[-30px] rounded-full'
              style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 65%)', animation: 'float 4s ease-in-out infinite' }} />

            {/* Image */}
            <div className='relative z-10 w-full h-full rounded-full overflow-hidden'
              style={{ border: '2px solid rgba(99,102,241,0.35)', animation: 'float 4s ease-in-out infinite' }}>
              <img
                src={myImg}
                alt='Atul Tomer'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bounce arrow */}
      <div className='absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce'>
        <HiArrowDown className='text-2xl' />
      </div>

      {/* Keyframes injected globally */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}

export default Hero
