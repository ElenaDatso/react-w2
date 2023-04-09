import React from 'react';
import classes from './FullPhotoCard.module.scss';
import PhotoData from '../../interfaces/PhotoData';

const FullPhotoCard: React.FC<PhotoData> = ({
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
  return (
    <div className={classes.cardStyle}>
      <img
        src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={title}
        className={classes.cover}
      />
      <h2 className={classes.h2}>{title}</h2>
    </div>
  );
};

export default FullPhotoCard;
