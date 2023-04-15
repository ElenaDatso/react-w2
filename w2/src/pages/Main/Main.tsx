import React from 'react';
import SearchBar from '../../layouts/SearchBar/SearchBar';
import classes from './Main.module.scss';
import { useState } from 'react';
import PhotoCard from '../../layouts/PhotoCard/PhotoCard';
import PhotoData from '../../interfaces/PhotoData';

function Main() {
  const [cards, setCards] = useState<PhotoData[]>([]);

  function searchHandler(array: PhotoData[]) {
    setCards(array);
  }

  return (
    <div>
      <SearchBar onSearch={searchHandler}></SearchBar>
      <div className={classes.cardsWrap}>
        {cards.length > 0 &&
          cards.map((card) => (
            <PhotoCard
              key={card.id}
              title={card.title}
              farm={card.farm}
              id={card.id}
              isfamily={card.isfamily}
              isfriend={card.isfriend}
              ispublic={card.ispublic}
              owner={card.owner}
              secret={card.secret}
              server={card.server}
            />
          ))}
      </div>
    </div>
  );
}

export default Main;
