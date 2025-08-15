import React from 'react'
import HeroShowcase from '../Components/HeroShowcase'
import AboutShowcase from '../Components/AboutShowcase'
import WhyChooseSpyra from '../Components/WhyChooseSpyra'
import PopularDesigns from '../Components/PopularDesigns'
import Showcase from '../Components/Showcase'

const Home = () => {
  return (
    <div>
      <HeroShowcase/>
      <AboutShowcase/>
      <Showcase/>
      <PopularDesigns/>
    </div>
  )
}

export default Home
