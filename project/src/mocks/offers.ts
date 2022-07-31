import type { PropertyType } from '../types/Property';

export const offers : PropertyType[] = [
  {
    id: 1,
    isPremium: true,
    isInBookmarks: false,
    mainImgUrl: 'img/apartment-01.jpg',
    price: 120,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 4 adults',
    hostName: 'Angelina',
    hostStatus: 'Pro',
    hostAvatarUrl: 'img/avatar-angelina.jpg',
    rating: 4.8,
    imgUrls: ['img/room.jpg','img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/studio-01.jpg','img/apartment-01.jpg'],
    propertyInside: ['Wi-Fi','Washing machine','Towels','Heating','Coffee machine','Baby seat','Kitchen','Dishwasher','Cabel TV','Fridge'],
    description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'],
    reviews: [{
      id: 1,
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      dateText: 'April 2019',
      dateTime: '2019-04-24',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
    }],
    cityId: 4,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    }
  },
  {
    id: 2,
    isPremium: false,
    isInBookmarks: true,
    mainImgUrl: 'img/room.jpg',
    price: 80,
    name: 'Wood and stone place',
    type: 'Private room',
    bedrooms: '1 Bedrooms',
    adults: 'Max 2 adults',
    hostName: 'Angelina',
    hostStatus: 'Pro',
    hostAvatarUrl: 'img/avatar-angelina.jpg',
    rating: 4.2,
    imgUrls: ['img/room.jpg','img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/studio-01.jpg','img/apartment-01.jpg'],
    propertyInside: ['Wi-Fi','Coffee machine','Kitchen','Dishwasher','Fridge'],
    description: ['Comfortable and neat room with welcoming hosts.'],
    reviews: [],
    cityId: 4,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198
    }
  },
  {
    id: 3,
    isPremium: false,
    isInBookmarks: false,
    mainImgUrl: 'img/apartment-02.jpg',
    price: 132,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    bedrooms: '2 Bedrooms',
    adults: 'Max 4 adults',
    hostName: 'Max',
    hostStatus: 'New',
    hostAvatarUrl: 'img/avatar-max.jpg',
    rating: 4.4,
    imgUrls: ['img/room.jpg','img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/studio-01.jpg','img/apartment-01.jpg'],
    propertyInside: ['Wi-Fi','Washing machine','Towels','Heating','Coffee machine','Baby seat','Kitchen','Dishwasher','Cabel TV','Fridge'],
    description: ['Nice and beautiful location in the center of Amsterdam'],
    reviews: [{
      id: 2,
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      dateText: 'September 2021',
      dateTime: '2021-09-05',
      text: 'Wonderful view!'
    }],
    cityId: 4,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198
    }
  },
  {
    id: 4,
    isPremium: true,
    isInBookmarks: false,
    mainImgUrl: 'img/apartment-03.jpg',
    price: 180,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    bedrooms: '4 Bedrooms',
    adults: 'Max 6 adults',
    hostName: 'Max',
    hostStatus: 'New',
    hostAvatarUrl: 'img/avatar-max.jpg',
    rating: 4.9,
    imgUrls: ['img/room.jpg','img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/studio-01.jpg','img/apartment-01.jpg'],
    propertyInside: ['Wi-Fi','Washing machine','Towels','Heating','Coffee machine','Baby seat','Kitchen','Dishwasher','Cabel TV','Fridge'],
    description: ['Good choice for a big company.'],
    reviews: [],
    cityId: 4,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198
    }
  }
];
