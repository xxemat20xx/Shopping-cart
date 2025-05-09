import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    
    <>
      <nav className='flex flex-col items-center align-center bg-orange-700 font-bold text-xl text-white p-3 fixed top-0 z-1 w-full'>
        <ul className='flex gap-5'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="products">Products</Link></li>
            <li><Link to="cart">Cart</Link></li>
        </ul>
    
    </nav>

        <Outlet />
    </>
  )
}

export default NavBar