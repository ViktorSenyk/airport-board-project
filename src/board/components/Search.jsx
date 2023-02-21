import React from 'react';
import { connect } from 'react-redux';
import { searchInfoSelector } from '../board.selectors';
import { searchInfoSet } from '../board.actions';

import { getFlightsData } from '../board.gateway';

import '../styles/search.scss';

function Search({ searchValue, searchInfoSet }) {
  return (
    <div className="search">
      <h2 className="search__title">SEARCH FLIGHT</h2>
      <div className="search__wrapper">
        <input
          className="search__input"
          type="text"
          placeholder="Airline, destination or flight #"
          value={searchValue}
          onChange={e => searchInfoSet(e.target.value)}
        />
        <button className="search__button" onClick={() => getFlightsData('01-02-2022')}>
          SEARCH
        </button>
      </div>
    </div>
  );
}

const mapState = state => ({
  searchValue: searchInfoSelector(state),
});

const mapDispatch = {
  searchInfoSet,
};

export default connect(mapState, mapDispatch)(Search);
