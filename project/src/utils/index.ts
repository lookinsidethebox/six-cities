import type { PropertyType, GroupedProperty } from '../types/Property';
import type { City } from '../types/City';
import { sortTypes } from '../mocks/sortTypes';
import { cities } from '../mocks/cities';
import { DefaultCity } from '../const';
import { sortByPriceToHigh, sortByPriceToLow, sortByTopRated } from './sortUtils';

export const getSortTypeById = (sortTypeId: number) => sortTypes.filter((sortType) => sortType.id === sortTypeId)[0];

export function getOffersByCity(offers: PropertyType[], cityName: string, sortTypeId: number) {
  const result = offers.filter((offer) => offer.city.name === cityName);

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
  const set = new Set<string>();
  return list.reduce((accumulator: GroupedProperty[], currentValue) =>
  {
    const acc = accumulator;
    if (!set.has(currentValue.city.name)) {
      set.add(currentValue.city.name);
      acc.push({
        cityName: currentValue.city.name,
        properties: list.filter((property) => property.city.name === currentValue.city.name)
      });
    }
    return acc;
  }, []);
}

export function getCityByName(name: string | undefined) : City {
  if (name === undefined) {
    return DefaultCity;
  }

  return cities.filter((city) => city.name === name)[0] ?? DefaultCity;
}
