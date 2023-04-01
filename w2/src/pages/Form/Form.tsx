import React from 'react';
import { useState, useEffect, useContext } from 'react';
import BookForm from '../../layouts/Form/FormL';
import BookCard from '../../layouts/Card/Card';
import BookFormData from '../../interfaces/BookFormData';
import cardsContext from '../../context/cardsContext';

function Form() {
  const cardsCont = useContext(cardsContext);
  const [cards, setCards] = useState<BookFormData[]>(cardsCont);
  function newDataHandler(data: BookFormData) {
    setCards((array) => [...array, data]);
  }
  useEffect(() => {
    console.log(cardsCont);
  }, [cardsCont]);

  return (
    <>
      <BookForm onNewData={newDataHandler} />
      <div>
        {cardsCont.map((card: BookFormData) => (
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
    </>
  );
}

export default Form;
