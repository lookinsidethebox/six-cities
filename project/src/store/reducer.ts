import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { cities } from '../mocks/cities';
import { changeCity, getOffers } from './action';
import type { PropertyType } from '../types/Property';

const DEFAULT_CITY = cities.Paris;
const getOffersByCity = (offerList: PropertyType[], id: number) => offerList.filter((offer) => offer.cityId === id);

const initialState = {
  city: DEFAULT_CITY,
  offers: getOffersByCity(offers, DEFAULT_CITY.id),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offers = getOffersByCity(offers, state.city.id);
    });
});

export { reducer };
