import React from 'react';
import { connect } from 'react-redux';
import * as boardSelectors from '../board.selectors';
import { isDeparturesSet, fetchSelectedFlightsData } from '../board.actions';
import moment from 'moment';

import '../styles/filter.scss';

function Filter({ selectedDate, isDepartures, isDeparturesSet, fetchSelectedFlightsData }) {
  const [selectedDay, selectedMonth] = selectedDate.split('-');
  const currentDate = moment();
  const yesterdayDate = currentDate.clone().subtract(1, 'days');
  const tomorrowDate = currentDate.clone().add(1, 'days');

  return (
    <div className="filter">
      <div className="filter__buttons-wrapper">
        <button
          className={`filter__button ${isDepartures ? `filter__button_current` : ''}`}
          onClick={() => isDeparturesSet(true)}
        >
          DEPARTURES
        </button>
        <button
          className={`filter__button ${!isDepartures ? `filter__button_current` : ''}`}
          onClick={() => isDeparturesSet(false)}
        >
          ARRIVALS
        </button>
      </div>
      <div className="filter__date-wrapper">
        <label htmlFor="filter-date-input" className="filter__date-input-label">
          <p>{`${selectedDay}/${selectedMonth}`}</p>
          <input
            type="date"
            className="filter__date-input"
            id="filter-date-input"
            onChange={e => fetchSelectedFlightsData(e.target.value.split('-').reverse().join('-'))}
          />
        </label>
        <div className="filter__date-buttons">
          <div
            className={`filter__date-button ${
              selectedDate === yesterdayDate.format('DD-MM-YYYY')
                ? 'filter__date-button_current'
                : ''
            }`}
            onClick={() => fetchSelectedFlightsData(yesterdayDate.format('DD-MM-YYYY'))}
          >
            <p>{yesterdayDate.format('DD/MM')}</p>
            <p>YESTERDAY</p>
          </div>
          <div
            className={`filter__date-button ${
              selectedDate === currentDate.format('DD-MM-YYYY') ? 'filter__date-button_current' : ''
            }`}
            onClick={() => fetchSelectedFlightsData(currentDate.format('DD-MM-YYYY'))}
          >
            <p>{currentDate.format('DD/MM')}</p>
            <p>TODAY</p>
          </div>
          <div
            className={`filter__date-button ${
              selectedDate === tomorrowDate.format('DD-MM-YYYY')
                ? 'filter__date-button_current'
                : ''
            }`}
            onClick={() => fetchSelectedFlightsData(tomorrowDate.format('DD-MM-YYYY'))}
          >
            <p>{tomorrowDate.format('DD/MM')}</p>
            <p>TOMORROW</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapState = state => ({
  selectedDate: boardSelectors.selectedDateSelector(state),
  isDepartures: boardSelectors.isDeparturesSelector(state),
});

const mapDispatch = {
  isDeparturesSet,
  fetchSelectedFlightsData,
};

export default connect(mapState, mapDispatch)(Filter);
