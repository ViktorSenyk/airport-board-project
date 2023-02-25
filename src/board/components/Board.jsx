import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as boardSelectors from '../board.selectors';
import { fetchSelectedFlightsData, searchInfoSet, isDeparturesSet } from '../board.actions';
import Search from './Search';
import Filter from './Filter';
import Table from './Table';

import { useSearchParams } from 'react-router-dom';

import '../styles/board.scss';

function Board({
  isDepartures,
  selectedDate,
  searchInfo,
  departures,
  arrivals,
  fetchSelectedFlightsData,
  searchInfoSet,
  isDeparturesSet,
}) {
  const [, setFilterParams] = useSearchParams();

  useEffect(() => {
    const urlParams = { isDepartures, selectedDate };
    if (searchInfo) urlParams.searchInfo = searchInfo;
    setFilterParams(urlParams);
    fetchSelectedFlightsData(selectedDate);
  }, [fetchSelectedFlightsData, setFilterParams, isDepartures, selectedDate, searchInfo]);

  return (
    <section className="board">
      <div className="container">
        <Search defaultValue={searchInfo} searchInfoSet={searchInfoSet} />
        <div className="board__content">
          <Filter
            isDepartures={isDepartures}
            selectedDate={selectedDate}
            isDeparturesSet={isDeparturesSet}
            fetchSelectedFlightsData={fetchSelectedFlightsData}
          />
          <Table
            departures={departures}
            arrivals={arrivals}
            isDepartures={isDepartures}
            searchInfo={searchInfo}
          />
        </div>
      </div>
    </section>
  );
}

const mapState = state => ({
  isDepartures: boardSelectors.isDeparturesSelector(state),
  selectedDate: boardSelectors.selectedDateSelector(state),
  searchInfo: boardSelectors.searchInfoSelector(state),
  departures: boardSelectors.departuresFlightsDataSelector(state),
  arrivals: boardSelectors.arrivalsFlightsDataSelector(state),
});

const mapDispatch = {
  fetchSelectedFlightsData,
  searchInfoSet,
  isDeparturesSet,
};

export default connect(mapState, mapDispatch)(Board);
