export type City = {
  id: number;
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
};

export type CityItem = {
  [propertyName: string]: City
};
