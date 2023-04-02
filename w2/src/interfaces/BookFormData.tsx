import React from 'react';

interface BookFormData {
  title: string;
  author: string;
  dateArrived: string;
  type: string[];
  isUsed: string;
  reading: string;
  cover: File;
}

export default BookFormData;
