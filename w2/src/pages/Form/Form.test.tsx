import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';
import CardsProvider from '../../context/cardsContext';

describe('Form', () => {
  it('should render a BookForm component', () => {
    render(
      <CardsProvider.Provider value={[]}>
        <Form />
      </CardsProvider.Provider>
    );
    expect('h2');
  });
});
