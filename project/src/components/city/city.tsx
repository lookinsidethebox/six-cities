import { City } from '../../types/City';
import { Link } from 'react-router-dom';

type CityProps = {
  city: City,
  currentCity: City,
  onClick: (city: City) => void;
}

function CityItem(props: CityProps) : JSX.Element {
  return (
    <li className="locations__item" key={props.city.id} onClick={() => props.onClick(props.city)}>
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
