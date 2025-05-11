
import { createContext, useEffect, useState, useMemo } from "react";
export const ProductContext = createContext();
const ProductProvider = ({children}) => {
  const [product, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [cart, setCart] = useState({quantity: 0}
);

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
  },[]);
  const topSeller = useMemo(() => {
    return [...product]
    .sort((a,b) => b.rating.count - a.rating.count)
    .slice(0, 4);
  },[product]);
  console.log(topSeller);
  
  const value = useMemo (() => ({
    product, 
    loading, 
    cart,
    topSeller,
    setCart
  }
  ),[product, loading, cart, topSeller]);
  
  return (

        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
  )
}

export default ProductProvider;