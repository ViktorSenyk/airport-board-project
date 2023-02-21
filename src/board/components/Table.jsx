import React from 'react';
import { connect } from 'react-redux';
import { departuresFlightsDataSelector, arrivalsFlightsDataSelector } from '../board.selectors';

import '../styles/table.scss';

function Table({ departures, arrivals }) {
  return (
    <ul className="table">
      {departures.length === 0 && arrivals.length === 0 ? (
        <h5 className="table__null">No Flight</h5>
      ) : (
        <>
          <li className="table__title">
            <p>Terminal</p>
            <p>Local time</p>
            <p>Destination</p>
            <p>Status</p>
            <p>Airline</p>
            <p>Flight</p>
          </li>
          {departures.map(flightInfo => (
            <li className="table__row" key={flightInfo.ID}>
              <p>{flightInfo.term}</p>
              <p>Local time</p>
              <p>{flightInfo['airportToID.city_en']}</p>
              <p>Status</p>
              <p>{flightInfo.airline.en.name}</p>
              <p>{`${flightInfo['carrierID.IATA']}${flightInfo.fltNo}`}</p>
            </li>
          ))}
        </>
      )}
    </ul>
  );
}

const mapState = state => ({
  departures: departuresFlightsDataSelector(state),
  arrivals: arrivalsFlightsDataSelector(state),
});

export default connect(mapState)(Table);
