import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import type { ImgHTMLAttributes } from 'react'
interface ProjectCardProps extends ImgHTMLAttributes<HTMLImageElement> {
  title: string
  description: string
  useTechs: string[]
  linkGit: string
  link: string
}
export default function ProjectCard({ title, description, useTechs, linkGit, link, src, alt }: ProjectCardProps) {
  return (
    <div className='bg-white rounded-xl overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl'>
      <div className='h-48 overflow-hidden'>
        <img src={src} alt={alt} className='w-full h-full object-cover' />
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-bold text-slate-800 mb-2'>{title}</h3>
        <p className='text-slate-600 mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2'>
          {useTechs.map((tech, index) => (
            <span className='px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm' key={index}>
              {tech}
            </span>
          ))}
        </div>
        <div className='flex space-x-2 pt-3'>
          <a href={linkGit} className='text-indigo-600 hover:text-indigo-800'>
            <FaGithub />
          </a>
          <a href={link} className='text-indigo-600 hover:text-indigo-800'>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  )
}
