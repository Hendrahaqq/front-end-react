import { render, screen } from '@testing-library/react';

import App from './App';
import Card from './Card';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Image List :/i);
  expect(linkElement).toBeInTheDocument();
});

test('render card', () => {
  render(<Card data-testid="card-element" media="https://live.staticflickr.com/65535/51278300184_2c9c6ecf5c_m.jpg" title="test" />);
  const linkElement = screen.getByAltText('test')
  expect(linkElement).toBeInTheDocument()
});