import type { PropertyType } from '../../types/Property';
import { Link } from 'react-router-dom';

const STAR_WIDTH = 15;

type MainCardProps = {
  card: PropertyType;
  isNearby: boolean;
  onMouseOver?: () => void;
}

function MainCard(props: MainCardProps): JSX.Element {
  return (
    <article onMouseOver={props.onMouseOver} className={`${props.isNearby ? 'near-places__card' : 'cities__card'} place-card`}>
      {
        props.card.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${props.isNearby ? 'near-places__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`/offer/${props.card.id}`}>
          <img className="place-card__image" src={props.card.previewImage} width="260" height="200" alt="Offer" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${props.card.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{props.card.isFavorite ? 'In' : 'To'} bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: props.card.rating * STAR_WIDTH }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${props.card.id}`}>
            {props.card.title}
          </Link>
        </h2>
        <p className="place-card__type">{props.card.type}</p>
      </div>
    </article>
  );
}

export default MainCard;
