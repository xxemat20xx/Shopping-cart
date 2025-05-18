import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductContext } from '../components/Products/ProductProvider';
import NavBar from '../components/SharedLayout/NavBar';
import { jest } from '@jest/globals';

const mockContext = {
  cart: {
    items: [],
    totalQuantity: 5,
    totalAmount: 0
  },
  setIsLoading: jest.fn(),
  setCategoryFilter: jest.fn()
};

describe('NavBar Component', () => {
  const renderNavBar = () => {
    return render(
      <BrowserRouter>
        <ProductContext.Provider value={mockContext}>
          <NavBar />
        </ProductContext.Provider>
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders basic navigation elements', () => {
    renderNavBar();
    expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument(); // Cart quantity
  });

  test('handles mobile menu interactions', () => {
    renderNavBar();
    
    // Initial state - menu should be closed
    const burgerButton = screen.getByTestId('burger-menu');
    const mobileNav = screen.getByTestId('mobile-nav');
    expect(mobileNav).toHaveClass('-translate-x-full');

    // Open menu
    fireEvent.click(burgerButton);
    expect(mobileNav).toHaveClass('translate-x-0');

    // Click category and verify filter is called
    const categoryButton = screen.getByRole('button', { name: "Men's Clothing" });
    fireEvent.click(categoryButton);
    expect(mockContext.setCategoryFilter).toHaveBeenCalledWith("men's clothing");
    expect(mockContext.setIsLoading).toHaveBeenCalled();

    // Menu should be closed after selection
    expect(mobileNav).toHaveClass('-translate-x-full');
  });
}); 