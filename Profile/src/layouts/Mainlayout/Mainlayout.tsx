import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Banner from './Banner'
import About from './About'
import Skill from './Skill'
import Project from './ListProject'

export default function Mainlayout() {
  return (
    <div>
      <Header />
      <div className='bg-gray-50 h-500'>
        <Banner />
        <About />
        <Skill />
        <Project />
        main
      </div>
      <Footer />
    </div>
  )
}
