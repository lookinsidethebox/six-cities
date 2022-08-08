import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { State, AppDispatch } from '../types/State';
import type { PropertyType, GroupedProperty } from '../types/Property';
import { CityList } from '../const';
import { cities } from '../mocks/cities';
import type { City } from '../types/City';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

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
