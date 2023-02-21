import React from 'react';

import '../styles/filter.scss';

export default function Filter() {
  return (
    <div className="filter">
      <div className="filter__buttons-wrapper">
        <button className="filter__button filter__button_current">
          DEPARTURES
        </button>
        <button className="filter__button">ARRIVALS</button>
      </div>
      <div className="filter__date-wrapper">
        <label htmlFor="filter-date-input" className="filter__date-input-label">
          <p>21/02</p>
          <input
            type="date"
            className="filter__date-input"
            id="filter-date-input"
          />
        </label>
        <div className="filter__date-buttons">
          <div className="filter__date-button">
            <p>20/02</p>
            <p>YESTERDAY</p>
          </div>
          <div className="filter__date-button filter__date-button_current">
            <p>21/02</p>
            <p>TODAY</p>
          </div>
          <div className="filter__date-button">
            <p>23/02</p>
            <p>TOMORROW</p>
          </div>
        </div>
      </div>
    </div>
  );
}
