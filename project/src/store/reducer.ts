import { createReducer } from '@reduxjs/toolkit';
import { changeCity, updateOffers, setSortType } from './action';
import { getOffersByCity, getSortTypeById } from '../utils';
import { Offers } from '../types/Property';
import { DefaultCity, DefaultSortType } from '../const';

const initialState = {
  city: DefaultCity,
  offers: getOffersByCity(DefaultCity.id, DefaultSortType.id),
  sortType: DefaultSortType,
  isLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(updateOffers, (state) => {
      state.isLoading = true;
      state.offers = getOffersByCity(state.city.id, state.sortType.id);
      state.isLoading = false;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = getSortTypeById(action.payload);
    });
});

export { reducer };
