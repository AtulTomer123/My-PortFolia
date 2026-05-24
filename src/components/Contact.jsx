import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import myImg from '../assets/images/contact-img.avif'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    // EmailJS baad mein connect karenge
  }

  return (
    <section id='contact' className='bg-gray-50 text-gray-800 py-10 px-6 sm:px-10 lg:px-20'>

      {/* Heading */}
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-gray-900'>
          Contact{' '}
          <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
            Me
          </span>
        </h2>
        <div className='w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full' />
      </div>

      <div className='max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch'>

        {/* LEFT — Image + Info */}
        <div className='w-full lg:w-3/5 flex flex-col  gap-6'>
          <div className='w-full h-138 rounded-2xl overflow-hidden shadow-md border border-gray-200'>
            <img
              src={myImg}
              alt='Atul Tomer'
              className='w-full h-full object-cover object-bottom'
            />
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className='w-full lg:w-3/5 bg-white rounded-2xl shadow-sm border border-gray-200 p-8'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

            <div className='flex flex-col gap-1'>
              <label className='text-sm font-medium text-gray-700'>Full Name</label>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Atul Tomer'
                required
                className='px-4 py-3 rounded-md border border-gray-200 bg-gray-50 text-gray-800 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-200'
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-sm font-medium text-gray-700'>Email</label>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='atul@example.com'
                required
                className='px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-200'
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-sm font-medium text-gray-700'>Phone</label>
              <input
                type='tel'
                name='phone'
                value={form.phone}
                onChange={handleChange}
                placeholder='+91 00000 00000'
                className='px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-200'
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-sm font-medium text-gray-700'>Message</label>
              <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Write your message here...'
                rows={5}
                required
                className='px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-200 resize-none'
              />
            </div>

            <button
              type='submit'
              className='w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg'
              style={{ background: 'linear-gradient(to right, #3b82f6, #a855f7)' }}
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact