import PropertyItem from '../../components/property-item/property-item';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import type { Offers } from '../../types/Property';
import { useParams } from 'react-router-dom';

const MAX_NEARBY_CARD_COUNT = 3;

type PropertyScreenProps = {
  offers: Offers;
}

function GetOfferById(offers: Offers) {
  const { id } = useParams();
  return offers.find((offer) => offer.id === Number(id)) ?? null;
}

function PropertyScreen({offers}: PropertyScreenProps) : JSX.Element {
  const offer = GetOfferById(offers);
  const offersNearby = offers.slice(0, MAX_NEARBY_CARD_COUNT);

  if (offer === null) {
    return (
      <NotFoundScreen />
    );
  }

  return (
    <main className="page__main page__main--property">
      <PropertyItem property={offer} showReviews offersNearby={offersNearby} />
    </main>
  );
}

export default PropertyScreen;
