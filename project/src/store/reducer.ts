import { createReducer } from '@reduxjs/toolkit';
import { changeCity, updateOffers, setSortType } from './action';
import { getOffersByCity, getSortTypeById } from '../utils';
import { DefaultCity, DefaultSortType } from '../const';
import type { Offers } from '../types/Property';

const initialState = {
  city: DefaultCity,
  offers: [] as Offers,
  sortType: DefaultSortType,
  isLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(updateOffers, (state, action) => {
      state.isLoading = true;
      state.offers = getOffersByCity(action.payload, state.city.name, state.sortType.id);
      state.isLoading = false;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = getSortTypeById(action.payload);
    });
});

export { reducer };
