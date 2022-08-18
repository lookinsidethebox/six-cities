import { createReducer } from '@reduxjs/toolkit';
import { changeCity, updateOffers, setSortType, setAuthStatus } from './action';
import { getOffersByCity, getSortTypeById } from '../utils';
import { DefaultCity, DefaultSortType, AuthorizationStatus } from '../const';
import type { Offers } from '../types/Property';

const initialState = {
  city: DefaultCity,
  offers: [] as Offers,
  sortType: DefaultSortType,
  offersLoaded: false,
  authStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.offersLoaded = false;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = getOffersByCity(action.payload, state.city.name, state.sortType.id);
      state.offersLoaded = true;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = getSortTypeById(action.payload);
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    });
});

export { reducer };
