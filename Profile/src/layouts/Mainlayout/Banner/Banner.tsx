import { ShimmeringText } from 'src/components/ui/shimmering-text'
import { TypingText } from 'src/components/ui/typing-text'

export default function Banner() {
  return (
    <div
      id='home'
      className='relative w-full min-h-screen  dark:bg-gradient-to-l from-gray-200 to-gray-400 flex items-center'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10'>
        <div className='w-full md:w-1/2 text-center md:text-left space-y-6'>
          <div>
            <h1 className='text-2xl md:text-4xl pt-15 md:pt-0 text-gray-800'>Hi, I'm Danh</h1>
            <ShimmeringText
              className='text-black text-4xl md:text-6xl font-bold block'
              text='Developer'
              color='Black'
              shimmerColor='var(--color-white)'
              duration={1.5}
              repeatDelay={1}
            />
          </div>

          <p className='text-sm md:text-xl text-gray-700 leading-relaxed'>
            <TypingText
              text='Success doesn’t come from luck, but from persistent steps taken every day.'
              speed={80}
              showCursor={true}
              cursorClassName=''
            />
          </p>

          <div>
            <a
              href='#'
              className='inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition'
            >
              Download CV
            </a>
          </div>
        </div>

        <div className='w-full md:w-1/2 flex justify-center'>
          <img
            src='./public/images/huudanh.jpg'
            alt='avatar hữu danh'
            className='w-full max-w-[350px] md:max-w-[450px] aspect-square object-cover rounded-3xl shadow-lg animate-float'
          />
        </div>
      </div>
    </div>
  )
}
