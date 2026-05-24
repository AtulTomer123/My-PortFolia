import React from 'react'
import { FaReact, FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHome, FaUser, FaCode, FaProjectDiagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='relative bg-black text-white overflow-hidden'>

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

      <div className='relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-10 pb-6'>

     <div className='grid grid-cols-1 md:grid-cols-5 gap-10'>

          {/* Column 1 — About */}
          <div className='flex flex-col gap-4 col-span-2'>
            <a href='#home' className='flex items-center gap-2 group w-fit'>
              <FaReact className='text-2xl text-blue-400 group-hover:rotate-180 transition-transform duration-500' />
              <span className='text-white font-semibold text-lg tracking-wide'>
                Atul <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Portfolio</span>
              </span>
            </a>
            <p className='text-gray-500 text-sm leading-7'>
              Thanks for visiting the Atul Tomer Portfolio. I'm a Frontend Developer passionate about building clean and modern web experiences.
            </p>
            <div className='flex items-center gap-3 mt-1'>
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
                  className='w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300'
                  style={{ border: '0.5px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className='flex flex-col gap-4 col-span-1'>
            <h3 className='text-white font-semibold text-base tracking-wide'>Quick Links</h3>
            <ul className='flex flex-col gap-3'>
              {[
                { name: 'Home',     href: '#home',     icon: <FaHome />          },
                { name: 'About',    href: '#about',    icon: <FaUser />          },
                { name: 'Skills',   href: '#skills',   icon: <FaCode />          },
                { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
                { name: 'Contact',  href: '#contact',  icon: <FaEnvelope />      },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='flex items-center gap-2 text-gray-500 text-sm hover:text-blue-400 transition-colors duration-200 group w-fit'
                  >
                    <span className='text-blue-500 text-xs group-hover:translate-x-1 transition-transform duration-200'>
                      {link.icon}
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact Info */}
          <div className='flex flex-col gap-4 col-span-2 '>
            <h3 className='text-white font-semibold text-base tracking-wide'>Contact Info</h3>
            <ul className='flex flex-col gap-4 '>
              <li className='flex items-center gap-3 text-gray-500 text-sm'>
                <div className='w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <FaPhone className='text-blue-400 text-xs' />
                </div>
                <a href='tel:+916398025489' className='hover:text-blue-400 transition-colors duration-200'>
  +91 63980-25489
</a>
              </li>
              <li className='flex items-center gap-3 text-gray-500 text-sm'>
                <div className='w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <FaEnvelope className='text-blue-400 text-xs' />
                </div>
                <a href='mailto:atultomer74@gmail.com' className='hover:text-blue-400 transition-colors duration-200'>
  atultomer74@gmail.com
</a>
              </li>
              <li className='flex items-center gap-3 text-gray-500 text-sm'>
                <div className='w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <FaMapMarkerAlt className='text-blue-100 text-xs' />
                </div>
                <span>Ghaziabad, Pilkhuwa, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider + Copyright */}
        <div className='border-t border-gray-800 mt-12 pt-6 text-center'>
          <p className='text-gray-100 text-md'>
            © {new Date().getFullYear()} Atul Tomer. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer