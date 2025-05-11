import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { ProductContext } from '../Products/ProductProvider'

import {  } from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
  const {cart} = useContext(ProductContext);

  return (
    
    <>
      <nav className='flex justify-around items-center align-center
      bg-white font-bold text-xl p-3 fixed top-0 z-1 w-full'>
        {/* Burger menu on smaller screen */}
        <button className='burger cursor-pointer text-xl 
        hover:text-orange-500 
        transition-all duration-300 
        delay-150 ease-in-out
        block
        md:hidden
        '><FontAwesomeIcon icon={faBars}/>
        </button>

        <div className="nav-logo">
          <h3 className='text-xl cursor-pointer text-orange-500'><Link to="/"><FontAwesomeIcon icon={faCartShopping}/> Shopping Cart</Link></h3>
        </div>
        <ul className='flex gap-5'>
            <li className='text-xl hover:text-orange-500 transition-all duration-300 delay-150 ease-in-out hidden md:block'><Link to="/">Home</Link></li>
            <li className='text-xl hover:text-orange-500 transition-all duration-300 delay-150 ease-in-out hidden md:block'><Link to="products">Products</Link></li>
            <li className='text-xl hover:text-orange-500 transition-all duration-300 delay-150 ease-in-out'><Link to="cart"><FontAwesomeIcon icon={faCartShopping}/>
            <sub> {cart.quantity > 99 ? '99+' : cart.quantity}</sub></Link></li>
        </ul>
    
    </nav>
      {/* SIDE NAV */}
        <Outlet />
    </>
  )
}

export default NavBar