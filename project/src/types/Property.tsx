export type PropertyItemType = {
  showReviews: boolean;
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
  propertyInside: string[];
  description: string[];
  reviews: ReviewItemType[];
};

export type ReviewItemType = {
  name: string;
  avatarUrl: string;
  dateText: string;
  dateTime: string;
  text: string;
};