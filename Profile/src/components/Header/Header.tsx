import { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <div
      className={`fixed top-0 left-0 right-0 mx-auto z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white shadow-xl m-2 rounded-xl' : 'bg-transparent'}`}
    >
      <div className='container'>
        <div className='flex px-20 py-5 justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold'>
              HD
            </div>
            <h1 className='text-xl font-bold truncate'>Hữu Danh</h1>
          </div>
          <nav className='space-x-8 flex-col '>
            <a href='#' className='hover:text-blue-500'>
              Home
            </a>
            <a href='#' className='hover:text-blue-500'>
              About
            </a>
            <a href='#' className='hover:text-blue-500'>
              Skill
            </a>
            <a href='#' className='hover:text-blue-500'>
              Project
            </a>
            <a href='#' className='hover:text-blue-500'>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
