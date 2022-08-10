export type PropertyType = {
  id: number;
  isPremium: boolean;
  isInBookmarks: boolean;
  name: string;
  type: string;
  bedrooms: string;
  adults: string;
  hostName: string;
  hostStatus: string;
  hostAvatarUrl: string;
  price: number;
  rating: number;
  imgUrls: string[];
  mainImgUrl: string;
  propertyInside: string[];
  description: string[];
  reviews: ReviewItemType[];
  cityId: number;
  location: {
    latitude: number;
    longitude: number;
  }
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
  cityId: number;
  properties: Offers;
}
