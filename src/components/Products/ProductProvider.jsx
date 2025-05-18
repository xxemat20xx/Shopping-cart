import { createContext, useEffect, useState, useMemo } from "react";
import Loading from "../LoadingPage/LoadingPage";
export const ProductContext = createContext();
const ProductProvider = ({children}) => {
  const [product, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage or use default values
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {
      items: [],
      totalQuantity: 0,
      totalAmount: 0
    };
  });
  const [categoryFilter, setCategoryFilter] = useState(null);

  const addToCart = (item) => {
    setCart(prev => {
      const existingItemIndex = prev.items.findIndex(i => i.id === item.id);
      let updatedItems;
      
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        updatedItems = [...prev.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
      } else {
        // New item
        updatedItems = [...prev.items, { ...item, quantity: 1 }];
      }

      const totalQuantity = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      return {
        items: updatedItems,
        totalQuantity,
        totalAmount
      };
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prev => {
      const updatedItems = prev.items.filter(item => item.id !== itemId);
      const totalQuantity = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      return {
        items: updatedItems,
        totalQuantity,
        totalAmount
      };
    });
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(prev => {
      const updatedItems = prev.items.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      
      const totalQuantity = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      return {
        items: updatedItems,
        totalQuantity,
        totalAmount
      };
    });
  };

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
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    setCategoryFilter
  }
  ),[product, loading, cart, topSeller, filteredProducts]);
  
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;