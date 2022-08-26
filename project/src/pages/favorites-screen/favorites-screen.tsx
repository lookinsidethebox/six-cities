import React from 'react';
import FavoriteLocation from '../../components/favorite/favorite-location';
import { groupByCity, getCityByName } from '../../utils';
import Header from '../../components/header/header';
import FavoriteEmpty from '../../components/favorite/favorite-empty';
import { getFavoriteOffers } from '../../store/favorite-process/selectors';
import { useAppSelector } from '../../hooks';

function FavoritesScreen() : JSX.Element {
  const favorites = useAppSelector(getFavoriteOffers);

  if (favorites && favorites.length > 0) {
    return (
      <React.Fragment>
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  groupByCity(favorites).map((favorite) => (
                    <FavoriteLocation key={favorite.cityName} city={getCityByName(favorite.cityName)} places={favorite.properties}/>
                  ))
                }
              </ul>
            </section>
          </div>
        </main>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Header />
      <FavoriteEmpty />
    </React.Fragment>
  );
}

export default FavoritesScreen;
