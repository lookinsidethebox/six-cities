import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, DefaultCity, DefaultSortType } from '../../const';
import { fetchReviewsAction, sendReviewAction } from '../api-actions';
import type { City } from '../../types/City';
import type { SortType } from '../../types/SortType';
import type { ReviewItem } from '../../types/Property';
import { processReviews } from '../../utils';

type DataProcess = {
  city: City,
  sortType: SortType,
  reviews: ReviewItem[]
};

const initialState: DataProcess = {
  city: DefaultCity,
  sortType: DefaultSortType,
  reviews: []
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    changeSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = processReviews(action.payload);
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews = processReviews(action.payload);
      });
  }
});

export const { changeCity, changeSortType } = dataProcess.actions;
