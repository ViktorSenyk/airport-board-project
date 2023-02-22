import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchInfoSet } from '../board.actions';

import '../styles/search.scss';

function Search({ searchInfoSet }) {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="search">
      <h2 className="search__title">SEARCH FLIGHT</h2>
      <div className="search__wrapper">
        <input
          className="search__input"
          type="text"
          placeholder="Type flight #"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button className="search__button" onClick={() => searchInfoSet(inputValue.toUpperCase())}>
          SEARCH
        </button>
      </div>
    </div>
  );
}

const mapDispatch = {
  searchInfoSet,
};

export default connect(null, mapDispatch)(Search);
