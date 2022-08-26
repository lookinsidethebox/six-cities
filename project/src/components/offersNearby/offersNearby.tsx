import MainCard from '../main/main-card';
import { PropertyType } from '../../types/Property';

type OffersNearbyProps = {
  offers: PropertyType[];
}

function OffersNearby({offers}: OffersNearbyProps) : JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {
            offers.map((offer) => (
              <MainCard key={offer.id} card={offer} isNearby />
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default OffersNearby;
