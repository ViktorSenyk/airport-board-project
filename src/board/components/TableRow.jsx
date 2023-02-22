import React from 'react';
import moment from 'moment';

export default function TableRow({ flightInfo }) {
  return (
    <div className="table__row">
      <div className="table__cell">
        <div
          className="table__terminal-circle"
          style={flightInfo.term === 'D' ? { color: '#1eb7ee', borderColor: '#1eb7ee' } : null}
        >
          {flightInfo.term}
        </div>
      </div>
      <div className="table__cell">{moment(flightInfo.timeDepShedule).format('H:mm')}</div>
      <div className="table__cell">
        {flightInfo['airportToID.city_en'] || flightInfo['airportFromID.name_en']}
      </div>
      <div className="table__cell">{`${
        flightInfo.status === 'DP' ? 'Departed at' : 'Landed'
      } ${moment(flightInfo.timeTakeofFact).format('H:mm')}`}</div>
      <div className="table__cell">
        <img className="table__logo" src={flightInfo.airline.en.logoSmallName} alt="logo" />
        {flightInfo.airline.en.name}
      </div>
      <div className="table__cell">{`${flightInfo['carrierID.IATA'] || ''}${
        flightInfo.fltNo
      }`}</div>
    </div>
  );
}
