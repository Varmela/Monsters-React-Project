import './search-box.css';
import React from 'react';

function SearchBox({ searchTerm, onSearchChange }) {
  return (
    <input
      className="search-box"
      type="search"
      placeholder="search monsters"
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
}

export default SearchBox;
