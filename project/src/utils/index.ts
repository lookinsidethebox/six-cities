import type { PropertyType, GroupedProperty } from '../types/Property';
import type { City } from '../types/City';
import { sortTypes } from '../mocks/sortTypes';
import { offers } from '../mocks/offers';
import { cities } from '../mocks/cities';
import { CityList } from '../const';
import { sortByPriceToHigh, sortByPriceToLow, sortByTopRated } from './sortUtils';

export const getSortTypeById = (sortTypeId: number) => sortTypes.filter((sortType) => sortType.id === sortTypeId)[0];

export function getOffersByCity(cityId: number, sortTypeId: number) {
  const result = offers.filter((offer) => offer.cityId === cityId);

  switch(sortTypeId) {
    case 2:
      return result.sort(sortByPriceToHigh);
    case 3:
      return result.sort(sortByPriceToLow);
    case 4:
      return result.sort(sortByTopRated);
  }

  return result;
}

export function groupByCity(list: PropertyType[]) {
  const set = new Set<number>();
  return list.reduce((accumulator: GroupedProperty[], currentValue) =>
  {
    const acc = accumulator;
    if (!set.has(currentValue.cityId)) {
      set.add(currentValue.cityId);
      acc.push({
        cityId: currentValue.cityId,
        properties: list.filter((property) => property.cityId === currentValue.cityId)
      });
    }
    return acc;
  }, []);
}

export function getCityById(id: number) : City {
  return CityList.filter((city) => city.id === id).shift() ?? cities.Paris;
}
