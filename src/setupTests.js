// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn(),
  length: 0,
  key: jest.fn()
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true
});

// Mock IntersectionObserver
class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
}

window.IntersectionObserver = IntersectionObserver;

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Suppress console errors during tests
console.error = jest.fn(); 