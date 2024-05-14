import React from 'react'
import "../AboutMe/AboutMe.css"
import backImg from '../../assets/Background.png'
import aboutImg from '../AboutMe/aboutImg.png'

import Skills from '../Skills/Skills'
import html from '../../assets/html.svg'
import c from '../../assets/c.svg'
import cpp from '../../assets/cpp.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import bootstrap from '../../assets/bootstrap.svg'
import express from '../../assets/express.png'
import git from '../../assets/git.svg'
import mysql from '../../assets/mysql.svg'
import netlify from '../../assets/netlify.svg'
import nodejs from '../../assets/node-js.svg'
import python from '../../assets/python.svg'
import react from '../../assets/react.svg'
import tailwind from '../../assets/tailwind.svg'
import vercel from '../../assets/vercel.svg'
function AboutMe() {

  const handleClick = () => {
    window.location.href = "#contactHeading"; // Replace "https://example.com" with the URL you want to go to
  };


  return (
    <div>
   <div id='aboutMainContainer' className='w-full h-screen' style={{backgroundImage: `url(${backImg})`}}>

    <div id='aboutLeft'>
        <h1 id='aboutHeading1'>Meet the Mind Behind the Code</h1>
        <h2 id='aboutHeading2'>
        Hey there! I'm your friendly neighborhood web wizard. I sprinkle creativity into every line of code to craft captivating digital experiences. Let's collaborate and turn your ideas into digital masterpieces
        </h2>
        <button onClick={handleClick} id='aboutBtn'>Let's Connect!</button>
        <h1 id='skillsHeading'> Tech Stack : </h1>
        <section id='skillSection'>
        <Skills imageSrc={html} skillText="HTML"/>
        <Skills imageSrc={css} skillText="CSS"/>
        <Skills imageSrc={js} skillText="JS"/>
        <Skills imageSrc={react} skillText="React"/>
        <Skills imageSrc={nodejs} skillText="node.JS"/>
        <Skills imageSrc={express} skillText="express.js"/>
        <Skills imageSrc={mysql} skillText="mySQL"/>
        <Skills imageSrc={git} skillText="Git & Github"/>
        <Skills imageSrc={c} skillText="C"/>
        <Skills imageSrc={cpp} skillText="C++"/>
        <Skills imageSrc={python} skillText="python"/>
        <Skills imageSrc={vercel} skillText="Vercel"/>
        <Skills imageSrc={netlify} skillText="Netlify"/>
        <Skills imageSrc={tailwind} skillText="Tailwind CSS"/>
        <Skills imageSrc={bootstrap} skillText="Bootstrap"/>
     
        </section>
    </div>
    <div id='aboutRight'>
        <div id='aboutImg'>
            <img id='aboutMyImage' src={aboutImg}  />
        </div>
    </div>
   


   </div>
   <div id='aboutShape'>

</div>
   </div>
  )
}

export default AboutMe