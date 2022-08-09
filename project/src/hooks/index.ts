import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { State, AppDispatch } from '../types/State';
import { sorts } from '../mocks/sorts';
import { offers } from '../mocks/offers';
import { cities } from '../mocks/cities';
import { sortByPriceToHigh, sortByPriceToLow, sortByTopRated } from './sortUtils';

const DEFAULT_SORT = 1;

export function getOffersByCity (id: number, sort: number) {
  const result = offers.filter((offer) => offer.cityId === id);

  switch(sort) {
    case 2:
      return result.sort(sortByPriceToHigh);
    case 3:
      return result.sort(sortByPriceToLow);
    case 4:
      return result.sort(sortByTopRated);
  }

  return result;
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
export const getSortById = (id: number) => sorts.filter((sort) => sort.id === id)[0];
export const getDefaultCity = () => cities.Paris;
export const getDefaultSortId = () => DEFAULT_SORT;
