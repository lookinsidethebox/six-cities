import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { offerProcess } from './offer-process/offer-process';
import { dataProcess } from './data-process/data-process';
import { favoriteProcess } from './favorite-process/favorite-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.Favorite]: favoriteProcess.reducer
});
