import './App.css'

import Navbar from './components/Navbar/Navbar'
import backImg from './assets/Background.png'
import Homepage from './components/Homepage/Homepage'
import AboutMe from './components/AboutMe/AboutMe'


function App() {
 

  return (
 <>
 <div className='w-full h-screen' style={{backgroundImage: `url(${backImg})`}}>
 <Navbar/>
 <Homepage/>
 <AboutMe />
 </div>


 </>
  )
}

export default App
