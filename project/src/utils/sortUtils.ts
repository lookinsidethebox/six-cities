import { PropertyType } from '../types/Property';

export function sortByPriceToHigh (a: PropertyType, b: PropertyType) {
  if (a.price > b.price) {
    return 1;
  }

  if (a.price < b.price) {
    return -1;
  }

  return 0;
}

export function sortByPriceToLow (a: PropertyType, b: PropertyType) {
  if (a.price > b.price) {
    return -1;
  }

  if (a.price < b.price) {
    return 1;
  }

  return 0;
}

export function sortByTopRated (a: PropertyType, b: PropertyType) {
  if (a.rating > b.rating) {
    return 1;
  }

  if (a.rating < b.rating) {
    return -1;
  }

  return 0;
}
