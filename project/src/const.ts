import { cities } from './mocks/cities';
import type { City } from './types/City';
import type { SortType } from './types/SortType';

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

export const DefaultCity : City = cities.Paris;

export const DefaultSortType : SortType = {
  id: 1,
  name: 'Popular'
};
