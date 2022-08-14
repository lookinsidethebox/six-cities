import type { Location } from './City';

export type PropertyType = {
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  goods: [string];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: [string];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Offers = PropertyType[];

export type ReviewItemType = {
  id: number;
  name: string;
  avatarUrl: string;
  dateText: string;
  dateTime: string;
  text: string;
};

export type GroupedProperty = {
  cityName: string;
  properties: Offers;
}
