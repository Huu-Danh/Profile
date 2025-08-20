import SkillCard from './SkillCard'

export default function Skill() {
  return (
    <div id='skill' className='m-5 py-10 px-5 h-[100vh]'>
      <div className='text-4xl font-bold text-center mb-16'>My Skill</div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <SkillCard
          title='Frontend Development'
          description='Building responsive and interactive web interfaces using modern frameworks and libraries.'
          skills={['React', 'ASP.Net', 'Winform', 'PHP', 'Tailwind', 'Bootstrap', 'JavaScript', 'TypeScript']}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.5}
            stroke='currentColor'
            className='size-6 text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5'
            />
          </svg>{' '}
        </SkillCard>
        <SkillCard
          title='Backend Development'
          description='Developing robust server-side applications and APIs with efficiency and scalability in mind.'
          skills={['Nodejs', 'Express', 'Net Core', 'Net Framework', 'FastApi', 'Neo4j', 'MongoDB', 'SQL', 'MySQL']}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.5}
            stroke='currentColor'
            className='size-6 text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z'
            />
          </svg>
        </SkillCard>
        <SkillCard
          title='Cloud & DevOps'
          description='Implementing cloud solutions and automation pipelines for seamless deployment workflows.'
          skills={['Docker', 'CI/CD']}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.5}
            stroke='currentColor'
            className='size-6 text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z'
            />
          </svg>
        </SkillCard>
      </div>
    </div>
  )
}
