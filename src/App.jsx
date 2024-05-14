import './App.css'

import Navbar from './components/Navbar/Navbar'
import backImg from './assets/Background.png'
import Homepage from './components/Homepage/Homepage'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


function App() {
 

  return (
 <>
 <div className='w-full h-screen' style={{backgroundImage: `url(${backImg})`}}>
 <Navbar/>
 <Homepage/>
 <AboutMe />
 <Projects />
 <Contact />
 </div>


 </>
  )
}

export default App
