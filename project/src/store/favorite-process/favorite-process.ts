import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PropertyType } from '../../types/Property';
import { toggleIsFavoriteStateAction, fetchFavoriteOffersAction } from '../api-actions';

type FavoriteProcess = {
  offerInBookmark: PropertyType | null,
  favoriteOffers: PropertyType[]
};

const initialState: FavoriteProcess = {
  offerInBookmark: null,
  favoriteOffers: []
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(toggleIsFavoriteStateAction.fulfilled, (state, action) => {
        state.offerInBookmark = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  }
});
