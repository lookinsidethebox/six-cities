import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PropertyType } from '../../types/Property';
import { fetchOffersAction, fetchOfferByIdAction, fetchOffersNearbyAction } from '../api-actions';

type OfferProcess = {
  offers: PropertyType[],
  offersLoaded: boolean,
  currentOffer: PropertyType | null,
  currentOfferLoaded: boolean,
  offersNearby: PropertyType[]
};

const initialState: OfferProcess = {
  offers: [],
  offersLoaded: false,
  currentOffer: null,
  currentOfferLoaded: false,
  offersNearby: []
};

export const offerProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersLoaded = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersLoaded = true;
      })
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.currentOfferLoaded = false;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.currentOfferLoaded = true;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      });
  }
});
