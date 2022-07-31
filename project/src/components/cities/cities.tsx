import React from 'react';
import type { City } from '../../types/City';
import { useAppDispatch } from '../../hooks';
import { changeCity, getOffers } from '../../store/action';
import CityItem from '../city/city';

type CitiesProps = {
  cities: City[];
  currentCity: City;
}

function Cities(props: CitiesProps) : JSX.Element {
  const dispatch = useAppDispatch();

  const onCityClick = (city: City) => {
    dispatch(changeCity(city));
    dispatch(getOffers());
  };

  return(
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              props.cities.map((city) =>
                <CityItem key={city.id} city={city} currentCity={props.currentCity} onClick={onCityClick} />
              )
            }
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Cities;
