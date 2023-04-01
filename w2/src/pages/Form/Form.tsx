import React from 'react';
import { useState, useEffect } from 'react';
import BookForm from '../../layouts/Form/FormL';
import BookCard from '../../layouts/Card/Card';
import BookFormData from '../../interfaces/BookFormData';

function Form() {
  const [cards, setCards] = useState<BookFormData[]>([]);
  function newDataHandler(data: BookFormData) {
    setCards((array) => [...array, data]);
  }
  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <>
      <BookForm onNewData={newDataHandler} />
      <div>
        {cards.map((card: BookFormData) => (
          <BookCard
            key={Math.random()}
            cover={''}
            name={card.title}
            author={card.author}
            type={card.type.toString()}
            // dateArrived={card.dateArrived.toDateString()}
            isUsed={card.isUsed}
            readingNow={card.reading}
          />
        ))}
      </div>
    </>
  );
}

export default Form;
