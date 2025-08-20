import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white shadow-xl m-2 rounded-xl' : 'bg-transparent'}`}
    >
      <div className='container mx-auto px-6'>
        <div className='flex py-4 justify-between items-center'>
          <a href='/' className='flex items-center space-x-2'>
            <div className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold'>
              HD
            </div>
            <h1 className='text-xl font-bold'>Hữu Danh</h1>
          </a>

          <nav className='hidden md:flex space-x-8 font-medium'>
            <a href='#home' className='hover:text-blue-500 transition'>
              Home
            </a>
            <a href='#about' className='hover:text-blue-500 transition'>
              About
            </a>
            <a href='#skill' className='hover:text-blue-500 transition'>
              Skill
            </a>
            <a href='#project' className='hover:text-blue-500 transition'>
              Project
            </a>
            <a href='#contact' className='hover:text-blue-500 transition'>
              Contact
            </a>
          </nav>

          <button className='md:hidden text-gray-800 z-50' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className='md:hidden flex flex-col space-y-4 pb-4 font-medium'>
            <a href='#home' onClick={() => setIsOpen(false)} className='hover:text-blue-500'>
              Home
            </a>
            <a href='#about' onClick={() => setIsOpen(false)} className='hover:text-blue-500'>
              About
            </a>
            <a href='#skill' onClick={() => setIsOpen(false)} className='hover:text-blue-500'>
              Skill
            </a>
            <a href='#project' onClick={() => setIsOpen(false)} className='hover:text-blue-500'>
              Project
            </a>
            <a href='#contact' onClick={() => setIsOpen(false)} className='hover:text-blue-500'>
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
