import Cities from '../../components/cities/cities';
import MainCard from '../../components/main-card/main-card';
import CityMap from '../../components/map/map';
import { CityList } from '../../const';
import { useAppSelector } from '../../hooks';

function MainScreen(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const offersByCity = useAppSelector((state) => state.offers);

  if (offersByCity && offersByCity.length > 0) {
    return (
      <main className="page__main page__main--index">
        <Cities cities={CityList} currentCity={currentCity} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} places to stay in {currentCity.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {
                  offersByCity.map((offer) => (
                    <MainCard
                      key={offer.id}
                      card={offer}
                      isNearby={false}
                    />
                  ))
                }
              </div>
            </section>
            <div className="cities__right-section">
              <section style={{ width: '100%' }} >
                <CityMap
                  city={currentCity}
                  offers={offersByCity}
                  height={800}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <Cities cities={CityList} currentCity={currentCity} />
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
  );
}

export default MainScreen;
