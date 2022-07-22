import React from 'react';
import './css/search.css';
import SearchTab from './SearchTab';


function SearchForm() {
  return (
    <div className='search-wrap'>
      <div className='inner'>
        <h1 className='search-title'>ID/FW찾기🔎</h1>
      </div>
      <div className="searchBox">
        <SearchTab />
      </div>
    </div>
  );
};

export default SearchForm; 