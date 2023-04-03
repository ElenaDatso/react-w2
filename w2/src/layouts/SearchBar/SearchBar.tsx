import React, { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { TbSearch } from 'react-icons/tb';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

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
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSearch}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '5px',
          padding: '10px',
          border: 'none',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search"
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: '16px',
          }}
        />
        <button
          type="submit"
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          <TbSearch></TbSearch>
        </button>
        {searchTerm.length > 0 && (
          <button
            type="button"
            onClick={handleReset}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            <RxCross2 />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
