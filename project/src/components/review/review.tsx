import ReviewForm from '../review-form/review-form';
import { ReviewItemType } from '../../types/Property';

type ReviewProps = {
  reviews: ReviewItemType[];
};

function Review({reviews}: ReviewProps) : JSX.Element {
  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => (
            <li className="reviews__item" key={review.id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={review.avatarUrl} width="54" height="54" alt="Reviews avatar" />
                </div>
                <span className="reviews__user-name">
                  {review.name}
                </span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {review.text}
                </p>
                <time className="reviews__time" dateTime={review.dateTime}>{review.dateText}</time>
              </div>
            </li>
          ))
        }
      </ul>
      <ReviewForm />
    </section>
  );
}

export default Review;
