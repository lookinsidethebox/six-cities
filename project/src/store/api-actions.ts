import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/State';
import { updateOffers, setAuthStatus } from '../store/action';
import { Offers } from '../types/Property';
import { AxiosInstance } from 'axios';
import { ApiRoute, AuthorizationStatus } from '../const';
import { LoginData, UserData } from '../types/Auth';
import { saveToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(ApiRoute.Offers);
    dispatch(updateOffers(data));
  }
);

export const setAuthStatusAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/setAuthStatus',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, LoginData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(ApiRoute.Login, { email, password });

    if (token) {
      saveToken(token);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    }
  },
);
