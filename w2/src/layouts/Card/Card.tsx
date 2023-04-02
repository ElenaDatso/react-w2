import React from 'react';
import BookFormData from '../../interfaces/BookFormData';
import classes from './Card.module.scss';

const BookCard: React.FC<BookFormData> = ({
  cover,
  title,
  author,
  type,
  dateArrived,
  isUsed,
  reading,
}) => {
  return (
    <div className={classes.cardStyle}>
      <img
        src={'https://edit.org/images/cat/book-covers-big-2019101610.jpg'}
        alt={title}
        className={classes.cover}
      />
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{type.join(', ')}</p>
      <p>{dateArrived}</p>
      <p>{isUsed === 'true' ? 'Used' : 'New'}</p>
      <p>{reading}</p>
    </div>
  );
};

export default BookCard;
