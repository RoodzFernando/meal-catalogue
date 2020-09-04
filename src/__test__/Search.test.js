import React from 'react';
import { render } from '@testing-library/react';
import Search from '../components/Search';

it('renders the search component', () => {
  const { getByTestId } = render(<Search />);
  getByTestId('search');
});
