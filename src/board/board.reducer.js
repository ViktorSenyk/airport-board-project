import { IS_DEPARTURES_SET, SELECTED_DATE_SET } from './board.actions';
import moment from 'moment';

const initialState = {
  selectedDate: moment().format('DD-MM-YYYY'),
  searchInfo: '',
  isDepartures: true,
  flightsData: [],
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_DEPARTURES_SET:
      return {
        ...state,
        isDepartures: action.payload.isDeparturesBoolean,
      };
    case SELECTED_DATE_SET:
      return {
        ...state,
        selectedDate: action.payload.newDateValue,
      };
    default:
      return state;
  }
};

export default boardReducer;
