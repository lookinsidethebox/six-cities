import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOffers, setSort } from './action';
import { getDefaultCity, getDefaultSortId, getOffersByCity, getSortById } from '../hooks';
import { Offers } from '../types/Property';

const DEFAULT_CITY = getDefaultCity();
const DEFAULT_SORT = getDefaultSortId();

const initialState = {
  city: DEFAULT_CITY,
  offers: [] as Offers,
  sort: getSortById(DEFAULT_SORT),
  isLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.isLoading = true;
      state.offers = getOffersByCity(action.payload, state.city.id, state.sort.id);
      state.isLoading = false;
    })
    .addCase(setSort, (state, action) => {
      state.sort = getSortById(action.payload);
    });
});

export { reducer };
