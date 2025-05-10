
import { createContext, useEffect, useMemo, useState } from "react";
export const ProductContext = createContext();
const ProductProvider = ({children}) => {
  const [product, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  
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
  },[])
  return (

        <ProductContext.Provider value={{product, loading}}>
            {children}
        </ProductContext.Provider>
  )
}

export default ProductProvider;