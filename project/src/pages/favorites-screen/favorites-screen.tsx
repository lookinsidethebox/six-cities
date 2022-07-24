import FavoriteLocation from '../../components/favorite-location/favorite-location';
import type { PropertyType } from '../../types/Property';

type FavoritesScreenProps = {
  favorites: PropertyType[];
}

function groupByCity(list: PropertyType[]) {
  const map = new Map<string, PropertyType[]>();
  list.forEach((item) => {
    const key = item.city;
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return Array.from(map.entries());
}

function FavoritesScreen({favorites}: FavoritesScreenProps) : JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {
              groupByCity(favorites).map((val) => (
                <FavoriteLocation key={val[0]} city={val[0]} places={val[1]}/>
              ))
            }
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
