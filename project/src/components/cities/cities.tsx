import React from 'react';

type CitiesProps = {
  cities: string[];
}

function Cities({cities}: CitiesProps) : JSX.Element {
  return(
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              cities.map((city) => (
                <li className="locations__item" key={city}>
                  <a className="locations__item-link tabs__item" href="/">
                    <span>{city}</span>
                  </a>
                </li>)
              )
            }
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Cities;
