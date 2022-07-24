import type { PropertyType } from '../../types/Property';
import { Link } from 'react-router-dom';

type MainCardProps = {
  card: PropertyType;
  isNear: boolean;
  activeCardId?: number;
  onMouseOver?: () => void
}

function MainCard(props: MainCardProps): JSX.Element {
  return (
    <article onMouseOver={props.onMouseOver} className={`${props.isNear ? 'near-places__card' : 'cities__card'} place-card`}>
      {
        props.card.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div style={{ display: 'none' }}>{props.activeCardId}</div>
      <div className={`${props.isNear ? 'near-places__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`/offer/${props.card.id}`}>
          <img className="place-card__image" src={props.card.mainImgUrl} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${props.card.isInBookmarks ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{props.card.isInBookmarks ? 'In' : 'To'} bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${props.card.id}`}>
            {props.card.name}
          </Link>
        </h2>
        <p className="place-card__type">{props.card.type}</p>
      </div>
    </article>
  );
}

export default MainCard;
