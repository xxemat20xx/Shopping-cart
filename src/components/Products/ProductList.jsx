import React, { useContext } from 'react'
import { ProductContext } from './ProductProvider';
import { useState } from 'react';
import Modal from './Modal';
const ProductList = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const {product, loading} = useContext(ProductContext);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleClick =(data) => {
        setModalOpen(true);
        setSelectedProduct(data)
    }
    const closeModal = () => {
        setModalOpen(false)
        setSelectedProduct(null);  
    }
    if(loading) return <div className='mt-16'>Loading...</div>
    return(
        <div className='mt-16 p-5 flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-bold'>Products</h1>
                <div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {product.map((data) => {
                    const {id, title, image, price, rating} = data;
                    
                    
                  return(
                  <div key={id} className='card w-[300px] hover:w-[303px] cursor-pointer
                  bg-white p-6 rounded-sm shadow-lg shadow-black/50 transition-all duration-300 ease-in-out'
                  onClick={() => handleClick(data)}>
                            <div className="card-content  flex items-center flex-col">
                                <img src={image} alt={title} className='w-1/2'/>
                                <h3 className='font-bold'>{title}</h3>
                                <p>Price: ${price}</p>
                                <p>Rating: {rating.rate}</p>
                                <p>Purchased: {rating.count}</p>
                            </div>
                        
                  </div>
                
                  )
            }
            )}
            </div>
            {/* Modal Component */}
            {modalOpen && (
                <Modal
                    product={selectedProduct}
                    closeModal={closeModal}  // Pass the close function to the modal
                />
            )}
        </div>
        
  
    )
}

export default ProductList