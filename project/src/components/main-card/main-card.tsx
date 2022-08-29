import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { PropertyType } from '../../types/Property';
import type { FavoriteData } from '../../types/Favorite';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleIsFavoriteStateAction, fetchFavoriteOffersAction } from '../../store/api-actions';
import { FavoriteStatus, AppRoute } from '../../const';
import { getOfferInBookmark } from '../../store/favorite-process/selectors';
import { updateBookmarkInOffers, updateBookmarkInOffersNearby } from '../../store/offer-process/offer-process';
import { useIsAuthorized } from '../../hooks';

const STAR_WIDTH = 15;

type MainCardProps = {
  card: PropertyType;
  isNearby: boolean;
  onMouseOver?: () => void;
}

function MainCard(props: MainCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const favoriteData : FavoriteData = {
    offerId: props.card.id.toString(),
    status: props.card.isFavorite ? FavoriteStatus.Remove : FavoriteStatus.Add
  };

  const offerInBookmark = useAppSelector(getOfferInBookmark);

  useEffect((): void => {
    if (offerInBookmark?.id === props.card.id) {
      if (props.isNearby) {
        dispatch(updateBookmarkInOffersNearby(offerInBookmark));
      } else {
        dispatch(updateBookmarkInOffers(offerInBookmark));
      }
      dispatch(fetchFavoriteOffersAction());
    }
  }, [offerInBookmark]);

  const isAuthorized = useIsAuthorized();
  const navigate = useNavigate();

  const onBookmarkButtonClick = () => {
    if (isAuthorized) {
      dispatch(toggleIsFavoriteStateAction(favoriteData));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <article onMouseOver={props.onMouseOver} className={`${props.isNearby ? 'near-places__card' : 'cities__card'} place-card`}>
      {
        props.card.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${props.isNearby ? 'near-places__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <img className="place-card__image" src={props.card.previewImage} width="260" height="200" alt="Offer" />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${props.card.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
            onClick={onBookmarkButtonClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{props.card.isFavorite ? 'In' : 'To'} bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: Math.round(props.card.rating) * STAR_WIDTH }}></span>
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
