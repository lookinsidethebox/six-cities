import { createAction } from '@reduxjs/toolkit';

const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  UPDATE_OFFERS: 'UPDATE_OFFERS',
  SET_SORT_TYPE: 'SET_SORT_TYPE',
  SET_AUTH_STATUS: 'SET_AUTH_STATUS',
  UPDATE_CURRENT_OFFER: 'UPDATE_CURRENT_OFFER',
  UPDATE_REVIEWS: 'UPDATE_REVIEWS',
  UPDATE_OFFERS_NEARBY: 'UPDATE_OFFERS_NEARBY',
};

export const changeCity = createAction(Action.CHANGE_CITY, (value) => ({payload: value}));
export const updateOffers = createAction(Action.UPDATE_OFFERS, (value) => ({payload: value}));
export const setSortType = createAction(Action.SET_SORT_TYPE, (value) => ({payload: value}));
export const setAuthStatus = createAction(Action.SET_AUTH_STATUS, (value) => ({payload: value}));
export const updateCurrentOffer = createAction(Action.UPDATE_CURRENT_OFFER, (value) => ({payload: value}));
export const updateReviews = createAction(Action.UPDATE_REVIEWS, (value) => ({payload: value}));
export const updateOffersNearby = createAction(Action.UPDATE_OFFERS_NEARBY, (value) => ({payload: value}));
