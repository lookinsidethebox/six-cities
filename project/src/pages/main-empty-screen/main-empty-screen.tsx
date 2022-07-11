import Cities from '../../components/cities/cities';

type MainEmptyScreenProps = {
  placeName: string;
  cities: string[];
}

function MainEmptyScreen(props: MainEmptyScreenProps) : JSX.Element {
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <Cities cities={props.cities} />
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {props.placeName}</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  );
}

export default MainEmptyScreen;
