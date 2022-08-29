import { City } from '../../types/City';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import { fetchOffersAction } from '../../store/api-actions';

type CityProps = {
  city: City,
  currentCity: City
}

function CityItem(props: CityProps) : JSX.Element {
  const dispatch = useAppDispatch();

  const onCityClick = (city: City) => {
    dispatch(changeCity(city));
    dispatch(fetchOffersAction());
  };

  return (
    <li className="locations__item" key={props.city.name} onClick={() => onCityClick(props.city)}>
      <Link
        className={`${props.currentCity.name === props.city.name ? 'tabs__item--active' : ''} locations__item-link tabs__item`}
        to="/"
      >
        <span>{props.city.name}</span>
      </Link>
    </li>
  );
}

export default CityItem;
