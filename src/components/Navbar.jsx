import React, { useState } from 'react'
import { FaReact } from 'react-icons/fa'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home',     href: '#home'     },
  { name: 'About',    href: '#about'    },
  { name: 'Skills',   href: '#skills'   },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact',  href: '#contact'  },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-white/100 backdrop-blur-md border-b border-gray-800'>
      <div className='max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between'>

        {/* LEFT — Icon + Name */}
        <a href='#home' className='flex items-center gap-2 group'>
          <FaReact className='text-2xl text-blue-400 group-hover:rotate-180 transition-transform duration-500' />
          <span className='text-black font-semibold text-lg tracking-wide'>
            Atul <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Tomer</span>
          </span>
        </a>

        {/* CENTER/RIGHT — Nav Links Desktop */}
        <ul className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className='relative text-gray-800 text-sm font-medium hover:text-gray-400 transition-colors duration-200 group'
              >
                {link.name}
                <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full' />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className='md:hidden text-gray-400 hover:text-white text-2xl transition-colors duration-200'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-black/95 border-t border-gray-800 px-6 py-4'>
          <ul className='flex flex-col gap-4'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className='text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200'
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar