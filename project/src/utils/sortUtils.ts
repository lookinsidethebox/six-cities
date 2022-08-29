import { PropertyType, ReviewItem } from '../types/Property';

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
    return -1;
  }

  if (a.rating < b.rating) {
    return 1;
  }

  return 0;
}

export function sortReviews (a: ReviewItem, b: ReviewItem) {
  if (new Date(a.date) > new Date(b.date)) {
    return -1;
  }

  if (new Date(a.date) < new Date(b.date)) {
    return 1;
  }

  return 0;
}
