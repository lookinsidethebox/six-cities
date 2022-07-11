import MainCard from '../../components/main-card/main-card';
import PropertyItem from '../../components/property-item/property-item';

function PropertyNotLoggedScreen() : JSX.Element{
  return (
    <main className="page__main page__main--property">
      <PropertyItem
        showReviews={false}
        isPremium
        isInBookmarks={false}
        name='Beautiful &amp; luxurious studio at great location'
        type='Apartment'
        bedrooms='3 Bedrooms'
        adults='Max 4 adults'
        hostName='Angelina'
        hostStatus='Pro'
        hostAvatarUrl='img/avatar-angelina.jpg'
        price={120}
        rating={4.8}
        imgUrls={['img/room.jpg','img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/studio-01.jpg','img/apartment-01.jpg']}
        propertyInside={['Wi-Fi','Washing machine','Towels','Heating','Coffee machine','Baby seat','Kitchen','Dishwasher','Cabel TV','Fridge']}
        description={['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
          'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.']}
        reviews={[]}
      />
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <MainCard
              isPremium={false}
              isInBookmarks
              imgUrl='img/room.jpg'
              price={80}
              name='Wood and stone place'
              type='Private room'
              isNear={false}
            />
            <MainCard
              isPremium={false}
              isInBookmarks={false}
              imgUrl='img/apartment-02.jpg'
              price={132}
              name='Canal View Prinsengracht'
              type='Apartment'
              isNear={false}
            />
            <MainCard
              isPremium
              isInBookmarks={false}
              imgUrl='img/apartment-03.jpg'
              price={180}
              name='Nice, cozy, warm big bed apartment'
              type='Apartment'
              isNear={false}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default PropertyNotLoggedScreen;
