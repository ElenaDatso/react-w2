import React from 'react';
import classes from './Tag.module.scss';

function Tag(value: string) {
  return <div className={classes.wrap}>{value}</div>;
}

export default Tag;
