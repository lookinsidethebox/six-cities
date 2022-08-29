import React, { FormEvent, ChangeEvent, useRef } from 'react';
import { Review } from '../../types/Review';
import { useAppDispatch } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { REVIEW_MIN_LENGTH, REVIEW_MAX_LENGTH } from '../../const';

type ReviewFormProps = {
  offerId: string;
}

function ReviewForm({offerId} : ReviewFormProps) : JSX.Element {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = React.useState({
    rating: 0,
    review: ''
  });

  const ratingChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const reviewChangeHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    let text = value;

    if (text.length > REVIEW_MAX_LENGTH) {
      text = text.substring(0, REVIEW_MAX_LENGTH);
    }

    setFormData({...formData, [name]: text});
  };

  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.rating && formData.review) {
      const review : Review = {
        rating: formData.rating,
        comment: formData.review,
        offerId: offerId
      };

      dispatch(sendReviewAction(review));
      formRef.current?.reset();
      setFormData({...formData, rating: 0, review: ''});
    }
  };

  const isButtonDisabled = formData.rating === 0 || formData.review.length < REVIEW_MIN_LENGTH;

  return (
    <form ref={formRef} onSubmit={onSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onChange={ratingChangeHandle} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={ratingChangeHandle} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={ratingChangeHandle} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={ratingChangeHandle} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={ratingChangeHandle} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea value={formData.review} onChange={reviewChangeHandle} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{REVIEW_MIN_LENGTH} characters</b> and less than <b className="reviews__text-amount">{REVIEW_MAX_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isButtonDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
