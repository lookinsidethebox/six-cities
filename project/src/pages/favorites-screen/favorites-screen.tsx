import FavoriteLocation from '../../components/favorite-location/favorite-location';
import type { PropertyType } from '../../types/Property';
import { CityList } from '../../const';
import { cities } from '../../mocks/cities';
import type { City } from '../../types/City';

type FavoritesScreenProps = {
  favorites: PropertyType[];
}

type GroupedProperty = {
  cityId: number;
  properties: PropertyType[];
}

function isUnique(element: GroupedProperty, index: number, array: GroupedProperty[]) {
  return array.findIndex((item) => item.cityId === element.cityId) === index;
}

function groupByCity(list: PropertyType[]) : GroupedProperty[] {
  return list.map((item) => ({
    cityId: item.cityId,
    properties: list.filter((property) => property.cityId === item.cityId)
  })).filter(isUnique);
}

function getCityById(id: number) : City {
  return CityList.filter((city) => city.id === id).shift() ?? cities.Paris;
}

function FavoritesScreen({favorites}: FavoritesScreenProps) : JSX.Element {
  if(favorites && favorites.length > 0) {
    return (
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                groupByCity(favorites).map((favorite) => (
                  <FavoriteLocation key={favorite.cityId} city={getCityById(favorite.cityId)} places={favorite.properties}/>
                ))
              }
            </ul>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
