import React from 'react';
import { createContext } from 'react';
import BookFormData from '../interfaces/BookFormData';

const cardsContext = createContext<BookFormData[]>([]);

export default cardsContext;
