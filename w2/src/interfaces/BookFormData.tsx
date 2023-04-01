import React from 'react';

interface BookFormData {
  title: string;
  author: string;
  dateArrived: Date;
  type: string[];
  isUsed: boolean;
  reading: string;
  cover: FileList;
}

export default BookFormData;
