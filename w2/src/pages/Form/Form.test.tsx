import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from './formReducer';
import Form from './Form';
import BookFormData from '../../interfaces/BookFormData';

// Mock useDispatch and useSelector
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Form Component', () => {
  let dispatchMock: jest.Mock;
  let useSelectorMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useSelectorMock = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatchMock);
    (useSelector as jest.Mock).mockReturnValue([]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId('form-component')).toBeTruthy();
  });

  it('dispatches push action when newDataHandler is called', () => {
    const data: BookFormData = {
      cover: 'book-cover',
      title: 'Book Title',
      author: 'Book Author',
      type: ['lovestory'],
      dateArrived: '2023-04-17',
      isUsed: 'isUsed',
      reading: 'Tom',
    };
    const { getByTestId } = render(<Form />);
    fireEvent.click(getByTestId('new-data-handler-button'));
    expect(dispatchMock).toHaveBeenCalledWith(push(data));
  });

  it('renders BookCard components based on forms prop', () => {
    useSelectorMock.mockReturnValue([
      {
        cover: 'book-cover-1',
        title: 'Book Title 1',
        author: 'Book Author 1',
        type: 'fiction',
        dateArrived: '2023-04-17',
        isUsed: false,
        reading: true,
      },
      {
        cover: 'book-cover-2',
        title: 'Book Title 2',
        author: 'Book Author 2',
        type: 'non-fiction',
        dateArrived: '2023-04-18',
        isUsed: true,
        reading: false,
      },
    ]);
    const { getAllByTestId } = render(<Form />);
    expect(getAllByTestId('book-card-component')).toHaveLength(2);
  });
});
