import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { cities } from './mocks/cities';

const Setting = {
  PLACES_COUNT: 312,
  PLACE_NAME: 'Amsterdam',
  CITIES: cities
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesCount={Setting.PLACES_COUNT}
      placeName={Setting.PLACE_NAME}
      cities={Setting.CITIES}
      offers={offers}
    />
  </React.StrictMode>,
);
