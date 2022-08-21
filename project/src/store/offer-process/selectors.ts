import { NameSpace } from '../../const';
import { State } from '../../types/State';
import { PropertyType } from '../../types/Property';

export const getOffers = (state: State): PropertyType[] => state[NameSpace.Offer].offers;
export const offersLoaded = (state: State): boolean => state[NameSpace.Offer].offersLoaded;
export const getCurrentOffer = (state: State): PropertyType | null => state[NameSpace.Offer].currentOffer;
export const currentOfferLoaded = (state: State): boolean => state[NameSpace.Offer].currentOfferLoaded;
export const getOffersNearby = (state: State): PropertyType[] => state[NameSpace.Offer].offersNearby;
