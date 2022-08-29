import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/State';
import { PropertyType, ReviewItem } from '../types/Property';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../const';
import { LoginData, UserData } from '../types/Auth';
import { saveToken, dropToken } from '../services/token';
import { Review } from '../types/Review';
import { FavoriteData } from '../types/Favorite';

export const fetchOffersAction = createAsyncThunk<PropertyType[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<PropertyType[]>(ApiRoute.Offers);
    return data;
  }
);

export const fetchOfferByIdAction = createAsyncThunk<PropertyType, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/fetchOfferById',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<PropertyType>(ApiRoute.Offer.concat('/', id));
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<ReviewItem[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/fetchReviews',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<ReviewItem[]>(ApiRoute.Reviews.concat('/', offerId));
    return data;
  }
);

export const sendReviewAction = createAsyncThunk<ReviewItem[], Review, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/sendReview',
  async ({ offerId, rating, comment }, { extra: api }) => {
    const { data } = await api.post<ReviewItem[]>(ApiRoute.Reviews.concat('/', offerId), { rating, comment });
    return data;
  },
);

export const fetchOffersNearbyAction = createAsyncThunk<PropertyType[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/fetchOffersNearby',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<PropertyType[]>(ApiRoute.Offers.concat('/', offerId).concat(ApiRoute.Nearby));
    return data;
  }
);

export const setAuthStatusAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/setAuthStatus',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(ApiRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, LoginData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(ApiRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
  },
);

export const toggleIsFavoriteStateAction = createAsyncThunk<PropertyType, FavoriteData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/toggleIsFavoriteState',
  async ({ offerId, status }, { extra: api }) => {
    const { data } = await api.post<PropertyType>(ApiRoute.Favorite.concat('/', offerId).concat('/', status));
    return data;
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<PropertyType[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/fetchFavoriteOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<PropertyType[]>(ApiRoute.Favorite);
    return data;
  }
);
