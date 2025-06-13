// src/utils/BookingFormUtils.js

import { fetchAPI, submitAPI } from '../api';

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === 'update') {
    return fetchAPI(new Date(action.date));
  }
  return state;
};
