import React, { useContext } from 'react';
import { ProductContext } from './ProductProvider';
import { useNavigate, Outlet } from 'react-router-dom';
import Loading from '../LoadingPage/LoadingPage';

const ProductList = () => {
    const {loading, filteredProducts} = useContext(ProductContext);
    const navigate = useNavigate();

    const handleClick = (data) => {
        const encodedTitle = encodeURIComponent(data.title); // encode for safe URL
        navigate(`/products/${encodedTitle}`);
    };

    if (loading) return <Loading />;

    return (
        <div className='mt-16 p-5 flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold'>Products</h1>
            <div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
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

         
            <Outlet />
        </div>
    );
};

export default ProductList;
