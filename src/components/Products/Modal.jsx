import React, { useState } from 'react';
import { ProductContext } from './ProductProvider';
import { useContext } from 'react';
import MsgAlert from '../MessagesAlert/MsgAlert';
import StarRating from './StarRating';
const Modal = ({ foundProduct, navigate, setShowModal }) => {
    const { addToCart } = useContext(ProductContext);
    const [showAlert, setShowAlert] = useState(false);

    if (!foundProduct) return null;

    const handleAddToCart = () => {
        addToCart(foundProduct);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false); // Hide alert after 2 seconds
            setShowModal(false); // Close modal after alert
            navigate('/products'); // Navigate after everything
        }, 2000);
    };

    return (
        <>
            {/* Overlay with blur effect */}
            <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-40"
                onClick={() => {
                    setShowModal(false);
                    navigate('/products');
                }}
            >
                {/* Modal content */}
                <div 
                    className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full mx-4 transform transition-all duration-300 scale-100"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                >
                    <h2 className="text-xl font-bold mb-4 text-center">Product Details</h2>
                    <div>
                        <img src={foundProduct.image} alt={foundProduct.title} className="w-1/2 mb-4 mx-auto" />
                        <h3 className="text-lg font-semibold">{foundProduct.title}</h3>
                        <p><strong>Price:</strong> ${foundProduct.price}</p>
                        <div className='flex items-center justify-start gap-2'>
                            <p><strong>Rating:</strong> ({foundProduct.rating.count} reviews)</p>
                            <StarRating rating={foundProduct.rating.rate} />
                        </div>
                        <p><strong>Description:</strong> {foundProduct.description}</p>
                    </div>

                    <div className="mt-4 flex gap-2">
                        <button 
                            className="flex-1 bg-orange-500 text-white p-2 rounded hover:bg-orange-600 cursor-pointer transition-colors duration-200"
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </button>
                        <button
                            onClick={() => {
                                setShowModal(false);
                                navigate('/products');
                            }}
                            className="flex-1 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 cursor-pointer transition-colors duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>

            {/* Alert rendered outside modal but inside component */}
            {showAlert && (
                <MsgAlert 
                    message={`${foundProduct.title} added to cart! 🛒`}
                    type="success"
                />
            )}
        </>
    );
};

export default Modal;
