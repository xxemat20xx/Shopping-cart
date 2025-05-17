
import { createContext, useEffect, useState, useMemo } from "react";
import Loading from "../LoadingPage/LoadingPage";
export const ProductContext = createContext();
const ProductProvider = ({children}) => {
  const [product, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [cart, setCart] = useState({quantity: 0});
  const [categoryFilter, setCategoryFilter] = useState(null);

  const filteredProducts = categoryFilter
    ? product.filter((p) => p.category.toLowerCase() === categoryFilter.toLowerCase())
    : product;
  const fetchAPI = async () => {
    const url = 'https://fakestoreapi.com/products'
    try {
      const response = await fetch(url);
      if(!response.ok) throw new Error(`Status: ${response.status}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }finally{
           setIsLoading(false);
    }
  }
  
useEffect(() => {
    fetchAPI();
  }, []);
  


  const topSeller = useMemo(() => {
    return [...product]
    .sort((a,b) => b.rating.count - a.rating.count)
    .slice(0, 4);
  },[product]);
  
  
  const value = useMemo (() => ({
    product, 
    loading, 
    cart,
    topSeller,
    filteredProducts,
    setCart,
    setCategoryFilter
  }
  ),[product, loading, cart, topSeller,filteredProducts]);
  
  return (

        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
  )
}

export default ProductProvider;