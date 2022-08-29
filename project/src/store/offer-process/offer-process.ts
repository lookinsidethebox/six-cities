import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PropertyType } from '../../types/Property';
import {
  fetchOffersAction,
  fetchOfferByIdAction,
  fetchOffersNearbyAction,
  sendReviewAction
} from '../api-actions';
import { updateOfferById, removeReviewError } from '../../utils';

type OfferProcess = {
  offers: PropertyType[],
  offersLoaded: boolean,
  currentOffer: PropertyType | null,
  currentOfferLoaded: boolean,
  offersNearby: PropertyType[],
  offersWithReviewErrors: number[]
};

const initialState: OfferProcess = {
  offers: [],
  offersLoaded: false,
  currentOffer: null,
  currentOfferLoaded: false,
  offersNearby: [],
  offersWithReviewErrors: []
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    updateBookmarkInOffers: (state, action) => {
      state.offers = updateOfferById(state.offers, action.payload);
    },
    updateBookmarkInCurrentOffer: (state, action) => {
      state.currentOffer = action.payload;
    },
    updateBookmarkInOffersNearby: (state, action) => {
      state.offersNearby = updateOfferById(state.offersNearby, action.payload);
    },
    removeReviewErrorByOfferId: (state) => {
      if (state.currentOffer !== null) {
        state.offersWithReviewErrors = removeReviewError(state.currentOffer.id, state.offersWithReviewErrors);
      }
    }
  },
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
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.offersWithReviewErrors = state.currentOffer === null
          ? state.offersWithReviewErrors
          : [...state.offersWithReviewErrors, state.currentOffer.id];
      });
  }
});

export const {
  updateBookmarkInOffers,
  updateBookmarkInCurrentOffer,
  updateBookmarkInOffersNearby,
  removeReviewErrorByOfferId
} = offerProcess.actions;
