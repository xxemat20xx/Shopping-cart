import React, { useContext, useState } from 'react';
import { ProductContext } from './ProductProvider';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../LoadingPage/LoadingPage';
import Modal from './Modal'; // Assuming Modal is in the same folder
import SideNav from '../SharedLayout/SideNav';
import { Outlet } from 'react-router-dom';

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
                <h1 className='text-4xl font-bold text-center'>Products</h1>
                <div className='cards grid grid-cols-1 justify-self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8'>
                    {filteredProducts.map((data) => {
                        const { id, title, image, price, rating } = data;

                        return (
                            <div
                                key={id}
                                className='card w-[300px] cursor-pointer bg-white p-6 rounded-sm 
                                shadow-lg shadow-black/50 
                                hover:scale-[1.02] transition-all 
                                duration-300 flex flex-col 
                                justify-between
                                md:w-[280px]'
                                onClick={() => handleClick(data)}
                            >
                                <div className="card-content flex flex-col items-center h-[420px] justify-around">
                                    <img
                                        src={image}
                                        alt={title}
                                        className="h-50 w-50 object-contain mb-4"
                                    />
                                    <div className="text-center">
                                        <h3 className="font-bold text-sm mb-2 line-clamp-2">{title}</h3>
                                        <p>Price: ${price}</p>
                                        <p>Rating: {rating.rate}</p>
                                        <p>Purchased: {rating.count}</p>
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
