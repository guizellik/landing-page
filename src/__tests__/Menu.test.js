import { render, screen } from '@testing-library/react'
import Menu from '../components/Menu'

it('renders correctly', () => {
  render(<Menu />);
  expect(screen.getByTestId('menuWrapper')).toBeInTheDocument()
});