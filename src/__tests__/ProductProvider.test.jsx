import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProductProvider, { ProductContext } from '../components/Products/ProductProvider';
import { jest } from '@jest/globals';
import React from 'react';

// Mock product data
const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  image: "test-image.jpg",
  rating: { rate: 4.5, count: 100 },
  category: "men's clothing"
};

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([mockProduct])
  })
);

// Test component to trigger actions
const TestComponent = () => {
  const { addToCart, removeFromCart, updateCartItemQuantity, cart, product, loading } = React.useContext(ProductContext);
  
  return (
    <div>
      <span data-testid="loading">{loading.toString()}</span>
      <span data-testid="products">{JSON.stringify(product)}</span>
      <span data-testid="cart-state">{JSON.stringify(cart)}</span>
      {product && product.length > 0 && (
        <>
          <button onClick={() => addToCart(product[0])}>Add to Cart</button>
          <button onClick={() => removeFromCart(product[0].id)}>Remove from Cart</button>
          <button onClick={() => updateCartItemQuantity(product[0].id, 3)}>Update Quantity</button>
        </>
      )}
    </div>
  );
};

describe('ProductProvider', () => {
  beforeEach(() => {
    // Clear localStorage and reset fetch mock before each test
    window.localStorage.clear();
    jest.clearAllMocks();
    global.fetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([mockProduct])
      })
    );
  });

  test('provides initial context values', async () => {
    render(
      <ProductProvider>
        <TestComponent />
      </ProductProvider>
    );

    // Wait for loading to be false and products to be loaded
    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    await waitFor(() => {
      const products = JSON.parse(screen.getByTestId('products').textContent);
      expect(products).toEqual([mockProduct]);
      expect(JSON.parse(screen.getByTestId('cart-state').textContent)).toEqual({
        items: [],
        totalQuantity: 0,
        totalAmount: 0
      });
    });
  });

  test('addToCart adds new item to cart', async () => {
    render(
      <ProductProvider>
        <TestComponent />
      </ProductProvider>
    );

    // Wait for loading to be false and products to be loaded
    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    await waitFor(() => {
      const products = JSON.parse(screen.getByTestId('products').textContent);
      expect(products).toEqual([mockProduct]);
    });

    fireEvent.click(screen.getByText('Add to Cart'));

    await waitFor(() => {
      const cart = JSON.parse(screen.getByTestId('cart-state').textContent);
      expect(cart.items).toHaveLength(1);
      expect(cart.totalQuantity).toBe(1);
      expect(cart.totalAmount).toBe(99.99);
      expect(cart.items[0]).toEqual(expect.objectContaining({
        id: mockProduct.id,
        quantity: 1
      }));
    });
  });

  test('removeFromCart removes item from cart', async () => {
    render(
      <ProductProvider>
        <TestComponent />
      </ProductProvider>
    );

    // Wait for loading to be false and products to be loaded
    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    await waitFor(() => {
      const products = JSON.parse(screen.getByTestId('products').textContent);
      expect(products).toEqual([mockProduct]);
    });

    // First add an item
    fireEvent.click(screen.getByText('Add to Cart'));

    // Verify item was added
    await waitFor(() => {
      const cart = JSON.parse(screen.getByTestId('cart-state').textContent);
      expect(cart.items).toHaveLength(1);
    });

    // Remove the item
    fireEvent.click(screen.getByText('Remove from Cart'));

    // Verify item was removed
    await waitFor(() => {
      const cart = JSON.parse(screen.getByTestId('cart-state').textContent);
      expect(cart.items).toHaveLength(0);
      expect(cart.totalQuantity).toBe(0);
      expect(cart.totalAmount).toBe(0);
    });
  });

  test('updateCartItemQuantity updates item quantity', async () => {
    render(
      <ProductProvider>
        <TestComponent />
      </ProductProvider>
    );

    // Wait for loading to be false and products to be loaded
    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    await waitFor(() => {
      const products = JSON.parse(screen.getByTestId('products').textContent);
      expect(products).toEqual([mockProduct]);
    });

    // First add an item
    fireEvent.click(screen.getByText('Add to Cart'));

    // Update quantity to 3
    fireEvent.click(screen.getByText('Update Quantity'));

    // Verify quantity was updated
    await waitFor(() => {
      const cart = JSON.parse(screen.getByTestId('cart-state').textContent);
      expect(cart.items[0].quantity).toBe(3);
      expect(cart.totalQuantity).toBe(3);
      expect(cart.totalAmount).toBeCloseTo(299.97, 2);
    });
  });
}); 