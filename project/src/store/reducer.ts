import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOffers, setSort } from './action';
import { getDefaultCity, getDefaultSortId, getOffersByCity, getSortById } from '../hooks';

const DEFAULT_CITY = getDefaultCity();
const DEFAULT_SORT = getDefaultSortId();

const initialState = {
  city: DEFAULT_CITY,
  offers: getOffersByCity(DEFAULT_CITY.id, DEFAULT_SORT),
  sort: getSortById(DEFAULT_SORT)
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offers = getOffersByCity(state.city.id, state.sort.id);
    })
    .addCase(setSort, (state, action) => {
      state.sort = getSortById(action.payload);
    });
});

export { reducer };
