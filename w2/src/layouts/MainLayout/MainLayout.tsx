import React from 'react';
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
    </>
  );
}

export default MainLayout;
