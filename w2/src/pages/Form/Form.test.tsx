import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('should render a BookForm component', () => {
    render(<Form />);
    expect('h2');
  });
});
