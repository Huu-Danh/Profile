import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Banner from './Banner'
import About from './About'
import Skill from './Skill'
import Project from './ListProject'
import Contact from './Contact'

export default function Mainlayout() {
  return (
    <div>
      <Header />
      <div className='bg-gray-50 min-h-screen'>
        <Banner />
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
