import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import HomeImg from "./home.png"
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-tilte'>Home page...!</h1>

        <img src={HomeImg} className='img'/>

        <Footer/>
    </div>
  )
}

export default Home