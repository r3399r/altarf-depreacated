import { render, screen } from '@testing-library/react';
import App from './App';

test('renders should work', () => {
  render(<App />);
  const element = screen.getByText(/React/i);
  expect(element).toBeInTheDocument();
});
