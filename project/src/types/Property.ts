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
  city: string;
};

export type ReviewItemType = {
  id: number;
  name: string;
  avatarUrl: string;
  dateText: string;
  dateTime: string;
  text: string;
};