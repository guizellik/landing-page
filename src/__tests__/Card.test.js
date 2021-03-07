import { render, screen } from '@testing-library/react'

import Card from '../components/Card'
import testTmage from '../assets/image1.png'

const mockCardProps = {
  image: testTmage,
  title: 'mock title',
  backgroundColor: '#fff'
}

it('renders correctly', () => {
  render(<Card {...mockCardProps} />);
  expect(screen.getByTestId('cardWrapper')).toBeInTheDocument()
});

it('renders provided title', () => {
  render(<Card {...mockCardProps} />);
  expect(screen.getByText('mock title')).toBeInTheDocument();
});

it('renders provided image', () => {
  render(<Card {...mockCardProps} />);
  expect(screen.getByAltText('cardImage')).toBeInTheDocument();
});

it('renders arrow icon', () => {
  render(<Card {...mockCardProps} />);
  expect(screen.getByTestId('arrowRightIcon')).toBeInTheDocument()
});