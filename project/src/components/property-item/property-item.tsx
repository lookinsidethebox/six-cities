import Review from '../review/review';

type ReviewItem = {
  name: string;
  avatarUrl: string;
  dateText: string;
  dateTime: string;
  text: string;
};

type PropertyItemProps = {
  showReviews: boolean;
  isPremium: boolean;
  isInBookmarks: boolean;
  name: string;
  type: string;
  bedrooms: string;
  adults: string;
  hostName: string;
  hostStatus: string;
  hostAvatarUrl: string;
  price: number;
  rating: number;
  imgUrls: string[];
  propertyInside: string[];
  description: string[];
  reviews: ReviewItem[];
}

function PropertyItem(props: PropertyItemProps) : JSX.Element {
  return(
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {
            props.imgUrls.map((url) => (
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
            props.isPremium &&
            <div className="property__mark">
              <span>Premium</span>
            </div>
          }
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {props.name}
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{props.isInBookmarks ? 'In' : 'To'} bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{props.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {props.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {props.bedrooms}
            </li>
            <li className="property__feature property__feature--adults">
              {props.adults}
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{props.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {
                props.propertyInside.map((property) => (
                  <li className="property__inside-item" key={property}>
                    {property}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src={props.hostAvatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {props.hostName}
              </span>
              <span className="property__user-status">
                {props.hostStatus}
              </span>
            </div>
            <div className="property__description">
              {
                props.description.map((desc) => (
                  <p className="property__text" key={desc}>
                    {desc}
                  </p>
                ))
              }
            </div>
          </div>
          {
            props.showReviews ? <Review reviews={props.reviews} /> : ''
          }
        </div>
      </div>
      <section className="property__map map"></section>
    </section>
  );
}

export default PropertyItem;
