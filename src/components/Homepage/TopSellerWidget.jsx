import React, { useContext } from 'react'
import { ProductContext } from '../Products/ProductProvider'
const TopSellerWidget = () => {
  const {topSeller} = useContext(ProductContext);
  
  
  return (
    <div className='my-16'>
        <h1 className='text-4xl font-bold text-center md:text-left'>Top Sellers</h1>
        <div className="text-center bg-orange-500 w-24 h-2 mx-auto my-5 block md:text-left md:mx-0"></div>
        <div className="flex items-center justify-center md:justify-start">
                 <div className='cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 '>
                   {topSeller.map((data) => {
            const {id, image, rating} = data;
            return(
                <div key={id} className='card w-[400px] bg-white p-6 rounded-sm 
                shadow-lg shadow-black/50 flex flex-col justify-center items-center
                md:w-[250px]'>
                    <img src={image} alt="" className='h-50 w-50 object-contain mb-4'/>
                    <p><strong>Item Purchased: {rating.count}+</strong></p>
                </div>
            )
            
        })}
         </div>
        </div>
        
    </div>
  )
}

export default TopSellerWidget