import React, { useContext, useState } from 'react';
import { ProductContext } from './ProductProvider';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../LoadingPage/LoadingPage';
import Modal from './Modal'; // Assuming Modal is in the same folder
import SideNav from '../SharedLayout/SideNav';
import { Outlet } from 'react-router-dom';
import StarRating from './StarRating';

const ProductList = () => {
    const { loading, filteredProducts, product, setCategoryFilter } = useContext(ProductContext);
    const navigate = useNavigate();
    const { title } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClick = (data) => {
        const encodedTitle = encodeURIComponent(data.title); // encode for safe URL
        navigate(`/products/${encodedTitle}`);
        setSelectedProduct(data); // Set the selected product
        setShowModal(true); // Show the modal
    };

    const decodedTitle = decodeURIComponent(title);
    const foundProduct = product.find(p => p.title === decodedTitle);

    if (loading) return <Loading />;

    return (
        <div className='flex'>
            {/* SideNav */}
            <SideNav setCategoryFilter={setCategoryFilter} />
            
            {/* Main Content */}
            <div className='flex-1 my-16 p-5'>
                <h1 className='text-4xl font-bold text-center md:text-left'>Products</h1>
                <div className="text-center bg-orange-500 w-24 h-2 mx-auto my-5 block md:text-left md:mx-0"></div>

                <div className='cards grid grid-cols-1 justify-self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8'>
                    {filteredProducts.map((data) => {
                        const { id, title, image, price, rating } = data;

                        return (
                            <div
                                key={id}
                                className='card w-full max-w-[280px] cursor-pointer bg-white p-6 rounded-lg 
                                shadow-lg shadow-black/5 hover:shadow-xl
                                hover:scale-[1.02] transition-all 
                                duration-300
                                mx-auto'
                                onClick={() => handleClick(data)}
                            >
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="w-full h-[200px] flex items-center justify-center">
                                        <img
                                            src={image}
                                            alt={title}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                    <div className="w-full space-y-2">
                                        <h3 className="font-bold text-sm line-clamp-2 min-h-[2.5rem]">{title}</h3>
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-lg font-semibold text-orange-500">${price}</p>
                                            <StarRating rating={rating.rate} />
                                            <p className="text-sm text-gray-600">Purchased: {rating.count}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Conditionally render the Modal */}
                {showModal && foundProduct && (
                    <Modal foundProduct={foundProduct} navigate={navigate} setShowModal={setShowModal} />
                )}
                <Outlet />
            </div>
        </div>
    );
};

export default ProductList;
