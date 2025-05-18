import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../Products/ProductProvider'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, updateCartItemQuantity, removeFromCart } = useContext(ProductContext)
   
  if (cart.items.length === 0) {
    return (
      <div className='mt-16 p-5 text-center'>
        <h1 className='text-6xl font-extrabold mb-4'>Cart</h1>
        <p className='text-xl mb-4'>Your cart is empty</p>
        <Link to="/products" className='text-orange-500 hover:text-orange-600'>
          Continue Shopping →
        </Link>
      </div>
    )
  }

  return (
    <div className='mt-16 p-5'>
      <h1 className='text-6xl font-extrabold mb-8'>Cart</h1>
      
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Cart Items */}
        <div className='lg:col-span-2 space-y-4'>
          {cart.items.map((item) => (
            <div key={item.id} className='bg-white p-4 rounded-lg shadow-md flex gap-4'>
              <img src={item.image} alt={item.title} className='w-24 h-24 object-contain' />
              
              <div className='flex-1'>
                <h3 className='font-semibold text-lg mb-2'>{item.title}</h3>
                <p className='text-gray-600 mb-2'>${item.price}</p>
                
                <div className='flex items-center gap-4'>
                  <div className='flex items-center border rounded-md'>
                    <button 
                      onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                      className='px-3 py-1 text-lg hover:bg-gray-100'
                    >
                      -
                    </button>
                    <span className='px-3 py-1'>{item.quantity}</span>
                    <button 
                      onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                      className='px-3 py-1 text-lg hover:bg-gray-100'
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className='text-red-500 hover:text-red-600'
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className='bg-white p-6 rounded-lg shadow-md h-fit'>
          <h2 className='text-2xl font-bold mb-4'>Order Summary</h2>
          
          <div className='space-y-2 mb-4'>
            <div className='flex justify-between'>
              <span>Items ({cart.totalQuantity})</span>
              <span>${cart.totalAmount.toFixed(2)}</span>
            </div>
            <div className='flex justify-between'>
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>
          
          <div className='border-t pt-4 mb-4'>
            <div className='flex justify-between font-bold'>
              <span>Total</span>
              <span data-testid="total-amount">${cart.totalAmount.toFixed(2)}</span>
            </div>
          </div>
          
          <button className='w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors'>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart