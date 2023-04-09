import React from 'react';
import { useState } from 'react';
import classes from './PhotoCard.module.scss';
import PhotoData from '../../interfaces/PhotoData';
import CardModal from '../CardModal/CardModal';
import FullPhotoCard from '../FullPhotoCard/FullPhotoCard';
import Loader from '../../assets/loader.svg';
import getApi from '../../api/flickr';
import PhotoInfo from '../../interfaces/PhotoInfo';

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
  const [photoInfo, setPhotoInfo] = useState<PhotoInfo | null>(null);

  async function cardOpenHandler() {
    setIfShowCard(true);
    setIsLoading(true);
    const photoInfo = (await getApi().getPhotoInfo(id)).data.photo as unknown as PhotoInfo;
    if (photoInfo) setPhotoInfo(photoInfo);
    // console.log((await getApi().getOwnerData(owner)).data.person.username);
    // console.log((await getApi().getTags(id)).data.photo.tags);
    // console.log((await getApi().getStats(id)).data);
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
          {!isLaoding && photoInfo && (
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
              info={photoInfo}
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
