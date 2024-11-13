import React from 'react'
import "./About.css"
import Navbar from '../../components/Navbar/Navbar'
import AboutImg from './about.png'
import Footer from '../../components/Footer/Footer'

function About() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-tilte'> About page..!</h1>

        <img src={AboutImg} className='img'/>

        <Footer/>
    </div>
  )
}

export default About