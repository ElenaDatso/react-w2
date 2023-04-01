import React, { useEffect } from 'react';
import SearchBar from '../../layouts/SearchBar/SearchBar';
import classes from './Main.module.scss';
import { useState, useContext } from 'react';
import cardsContext from '../../context/cardsContext';
import BookCard from '../../layouts/Card/Card';

function Main() {
  const cardsCont = useContext(cardsContext);
  const [cards, setCards] = useState(cardsCont);
  useEffect(() => {
    console.log(cardsCont);
  }, [cardsCont]);
  return (
    <div>
      <SearchBar
        onSearch={function (searchTerm: string): void {
          throw new Error('Function not implemented.');
        }}
      ></SearchBar>{' '}
      <div className={classes.cardsWrap}>
        {cards.length > 0 &&
          cards.map((card) => (
            <BookCard
              key={Math.random()}
              cover={card.cover}
              title={card.title}
              author={card.author}
              type={card.type}
              isUsed={card.isUsed}
              reading={card.reading}
              dateArrived={card.dateArrived}
            />
          ))}
      </div>
    </div>
  );
}

export default Main;
