import React, { useEffect } from 'react'
import { discoverMoreData } from './homepageData';
import { Link } from 'react-router-dom';
const DiscoverSection = () => {
  
 
  return (
    <div className='discover-section min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5'>
        {discoverMoreData.map((data) => {
            const {id, src, category} = data;
            return(
                <div key={id} className='mt-5 flex flex-col items-center'>
                    <img src={src} alt="" className='w-1/2 md:w-full'/>
                    <p className='font-bold'>{category}</p>
                    <div>
                        <button className='text-orange-500 font-bold'><Link to="cart">Explore More</Link></button>
                    </div>
                    
                </div>
            )
        })}
    </div>
  )
}

export default DiscoverSection