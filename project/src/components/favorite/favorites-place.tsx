import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { PropertyType } from '../../types/Property';
import type { FavoriteData } from '../../types/Favorite';
import { FavoriteStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleIsFavoriteStateAction, fetchFavoriteOffersAction } from '../../store/api-actions';
import { getOfferInBookmark } from '../../store/favorite-process/selectors';

type FavoritePlaceProps = {
  place: PropertyType
};

function FavoritePlace({place}: FavoritePlaceProps) : JSX.Element {
  const dispatch = useAppDispatch();

  const favoriteData : FavoriteData = {
    offerId: place.id.toString(),
    status: FavoriteStatus.Remove
  };

  const offerInBookmark = useAppSelector(getOfferInBookmark);

  useEffect((): void => {
    if (offerInBookmark?.id === place.id) {
      dispatch(fetchFavoriteOffersAction());
    }
  }, [offerInBookmark]);

  return (
    <article className="favorites__card place-card">
      {
        place.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${place.id}`}>
          <img className="place-card__image" src={place.previewImage} width="150" height="110" alt="Place preview" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={() => dispatch(toggleIsFavoriteStateAction(favoriteData)) }
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '100%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${place.id}`}>
            {place.title}
          </Link>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}

export default FavoritePlace;
