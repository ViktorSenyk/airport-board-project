import React from 'react';

import '../styles/filter.scss';


export default function Filter() {
    return (
      <div className="filter">
        <div className="filter__buttons-wrapper">
          <button className="filter__button filter__button_current">DEPARTURES</button>
          <button className="filter__button">ARRIVALS</button>
        </div>
      </div>
    );
}
