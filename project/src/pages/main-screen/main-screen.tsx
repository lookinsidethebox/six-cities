import React from 'react';
import Cities from '../../components/cities/cities';
import MainCard from '../../components/main-card/main-card';
import CityMap from '../../components/map/map';
import Sorting from '../../components/sorting/sorting';
import Header from '../../components/header/header';
import { cities } from '../../mocks/cities';
import { useAppSelector } from '../../hooks';
import { PropertyType } from '../../types/Property';
import Spinner from '../../components/spinner/spinner';

function MainScreen(): JSX.Element {
  const [activeCard, setActiveCardId] = React.useState<PropertyType>();
  const currentCity = useAppSelector((state) => state.city);
  const offersByCity = useAppSelector((state) => state.offers);
  const offersLoaded = useAppSelector((state) => state.offersLoaded);

  if (!offersLoaded) {
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
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {currentCity.name}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default MainScreen;
