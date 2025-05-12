import React from 'react'
import HeroSection from './HeroSection'
import DiscoverSection from './DiscoverSection'
import TopSellerWidget from './TopSellerWidget'
import Footer from '../SharedLayout/Footer'

const Home = () => {
  return (
    <> 
        <main className='flex-1 bg-gray-100 md:p-12 sm:p-4'>
              
                <HeroSection />
                <DiscoverSection />
                <TopSellerWidget />
                
        </main>
       
    </>
     
  
  )
}

export default Home