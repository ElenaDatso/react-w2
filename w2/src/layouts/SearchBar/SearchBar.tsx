import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import { TbSearch } from 'react-icons/tb';
import classes from './SearchBar.module.scss';
import PhotoData from '../../interfaces/PhotoData';
import Loader from '../../assets/loader.svg';
import { BsFillInboxFill } from 'react-icons/bs';
import getApi from '../../api/flickr';
import { save } from './searchInputReducer';
import { setSubmited } from './searchSubmitReducer';

type PropsData = {
  onSearch: ([]: PhotoData[]) => void;
};

const SearchBar = (props: PropsData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptyArray, setIsEmptyArray] = useState(true);
  const dispatch = useDispatch();
  const searchInput = useSelector((state: { searchInput: string }) => state.searchInput);
  const searchSubmiter = useSelector((state: { searchSubmit: string }) => state.searchSubmit);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(save(event.target.value.trim()));
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchInput) return;
    props.onSearch([]);
    setIsEmptyArray(false);
    dispatch(setSubmited(searchInput));
  };

  useEffect(() => {
    if (searchSubmiter) {
      setIsLoading(true);
      const confirm = async () => {
        const data: PhotoData[] = (await getApi().getPhotoData(searchInput)).data.photos.photo;
        props.onSearch(data);
        setIsEmptyArray(data.length === 0);
        setIsLoading(false);
      };
      confirm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchSubmiter]);

  const handleReset = () => {
    dispatch(save(''));
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <div className={classes.wrap}>
          <input
            type="text"
            value={searchInput}
            onChange={handleInputChange}
            placeholder="Search"
            className={classes.input}
          />
          <button type="submit" className={classes.submit}>
            <TbSearch></TbSearch>
          </button>
          {searchInput.length > 0 && (
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
