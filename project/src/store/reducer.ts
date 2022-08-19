import { createReducer } from '@reduxjs/toolkit';
import { changeCity, updateOffers, setSortType, setAuthStatus, updateCurrentOffer, updateReviews, updateOffersNearby } from './action';
import { getOffersByCity, getSortTypeById } from '../utils';
import { DefaultCity, DefaultSortType, AuthorizationStatus } from '../const';
import type { PropertyType, ReviewItem } from '../types/Property';
import type { City } from '../types/City';
import type { SortType } from '../types/SortType';

type InitialStateType = {
  city: City,
  offers: PropertyType[],
  sortType: SortType,
  offersLoaded: boolean,
  authStatus: AuthorizationStatus,
  currentOffer: PropertyType | null,
  currentOfferLoaded: boolean,
  reviews: ReviewItem[],
  offersNearby: PropertyType[]
};

const initialState : InitialStateType = {
  city: DefaultCity,
  offers: [],
  sortType: DefaultSortType,
  offersLoaded: false,
  authStatus: AuthorizationStatus.Unknown,
  currentOffer: null,
  currentOfferLoaded: false,
  reviews: [],
  offersNearby: []
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
    })
    .addCase(updateCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
      state.currentOfferLoaded = true;
    })
    .addCase(updateReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(updateOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    });
});

export { reducer };
