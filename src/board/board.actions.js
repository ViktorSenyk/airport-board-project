export const IS_DEPARTURES_SET = 'BOARD/IS_DEPARTURES_SET';
export const SELECTED_DATE_SET = 'BOARD/SELECTED_DATE_SET';

export const isDeparturesSet = isDeparturesBoolean => ({
  type: IS_DEPARTURES_SET,
  payload: {
    isDeparturesBoolean,
  },
});

export const selectedDateSet = newDateValue => ({
  type: SELECTED_DATE_SET,
  payload: {
    newDateValue,
  },
});
