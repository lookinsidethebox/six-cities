import MainCard from '../../components/main-card/main-card';
import PropertyItem from '../../components/property-item/property-item';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import type { PropertyType } from '../../types/Property';
import { useParams } from 'react-router-dom';

type PropertyScreenProps = {
  offers: PropertyType[];
}

function GetOfferById(offers: PropertyType[]) {
  const { id } = useParams();
  return offers.find((x) => x.id === Number(id)) ?? null;
}

function PropertyScreen({offers}: PropertyScreenProps) : JSX.Element {
  const offer = GetOfferById(offers);
  if (offer === null) {
    return (
      <NotFoundScreen />
    );
  } else {
    return (
      <main className="page__main page__main--property">
        <PropertyItem property={offer} showReviews />
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {
                offers.slice(0, 3).map((card) => (
                  <MainCard key={card.id} card={card} isNear />
                ))
              }
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default PropertyScreen;
