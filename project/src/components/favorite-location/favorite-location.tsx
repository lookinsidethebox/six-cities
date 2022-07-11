import FavoritePlace from '../../components/favorite-place/favorites-place';

type Place = {
  isPremium: boolean;
  imgUrl: string;
  name: string;
  type: string;
  price: number;
};

type FavoriteLocationProps = {
  city: string;
  places: Place[];
}

function FavoriteLocation(props: FavoriteLocationProps) : JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{props.city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          props.places.map((place) => (
            <FavoritePlace
              key={place.name}
              isPremium={place.isPremium}
              imgUrl={place.imgUrl}
              name={place.name}
              type={place.type}
              price={place.price}
            />
          ))
        }
      </div>
    </li>
  );
}

export default FavoriteLocation;
