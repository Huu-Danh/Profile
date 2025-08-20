import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Banner from './Banner'
import About from './About'
import Skill from './Skill'

export default function Mainlayout() {
  return (
    <div>
      <Header />
      <div className='bg-gray-50 h-500'>
        <Banner />
        <About />
        <Skill />
        main
      </div>
      <Footer />
    </div>
  )
}
