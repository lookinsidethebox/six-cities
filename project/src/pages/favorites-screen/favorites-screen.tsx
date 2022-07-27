import FavoriteLocation from '../../components/favorite-location/favorite-location';
import type { PropertyType } from '../../types/Property';

type FavoritesScreenProps = {
  favorites: PropertyType[];
}

type GroupedProperty = {
  city: string;
  properties: PropertyType[];
}

function isUnique(element: GroupedProperty, index: number, array: GroupedProperty[]) {
  return array.findIndex(item => item.city === element.city) === index;
}

function groupByCity(list: PropertyType[]) : GroupedProperty[] {
  return list.map((item) => ({
    city: item.city,
    properties: list.filter((property) => property.city === item.city)
  })).filter(isUnique);
}


function FavoritesScreen({favorites}: FavoritesScreenProps) : JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {
              groupByCity(favorites).map((favorite) => (
                <FavoriteLocation key={favorite.city} city={favorite.city} places={favorite.properties}/>
              ))
            }
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
