import React, { useState } from 'react';

export default function Search() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="search">
      <h2 className="search__title">SEARCH FLIGHT</h2>
      <div className="search__wrapper">
        <input
          className="search__input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="search__button" onClick={() => console.log(inputValue)}>SEARCH</button>
      </div>
    </div>
  );
}
