import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

it('renders the footer correctly', () => {
  const { getByTestId } = render(<Footer />);
  getByTestId('footer-bottom');
});
