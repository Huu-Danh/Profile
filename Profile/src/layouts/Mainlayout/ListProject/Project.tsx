import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from 'src/components/ui/carousel'
import ProjectCard from './ProjectCrad'
export default function Project() {
  return (
    <div id='project' className='m-5 py-10 px-5 min-h-screen bg-indigo-50'>
      <div className='text-4xl font-bold text-center mt-10 mb-16'>Featured Projects</div>
      <Carousel className='w-full max-w-5xl mx-auto'>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='pl-1 md:basis-1/2 lg:basis-1/3'>
              <div className='flex items-center justify-center p-4'>
                <ProjectCard
                  src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3a1c3976-a9dd-4aa2-8a73-12f8438fcae0.png'
                  alt='project 1'
                  title='E-ecommerce Platform'
                  description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam repellendus temporibus, ipsum nihil molestiae quaerat eligendi provident? Distinctio eligendi quam, saepe consequuntur tempora sed in aspernatur repellat deserunt exercitationem!'
                  useTechs={['node']}
                  link='https://github.com/Huu-Danh/ShopMobile'
                  linkGit='https://github.com/Huu-Danh/ShopMobile'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
