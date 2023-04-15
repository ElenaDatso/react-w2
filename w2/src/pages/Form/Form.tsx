import React from 'react';
import { useState } from 'react';
import BookForm from '../../layouts/Form/FormL';
import BookCard from '../../layouts/Card/Card';
import BookFormData from '../../interfaces/BookFormData';
import classes from './Form.module.scss';

function Form() {
  const [cards, setCards] = useState<BookFormData[]>([]);
  function newDataHandler(data: BookFormData) {
    setCards((array) => [...array, data]);
  }

  return (
    <div className={classes.wrap}>
      <BookForm onNewData={newDataHandler} />
      <div className={classes.cardsWrap}>
        {cards.map((card: BookFormData) => (
          <BookCard
            key={Math.random()}
            cover={card.cover}
            title={card.title}
            author={card.author}
            type={card.type}
            dateArrived={card.dateArrived}
            isUsed={card.isUsed}
            reading={card.reading}
          />
        ))}
      </div>
    </div>
  );
}

export default Form;
