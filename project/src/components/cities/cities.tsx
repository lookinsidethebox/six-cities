import React from 'react';
import type { City } from '../../types/City';

import CityItem from '../city/city';

type CitiesProps = {
  cities: City[];
  currentCity: City;
}

function Cities(props: CitiesProps) : JSX.Element {
  return(
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              props.cities.map((city) =>
                <CityItem key={city.id} city={city} currentCity={props.currentCity} />
              )
            }
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Cities;
