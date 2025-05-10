import React from 'react'
import HeroSection from './HeroSection'
import DiscoverSection from './DiscoverSection'

const Home = () => {
  return (
    <> 
        <HeroSection />
        <DiscoverSection />
        <footer className='bg-gray-700 h-32'>
            <h1 className='text-6xl text-white font-bold'>Footer</h1>
        </footer>
    </>
     
  
  )
}

export default Home