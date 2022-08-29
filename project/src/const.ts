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
  Logout = '/logout',
  Reviews = '/comments',
  Nearby = '/nearby',
  Favorite = '/favorite'
}

export const DEFAULT_CITY = cities[0];
export const DEFAULT_SORT_TYPE = sortTypes[0];
export const REVIEW_MIN_LENGTH = 50;
export const REVIEW_MAX_LENGTH = 300;
export const REVIEWS_MAX_COUNT = 10;
export const PROPERTY_IMAGES_MAX_COUNT = 6;

export enum NameSpace {
  User = 'USER',
  Offer = 'OFFER',
  Data = 'DATA',
  Favorite = 'FAVORITE'
}

export enum FavoriteStatus {
  Remove = '0',
  Add = '1'
}
