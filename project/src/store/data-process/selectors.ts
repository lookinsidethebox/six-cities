import { NameSpace } from '../../const';
import { State } from '../../types/State';
import type { City } from '../../types/City';
import type { SortType } from '../../types/SortType';
import type { ReviewItem } from '../../types/Property';

export const getCity = (state: State): City => state[NameSpace.Data].city;
export const getSortType = (state: State): SortType => state[NameSpace.Data].sortType;
export const getReviews = (state: State): ReviewItem[] => state[NameSpace.Data].reviews;
