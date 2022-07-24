import FavoritePlace from '../../components/favorite-place/favorites-place';
import type { PropertyType } from '../../types/Property';

type FavoriteLocationProps = {
  city: string;
  places: PropertyType[];
}

function FavoriteLocation(props: FavoriteLocationProps) : JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{props.city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          props.places.map((place) => (
            <FavoritePlace key={place.name} place={place} />
          ))
        }
      </div>
    </li>
  );
}

export default FavoriteLocation;
