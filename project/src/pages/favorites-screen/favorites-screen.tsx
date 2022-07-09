import FavoriteLocation from '../../components/favorite-location/favorite-location';

function FavoritesScreen() : JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <FavoriteLocation city='Amsterdam' places={[
              {
                isPremium: true,
                imgUrl: 'img/apartment-small-03.jpg',
                name: 'Nice, cozy, warm big bed apartment',
                type: 'Apartment',
                price: 180
              },
              {
                isPremium: false,
                imgUrl: 'img/room-small.jpg',
                name: 'Wood and stone place',
                type: 'Private room',
                price: 80
              }]}
            />
            <FavoriteLocation city='Cologne' places={[
              {
                isPremium: false,
                imgUrl: 'img/apartment-small-04.jpg',
                name: 'White castle',
                type: 'Apartment',
                price: 180
              }]}
            />
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
