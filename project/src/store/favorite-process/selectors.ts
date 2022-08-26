import { NameSpace } from '../../const';
import { State } from '../../types/State';
import { PropertyType } from '../../types/Property';

export const getOfferInBookmark = (state: State): PropertyType | null => state[NameSpace.Favorite].offerInBookmark;
export const getFavoriteOffers = (state: State): PropertyType[] => state[NameSpace.Favorite].favoriteOffers;
export const getFavoriteOffersCount = (state: State): number => state[NameSpace.Favorite].favoriteOffers.length;
