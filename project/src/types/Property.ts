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
  }
  description: string;
  goods: [string];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  }
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

export type ReviewItem = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  }
};

export type GroupedProperty = {
  cityName: string;
  properties: PropertyType[];
}
