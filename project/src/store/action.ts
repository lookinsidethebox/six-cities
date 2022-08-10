import { createAction } from '@reduxjs/toolkit';

const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  GET_OFFERS_BY_CITY: 'GET_OFFERS_BY_CITY',
  SET_SORT: 'SET_SORT'
};

export const changeCity = createAction(Action.CHANGE_CITY, (value) => ({payload: value}));
export const getOffers = createAction(Action.GET_OFFERS_BY_CITY);
export const setSort = createAction(Action.SET_SORT, (value) => ({payload: value}));
