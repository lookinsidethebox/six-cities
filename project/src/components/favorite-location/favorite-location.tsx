import FavoritePlace from '../favorite-place/favorite-place';
import { City } from '../../types/City';
import type { PropertyType } from '../../types/Property';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/data-process/data-process';

type FavoriteLocationProps = {
  city: City;
  places: PropertyType[];
}

function FavoriteLocation(props: FavoriteLocationProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityClick = () => dispatch(changeCity(props.city));

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item" onClick={handleCityClick}>
          <Link
            className="locations__item-link"
            to="/"
          >
            <span>{props.city.name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {
          props.places.map((place) => (
            <FavoritePlace key={place.title} place={place} />
          ))
        }
      </div>
    </li>
  );
}

export default FavoriteLocation;
