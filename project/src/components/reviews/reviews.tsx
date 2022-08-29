import { useEffect } from 'react';
import ReviewForm from './review-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviewsAction } from '../../store/api-actions';
import { getReviews } from '../../store/data-process/selectors';
import { useIsAuthorized } from '../../hooks';

const STAR_WIDTH = 20;

type ReviewProps = {
  offerId: string;
};

function Reviews({offerId}: ReviewProps) : JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(()=> {
    dispatch(fetchReviewsAction(offerId));
  }, [offerId]);

  const reviews = useAppSelector(getReviews);
  const isAuthorized = useIsAuthorized();

  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => (
            <li className="reviews__item" key={ review.id }>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={ review.user.avatarUrl } width="54" height="54" alt="User avatar" />
                </div>
                <span className="reviews__user-name">
                  { review.user.name }
                </span>
                <span className="reviews__user-status">
                  { review.user.isPro }
                </span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{ width: Math.round(review.rating) * STAR_WIDTH }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  { review.comment }
                </p>
                <time className="reviews__time" dateTime={review.date}>{ new Date(review.date).toLocaleString('default', { month: 'long', year: 'numeric' }) }</time>
              </div>
            </li>
          ))
        }
      </ul>
      {
        isAuthorized && <ReviewForm offerId={offerId} />
      }
    </section>
  );
}

export default Reviews;
