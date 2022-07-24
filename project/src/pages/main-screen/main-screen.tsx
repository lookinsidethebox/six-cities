import Cities from '../../components/cities/cities';
import CardList from '../../components/card-list/card-list';
import type { PropertyType } from '../../types/Property';

type MainScreenProps = {
  placesCount: number;
  placeName: string;
  cities: string[];
  offers: PropertyType[];
}

function MainScreen(props: MainScreenProps): JSX.Element {
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
            <CardList offers={props.offers} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
