import React, { useState } from 'react';
import { ProductContext } from './ProductProvider';
import { useContext } from 'react';
import MsgAlert from '../MessagesAlert/MsgAlert';

const Modal = ({ foundProduct, navigate, setShowModal }) => {
    const { setCart } = useContext(ProductContext);
    const [showAlert, setShowAlert] = useState(false);

    if (!foundProduct) return null;

    const addToCart = () => {
        setCart(prev => ({...prev, quantity: prev.quantity + 1}));
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false); // Hide alert after 2 seconds
            setShowModal(false); // Close modal after alert
            navigate('/products'); // Navigate after everything
        }, 2000);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-40">
                <div className="bg-white p-8 rounded-lg w-[400px] shadow-lg">
                    <h2 className="text-xl font-bold mb-4 text-center">Product Details</h2>
                    <div>
                        <img src={foundProduct.image} alt={foundProduct.title} className="w-1/2 mb-4 mx-auto" />
                        <h3 className="text-lg font-semibold">{foundProduct.title}</h3>
                        <p><strong>Price:</strong> ${foundProduct.price}</p>
                        <p><strong>Rating:</strong> {foundProduct.rating.rate} ({foundProduct.rating.count} reviews)</p>
                        <p><strong>Description:</strong> This is a sample description of the product.</p>
                    </div>

                    <div className="mt-4 flex gap-2">
                        <button 
                            className="flex-1 bg-orange-500 text-white p-2 rounded hover:bg-orange-600 cursor-pointer"
                            onClick={addToCart}
                        >
                            Add to cart
                        </button>
                        <button 
                            className="flex-1 bg-orange-500 text-white p-2 rounded hover:bg-orange-600 cursor-pointer"
                        >
                            Buy now
                        </button>
                        <button
                            onClick={() => {
                                setShowModal(false);
                                navigate('/products');
                            }}
                            className="flex-1 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 cursor-pointer"
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
