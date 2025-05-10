import React, { useContext } from 'react'
import { ProductContext } from './ProductProvider';
import { useState } from 'react';

const ProductList = () => {
    const [modalOpen, setModalOpen] = useState(true);
    const {product, loading} = useContext(ProductContext);
    
    if(loading) return <div className='mt-16'>Loading...</div>
    return(
        <div className='mt-16  p-5'>
                <h1 className='text-4xl font-bold'>Products</h1>
                <div className='cards grid grid-cols-2 gap-3'>
            {product.map((data) => {
                    const {id, title, image, price, rating} = data;
                    console.log(data);
                    
                  return(
                  <div key={id} className='card bg-white p-6 rounded-lg shadow-lg shadow-black/20'>
                            <div className="image-container max-w-32">
                                <img src={image} alt="" className='w-full'/>
                            </div>
                            
                            <div className="card-content">
                                <h3 className='text-xl font-bold'>{title}</h3>
                                <p>$ {price}</p>
                                <p>Rating: {rating.rate}</p>
                                <p>Purchased: {rating.count}</p>
                                <button className='bg-orange-500 p-3 text-white cursor-pointer'
                                >View</button>
                            </div>
                  </div>
                  )
            }
            )}
        </div>
        </div>
        
  
    )
}

export default ProductList