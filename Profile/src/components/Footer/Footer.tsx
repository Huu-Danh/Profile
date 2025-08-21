import { FaFacebook, FaGithub, FaLinkedin, FaPhone, FaYoutube } from 'react-icons/fa'
import { GradientBackground } from '../ui/background'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'

export default function Footer() {
  return (
    <div className='w-full overflow-hidden'>
      <GradientBackground
        className='from-slate-900 via-purple-900 to-slate-950 pt-10 pb-4 px-4 md:px-8'
        transition={{ duration: 15, ease: 'easeInOut', repeat: Infinity }}
      >
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
            <div className='space-y-4'>
              <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold'>
                  HD
                </div>
                <h1 className='text-xl text-white font-bold'>Hữu Danh</h1>
              </div>
              <p className=' text-gray-400'>
                Passionate developer creating innovative solutions with modern technologies.
              </p>
              <div className='flex space-x-4 pt-2'>
                <a href='#' className='social-icon text-gray-400 hover:text-white text-lg'>
                  <FaGithub />
                </a>
                <a href='#' className='social-icon text-gray-400 hover:text-blue-400 text-lg'>
                  <FaLinkedin />
                </a>
                <a href='#' className='social-icon text-gray-400 hover:text-blue-800 text-lg'>
                  <FaFacebook />
                </a>
                <a href='#' className='social-icon text-gray-400 hover:text-red-500 text-lg'>
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div>
              <h3 className='text-lg text-white font-semibold mb-4'>Quick Links</h3>
              <ul className='space-y-2'>
                <li>
                  <a href='#home' className='footer-link text-gray-400 hover:text-white'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#about' className='footer-link text-gray-400 hover:text-white'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#skill' className='footer-link text-gray-400 hover:text-white'>
                    Skills
                  </a>
                </li>
                <li>
                  <a href='#project' className='footer-link text-gray-400 hover:text-white'>
                    Projects
                  </a>
                </li>
                <li>
                  <a href='#contact' className='footer-link text-gray-400 hover:text-white'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg text-white font-semibold mb-4'>Contact Info</h3>
              <ul className='space-y-3'>
                <li className='flex items-start space-x-3'>
                  <FaLocationDot className='text-white' />
                  <span className='text-gray-400'>Go Vap, Ho Chi Minh City, Vietnam</span>
                </li>
                <li className='flex items-start space-x-3'>
                  <IoMail className='text-white' />
                  <a href='nguyentanhuudanh@gmail.com' className='footer-link text-gray-400 hover:text-white'>
                    nguyentanhuudanh@gmail.com
                  </a>
                </li>
                <li className='flex items-start space-x-3'>
                  <FaPhone className='text-white' />
                  <a href='tel:0901219753' className='footer-link text-gray-400 hover:text-white'>
                    0901219753
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='pt-4 border-t border-gray-700 items-center'>
            <p className='text-gray-400 justify-center text-center text-sm'>
              © 2025 DevProfile. All rights reserved | Design by Nguyễn Tấn Hữu Danh
            </p>
          </div>
        </div>
      </GradientBackground>
    </div>
  )
}
