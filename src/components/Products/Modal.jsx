import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from './ProductProvider';

const Modal = () => {
    const { title } = useParams();
    const { product } = useContext(ProductContext);
    const navigate = useNavigate();

    const decodedTitle = decodeURIComponent(title);
    const foundProduct = product.find(p => p.title === decodedTitle);

    if (!foundProduct) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-[400px] shadow-lg">
                <h2 className="text-xl font-bold mb-4">Product Details</h2>
                <div>
                    <img src={foundProduct.image} alt={foundProduct.title} className="w-full mb-4" />
                    <h3 className="text-lg font-semibold">{foundProduct.title}</h3>
                    <p><strong>Price:</strong> ${foundProduct.price}</p>
                    <p><strong>Rating:</strong> {foundProduct.rating.rate} ({foundProduct.rating.count} reviews)</p>
                    <p><strong>Description:</strong> This is a sample description of the product.</p>
                </div>

                <button className="mt-4 mr-4 bg-orange-500 text-white p-2 rounded hover:bg-orange-600 cursor-pointer">
                    Add to cart
                </button>
                <button className="mt-4 mr-4 bg-orange-500 text-white p-2 rounded hover:bg-orange-600 cursor-pointer">
                    Buy now
                </button>
                <button
                    onClick={() => navigate('/products')}
                    className="mt-4 mr-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 cursor-pointer"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
