interface SkillCardProps {
  title: string
  description: string
  skills: string[]
  children: React.ReactNode
}
export default function SkillCard({ title, description, skills, children }: SkillCardProps) {
  return (
    <div className='bg-white p-6 rounded-xl shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl'>
      <div className='w-16 h-16 rounded-xl bg-gradient-to-b from-blue-700 to-indigo-600 flex items-center justify-center mb-4'>
        {children}
      </div>
      <h3 className='text-xl font-bold text-slate-800 mb-2'>{title}</h3>
      <p className='text-slate-600 mb-4'>{description}</p>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill, index) => (
          <span className='px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm' key={index}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
