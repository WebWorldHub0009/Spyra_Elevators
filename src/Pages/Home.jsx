import React from 'react'
import HeroShowcase from '../Components/HeroShowcase'
import AboutShowcase from '../Components/AboutShowcase'
import WhyChooseSpyra from '../Components/WhyChooseSpyra'
import PopularDesigns from '../Components/PopularDesigns'

const Home = () => {
  return (
    <div>
      <HeroShowcase/>
      <AboutShowcase/>
      <WhyChooseSpyra/>
      <PopularDesigns/>
    </div>
  )
}

export default Home
