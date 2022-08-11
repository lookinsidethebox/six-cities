import { createAction } from '@reduxjs/toolkit';

const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  GET_OFFERS_BY_CITY: 'GET_OFFERS_BY_CITY',
  SET_SORT_TYPE: 'SET_SORT_TYPE'
};

export const changeCity = createAction(Action.CHANGE_CITY, (value) => ({payload: value}));
export const getOffers = createAction(Action.GET_OFFERS_BY_CITY);
export const setSortType = createAction(Action.SET_SORT_TYPE, (value) => ({payload: value}));
