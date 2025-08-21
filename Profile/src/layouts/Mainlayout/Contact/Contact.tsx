import { BiLogoLinkedin } from 'react-icons/bi'
import { FaFacebookF, FaGithub, FaPhone } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import Input from 'src/components/Input'
import { Button } from 'src/components/ui/button'
export default function Contact() {
  return (
    <div id='contact' className='m-5 py-10 px-5 min-h-screen'>
      <div className='text-4xl font-bold text-center mt-10 mb-16'>Get In Touch</div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto '>
        <div className='space-y-8'>
          <div>
            <h3 className='text-xl font-bold text-slate-800 mb-4'>Contact Information</h3>
            <div className='space-y-4'>
              <div className='flex items-start space-x-4'>
                <div className='mt-1 text-indigo-600'>
                  <MdEmail />
                </div>
                <div>
                  <h4 className='font-medium text-slate-800'>Email</h4>
                  <p className='text-slate-600'>nguyentanhuudanh@gmail.com</p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <div className='mt-1 text-indigo-600'>
                  <FaPhone />
                </div>
                <div>
                  <h4 className='font-medium text-slate-800'>Phone</h4>
                  <p className='text-slate-600'>0901219753</p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <div className='mt-1 text-indigo-600'>
                  <IoLocationSharp />
                </div>
                <div>
                  <h4 className='font-medium text-slate-800'>Location</h4>
                  <p className='text-slate-600'>Go Vap, Ho Chi Minh City, Viet Nam</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold text-slate-800 mb-4'>Social Media</h3>
            <div className='flex space-x-4'>
              <a
                href='https://github.com/Huu-Danh'
                className='w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition'
              >
                <FaGithub />
              </a>
              <a
                href='https://www.linkedin.com/in/h%E1%BB%AFu-danh-557095187/'
                className='w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition'
              >
                <BiLogoLinkedin />
              </a>
              <a
                href='https://www.facebook.com/nthd2003.official'
                className='w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition'
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
        <form className=''>
          <div className='block font-medium text-sm text-slate-800 mb-1'>Name</div>
          <Input placeholder='Your Name' />
          <div className='block font-medium text-sm text-slate-800 mb-1'>Email</div>
          <Input type='Email' placeholder='Your Email' />
          <div className='block font-medium text-sm text-slate-800 mb-1'>Subject</div>
          <Input type='text' placeholder='Subject' />
          <div className='block font-medium text-sm text-slate-800 mb-1'>Message</div>
          <textarea
            className='w-full h-30 mb-5 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
            placeholder='Your Message'
          />
          <Button className='px-6 py-5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition w-full'>
            Send Message <IoIosSend />
          </Button>
        </form>
      </div>
    </div>
  )
}
