import React from 'react'
import "../AboutMe/AboutMe.css"
import backImg from '../../assets/Background.png'
import aboutImg from '../AboutMe/aboutImg.png'
import "vanilla-tilt"


function AboutMe() {
  return (
   <div id='aboutMainContainer' className='w-full h-screen' style={{backgroundImage: `url(${backImg})`}}>

    <div id='aboutLeft'>
        <h1 id='aboutHeading1'>Meet the Mind Behind the Code</h1>
        <h2 id='aboutHeading2'>
        Hey there! I'm your friendly neighborhood web wizard. I sprinkle creativity into every line of code to craft captivating digital experiences. Let's collaborate and turn your ideas into digital masterpieces
        </h2>

        <h1 id='skillsHeading'>My Skills </h1>
    </div>
    <div id='aboutRight'>
        <div id='aboutImg' class="tiltcard" data-tilt data-tilt-scale="1.1"> 
            <img id='aboutMyImage' src={aboutImg}  />
        </div>
    </div>


   </div>
  )
}

export default AboutMe