import React from 'react'
import Nav from '../components/Nav'
import HomeHero_1 from '../components/HomeHero_1'
import SlideShowTwo from '../components/SlideShowTwo'
import HappyMoment from '../components/HappyMoment'
import Subscribe from '../components/Subscribe'
import FooterOne from '../components/FooterOne'

const Home = () => {
  return (
    <div className='bg-green-50'>
      <Nav/>
      <HomeHero_1/>
      <SlideShowTwo/>
      <HappyMoment/>
      <Subscribe/>
      <FooterOne/>
    </div>
  )
}

export default Home



