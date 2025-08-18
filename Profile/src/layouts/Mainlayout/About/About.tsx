export default function About() {
  return (
    <div className='m-5 py-15 px-5 h-[100vh] bg-indigo-50'>
      <div className='text-4xl font-bold text-center mb-16'>About Me</div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-gray-600'>
        <div className='leading-relaxed'>
          Over one year of experience developing web applications using .NET Core 8 for backend and React for frontend.
          Skilled in optimizing frontend performance for speed and responsiveness, designing scalable backend APIs, and
          delivering secure, maintainable systems. Passionate about clean code, system performance, and continuous
          learning.
        </div>
        <div className='grid grid-cols-2 grid-rows-2'>
          <div className='bg-red-500 m-5'>as</div>
          <div className='bg-red-500 m-5'>asd</div>
          <div className='bg-red-500 m-5'>asd</div>
          <div className='bg-red-500 m-5'>asd</div>
        </div>
      </div>
    </div>
  )
}
