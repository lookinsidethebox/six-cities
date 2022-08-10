import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/State';
import { getOffers } from '../store/action';
import { Offers } from '../types/Property';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../const';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const {data} = await api.get<Offers>(ApiRoute.Offers);
    dispatch(getOffers(data));
  }
);
