import { createAction } from '@reduxjs/toolkit';

const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  GET_OFFERS_BY_CITY: 'GET_OFFERS_BY_CITY'
};

export const changeCity = createAction(Action.CHANGE_CITY, (value) => ({payload: value}));
export const getOffers = createAction(Action.GET_OFFERS_BY_CITY);
