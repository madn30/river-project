import React, { useState } from 'react';
import './searchInput.css'; // Ensure the CSS file is linked

const SearchInput = ({ title, width }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='search-wrapper'>
      <span className='title'>{title}</span>
      <div className="search-container">
        <input
          style={{ width  }}
          type="text"
          className="search-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search"
        />
        {inputValue && (
          <button className="clear-button" onClick={() => setInputValue('')}>
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
