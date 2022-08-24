import { City } from '../../types/City';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/data-process/data-process';

type CityProps = {
  city: City,
  currentCity: City
}

function CityItem(props: CityProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const onCityClick = () => dispatch(changeCity(props.city));

  return (
    <li className="locations__item" key={props.city.name} onClick={onCityClick}>
      <Link
        className={`${props.currentCity.name === props.city.name ? 'tabs__item--active' : ''} locations__item-link tabs__item`}
        to={`?tab=${props.city.name}`}
      >
        <span>{props.city.name}</span>
      </Link>
    </li>
  );
}

export default CityItem;
