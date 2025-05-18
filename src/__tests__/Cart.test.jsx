import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductContext } from '../components/Products/ProductProvider';
import Cart from '../components/Cart/Cart';
import { jest } from '@jest/globals';

// Mock cart data
const mockCart = {
  items: [
    {
      id: 1,
      title: "Test Product",
      price: 99.99,
      image: "test-image.jpg",
      quantity: 2
    }
  ],
  totalQuantity: 2,
  totalAmount: 199.98
};

const mockEmptyCart = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
};

// Mock functions
const mockUpdateCartItemQuantity = jest.fn();
const mockRemoveFromCart = jest.fn();

const mockContext = {
  cart: mockCart,
  updateCartItemQuantity: mockUpdateCartItemQuantity,
  removeFromCart: mockRemoveFromCart
};

describe('Cart Component', () => {
  const renderWithContext = (cart) => {
    return render(
      <BrowserRouter>
        <ProductContext.Provider value={{
          cart,
          updateCartItemQuantity: mockContext.updateCartItemQuantity,
          removeFromCart: mockContext.removeFromCart
        }}>
          <Cart />
        </ProductContext.Provider>
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders empty cart message when cart is empty', async () => {
    renderWithContext(mockEmptyCart);
    
    await waitFor(() => {
      expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
      expect(screen.getByText('Continue Shopping →')).toBeInTheDocument();
    });
  });

  test('renders cart items when cart has items', async () => {
    renderWithContext(mockCart);
    
    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText('$99.99')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
    });
  });

  test('calls updateCartItemQuantity when quantity buttons are clicked', async () => {
    renderWithContext(mockCart);
    
    await waitFor(() => {
      const increaseButton = screen.getByText('+');
      const decreaseButton = screen.getByText('-');
      
      fireEvent.click(increaseButton);
      expect(mockContext.updateCartItemQuantity).toHaveBeenCalledWith(1, 3);
      
      fireEvent.click(decreaseButton);
      expect(mockContext.updateCartItemQuantity).toHaveBeenCalledWith(1, 1);
    });
  });

  test('calls removeFromCart when remove button is clicked', async () => {
    renderWithContext(mockCart);
    
    await waitFor(() => {
      const removeButton = screen.getByText('Remove');
      fireEvent.click(removeButton);
      
      expect(mockContext.removeFromCart).toHaveBeenCalledWith(1);
    });
  });

  test('displays correct order summary', async () => {
    renderWithContext(mockCart);
    
    await waitFor(() => {
      expect(screen.getByText('Items (2)')).toBeInTheDocument();
      expect(screen.getByTestId('total-amount')).toHaveTextContent('$199.98');
      expect(screen.getByText('Free')).toBeInTheDocument();
    });
  });
}); 