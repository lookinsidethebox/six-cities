import React, { useEffect } from 'react';
import Reviews from '../reviews/reviews';
import CityMap from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOfferByIdAction, fetchOffersNearbyAction } from '../../store/api-actions';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Spinner from '../spinner/spinner';
import OffersNearby from '../offersNearby/offersNearby';
import { getCurrentOffer, currentOfferLoaded, getOffersNearby } from '../../store/offer-process/selectors';

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
  const isCurrentOfferLoaded = useAppSelector(currentOfferLoaded);
  const offersNearby = useAppSelector(getOffersNearby);

  if (!isCurrentOfferLoaded) {
    return(<Spinner />);
  }

  if (currentOffer === null) {
    return(<NotFoundScreen />);
  }

  const offersForMap = [ ...offersNearby, currentOffer ];

  return (
    <React.Fragment>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {
              currentOffer.images.map((url) => (
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
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">{currentOffer.isFavorite ? 'In' : 'To'} bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: currentOffer.rating * STAR_WIDTH }}></span>
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
        <section style={{ width: '50%', margin: '0 auto 30px auto' }} >
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
