import React, { useState } from 'react';

function SearchCard({ placeholder, handleOnSearchChange, autoFocus }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = (value) => {
    setSearchQuery(value);
    handleOnSearchChange(value);
  };
  return (
    <div className='search-container'>
      <div className='search'>
        <input
          autoFocus={autoFocus}
          value={searchQuery}
          placeholder={placeholder}
          onChange={(e) => handleSearchQuery(e.target.value)}
        />

        <img
          src='/appAssets/search.svg'
          alt='Search Button'
          className='search-icon'
        />
      </div>
    </div>
  );
}

export default SearchCard;
