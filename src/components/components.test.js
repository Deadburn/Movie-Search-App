import { render, screen } from '@testing-library/react';
import SearchMovies from './SearchMovies';

test('renders learn react link', () => {
  render(<SearchMovies />);
  const linkElement = screen.getByText(/Movie Name/i);
  expect(linkElement).toBeInTheDocument();
});
