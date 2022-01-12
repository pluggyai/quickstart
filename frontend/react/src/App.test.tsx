import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pluggy Connect button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Connect Account/i);
  expect(buttonElement).toBeInTheDocument();
});
