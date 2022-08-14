import { City } from '../../types/City';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCity, updateOffers } from '../../store/action';

type CityProps = {
  city: City,
  currentCity: City
}

function CityItem(props: CityProps) : JSX.Element {
  const dispatch = useAppDispatch();

  const onCityClick = (city: City) => {
    dispatch(changeCity(city));
    dispatch(updateOffers());
  };

  return (
    <li className="locations__item" key={props.city.id} onClick={() => onCityClick(props.city)}>
      <Link
        className={`${props.currentCity.id === props.city.id ? 'tabs__item--active' : ''} locations__item-link tabs__item`}
        to={`?tab=${props.city.name}`}
      >
        <span>{props.city.name}</span>
      </Link>
    </li>
  );
}

export default CityItem;
