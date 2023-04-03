import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';
import CardsProvider from '../../context/cardsContext';

describe('Main', () => {
  it('should render a message when there are no cards', () => {
    const { getByText } = render(<Main />);
    expect(getByText('The List Is Empty')).toBeInTheDocument();
  });
});
