import React from 'react';
import { connect } from 'react-redux';
import {
  departuresFlightsDataSelector,
  arrivalsFlightsDataSelector,
  isDeparturesSelector,
  searchInfoSelector,
} from '../board.selectors';
import TableRow from './TableRow';

import '../styles/table.scss';

function Table({ departures, arrivals, isDepartures, searchInfo }) {
  const displayedFlights = isDepartures
    ? departures.filter(flightInfo =>
        `${flightInfo['carrierID.IATA'] || ''}${flightInfo.fltNo}`.includes(searchInfo),
      )
    : arrivals.filter(flightInfo =>
        `${flightInfo['carrierID.IATA'] || ''}${flightInfo.fltNo}`.includes(searchInfo),
      );

  return (
    <div className="table">
      {departures.length === 0 && arrivals.length === 0 ? (
        <h5 className="table__null">No Flight</h5>
      ) : (
        <>
          <div className="table__title">
            <div className="table__cell">Terminal</div>
            <div className="table__cell">Local time</div>
            <div className="table__cell">Destination</div>
            <div className="table__cell">Status</div>
            <div className="table__cell">Airline</div>
            <div className="table__cell">Flight</div>
          </div>

          {displayedFlights.map(flightInfo => (
            <TableRow key={flightInfo.ID} flightInfo={flightInfo} />
          ))}
        </>
      )}
    </div>
  );
}

const mapState = state => ({
  departures: departuresFlightsDataSelector(state),
  arrivals: arrivalsFlightsDataSelector(state),
  isDepartures: isDeparturesSelector(state),
  searchInfo: searchInfoSelector(state),
});

export default connect(mapState)(Table);
