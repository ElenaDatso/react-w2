import React, { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { TbSearch } from 'react-icons/tb';
import classes from './SearchBar.module.scss';
import PhotoData from '../../interfaces/PhotoData';
import Loader from '../../assets/loader.svg';
import { BsFillInboxFill } from 'react-icons/bs';
import getApi from '../../api/flickr';

type PropsData = {
  onSearch: ([]: PhotoData[]) => void;
};

const SearchBar = (props: PropsData) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptyArray, setIsEmptyArray] = useState(true);

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.trim());
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchTerm) return;
    props.onSearch([]);
    setIsEmptyArray(false);
    setIsLoading(true);
    const data: PhotoData[] = (await getApi().getPhotoData(searchTerm)).data.photos.photo;
    props.onSearch(data);
    setIsLoading(false);
    setIsEmptyArray(data.length === 0);
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <div className={classes.wrap}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search"
            className={classes.input}
          />
          <button type="submit" className={classes.submit}>
            <TbSearch></TbSearch>
          </button>
          {searchTerm.length > 0 && (
            <button type="button" onClick={handleReset} className={classes.cross}>
              <RxCross2 />
            </button>
          )}
        </div>
      </form>
      {isLoading && <img className={classes.loader} src={Loader} />}
      {isLoading && <p className={classes.loading}>Loading</p>}
      {isEmptyArray && (
        <>
          <BsFillInboxFill className={classes.emptyIcon} />
          <p className={classes.emptyText}>List is empty</p>
        </>
      )}
    </>
  );
};

export default SearchBar;
