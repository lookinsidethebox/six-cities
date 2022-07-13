export type MainCardType = {
  isPremium: boolean;
  isInBookmarks: boolean;
  isNear: boolean;
  imgUrl: string;
  price: number;
  name: string;
  type: string;
};

export type FavoritePlaceType = Omit<MainCardType, 'isInBookmarks' | 'isNear'>;