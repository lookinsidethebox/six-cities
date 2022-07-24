import React from 'react';
import MainCard from '../../components/main-card/main-card';
import type { PropertyType } from '../../types/Property';

type CardListProps = {
  offers: PropertyType[];
};

function CardList({offers}: CardListProps) : JSX.Element {
  const [activeCardId, setActiveCardId] = React.useState<number>();

  return(
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <MainCard
            onMouseOver={() => setActiveCardId(offer.id)}
            key={offer.id}
            card={offer}
            isNear={false}
            activeCardId={activeCardId}
          />
        ))
      }
    </div>
  );
}

export default CardList;
