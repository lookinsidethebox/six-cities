import React from 'react';
import Cities from '../../components/city/cities';
import MainCard from '../../components/main/main-card';
import MainEmpty from '../../components/main/main-empty';
import CityMap from '../../components/map/map';
import Sorting from '../../components/sorting/sorting';
import Header from '../../components/header/header';
import { cities } from '../../mocks/cities';
import { useAppSelector } from '../../hooks';
import { PropertyType } from '../../types/Property';
import Spinner from '../../components/spinner/spinner';
import { store } from '../../store';
import { fetchOffersAction } from '../../store/api-actions';
import { getOffers, offersLoaded } from '../../store/offer-process/selectors';
import { getCity, getSortType } from '../../store/data-process/selectors';
import { getOffersByCity } from '../../utils';

store.dispatch(fetchOffersAction());

function MainScreen(): JSX.Element {
  const [activeCard, setActiveCardId] = React.useState<PropertyType>();
  const currentCity = useAppSelector(getCity);
  const sortType = useAppSelector(getSortType);
  const offers = useAppSelector(getOffers);
  const offersByCity = getOffersByCity(offers, currentCity.name, sortType.id);
  const isOffersLoaded = useAppSelector(offersLoaded);

  if (!isOffersLoaded) {
    return(<Spinner />);
  }

  if (offersByCity && offersByCity.length > 0) {
    return (
      <React.Fragment>
        <Header />
        <main className="page__main page__main--index">
          <Cities cities={cities} currentCity={currentCity} />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersByCity.length} places to stay in {currentCity.name}</b>
                <Sorting />
                <div className="cities__places-list places__list tabs__content">
                  {
                    offersByCity.map((offer) => (
                      <MainCard
                        key={offer.id}
                        card={offer}
                        isNearby={false}
                        onMouseOver={() => setActiveCardId(offer)}
                      />
                    ))
                  }
                </div>
              </section>
              <div className="cities__right-section">
                <section style={{ width: '100%' }} >
                  <CityMap
                    centerLocation={currentCity.location}
                    offers={offersByCity}
                    selectedOffer={activeCard}
                    height={800}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--index page__main--index-empty">
        <Cities cities={cities} currentCity={currentCity} />
        <MainEmpty cityName={currentCity.name}/>
      </main>
    </React.Fragment>
  );
}

export default MainScreen;
