import React from 'react';
import { useState, useContext } from 'react';
import classes from './PhotoCard.module.scss';
import PhotoData from '../../interfaces/PhotoData';
import CardModal from '../CardModal/CardModal';
import FullPhotoCard from '../FullPhotoCard/FullPhotoCard';
import axios from 'axios';
import Loader from '../../assets/loader.svg';

const PhotoCard: React.FC<PhotoData> = ({
  farm,
  title,
  id,
  isfamily,
  isfriend,
  ispublic,
  owner,
  secret,
  server,
}) => {
  const [ifShowCard, setIfShowCard] = useState(false);
  const [isLaoding, setIsLoading] = useState(false);

  async function cardOpenHandler() {
    setIfShowCard(true);
    setIsLoading(true);
    const API_KEY = 'ad3ad555dd3292925321ec36efca1184';
    const response = await axios.get<{ person: { username: { _content: string } } }>(
      `https://api.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=${API_KEY}&user_id=${owner}&format=json&nojsoncallback=1`
    );
    console.log(response.data.person.username._content);
    setIsLoading(false);
  }

  function onCloseHandler() {
    setIfShowCard(false);
  }

  return (
    <>
      {ifShowCard && (
        <CardModal onClose={onCloseHandler}>
          {isLaoding && <img src={Loader} />}
          {!isLaoding && (
            <FullPhotoCard
              farm={farm}
              id={id}
              isfamily={isfamily}
              isfriend={isfriend}
              ispublic={ispublic}
              owner={owner}
              secret={secret}
              server={server}
              title={title}
            ></FullPhotoCard>
          )}
        </CardModal>
      )}
      <div className={classes.cardStyle} onClick={cardOpenHandler}>
        <img
          src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
          alt={title}
          className={classes.cover}
        />
        <h2 className={classes.h2}>{title}</h2>
      </div>
    </>
  );
};

export default PhotoCard;
