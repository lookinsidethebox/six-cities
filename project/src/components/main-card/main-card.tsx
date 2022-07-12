import type { MainCardType } from '../../types/MainCard';

type MainCardProps = {
  card: MainCardType;
}

function MainCard({card}: MainCardProps): JSX.Element {
  return (
    <article className={`${card.isNear ? 'near-places__card' : 'cities__card'} place-card`}>
      {
        card.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${card.isNear ? 'near-places__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <a href="/">
          <img className="place-card__image" src={card.imgUrl} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${card.isInBookmarks ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{card.isInBookmarks ? 'In' : 'To'} bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{card.name}</a>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}

export default MainCard;
