import { cities } from './mocks/cities';
import { sortTypes } from './mocks/sortTypes';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ApiRoute {
  Offers = '/hotels',
  Offer = '/hotels',
  Login = '/login',
  Reviews = '/comments',
  Nearby = '/nearby'
}

export const DefaultCity = cities[0];
export const DefaultSortType = sortTypes[0];
export const ReviewMinLength = 50;
