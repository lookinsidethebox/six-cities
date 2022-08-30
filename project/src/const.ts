import { cities } from './mocks/cities';
import { sortTypes } from './mocks/sort-types';

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

export enum ReviewInfo {
  MaxLength = 300,
  MinLength = 50,
  MaxCount = 10
}

export const DefaultCity = cities[0];
export const DefaultSortType = sortTypes[0];
export const PROPERTY_IMAGES_MAX_COUNT = 6;
export const CITY_COUNT = 6;

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

