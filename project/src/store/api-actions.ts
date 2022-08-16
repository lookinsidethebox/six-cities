import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/State';
import { updateOffers, setAuthStatus, updateCurrentOffer, updateReviews, updateOffersNearby } from '../store/action';
import { PropertyType, ReviewItem } from '../types/Property';
import { AxiosInstance } from 'axios';
import { ApiRoute, AuthorizationStatus } from '../const';
import { LoginData, UserData } from '../types/Auth';
import { saveToken } from '../services/token';
import { Review } from '../types/Review';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<PropertyType[]>(ApiRoute.Offers);
    dispatch(updateOffers(data));
  }
);

export const fetchOfferByIdAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/fetchOfferById',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<PropertyType>(ApiRoute.Offer.concat('/', id));
    dispatch(updateCurrentOffer(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/fetchReviews',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewItem[]>(ApiRoute.Reviews.concat('/', offerId));
    dispatch(updateReviews(data));
  }
);

export const sendReviewAction = createAsyncThunk<void, Review, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/sendReview',
  async ({ offerId, rating, comment }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(ApiRoute.Reviews.concat('/', offerId), { rating, comment });
    dispatch(updateReviews(data));
  },
);

export const fetchOffersNearbyAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/fetchOffersNearby',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<PropertyType[]>(ApiRoute.Offers.concat('/', offerId).concat(ApiRoute.Nearby));
    dispatch(updateOffersNearby(data));
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
