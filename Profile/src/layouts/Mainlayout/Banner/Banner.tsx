export default function Banner() {
  return (
    <div className='relative w-full h-[100vh] bg-gradient-to-l from-gray-200 to-gray-400 flex items-center text-white'>
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
        <div className='w-full md:w-1/2 text-center md:text-left space-y-6'>
          <div>
            <h1 className='text-2xl md:text-4xl'>Hi, I'm Hữu Danh</h1>
            <span className='text-black text-4xl md:text-6xl font-bold '>Developer</span>
          </div>
          <div className='text-sm md:text-xl text-gray-700'>
            Success doesn’t come from luck, but from persistent steps taken every day.
          </div>

          <div>
            <a
              href='#'
              className='px-6 py-3 bg-blue-400 text-black font-semibold rounded-lg shadow-md hover:bg-blue-500 transition'
            >
              Download CV
            </a>
          </div>
        </div>

        <div className='w-full md:w-1/2 flex justify-center pt-20'>
          <img
            src='./public/images/huudanh.jpg'
            alt='avatar hữu danh'
            className=' w-[500px] h-[500px] object-cover rounded-3xl shadow-lg animate-float '
          />
        </div>
      </div>
    </div>
  )
}
