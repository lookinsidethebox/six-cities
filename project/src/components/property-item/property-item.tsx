import Review from '../review/review';
import { PropertyItemType } from '../../types/Property';

type PropertyItemProps = {
  property: PropertyItemType;
}

function PropertyItem({property}: PropertyItemProps) : JSX.Element {
  return(
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {
            property.imgUrls.map((url) => (
              <div className="property__image-wrapper" key={url}>
                <img className="property__image" src={url} alt="Photo studio" />
              </div>
            ))
          }
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {
            property.isPremium &&
            <div className="property__mark">
              <span>Premium</span>
            </div>
          }
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {property.name}
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{property.isInBookmarks ? 'In' : 'To'} bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{property.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {property.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {property.bedrooms}
            </li>
            <li className="property__feature property__feature--adults">
              {property.adults}
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{property.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {
                property.propertyInside.map((item) => (
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
                <img className="property__avatar user__avatar" src={property.hostAvatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {property.hostName}
              </span>
              <span className="property__user-status">
                {property.hostStatus}
              </span>
            </div>
            <div className="property__description">
              {
                property.description.map((desc) => (
                  <p className="property__text" key={desc}>
                    {desc}
                  </p>
                ))
              }
            </div>
          </div>
          {
            property.showReviews ? <Review reviews={property.reviews} /> : ''
          }
        </div>
      </div>
      <section className="property__map map"></section>
    </section>
  );
}

export default PropertyItem;
