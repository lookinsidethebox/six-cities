import React from 'react';
//import Review from '../review/review';
import { PropertyType, Offers } from '../../types/Property';
import MainCard from '../../components/main-card/main-card';
import CityMap from '../../components/map/map';
import { getCityByName } from '../../utils';

type PropertyItemProps = {
  property: PropertyType;
  //showReviews: boolean;
  offersNearby: Offers;
}

function PropertyItem(props: PropertyItemProps) : JSX.Element {
  return (
    <React.Fragment>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {
              props.property.images.map((url) => (
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
              props.property.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {props.property.title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">{props.property.isFavorite ? 'In' : 'To'} bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: '80%' }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{props.property.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {props.property.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {props.property.bedrooms}
              </li>
              <li className="property__feature property__feature--adults">
                {props.property.maxAdults}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{props.property.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {
                  props.property.goods.map((item) => (
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
                  <img className="property__avatar user__avatar" src={props.property.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {props.property.host.name}
                </span>
                <span className="property__user-status">
                  {props.property.host.isPro}
                </span>
              </div>
              <div className="property__description">
                { props.property.description }
              </div>
            </div>
            {/* {
              props.showReviews ? <Review reviews={props.property.reviews} /> : ''
            } */}
          </div>
        </div>
        <section style={{ width: '100%', marginBottom: '30px' }} >
          <CityMap
            city={getCityByName(props.property.city.name)}
            offers={props.offersNearby}
            height={400}
          />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {
              props.offersNearby.map((card) => (
                <MainCard key={card.id} card={card} isNearby />
              ))
            }
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default PropertyItem;
