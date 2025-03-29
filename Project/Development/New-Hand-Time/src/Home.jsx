import React from 'react'
import HomePage from './Component/HomePage'
import Service from './Component/Service'
import About from './Component/About'
import Contactform from './Component/Contactform'

const Home = () => {
  return (
    <div>
        <HomePage/>
        <Service/>
        <About/>
        <Contactform/>
    </div>
  )
}

export default Home