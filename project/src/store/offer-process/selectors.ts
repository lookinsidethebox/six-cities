import { NameSpace } from '../../const';
import { State } from '../../types/State';
import { PropertyType } from '../../types/Property';
import { getOffersByCity } from '../../utils';

export const getOffersByCityAndSort = (state: State): PropertyType[] =>
  getOffersByCity(state[NameSpace.Offer].offers, state[NameSpace.Data].city.name, state[NameSpace.Data].sortType.id);
export const getOffersLoaded = (state: State): boolean => state[NameSpace.Offer].offersLoaded;
export const getCurrentOffer = (state: State): PropertyType | null => state[NameSpace.Offer].currentOffer;
export const getCurrentOfferLoaded = (state: State): boolean => state[NameSpace.Offer].currentOfferLoaded;
export const getOffersNearby = (state: State): PropertyType[] => state[NameSpace.Offer].offersNearby;
export const getCurrentOfferReviewErrors = (state: State): boolean => state[NameSpace.Offer].offersWithReviewErrors.some((review) => state[NameSpace.Offer].currentOffer?.id === review);
