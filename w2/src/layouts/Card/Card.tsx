import React from 'react';

interface BookCardProps {
  cover: string;
  name: string;
  author: string;
  type: string;
  dateArrived?: string;
  isUsed: boolean;
  readingNow: string;
}

const BookCard: React.FC<BookCardProps> = ({
  cover,
  name,
  author,
  type,
  dateArrived,
  isUsed,
  readingNow,
}) => {
  return (
    <div className="book-card">
      <img src={cover} alt={name} />
      <h2>{name}</h2>
      <p>{author}</p>
      <p>{type}</p>
      <p>{dateArrived}</p>
      <p>{isUsed ? 'Used' : 'New'}</p>
      <p>{readingNow ? 'Currently reading' : 'Not currently reading'}</p>
    </div>
  );
};

export default BookCard;
