import { createReducer } from '@reduxjs/toolkit';
import { changeCity, updateOffers, setSortType } from './action';
import { getOffersByCity, getSortTypeById } from '../utils';
import { DefaultCity, DefaultSortType } from '../const';

const initialState = {
  city: DefaultCity,
  offers: getOffersByCity(DefaultCity.id, DefaultSortType.id),
  sortType: DefaultSortType
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(updateOffers, (state) => {
      state.offers = getOffersByCity(state.city.id, state.sortType.id);
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = getSortTypeById(action.payload);
    });
});

export { reducer };
