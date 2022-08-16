import React from 'react';
import PropertyItem from '../../components/property-item/property-item';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';

function PropertyScreen() : JSX.Element {
  const { id } = useParams();

  if (id === undefined) {
    return (
      <NotFoundScreen />
    );
  }

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--property">
        <PropertyItem id={id} />
      </main>
    </React.Fragment>
  );
}

export default PropertyScreen;
