import React from 'react';
import MovieCard from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import classes from './MainLayout.module.scss';

function MainLayout() {
  return (
    <>
      <SearchBar
        onSearch={function (searchTerm: string): void {
          throw new Error('Function not implemented.');
        }}
      ></SearchBar>
      <div className={classes.descrWrap}>
        <MovieCard
          cover={
            'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg'
          } //uploadFile
          name={'The Book Name'} //text
          author={'Greatest Author'} //text
          type={'fantasy'} //checkbox
          dateArrived={new Date('23/03/23')} //date
          isUsed={true} //radio
          readingNow={'nobody'} //dropdown
        ></MovieCard>
        <MovieCard
          cover={
            'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg'
          } //uploadFile
          name={'The Book Name'} //text
          author={'Greatest Author'} //text
          type={'fantasy'} //checkbox
          dateArrived={new Date('23/03/23')} //date
          isUsed={true} //radio
          readingNow={'nobody'} //dropdown
        ></MovieCard>
        <MovieCard
          cover={
            'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg'
          } //uploadFile
          name={'The Book Name'} //text
          author={'Greatest Author'} //text
          type={'fantasy'} //checkbox
          dateArrived={new Date('23/03/23')} //date
          isUsed={true} //radio
          readingNow={'nobody'} //dropdown
        ></MovieCard>
        <MovieCard
          cover={
            'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg'
          } //uploadFile
          name={'The Book Name'} //text
          author={'Greatest Author'} //text
          type={'fantasy'} //checkbox
          dateArrived={new Date('23/03/23')} //date
          isUsed={true} //radio
          readingNow={'nobody'} //dropdown
        ></MovieCard>
        <MovieCard
          cover={
            'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg'
          } //uploadFile
          name={'The Book Name'} //text
          author={'Greatest Author'} //text
          type={'fantasy'} //checkbox
          dateArrived={new Date('23/03/23')} //date
          isUsed={true} //radio
          readingNow={'nobody'} //dropdown
        ></MovieCard>
      </div>
    </>
  );
}

export default MainLayout;
