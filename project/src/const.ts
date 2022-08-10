import { cities } from './mocks/cities';
import type { City } from './types/City';

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

export const CityList : City[] = [
  cities.Paris,
  cities.Cologne,
  cities.Brussels,
  cities.Amsterdam,
  cities.Hamburg,
  cities.Dusseldorf
];

export enum ApiRoute {
  Offers = '/hotels'
}
