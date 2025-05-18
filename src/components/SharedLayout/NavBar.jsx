import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons'
import { ProductContext } from '../Products/ProductProvider'
import Footer from '../SharedLayout/Footer'

const NavBar = () => {
  const {cart, setIsLoading, setCategoryFilter} = useContext(ProductContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  const handleFilterClick = (category) => {
    if (setIsLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
    setCategoryFilter(category);
    setIsMobileMenuOpen(false);
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className='flex justify-around items-center align-center fixed top-0 z-50 w-full
      bg-white font-bold text-xl p-3 shadow-lg shadow-black/15'>
        {/* Burger menu on smaller screen */}
        <button 
          data-testid="burger-menu"
          className='burger cursor-pointer text-xl 
          hover:text-orange-500 
          transition-all duration-300 
          delay-150 ease-in-out
          block
          md:hidden'
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars}/>
        </button>

        <div className="nav-logo">
          <h3 className='text-xl cursor-pointer text-orange-500'>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <FontAwesomeIcon icon={faCartShopping}/> Shopping Cart
            </Link>
          </h3>
        </div>
         
        {/* Desktop Menu */}
        <ul className='md:flex gap-5'>
          <li className='text-xl hover:text-orange-500 transition-all duration-300 delay-150 ease-in-out hidden md:block'>
            <Link to="/">Home</Link>
          </li>
          <li className='text-xl hover:text-orange-500 transition-all duration-300 delay-150 ease-in-out hidden md:block'>
            <Link to="products" onClick={handleClick}>Products</Link>
          </li>
          <li className='text-xl hover:text-orange-500 transition-all duration-300 delay-150 ease-in-out '>
            <Link to="cart">
              <FontAwesomeIcon icon={faCartShopping}/>
              <sub> {cart.totalQuantity > 99 ? '99+' : cart.totalQuantity}</sub>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div 
          data-testid="mobile-nav"
          className={`fixed top-[60px] left-0 w-[180px] h-screen bg-gray-900 text-white 
          transform transition-transform duration-300 ease-in-out z-40
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:hidden`}>
          <nav className="flex flex-col gap-4 p-6 mt-4">
            <Link to="products" onClick={() => handleFilterClick("men's clothing")}>
              <button className="text-left hover:text-orange-300 w-full">Men's Clothing</button>
            </Link>

            <Link to="products" onClick={() => handleFilterClick("women's clothing")}>
              <button className="text-left hover:text-orange-300 w-full">Women's Clothing</button>
            </Link>

            <Link to="products" onClick={() => handleFilterClick("jewelery")}>
              <button className="text-left hover:text-orange-300 w-full">Jewelry</button>
            </Link>

            <Link to="products" onClick={() => handleFilterClick("electronics")}>
              <button className="text-left hover:text-orange-300 w-full">Electronics</button>
            </Link>
     
          </nav>
        </div>

        {/* Overlay when mobile menu is open */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>
    </>
  )
}

export default NavBar