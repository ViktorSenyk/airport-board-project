import React from 'react';
import TableRow from './TableRow';

import '../styles/table.scss';

export default function Table({ departures, arrivals, isDepartures, searchInfo }) {
  const filterForFligths = flights =>
    flights.filter(flightInfo =>
      `${flightInfo['carrierID.IATA'] || ''}${flightInfo.fltNo}`.includes(searchInfo),
    );
  const displayedFlights = isDepartures ? filterForFligths(departures) : filterForFligths(arrivals);

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
