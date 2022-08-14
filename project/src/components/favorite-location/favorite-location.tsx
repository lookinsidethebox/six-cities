import FavoritePlace from '../../components/favorite-place/favorites-place';
import { City } from '../../types/City';
import type { Offers } from '../../types/Property';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCity, updateOffers } from '../../store/action';

type FavoriteLocationProps = {
  city: City;
  places: Offers;
}

function FavoriteLocation(props: FavoriteLocationProps) : JSX.Element {
  const dispatch = useAppDispatch();

  const onCityClick = (city: City) => {
    dispatch(changeCity(city));
    dispatch(updateOffers());
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item" onClick={() => onCityClick(props.city)}>
          <Link
            className="locations__item-link"
            to={`/?tab=${props.city.name}`}
          >
            <span>{props.city.name}</span>
          </Link>
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
