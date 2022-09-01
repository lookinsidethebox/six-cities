import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Reviews from '../reviews/reviews';
import CityMap from '../city-map/city-map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchOfferByIdAction,
  fetchOffersNearbyAction,
  toggleIsFavoriteStateAction,
  fetchFavoriteOffersAction
} from '../../store/api-actions';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Spinner from '../spinner/spinner';
import OffersNearby from '../offers-nearby/offers-nearby';
import { getCurrentOffer, getCurrentOfferLoaded, getOffersNearby } from '../../store/offer-process/selectors';
import { FavoriteStatus, PROPERTY_IMAGES_MAX_COUNT, AppRoute } from '../../const';
import type { FavoriteData } from '../../types/Favorite';
import { getOfferInBookmark } from '../../store/favorite-process/selectors';
import { updateBookmarkInCurrentOffer } from '../../store/offer-process/offer-process';
import { useIsAuthorized } from '../../hooks';
import './property-item.css';

const STAR_WIDTH = 30;

type PropertyItemProps = {
  id: string;
}

function PropertyItem({id}: PropertyItemProps) : JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferByIdAction(id));
      dispatch(fetchOffersNearbyAction(id));
      window.scrollTo(0, 0);
    }
  }, [id]);

  const currentOffer = useAppSelector(getCurrentOffer);
  const isCurrentOfferLoaded = useAppSelector(getCurrentOfferLoaded);
  const offersNearby = useAppSelector(getOffersNearby);
  const offerInBookmark = useAppSelector(getOfferInBookmark);
  const isAuthorized = useIsAuthorized();
  const navigate = useNavigate();

  useEffect((): void => {
    if (offerInBookmark?.id.toString() === id) {
      dispatch(updateBookmarkInCurrentOffer(offerInBookmark));
      dispatch(fetchFavoriteOffersAction());
    }
  }, [offerInBookmark]);

  const favoriteData : FavoriteData = {
    offerId: id.toString(),
    status: currentOffer?.isFavorite ? FavoriteStatus.Remove : FavoriteStatus.Add
  };

  if (!isCurrentOfferLoaded) {
    return(<Spinner />);
  }

  if (currentOffer === null) {
    return(<NotFoundScreen />);
  }
  const offersForMap = [ ...offersNearby, currentOffer ];

  const handleBookmarkClick = () => {
    if (isAuthorized) {
      dispatch(toggleIsFavoriteStateAction(favoriteData));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <React.Fragment>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {
              currentOffer.images.slice(0, PROPERTY_IMAGES_MAX_COUNT).map((url) => (
                <div className="property__image-wrapper" key={url}>
                  <img className="property__image" src={url} alt="Studio" />
                </div>
              ))
            }
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {
              currentOffer.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {currentOffer.title}
              </h1>
              <button
                className="property__bookmark-button button"
                type="button"
                onClick={handleBookmarkClick}
              >
                <svg className={`property__bookmark-icon ${currentOffer.isFavorite ? 'property__bookmark-icon--active' : ''}`} width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">{currentOffer.isFavorite ? 'In' : 'To'} bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: Math.round(currentOffer.rating) * STAR_WIDTH }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{currentOffer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {currentOffer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {currentOffer.bedrooms}
              </li>
              <li className="property__feature property__feature--adults">
                {currentOffer.maxAdults}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{currentOffer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {
                  currentOffer.goods.map((item) => (
                    <li className="property__inside-item" key={item}>
                      {item}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={ currentOffer.host.avatarUrl } width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  { currentOffer.host.name }
                </span>
                <span className="property__user-status">
                  { currentOffer.host.isPro }
                </span>
              </div>
              <div className="property__description">
                { currentOffer.description }
              </div>
            </div>
            <Reviews offerId={id} />
          </div>
        </div>
        <section className="map-container">
          <CityMap
            centerLocation={currentOffer.location}
            offers={offersForMap}
            selectedOffer={currentOffer}
            height={400}
          />
        </section>
      </section>
      {
        offersNearby && <OffersNearby offers={offersNearby} />
      }
    </React.Fragment>
  );
}

export default PropertyItem;
