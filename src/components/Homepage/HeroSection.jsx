import React from 'react'
import homepageData from './homepageData'
import { Link } from 'react-router-dom'
const HeroSection = () => {

  return (
    <div className='hero-section'>
        {homepageData.map((hero) => {
            const {id, src, headingText, heroText} = hero.hero;
            return(
                <div className='hero flex flex-col items-center justify-center relative overflow-hidden mt-8' key={id}>
                    <img src={src} alt={heroText} className='h-full w-full object-cover'/>
                        <div className='absolute inset-0 bg-black opacity-40'></div> {/*overlay*/}
                            <div className="hero-content absolute left-10  text-white">
                                            <h3 className='text-6xl font-extrabold mb-3'>{headingText}</h3>
                                            <p className='mb-3 text-xl'>{heroText}</p>
                                            <button className='text-orange-500 text-xl 
                                            hover:text-orange-300
                                            transition-all duration-400 ease-in-out'><Link to="products">Shop now <span>&#8594;</span></Link></button>
                            </div>
                </div>
            )
        } 
        )}
      
    </div>
  )
}

export default HeroSection