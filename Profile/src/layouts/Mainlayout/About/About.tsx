export default function About() {
  return (
    <div id='about' className='m-5 py-10 px-5 min-h-screen bg-indigo-50'>
      <div className='text-4xl font-bold text-center mt-10 mb-16'>About Me</div>
      <div className='grid grid-cols-1 md:grid-cols-12 items-center max-w-5xl mx-auto gap-6'>
        <div className='md:col-span-4 flex justify-center'>
          <img src='/images/Avartar-Danh.png' alt='' className='rounded-xl shadow-lg w-full max-w-[250px]' />
        </div>

        <div className='md:col-span-8'>
          <p className='text-indigo-600 uppercase font-bold mb-5 text-xl'>my info</p>
          <p className='leading-relaxed text-gray-700 mb-5'>
            Over one year of experience developing web applications using .NET Core 8 for backend and React for
            frontend. Skilled in optimizing frontend performance for speed and responsiveness, designing scalable
            backend APIs, and delivering secure, maintainable systems. Passionate about clean code, system performance,
            and continuous learning.
          </p>
          <div className='text-gray-700'>
            <p className='py-2'>
              <span className='font-bold'>Full name : </span> Nguyễn Tấn Hữu Danh
            </p>
            <p className='py-1'>
              <span className='font-bold'>Age : </span> 22
            </p>
            <p className='py-1'>
              <span className='font-bold'>Email : </span> nguyentanhuudanh@gmail.com
            </p>
            <p className='py-1'>
              <span className='font-bold'>Education : </span> Ho Chi Minh City University of Industry and Trade (HUIT)
              2021-2025
            </p>
            <p className='py-1'>
              <span className='font-bold'>Languages : </span> English, Vietnamese
            </p>
            <p className='py-1'>
              <span className='font-bold'>Location : </span> Ho Chi Minh City, Vietnam
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
