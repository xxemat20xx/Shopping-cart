import React from 'react'
import HeroSection from './HeroSection'
import DiscoverSection from './DiscoverSection'
import TopSellerWidget from './TopSellerWidget'
import Footer from './Footer'

const Home = () => {
  return (
    <> 
        <main className='p-4 md:p-8 lg:p-12'>
              
                <HeroSection />
                <DiscoverSection />
                <TopSellerWidget />
                
        </main>
       
    </>
     
  
  )
}

export default Home