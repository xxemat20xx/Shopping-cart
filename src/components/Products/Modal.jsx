import React from 'react';

const Modal = ({ product, closeModal }) => {
  if (!product) return null; // If no product is passed, return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-[400px] shadow-lg">
        <h2 className="text-xl font-bold mb-4">Product Details</h2>
        <div>
          <img src={product.image} alt={product.title} className="w-full mb-4" />
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
          <p><strong>Description:</strong> This is a sample description of the product.</p>
        </div>
        
        <button className="mt-4 mr-4 bg-orange-500 text-white p-2 rounded hover:bg-orange-600 cursor-pointer">
            Add to cart
        </button>
        <button className="mt-4 mr-4 bg-orange-500 text-white p-2 rounded hover:bg-orange-600 cursor-pointer">
            Buy now
        </button>
        <button
          onClick={closeModal}
          className="mt-4 mr-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
