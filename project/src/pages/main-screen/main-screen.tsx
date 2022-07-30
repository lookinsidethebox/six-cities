import Cities from '../../components/cities/cities';
import MainCard from '../../components/main-card/main-card';
import CityMap from '../../components/map/map';
import type { PropertyType } from '../../types/Property';
import type { City } from '../../types/City';

type MainScreenProps = {
  placesCount: number;
  placeName: string;
  cities: City[];
  offers: PropertyType[];
}

const DEFAULT_CITY_ID = 4;

function GetOfferById(cities: City[], id: number) {
  return cities.find((x) => x.id === id) ??
    {
      id: DEFAULT_CITY_ID,
      name: 'Amsterdam',
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 10
      }
    };
}

function MainScreen(props: MainScreenProps): JSX.Element {
  const currentCity = GetOfferById(props.cities, DEFAULT_CITY_ID);

  return (
    <main className="page__main page__main--index">
      <Cities cities={props.cities} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{props.placesCount} places to stay in {props.placeName}</b>
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
                props.offers.map((offer) => (
                  <MainCard
                    key={offer.id}
                    card={offer}
                    isNear={false}
                  />
                ))
              }
            </div>
          </section>
          <div className="cities__right-section">
            <section style={{ width: '100%' }} >
              <CityMap
                city={currentCity}
                offers={props.offers}
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
