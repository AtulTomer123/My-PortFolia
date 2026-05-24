import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaDatabase, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

 const skills = [
  { name: 'HTML5',        icon: <FaHtml5 />,       level: 'Expert',       color: 'text-orange-500' },
  { name: 'CSS3',         icon: <FaCss3Alt />,      level: 'Expert',       color: 'text-blue-500'   },
  { name: 'JavaScript',   icon: <FaJs />,           level: 'Intermediate', color: 'text-yellow-400' },
  { name: 'Bootstrap',    icon: <FaBootstrap />,    level: 'Expert',       color: 'text-purple-500' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />,  level: 'Intermediate', color: 'text-cyan-400'   },
  { name: 'React',        icon: <FaReact />,        level: 'Learning',     color: 'text-sky-400'    },
  { name: 'MySQL',        icon: <FaDatabase />,     level: 'Basic',        color: 'text-blue-300'   },
  { name: 'Git',          icon: <FaGitAlt />,       level: 'Basic',        color: 'text-orange-400' },
]

export default skills;